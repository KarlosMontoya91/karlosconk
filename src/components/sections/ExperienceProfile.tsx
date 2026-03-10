import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Briefcase, Code2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceProfile = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !imageRef.current || !textRef.current) return;

        gsap.fromTo(
            imageRef.current,
            { x: -50, opacity: 0, rotate: -5 },
            {
                x: 0,
                opacity: 1,
                rotate: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }
            }
        );

        gsap.fromTo(
            textRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 65%',
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-[#0a0a0a] border-y border-gray-800 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    <div className="lg:col-span-4" ref={imageRef}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent-sky rounded-[3rem] rotate-6 transform transition-transform hover:rotate-12 border-2 border-dark shadow-[4px_4px_0px_#000]"></div>
                            <div className="relative aspect-[3/4] rounded-[3rem] bg-gray-800 border-2 border-dark overflow-hidden shadow-[8px_8px_0px_#000]">
                                {/* Fallback to simple Avatar or Graphic if Image unavailable */}
                                <img
                                    src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop"
                                    alt="Karlos Montoya"
                                    className="w-full h-full object-cover grayscale opacity-90 mix-blend-screen"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-accent-coral p-4 rounded-2xl border-2 border-dark shadow-[4px_4px_0px_#000]">
                                    <p className="font-bold text-dark text-lg leading-tight">Autor / Desarrollador</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8" ref={textRef}>
                        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-lilac/10 text-accent-lilac border border-accent-lilac/20 font-semibold text-sm">
                            <Award size={16} />
                            <span>Experiencia Especializada</span>
                        </div>

                        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            Diseñador UI/UX & <br />
                            <span className="text-gray-500">Desarrollador Frontend.</span>
                        </h2>

                        <div className="space-y-6 text-xl text-gray-400 font-sans max-w-3xl leading-relaxed">
                            <p>
                                Mi enfoque integral me permite visualizar las interfaces complejas desde el Figma hasta la implementación total en código. Comprendo cómo cada decisión de diseño afecta el rendimiento web y cómo potenciar la UX resolviendo desafíos de ingeniería.
                            </p>

                            <ul className="space-y-4 mt-8">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-accent-mint flex items-center justify-center shrink-0 mt-1 border-2 border-dark shadow-[2px_2px_0px_#000]">
                                        <Briefcase size={16} className="text-dark" />
                                    </div>
                                    <div>
                                        <strong className="text-white block font-display text-2xl mb-1">Especialista UX/UI (2022 - Presente)</strong>
                                        <span className="text-lg">Diseño y creación de prototipos funcionales aplicando la Ley de Hick y principios Gestalt para optimizar interacciones.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-accent-sky flex items-center justify-center shrink-0 mt-1 border-2 border-dark shadow-[2px_2px_0px_#000]">
                                        <Code2 size={16} className="text-dark" />
                                    </div>
                                    <div>
                                        <strong className="text-white block font-display text-2xl mb-1">Desarrollador Frontend (2022 - Presente)</strong>
                                        <span className="text-lg">Construcción de interfaces responsivas y optimizadas y garantía de estándares de Accesibilidad (WCAG).</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
