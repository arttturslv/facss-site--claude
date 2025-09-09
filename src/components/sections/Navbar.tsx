import React from 'react';

const FACSSIcon = "assets/facss.svg";

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={FACSSIcon} alt="FACSS Logo" className="h-8 sm:h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-white hover:text-facss-green transition-colors focus:outline-none focus:ring-2 focus:ring-facss-green rounded-sm px-2 py-1"
            >
              Início
            </a>
            <a
              href="#solucoes"
              className="text-white hover:text-facss-green transition-colors focus:outline-none focus:ring-2 focus:ring-facss-green rounded-sm px-2 py-1"
            >
              Soluções
            </a>
            <a
              href="#contato"
              className="text-white hover:text-facss-green transition-colors focus:outline-none focus:ring-2 focus:ring-facss-green rounded-sm px-2 py-1"
            >
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-facss-green rounded p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2"
                    : "translate-y-1"
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 translate-y-2 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 translate-y-2"
                    : "translate-y-3"
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-48 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-gray-700">
            <a
              href="#inicio"
              className="block text-white hover:text-facss-green transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#solucoes"
              className="block text-white hover:text-facss-green transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Soluções
            </a>
            <a
              href="#contato"
              className="block text-white hover:text-facss-green transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};