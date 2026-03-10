import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { StickerCard } from '../ui/StickerCard';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
    { name: 'Portafolio CV', desc: 'Versión original de presentación interactiva.', label: 'Portfolio' },
    { name: 'RESERVIA', desc: 'Plataforma de reservaciones y búsqueda de alojamientos.', label: 'Web App' },
    { name: 'CGI-Industrial', desc: 'Sitio corporativo industrial premium.', label: 'Corporativo' },
    { name: 'SupplyHub', desc: 'Panel de administración y logística.', label: 'Dashboard' },
    { name: 'App de ahorro', desc: 'Aplicación mobile first de finanzas.', label: 'Mobile' },
    { name: 'Control de Gastos', desc: 'Tracker financiero con presupuesto.', label: 'Herramienta' },
    { name: 'Temoctzin', desc: 'Catálogo de Closets y Cocinas a medida.', label: 'Catálogo' }
];

export const PortfolioSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!listRef.current) return;

        const items = listRef.current.children;

        gsap.fromTo(
            items,
            { y: 50, opacity: 0, scale: 0.98 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-dark">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                            Mi Portafolio
                        </h2>
                        <p className="text-xl text-gray-400 font-sans max-w-lg">
                            Selección de proyectos recientes destacando experiencia en diseño de interfaces y desarrollo robusto.
                        </p>
                    </div>
                </div>

                <div ref={listRef} className="flex flex-col gap-6 relative">
                    {/* Timeline decoration */}
                    <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-800 rounded-full z-0"></div>

                    {portfolioItems.map((item, i) => (
                        <StickerCard
                            key={i}
                            color="card"
                            variant="outline"
                            className="group cursor-none border-gray-800 hover:border-accent-sky hover:bg-gray-900/50 backdrop-blur-sm transition-colors z-10"
                            hoverEffect={false}
                        >
                            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">

                                {/* Number / Node */}
                                <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-dark border-2 border-gray-700 items-center justify-center font-display font-bold text-xl group-hover:bg-accent-sky group-hover:text-dark group-hover:border-dark transition-all">
                                    {String(i + 1).padStart(2, '0')}
                                </div>

                                <div className="flex-1 w-full text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                        <h3 className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-accent-sky transition-colors">
                                            {item.name}
                                        </h3>
                                        <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs font-bold uppercase tracking-wider w-fit mx-auto md:mx-0 border border-gray-700">
                                            {item.label}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-lg font-sans">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-full border-2 border-gray-700 group-hover:border-accent-sky group-hover:bg-accent-sky flex items-center justify-center transition-all bg-dark shadow-sm">
                                        <ArrowUpRight className="text-gray-400 group-hover:text-dark transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </StickerCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
