import React, { useState } from 'react';
import { CreditCardIcon, DevicePhoneMobileIcon, ShieldCheckIcon, ClockIcon, ChartBarIcon, UserGroupIcon, ArrowRightIcon, CheckCircleIcon, StarIcon, QuoteIcon } from './icons/Icons';

const KDHKA20Page: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Features data
    const FEATURES = [
        {
            icon: <CreditCardIcon className="h-8 w-8 text-brand-blue" />,
            title: "Facturación Electrónica",
            description: "Emite facturas electrónicas válidas en Venezuela con total compliance legal."
        },
        {
            icon: <DevicePhoneMobileIcon className="h-8 w-8 text-brand-blue" />,
            title: "Pago Móvil Integrado",
            description: "Recibe pagos mediante Pago Móvil, transferencias y tarjetas de débito/crédito."
        },
        {
            icon: <ShieldCheckIcon className="h-8 w-8 text-brand-blue" />,
            title: "Seguridad Certificada",
            description: "Dispositivo homologado por SENIAT y SUDEBAN para operaciones comerciales."
        },
        {
            icon: <ClockIcon className="h-8 w-8 text-brand-blue" />,
            title: "Operación 24/7",
            description: "Funciona incluso sin conexión a internet, sincronizando cuando se restablece."
        },
        {
            icon: <ChartBarIcon className="h-8 w-8 text-brand-blue" />,
            title: "Reportes en Tiempo Real",
            description: "Accede a reportes detallados de ventas, inventario y rendimiento desde cualquier lugar."
        },
        {
            icon: <UserGroupIcon className="h-8 w-8 text-brand-blue" />,
            title: "Multiusuario",
            description: "Gestiona múltiples usuarios con diferentes niveles de permisos y accesos."
        }
    ];

    // Specifications data
    const SPECIFICATIONS = [
        { label: "Pantalla", value: "10.1\" HD Touchscreen" },
        { label: "Procesador", value: "Quad-core 2.0GHz" },
        { label: "Memoria RAM", value: "4GB DDR4" },
        { label: "Almacenamiento", value: "64GB SSD" },
        { label: "Sistema Operativo", value: "Android 12 Optimizado" },
        { label: "Conectividad", value: "Wi-Fi, 4G LTE, Bluetooth 5.0" },
        { label: "Puertos", value: "2x USB, 1x Ethernet, 1x HDMI" },
        { label: "Impresora", value: "Térmica 58mm, 80mm/s" },
        { label: "Lector", value: "Código de Barras 1D/2D" },
        { label: "Batería", value: "6000mAh, 8h operación" },
        { label: "Dimensiones", value: "280 x 200 x 150mm" },
        { label: "Peso", value: "1.8kg" }
    ];

    // Testimonials data
    const TESTIMONIALS = [
        {
            quote: "El KD-HKA20 transformó mi negocio. Antes tardaba horas en cerrar la caja, ahora lo hago en minutos y con total precisión.",
            author: "María González",
            company: "Restaurante La Casona"
        },
        {
            quote: "Como farmacia, necesitábamos un dispositivo confiable y rápido. El KD-HKA20 superó todas nuestras expectativas.",
            author: "Carlos Rodríguez",
            company: "Farmacia Salud"
        },
        {
            quote: "La integración con nuestro inventario es perfecta. Ahora tenemos control total sobre nuestras ventas y stock en tiempo real.",
            author: "Ana Martínez",
            company: "Tienda Deportiva Pro"
        }
    ];

    // Pricing data
    const PRICING_PLANS = [
        {
            name: "KD-HKA20 Básico",
            price: "$899",
            frequency: "/unidad",
            initialCost: "$899",
            users: "1 dispositivo",
            features: [
                "Dispositivo KD-HKA20",
                "Software básico de facturación",
                "Soporte estándar 30 días",
                "Garantía 1 año"
            ],
            cta: "Comprar Ahora",
            popular: false
        },
        {
            name: "KD-HKA20 Pro",
            price: "$1,299",
            frequency: "/unidad",
            initialCost: "$1,299",
            users: "1 dispositivo + software",
            features: [
                "Dispositivo KD-HKA20",
                "Software completo con inventario",
                "Soporte prioritario 90 días",
                "Garantía 2 años",
                "Capacitación incluida",
                "Actualizaciones gratis 1 año"
            ],
            cta: "Comprar Ahora",
            popular: true
        },
        {
            name: "KD-HKA20 Enterprise",
            price: "$2,199",
            frequency: "/unidad",
            initialCost: "$2,199",
            users: "1 dispositivo + suite completa",
            features: [
                "Dispositivo KD-HKA20",
                "Suite ERP completa integrada",
                "Soporte 24/7 ilimitado",
                "Garantía extendida 3 años",
                "Capacitación presencial",
                "Actualizaciones vitalicias",
                "Integración con sistemas existentes"
            ],
            cta: "Contactar Ventas",
            popular: false
        }
    ];

    const VideoSection: React.FC = () => (
        <section id="kdhka20-video" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-animate>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                        Descubre la KD-HKA20 en Acción
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Mira esta imagen para ver lo fácil que es operar, cobrar y gestionar tu negocio con nuestro dispositivo todo-en-uno.
                    </p>
                </div>
                <div
                    className="max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200 flex justify-center items-center"
                    data-animate
                    style={{ transitionDelay: '200ms' }}
                >
                    <img
                        src="/images/kdhka20/hka20.webp"
                        alt="Demostración del dispositivo KD-HKA20"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );

    const PhotoGallerySection: React.FC = () => {
        const photos = [
            "/images/kdhka20/hkah201.webp",
            "/images/kdhka20/hka20.webp",
            "/images/kdhka20/hkah201.webp",
            "/images/kdhka20/hka20.webp",
            "/images/kdhka20/hkah201.webp",
            "/images/kdhka20/hka20.webp"
        ];

        return (
            <section id="kdhka20-gallery" className="py-20 bg-brand-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                            Galería del KD-HKA20
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Explora nuestro dispositivo desde todos los ángulos y descubre su diseño elegante y funcional.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {photos.map((photo, index) => (
                            <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl group" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                                <img src={photo} alt={`KD-HKA20 View ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

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
                           <img src="/images/kdhka20/hkah201.webp" alt="KD-HKA20 Device" className="max-w-sm w-full drop-shadow-2xl" />
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
                            El KD-HKA20 integra todo lo que necesitas en un solo dispositivo elegante y potente.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FEATURES.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300" data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                                <div className="mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video/Image Section */}
            <VideoSection />

            {/* Specifications Section */}
            <section id="kdhka20-specs" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                            Especificaciones Técnicas
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Conoce el poder y la tecnología detrás del KD-HKA20.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {SPECIFICATIONS.map((spec, index) => (
                            <div key={index} className="bg-brand-gray p-6 rounded-xl flex justify-between items-center border border-gray-200" data-animate style={{ transitionDelay: `${index * 50}ms` }}>
                                <span className="font-semibold text-gray-700">{spec.label}:</span>
                                <span className="font-bold text-brand-blue">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <PhotoGallerySection />

            {/* Testimonials Section */}
            <section id="kdhka20-testimonials" className="py-20 bg-brand-gray">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                            Lo que dicen nuestros clientes
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Empresas como la tuya ya están transformando su operación con el KD-HKA20.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
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

            {/* Pricing Section */}
            <section id="kdhka20-pricing" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-animate>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                            Elige el plan perfecto para tu negocio
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Precios transparentes, sin sorpresas. Todo lo que necesitas para empezar.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {PRICING_PLANS.map((plan, index) => (
                            <div key={index} className={`bg-gray-50 p-8 rounded-3xl border-2 flex flex-col ${plan.popular ? 'border-brand-blue ring-4 ring-brand-blue/20' : 'border-gray-200'}`} data-animate style={{ transitionDelay: `${index * 100}ms` }}>
                                {plan.popular && (
                                    <div className="bg-brand-blue text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-4">
                                        MÁS POPULAR
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-brand-blue mb-2">{plan.name}</h3>
                                <p className="text-gray-500 mb-6">Costo inicial único de <span className="font-bold">{plan.initialCost}</span></p>
                                <div className="flex-grow">
                                    <p className="text-5xl font-extrabold text-gray-900 mb-2">{plan.price}<span className="text-lg font-medium text-gray-500">{plan.frequency}</span></p>
                                    <p className="font-semibold text-gray-600 mb-6">{plan.users}</p>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <CheckCircleIcon className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a href="#kdhka20-contact" className={`mt-8 block w-full text-center font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105 ${plan.popular ? 'bg-brand-blue text-white hover:bg-blue-700' : 'bg-white border-2 border-brand-blue text-brand-blue hover:bg-blue-50'}`}>
                                    {plan.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="kdhka20-contact" className="py-20 bg-brand-blue-dark text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12" data-animate>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                                ¿Listo para transformar tu negocio con el KD-HKA20?
                            </h2>
                            <p className="text-lg md:text-xl max-w-3xl mx-auto">
                                Completa el formulario y uno de nuestros expertos se pondrá en contacto contigo para una demostración personalizada.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="bg-green-500/20 border border-green-500 rounded-2xl p-8 text-center">
                                <h3 className="text-2xl font-bold mb-4">¡Gracias por tu interés!</h3>
                                <p className="text-lg">Nos pondremos en contacto contigo muy pronto para programar tu demostración.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700" data-animate style={{ transitionDelay: '200ms' }}>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre Completo *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                                            placeholder="Juan Pérez"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                                            placeholder="juan@empresa.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                                            placeholder="+58 414 123 4567"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium mb-2">Empresa</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                                            placeholder="Mi Empresa C.A."
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje (Opcional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                                        placeholder="Cuéntanos sobre tus necesidades..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-green text-brand-blue-dark font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-lg">
                                    Solicitar Demostración Gratuita
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KDHKA20Page;
