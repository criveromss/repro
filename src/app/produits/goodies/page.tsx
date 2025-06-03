import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Goodies & objets publicitaires - REPROMOSELLE',
  description: 'Découvrez notre gamme de goodies et objets publicitaires : stylos, fournitures de bureau, verres, high-tech et plus encore.',
};

export default function GoodiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Goodies & objets publicitaires</h1>
          <p className="text-lg max-w-3xl">
            Découvrez notre gamme complète d'objets publicitaires personnalisables pour promouvoir votre marque et fidéliser vos clients.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stylos et fournitures de bureau */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image stylos</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/stylo.jpg"
                  alt="Stylos et fournitures de bureau"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Stylos et fournitures de bureau</h3>
                <p className="text-gray-600 mb-4">
                  Large choix de stylos, blocs-notes, porte-documents et fournitures de bureau personnalisables avec votre logo.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Goodies et événementiel */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image goodies</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/goodies.jpg"
                  alt="Goodies et événementiel"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Goodies et événementiel</h3>
                <p className="text-gray-600 mb-4">
                  Objets promotionnels pour vos événements, salons et campagnes marketing : porte-clés, badges, bracelets, tours de cou, etc.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Verres, gobelets, mugs et bouteilles */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image mugs</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/mug.jpg"
                  alt="Verres, gobelets, mugs et bouteilles"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Verres, gobelets, mugs et bouteilles</h3>
                <p className="text-gray-600 mb-4">
                  Contenants personnalisables pour boissons chaudes ou froides : mugs, tasses, gobelets réutilisables, gourdes, bouteilles isothermes.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Tapis d'entrée */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image tapis</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/tapis.jpg"
                  alt="Tapis d'entrée"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Tapis d'entrée</h3>
                <p className="text-gray-600 mb-4">
                  Tapis d'entrée personnalisés avec votre logo ou message pour accueillir vos clients et visiteurs de manière professionnelle.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Sacs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image sacs</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/sac.jpg"
                  alt="Sacs"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sacs</h3>
                <p className="text-gray-600 mb-4">
                  Sacs personnalisables pour tous les usages : sacs shopping, sacs à dos, sacoches, pochettes, sacs de sport, sacs de voyage.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* High-Tech */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-64 relative">
                <span className="text-gray-400 text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Image high-tech</span>
                {/* 
                <Image 
                  src="/images/services/objets-publicitaires/high-tech.jpg"
                  alt="High-Tech"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">High-Tech</h3>
                <p className="text-gray-600 mb-4">
                  Accessoires high-tech personnalisables : clés USB, chargeurs, enceintes, casques audio, supports de téléphone, powerbanks.
                </p>
                <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline font-medium">
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
          <h2 className="text-3xl font-bold mb-6">Besoin d'objets publicitaires pour votre entreprise ?</h2>
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