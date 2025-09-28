import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../constants';
import type { WhyChooseUsItem } from '../types';

const WhyChooseUsCard: React.FC<{ item: WhyChooseUsItem, index: number }> = ({ item, index }) => (
    <div
        className="bg-brand-gray/50 p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
        data-animate
        style={{ transitionDelay: `${index * 100}ms` }}
    >
        <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
            {item.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-500">{item.description}</p>
    </div>
);

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-choose-us" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-animate>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                        ¿Por qué elegirnos?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Tu socio estratégico en la implementación de agentes IA
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {WHY_CHOOSE_US_DATA.map((item, index) => (
                        <WhyChooseUsCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;