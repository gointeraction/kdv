import React from 'react';
import { AGENTS_DATA } from '../constants';
import type { Agent } from '../types';

const AgentCard: React.FC<{ agent: Agent; index: number }> = ({ agent, index }) => {
    return (
        <div 
            className="group relative bg-white pt-20 pb-8 px-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            data-animate
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={`w-28 h-28 rounded-full flex items-center justify-center p-3 shadow-lg border-4 border-white transition-colors duration-300 ${agent.iconBgClass} group-hover:bg-brand-blue`}>
                    {React.cloneElement(agent.icon, { className: `${agent.icon.props.className} h-14 w-14 group-hover:text-white transition-colors duration-300` })}
                </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900">{agent.name}</h3>
            <p className="text-gray-500 font-medium mt-2 mb-6 flex-grow">{agent.shortDescription}</p>

            <a
                href={`#/agents/${agent.id}`}
                className="w-full mt-auto text-center font-semibold py-3 px-4 rounded-lg border-2 border-gray-300 text-gray-700 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300"
            >
                Conocer más
            </a>
        </div>
    );
};

const Agents: React.FC = () => {
  return (
    <section id="agents" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-animate>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
            Nuestros Agentes de IA
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce nuestros agentes de IA especializados, cada uno enfocado en un área crítica de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 pt-12">
          {AGENTS_DATA.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;