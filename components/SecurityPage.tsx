import React, { useState } from 'react';
import { FingerPrintIcon, ShieldCheckIcon, ClipboardDocumentCheckIcon, QuoteIcon } from './icons/Icons';
import FAQ from './FAQ';
import { SECURITY_TESTIMONIALS, SECURITY_FAQ_DATA } from '../constants';

const SecurityPage: React.FC = () => {
    // State for the contact form
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Security Evaluation Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="bg-white">
            {/* 1. ATENCIÓN (Hero) */}
            <section className="relative pt-40 pb-20 text-white bg-brand-blue-dark overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-brand-blue-dark/80 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
                        Protege tus activos digitales antes de que sea demasiado tarde
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Kit Digital Venezuela combina análisis forense, seguridad preventiva y planes de acción para que tu información estratégica esté siempre segura.
                    </p>
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a href="#security-contact" className="bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 inline-block shadow-lg">
                            Solicitar Evaluación Gratuita
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. INTERÉS (Problema y Beneficios) */}
            <section className="py-20 bg-brand-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                            ¿Preocupado por las amenazas digitales que pueden afectar tu empresa?
                        </h2>
                        <ul className="mt-6 max-w-2xl mx-auto space-y-2 text-gray-600">
                            <li><span className="text-red-500 font-bold mr-2">✗</span>Vulnerabilidad ante ataques que comprometen información crítica.</li>
                            <li><span className="text-red-500 font-bold mr-2">✗</span>Falta de evidencia confiable para auditorías o procesos legales.</li>
                            <li><span className="text-red-500 font-bold mr-2">✗</span>Riesgo de interrupciones que afectan la continuidad del negocio.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-16 max-w-5xl mx-auto">
                        {/* Análisis Forense */}
                        <div className="grid md:grid-cols-2 gap-8 items-center" data-animate>
                            <div className="flex justify-center md:justify-start">
                                <FingerPrintIcon className="h-48 w-48 text-brand-blue/20" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-brand-blue mb-3">Análisis Forense Digital</h3>
                                <p className="text-gray-600">Identificación precisa de incidentes y generación de evidencias confiables para decisiones estratégicas y legales.</p>
                            </div>
                        </div>
                        {/* Seguridad Preventiva */}
                        <div className="grid md:grid-cols-2 gap-8 items-center" data-animate>
                             <div className="text-center md:text-right md:order-2">
                                <h3 className="text-2xl font-bold text-brand-blue mb-3">Seguridad Preventiva</h3>
                                <p className="text-gray-600">Monitoreo y refuerzo constante de tus sistemas para minimizar riesgos antes de que ocurran ataques.</p>
                            </div>
                            <div className="flex justify-center md:justify-end md:order-1">
                                <ShieldCheckIcon className="h-48 w-48 text-brand-blue/20" />
                            </div>
                        </div>
                        {/* Plan de Acción */}
                        <div className="grid md:grid-cols-2 gap-8 items-center" data-animate>
                             <div className="flex justify-center md:justify-start">
                                <ClipboardDocumentCheckIcon className="h-48 w-48 text-brand-blue/20" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-brand-blue mb-3">Plan de Acción ante Incidentes</h3>
                                <p className="text-gray-600">Respuesta rápida y estructurada para recuperar operaciones críticas y fortalecer la infraestructura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 3. DESEO (Prueba Social y Credibilidad) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                           Organizaciones que ya confían en nuestra experiencia
                        </h2>
                    </div>
                    {/* Testimonials */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {SECURITY_TESTIMONIALS.map((testimonial, index) => (
                            <div key={index} className="bg-brand-gray/50 p-8 rounded-2xl shadow-lg border border-gray-100" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                                <QuoteIcon className="h-8 w-8 text-gray-300 mb-4" />
                                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="font-bold text-gray-800">{testimonial.author}</div>
                                <div className="text-sm text-gray-500">{testimonial.company}</div>
                            </div>
                        ))}
                    </div>

                    {/* Case Study & Guarantee */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200" data-animate>
                            <h3 className="text-xl font-bold text-brand-blue mb-4">Caso de Estudio: Recuperación Exitosa</h3>
                            <div className="space-y-3">
                                <p><strong className="text-red-600">Antes:</strong> Sistema comprometido por ransomware, operaciones detenidas.</p>
                                <p><strong className="text-brand-green">Después:</strong> Recuperación completa en 48h y refuerzo preventivo implementado con éxito.</p>
                            </div>
                        </div>
                        <div className="bg-brand-blue-light p-8 rounded-2xl flex flex-col justify-center items-center text-center" data-animate style={{ transitionDelay: '100ms' }}>
                             <h3 className="text-xl font-bold text-brand-blue mb-2">Garantía de Satisfacción</h3>
                             <p className="text-blue-800">Resultados confiables o te devolvemos la asesoría inicial.</p>
                        </div>
                    </div>
                    {/* Logos */}
                     <div className="mt-16 text-center" data-animate>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Con la confianza de</h4>
                         <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                            <span className="text-gray-400 font-semibold text-xl">Empresa XYZ</span>
                            <span className="text-gray-400 font-semibold text-xl">Empresa ABC</span>
                             <span className="text-gray-400 font-semibold text-xl">Compañía Tech</span>
                             <span className="text-gray-400 font-semibold text-xl">Servicios Seguros</span>
                         </div>
                    </div>
                </div>
            </section>
            
            {/* 4. ACCIÓN (CTA Final) */}
            <section id="security-contact" className="py-20 bg-brand-blue-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold">¿Listo para proteger tu información y mantener tu negocio seguro?</h2>
                    </div>
                    <div className="max-w-xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700" data-animate style={{ transitionDelay: '200ms' }}>
                        {submitted ? (
                             <div className="text-center p-4 bg-emerald-100 text-emerald-800 rounded-lg">
                                <p className="font-semibold">¡Gracias por tu interés!</p>
                                <p>Recibirás tu evaluación en breve.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold">Solicitar Evaluación Gratuita</h3>
                                </div>
                                <div>
                                    <label htmlFor="sec-name" className="block text-sm font-medium text-gray-300 mb-1">Nombre <span className="text-red-500">*</span></label>
                                    <input type="text" id="sec-name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                </div>
                                <div>
                                    <label htmlFor="sec-email" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                                    <input type="email" id="sec-email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="sec-phone" className="block text-sm font-medium text-gray-300 mb-1">Teléfono (Opcional)</label>
                                        <input type="tel" id="sec-phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                    </div>
                                     <div>
                                        <label htmlFor="sec-company" className="block text-sm font-medium text-gray-300 mb-1">Empresa / Cargo (Opcional)</label>
                                        <input type="text" id="sec-company" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                    </div>
                                </div>
                                <div className="text-center pt-4">
                                    <button type="submit" className="w-full bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition-all transform hover:scale-105">
                                        Solicitar Evaluación Gratuita
                                    </button>
                                </div>
                                <p className="text-center text-xs text-gray-500 pt-2">Tu información es 100% confidencial y segura.</p>
                            </form>
                        )}
                    </div>
                </div>
            </section>
            
            {/* 5. FAQ */}
            <FAQ items={SECURITY_FAQ_DATA} />
        </div>
    );
};

export default SecurityPage;
