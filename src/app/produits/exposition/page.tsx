import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Solutions d\'exposition - REPROMOSELLE',
  description: 'Découvrez nos solutions d\'exposition : murs d\'exposition, bannières, comptoirs, drapeaux et plus encore pour vos événements professionnels.',
};

export default function ExpositionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Solutions d'exposition</h1>
          <p className="text-lg max-w-3xl">
            Découvrez notre gamme complète de solutions d'exposition pour vous démarquer lors de vos événements professionnels.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Murs d'exposition */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image mur d'exposition</span>
                {/* 
                <Image 
                  src="/images/services/plv-exposition/mur-exposition.jpg"
                  alt="Murs d'exposition"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Murs d'exposition</h3>
                <p className="text-gray-600 mb-4">
                  Solutions idéales pour créer un mur d'image impactant lors de vos salons et événements : Pop-Up Fabric, Pop-up Impress Straight, Zipper-Wall, etc.
                </p>
                <Link href="/services/plv-exposition" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Bannières */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image bannières</span>
                {/* 
                <Image 
                  src="/images/services/plv-exposition/banniere.jpg"
                  alt="Bannières"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bannières</h3>
                <p className="text-gray-600 mb-4">
                  Large choix de bannières pour tous vos événements : Roll-Up, Zipper-Wall Bannière, Zipper-Banner Triangle, Fabric Banner Sleeve, etc.
                </p>
                <Link href="/services/plv-exposition" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Comptoirs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image comptoirs</span>
                {/* 
                <Image 
                  src="/images/services/plv-exposition/comptoir.jpg"
                  alt="Comptoirs"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Comptoirs</h3>
                <p className="text-gray-600 mb-4">
                  Comptoirs d'accueil professionnels pour vos salons et événements : Comptoir Professional Original, Comptoir Fabric, Digital Counter, etc.
                </p>
                <Link href="/services/plv-exposition" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Drapeaux */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image drapeaux</span>
                {/* 
                <Image 
                  src="/images/services/plv-exposition/drapeau.jpg"
                  alt="Drapeaux"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Drapeaux</h3>
                <p className="text-gray-600 mb-4">
                  Drapeaux pour la promotion d'événements ou comme signalétique sur les stands : Beach Flag Voile, Beach Flag Goutte, Drapeau Rectangulaire, etc.
                </p>
                <Link href="/services/plv-exposition" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Porte-Affiche */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image porte-affiche</span>
                {/* 
                <Image 
                  src="/images/services/plv-exposition/porte-affiche.jpg"
                  alt="Porte-Affiche"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Porte-Affiche</h3>
                <p className="text-gray-600 mb-4">
                  Solutions économiques et pratiques pour présenter vos affiches en intérieur avec une présentation rapide et bon marché du poster.
                </p>
                <Link href="/services/plv-exposition" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Affichages numériques et lumineux */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image affichages numériques</span>
                {/* 
                <Image 
                  src="/images/services/plv-exposition/affichage-numerique.jpg"
                  alt="Affichages numériques"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Affichages numériques et lumineux</h3>
                <p className="text-gray-600 mb-4">
                  Solutions modernes et dynamiques pour vos messages : écrans totem, panneaux digitaux, light box, brightbox, colonnes lumineuses, etc.
                </p>
                <Link href="/services/plv-exposition" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e22b25] text-white py-16">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à vous démarquer lors de votre prochain événement ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé. Notre équipe est à votre disposition pour vous conseiller sur les meilleures solutions adaptées à vos besoins.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
} 