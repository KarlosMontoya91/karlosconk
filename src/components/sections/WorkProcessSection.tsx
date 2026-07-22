const steps = [
    { num: '01', title: 'Descubrimiento', desc: 'Entendemos tu negocio, objetivos, problemas actuales y usuarios.' },
    { num: '02', title: 'Definición del alcance', desc: 'Acordamos los requerimientos técnicos y funcionales del proyecto.' },
    { num: '03', title: 'Investigación y arquitectura', desc: 'Estructuramos la información y creamos los flujos de usuario (wireframes).' },
    { num: '04', title: 'Diseño UX/UI', desc: 'Diseñamos interfaces accesibles, atractivas y listas para desarrollo.' },
    { num: '05', title: 'Desarrollo', desc: 'Programamos el producto con código limpio, escalable y responsivo.' },
    { num: '06', title: 'Pruebas', desc: 'Validamos calidad, accesibilidad y rendimiento en múltiples dispositivos.' },
    { num: '07', title: 'Entrega', desc: 'Despliegue a producción y capacitación sobre el uso del producto.' },
    { num: '08', title: 'Seguimiento', desc: 'Soporte, analíticas y ajustes para garantizar el éxito continuo.' },
];

export const WorkProcessSection = () => {
    return (
        <section id="process" className="py-24 bg-[#050505] border-t border-gray-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">Así trabajaremos</h2>
                    <p className="text-lg text-gray-400 font-sans leading-relaxed">
                        Un proceso estructurado, transparente y colaborativo para asegurar que el resultado final cumpla y supere tus expectativas. <span className="italic">El proceso puede adaptarse según el alcance de tu proyecto.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 bg-[#0a0a0a] rounded-2xl border border-gray-800 hover:border-accent-mint/50 transition-colors">
                            <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-dark border-2 border-gray-800 flex items-center justify-center text-sm font-bold text-accent-sky z-10">
                                {step.num}
                            </span>
                            <h3 className="text-lg font-bold text-white mt-2 mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
