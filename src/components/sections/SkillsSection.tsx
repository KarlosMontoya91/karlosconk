import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StickerCard } from '../ui/StickerCard';
import { Layers, MousePointer2, Code2, PaintBucket } from 'lucide-react';

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
            { y: 150, opacity: 0, rotation: 5 },
            {
                y: 0,
                opacity: 1,
                rotation: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
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

                <div ref={gridRef} className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {skills.map((skill, i) => (
                        <StickerCard
                            key={i}
                            color={skill.color}
                            className={`p-10 flex flex-col gap-6 ${i % 2 !== 0 ? 'md:mt-16' : ''}`}
                        >
                            <div className="w-16 h-16 rounded-full bg-dark/10 flex items-center justify-center mb-4">
                                <skill.icon size={32} className="text-dark" strokeWidth={2} />
                            </div>
                            <h3 className="font-display font-bold text-3xl leading-tight">
                                {skill.title}
                            </h3>
                            <p className="text-lg font-medium opacity-80 leading-relaxed font-sans">
                                {skill.description}
                            </p>
                        </StickerCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
