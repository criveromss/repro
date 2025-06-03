# Intégration des images du site Repromoselle

Ce document résume les actions effectuées pour faciliter l'intégration des images du site [repromoselle.com](https://www.repromoselle.com) dans le nouveau site web.

## Structure mise en place

1. **Organisation des dossiers d'images** :
   - Création de dossiers spécifiques pour chaque catégorie de service dans `public/images/services/`
   - Ajout de fichiers `.gitkeep` pour conserver la structure des dossiers dans Git

2. **Préparation du code pour l'intégration des images** :
   - Modification de la page d'imprimerie pour inclure des emplacements pour les images
   - Utilisation du composant `Image` de Next.js avec des commentaires pour faciliter l'intégration

3. **Documentation** :
   - Création du fichier `IMAGES.md` avec des instructions détaillées sur le téléchargement et l'intégration des images
   - Liste des images à télécharger par catégorie

4. **Script de téléchargement automatique** :
   - Création du script `scripts/download-images.js` pour télécharger automatiquement les images
   - Ajout des dépendances nécessaires dans `package.json`

5. **Configuration Git** :
   - Mise à jour du fichier `.gitignore` pour exclure les images téléchargées du contrôle de version

## Comment utiliser cette configuration

### Option 1 : Téléchargement manuel des images

1. Suivez les instructions dans le fichier `IMAGES.md`
2. Téléchargez les images depuis le site repromoselle.com
3. Placez-les dans les dossiers appropriés
4. Décommentez les composants `Image` dans le code

### Option 2 : Téléchargement automatique des images

1. Installez les dépendances : `npm install`
2. Exécutez le script : `node scripts/download-images.js`
3. Vérifiez les images téléchargées et décommentez les composants `Image` dans le code

### Modification du fichier next.config.js

Le fichier `next.config.js` a été mis à jour pour supprimer l'option `swcMinify` qui n'est plus reconnue dans Next.js 15, ce qui résout l'erreur affichée dans les logs du serveur de développement.

## Prochaines étapes

1. Télécharger les images du site repromoselle.com
2. Intégrer les images dans les pages des services
3. Optimiser les images pour le web si nécessaire
4. Tester le site avec les images intégrées 