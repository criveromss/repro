# Site Web Repromoselle

Ce projet est un site web pour Repromoselle, une entreprise spécialisée en imprimerie, PLV, signalétique et objets publicitaires.

## Structure du projet

Le site est développé avec Next.js et Tailwind CSS.

### Organisation des images

Les images sont organisées dans les dossiers suivants :

- `public/images/services/imprimerie` - Images pour les services d'imprimerie
- `public/images/services/plv-exposition` - Images pour les services PLV et exposition
- `public/images/services/signaletique` - Images pour les services de signalétique
- `public/images/services/objets-publicitaires` - Images pour les objets publicitaires
- `public/images/services/reprographie` - Images pour les services de reprographie

### Comment ajouter des images

1. Téléchargez les images depuis le site [repromoselle.com](https://www.repromoselle.com)
2. Renommez les images avec des noms descriptifs (ex: carte-visite-1.jpg, flyer-2.jpg)
3. Placez les images dans le dossier correspondant à la catégorie de service
4. Utilisez les images dans les composants React avec le chemin relatif :

```jsx
import Image from 'next/image';

// Exemple d'utilisation
<Image 
  src="/images/services/imprimerie/carte-visite-1.jpg" 
  alt="Carte de visite professionnelle" 
  width={300} 
  height={200} 
/>
```

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# repro
