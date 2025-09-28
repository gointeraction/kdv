import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-brand-gray text-center py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl md:text-9xl font-extrabold text-brand-blue mb-4 opacity-0 animate-fade-in-down">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Página No Encontrada
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <a 
          href="#/" 
          className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-all transform hover:scale-105 inline-block shadow-lg opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Volver al Inicio
        </a>
      </div>
    </section>
  );
};

export default NotFoundPage;
