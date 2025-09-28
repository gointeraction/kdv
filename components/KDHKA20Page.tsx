import React, { useState } from 'react';
import { KDHKA20_BENEFITS, KDHKA20_TESTIMONIALS, FAQ_DATA, KDHKA20_TECH_SPECS, KDHKA20_CERTIFICATIONS } from '../constants';
import type { KDHKA20Benefit, Testimonial, TechSpec } from '../types';
import { QuoteIcon, ShieldCheckIcon, CreditCardIcon, SlidersHorizontalIcon, WifiIcon, ChartBarIcon, DocumentTextIcon } from './icons/Icons';
import FAQ from './FAQ';
import InterspersedCTA from './InterspersedCTA';

// --- Sub-components for KDHKA20Page ---

const BenefitCard: React.FC<{ item: KDHKA20Benefit, index: number }> = ({ item, index }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
        <div className="mb-5 w-20 h-20 rounded-full flex items-center justify-center bg-brand-blue-light">
            {item.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-500">{item.description}</p>
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial, index: number }> = ({ testimonial, index }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
        <QuoteIcon className="h-8 w-8 text-gray-300 mb-4" />
        <p className="text-gray-600 mb-6 italic flex-grow">"{testimonial.quote}"</p>
        <div className="mt-auto">
            <div className="font-bold text-gray-800">{testimonial.author}</div>
            <div className="text-sm text-gray-500">{testimonial.company}</div>
        </div>
    </div>
);

const VideoSection: React.FC = () => (
    <section id="kdhka20-video" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-animate>
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                    Descubre la KD-HKA20 en Acción
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Mira este breve video para ver lo fácil que es operar, cobrar y gestionar tu negocio con nuestro dispositivo todo-en-uno.
                </p>
            </div>
            <div
                className="max-w-4xl mx-auto aspect-video rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200"
                data-animate
                style={{ transitionDelay: '200ms' }}
            >
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Demostración del dispositivo KD-HKA20"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </section>
);

const PhotoGallerySection: React.FC = () => {
    const images = [
        { src: "https://images.unsplash.com/photo-1579202778331-4623c5a6161a?q=80&w=2070&auto=format&fit=crop", alt: "Punto de venta KD-HKA20 en una tienda de ropa" },
        { src: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop", alt: "Barista usando el KD-HKA20 en una cafetería" },
        { src: "https://images.unsplash.com/photo-1599321327129-9f72b2575443?q=80&w=1931&auto=format&fit=crop", alt: "Cliente pagando con tarjeta en el dispositivo KD-HKA20" },
        { src: "https://images.unsplash.com/photo-1588196749107-13d072688942?q=80&w=2070&auto=format&fit=crop", alt: "Dispositivo KD-HKA20 en el mostrador de una panadería" }
    ];

    return (
        <section id="kdhka20-gallery" className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-animate>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                        Un Vistazo a la KD-HKA20 en Acción
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Compacta, moderna y poderosa. Así es como luce en diferentes negocios.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="group aspect-w-1 aspect-h-1 overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                            data-animate
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SoftwareFeaturesSection: React.FC = () => {
    const mainFeatures = [
        { icon: <CreditCardIcon className="h-10 w-10 text-brand-blue" />, title: "Diversidad de Pagos", description: "Procesa débito, crédito, Visa y Master Débito en un solo dispositivo fiscal." },
        { icon: <SlidersHorizontalIcon className="h-10 w-10 text-brand-blue" />, title: "Configuración Flexible", description: "Se adapta a cualquier negocio con una configuración y roles personalizables." },
        { icon: <WifiIcon className="h-10 w-10 text-brand-blue" />, title: "Integración Android", description: "Moderno punto de venta con sistema de facturación HKAPOS en un dispositivo Android." },
        { icon: <ChartBarIcon className="h-10 w-10 text-brand-blue" />, title: "Gestión de Ventas", description: "Acceso a información de ventas, seguimiento detallado y control de inventario." },
        { icon: <ShieldCheckIcon className="h-10 w-10 text-brand-blue" />, title: "Seguridad y Accesos", description: "Control de acceso por tipo de usuario (cajero, supervisor o administrador)." },
        { icon: <DocumentTextIcon className="h-10 w-10 text-brand-blue" />, title: "Reportes Fiscales", description: "Imprime reportes X, Z, fiscales, de auditoría y de pagos diarios." },
    ];

    return (
        <section id="kdhka20-software-features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12" data-animate>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                        Características del Software HKA POS
                    </h2>
                    <div className="mt-4 max-w-3xl mx-auto">
                        <p className="font-semibold text-gray-700">PUNTO DE VENTA FISCAL</p>
                        <p className="text-sm text-gray-500">PROVIDENCIA ADMINISTRATIVA N° SNAT/2018/0141 DE FECHA 16 DE OCTUBRE 2018.</p>
                        <p className="mt-4 text-gray-600">
                            HKA POS es una aplicación de punto de venta integrada al dispositivo HKA-20, diseñada para gestionar ventas de manera eficiente. Al procesar pagos, la integración transfiere automáticamente los montos y datos de las facturas a la interfaz bancaria, optimizando la eficiencia y minimizando errores.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-16" data-animate style={{transitionDelay: '100ms'}}>
                    <h3 className="text-2xl font-bold text-brand-blue mb-8">CARACTERÍSTICAS PRINCIPALES</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainFeatures.map((feature, index) => (
                             <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300" data-animate style={{ transitionDelay: `${200 + index * 100}ms` }}>
                                <div className="mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-brand-blue-light">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                                <p className="text-gray-500 text-sm flex-grow">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="border-t border-gray-200 pt-12">
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl mx-auto">
                        <div data-animate style={{transitionDelay: '300ms'}}>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">PUNTO DE VENTA</h3>
                            <ul className="space-y-3 text-gray-600 list-disc list-inside">
                                <li>Interfaz y Funcionalidad: Pantalla vertical, emisión de facturas y notas personalizadas, 86 teclas de acceso directo.</li>
                                <li>Actualización Remota: Nuevas características y correcciones sin interrupciones.</li>
                                <li>Gestión Avanzada: 20 departamentos para categorizar PLUS, ventas por cantidad (entera o decimal), anulaciones, descuentos y recargos.</li>
                                <li>Administración de Roles: Permisos para administrador, cajero y supervisor con recuperación de contraseñas.</li>
                                <li>Cierre de Jornada: Emisión de Reporte Z y Cierre de Lote del punto de venta.</li>
                                <li>Almacenamiento de Datos: Gestión de productos, inventario, clientes y tasas de cambio.</li>
                                <li>Monitoreo de Caja: Control del efectivo en gaveta con 24 medios de pago.</li>
                            </ul>
                        </div>
                        
                        <div className="space-y-8" data-animate style={{transitionDelay: '400ms'}}>
                             <div>
                                <h3 className="text-2xl font-bold text-brand-blue mb-4">PAGOS</h3>
                                <ul className="space-y-3 text-gray-600 list-disc list-inside">
                                     <li>Diversidad de Monedas: Edición de tasas de cambio y selección de moneda predeterminada.</li>
                                     <li>Operaciones de Caja: Realiza Fondos, Retiros de caja y acumulados diarios por medio de pago.</li>
                                </ul>
                            </div>
                            
                             <div>
                                <h3 className="text-2xl font-bold text-brand-blue mb-4">GESTIÓN DE INVENTARIO</h3>
                                 <ul className="space-y-3 text-gray-600 list-disc list-inside">
                                     <li>Control de Stock: Notificación de productos sin existencia y opción de facturación con inventario negativo.</li>
                                </ul>
                            </div>
                        </div>

                         <div className="md:col-span-2" data-animate style={{transitionDelay: '500ms'}}>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">ANÁLISIS DE VENTAS</h3>
                             <ul className="space-y-3 text-gray-600 list-disc list-inside">
                                <li>Reportes Detallados: Resumen de montos, productos más/menos vendidos, estado de la impresora, y reportes X, Z, fiscal y de auditoría por rango o fecha.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                 <div className="text-center mt-16 max-w-4xl mx-auto" data-animate style={{transitionDelay: '600ms'}}>
                     <p className="text-gray-600 bg-gray-50 p-6 rounded-2xl border border-gray-200 leading-relaxed shadow-inner">
                         Este conjunto de herramientas convierte al dispositivo HKA-20 en un terminal completo y eficaz para cualquier tipo de negocio, mejorando la eficiencia operativa y facilitando la gestión diaria, al tiempo que ofrece un sistema integral de pagos cumpliendo con todos los requisitos regulatorios.
                     </p>
                 </div>
            </div>
        </section>
    );
};

const TechSpecsSection: React.FC = () => (
    <section id="kdhka20-tech-specs" className="py-20 bg-brand-gray">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-animate>
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                    Especificaciones Técnicas
                </h2>
            </div>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200" data-animate style={{ transitionDelay: `200ms` }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {KDHKA20_TECH_SPECS.map(category => (
                        <div key={category.category}>
                            <h3 className="text-xl font-bold text-brand-blue mb-4 border-b-2 border-gray-100 pb-2">{category.category}</h3>
                            <ul className="space-y-2">
                                {category.details.map(detail => (
                                    <li key={detail.spec} className="flex justify-between text-sm">
                                        <span className="font-semibold text-gray-700">{detail.spec}</span>
                                        <span className="text-gray-500 text-right">{detail.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const CertificationsSection: React.FC = () => (
    <div className="mt-16 space-y-8">
        <div className="text-center" data-animate>
            <div className="inline-flex items-center gap-4 bg-gray-100 py-4 px-8 rounded-full border border-gray-200">
                <ShieldCheckIcon className="h-8 w-8 text-brand-green flex-shrink-0" />
                <div>
                    <p className="font-semibold text-gray-700">Homologado y Certificado</p>
                    <p className="text-xs text-gray-500 mt-1">Cumple con las regulaciones del SENIAT y SUDEBAN.</p>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-6">
                <p className="text-xs text-gray-400 leading-relaxed">
                    Certificaciones: {KDHKA20_CERTIFICATIONS.join(', ')}
                </p>
            </div>
        </div>
        <div className="text-center" data-animate style={{ transitionDelay: '100ms' }}>
            <div className="inline-flex items-center gap-4 bg-gray-100 py-4 px-8 rounded-full border border-gray-200">
                 <ShieldCheckIcon className="h-8 w-8 text-brand-green" />
                 <p className="font-semibold text-gray-700">Garantía de satisfacción 30 días y Soporte técnico incluido.</p>
            </div>
        </div>
    </div>
);


const FinalCTAForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', business: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('KD-HKA20 Form data submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', business: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };
    
    return (
         <section id="kdhka20-contact" className="py-20 bg-brand-blue-dark text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700" data-animate style={{ transitionDelay: '200ms'}}>
                    
                    {submitted ? (
                        <div className="text-center p-4 bg-emerald-100 text-emerald-800 rounded-lg">
                            <p className="font-semibold">¡Gracias por tu interés!</p>
                            <p>Nos pondremos en contacto contigo a la brevedad.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} id="kdhka20-form" className="space-y-6">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold">Solicita tu Demostración</h3>
                                <p className="text-gray-400 mt-1">Completa el formulario y te contactaremos.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="kdhka20-name" className="block text-sm font-medium text-gray-300 mb-1">Nombre <span className="text-red-500">*</span></label>
                                    <input type="text" id="kdhka20-name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                </div>
                                <div>
                                    <label htmlFor="kdhka20-email" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                                    <input type="email" id="kdhka20-email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                </div>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="kdhka20-phone" className="block text-sm font-medium text-gray-300 mb-1">Teléfono</label>
                                    <input type="tel" id="kdhka20-phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                </div>
                                <div>
                                    <label htmlFor="kdhka20-business" className="block text-sm font-medium text-gray-300 mb-1">Empresa / Negocio</label>
                                    <input type="text" id="kdhka20-business" name="business" value={formData.business} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                </div>
                            </div>
                            <div className="text-center pt-4">
                                <button type="submit" className="w-full bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition-all transform hover:scale-105">
                                    Enviar Solicitud
                                </button>
                            </div>
                        </form>
                    )}
                     <p className="text-center text-xs text-gray-500 mt-8">
                       Tu información es 100% confidencial. Únete a cientos de negocios que ya disfrutan la eficiencia de KD-HKA20.
                    </p>
                </div>
            </div>
        </section>
    );
};


// --- Main Page Component ---

const KDHKA20Page: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section id="kdhka20-hero" className="relative pt-40 pb-20 text-white overflow-hidden bg-brand-blue-dark">
                 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583497833930-5b135a570085?q=80&w=2070&auto=format&fit=crop')" }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-brand-blue-dark/80 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-down">
                                KD-HKA20: Todo lo que tu negocio necesita, en un solo dispositivo.
                            </h1>
                            <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                Todo lo que necesitas para facturar, cobrar y gestionar, en un solo dispositivo fácil de usar.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <a href="#kdhka20-contact" className="bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg">
                                    Solicitar Demostración
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                           <img src="https://i.imgur.com/vLdGqV7.png" alt="KD-HKA20 Device" className="max-w-sm w-full drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Benefits Section */}
            <section id="kdhka20-benefits" className="py-20 bg-brand-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                           ¿Cansado de múltiples dispositivos y procesos complicados?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                           La KD-HKA20 lo simplifica todo, eliminando el desorden, los procesos lentos y los costos ocultos.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {KDHKA20_BENEFITS.slice(0, 3).map((item, index) => (
                             <BenefitCard key={index} item={item} index={index} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                         {KDHKA20_BENEFITS.slice(3).map((item, index) => (
                             <BenefitCard key={index + 3} item={item} index={index + 3} />
                        ))}
                    </div>
                </div>
            </section>
            
            <VideoSection />
            
            <PhotoGallerySection />

            <InterspersedCTA
                backgroundImage="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop"
                title="Moderniza tu Punto de Venta Hoy"
                description="Descubre cómo la KD-HKA20 puede agilizar tus cobros, simplificar la facturación y darte el control total de tu negocio. ¡Todo desde un solo dispositivo!"
                buttonText="Quiero una Demostración"
                buttonLink="#kdhka20-contact"
            />

            <SoftwareFeaturesSection />

            <TechSpecsSection />
            
            {/* Testimonials Section */}
            <section id="kdhka20-testimonials" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                         <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                           Clientes que ya confían en la KD-HKA20
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {KDHKA20_TESTIMONIALS.map((testimonial, index) => (
                           <TestimonialCard key={index} testimonial={testimonial} index={index} />
                        ))}
                    </div>
                    
                    <CertificationsSection />
                    
                </div>
            </section>

            <InterspersedCTA
                backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                title="¿Aún tienes dudas? Hablemos"
                description="Nuestro equipo de expertos está listo para responder todas tus preguntas y mostrarte cómo la KD-HKA20 se adapta perfectamente a las necesidades de tu negocio."
                buttonText="Contactar a un Asesor"
                buttonLink="#kdhka20-contact"
            />

            {/* Final CTA Form */}
            <FinalCTAForm />
            
            {/* FAQ Section */}
            <FAQ items={FAQ_DATA} />

        </div>
    );
};

export default KDHKA20Page;