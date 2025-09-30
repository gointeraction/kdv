import React from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import Agents from './Agents';
import Contact from './Contact';
import WhyChooseUs from './WhyChooseUs';
import Implementation from './Implementation';
import AgentDetails from './AgentDetails';
import InterspersedCTA from './InterspersedCTA';
import McpDeepDive from './McpDeepDive';

const AgentsPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Agents />
      <McpDeepDive />
      <InterspersedCTA
        backgroundImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
        title="¿Viste un Agente que te Interesa?"
        description="Nuestros expertos pueden mostrarte en vivo cómo DocuMind, LeadGenius o cualquiera de nuestros agentes puede integrarse en tus flujos de trabajo actuales."
        buttonText="Ver una Demo en Acción"
        buttonLink="#/contact"
      />
      <AgentDetails />
      <WhyChooseUs />
      <InterspersedCTA
        backgroundImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
        title="Implementación Rápida, Resultados Duraderos"
        description="En solo 4 semanas, podemos tener tu primer agente de IA funcionando y generando valor. ¿Hablamos de tu proyecto?"
        buttonText="Planifiquemos tu Éxito"
        buttonLink="#/contact"
      />
      <Implementation />
      <Contact />
    </>
  );
};

export default AgentsPage;