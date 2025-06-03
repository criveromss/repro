import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Nos Services - REPROMOSELLE',
  description: 'Découvrez tous les services proposés par REPROMOSELLE : imprimerie, PLV, exposition, signalétique, objets publicitaires et reprographie.',
};

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
          <p className="text-lg max-w-3xl">
            REPROMOSELLE vous propose une large gamme de services pour répondre à tous vos besoins en communication visuelle.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Imprimerie</h3>
                <p className="mb-4">
                  Cartes de visite, flyers, affiches, brochures, dépliants... Confiez-nous tous vos travaux d'impression pour un résultat de qualité professionnelle.
                </p>
                <Link href="/services/imprimerie" className="text-[#e22b25] font-medium flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">PLV & Exposition</h3>
                <p className="mb-4">
                  Murs d'exposition, bannières, comptoirs, drapeaux... Tous les supports nécessaires pour vous démarquer lors de vos événements.
                </p>
                <Link href="/services/plv-exposition" className="text-[#e22b25] font-medium flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Signalétique</h3>
                <p className="mb-4">
                  Enseignes, panneaux, habillage de vitrine et de véhicule... Une signalétique efficace pour renforcer votre visibilité.
                </p>
                <Link href="/services/signaletique" className="text-[#e22b25] font-medium flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Objets publicitaires</h3>
                <p className="mb-4">
                  Large gamme d'objets personnalisables pour promouvoir votre marque : stylos, mugs, textiles et bien plus.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] font-medium flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Reprographie</h3>
                <p className="mb-4">
                  Tirage de plans, impression de thèses, reliure, façonnage... Des solutions adaptées à vos besoins documentaires.
                </p>
                <Link href="/services/reprographie" className="text-[#e22b25] font-medium flex items-center">
                  En savoir plus
                  <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e22b25] text-white py-16">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'un devis ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé. Notre équipe est à votre disposition pour vous conseiller.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
} 