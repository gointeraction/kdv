import React, { useState } from 'react';
import type { RadarSystemsWizardData } from '../types';
import { 
    WIZARD_USER_TYPES, 
    WIZARD_CONTACT_COUNTS, 
    WIZARD_CHANNELS, 
    WIZARD_USER_COUNTS,
    WIZARD_INTEGRATION_LEVELS,
} from '../constants';
import { CheckCircleIcon, PencilSquareIcon } from './icons/Icons';

const TOTAL_STEPS = 7;

const ProgressBar: React.FC<{ currentStep: number }> = ({ currentStep }) => {
    const progressPercentage = Math.max(0, ((currentStep - 1) / TOTAL_STEPS) * 100);
    return (
        <div className="px-4">
            <div className="text-center text-sm text-gray-500 mb-2">Paso {currentStep} de {TOTAL_STEPS}</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                    className="bg-brand-green h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
        </div>
    );
};

const RadarSystemsWizardPage: React.FC = () => {
    const [wizardStarted, setWizardStarted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<RadarSystemsWizardData>({
        userType: '',
        contactCount: '',
        channels: [],
        userCount: '',
        integrationLevel: '',
        objective: '',
        fullName: '',
        email: '',
        phone: '',
        company: '',
        sector: '',
    });
    const [recommendedPlan, setRecommendedPlan] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSelect = (name: keyof RadarSystemsWizardData, value: string) => {
        setFormData(prev => ({...prev, [name]: value as any}));
    };
    
    const handleMultiSelect = (value: string) => {
        setFormData(prev => {
            const newChannels = prev.channels.includes(value)
                ? prev.channels.filter(item => item !== value)
                : [...prev.channels, value];
            return { ...prev, channels: newChannels };
        });
    };

    const nextStep = () => {
        if (currentStep < TOTAL_STEPS) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        let plan = 'Emprendedor';
        if (formData.contactCount === '15k' || formData.userCount === '3-4') {
            plan = 'Empresarial';
        }
        if (formData.contactCount === 'unlimited' || formData.userCount === '4+') {
            plan = 'Gran Enviador';
        }
        setRecommendedPlan(plan);
        console.log("Final Form Data:", formData);
        setCurrentStep(TOTAL_STEPS + 1);
    };
    
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-2 text-brand-blue">¿Cuál de estas opciones describe mejor tu negocio?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {WIZARD_USER_TYPES.map(type => (
                                <button key={type.id} onClick={() => { handleSelect('userType', type.id); nextStep(); }} className={`p-6 border-2 rounded-lg text-center transition-all duration-200 flex flex-col items-center justify-center h-full ${formData.userType === type.id ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue hover:bg-blue-50'}`}>
                                    <div className="mb-2">{type.icon}</div>
                                    <span className="font-semibold">{type.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-2 text-brand-blue">¿Cuántos contactos aproximados tienes?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                             {WIZARD_CONTACT_COUNTS.map(opt => (
                                <button key={opt.id} onClick={() => handleSelect('contactCount', opt.id)} className={`p-6 border-2 rounded-lg font-semibold transition-all duration-200 ${formData.contactCount === opt.id ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue hover:bg-blue-50'}`}>
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                );
             case 3:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-2 text-brand-blue">¿Qué canales deseas automatizar?</h2>
                        <p className="text-center text-gray-500 text-sm">Puedes seleccionar múltiples opciones.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                            {WIZARD_CHANNELS.map(channel => (
                                <button key={channel.id} onClick={() => handleMultiSelect(channel.id)} className={`p-4 border-2 rounded-lg text-center transition-all duration-200 flex flex-col items-center justify-center h-full ${formData.channels.includes(channel.id) ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue hover:bg-blue-50'}`}>
                                    <div className="mb-2">{channel.icon}</div>
                                    <span className="font-semibold text-sm">{channel.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-2 text-brand-blue">¿Cuántos usuarios usarán la plataforma?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                             {WIZARD_USER_COUNTS.map(opt => (
                                <button key={opt.id} onClick={() => handleSelect('userCount', opt.id)} className={`p-6 border-2 rounded-lg font-semibold transition-all duration-200 ${formData.userCount === opt.id ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue hover:bg-blue-50'}`}>
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-2 text-brand-blue">¿Qué nivel de integración necesitas?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                             {WIZARD_INTEGRATION_LEVELS.map(opt => (
                                <button key={opt.id} onClick={() => handleSelect('integrationLevel', opt.id)} className={`p-6 border-2 rounded-lg text-center transition-all duration-200 ${formData.integrationLevel === opt.id ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue hover:bg-blue-50'}`}>
                                    <p className="font-bold text-lg">{opt.label}</p>
                                    <p className="text-sm text-gray-500 mt-1">{opt.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-2 text-brand-blue">Describe brevemente tu objetivo principal</h2>
                        <div className="max-w-xl mx-auto mt-8">
                            <PencilSquareIcon className="h-12 w-12 text-brand-blue mx-auto mb-4"/>
                            <textarea name="objective" value={formData.objective} onChange={handleInputChange} rows={4} placeholder="Ej: Incrementar ventas online, gestionar clientes automáticamente, promocionar productos con campañas segmentadas..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
                        </div>
                    </div>
                );
            case 7:
                 return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-2 text-brand-blue">¡Ya casi está listo tu plan!</h2>
                        <p className="text-center text-gray-500 mb-8">Completa tus datos para recibir tu plan personalizado por correo.</p>
                        <div className="space-y-4 max-w-lg mx-auto">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nombre completo <span className="text-red-500">*</span></label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Correo electrónico <span className="text-red-500">*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Teléfono / WhatsApp</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                        </div>
                    </div>
                );
            case TOTAL_STEPS + 1:
                return (
                    <div className="text-center">
                        <CheckCircleIcon className="h-16 w-16 text-brand-green mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-brand-blue mb-2">¡Gracias, {formData.fullName}! Hemos generado tu plan.</h2>
                        <p className="text-gray-600 mb-6">Tu plan recomendado llegará a tu correo. Un especialista también se pondrá en contacto contigo.</p>
                        <div className="bg-blue-50 p-6 rounded-lg border-2 border-brand-blue max-w-sm mx-auto">
                            <h3 className="font-bold text-lg mb-2 text-brand-blue">Tu Plan Recomendado:</h3>
                            <p className="text-3xl font-extrabold text-gray-800">{recommendedPlan}</p>
                        </div>
                         <a href="#/" className="mt-8 inline-block bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">Volver al Inicio</a>
                    </div>
                );
            default: return null;
        }
    };
    
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-200">
                    
                    {!wizardStarted ? (
                        <div className="text-center py-12">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Descubre el plan de automatización perfecto para tu negocio</h1>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Completa nuestro asistente paso a paso y recibe recomendaciones personalizadas para email marketing, SMS, landing pages, eCommerce y más.</p>
                             <button onClick={() => setWizardStarted(true)} className="mt-8 bg-brand-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-all transform hover:scale-105">
                                Comenzar diagnóstico
                            </button>
                        </div>
                    ) : (
                        <>
                           {currentStep <= TOTAL_STEPS && <ProgressBar currentStep={currentStep} />}
                            <div className="min-h-[350px] flex flex-col justify-center py-8">
                               {renderStep()}
                            </div>
                            {currentStep > 1 && currentStep <= TOTAL_STEPS && (
                                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                                    <button onClick={prevStep} className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                                        Anterior
                                    </button>
                                    {currentStep < TOTAL_STEPS ? (
                                        <button onClick={nextStep} className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                                            Siguiente
                                        </button>
                                    ) : (
                                        <button onClick={handleSubmit} className="bg-brand-green text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">
                                            Recibir mi plan personalizado
                                        </button>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RadarSystemsWizardPage;