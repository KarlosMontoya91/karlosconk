import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '../ui/MagneticButton';
import { Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const FinalCTA = () => {
    const ctaRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ctaRef.current || !containerRef.current) return;

        gsap.fromTo(
            containerRef.current,
            { y: 100, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section ref={ctaRef} id="contact" className="py-24 md:py-32 bg-dark">
            <div className="container mx-auto px-6 md:px-12">
                <div ref={containerRef} className="max-w-5xl mx-auto bg-accent-coral rounded-[3rem] border-2 border-dark shadow-[12px_12px_0px_#1a1a1a] p-12 md:p-20 text-center relative overflow-hidden">

                    {/* Subtle bg decorations */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-[60px]"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-[60px]"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-full border-2 border-dark shadow-[4px_4px_0px_#1a1a1a] flex items-center justify-center mb-8 rotate-12">
                            <Mail className="text-dark" size={32} />
                        </div>

                        <h2 className="font-display font-bold text-5xl md:text-7xl text-dark mb-6 leading-[0.9] tracking-tight text-balance">
                            ¿Listo para dar el siguiente paso?
                        </h2>

                        <p className="text-xl md:text-2xl text-dark/80 font-sans font-medium mb-10 max-w-2xl text-balance">
                            Conversemos sobre cómo puedo aportar valor a tu proyecto o negocio.
                        </p>

                        <MagneticButton size="lg" variant="secondary" onClick={() => window.open('https://wa.me/528120344995', '_blank')}>
                            Hablemos ahora mismo
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </section>
    );
};
