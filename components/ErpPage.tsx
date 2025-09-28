import React, { useState } from 'react';
import { 
    ERP_IMPLEMENTATION_STEPS,
    ERP_BENEFITS,
    ERP_MODULES,
    ERP_USE_CASES,
    ERP_PRICING_PLANS,
    ERP_TESTIMONIALS,
    ERP_SECURITY_FEATURES
} from '../constants';
import { CheckCircleIcon, QuoteIcon } from './icons/Icons';

const ErpPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('ERP Form data submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', businessType: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section id="erp-hero" className="relative pt-40 pb-20 text-white overflow-hidden bg-brand-blue-dark">
                 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop')" }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-brand-blue-dark/80 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                                Gestiona tu empresa completa desde un solo lugar con RadarSystems ERP
                            </h1>
                            <h2 className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8">
                                El ERP en la nube <span className="text-brand-green font-bold">basado en Odoo</span> que integra ventas, facturación, inventario y mucho más.
                            </h2>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                                <a href="#erp-contact" className="bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg">
                                    Solicitar Demostración Gratis
                                </a>
                                <a href="https://wa.me/584125880517" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-brand-blue-dark transition-all w-full sm:w-auto">
                                    Hablar con un Asesor
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center">
                           <img src="https://i.imgur.com/eQ3b5Gq.png" alt="RadarSystems ERP Dashboard" className="max-w-md w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section id="erp-benefits" className="py-20 bg-brand-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                            Por qué elegir RadarSystems ERP para tu negocio
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ERP_BENEFITS.map((item, index) => (
                             <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section id="erp-modules" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                           Todo lo que tu empresa necesita para digitalizarse
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                           Una suite de módulos integrados para digitalizar cada área de tu negocio.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {ERP_MODULES.map((module, index) => (
                           <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                               <div className="w-16 h-16 rounded-full bg-brand-blue-light flex items-center justify-center mx-auto mb-4">
                                   {module.icon}
                               </div>
                               <h3 className="text-lg font-bold text-brand-blue">{module.title}</h3>
                               <p className="text-gray-500 text-sm">{module.description}</p>
                           </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section id="erp-use-cases" className="py-20 bg-brand-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                           Pensado para todo tipo de negocio
                        </h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ERP_USE_CASES.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-start text-left" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="mb-5 w-16 h-16 rounded-full flex items-center justify-center bg-brand-blue-light">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section 1 */}
            <section className="relative py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-brand-blue-dark/70"></div>
                <div className="relative container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Moderniza tu Negocio Hoy
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Desde el mostrador hasta el almacén, RadarSystems ERP unifica tus operaciones para que puedas enfocarte en lo que más importa: tus clientes.
                    </p>
                    <a href="#erp-contact" className="bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 inline-block shadow-lg hover:shadow-xl">
                        Solicita una Demostración
                    </a>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="erp-pricing" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                            Planes simples, costos claros
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {ERP_PRICING_PLANS.map((plan, index) => (
                            <div key={index} className={`bg-gray-50 p-8 rounded-3xl border-2 flex flex-col ${plan.popular ? 'border-brand-blue' : 'border-gray-200'}`} data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                                <h3 className="text-2xl font-bold text-brand-blue">{plan.name}</h3>
                                <p className="text-gray-500 mt-2 mb-6">Costo inicial único de <span className="font-bold">{plan.initialCost}</span></p>
                                <div className="flex-grow">
                                  <p className="text-5xl font-extrabold text-gray-900">{plan.price}<span className="text-lg font-medium text-gray-500">{plan.frequency}</span></p>
                                  <p className="font-semibold text-gray-600 mt-2">{plan.users}</p>
                                </div>
                                <a href="#erp-contact" className={`mt-8 block w-full text-center font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105 ${plan.popular ? 'bg-brand-blue text-white hover:bg-blue-700' : 'bg-white border-2 border-brand-blue text-brand-blue hover:bg-blue-50'}`}>
                                    {plan.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section id="erp-testimonials" className="py-20 bg-brand-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                           Lo que dicen nuestros clientes
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ERP_TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100" data-animate style={{ transitionDelay: `${index * 100}ms`}}>
                                <QuoteIcon className="h-8 w-8 text-gray-300 mb-4" />
                                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="font-bold text-gray-800">{testimonial.author}</div>
                                <div className="text-sm text-gray-500">{testimonial.company}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section 2 */}
            <section className="relative py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=2148&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-brand-blue-dark/75"></div>
                <div className="relative container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        ¿Listo para tomar el control de tu inventario?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Deja atrás las hojas de cálculo. Con nuestro módulo de inventario, tendrás visibilidad en tiempo real de tu stock, optimizarás tus compras y maximizarás tus ganancias.
                    </p>
                    <a href="#erp-pricing" className="bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 inline-block shadow-lg hover:shadow-xl">
                        Quiero un Plan a mi Medida
                    </a>
                </div>
            </section>


            {/* Implementation Process Section */}
             <section id="erp-implementation" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                            Así de fácil es comenzar
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                           Nuestro proceso de implementación está diseñado para ser rápido, eficiente y sin interrupciones para tu negocio.
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-8">
                            {ERP_IMPLEMENTATION_STEPS.map((step, index) => (
                                <div key={index} className="relative flex items-start space-x-6" data-animate style={{ transitionDelay: `${index * 150}ms` }}>
                                    <div className="relative flex-shrink-0 flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-brand-blue-light flex items-center justify-center ring-8 ring-white">
                                            {step.icon}
                                        </div>
                                        {index < ERP_IMPLEMENTATION_STEPS.length - 1 && (
                                            <div className="w-px h-24 bg-gray-300 mt-4"></div>
                                        )}
                                    </div>
                                    <div className="pt-2 min-w-0 flex-1">
                                        <p className="text-sm font-semibold text-brand-blue">{step.title}</p>
                                        <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">{step.subtitle}</h3>
                                        <p className="text-gray-500">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* Security Section */}
            <section id="erp-security" className="py-20 bg-brand-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                           Tu negocio siempre seguro y respaldado
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ERP_SECURITY_FEATURES.map((item, index) => (
                             <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-brand-blue-light mx-auto">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Final CTA / Contact Form */}
            <section id="erp-contact" className="py-20 bg-brand-blue-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold">¿Listo para digitalizar tu negocio?</h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                            Solicita una demo gratuita y descubre cómo RadarSystems puede transformar tu empresa.
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700" data-animate style={{ transitionDelay: '200ms'}}>
                       {submitted ? (
                            <div className="text-center p-4 bg-emerald-100 text-emerald-800 rounded-lg">
                                <p className="font-semibold">¡Gracias por tu interés!</p>
                                <p>Nos pondremos en contacto contigo a la brevedad.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} name="erp-contact" className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="erp-name" className="block text-sm font-medium text-gray-300 mb-1">Nombre Completo <span className="text-red-500">*</span></label>
                                        <input type="text" id="erp-name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                    </div>
                                    <div>
                                        <label htmlFor="erp-email" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                                        <input type="email" id="erp-email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="erp-phone" className="block text-sm font-medium text-gray-300 mb-1">Teléfono/WhatsApp</label>
                                        <input type="tel" id="erp-phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                    </div>
                                    <div>
                                        <label htmlFor="erp-business-type" className="block text-sm font-medium text-gray-300 mb-1">Tipo de Negocio</label>
                                        <input type="text" id="erp-business-type" name="businessType" value={formData.businessType} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                    </div>
                                </div>
                                <div className="text-center pt-4">
                                    <button type="submit" className="w-full bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition-all transform hover:scale-105">
                                        Solicitar Demo Gratis
                                    </button>
                                </div>
                            </form>
                        )}
                         <p className="text-center text-sm text-gray-400 mt-6">
                           ¿Prefieres hablar con un asesor? <a href="https://wa.me/584125880517" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-green hover:underline">Contáctanos por WhatsApp</a>
                        </p>
                         <p className="text-center text-xs text-gray-500 mt-8">
                           RadarSystems ERP está basado en Odoo. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErpPage;