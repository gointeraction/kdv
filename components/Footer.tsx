import React from 'react';
import { LinkedInIcon, TwitterIcon, FacebookIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-bold text-lg">Kit Digital Venezuela</p>
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
            <p className="text-sm text-gray-400 mt-1">contacto@kdvinteligente.com</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;