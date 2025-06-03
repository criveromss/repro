import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Objets Publicitaires - REPROMOSELLE',
  description: 'Découvrez notre gamme d\'objets publicitaires personnalisables : textiles, stylos, goodies, verres, mugs, tapis, sacs et accessoires high-tech.',
};

export default function ObjetsPub() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Objets Publicitaires</h1>
          <p className="text-lg max-w-3xl">
            REPROMOSELLE vous propose une large gamme d'objets publicitaires personnalisables pour promouvoir votre marque et renforcer votre image de marque.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Column - Services List */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Nos objets publicitaires personnalisables</h2>
              
              <div className="space-y-16">
                {/* Événements */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Événements</h3>
                  <p className="mb-6">
                    Habillez vos événements selon vos couleurs avec notre gamme d'objets promotionnels personnalisables. Pour concevoir un événement à votre image, nous vous proposons une large sélection d'articles qui vous permettront de vous démarquer.
                  </p>
                  <p className="mb-4">
                    Nos objets publicitaires pour événements sont parfaits pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Salons professionnels et foires commerciales</li>
                    <li>Séminaires et conférences</li>
                    <li>Lancements de produits</li>
                    <li>Événements d'entreprise</li>
                    <li>Opérations de street marketing</li>
                  </ul>
                </div>

                {/* Textiles */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Textiles</h3>
                  <p className="mb-6">
                    Découvrez notre gamme de textiles personnalisables, parfaits pour toutes les occasions. Que vous recherchiez des tee-shirts, des bonnets ou des vêtements de travail, nous avons ce qu'il vous faut pour créer des articles uniques et personnalisés.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Variété de Supports</h4>
                      <p className="mb-4">
                        Choisissez parmi une variété de supports de qualité, du coton confortable aux tissus techniques résistants. Chacun de nos textiles est conçu pour offrir un confort exceptionnel et une durabilité optimale.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Personnalisation Sans Limites</h4>
                      <p className="mb-4">
                        Avec notre service d'impression personnalisée, vous avez la liberté totale de concevoir votre propre design. Imprimez votre logo, un message spécial, ou même une illustration unique. Nous offrons une impression de haute qualité pour que votre design se démarque.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Produits disponibles</h4>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        <li>T-shirts et polos</li>
                        <li>Sweatshirts et vestes</li>
                        <li>Casquettes et bonnets</li>
                        <li>Vêtements de travail</li>
                        <li>Accessoires textiles</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Stylos et fournitures de bureau */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Stylos et fournitures de bureau</h3>
                  <p className="mb-6">
                    Découvrez notre sélection de stylos et fournitures de bureau personnalisables, parfaits pour ajouter une touche d'originalité à votre espace de travail. Que vous ayez besoin de stylos de qualité pour vos réunions ou de fournitures de bureau uniques pour votre entreprise, nous avons ce qu'il vous faut.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Stylos Personnalisés</h4>
                      <p className="mb-4">
                        Exprimez votre style avec nos stylos personnalisés. Choisissez parmi une variété de modèles élégants et de couleurs vibrantes pour créer l'accessoire d'écriture parfait. Ajoutez votre nom, le logo de votre entreprise ou un message spécial pour une personnalisation unique.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Fournitures de Bureau Uniques</h4>
                      <p className="mb-4">
                        Notre gamme de fournitures de bureau va au-delà du banal. De blocs-notes avec des designs personnalisés à des porte-stylos uniques, nous proposons des articles qui se démarquent. Mettez en avant votre entreprise avec des fournitures de bureau qui reflètent votre identité.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Idéal pour les Entreprises</h4>
                      <p className="mb-4">
                        Personnalisez vos stylos et fournitures de bureau avec le logo de votre entreprise pour une promotion efficace. Offrez-les à vos clients ou à vos employés comme des cadeaux promotionnels ou des articles de bureau de qualité.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Goodies et événementiel */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Goodies et événementiel</h3>
                  <p className="mb-6">
                    Découvrez nos goodies et articles événementiels personnalisés pour ajouter une touche spéciale à vos occasions spéciales. Que ce soit pour un événement d'entreprise, une fête ou une célébration, nous avons ce qu'il vous faut pour marquer le moment.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Goodies Personnalisés</h4>
                      <p className="mb-4">
                        Impressionnez vos invités avec des goodies personnalisés. Choisissez parmi une variété d'articles amusants et utiles, du tote bag au porte-clés. Ajoutez votre logo, un message spécial ou un design unique pour créer des souvenirs inoubliables.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Événementiel Unique</h4>
                      <p className="mb-4">
                        Faites de votre événement quelque chose de mémorable avec nos articles événementiels personnalisés. Des bracelets aux drapeaux, nous avons des options pour tous les types d'événements.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Promotion Efficace</h4>
                      <p className="mb-4">
                        Utilisez nos goodies personnalisés comme des outils de promotion efficaces. Offrez-les à vos clients ou à vos invités pour faire passer votre message.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verres, gobelets, mugs et bouteilles */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Verres, gobelets, mugs et bouteilles</h3>
                  <p className="mb-6">
                    Explorez notre sélection de verres, gobelets, mugs et bouteilles personnalisables, parfaits pour ajouter une touche personnelle à vos boissons préférées et à vos événements spéciaux. Que vous recherchiez des verres à vin élégants, des mugs pratiques ou des bouteilles réutilisables, nous avons ce qu'il vous faut pour créer des articles uniques.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Personnalisation Sans Limite</h4>
                      <p className="mb-4">
                        Exprimez votre style en personnalisant vos verres, gobelets, mugs et bouteilles. Ajoutez votre nom, un message spécial, ou même un design unique pour une expérience de boisson personnalisée.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Adaptés à Tous les Usages</h4>
                      <p className="mb-4">
                        Que ce soit pour des cocktails lors d'un événement spécial ou pour votre café du matin, nos articles sont adaptés à toutes les occasions.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Écologiques</h4>
                      <p className="mb-4">
                        Optez pour des solutions durables en choisissant nos bouteilles réutilisables. Contribuez à la réduction des déchets plastiques tout en affichant votre style.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tapis d'entrée */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Tapis d'entrée</h3>
                  <p className="mb-6">
                    Que ce soit pour votre entreprise ou votre foyer, nos tapis offrent une première impression mémorable.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Personnalisation Facile</h4>
                      <p className="mb-4">
                        Ajoutez une touche personnelle en personnalisant votre tapis d'entrée. Choisissez un design qui correspond à votre style ou affichez le logo de votre entreprise pour une entrée professionnelle.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Marquez l'Accueil</h4>
                      <p className="mb-4">
                        Créez une première impression mémorable avec un tapis d'entrée personnalisé. Accueillez vos invités avec élégance et professionnalisme.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Variété de Tailles et Styles</h4>
                      <p className="mb-4">
                        Choisissez parmi une variété de tailles et de styles pour correspondre à vos besoins et à votre espace.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sacs */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">Sacs</h3>
                  <p className="mb-6">
                    Découvrez notre gamme de sacs personnalisables, parfaits pour ajouter une touche personnelle à votre style et à votre utilité quotidienne. Que vous ayez besoin d'une sacoche élégante pour votre ordinateur portable ou d'un sac à dos pratique pour vos aventures, nous avons ce qu'il vous faut.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Personnalisation Unique</h4>
                      <p className="mb-4">
                        Exprimez-vous en personnalisant votre sac, votre sacoche d'ordinateur ou votre sac à dos. Ajoutez votre nom, un message spécial ou un design unique pour un accessoire qui vous ressemble.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Fonctionnalité et Style</h4>
                      <p className="mb-4">
                        Nos sacs sont conçus pour allier fonctionnalité et style. Transportez vos affaires en toute commodité tout en affichant votre personnalité.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Adaptés à Toutes les Occasions</h4>
                      <p className="mb-4">
                        Que ce soit pour le travail, les voyages, l'école ou simplement pour transporter vos essentiels, nos sacs sont polyvalents et adaptés à toutes les occasions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* High-Tech */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">High-Tech</h3>
                  <p className="mb-6">
                    Explorez notre gamme de produits high-tech personnalisables, parfaits pour améliorer votre expérience numérique tout en reflétant votre style. Que vous recherchiez un casque audio de qualité, une batterie externe fiable ou un support élégant pour votre téléphone ou tablette, nous avons ce qu'il vous faut.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-3">Personnalisation Personnelle</h4>
                      <p className="mb-4">
                        Exprimez-vous en personnalisant votre casque, votre batterie externe ou votre support pour téléphone/tablette. Ajoutez votre nom, un message spécial ou un design unique pour des accessoires qui vous correspondent.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Polyvalence au Quotidien</h4>
                      <p className="mb-4">
                        Que ce soit pour écouter de la musique, regarder des vidéos, recharger vos appareils ou faciliter votre utilisation des smartphones et tablettes, nos produits high-tech sont polyvalents et adaptés à toutes les situations.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Design Épuré</h4>
                      <p className="mb-4">
                        Optez pour un design épuré et élégant qui complète votre style personnel. Nos produits high-tech sont conçus pour être à la fois fonctionnels et esthétiques.
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
                  Contactez-nous pour discuter de vos besoins en objets publicitaires et obtenir un devis personnalisé. Notre équipe est à votre disposition pour vous conseiller sur les meilleures solutions adaptées à vos objectifs.
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
          <h2 className="text-3xl font-bold mb-6">Prêt à promouvoir votre marque ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Nos objets publicitaires personnalisés sont le moyen idéal pour renforcer votre image de marque et laisser une impression durable auprès de vos clients et partenaires.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
} 