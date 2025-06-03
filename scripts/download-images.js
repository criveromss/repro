/**
 * Script pour télécharger les images du site Repromoselle
 * 
 * Ce script utilise puppeteer pour naviguer sur le site repromoselle.com,
 * extraire les images et les télécharger dans les dossiers appropriés.
 * 
 * Pour utiliser ce script :
 * 1. Installez les dépendances : npm install puppeteer fs-extra path
 * 2. Exécutez le script : node scripts/download-images.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const https = require('https');

// Configuration
const BASE_URL = 'https://www.repromoselle.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'services');

// Catégories et leurs URLs
const categories = [
  { name: 'imprimerie', url: '/', selector: 'img[src*="imprimerie"]' },
  { name: 'plv-exposition', url: '/', selector: 'img[src*="plv"]' },
  { name: 'signaletique', url: '/', selector: 'img[src*="signaletique"]' },
  { name: 'objets-publicitaires', url: '/', selector: 'img[src*="objets"]' },
  { name: 'reprographie', url: '/', selector: 'img[src*="reprographie"]' },
];

// Fonction pour télécharger une image
async function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    // Vérifier si l'URL est relative
    const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
    
    https.get(fullUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Échec du téléchargement: ${response.statusCode} ${response.statusMessage}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Image téléchargée: ${outputPath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(outputPath, () => {}); // Supprimer le fichier en cas d'erreur
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Fonction principale
async function main() {
  // Créer les dossiers de sortie s'ils n'existent pas
  for (const category of categories) {
    const dir = path.join(OUTPUT_DIR, category.name);
    await fs.ensureDir(dir);
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    for (const category of categories) {
      console.log(`Traitement de la catégorie: ${category.name}`);
      
      // Naviguer vers la page
      await page.goto(`${BASE_URL}${category.url}`, { waitUntil: 'networkidle2' });
      
      // Extraire les URLs des images
      const imageUrls = await page.evaluate((selector) => {
        const images = Array.from(document.querySelectorAll(selector));
        return images.map(img => img.src);
      }, category.selector);
      
      console.log(`Trouvé ${imageUrls.length} images pour ${category.name}`);
      
      // Télécharger chaque image
      for (let i = 0; i < imageUrls.length; i++) {
        const imageUrl = imageUrls[i];
        if (!imageUrl) continue;
        
        const filename = `${category.name}-${i + 1}${path.extname(imageUrl) || '.jpg'}`;
        const outputPath = path.join(OUTPUT_DIR, category.name, filename);
        
        try {
          await downloadImage(imageUrl, outputPath);
        } catch (error) {
          console.error(`Erreur lors du téléchargement de ${imageUrl}:`, error.message);
        }
      }
    }
  } catch (error) {
    console.error('Erreur:', error);
  } finally {
    await browser.close();
  }
}

// Exécuter le script
main().catch(console.error);

/**
 * Note: Ce script est fourni à titre d'exemple et peut nécessiter des ajustements
 * en fonction de la structure exacte du site repromoselle.com. Il est recommandé
 * de vérifier les sélecteurs et les URLs avant d'exécuter le script.
 * 
 * Pour un téléchargement manuel, suivez les instructions dans le fichier IMAGES.md.
 */ 