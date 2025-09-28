import React, { useState } from 'react';
import type { FAQItem } from '../types';
import { PlusIcon, MinusIcon } from './icons/Icons';

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-animate>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas para que tomes la mejor decisión.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                <span className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <MinusIcon className="h-6 w-6 text-brand-blue" />
                  ) : (
                    <PlusIcon className="h-6 w-6 text-gray-500" />
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 pb-6 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;