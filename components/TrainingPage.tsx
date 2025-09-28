import React from 'react';
import { TRAINING_COURSES } from '../constants';
import type { TrainingCourse } from '../types';
// FIX: Import missing ServerStackIcon, SparklesIcon, and CreditCardIcon.
import { CheckCircleIcon, GraduationCapIcon, ServerStackIcon, SparklesIcon, CreditCardIcon } from './icons/Icons';
import InterspersedCTA from './InterspersedCTA';

const CourseCard: React.FC<{ course: TrainingCourse, index: number }> = ({ course, index }) => {
    const categoryColors = {
        ERP: 'border-brand-blue bg-blue-50 text-brand-blue',
        IA: 'border-brand-green bg-green-50 text-brand-green',
        POS: 'border-gray-500 bg-gray-100 text-gray-700',
    };
    const categoryColor = categoryColors[course.category];

    return (
        <div 
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300"
            data-animate 
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mr-4 ${categoryColor.replace('border-', 'bg-').replace('text-', '')}`}>
                     {React.cloneElement(course.icon, { className: `h-8 w-8 ${categoryColor.replace('border-','').replace('bg-','')}`})}
                </div>
                <div className="text-right">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border-2 ${categoryColor}`}>{course.level}</span>
                    <span className="block text-sm text-gray-500 mt-1">{course.duration}</span>
                </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 flex-grow">{course.title}</h3>
            <p className="text-gray-500 mb-6">{course.description}</p>
            
            <div className="mb-6 border-t border-gray-200 pt-4">
                 <h4 className="font-semibold text-gray-700 mb-3">Temas principales:</h4>
                 <ul className="space-y-2">
                    {course.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                           <CheckCircleIcon className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                           <span className="text-sm text-gray-600">{topic}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <a href="#/agents#contact" className={`mt-auto block w-full text-center font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-105 ${categoryColor.replace('border-', 'bg-').replace('bg-white','')} hover:opacity-90`}>
                Solicitar Información
            </a>
        </div>
    );
};


const TrainingPage: React.FC = () => {
    const erpCourses = TRAINING_COURSES.filter(c => c.category === 'ERP');
    const iaCourses = TRAINING_COURSES.filter(c => c.category === 'IA');
    const posCourses = TRAINING_COURSES.filter(c => c.category === 'POS');

    const CourseSection: React.FC<{ title: string; description: string; courses: TrainingCourse[]; icon: JSX.Element }> = ({ title, description, courses, icon }) => (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-animate>
                    <div className="inline-block bg-brand-blue-light p-4 rounded-full mb-4">
                       {icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">{title}</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {courses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 text-center text-white overflow-hidden bg-brand-blue-dark">
                 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop')" }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-brand-blue-dark/80 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10 animate-fade-in-down">
                    <div className="inline-block bg-white/10 p-4 rounded-full mb-4">
                        <GraduationCapIcon className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        Potencia tus Habilidades con Nuestros Cursos
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Capacita a tu equipo para maximizar el rendimiento de nuestras herramientas. Ofrecemos entrenamientos diseñados para cada nivel y necesidad.
                    </p>
                </div>
            </section>
            
            <div className="bg-brand-gray">
              <CourseSection 
                  title="Cursos de RadarSystems ERP"
                  description="Desde los primeros pasos hasta la administración avanzada, domina la herramienta que unifica tu negocio."
                  courses={erpCourses}
                  icon={<ServerStackIcon className="h-10 w-10 text-brand-blue" />}
              />
            </div>
            
            <div className="bg-white">
               <CourseSection 
                  title="Cursos de Agentes de IA"
                  description="Aprende a implementar y gestionar la inteligencia artificial para automatizar procesos y tomar decisiones más inteligentes."
                  courses={iaCourses}
                  icon={<SparklesIcon className="h-10 w-10 text-brand-blue" />}
              />
            </div>

            <div className="bg-brand-gray">
              <CourseSection 
                  title="Cursos de Punto de Venta KD-HKA20"
                  description="Capacitaciones enfocadas en la operación y administración del dispositivo fiscal para optimizar tu punto de venta."
                  courses={posCourses}
                  icon={<CreditCardIcon className="h-10 w-10 text-brand-blue" />}
              />
            </div>

            <InterspersedCTA
                backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                title="¿Necesitas un Entrenamiento a tu Medida?"
                description="Si tienes requerimientos específicos o necesitas capacitar a un equipo grande, podemos diseñar un plan de entrenamiento personalizado para tu empresa."
                buttonText="Contactar a un Asesor"
                buttonLink="#/agents#contact"
            />
        </div>
    );
};

export default TrainingPage;
