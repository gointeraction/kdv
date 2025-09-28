import React, { useState } from 'react';
import { CONSULTANT_TRAINING_MODULES, CERTIFICATION_BENEFITS } from '../constants';
import type { ConsultantTrainingModule, WhyChooseUsItem } from '../types';
import { GraduationCapIcon, CheckBadgeIcon } from './icons/Icons';
import InterspersedCTA from './InterspersedCTA';

const ModuleCard: React.FC<{ module: ConsultantTrainingModule, index: number }> = ({ module, index }) => (
    <div 
        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col h-full"
        data-animate 
        style={{ transitionDelay: `${index * 100}ms` }}
    >
        <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-brand-blue-light flex-shrink-0 mr-4">
                {module.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
        </div>
        <p className="text-gray-500 mb-6 flex-grow">{module.description}</p>
        <ul className="space-y-2">
            {module.topics.map((topic, i) => (
                <li key={i} className="flex items-start">
                    <CheckBadgeIcon className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{topic}</span>
                </li>
            ))}
        </ul>
    </div>
);

const BenefitCard: React.FC<{ item: WhyChooseUsItem, index: number }> = ({ item, index }) => (
    <div
        className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center"
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


const ConsultantTrainingPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', experience: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Consultant Training Form data submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', experience: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 text-center text-white overflow-hidden bg-brand-blue-dark">
                 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')" }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-brand-blue-dark/80 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10 animate-fade-in-down">
                    <div className="inline-block bg-white/10 p-4 rounded-full mb-4">
                        <GraduationCapIcon className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        Formación de Consultores Kit Digital Venezuela
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Conviértete en un experto certificado y lidera la transformación digital de las empresas en Venezuela.
                    </p>
                    <a href="#inscription" className="bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 inline-block shadow-lg">
                        Inscríbete en el Programa
                    </a>
                </div>
            </section>

            {/* Program Overview Section */}
             <section className="py-20 bg-brand-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">¿Qué Aprenderás en Nuestra Formación?</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Un programa integral diseñado para darte el conocimiento técnico y comercial necesario para asesorar, vender e implementar nuestro ecosistema de soluciones.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CONSULTANT_TRAINING_MODULES.map((module, index) => (
                            <ModuleCard key={index} module={module} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Benefits Section */}
             <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                            Beneficios de ser un Consultor Certificado
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Más que un curso, es tu entrada a una red de profesionales y a nuevas oportunidades de negocio.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {CERTIFICATION_BENEFITS.map((item, index) => (
                            <BenefitCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            
            <InterspersedCTA
                backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c7da?q=80&w=2070&auto=format&fit=crop"
                title="¿Estás listo para impulsar tu carrera?"
                description="Únete a la vanguardia de la consultoría tecnológica en Venezuela. Ayuda a las empresas a crecer y crece con ellas."
                buttonText="Quiero ser Consultor"
                buttonLink="#inscription"
            />

            {/* Inscription Form */}
            <section id="inscription" className="py-20 bg-brand-blue-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700" data-animate>
                        {submitted ? (
                            <div className="text-center p-4 bg-emerald-100 text-emerald-800 rounded-lg">
                                <p className="font-semibold">¡Gracias por tu registro!</p>
                                <p>Hemos recibido tu solicitud. Pronto nos pondremos en contacto contigo con los próximos pasos.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold">Solicita Información del Programa</h3>
                                    <p className="text-gray-400 mt-1">Déjanos tus datos y te enviaremos el pensum completo y las fechas de inicio.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="consultant-name" className="block text-sm font-medium text-gray-300 mb-1">Nombre Completo <span className="text-red-500">*</span></label>
                                        <input type="text" id="consultant-name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                    </div>
                                    <div>
                                        <label htmlFor="consultant-email" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                                        <input type="email" id="consultant-email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="consultant-phone" className="block text-sm font-medium text-gray-300 mb-1">Teléfono</label>
                                    <input type="tel" id="consultant-phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"/>
                                </div>
                                <div>
                                    <label htmlFor="consultant-experience" className="block text-sm font-medium text-gray-300 mb-1">Cuéntanos sobre tu experiencia o interés</label>
                                    <textarea id="consultant-experience" name="experience" rows={3} value={formData.experience} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green"></textarea>
                                </div>
                                <div className="text-center pt-4">
                                    <button type="submit" className="w-full bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition-all transform hover:scale-105">
                                        Enviar Solicitud de Información
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConsultantTrainingPage;
