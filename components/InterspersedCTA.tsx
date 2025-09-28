import React from 'react';

interface InterspersedCTAProps {
    backgroundImage: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

const InterspersedCTA: React.FC<InterspersedCTAProps> = ({
    backgroundImage,
    title,
    description,
    buttonText,
    buttonLink
}) => {
    return (
        <section 
            className="relative py-24 bg-cover bg-center bg-fixed" 
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            <div className="absolute inset-0 bg-brand-blue-dark/70"></div>
            <div className="relative container mx-auto px-6 text-center text-white" data-animate>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                    {title}
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                    {description}
                </p>
                <a
                    href={buttonLink}
                    className="bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 inline-block shadow-lg hover:shadow-xl"
                >
                    {buttonText}
                </a>
            </div>
        </section>
    );
};

export default InterspersedCTA;
