import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact - REPROMOSELLE',
  description: 'Contactez REPROMOSELLE pour tous vos besoins en imprimerie, PLV, signalétique et objets publicitaires à Metz, en Moselle et au Luxembourg.',
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-lg max-w-3xl">
            Contactez-nous pour toute demande d'information ou pour discuter de votre projet.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e22b25] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e22b25] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e22b25] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e22b25] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e22b25] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e22b25] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    J'accepte que les informations saisies dans ce formulaire soient utilisées pour me recontacter dans le cadre de ma demande. *
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-[#e22b25] text-white hover:opacity-90"
                  >
                    Envoyer
                  </button>
                </div>
                <p className="text-sm text-gray-600">* Champs obligatoires</p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Adresse</h3>
                  <p className="mb-1">REPROMOSELLE</p>
                  <p className="mb-1">5 rue des Potiers d'Étain</p>
                  <p>57070 METZ</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact</h3>
                  <p className="mb-1">
                    <span className="font-medium">Téléphone :</span>{" "}
                    <a href="tel:+33387749090" className="text-[#e22b25] hover:underline">03 87 74 90 90</a>
                  </p>
                  <p>
                    <span className="font-medium">Email :</span>{" "}
                    <a href="mailto:contact@repromoselle.com" className="text-[#e22b25] hover:underline">contact@repromoselle.com</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Horaires d'ouverture</h3>
                  <p className="mb-1">
                    <span className="font-medium">Lundi au vendredi :</span> 8h30 - 12h00 | 13h30 - 17h30
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Nous trouver</h3>
                <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.9243551061793!2d6.1726853!3d49.0959663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1d8a0a0001%3A0x1cb3c3867a4d3d05!2s5%20Rue%20des%20Potiers%20d&#39;%C3%89tain%2C%2057070%20Metz!5e0!3m2!1sfr!2sfr!4v1654789542739!5m2!1sfr!2sfr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Link href="/services/imprimerie" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">Imprimerie</h3>
              <p className="text-gray-600">
                Cartes de visite, flyers, affiches, brochures, dépliants et bien plus encore.
              </p>
            </Link>
            
            <Link href="/services/plv-exposition" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">PLV & Exposition</h3>
              <p className="text-gray-600">
                Murs d'exposition, bannières, comptoirs, drapeaux et solutions d'affichage.
              </p>
            </Link>
            
            <Link href="/services/signaletique" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">Signalétique</h3>
              <p className="text-gray-600">
                Enseignes, panneaux, habillage de vitrine et de véhicule.
              </p>
            </Link>
            
            <Link href="/services/objets-publicitaires" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-3">Objets publicitaires</h3>
              <p className="text-gray-600">
                Textiles, stylos, goodies, verres, mugs et accessoires personnalisés.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2">Quels sont vos délais de livraison ?</h3>
              <p>
                Nos délais de livraison varient en fonction du type de produit et de la quantité commandée. Pour les travaux d'impression standards, comptez généralement 3 à 5 jours ouvrés. Pour des projets plus complexes ou des quantités importantes, nous vous communiquerons un délai précis lors de l'établissement du devis.
              </p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2">Proposez-vous des services de création graphique ?</h3>
              <p>
                Oui, notre équipe de graphistes peut vous accompagner dans la création ou l'adaptation de vos visuels. Que vous ayez besoin d'un logo, d'une mise en page ou d'une refonte complète de votre identité visuelle, nous sommes là pour vous conseiller et réaliser vos projets.
              </p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-xl font-bold mb-2">Livrez-vous dans toute la France ?</h3>
              <p>
                Oui, nous livrons dans toute la France métropolitaine. Pour les livraisons à l'international, n'hésitez pas à nous contacter pour connaître les modalités et les tarifs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Comment obtenir un devis ?</h3>
              <p>
                Vous pouvez demander un devis en remplissant notre formulaire de contact, en nous appelant au 03 87 74 90 90 ou en nous envoyant un email à contact@repromoselle.com. Plus votre demande sera précise (type de produit, quantité, format, etc.), plus notre devis sera rapide et précis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 