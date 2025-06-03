import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Notre entreprise - REPROMOSELLE',
  description: 'Découvrez REPROMOSELLE, votre spécialiste en imprimerie, PLV et signalétique à Metz depuis plus de 20 ans. Une équipe expérimentée à votre écoute.',
};

export default function Entreprise() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Notre entreprise</h1>
          <p className="text-lg max-w-3xl">
            Découvrez REPROMOSELLE, votre partenaire de confiance en imprimerie, PLV et signalétique depuis plus de 20 ans.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Qui sommes-nous ?</h2>
              <p className="mb-4">
                Imprimeur numérique grand format depuis plus de 20 ans, REPROMOSELLE a basé son développement sur une force d'innovation qui nous a permis de nous diversifier dans l'imprimerie, la PLV et la signalétique.
              </p>
              <p className="mb-4">
                La diversité de nos clients (collectivités, grands comptes, PME et TPE) nous amène à gérer au quotidien des demandes très variées, stimulant ainsi la créativité et l'expertise de nos équipes.
              </p>
              <p>
                Situés à Metz, en Moselle, nous intervenons également au Luxembourg et dans toute la région Grand Est pour vous accompagner dans tous vos projets d'impression et de communication visuelle.
              </p>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <span className="text-gray-400 text-lg">Image entreprise</span>
            </div>
          </div>

          {/* Notre mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Notre mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Qualité</h3>
                <p>
                  Nous nous engageons à fournir des produits et services de la plus haute qualité, en utilisant des équipements de pointe et des matériaux premium pour garantir votre satisfaction.
                </p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p>
                  Nous restons constamment à l'affût des dernières technologies et tendances du marché pour vous proposer des solutions innovantes adaptées à vos besoins spécifiques.
                </p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-[#e22b25] text-white flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Service client</h3>
                <p>
                  Nous mettons un point d'honneur à offrir un service client exceptionnel, avec une équipe réactive et à l'écoute pour vous accompagner tout au long de votre projet.
                </p>
              </div>
            </div>
          </div>

          {/* Nos valeurs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#e22b25] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professionnalisme</h3>
                  <p>
                    Nous abordons chaque projet avec rigueur et professionnalisme, en respectant les délais et en garantissant un résultat à la hauteur de vos attentes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#e22b25] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Créativité</h3>
                  <p>
                    Nous mettons notre créativité au service de vos projets pour vous proposer des solutions originales et efficaces qui vous démarqueront de la concurrence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#e22b25] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Réactivité</h3>
                  <p>
                    Nous comprenons l'importance des délais dans votre activité et nous nous engageons à être réactifs à chaque étape de votre projet.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#e22b25] text-white flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Responsabilité environnementale</h3>
                  <p>
                    Nous sommes conscients de notre impact sur l'environnement et nous mettons en œuvre des pratiques responsables pour le minimiser.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notre équipe */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Notre équipe</h2>
            <p className="text-center max-w-3xl mx-auto mb-10">
              REPROMOSELLE s'appuie sur une équipe de professionnels expérimentés et passionnés, dédiés à la réussite de vos projets. Chacun apporte son expertise spécifique pour vous offrir un service complet et de qualité.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Jean Dupont</h3>
                <p className="text-gray-600">Directeur</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Marie Martin</h3>
                <p className="text-gray-600">Responsable commerciale</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Pierre Leroy</h3>
                <p className="text-gray-600">Responsable production</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Sophie Bernard</h3>
                <p className="text-gray-600">Graphiste</p>
              </div>
            </div>
          </div>

          {/* Pourquoi nous choisir */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Pourquoi nous choisir ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Expertise</h3>
                <p>
                  Avec plus de 20 ans d'expérience dans le domaine de l'imprimerie et de la communication visuelle, nous avons développé une expertise solide qui nous permet de répondre efficacement à tous vos besoins.
                </p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Solutions complètes</h3>
                <p>
                  Nous vous proposons une gamme complète de services, de l'imprimerie traditionnelle à la PLV et la signalétique, en passant par les objets publicitaires. Un seul interlocuteur pour tous vos besoins.
                </p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Proximité</h3>
                <p>
                  Basés à Metz, nous sommes proches de nos clients de Moselle, du Luxembourg et de toute la région Grand Est. Cette proximité nous permet d'être réactifs et de vous offrir un service personnalisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e22b25] text-white py-16">
        <div className="px-4 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à collaborer avec nous ?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment REPROMOSELLE peut vous aider à le concrétiser.
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-white text-[#e22b25] hover:bg-gray-100">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
} 