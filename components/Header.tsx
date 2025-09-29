import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from './icons/Icons';
import type { NavLink } from '../types';

interface HeaderProps {
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }

  const getIsActive = (link: NavLink) => {
    const currentBasePath = currentPath.split('#')[0] || '/';
    
    // Check if any sublink is active for the dropdown parent
    if (link.subLinks) {
      return link.subLinks.some(subLink => {
        const subLinkBasePath = subLink.href.substring(1).split('#')[0] || '/';
        // Ensure non-home paths match exactly to avoid '/' matching everything
        if (subLinkBasePath === '/') return currentBasePath === '/';
        return currentBasePath === subLinkBasePath;
      });
    }

    // Handle regular links
    if (link.href) {
      const normalizedLink = link.href.substring(1);
      const linkBasePath = normalizedLink.split('#')[0] || '/';
      
      // Special handling for the home page
      if (linkBasePath === '/') {
        return currentBasePath === '/';
      }
      
      return linkBasePath === currentBasePath;
    }
    
    return false;
  };

  const renderNavLinks = (isMobile: boolean) => {
    return NAV_LINKS.map((link) => {
      const isActive = getIsActive(link);
      
      // Render Dropdown for "Productos"
      if (link.subLinks) {
        if (isMobile) {
          return (
            <div key={link.name} className="w-full text-center">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className={`w-full flex items-center justify-center gap-1 text-gray-300 hover:text-white font-medium transition-colors py-2 ${isActive ? 'font-bold text-white' : ''}`}
              >
                {link.name}
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="flex flex-col items-center space-y-2 py-2 bg-brand-blue-dark/50 w-full">
                  {link.subLinks.map(subLink => (
                    <a
                      key={subLink.name}
                      href={subLink.href}
                      onClick={handleLinkClick}
                      className={`text-gray-400 hover:text-white text-sm transition-colors ${(currentPath === subLink.href.substring(1)) ? 'font-semibold text-white' : ''}`}
                    >
                      {subLink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        } else { // Desktop Dropdown
          return (
            <div key={link.name} className="relative group">
              <button className={`flex items-center gap-1 text-gray-300 hover:text-white font-medium transition-colors ${isActive ? 'font-bold text-white' : ''}`}>
                {link.name}
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <div className="bg-brand-blue-dark/95 shadow-lg rounded-md p-4 flex flex-col items-start gap-3 w-60 backdrop-blur-sm">
                  {link.subLinks.map(subLink => (
                    <a
                      key={subLink.name}
                      href={subLink.href}
                      className={`text-gray-300 hover:text-white w-full text-left ${(currentPath === subLink.href.substring(1)) ? 'font-semibold text-white' : ''}`}
                    >
                      {subLink.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        }
      }

      // Render regular link
      return (
        <a 
          key={link.name} 
          href={link.href} 
          onClick={isMobile ? handleLinkClick : undefined}
          className={`text-gray-300 hover:text-white font-medium transition-colors ${isActive ? 'font-bold text-white' : ''}`}
        >
          {link.name}
        </a>
      );
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-blue-dark shadow-lg backdrop-blur-sm`}>
      <div className="container mx-auto px-6 py-0.5 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-0">
          <img src="/logo.svg" alt="Kit Digital Venezuela Logo" className="h-32 w-auto" />
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          {renderNavLinks(false)}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-blue-dark/95">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {renderNavLinks(true)}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;