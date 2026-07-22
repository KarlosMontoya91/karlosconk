import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: '¿La cotización es definitiva?',
        a: 'La estimación obtenida en el cotizador es informativa. El precio y alcance final se confirman mediante una propuesta formal después de revisar tus requerimientos detalladamente.'
    },
    {
        q: '¿Qué necesito para comenzar?',
        a: 'Idealmente, tener claridad sobre tu objetivo de negocio, contenido básico (textos, imágenes), y un presupuesto estimado. Si no tienes algo de esto, puedo ayudarte durante la etapa de descubrimiento.'
    },
    {
        q: '¿Cuánto tarda un proyecto?',
        a: 'Depende de la complejidad. Una Landing Page puede tomar de 2 a 3 semanas, mientras que un sistema web a medida puede extenderse de 2 a 3 meses. El tiempo exacto se detalla en la cotización formal.'
    },
    {
        q: '¿Puedo contratar solo diseño UX/UI o solo desarrollo?',
        a: '¡Por supuesto! Puedes contratar mis servicios para diseñar interfaces (entregables en Figma) que tu equipo desarrollará, o para desarrollar diseños que ya tienes listos.'
    },
    {
        q: '¿El dominio y hosting están incluidos?',
        a: 'Generalmente no, ya que estos servicios deben estar a tu nombre. Sin embargo, te asesoro paso a paso para adquirirlos y me encargo de toda la configuración técnica.'
    },
    {
        q: '¿Trabajas con sitios existentes?',
        a: 'Sí, ofrezco servicios de auditoría UX y rediseño para mejorar la conversión, usabilidad y aspecto de tu producto digital actual.'
    },
    {
        q: '¿Cómo se realizan los pagos?',
        a: 'Usualmente trabajamos con un anticipo del 50% para iniciar, y el 50% restante contra entrega. En proyectos muy grandes, podemos definir pagos por hitos (milestones).'
    }
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-dark border-t border-gray-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">Preguntas frecuentes</h2>
                        <p className="text-lg text-gray-400 font-sans leading-relaxed mb-8">
                            Respuestas rápidas sobre mi proceso de trabajo, cotizaciones y servicios. Si tienes alguna otra duda, no dudes en contactarme.
                        </p>
                    </div>

                    <div className="md:col-span-7">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div 
                                    key={index} 
                                    className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent-mint"
                                        aria-expanded={openIndex === index}
                                    >
                                        <span className="font-bold text-white pr-4">{faq.q}</span>
                                        <div className={`text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent-sky' : ''}`}>
                                            <ChevronDown size={20} />
                                        </div>
                                    </button>
                                    
                                    <div 
                                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                                        aria-hidden={openIndex !== index}
                                    >
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
