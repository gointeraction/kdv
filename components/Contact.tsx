import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: typeof formData) => {
    const newErrors: { [key: string]: string } = {};

    if (!data.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    if (!data.company.trim()) newErrors.company = 'La empresa es obligatoria.';
    if (!data.message.trim()) newErrors.message = 'El mensaje es obligatorio.';

    if (!data.email.trim()) {
        newErrors.email = 'El email es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        newErrors.email = 'El formato del email no es válido.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    validate(updatedFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(formData)) {
      console.log('Form data submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue-dark to-brand-blue text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center" data-animate>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contacto</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comienza tu Transformación Digital
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Únete a las empresas que ya están transformando sus operaciones con nuestras soluciones de Kit Digital Venezuela.
          </p>
        </div>
      </div>
      
      {/* Form Section */}
      <div className="pb-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700" data-animate style={{ transitionDelay: '200ms'}}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">Solicitar Demostración</h3>
              <p className="text-gray-400 mt-2">Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.</p>
            </div>
            {submitted ? (
              <div className="text-center p-4 bg-emerald-100 text-emerald-800 rounded-lg">
                <p className="font-semibold">¡Gracias por tu mensaje!</p>
                <p>Nos pondremos en contacto contigo a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className={`mt-1 block w-full px-4 py-3 bg-slate-700 border ${errors.name ? 'border-red-500' : 'border-slate-600'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green text-white transition-shadow`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className={`mt-1 block w-full px-4 py-3 bg-slate-700 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green text-white transition-shadow`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Empresa <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Nombre de tu empresa"
                    className={`mt-1 block w-full px-4 py-3 bg-slate-700 border ${errors.company ? 'border-red-500' : 'border-slate-600'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green text-white transition-shadow`}
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensaje <span className="text-red-500">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntanos sobre tus necesidades y objetivos..."
                    className={`mt-1 block w-full px-4 py-3 bg-slate-700 border ${errors.message ? 'border-red-500' : 'border-slate-600'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green text-white transition-shadow`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="w-full bg-brand-green text-brand-blue-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition-all transform hover:scale-105"
                  >
                    Solicitar Demostración
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;