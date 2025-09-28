import React from 'react';
import { BENEFITS_DATA } from '../constants';
import type { Benefit } from '../types';

const BenefitCard: React.FC<{ benefit: Benefit; index: number }> = ({ benefit, index }) => (
  <div 
    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
    data-animate
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className={`mb-5 w-16 h-16 rounded-full flex items-center justify-center ${benefit.iconBgClass || 'bg-gray-100'}`}>
      {benefit.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
    <p className="text-gray-500">{benefit.description}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
            Beneficios Generales
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre las mejoras clave que nuestra suite de agentes aporta a tu empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;