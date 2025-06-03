import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Service Imprimerie - REPROMOSELLE',
  description: 'Découvrez nos services d\'imprimerie professionnelle : cartes de visite, flyers, affiches, brochures, dépliants et bien plus encore.',
};

export default function Imprimerie() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Service d'Imprimerie</h1>
          <p className="text-lg max-w-3xl">
            REPROMOSELLE vous propose une large gamme de services d'impression pour tous vos besoins en communication visuelle.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Services List */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Nos services d'impression</h2>
              
              <div className="space-y-12">
                {/* Cartes de visite */}
                <div className="border-b pb-8">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">Cartes de visite</h3>
                      <p className="mb-4">
                        Pour un meilleur rendu et une protection optimale, optez pour un pelliculage mat, brillant ou Soft Touch (peau de pêche).
                      </p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Format standard au choix : 80×50 mm / 85×50 mm / 80×55 mm / 85x55mm / 90×55 mm ou 90×60 mm</li>
                        <li>Impression recto ou recto verso</li>
                        <li>Formats de fichier : nous prenons en charge un grand nombre de formats mais nous vous conseillons le PDF</li>
                        <li>Pour une carte de visite recto-verso, utiliser de préférence un fichier PDF de deux pages</li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                      <div className="bg-gray-200 w-full h-64 flex items-center justify-center relative">
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
                      </div>
                    </div>
                  </div>
                </div>

                {/* Affiches */}
                <div className="border-b pb-8">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">Affiches</h3>
                      <p className="mb-4">
                        Besoin d'affiche ou poster de grande qualité pour décorer des bureaux, organiser une exposition ou animer un événement haut de gamme ? Nous vous conseillons nos affiches et nos posters de qualité supérieure.
                      </p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Formats au choix : du 21×29,7cm jusqu'au 300x400cm</li>
                        <li>Impression couleur recto sur papier : standard mat 120/170/200/250g – satiné photo du 200 à 300g – brillant photo du 170 à 300g – dos-bleu 135g dos-blanc 135g, etc…</li>
                        <li>Finition au choix : couché brillant, pelliculage mat ou brillant</li>
                      </ul>
                      <p className="mb-2 font-medium">Utilisations possibles :</p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>Publicités événementielles</li>
                        <li>Posters publicitaires</li>
                        <li>Bâches pour échafaudage</li>
                        <li>Vitrophanie</li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                      <div className="bg-gray-200 w-full h-64 flex items-center justify-center relative">
                        {/* Remplacer par l'image réelle quand disponible */}
                        <span className="text-gray-400 text-lg absolute">Image affiche</span>
                        {/* 
                        <Image 
                          src="/images/services/imprimerie/affiche.jpg"
                          alt="Affiches et posters de qualité"
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flyers */}
                <div className="border-b pb-8">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">Flyers</h3>
                      <p className="mb-4">
                        Grammage, format, design, etc… vous trouverez chez Repro Moselle toutes les ressources nécessaires à la conception et à la création de vos flyers de petite ou de grande taille.
                      </p>
                      <p className="mb-4">
                        Papier mat ou brillant, nous vous proposons une large gamme de papiers pour l'impression de vos flyers, ainsi qu'un grand nombre de formats. De nombreuses finitions sont également possibles pour des flyers originaux aux effets surprenants. Nous pouvons aussi les imprimer sur papier recyclé, tendance et respect de l'environnement.
                      </p>
                      <p>
                        Nous pouvons pelliculer vos flyers afin de renforcer leur aspect qualitatif sur le plan visuel et tactile, finition idéale pour d'élégantes plaquettes !
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                      <div className="bg-gray-200 w-full h-64 flex items-center justify-center relative">
                        {/* Remplacer par l'image réelle quand disponible */}
                        <span className="text-gray-400 text-lg absolute">Image flyers</span>
                        {/* 
                        <Image 
                          src="/images/services/imprimerie/flyer.jpg"
                          alt="Flyers personnalisés"
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dépliants */}
                <div className="border-b pb-8">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-4">Dépliants</h3>
                      <p className="mb-4">
                        Si vous souhaitez communiquer des informations importantes à vos clients ou invités dans un format pratique, le classique dépliant s'impose comme le support publicitaire parfait. Une fois le produit final visualisé et la conception graphique terminée, nous vous aidons à réaliser une impression impeccable.
                      </p>
                      <p className="mb-2 font-medium">Nous vous proposons divers types de pliures :</p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>Pli roulé</li>
                        <li>Pli accordéon</li>
                        <li>Pli fenêtre</li>
                      </ul>
                      <p>
                        Le type de pliure vous permet de déterminer la façon dont votre client lira le dépliant et ce qui sera au centre de l'attention. En plus de la marque, le regard devrait idéalement se porter sur un service phare ou des offres actuelles.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                      <div className="bg-gray-200 w-full h-64 flex items-center justify-center relative">
                        {/* Remplacer par l'image réelle quand disponible */}
                        <span className="text-gray-400 text-lg absolute">Image dépliant</span>
                        {/* 
                        <Image 
                          src="/images/services/imprimerie/depliant.jpg"
                          alt="Dépliants publicitaires"
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brochures */}
                <div className="border-b pb-8">
                  <h3 className="text-xl font-bold mb-4">Brochures</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Brochures pour associations</li>
                    <li>Bulletins municipaux</li>
                    <li>Documentation technique</li>
                    <li>Présentations scientifiques</li>
                    <li>Brochures pour congrès</li>
                  </ul>
                </div>

                {/* Autres produits */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Autres produits d'imprimerie</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <div className="bg-gray-200 h-48 w-full mb-4 flex items-center justify-center relative">
                        {/* Remplacer par l'image réelle quand disponible */}
                        <span className="text-gray-400 text-lg absolute">Image autocopiants</span>
                        {/* 
                        <Image 
                          src="/images/services/imprimerie/autocopiant.jpg"
                          alt="Blocs autocopiants"
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                      <h4 className="font-bold mb-2">Autocopiants</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Blocs de liasses autocopiantes en 2 feuillets, 3 feuillets jusqu'à 5 feuillets</li>
                        <li>Impression noir ou couleur</li>
                        <li>Numérotations, carnets de bons de commande, carnets bons de livraison, facturiers</li>
                      </ul>
                    </div>
                    <div className="flex flex-col">
                      <div className="bg-gray-200 h-48 w-full mb-4 flex items-center justify-center relative">
                        {/* Remplacer par l'image réelle quand disponible */}
                        <span className="text-gray-400 text-lg absolute">Image calendriers</span>
                        {/* 
                        <Image 
                          src="/images/services/imprimerie/calendrier.jpg"
                          alt="Calendriers personnalisés"
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                      <h4 className="font-bold mb-2">Calendriers</h4>
                      <p className="mb-2">Disponibles en 5 versions :</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Calendrier souple</li>
                        <li>Calendrier de poche</li>
                        <li>Calendrier contrecollé</li>
                        <li>Calendrier mural</li>
                        <li>Calendrier chevalet</li>
                      </ul>
                    </div>
                    <div className="flex flex-col">
                      <div className="bg-gray-200 h-48 w-full mb-4 flex items-center justify-center relative">
                        {/* Remplacer par l'image réelle quand disponible */}
                        <span className="text-gray-400 text-lg absolute">Image autocollants</span>
                        {/* 
                        <Image 
                          src="/images/services/imprimerie/autocollant.jpg"
                          alt="Autocollants personnalisés"
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                      <h4 className="font-bold mb-2">Autocollants</h4>
                      <p className="mb-1">Papiers ou vinyles, différentes finitions possibles :</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Opaque blanc ou transparent</li>
                        <li>Support papier adhésif mat ou brillant</li>
                        <li>Pelliculage de protection mat ou glacé</li>
                        <li>Découpe carrée, rectangulaire, ronde ou fantaisie</li>
                      </ul>
                    </div>
                    <div className="flex flex-col">
                      <div className="bg-gray-200 h-48 w-full mb-4 flex items-center justify-center relative">
                        {/* Remplacer par l'image réelle quand disponible */}
                        <span className="text-gray-400 text-lg absolute">Image pochettes</span>
                        {/* 
                        <Image 
                          src="/images/services/imprimerie/pochette.jpg"
                          alt="Chemises et pochettes"
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                      <h4 className="font-bold mb-2">Chemises / pochettes</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Impression en quadri haute définition</li>
                        <li>Format standard fermé 21,5×30,5 cm</li>
                        <li>Simple rainage et en recto simple</li>
                        <li>Possibilité de refente pour carte de visite</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="col-span-1">
              <div className="bg-gray-100 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Besoin d'un devis ?</h3>
                <p className="mb-6">
                  Contactez-nous pour discuter de votre projet d'impression et obtenir un devis personnalisé. Notre équipe est à votre disposition pour vous conseiller sur les meilleures solutions adaptées à vos besoins.
                </p>
                <Link href="/contact" className="w-full block text-center px-6 py-3 rounded-md font-medium transition-all duration-300 bg-[#e22b25] text-white hover:opacity-90">
                  Demander un devis
                </Link>
                
                <div className="mt-8 pt-8 border-t border-gray-300">
                  <h4 className="font-bold mb-3">Nos autres services</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/plv-exposition" className="text-[#e22b25] hover:underline">PLV & Exposition</Link>
                    </li>
                    <li>
                      <Link href="/services/signaletique" className="text-[#e22b25] hover:underline">Signalétique</Link>
                    </li>
                    <li>
                      <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline">Objets publicitaires</Link>
                    </li>
                    <li>
                      <Link href="/services/reprographie" className="text-[#e22b25] hover:underline">Reprographie</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e22b25] text-white py-16">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à lancer votre projet d'impression ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Que vous ayez besoin de cartes de visite, flyers, affiches ou brochures, notre équipe est prête à vous accompagner pour donner vie à vos idées.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
} 