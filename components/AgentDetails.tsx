import React from 'react';
import { AGENTS_DATA } from '../constants';
import { CheckCircleIcon } from './icons/Icons';
import type { Agent } from '../types';

const AgentDetailCard: React.FC<{ agent: Agent }> = ({ agent }) => {
    // Helper component for list sections (Features, Use Cases, Benefits)
    const ListSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
        <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-left">{title}</h4>
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start">
                        <CheckCircleIcon className="h-6 w-6 text-brand-green mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-left">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div 
            id={agent.id}
            className="relative bg-white pt-24 pb-12 px-6 md:px-10 rounded-3xl shadow-2xl border border-gray-200"
            data-animate
        >
            {/* Floating Icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center p-3 shadow-xl border-8 border-brand-gray ${agent.iconBgClass}`}>
                   {React.cloneElement(agent.icon, { className: `${agent.icon.props.className} h-16 w-16` })}
                </div>
            </div>
            
            <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue">{agent.name}</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{agent.longDescription}</p>
            </div>

            <div className="mt-16 mb-12 border-t border-gray-200"></div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto text-center md:text-left">
                {agent.features && agent.features.length > 0 && <ListSection title="Características" items={agent.features} />}
                {agent.useCases && agent.useCases.length > 0 && <ListSection title="Casos de Uso" items={agent.useCases} />}
                {agent.benefits && agent.benefits.length > 0 && <ListSection title="Beneficios" items={agent.benefits} />}
            </div>

            <div className="text-center mt-16">
                <a 
                    href="#contact" 
                    className="bg-brand-blue text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-blue-700 transition-all transform hover:scale-105 inline-block shadow-lg"
                >
                    {agent.cta}
                </a>
            </div>
        </div>
    );
};


const AgentDetails: React.FC = () => {
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div className="space-y-28 pt-16">
                    {AGENTS_DATA.map((agent) => (
                        <AgentDetailCard key={agent.id} agent={agent} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgentDetails;