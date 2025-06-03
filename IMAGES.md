# Guide pour l'intégration des images du site Repromoselle

Ce document explique comment télécharger et intégrer les images du site [repromoselle.com](https://www.repromoselle.com) dans le nouveau site web.

## 1. Structure des dossiers d'images

Les images sont organisées dans les dossiers suivants :

- `public/images/services/imprimerie` - Images pour les services d'imprimerie
- `public/images/services/plv-exposition` - Images pour les services PLV et exposition
- `public/images/services/signaletique` - Images pour les services de signalétique
- `public/images/services/objets-publicitaires` - Images pour les objets publicitaires
- `public/images/services/reprographie` - Images pour les services de reprographie

## 2. Comment télécharger les images du site Repromoselle

### Méthode 1 : Téléchargement direct depuis le navigateur

1. Visitez le site [repromoselle.com](https://www.repromoselle.com)
2. Naviguez vers la page contenant l'image que vous souhaitez télécharger
3. Faites un clic droit sur l'image et sélectionnez "Enregistrer l'image sous..."
4. Donnez un nom descriptif à l'image (ex: carte-visite-1.jpg)
5. Enregistrez l'image sur votre ordinateur

### Méthode 2 : Utilisation des outils de développement du navigateur

Pour des images de meilleure qualité ou des images qui ne peuvent pas être téléchargées directement :

1. Visitez le site [repromoselle.com](https://www.repromoselle.com)
2. Ouvrez les outils de développement (F12 ou clic droit > Inspecter)
3. Allez dans l'onglet "Network" (Réseau)
4. Rechargez la page
5. Filtrez par "img" ou "image" pour voir toutes les images chargées
6. Cliquez sur l'image souhaitée, puis sur l'URL pour l'ouvrir dans un nouvel onglet
7. Téléchargez l'image depuis cet onglet (clic droit > Enregistrer l'image sous...)

## 3. Préparation des images pour le site

Pour une utilisation optimale sur le site web :

1. Redimensionnez les images si nécessaire (taille recommandée : largeur maximale de 1200px)
2. Optimisez les images pour le web (compression) avec des outils comme [TinyPNG](https://tinypng.com/)
3. Utilisez des formats adaptés au web : JPEG pour les photos, PNG pour les images avec transparence, WebP pour une meilleure performance

## 4. Intégration des images dans le code

Les images sont déjà préparées dans le code avec le composant `Image` de Next.js. Il suffit de décommenter le code et de mettre à jour le chemin de l'image.

Exemple :

```jsx
{/* Remplacer par l'image réelle quand disponible */}
<span className="text-gray-400 text-lg absolute">Image carte de visite</span>
{/* 
<Image 
  src="/images/services/imprimerie/carte-visite.jpg"
  alt="Cartes de visite professionnelles"
  fill
  className="object-cover"
/>
*/}
```

Pour activer l'image, modifiez le code comme suit :

```jsx
{/* Supprimer ce placeholder quand l'image est disponible */}
{/* <span className="text-gray-400 text-lg absolute">Image carte de visite</span> */}
<Image 
  src="/images/services/imprimerie/carte-visite.jpg"
  alt="Cartes de visite professionnelles"
  fill
  className="object-cover"
/>
```

## 5. Liste des images à télécharger

Voici la liste des images à télécharger depuis le site Repromoselle, organisées par catégorie :

### Imprimerie
- Cartes de visite
- Affiches
- Flyers
- Dépliants
- Brochures
- Autocopiants
- Calendriers
- Autocollants
- Chemises / pochettes
- Enveloppes
- Papiers en-têtes
- Tampons

### PLV & Exposition
- Murs d'exposition (Pop-Up Fabric, Pop-up Impress Straight, etc.)
- Bannières (Roll-Up, Zipper-Wall Bannière, etc.)
- Comptoirs (Comptoir Professional Original, Comptoir Fabric, etc.)
- Drapeaux (Beach Flag Voile, Beach Flag Goutte, etc.)
- Porte-Affiche
- Affichages numériques
- Affichages lumineux

### Signalétique
- Signalétique extérieure et intérieure
- Enseignes Publicitaires
- Panneau chantier
- Habillage de palissade
- Chevalet
- Pré-enseigne
- Bi mât
- Habillage de voiture
- Habillage de vitrine

### Objets publicitaires
- Textiles
- Stylos et fournitures de bureau
- Goodies et événementiel
- Verres, gobelets, mugs et bouteilles
- Tapis d'entrée
- Sacs
- High-Tech

### Reprographie
- Thèses
- Tirage de plans
- Reliure par anneaux plastiques
- Reliure par anneaux métalliques
- Reliure dos carré collé
- Pliage ou rainage
- Agrafage
- Mise en classeur et mise sous chemise
- Plastification et pelliculage 