import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Nos réalisations - REPROMOSELLE',
  description: 'Découvrez les réalisations de REPROMOSELLE en imprimerie, PLV, exposition et signalétique pour divers secteurs d\'activité.',
};

export default function Realisations() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Nos réalisations</h1>
          <p className="text-lg max-w-3xl">
            Découvrez quelques-unes de nos réalisations pour des clients de divers secteurs d'activité.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Link href="/realisations/imprimerie" className="group">
              <div className="bg-gray-200 h-64 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#e22b25] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image imprimerie</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Imprimerie</h3>
              <p className="text-gray-600">Cartes de visite, flyers, affiches, brochures, dépliants et plus encore.</p>
            </Link>
            
            <Link href="/realisations/plv-exposition" className="group">
              <div className="bg-gray-200 h-64 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#e22b25] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image PLV</span>
              </div>
              <h3 className="text-xl font-bold mb-2">PLV & Exposition</h3>
              <p className="text-gray-600">Stands, roll-up, comptoirs, murs d'image et solutions d'exposition.</p>
            </Link>
            
            <Link href="/realisations/signaletique" className="group">
              <div className="bg-gray-200 h-64 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#e22b25] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image signalétique</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Signalétique</h3>
              <p className="text-gray-600">Enseignes, panneaux, habillage de vitrine et de véhicule.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Projets en vedette</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image projet</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Salon de l'habitat</h3>
                <p className="text-gray-600 mb-4">PLV & Solutions d'exposition</p>
                <p className="mb-4">
                  Nous avons réalisé l'ensemble des supports de communication pour le stand de notre client lors du Salon de l'Habitat : roll-up, comptoir d'accueil, mur d'image et documentation imprimée.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Roll-up</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Comptoir</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Mur d'image</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Flyers</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image projet</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Boutique Le Petit Gourmand</h3>
                <p className="text-gray-600 mb-4">Signalétique & Habillage de vitrine</p>
                <p className="mb-4">
                  Réalisation complète de l'identité visuelle de la boutique : enseigne extérieure, habillage de vitrine, signalétique intérieure et supports de communication.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Enseigne</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Vitrophanie</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Signalétique</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Cartes de visite</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image projet</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Festival de musique</h3>
                <p className="text-gray-600 mb-3">PLV & Signalétique événementielle</p>
                <p className="mb-4">
                  Création de l'ensemble des supports de communication pour un festival de musique local.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Affiches</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Flyers</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Bâches</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image projet</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Agence immobilière</h3>
                <p className="text-gray-600 mb-3">Imprimerie & Signalétique</p>
                <p className="mb-4">
                  Réalisation de l'identité visuelle complète d'une agence immobilière à Metz.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Enseigne</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Papeterie</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Vitrophanie</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image projet</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Flotte de véhicules</h3>
                <p className="text-gray-600 mb-3">Habillage de véhicules</p>
                <p className="mb-4">
                  Habillage complet d'une flotte de véhicules pour une entreprise de services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Covering</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Marquage</span>
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">Logo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos secteurs d'intervention</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Commerce</h3>
              <p>Boutiques, magasins, centres commerciaux</p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Événementiel</h3>
              <p>Salons, foires, expositions, festivals</p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Entreprises</h3>
              <p>PME, grands groupes, artisans, professions libérales</p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Collectivités</h3>
              <p>Mairies, communautés de communes, institutions publiques</p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Associations</h3>
              <p>Clubs sportifs, associations culturelles et caritatives</p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Restauration</h3>
              <p>Restaurants, bars, hôtels, traiteurs</p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">7</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Immobilier</h3>
              <p>Agences immobilières, promoteurs, constructeurs</p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg text-center">
              <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">8</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Autres secteurs</h3>
              <p>Santé, éducation, transport, industrie...</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e22b25] text-white py-16">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Vous avez un projet ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contactez-nous pour discuter de votre projet et découvrir comment REPROMOSELLE peut vous aider à le concrétiser.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
} 