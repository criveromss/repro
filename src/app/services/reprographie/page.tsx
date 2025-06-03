import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Reprographie - REPROMOSELLE',
  description: 'Découvrez nos services de reprographie professionnelle : impression de documents, numérisation, reliure et façonnage pour tous vos besoins.',
};

export default function Reprographie() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Reprographie</h1>
          <p className="text-lg max-w-3xl">
            REPROMOSELLE vous propose des services de reprographie professionnelle pour tous vos besoins en impression et reproduction de documents.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Services List */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Nos services de reprographie</h2>
              
              <div className="space-y-12">
                {/* Impression de documents */}
                <div className="border-b pb-8">
                  <h3 className="text-xl font-bold mb-4">Impression de documents</h3>
                  <p className="mb-4">
                    Nous proposons des services d'impression de documents de haute qualité, adaptés à vos besoins spécifiques. Que vous ayez besoin d'imprimer des documents en noir et blanc ou en couleur, nous sommes là pour vous offrir des résultats professionnels.
                  </p>
                  <h4 className="font-bold mb-2">Nos options d'impression :</h4>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Impression noir et blanc</li>
                    <li>Impression couleur</li>
                    <li>Formats disponibles : A4, A3, A2, A1, A0</li>
                    <li>Différents grammages de papier</li>
                    <li>Impression recto ou recto-verso</li>
                    <li>Impression de plans et documents techniques</li>
                  </ul>
                  <p>
                    Notre équipement professionnel nous permet de réaliser des impressions de qualité supérieure, avec une excellente résolution et des couleurs fidèles.
                  </p>
                </div>

                {/* Numérisation */}
                <div className="border-b pb-8">
                  <h3 className="text-xl font-bold mb-4">Numérisation de documents</h3>
                  <p className="mb-4">
                    Transformez vos documents papier en fichiers numériques grâce à notre service de numérisation professionnel. Nous pouvons numériser une grande variété de documents, des petits formats aux grands formats.
                  </p>
                  <h4 className="font-bold mb-2">Avantages de la numérisation :</h4>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Conservation durable de vos documents</li>
                    <li>Gain de place et organisation facilitée</li>
                    <li>Partage et diffusion simplifiés</li>
                    <li>Recherche de contenu facilitée</li>
                    <li>Protection contre la perte ou la détérioration</li>
                  </ul>
                  <p className="mb-4">
                    Nous pouvons numériser tous types de documents : documents administratifs, plans techniques, archives, photos, etc.
                  </p>
                  <h4 className="font-bold mb-2">Formats de sortie disponibles :</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>PDF</li>
                    <li>JPEG</li>
                    <li>TIFF</li>
                    <li>PNG</li>
                  </ul>
                </div>

                {/* Reliure et façonnage */}
                <div className="border-b pb-8">
                  <h3 className="text-xl font-bold mb-4">Reliure et façonnage</h3>
                  <p className="mb-4">
                    Pour finaliser vos documents de manière professionnelle, nous proposons différentes solutions de reliure et de façonnage adaptées à vos besoins.
                  </p>
                  <h4 className="font-bold mb-2">Types de reliures disponibles :</h4>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Reliure spirale plastique</li>
                    <li>Reliure spirale métallique</li>
                    <li>Reliure thermocollée</li>
                    <li>Reliure à baguette</li>
                    <li>Reliure à anneaux</li>
                  </ul>
                  <h4 className="font-bold mb-2">Options de façonnage :</h4>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Pliage</li>
                    <li>Agrafage</li>
                    <li>Perforation</li>
                    <li>Massicotage</li>
                    <li>Plastification</li>
                  </ul>
                  <p>
                    Nos solutions de reliure et de façonnage sont idéales pour les rapports, les mémoires, les thèses, les présentations commerciales, les catalogues, etc.
                  </p>
                </div>

                {/* Impression de plans */}
                <div className="border-b pb-8">
                  <h3 className="text-xl font-bold mb-4">Impression de plans</h3>
                  <p className="mb-4">
                    Notre service d'impression de plans est spécialement conçu pour répondre aux besoins des professionnels de l'architecture, de l'ingénierie et de la construction. Nous imprimons vos plans avec une précision et une qualité exceptionnelles.
                  </p>
                  <h4 className="font-bold mb-2">Caractéristiques :</h4>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Impression grand format jusqu'à A0</li>
                    <li>Impression noir et blanc ou couleur</li>
                    <li>Différents supports disponibles (papier standard, calque, etc.)</li>
                    <li>Haute résolution pour une lecture précise des détails</li>
                    <li>Pliage de plans selon vos besoins</li>
                  </ul>
                  <p>
                    Que vous ayez besoin d'imprimer un plan unique ou une série complète pour un projet, nous garantissons un résultat professionnel et fidèle à vos fichiers originaux.
                  </p>
                </div>

                {/* Copies et photocopies */}
                <div className="border-b pb-8">
                  <h3 className="text-xl font-bold mb-4">Copies et photocopies</h3>
                  <p className="mb-4">
                    Pour vos besoins quotidiens ou ponctuels en copies et photocopies, nous mettons à votre disposition un service rapide et efficace.
                  </p>
                  <h4 className="font-bold mb-2">Notre service comprend :</h4>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Photocopies noir et blanc</li>
                    <li>Photocopies couleur</li>
                    <li>Formats A4, A3</li>
                    <li>Copies recto ou recto-verso</li>
                    <li>Réduction ou agrandissement</li>
                    <li>Différents grammages de papier</li>
                  </ul>
                  <p>
                    Notre service de photocopie est idéal pour les particuliers et les professionnels ayant besoin de reproduire rapidement des documents.
                  </p>
                </div>

                {/* Mise en page et PAO */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Mise en page et PAO</h3>
                  <p className="mb-4">
                    Nous proposons des services de mise en page et de Publication Assistée par Ordinateur (PAO) pour donner à vos documents un aspect professionnel et attractif.
                  </p>
                  <h4 className="font-bold mb-2">Nos services incluent :</h4>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Création et mise en page de documents</li>
                    <li>Traitement et retouche d'images</li>
                    <li>Conception graphique</li>
                    <li>Préparation de fichiers pour l'impression</li>
                    <li>Conversion de formats de fichiers</li>
                  </ul>
                  <p className="mb-4">
                    Notre équipe expérimentée peut vous aider à concevoir et mettre en page divers types de documents :
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Rapports et documents professionnels</li>
                    <li>Brochures et dépliants</li>
                    <li>Présentations</li>
                    <li>Affiches et posters</li>
                    <li>Cartes de visite et papeterie d'entreprise</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="col-span-1">
              <div className="bg-gray-100 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Besoin d'un devis ?</h3>
                <p className="mb-6">
                  Contactez-nous pour discuter de vos besoins en reprographie et obtenir un devis personnalisé. Notre équipe est à votre disposition pour vous conseiller sur les meilleures solutions adaptées à vos projets.
                </p>
                <Link href="/contact" className="w-full block text-center px-6 py-3 rounded-md font-medium transition-all duration-300 bg-[#e22b25] text-white hover:opacity-90">
                  Demander un devis
                </Link>
                
                <div className="mt-8 pt-8 border-t border-gray-300">
                  <h4 className="font-bold mb-3">Nos autres services</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/imprimerie" className="text-[#e22b25] hover:underline">Imprimerie</Link>
                    </li>
                    <li>
                      <Link href="/services/plv-exposition" className="text-[#e22b25] hover:underline">PLV & Exposition</Link>
                    </li>
                    <li>
                      <Link href="/services/signaletique" className="text-[#e22b25] hover:underline">Signalétique</Link>
                    </li>
                    <li>
                      <Link href="/services/objets-publicitaires" className="text-[#e22b25] hover:underline">Objets publicitaires</Link>
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
          <h2 className="text-3xl font-bold mb-6">Besoin de services de reprographie professionnels ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Que vous soyez un particulier, une entreprise ou une administration, notre équipe est prête à vous accompagner dans tous vos projets de reprographie.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
} 