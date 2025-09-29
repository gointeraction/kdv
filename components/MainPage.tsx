import React from 'react';
import { SparklesIcon, ServerStackIcon, CreditCardIcon, PencilSquareIcon, GraduationCapIcon, RocketLaunchIcon, BuildingStorefrontIcon, SlidersHorizontalIcon, ChartBarIcon, ArrowUpIcon, CogIcon, CheckBadgeIcon, UserGroupIcon, ShieldCheckIcon } from './icons/Icons';
import WhyChooseUs from './WhyChooseUs';
import InterspersedCTA from './InterspersedCTA';
import Implementation from './Implementation';

const MainPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-[100vh] flex items-center justify-center text-white bg-brand-blue-dark">
        <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="white"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-pattern)"/>
            </svg>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="relative z-10 text-center px-6">
          <h1 
            className="text-4xl md:text-6xl font-extrabold mb-8 opacity-0 animate-fade-in-down"
            style={{ animationDelay: '0.2s' }}
          >
            Acelera tu Crecimiento con el Ecosistema Digital Completo
          </h1>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Integramos Inteligencia Artificial, un ERP potente y Puntos de Venta modernos para ofrecerte una solución 360° que impulsa tu eficiencia y rentabilidad.
          </p>
           <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
        >
          <a 
            href="#/analisis-cliente" 
            className="bg-brand-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl"
          >
            Inicia tu Análisis Gratuito
          </a>
          <a 
            href="#solutions" 
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-brand-blue-dark transition-all w-full sm:w-auto"
          >
            Ver Soluciones
          </a>
        </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
              Un Ecosistema de Soluciones para tu Crecimiento
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Desde la automatización con IA hasta la gestión integral con nuestro ERP y puntos de venta. Tenemos la herramienta que tu negocio necesita para escalar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* AI Agents Card */}
            <a href="#/agents" className="group relative block h-96 overflow-hidden rounded-2xl shadow-xl no-underline transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{ transitionDelay: '100ms' }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-26fc76334a19?q=80&w=2070&auto=format&fit=crop')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative flex flex-col h-full p-8 text-white justify-end">
                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30">
                    <SparklesIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Suite de Agentes de IA</h3>
                <p className="text-gray-200 mb-4 text-sm">Automatiza procesos, optimiza tareas y maximiza resultados con nuestra suite de agentes inteligentes.</p>
                <span className="font-bold text-brand-green group-hover:underline">Explorar Agentes de IA →</span>
              </div>
            </a>
            {/* ERP Card */}
            <a href="#/erp" className="group relative block h-96 overflow-hidden rounded-2xl shadow-xl no-underline transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{ transitionDelay: '200ms' }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative flex flex-col h-full p-8 text-white justify-end">
                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30">
                    <ServerStackIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">ERP Integral en la Nube</h3>
                <p className="text-gray-200 mb-4 text-sm">Gestiona ventas, facturación, inventario y más, desde un solo lugar con RadarSystems ERP.</p>
                <span className="font-bold text-brand-green group-hover:underline">Descubrir ERP →</span>
              </div>
            </a>
            {/* KD-HKA20 Card */}
            <a href="#/kdhka20" className="group relative block h-96 overflow-hidden rounded-2xl shadow-xl no-underline transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{ transitionDelay: '300ms' }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative flex flex-col h-full p-8 text-white justify-end">
                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30">
                    <CreditCardIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Punto de Venta KD-HKA20</h3>
                <p className="text-gray-200 mb-4 text-sm">El dispositivo todo-en-uno que factura, cobra y gestiona tu inventario. Homologado y listo para operar.</p>
                <span className="font-bold text-brand-green group-hover:underline">Conocer el Dispositivo →</span>
              </div>
            </a>
             {/* Marketing Automation Card */}
            <a href="#/marketing-automation" className="group relative block h-96 overflow-hidden rounded-2xl shadow-xl no-underline transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{ transitionDelay: '400ms' }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative flex flex-col h-full p-8 text-white justify-end">
                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30">
                    <PencilSquareIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Marketing Automation</h3>
                <p className="text-gray-200 mb-4 text-sm">Atrae, vende y fideliza con nuestra plataforma de Email y SMS marketing impulsada por IA. Crea campañas efectivas en minutos.</p>
                <span className="font-bold text-brand-green group-hover:underline">Descubrir Plataforma →</span>
              </div>
            </a>
            {/* Training Card */}
            <a href="#/entrenamientos" className="group relative block h-96 overflow-hidden rounded-2xl shadow-xl no-underline transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{ transitionDelay: '500ms' }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative flex flex-col h-full p-8 text-white justify-end">
                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30">
                    <GraduationCapIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Entrenamiento y Formación</h3>
                <p className="text-gray-200 mb-4 text-sm">Capacita a tu equipo o certifícate como consultor. Maximiza el potencial de nuestras herramientas con cursos prácticos y especializados.</p>
                <span className="font-bold text-brand-green group-hover:underline">Ver Cursos →</span>
              </div>
            </a>
            {/* Security Card */}
            <a href="#/seguridad-informatica" className="group relative block h-96 overflow-hidden rounded-2xl shadow-xl no-underline transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{ transitionDelay: '600ms' }}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative flex flex-col h-full p-8 text-white justify-end">
                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30">
                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Seguridad Informática</h3>
                <p className="text-gray-200 mb-4 text-sm">Protege tus activos digitales con análisis forense, seguridad preventiva y planes de acción.</p>
                <span className="font-bold text-brand-green group-hover:underline">Proteger mi Negocio →</span>
              </div>
            </a>

          </div>
        </div>
      </section>
      
      {/* For Your Business Section */}
      <section id="for-your-business" className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
              Diseñado para tu tipo de negocio
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              No importa el tamaño de tu empresa, nuestro ecosistema se adapta a tus desafíos específicos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Startups */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" data-animate>
              <RocketLaunchIcon className="h-10 w-10 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Startups y Emprendedores</h3>
              <p className="text-gray-500">Lanza y escala rápidamente con un ERP de bajo costo, un punto de venta ágil y herramientas de marketing para captar tus primeros clientes.</p>
            </div>
            {/* Card 2: PyMEs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" data-animate style={{transitionDelay: '100ms'}}>
               <BuildingStorefrontIcon className="h-10 w-10 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">PyMEs en Crecimiento</h3>
              <p className="text-gray-500">Integra tus operaciones, automatiza tareas repetitivas con Agentes de IA y obtén la data que necesitas para tomar decisiones estratégicas.</p>
            </div>
            {/* Card 3: Retail */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" data-animate style={{transitionDelay: '200ms'}}>
              <CreditCardIcon className="h-10 w-10 text-brand-blue mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Retail y Puntos de Venta</h3>
              <p className="text-gray-500">Moderniza tu tienda con el POS todo-en-uno, controla tu inventario en tiempo real y fideliza a tus clientes con campañas automatizadas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneur Benefits Section */}
      <section id="entrepreneur-benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
              Beneficios para Emprendedores
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Impulsamos tu visión con las herramientas digitales que necesitas para crecer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-gray/50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center" data-animate>
              <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
                  <SlidersHorizontalIcon className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mejora de la Gestión</h3>
              <p className="text-gray-500">El Kit Digital facilita herramientas para automatizar procesos, optimizar la gestión y aumentar la eficiencia en las tareas diarias.</p>
            </div>
            <div className="bg-brand-gray/50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center" data-animate style={{transitionDelay: '100ms'}}>
              <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
                  <ChartBarIcon className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mayor Alcance y Visibilidad</h3>
              <p className="text-gray-500">Crea una presencia digital sólida, expande tu alcance, conecta con nuevos clientes y aumenta tu visibilidad, producción y ventas.</p>
            </div>
            <div className="bg-brand-gray/50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center" data-animate style={{transitionDelay: '200ms'}}>
              <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
                  <ArrowUpIcon className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aumento de la Competitividad</h3>
              <p className="text-gray-500">Compite con empresas globales en un mercado cada vez más digitalizado gracias a la transformación digital que facilita el Kit Digital.</p>
            </div>
            <div className="bg-brand-gray/50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center" data-animate style={{transitionDelay: '300ms'}}>
              <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
                  <RocketLaunchIcon className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Acceso a Nuevas Oportunidades</h3>
              <p className="text-gray-500">Abre las puertas a nuevas oportunidades de negocio, como la venta online, el marketing digital y la gestión de clientes en línea.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4 Vertices Section */}
      <section id="vertices" className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
              Los 4 Vértices del Kit Digital
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestra metodología integral: Tecnología, Formación, Empoderamiento y Mentoría.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Educativo Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300" data-animate>
              <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
                  <GraduationCapIcon className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Educativo</h3>
              <p className="text-gray-500">Programas de formación para adquirir habilidades en Comercio Electrónico, Marketing Digital e IA.</p>
            </div>
            {/* Tecnológico Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{transitionDelay: '100ms'}}>
              <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
                  <CogIcon className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tecnológico</h3>
              <p className="text-gray-500">Implementamos la tecnología necesaria, previa evaluación, para garantizar el máximo provecho para tu negocio.</p>
            </div>
            {/* Empoderamiento Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{transitionDelay: '200ms'}}>
              <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
                  <CheckBadgeIcon className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Empoderamiento</h3>
              <p className="text-gray-500">Serás el propietario de todos los elementos y tecnologías del Kit Digital una vez finalizada la implementación.</p>
            </div>
            {/* Mentoría Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{transitionDelay: '300ms'}}>
              <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
                  <UserGroupIcon className="h-10 w-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mentoría</h3>
              <p className="text-gray-500">Ofrecemos apoyo técnico y mentoría durante todo el proceso de transformación digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <Implementation />
      
      {/* WhyChooseUs */}
      <WhyChooseUs />

      {/* Strategic Diagnosis CTA */}
      <section className="relative py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-brand-blue-dark/70"></div>
        <div className="relative container mx-auto px-6 text-center text-white" data-animate>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Obtén tu Diagnóstico Estratégico Gratuito
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                ¿No estás seguro por dónde empezar? Responde unas pocas preguntas y nuestro sistema inteligente te recomendará las soluciones del Kit Digital que generarán el mayor impacto en tu negocio. ¡Es rápido y sin costo!
            </p>
            <a
                href="#/analisis-cliente"
                className="bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 inline-block shadow-lg hover:shadow-xl"
            >
                Descubrir mi Solución Ideal
            </a>
        </div>
      </section>
      
      {/* Personalized Diagnosis Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-brand-gray/50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center" data-animate>
                <PencilSquareIcon className="h-24 w-24 md:h-32 md:w-32 text-brand-blue" />
              </div>
              <div className="md:col-span-2 text-center md:text-left" data-animate style={{transitionDelay: '150ms'}}>
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-blue mb-3">
                  Encuentra la Solución Perfecta para Tu Negocio
                </h2>
                <p className="text-gray-600 mb-6">
                  Nuestro diagnóstico personalizado es gratuito, rápido y sin compromiso. Descubre en pocos pasos las herramientas exactas que tu empresa necesita para crecer.
                </p>
                <a
                  href="#/analisis-cliente"
                  className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition-all transform hover:scale-105 inline-block shadow-lg"
                >
                  Iniciar Diagnóstico
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InterspersedCTA
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
        title="¿Listo para dar el siguiente paso?"
        description="Nuestro equipo está listo para mostrarte en una demostración en vivo cómo nuestras herramientas pueden transformar tu empresa."
        buttonText="Solicitar una Demostración"
        buttonLink="#/agents#contact"
      />
    </>
  );
};

export default MainPage;