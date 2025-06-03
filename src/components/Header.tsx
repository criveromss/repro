"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.svg" alt="REPROMOSELLE Logo" width={150} height={45} priority />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="font-medium hover:text-[#e22b25]">
              Accueil
            </Link>
            <Link href="/entreprise" className="font-medium hover:text-[#e22b25]">
              Notre entreprise
            </Link>
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('services')}
                className="font-medium hover:text-[#e22b25] flex items-center"
              >
                Services
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <Link href="/services/imprimerie" className="block px-4 py-2 hover:bg-gray-100">
                    Imprimerie
                  </Link>
                  <Link href="/services/plv-exposition" className="block px-4 py-2 hover:bg-gray-100">
                    PLV & Exposition
                  </Link>
                  <Link href="/services/signaletique" className="block px-4 py-2 hover:bg-gray-100">
                    Signalétique
                  </Link>
                  <Link href="/services/objets-publicitaires" className="block px-4 py-2 hover:bg-gray-100">
                    Objets publicitaires
                  </Link>
                  <Link href="/services/reprographie" className="block px-4 py-2 hover:bg-gray-100">
                    Reprographie
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('produits')}
                className="font-medium hover:text-[#e22b25] flex items-center"
              >
                Produits
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === 'produits' && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
                  <Link href="/produits/impression" className="block px-4 py-2 hover:bg-gray-100">
                    Impression
                  </Link>
                  <Link href="/produits/exposition" className="block px-4 py-2 hover:bg-gray-100">
                    Solutions d'exposition
                  </Link>
                  <Link href="/produits/signaletique" className="block px-4 py-2 hover:bg-gray-100">
                    Signalétique
                  </Link>
                  <Link href="/produits/textiles" className="block px-4 py-2 hover:bg-gray-100">
                    Textiles personnalisés
                  </Link>
                  <Link href="/produits/goodies" className="block px-4 py-2 hover:bg-gray-100">
                    Goodies & objets publicitaires
                  </Link>
                </div>
              )}
            </div>
            <Link href="/realisations" className="font-medium hover:text-[#e22b25]">
              Réalisations
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-[#e22b25] text-white hover:opacity-90">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="mt-4 pt-4 border-t border-gray-200 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-medium hover:text-[#e22b25]">
                Accueil
              </Link>
              <Link href="/entreprise" className="font-medium hover:text-[#e22b25]">
                Notre entreprise
              </Link>
              <div className="py-2">
                <p className="font-medium mb-2">Services</p>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/services/imprimerie" className="hover:text-[#e22b25]">
                    Imprimerie
                  </Link>
                  <Link href="/services/plv-exposition" className="hover:text-[#e22b25]">
                    PLV & Exposition
                  </Link>
                  <Link href="/services/signaletique" className="hover:text-[#e22b25]">
                    Signalétique
                  </Link>
                  <Link href="/services/objets-publicitaires" className="hover:text-[#e22b25]">
                    Objets publicitaires
                  </Link>
                  <Link href="/services/reprographie" className="hover:text-[#e22b25]">
                    Reprographie
                  </Link>
                </div>
              </div>
              <div className="py-2">
                <p className="font-medium mb-2">Produits</p>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/produits/impression" className="hover:text-[#e22b25]">
                    Impression
                  </Link>
                  <Link href="/produits/exposition" className="hover:text-[#e22b25]">
                    Solutions d'exposition
                  </Link>
                  <Link href="/produits/signaletique" className="hover:text-[#e22b25]">
                    Signalétique
                  </Link>
                  <Link href="/produits/textiles" className="hover:text-[#e22b25]">
                    Textiles personnalisés
                  </Link>
                  <Link href="/produits/goodies" className="hover:text-[#e22b25]">
                    Goodies & objets publicitaires
                  </Link>
                </div>
              </div>
              <Link href="/realisations" className="font-medium hover:text-[#e22b25]">
                Réalisations
              </Link>
              <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-all duration-300 bg-[#e22b25] text-white hover:opacity-90 text-center">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
      
      {/* Overlay to close dropdowns when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-0"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
    </header>
  );
};

export default Header; 