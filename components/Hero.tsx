import React from 'react';

const HeroBackground: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden bg-brand-blue-dark">
        <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="white"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-pattern)"/>
            </svg>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
    </div>
);


const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 text-center px-6">
        <h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 opacity-0 animate-fade-in-down" 
            style={{ animationDelay: '0.2s' }}
        >
          Automatización Inteligente para Empresas Modernas
        </h1>
        <p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.4s' }}
        >
        </p>
        <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
        >
          <a 
            href="#/contact" 
            className="bg-brand-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl"
          >
            Solicitar Demostración
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;