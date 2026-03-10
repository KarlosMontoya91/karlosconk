import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MagneticButton } from '../ui/MagneticButton';
import { Code2 } from 'lucide-react';

export const Header = () => {
    const headerRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!headerRef.current) return;

        gsap.fromTo(
            headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-dark/80 backdrop-blur-md border-b border-gray-800' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-accent-mint flex items-center justify-center border-2 border-dark shadow-[2px_2px_0px_#000] group-hover:shadow-[4px_4px_0px_#000] group-hover:-translate-y-0.5 transition-all">
                        <Code2 className="text-dark" size={24} strokeWidth={2.5} />
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight text-white hidden sm:block">
                        Karlos<span className="text-accent-mint">Montoya</span>
                    </span>
                </a>

                <div className="flex items-center gap-4">
                    <MagneticButton variant="secondary" size="sm" onClick={() => window.open('https://karlosmontoya91.github.io/Karlos_Montoya_CV/', '_blank')}>
                        Ver CV Original
                    </MagneticButton>
                    <MagneticButton variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Contactar
                    </MagneticButton>
                </div>
            </div>
        </header>
    );
};
