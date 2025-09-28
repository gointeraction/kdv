import React from 'react';
import type { Testimonial } from '../types';
import { QuoteIcon } from './icons/Icons';

interface TestimonialsProps {
    title: string;
    subtitle: string;
    testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, subtitle, testimonials }) => {
    return (
        <section className="py-20 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-animate>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                        {title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                            <QuoteIcon className="h-8 w-8 text-gray-300 mb-4" />
                            <p className="text-gray-600 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                            <div className="mt-auto">
                                <div className="font-bold text-gray-800">{testimonial.author}</div>
                                <div className="text-sm text-gray-500">{testimonial.company}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;