import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'PLV & Exposition - REPROMOSELLE',
  description: 'Découvrez nos solutions PLV et exposition : murs d\'exposition, bannières, comptoirs, drapeaux et plus encore pour vos événements professionnels.',
};

export default function PlvExposition() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">PLV & Exposition</h1>
          <p className="text-lg max-w-3xl">
            REPROMOSELLE vous propose une large gamme de solutions PLV et exposition pour vous démarquer lors de vos événements professionnels.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Services List */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Nos solutions PLV et exposition</h2>
              
              <div className="space-y-16">
                {/* Murs d'exposition */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Murs d'exposition</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Pop-Up Fabric</h4>
                      <p className="mb-4">Solution idéale pour créer un mur d'image impactant lors de vos salons et événements.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Fixation et remplacement faciles de l'imprimé en tissu</li>
                        <li>Installation sans outil en moins de 5 minutes</li>
                        <li>Choix entre un trolley ou un sac souple pour le transport</li>
                        <li>Dimensions disponibles : 2x3 (1510x2240mm), 3x3 (2240x2240mm), 4x3 (2970x2240mm), 5x3 (3700x2240mm)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Pop-up Impress Straight</h4>
                      <p className="mb-4">Le système SEG Pop-Up le plus solide du marché pour une présentation professionnelle.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Barres faciles à fixer avec rainures doubles de 14 mm de profondeur</li>
                        <li>Nombreuses dimensions disponibles, de 1x3 (772x2244mm) jusqu'à 8x4 (5921x2980mm)</li>
                        <li>Montage rapide et sans outils</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Zipper-Wall Straight</h4>
                      <p className="mb-4">Solution polyvalente pour créer un mur d'image droit et impactant.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Cadre tubulaire léger de 34 mm en aluminium</li>
                        <li>Pour une utilisation simple ou double-face</li>
                        <li>Livré avec un luxueux sac à roulette rembourré</li>
                        <li>Multiples dimensions disponibles</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Zipper-Wall Curved</h4>
                      <p className="mb-4">Le Zipper-Wall le plus populaire avec une courbe douce pour un impact visuel optimal.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Cadre tubulaire léger en aluminium</li>
                        <li>Durable et facile à utiliser</li>
                        <li>Dimensions disponibles : 3000x2300mm, 4000x2300mm, 5000x2300mm</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Zipper-Wall Moon</h4>
                      <p className="mb-4">Créez très facilement un espace séparé avec un look professionnel, idéal pour des conversations en one-to-one avec des clients.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Cadre tubulaire léger en aluminium</li>
                        <li>Coin salon portable</li>
                        <li>Stable et autonome</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Flex Wall</h4>
                      <p className="mb-4">Une super paroi de fond publicitaire, adaptée à tous les budgets.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Réglable en hauteur et en largeur grâce aux piquets télescopiques</li>
                        <li>Système léger, simple à transporter et à déplacer</li>
                        <li>Dimensions : 2400x2350mm, 3000x2350mm</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bannières */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Bannières</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Roll-Up</h4>
                      <p className="mb-4">Solution économique et fiable pour vos communications événementielles.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Extrêmement fiable</li>
                        <li>Hauteur réglable avec un mât optionnel</li>
                        <li>Bannière abordable pour une utilisation promotionnelle ou basée sur un projet</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Zipper-Wall Bannière</h4>
                      <p className="mb-4">Bannière double-face luxueuse pour un impact visuel maximal.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Fixation avec un revêtement en tissu lisse et infroissable</li>
                        <li>Peut être entièrement démontée pour faciliter le transport</li>
                        <li>Tubes d'un Ø de 34 mm en aluminium anodisé</li>
                        <li>Dimensions : 1000x2000mm, 600x1500mm, 800x2000mm</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Zipper-Banner Triangle</h4>
                      <p className="mb-4">Laissez une méga-impression avec une hauteur de près de 2,6 m.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Installation facile et rapide grâce à l'assemblage sans outils</li>
                        <li>Drapeau et bannière en un seul produit</li>
                        <li>Présentoir en tissu double face à la forme innovante</li>
                        <li>Parfait pour une utilisation en intérieur dans les centres commerciaux, les expositions, les écoles, les aéroports, etc.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Fabric Banner Sleeve</h4>
                      <p className="mb-4">Conception innovante, double-face, pour attirer l'attention sur votre promotion.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Système léger avec montage sans outil</li>
                        <li>Une solution de bannière économique</li>
                        <li>Dimensions : 400x1800mm, 600x2000mm, 800x2200mm, 850x2200mm</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Roll-Banner Open Air</h4>
                      <p className="mb-4">Solution adaptée à un usage extérieur pour une visibilité maximale.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Banderole roulante de 85 cm de large avec 2 pieds</li>
                        <li>Hauteur la plus fréquemment utilisée de 200 cm</li>
                        <li>Embouts latéraux en plastique noir</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Comptoirs */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Comptoirs</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Comptoir Professional Original</h4>
                      <p className="mb-4">Comptoir d'accueil professionnel pour vos salons et événements.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Extrêmement stable en raison de sa forme incurvée</li>
                        <li>Beaucoup d'espace pour la présentation et le stockage</li>
                        <li>Tablette en bois en option</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Comptoir Fabric</h4>
                      <p className="mb-4">Le petit frère du Pop-up Fabric, avec la même méthode et la même facilité d'utilisation.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Doté d'un velcro sur le cadre pour fixer facilement le visuel</li>
                        <li>Choix de couleur de plateau selon votre présentation</li>
                        <li>Équipé de base d'une étagère et d'une tablette en bois</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Digital Counter</h4>
                      <p className="mb-4">Comptoir premium avec affichage numérique pour une communication dynamique.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Orientation paysage ou portrait pour l'écran</li>
                        <li>Assemblage facile</li>
                        <li>Modèle standard avec visuels noirs latéraux (SEG)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Counter Easy Oval</h4>
                      <p className="mb-4">Design élégant et pratique pour vos événements.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Design mince de forme ovale</li>
                        <li>Sac de transport inclus pour faciliter le transport</li>
                        <li>Promotion infroissable grâce au tissu extensible Silicone Edge Graphic (SEG)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Drapeaux */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Drapeaux</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Beach Flag Voile</h4>
                      <p className="mb-4">Ce modèle de drapeau est utilisé pour la promotion d'événements sportifs ou comme signalétique sur les stands de foire et salons.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Taille S : Hauteur 290cm, Voile 55x226cm</li>
                        <li>Taille M : Hauteur 340cm, Voile 65x272cm</li>
                        <li>Taille L : Hauteur 400cm, Voile 75.5x351cm</li>
                        <li>Taille XL : Hauteur 500cm, Voile 75.5x417cm</li>
                        <li>Taille XXL : Hauteur 600cm, Voile 90x516cm</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Beach Flag Goutte</h4>
                      <p className="mb-4">Drapeau en forme de goutte pour une visibilité optimale lors de vos événements.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Taille S : Hauteur 245cm, Voile 75x194cm</li>
                        <li>Taille M : Hauteur 300cm, Voile 92x228cm</li>
                        <li>Taille L : Hauteur 350cm, Voile 103x298cm</li>
                        <li>Taille XL : Hauteur 440cm, Voile 132x352cm</li>
                        <li>Taille XXL : Hauteur 540cm, Voile 145x446cm</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Drapeau Rectangulaire</h4>
                      <p className="mb-4">Drapeau 100% polyester brillant, poids 115g/m2 et maille bloquée. Impression par sublimation.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Taille S : Hauteur 220cm, Voile 70x180cm</li>
                        <li>Taille M : Hauteur 340cm, Voile 70x280cm</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Drapeau vertical</h4>
                      <p className="mb-4">Plusieurs options de fixation disponibles pour s'adapter à vos besoins.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Drapeau vertical avec Fourreau et sangles (fixation en haut ou en haut et en bas)</li>
                        <li>Drapeau vertical avec Fourreau et œillets (fixation en haut ou en haut et en bas)</li>
                        <li>Drapeau vertical sans fourreau et avec sangles</li>
                        <li>Drapeau vertical sans fourreau, avec œillets</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Drapeau horizontal</h4>
                      <p className="mb-4">Drapeau horizontal avec anneaux, idéal pour une utilisation en extérieur.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Tissu 100% polyester, 115 g/m2, spécial pour extérieur</li>
                        <li>Impression par sublimation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Porte-Affiche */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Porte-Affiche</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Porte-Affiche intérieur</h4>
                      <p className="mb-4">Solution économique et pratique pour présenter vos affiches en intérieur.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Présentation rapide et bon marché du poster</li>
                        <li>Rail à pression de 25 mm en haut et en bas</li>
                        <li>Transport et montage faciles</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Affichages numériques et lumineux */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Affichages numériques et lumineux</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Affichages numériques</h4>
                      <p className="mb-4">Solutions modernes et dynamiques pour partager vos messages et informations.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Smart Line Écran Totem : Look élégant sans cadre, disponible en 43" ou 55"</li>
                        <li>Écran Totem Slim : Design fin et élégant avec un corps de 70 mm d'épaisseur</li>
                        <li>Smart Line Écran Totem Rack : Avec porte-brochures intégré</li>
                        <li>Smart Line Chevalet Digital : Version numérique du stop-trottoir classique</li>
                        <li>Smart Line Panneau Digital : Design minimaliste et moderne pour affichage mural</li>
                        <li>Panneau Digital Mural : Solution idéale pour restaurants, écoles et hôtels</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Affichages lumineux</h4>
                      <p className="mb-4">Solutions d'affichage rétroéclairées pour un impact visuel maximal.</p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Light Boxe : Cadre stable de 80 mm avec fixation facile des visuels en tissu</li>
                        <li>Brightbox XL : Alternative économique pour les promotions à court terme</li>
                        <li>Comptoir Brightbox : Avec connecteurs électriques intégrés dans le cadre</li>
                        <li>Colonne lumineuse ARCUATO® : Totem lumineux incurvé autonome</li>
                        <li>LED Totem Lumière Column : Boîtier lumineux plat et autonome</li>
                        <li>Porte-Affiche Premium LED : Solutions pour intérieur et extérieur</li>
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
                  Contactez-nous pour discuter de votre projet d'exposition et obtenir un devis personnalisé. Notre équipe est à votre disposition pour vous conseiller sur les meilleures solutions adaptées à vos besoins.
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
          <h2 className="text-3xl font-bold mb-6">Prêt à vous démarquer lors de votre prochain événement ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Que vous participiez à un salon professionnel, une foire commerciale ou tout autre événement, nos solutions PLV et exposition vous aideront à attirer l'attention et à valoriser votre marque.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
} 