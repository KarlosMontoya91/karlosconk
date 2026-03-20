import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { StickerCard } from '../ui/StickerCard';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
    { name: 'Portafolio CV', desc: 'Portafolio web estilo CV interactivo.', label: 'Portfolio', color: 'sand' as const, year: '2025', role: 'Frontend | Design', image: 'mockup_portafolio_cv.png', link: 'https://karlosmontoya91.github.io/Karlos_Montoya_CV/' },
    { name: 'RESERVIA', desc: 'Plataforma de reservaciones y búsqueda de alojamientos.', label: 'Web App', color: 'coral' as const, year: '2024', role: 'Full Stack', image: 'mockup_reservia.png', link: 'https://reservia.com.mx/' },
    { name: 'CGI-Industrial', desc: 'Sitio corporativo industrial premium.', label: 'Web Corporativa', color: 'lilac' as const, year: '2024', role: 'Web Design', image: 'mockup_CGI.png', link: 'https://www.cgi-industrial.com/' },
    { name: 'SupplyHub', desc: 'Panel de administración y logística.', label: 'Prototipo', color: 'mint' as const, year: '2024', role: 'UX/UI', image: 'caratula_supplyhub.png', link: '' },
    { name: 'App de ahorro', desc: 'Aplicación mobile first de finanzas.', label: 'Web App', color: 'sand' as const, year: '2023', role: 'Frontend', image: 'mockup_appAhorro365.png', link: 'https://karlosmontoya91.github.io/Ahorro365/' },
    { name: 'Control de Gastos', desc: 'Tracker financiero con presupuesto.', label: 'Herramienta', color: 'lilac' as const, year: '2023', role: 'Frontend', image: 'mockup_gastos_mensual.png', link: 'https://karlosmontoya91.github.io/App-de-control-de-gastos/' },
    { name: 'Temoctzin', desc: 'Catálogo de Closets y Cocinas a medida.', label: 'Catálogo', color: 'sand' as const, year: '2023', role: 'Full Stack', image: 'mockup_temoctzin.png', link: 'https://www.temoctzinclosetsycocinas.com/' },
    { name: 'CruzFire', desc: 'Sitio web enfocado en la venta y mantenimiento de extintores.', label: 'Sitio Web', color: 'coral' as const, year: '2022', role: 'Web Design', image: 'mockup_cruzfire.png', link: 'https://cruzfire.net/' },
    { name: 'JHI Hidraulica', desc: 'Sitio web enfocado en la venta y reparación de equipos hidraulicos.', label: 'Sitio Web', color: 'sky' as const, year: '2022', role: 'Web Design', image: 'mockup_JHI.png', link: '' }
];

export const PortfolioSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollContainerRef.current) return;
        const items = scrollContainerRef.current.children;

        gsap.fromTo(
            items,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                }
            }
        );
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = window.innerWidth < 768 ? 320 : 450;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section ref={sectionRef} className="py-32 bg-dark overflow-hidden" id="portfolio">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                            Mi Portafolio
                        </h2>
                        <p className="text-xl text-gray-400 font-sans max-w-lg">
                            Selección de proyectos recientes destacando experiencia en diseño de interfaces y desarrollo robusto.
                        </p>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border-2 border-gray-700 hover:border-accent-sky hover:text-accent-sky text-gray-400 flex items-center justify-center transition-colors"
                            aria-label="Anterior proyecto"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border-2 border-gray-700 hover:border-accent-sky hover:text-accent-sky text-gray-400 flex items-center justify-center transition-colors"
                            aria-label="Siguiente proyecto"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal Carousel */}
            <div className="pl-6 md:pl-12 lg:pl-16 pr-6 w-full">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {portfolioItems.map((item, i) => (
                        <a 
                            key={i} 
                            href={item.link || '#'} 
                            target={item.link ? "_blank" : "_self"}
                            rel={item.link ? "noopener noreferrer" : ""}
                            className="group block min-w-[320px] md:min-w-[420px] lg:min-w-[480px] h-[550px] snap-center shrink-0"
                        >
                            <StickerCard
                                color={item.color}
                                hoverEffect={false}
                                className="w-full h-full flex flex-col p-8 md:p-10 relative cursor-pointer"
                            >
                                {/* Top Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-col gap-2">
                                        <span className="inline-block px-3 py-1 bg-white/30 text-dark rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                                            {item.label}
                                        </span>
                                        <p className="font-sans font-medium opacity-80 text-sm">{item.role}</p>
                                    </div>
                                    <span className="font-sans font-bold opacity-70 text-lg">{item.year}</span>
                                </div>

                                {/* Title */}
                                <h3 className="font-display font-bold text-4xl lg:text-5xl leading-tight mb-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    {item.name}
                                </h3>

                                {/* Image / Visual Placeholder */}
                                <div className="absolute left-6 right-6 bottom-0 top-[180px] md:top-[200px] rounded-t-3xl overflow-hidden bg-dark transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom group-hover:scale-[0.85] group-hover:opacity-40 border-t-4 border-x-4 border-[#0d0d0d]">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-50"
                                    />
                                </div>

                                {/* Description (hidden by default, shown on hover in the space created by shrinking image) */}
                                <div className="absolute inset-x-8 bottom-12 flex flex-col items-center justify-center text-center opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-20 pointer-events-none">
                                    <p className="text-white text-lg md:text-xl font-medium font-sans max-w-sm drop-shadow-md">
                                        {item.desc}
                                    </p>
                                    <div className="mt-6 w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center shrink-0 shadow-lg">
                                        <ArrowUpRight strokeWidth={2.5} />
                                    </div>
                                </div>

                            </StickerCard>
                        </a>
                    ))}
                </div>
            </div>

            {/* Injected styles for hiding scrollbar globally if needed, though inline style handles most */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};
