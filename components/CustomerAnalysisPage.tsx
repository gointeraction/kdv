import React, { useState } from 'react';
import type { WizardFormData, DigitalSolution } from '../types';
import { USER_TYPES, BUSINESS_CHALLENGES, DIGITAL_SOLUTIONS } from '../constants';
import { CheckCircleIcon } from './icons/Icons';

const TOTAL_STEPS = 6;

const ProgressBar: React.FC<{ currentStep: number }> = ({ currentStep }) => {
    const progressPercentage = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
            <div 
                className="bg-brand-blue h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};

const CustomerAnalysisPage: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<WizardFormData>({
        userType: '',
        contactName: '',
        businessName: '',
        industry: '',
        employeeCount: '1-5',
        currentSolutions: '',
        challenges: [],
        solutionsOfInterest: [],
        email: '',
        phone: '',
        contactPreference: 'email',
    });
    const [recommendations, setRecommendations] = useState<DigitalSolution[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSelect = (name: keyof WizardFormData, value: string) => {
        setFormData(prev => ({...prev, [name]: value as any}));
    };
    
    const handleMultiSelect = (name: keyof WizardFormData, value: string) => {
        setFormData(prev => {
            const currentSelection = prev[name] as string[];
            const newSelection = currentSelection.includes(value)
                ? currentSelection.filter(item => item !== value)
                : [...currentSelection, value];
            return { ...prev, [name]: newSelection as any };
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
        // Simple recommendation logic
        const recommended = DIGITAL_SOLUTIONS.filter(sol => 
            formData.solutionsOfInterest.includes(sol.id) ||
            (formData.challenges.includes('facturacion') && (sol.id === 'erp' || sol.id === 'pos')) ||
            (formData.challenges.includes('inventario') && (sol.id === 'erp' || sol.id === 'pos' || sol.id === 'ecommerce')) ||
            (formData.challenges.includes('ventas') && (sol.id === 'pos' || sol.id === 'ecommerce' || sol.id ==='erp')) ||
            (formData.challenges.includes('ia') && sol.id === 'agentes_ia')
        );
        // Ensure at least one recommendation if none match
        if (recommended.length === 0) {
             setRecommendations([DIGITAL_SOLUTIONS[0]]);
        } else {
             setRecommendations(recommended);
        }
       
        console.log("Final Form Data:", formData);
        setCurrentStep(TOTAL_STEPS + 1); // Go to confirmation page
    };
    
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-2 text-brand-blue">¡Bienvenido!</h2>
                        <p className="text-center text-gray-600 mb-8">Para empezar, cuéntanos un poco sobre ti. Esto nos ayudará a personalizar nuestras recomendaciones.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {USER_TYPES.map(type => (
                                <button
                                    key={type.id}
                                    onClick={() => { handleSelect('userType', type.id); nextStep(); }}
                                    className={`p-6 border-2 rounded-lg text-center transition-all duration-200 ${formData.userType === type.id ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue hover:bg-blue-50'}`}
                                >
                                    <div className="flex justify-center mb-2">{type.icon}</div>
                                    <span className="font-semibold">{type.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                 return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6 text-brand-blue">Información de tu Negocio</h2>
                        <div className="space-y-4 max-w-lg mx-auto">
                            <div>
                                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Nombre del negocio (si aplica)</label>
                                <input type="text" name="businessName" id="businessName" value={formData.businessName} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                            <div>
                                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Sector o industria</label>
                                <input type="text" name="industry" id="industry" value={formData.industry} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                            <div>
                                <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700">Tamaño del negocio (empleados)</label>
                                <select name="employeeCount" id="employeeCount" value={formData.employeeCount} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue">
                                    <option>1-5</option>
                                    <option>6-20</option>
                                    <option>21-50</option>
                                    <option>50+</option>
                                </select>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6 text-brand-blue">Tus Retos Actuales</h2>
                         <p className="text-center text-gray-600 mb-8">¿Cuáles son tus principales desafíos de gestión? Puedes seleccionar varios.</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {BUSINESS_CHALLENGES.map(challenge => (
                                <button
                                    key={challenge.id}
                                    onClick={() => handleMultiSelect('challenges', challenge.id)}
                                    className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${formData.challenges.includes(challenge.id) ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue hover:bg-blue-50'}`}
                                >
                                    <div className="flex justify-center mb-2">{challenge.icon}</div>
                                    <span className="font-semibold text-sm">{challenge.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 4:
                 return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6 text-brand-blue">Soluciones de Interés</h2>
                        <p className="text-center text-gray-600 mb-8">¿Qué soluciones digitales te interesan más en este momento?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {DIGITAL_SOLUTIONS.map(solution => (
                                <button
                                    key={solution.id}
                                    onClick={() => handleMultiSelect('solutionsOfInterest', solution.id)}
                                    className={`p-4 border-2 rounded-lg text-left flex items-center gap-4 transition-all duration-200 ${formData.solutionsOfInterest.includes(solution.id) ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue hover:bg-blue-50'}`}
                                >
                                    <div className="flex-shrink-0">{solution.icon}</div>
                                    <div>
                                      <span className="font-semibold">{solution.label}</span>
                                      <p className="text-sm text-gray-500">{solution.description}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6 text-brand-blue">Ya casi terminamos...</h2>
                        <p className="text-center text-gray-600 mb-8">Déjanos tus datos para enviarte las recomendaciones detalladas.</p>
                        <div className="space-y-4 max-w-lg mx-auto">
                             <div>
                                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Nombre completo <span className="text-red-500">*</span></label>
                                <input type="text" name="contactName" id="contactName" value={formData.contactName} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico <span className="text-red-500">*</span></label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono de contacto</label>
                                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                        </div>
                    </div>
                );
             case (TOTAL_STEPS + 1):
                return (
                    <div className="text-center">
                        <CheckCircleIcon className="h-16 w-16 text-brand-green mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-brand-blue mb-4">¡Gracias! Hemos recibido tu información.</h2>
                        <p className="text-gray-600 mb-6">Un especialista de nuestro equipo se pondrá en contacto contigo a la brevedad con tus recomendaciones personalizadas.</p>
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-md mx-auto">
                            <h3 className="font-bold text-lg mb-4">Recomendaciones Iniciales para ti:</h3>
                            <ul className="space-y-3 text-left">
                                {recommendations.map(rec => (
                                    <li key={rec.id} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 text-brand-blue">{rec.icon}</div>
                                        <span className="font-semibold">{rec.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <a href="#/" className="mt-8 inline-block bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">Volver al Inicio</a>
                    </div>
                );
            default:
                return null;
        }
    };
    
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
                    {currentStep <= TOTAL_STEPS && <ProgressBar currentStep={currentStep} />}
                    
                    <div className="min-h-[400px] flex flex-col justify-center">
                       {renderStep()}
                    </div>

                    {currentStep > 1 && currentStep <= TOTAL_STEPS && (
                        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                            <button
                                onClick={prevStep}
                                className="bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                Volver
                            </button>
                            {currentStep < TOTAL_STEPS ? (
                                <button
                                    onClick={nextStep}
                                    className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Siguiente
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    className="bg-brand-green text-brand-blue-dark font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
                                >
                                    Obtener Recomendaciones
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CustomerAnalysisPage;