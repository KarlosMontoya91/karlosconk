import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StickerCard } from '../ui/StickerCard';
import { Layers, MousePointer2, Code2, PaintBucket, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        title: 'Diseño Web (90%)',
        description: 'Creación visual de interfaces desde cero, organizando información con alta estética y funcionalidad para el usuario.',
        color: 'coral' as const,
        icon: PaintBucket
    },
    {
        title: 'Experiencia de Usuario (80%)',
        description: 'Aplicación de leyes de Gestalt, Fitts y Hick para garantizar una navegación intuitiva, reduciendo fricción.',
        color: 'lilac' as const,
        icon: Layers
    },
    {
        title: 'Figma Prototyping (80%)',
        description: 'Sistemas de diseño, componentes auto-layout y prototipos interactivos fieles al producto final.',
        color: 'mint' as const,
        icon: MousePointer2
    },
    {
        title: 'Desarrollo Frontend (90%)',
        description: 'HTML5, CSS y JavaScript modernos, código limpio y semántico con accesibilidad en mente (WCAG).',
        color: 'sky' as const,
        icon: Code2
    }
];

export const SkillsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !gridRef.current) return;

        const cards = gridRef.current.children;

        gsap.fromTo(
            cards,
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
        <section ref={sectionRef} className="py-24 bg-dark relative" id="skills">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 max-w-2xl leading-[1.1]">
                        Dominio transversal de <span className="text-accent-mint text-stroke">Diseño</span> y <span className="text-accent-lilac">Código</span>.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-xl text-balance">
                        Desarrollo interfaces pensadas en el usuario, uniendo capacidades de diseño avanzado con un código escalable y optimizado.
                    </p>
                </div>

                <div ref={gridRef} className="flex flex-col gap-6 relative">
                    {/* Timeline decoration */}
                    <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-800 rounded-full z-0"></div>

                    {skills.map((skill, i) => (
                        <StickerCard
                            key={i}
                            color="card"
                            variant="outline"
                            className="group cursor-none border-gray-800 hover:border-accent-sky hover:bg-gray-900/50 backdrop-blur-sm transition-colors z-10"
                            hoverEffect={false}
                        >
                            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                                {/* Number / Node */}
                                <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-dark border-2 border-gray-700 items-center justify-center group-hover:bg-accent-sky group-hover:border-dark transition-all">
                                    <skill.icon size={28} className="text-gray-400 group-hover:text-dark transition-colors" strokeWidth={1.5} />
                                </div>

                                <div className="flex-1 w-full text-center md:text-left">
                                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                        <h3 className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-accent-sky transition-colors">
                                            {skill.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 text-lg font-sans">
                                        {skill.description}
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
