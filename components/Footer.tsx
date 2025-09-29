import React from 'react';
import { LinkedInIcon, TwitterIcon, FacebookIcon } from './icons/Icons';
const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <img src="/logokdv2.svg" alt="Kit Digital Venezuela Logo" className="h-32 w-auto mb-2 mx-auto" />
            <p className="font-bold text-lg">Kit Digital Venezuela</p>
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
            <p className="text-sm text-gray-400 mt-1">kitdigitalvenezuela.com</p>
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