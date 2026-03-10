import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MagneticButton } from '../ui/MagneticButton';
import { Sparkles, Figma, Code, Palette, Laptop } from 'lucide-react';

export const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const title1Ref = useRef<HTMLHeadingElement>(null);
    const title2Ref = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const badgesRef = useRef<HTMLDivElement>(null);

    // Floating animation for badges
    useEffect(() => {
        if (!badgesRef.current) return;

        const badges = badgesRef.current.children;

        // Initial entrance stagger
        gsap.fromTo(
            [title1Ref.current, title2Ref.current, textRef.current, ctaRef.current],
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
        );

        gsap.fromTo(
            badges,
            { scale: 0, opacity: 0, rotation: -15 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)', delay: 0.6 }
        );

        // Continuous floating animation
        Array.from(badges).forEach((badge, i) => {
            gsap.to(badge, {
                y: `random(-15, 15)`,
                x: `random(-10, 10)`,
                rotation: `random(-5, 5)`,
                duration: `random(3, 5)`,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: i * 0.2
            });
        });

    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-accent-sky text-sm font-semibold mb-6">
                        <Sparkles size={16} />
                        <span>Disponible para nuevos proyectos</span>
                    </div>

                    <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-4 text-white">
                        <div ref={title1Ref} className="overflow-hidden py-1">Desarrollo</div>
                        <div ref={title2Ref} className="text-accent-coral overflow-hidden py-1">Frontend & UX</div>
                    </h1>

                    <p ref={textRef} className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl font-sans text-balance leading-relaxed">
                        Soy Karlos Montoya, especializado en la creación y diseño de interfaces premium
                        centradas en el usuario. Combinando ingeniería de sistemas con dirección de arte.
                    </p>

                    <div ref={ctaRef} className="flex flex-wrap items-center gap-6">
                        <MagneticButton size="lg" variant="primary">
                            Ver Portafolio
                        </MagneticButton>
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-dark bg-gray-800 flex items-center justify-center relative overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-dark bg-accent-sand text-dark font-bold text-xs flex items-center justify-center z-10">
                                +10
                            </div>
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                            Proyectos <br />Exitosos
                        </span>
                    </div>
                </div>

                {/* Right Visuals (Floating Badges & Stickers) */}
                <div className="relative h-[500px] hidden lg:block" ref={badgesRef}>

                    {/* Main central illustration placeholder */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gray-800 rounded-full border border-gray-700 blur-[80px] opacity-50"></div>

                    {/* Floating Sticker 1 */}
                    <div className="absolute top-[10%] right-[10%] w-32 h-32 bg-accent-coral rounded-[2rem] border-2 border-dark shadow-[4px_4px_0px_#000] flex flex-col items-center justify-center p-4">
                        <Figma size={40} className="text-dark mb-2" strokeWidth={1.5} />
                        <span className="font-bold text-dark text-sm">Figma Pro</span>
                    </div>

                    {/* Floating Sticker 2 */}
                    <div className="absolute bottom-[20%] right-[5%] w-40 h-24 bg-accent-mint rounded-[1.5rem] border-2 border-dark shadow-[4px_4px_0px_#000] flex items-center justify-center gap-3 p-4">
                        <Code size={32} className="text-dark" />
                        <span className="font-bold text-dark text-base leading-tight">React<br />Ecosystem</span>
                    </div>

                    {/* Floating Sticker 3 */}
                    <div className="absolute top-[30%] left-[5%] w-36 h-36 bg-accent-lilac rounded-full border-2 border-dark shadow-[4px_4px_0px_#000] flex flex-col items-center justify-center p-4">
                        <Palette size={40} className="text-dark mb-2" strokeWidth={1.5} />
                        <span className="font-bold text-dark text-sm">UI / UX</span>
                    </div>

                    {/* Floating Sticker 4 */}
                    <div className="absolute bottom-[10%] left-[15%] w-28 h-28 bg-accent-sky rounded-[1.5rem] border-2 border-dark shadow-[4px_4px_0px_#000] rotate-12 flex flex-col items-center justify-center p-4">
                        <Laptop size={32} className="text-dark mb-2" strokeWidth={1.5} />
                        <span className="font-bold text-dark text-xs text-center w-full">Responsive<br />Design</span>
                    </div>

                </div>
            </div>
        </section>
    );
};
