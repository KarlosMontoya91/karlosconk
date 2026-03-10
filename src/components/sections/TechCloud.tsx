import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
    { name: 'HTML5', color: 'bg-accent-coral', rotate: '-rotate-2' },
    { name: 'CSS3', color: 'bg-accent-sky', rotate: 'rotate-3' },
    { name: 'JavaScript', color: 'bg-accent-sand', rotate: '-rotate-1' },
    { name: 'React', color: 'bg-accent-mint', rotate: 'rotate-2' },
    { name: 'Figma', color: 'bg-accent-lilac', rotate: '-rotate-3' },
    { name: 'WordPress', color: 'bg-gray-200', rotate: 'rotate-1' }
];

export const TechCloud = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !titleRef.current || !containerRef.current) return;

        gsap.fromTo(
            titleRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                }
            }
        );

        const cards = containerRef.current.children;
        gsap.fromTo(
            cards,
            { y: 100, opacity: 0, scale: 0.8 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-dark overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 ref={titleRef} className="font-display text-2xl md:text-3xl font-bold text-gray-400 mb-12">
                    Tecnologías y herramientas que dominamos
                </h2>

                <div ref={containerRef} className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
                    {technologies.map((tech, i) => (
                        <div
                            key={i}
                            className={`px-6 py-4 rounded-2xl border-2 border-dark shadow-[4px_4px_0px_#1a1a1a] flex items-center justify-center font-bold text-dark text-xl transition-transform hover:scale-110 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#1a1a1a] cursor-none ${tech.color} ${tech.rotate}`}
                        >
                            {tech.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
