import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Signalétique - REPROMOSELLE',
  description: 'Découvrez nos services de signalétique intérieure et extérieure : enseignes, panneaux, habillage de vitrine, véhicules et bien plus encore.',
};

export default function Signaletique() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Signalétique</h1>
          <p className="text-lg max-w-3xl">
            REPROMOSELLE vous propose une large gamme de solutions de signalétique intérieure et extérieure pour renforcer votre visibilité et votre image de marque.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Services List */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Nos solutions de signalétique</h2>
              
              <div className="space-y-16">
                {/* Signalétique extérieure et intérieure */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Signalétique extérieure et intérieure</h3>
                  <p className="mb-6">
                    Découvrez notre gamme de signalétique personnalisable, conçue pour répondre à une variété de besoins. Que vous recherchiez une signalétique informative et directionnelle, publicitaire, décorative ou pour des événements spéciaux, nous avons ce qu'il vous faut.
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Informative et Directionnelle</h4>
                      <p className="mb-4">
                        Nos panneaux de signalétique informative et directionnelle sont conçus pour guider vos visiteurs de manière claire et efficace. Assurez-vous que vos clients ou invités trouvent leur chemin facilement.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Publicitaire</h4>
                      <p className="mb-4">
                        Faites passer votre message avec impact grâce à notre signalétique publicitaire. Utilisez ces supports pour promouvoir votre entreprise, vos produits ou vos services de manière efficace.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Décorative</h4>
                      <p className="mb-4">
                        Ajoutez une touche d'esthétique à votre environnement avec notre signalétique décorative. Personnalisez le design pour qu'il corresponde à l'ambiance de votre espace.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Événementielle</h4>
                      <p className="mb-4">
                        Créez une atmosphère spéciale pour vos événements grâce à notre signalétique événementielle personnalisée. Mettez en avant le thème de votre événement et assurez-vous que tout le monde sache où se diriger.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enseignes Publicitaires */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Enseignes Publicitaires</h3>
                  <p className="mb-6">
                    Découvrez nos enseignes publicitaires personnalisables pour faire briller votre entreprise. Que vous souhaitiez attirer l'attention de vos clients ou promouvoir votre marque, nos enseignes sont conçues pour vous.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Visibilité Maximale</h4>
                      <p className="mb-4">
                        Mettez en avant votre entreprise avec une enseigne publicitaire personnalisée. Attirez les regards et assurez-vous que votre message soit clair et mémorable.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Personnalisation Impactante</h4>
                      <p className="mb-4">
                        Personnalisez votre enseigne avec votre logo, vos couleurs et votre message publicitaire pour une communication efficace.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Qualité et Durabilité</h4>
                      <p className="mb-4">
                        Nos enseignes sont conçues pour résister aux intempéries et à l'usure du temps. Elles sont durables et fiables.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Panneau chantier */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Panneau chantier</h3>
                  <p className="mb-6">
                    Découvrez nos panneaux de chantier personnalisables pour afficher votre projet de manière professionnelle. Que vous soyez dans la construction, la rénovation ou tout autre domaine, nos panneaux sont conçus pour répondre à vos besoins.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Communication Claire</h4>
                      <p className="mb-4">
                        Affichez votre projet de manière claire et professionnelle avec nos panneaux de chantier personnalisés. Assurez-vous que les passants comprennent l'ampleur et la nature de votre travail.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Personnalisation Facile</h4>
                      <p className="mb-4">
                        Personnalisez vos panneaux avec les détails de votre projet, le nom de votre entreprise et tout autre élément pertinent. Créez une communication visuelle cohérente.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Résistance aux Intempéries</h4>
                      <p className="mb-4">
                        Nos panneaux sont conçus pour résister aux conditions extérieures, garantissant ainsi leur durabilité tout au long du chantier.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Habillage de palissade */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Habillage de palissade</h3>
                  <p className="mb-6">
                    Découvrez notre service d'habillage de palissade personnalisé, une manière créative de transformer des espaces extérieurs en surfaces artistiques. Que ce soit pour embellir un chantier en construction, promouvoir un événement ou ajouter de l'art urbain à votre environnement, notre habillage de palissade offre des possibilités infinies.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Créativité en Plein Air</h4>
                      <p className="mb-4">
                        Exprimez votre créativité en personnalisant une palissade avec des images, des designs et des messages sur mesure. Transformez un espace ordinaire en une œuvre d'art en plein air.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Polyvalence</h4>
                      <p className="mb-4">
                        Notre habillage de palissade est adapté à une variété d'applications, que ce soit pour masquer un chantier, décorer un espace public ou ajouter une touche unique à un événement.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Installation Facile</h4>
                      <p className="mb-4">
                        Notre équipe expérimentée peut rapidement et facilement installer l'habillage de palissade, transformant ainsi un espace en un lieu visuellement attrayant.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chevalet */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Chevalet</h3>
                  <p className="mb-6">
                    Le Chevalet extérieur est un excellent moyen d'attirer l'attention des passants. Un système léger, facile à utiliser et permettant un échange rapide de posters. Idéal pour la publicité dans les hôtels, les magasins, les restaurants, les cafés ou lors d'événements.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Version économique</h4>
                      <p className="mb-4">
                        Chevalet 32 mm A1 et 70 x 100 cm, panneau arrière stable en métal, Film de protection antireflet résistant aux UV.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Chevalet Élégant en Acier</h4>
                      <p className="mb-4">
                        Design élégant et robuste en acier, film de protection des affiches avec bande magnétique pour changement facile des affiches, revêtu d'une finition noire élégante. Disponible en dimensions A1, 500mmx700mm, 700mmx1000mm.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pré-enseigne */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Pré-enseigne</h3>
                  <p className="mb-6">
                    Découvrez nos pré-enseignes personnalisables pour promouvoir votre entreprise de manière efficace et professionnelle. Que vous ayez besoin de signaler votre emplacement, d'attirer des clients ou de renforcer votre image de marque, nos pré-enseignes sont conçues pour répondre à vos besoins.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Visibilité Immédiate</h4>
                      <p className="mb-4">
                        Assurez-vous que les clients trouvent facilement votre entreprise grâce à nos pré-enseignes personnalisées. Elles garantissent une visibilité immédiate.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Personnalisation Simple</h4>
                      <p className="mb-4">
                        Personnalisez vos pré-enseignes avec votre nom, votre logo et des informations essentielles pour une communication claire et professionnelle.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Durabilité</h4>
                      <p className="mb-4">
                        Nos pré-enseignes sont conçues pour résister aux intempéries et à l'usure du temps, garantissant ainsi leur longévité.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bi mât */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Bi mât</h3>
                  <p className="mb-6">
                    Solution de signalétique robuste et professionnelle pour vos espaces extérieurs.
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Bi Mat en aluminium anodisé</li>
                    <li>Plusieurs dimensions disponibles (mm) : 1250 x 1000, 1250 x 1250, 1250 x 1500, 1500 x 1000, 1500 x 1250, 1500 x 1500</li>
                    <li>Plusieurs lattes pour marquage</li>
                    <li>Poteaux à gorge diamètre 90 mm + bouchons en aluminium anodisé</li>
                    <li>2 socles en acier galvanisé</li>
                  </ul>
                </div>

                {/* Habillage de voiture */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Habillage de voiture</h3>
                  <p className="mb-6">
                    Découvrez notre service d'habillage de voiture personnalisé, une façon audacieuse de transformer votre véhicule en une déclaration de style unique. Que vous souhaitiez promouvoir votre entreprise, personnaliser votre voiture ou participer à des événements spéciaux, notre habillage de voiture offre une personnalisation exceptionnelle.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Créativité sur Roues</h4>
                      <p className="mb-4">
                        Exprimez votre créativité en personnalisant votre voiture avec des graphiques, des designs et des messages sur mesure. Transformez votre véhicule en une œuvre d'art mobile.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Installation Professionnelle</h4>
                      <p className="mb-4">
                        Notre équipe d'experts assure une installation professionnelle et de haute qualité, garantissant que votre habillage de voiture soit impeccable.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Visibilité Maximale</h4>
                      <p className="mb-4">
                        Attirez l'attention partout où vous allez avec un véhicule qui se démarque. Notre habillage de voiture assure une visibilité maximale pour votre message ou votre marque.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Durabilité et Qualité</h4>
                      <p className="mb-4">
                        Nos matériaux sont conçus pour résister aux éléments extérieurs, assurant ainsi la durabilité de votre habillage de voiture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Habillage de vitrine */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Habillage de vitrine</h3>
                  <p className="mb-6">
                    Découvrez notre service d'habillage de vitrine personnalisé, une manière créative de transformer votre vitrine en une vitrine attrayante et mémorable. Que vous ayez besoin de promouvoir votre boutique, d'annoncer des promotions spéciales ou de créer une expérience visuelle unique, notre habillage de vitrine offre des possibilités infinies.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Créativité Visuelle</h4>
                      <p className="mb-4">
                        Exprimez votre créativité en personnalisant votre vitrine avec des graphiques, des images et des messages sur mesure. Transformez votre espace commercial en une œuvre d'art visuelle.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Installation Facile</h4>
                      <p className="mb-4">
                        Notre équipe expérimentée peut rapidement et facilement installer l'habillage de vitrine, transformant ainsi votre espace en un lieu visuellement attrayant.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Visibilité et Impact</h4>
                      <p className="mb-4">
                        Attirez l'attention de passants avec une vitrine qui se démarque. Notre habillage de vitrine garantit une visibilité maximale pour votre message ou votre marque.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Promotion Créative</h4>
                      <p className="mb-4">
                        Utilisez cet espace pour promouvoir vos produits, services ou événements de manière captivante.
                      </p>
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
                  Contactez-nous pour discuter de votre projet de signalétique et obtenir un devis personnalisé. Notre équipe est à votre disposition pour vous conseiller sur les meilleures solutions adaptées à vos besoins.
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
          <h2 className="text-3xl font-bold mb-6">Prêt à améliorer votre visibilité ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Que vous ayez besoin d'enseignes, de panneaux, d'habillage de vitrine ou de véhicule, notre équipe est prête à vous accompagner pour créer une signalétique efficace et impactante.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
} 