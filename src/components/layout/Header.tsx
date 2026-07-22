import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MagneticButton } from '../ui/MagneticButton';
import { useViewMode } from '../../context/ViewModeContext';
import { Briefcase, Building2 } from 'lucide-react';

interface HeaderProps {
    onOpenCV: () => void;
}

export const Header = ({ onOpenCV }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const { mode, toggleMode } = useViewMode();
    const [showHint, setShowHint] = useState(true);

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
                    <div className="w-20 h-8 flex items-center justify-center transition-all group-hover:-translate-y-0.5">
                        <img src={`${import.meta.env.BASE_URL}KM_logo.png`} alt="Logo" className="w-20 h-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight text-white hidden md:block">
                        Karlos<span className="text-accent-mint">Montoya</span>
                    </span>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 relative">
                    {/* Switch Toggle with Active Hint Bubble */}
                    <div className="relative">
                        <button
                            onClick={() => {
                                toggleMode();
                                setShowHint(false); // Hide hint if they use it
                            }}
                            aria-checked={mode === 'commercial'}
                            role="switch"
                            className="flex items-center gap-2 bg-gray-800 rounded-full p-1 border border-gray-700 hover:border-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-mint"
                        >
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${mode === 'professional' ? 'bg-accent-mint text-dark' : 'text-gray-400'}`}>
                                <Briefcase size={16} />
                            </div>
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${mode === 'commercial' ? 'bg-accent-coral text-white' : 'text-gray-400'}`}>
                                <Building2 size={16} />
                            </div>
                        </button>

                        {/* Active Hint Bubble */}
                        {showHint && (
                            <div className="absolute top-14 left-1/2 -translate-x-1/2 z-50 w-max max-w-[220px] animate-in fade-in slide-in-from-top-2 duration-500">
                                <div className="bg-accent-lilac/10 backdrop-blur-md border border-accent-lilac text-white text-xs text-left py-3 px-4 rounded-xl shadow-xl relative pr-8">
                                    {mode === 'professional' 
                                        ? '¿Buscas servicios o cotizar un proyecto? Presiona aquí.' 
                                        : '¿Buscas mi portafolio y CV original? Presiona aquí.'}
                                    
                                    <button 
                                        onClick={() => setShowHint(false)}
                                        className="absolute top-2 right-2 text-gray-300 hover:text-white transition-colors"
                                        aria-label="Cerrar sugerencia"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </button>
                                </div>
                                {/* Arrow */}
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#130f1a] border-t border-l border-accent-lilac rotate-45"></div>
                            </div>
                        )}
                    </div>

                    {mode === 'professional' ? (
                        <>
                            <div className="hidden sm:block">
                                <MagneticButton variant="secondary" size="sm" onClick={onOpenCV}>
                                    Ver CV Original
                                </MagneticButton>
                            </div>
                            <MagneticButton variant="primary" size="sm" onClick={() => window.open('https://wa.me/528132765166', '_blank')}>
                                Contactar
                            </MagneticButton>
                        </>
                    ) : (
                        <>
                            <div className="hidden sm:block">
                                <MagneticButton variant="secondary" size="sm" onClick={() => {
                                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    Servicios
                                </MagneticButton>
                            </div>
                            <MagneticButton variant="primary" size="sm" onClick={() => {
                                document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Cotizador
                            </MagneticButton>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
