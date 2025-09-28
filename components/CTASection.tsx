import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section className="relative py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-brand-blue-dark/70"></div>
            <div className="relative container mx-auto px-6 text-center text-white" data-animate>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                    ¿Listo para Potenciar tu Empresa?
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                    Descubre cómo nuestros agentes de IA pueden transformar tus operaciones, mejorar la eficiencia y llevar tu negocio al siguiente nivel.
                </p>
                <a
                    href="#contact"
                    className="bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 inline-block shadow-lg hover:shadow-xl"
                >
                    Solicita una Demostración Gratuita
                </a>
            </div>
        </section>
    );
};

export default CTASection;