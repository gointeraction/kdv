import React from 'react';
import { RADARSYSTEMS_PLANS } from '../constants';
import { ShieldCheckIcon, SparklesIcon, ChartBarIcon, ServerStackIcon, EnvelopeIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, ShoppingCartIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon } from './icons/Icons';
import type { RadarSystemsPlan } from '../types';
import InterspersedCTA from './InterspersedCTA';

const BenefitBlock: React.FC<{ icon: JSX.Element, title: string, description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-brand-blue-light rounded-lg flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="font-bold text-lg text-gray-800">{title}</h3>
            <p className="text-gray-500 mt-1">{description}</p>
        </div>
    </div>
);

const PlanTable: React.FC = () => (
    <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr>
                    <th className="p-4 bg-gray-50 rounded-tl-lg font-semibold text-brand-blue">Característica</th>
                    {RADARSYSTEMS_PLANS.map(plan => (
                        <th key={plan.name} className="p-4 bg-gray-50 font-semibold text-center text-brand-blue">{plan.name}</th>
                    ))}
                    <th className="p-4 bg-gray-50 rounded-tr-lg font-semibold text-brand-blue text-center">Gran Enviador</th>
                </tr>
            </thead>
            <tbody>
                {(Object.keys(RADARSYSTEMS_PLANS[0]) as (keyof RadarSystemsPlan)[]).filter(key => key !== 'name').map(key => {
                    const keyMap: { [key: string]: string } = {
                        contacts: 'Contactos',
                        users: 'Usuarios',
                        landingPagesAI: 'Landing Pages AI',
                        freeSMS: 'SMS gratis',
                        ecommerce: 'eCommerce',
                        chatbotAI: 'Chatbot AI',
                        support: 'Soporte 24/7',
                    };
                    return (
                        <tr key={key} className="border-b border-gray-200">
                            <td className="p-4 font-medium text-gray-600">{keyMap[key]}</td>
                            {RADARSYSTEMS_PLANS.map(plan => (
                                <td key={`${plan.name}-${key}`} className="p-4 text-gray-800 text-center">{plan[key]}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);


const RadarSystemsLandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 text-white bg-brand-blue-dark">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down"
          >
            Automatiza tu Marketing y Multiplica tus Ventas
          </h1>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Descubre el plan de marketing perfecto para tu negocio en menos de 2 minutos. Atrae, vende y fideliza, todo desde un solo lugar.
          </p>
          <div 
            className="animate-fade-in-up" 
            style={{ animationDelay: '0.4s' }}
          >
            <a 
              href="#/diagnostico-radarsystems" 
              className="bg-brand-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-all transform hover:scale-105 inline-block shadow-lg hover:shadow-xl"
            >
              Comenzar diagnóstico gratuito
            </a>
          </div>
        </div>
      </section>

      {/* Beneficios Clave */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-animate>
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                    Todo lo que tu negocio necesita en un solo lugar
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
                <BenefitBlock icon={<ServerStackIcon className="h-6 w-6 text-brand-blue"/>} title="Base de datos y segmentación" description="Hasta 5.000 / 15.000 / ilimitados contactos, depuración en tiempo real y triple sistema de remoción."/>
                <BenefitBlock icon={<EnvelopeIcon className="h-6 w-6 text-brand-blue"/>} title="Email marketing con IA" description="Redacción optimizada, tracking completo y auto-responder incluido."/>
                <BenefitBlock icon={<DevicePhoneMobileIcon className="h-6 w-6 text-brand-blue"/>} title="SMS masivos" description="Envío vía plataforma o API con mensajes gratuitos según plan y optimización horaria."/>
                <BenefitBlock icon={<ComputerDesktopIcon className="h-6 w-6 text-brand-blue"/>} title="Landing pages y eCommerce" description="Formularios ilimitados, landing corporativas con IA y eCommerce con carrito y SSL."/>
                <BenefitBlock icon={<ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-brand-blue"/>} title="Chatbot inteligente" description="Atención 24/7, respuestas automáticas y entrenamiento continuo."/>
                <BenefitBlock icon={<UserGroupIcon className="h-6 w-6 text-brand-blue"/>} title="Control y seguridad" description="Roles y perfiles, super-administrador, auditoría y monitoreo de usuarios."/>
            </div>
        </div>
      </section>

      {/* Interspersed CTA 1: Email Marketing */}
      <InterspersedCTA
        backgroundImage="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070&auto=format&fit=crop"
        title="Lleva tu Email Marketing al Siguiente Nivel"
        description="Descubre cómo nuestra IA optimiza tus campañas de correo, desde la redacción de asuntos hasta la segmentación automática, para maximizar tu tasa de apertura y conversión."
        buttonText="Descubrir mi Plan Ideal"
        buttonLink="#/diagnostico-radarsystems"
      />

      {/* Escenarios de Uso */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-animate>
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                    Adaptado a cada etapa de tu negocio
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center" data-animate>
                    <h3 className="font-bold text-xl text-brand-blue mb-2">Emprendedores</h3>
                    <p className="text-gray-600">Gestión de clientes y promociones para empezar a crecer.</p>
                </div>
                 <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center" data-animate style={{transitionDelay: '100ms'}}>
                    <h3 className="font-bold text-xl text-brand-blue mb-2">Empresas Medianas</h3>
                    <p className="text-gray-600">Segmentación avanzada y campañas automáticas para escalar.</p>
                </div>
                 <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center" data-animate style={{transitionDelay: '200ms'}}>
                    <h3 className="font-bold text-xl text-brand-blue mb-2">Grandes Empresas</h3>
                    <p className="text-gray-600">Bases ilimitadas, múltiples usuarios y campañas masivas.</p>
                </div>
            </div>
        </div>
       </section>
      
      {/* Sección de Planes */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16" data-animate>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                      Planes claros y escalables
                  </h2>
                   <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                     Compara nuestras características y encuentra el punto de partida. ¿No estás seguro? Nuestro diagnóstico te dará el plan perfecto.
                  </p>
              </div>
              <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200" data-animate>
                  <PlanTable />
              </div>
              <div className="text-center mt-12" data-animate>
                   <a 
                    href="#/diagnostico-radarsystems" 
                    className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition-all transform hover:scale-105 inline-block"
                    >
                    Descubre tu plan ideal
                </a>
              </div>
          </div>
      </section>

      {/* Interspersed CTA 2: SMS Marketing */}
      <InterspersedCTA
        backgroundImage="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop"
        title="Conecta Instantáneamente con tus Clientes vía SMS"
        description="Aprovecha la inmediatez del SMS para comunicados urgentes, promociones flash y confirmaciones. Logra una tasa de apertura del 98% y resultados al instante."
        buttonText="Comenzar Diagnóstico"
        buttonLink="#/diagnostico-radarsystems"
      />

       {/* Sección de Confianza */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center" data-animate>
                        <ChartBarIcon className="h-10 w-10 text-brand-blue mb-2"/>
                        <p className="font-semibold text-gray-700">Estadísticas en tiempo real</p>
                    </div>
                    <div className="flex flex-col items-center" data-animate style={{transitionDelay: '100ms'}}>
                        <SparklesIcon className="h-10 w-10 text-brand-blue mb-2"/>
                        <p className="font-semibold text-gray-700">Optimización con IA</p>
                    </div>
                    <div className="flex flex-col items-center" data-animate style={{transitionDelay: '200ms'}}>
                        <UserGroupIcon className="h-10 w-10 text-brand-blue mb-2"/>
                        <p className="font-semibold text-gray-700">Onboarding personalizado</p>
                    </div>
                    <div className="flex flex-col items-center" data-animate style={{transitionDelay: '300ms'}}>
                        <ShieldCheckIcon className="h-10 w-10 text-brand-blue mb-2"/>
                        <p className="font-semibold text-gray-700">Soporte técnico 24/7</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default RadarSystemsLandingPage;