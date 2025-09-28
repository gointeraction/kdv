import React from 'react';
import { IMPLEMENTATION_STEPS_DATA } from '../constants';
import type { ImplementationStep } from '../types';

const StepCard: React.FC<{ step: ImplementationStep; index: number }> = ({ step, index }) => (
  <div
    className="relative flex items-start space-x-6"
    data-animate
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <div className="relative flex-shrink-0 flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-brand-blue-light flex items-center justify-center ring-8 ring-white">
        {step.icon}
      </div>
      {index < IMPLEMENTATION_STEPS_DATA.length - 1 && (
         <div className="w-px h-24 bg-gray-300 mt-4"></div>
      )}
    </div>
    <div className="pt-2 min-w-0 flex-1">
      <p className="text-sm font-semibold text-brand-blue">{step.title}</p>
      <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{step.subtitle}</h3>
      <p className="text-gray-500">{step.description}</p>
    </div>
  </div>
);


const Implementation: React.FC = () => {
  return (
    <section id="implementation" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
            Implementación en 4 Semanas
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro proceso ágil y estructurado garantiza una transición rápida y sin fricciones hacia la automatización inteligente.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {IMPLEMENTATION_STEPS_DATA.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
