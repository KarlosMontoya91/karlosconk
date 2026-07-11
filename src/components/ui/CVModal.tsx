import React, { useEffect, useState } from 'react';
import { X, Download, FileText } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { cn } from '../../utils/cn';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
    const [shouldRenderIframe, setShouldRenderIframe] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRenderIframe(true);
            // Disable body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Restore body scroll
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            // Clean up cursor follower hiding just in case
            document.body.classList.remove('hide-custom-cursor');
        };
    }, [isOpen]);

    const pdfUrl = `${import.meta.env.BASE_URL}CV_Carlos__Montoya.pdf`;

    return (
        <div
            className={cn(
                "fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 transition-all duration-300 ease-out",
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Box */}
            <div
                className={cn(
                    "relative w-full max-w-5xl h-[85vh] bg-card border-2 border-dark text-white rounded-[2rem] md:rounded-[2.5rem] flex flex-col shadow-[12px_12px_0px_#0d0d0d] overflow-hidden z-10 transition-all duration-500 ease-out transform",
                    isOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"
                )}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/40">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-coral flex items-center justify-center border-2 border-dark shadow-[2px_2px_0px_#000]">
                            <FileText className="text-dark" size={20} />
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-xl md:text-2xl text-white leading-tight">
                                Currículum Vitae
                            </h3>
                            <p className="text-xs text-gray-400 font-sans hidden sm:block">
                                Vista previa de CV original
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Download Button (desktop only, hidden on mobile in header, shown in body/footer) */}
                        <a href={pdfUrl} download="CV_Carlos_Alonso_Cruz_Montoya.pdf" className="hidden sm:block">
                            <MagneticButton variant="primary" size="sm" className="gap-2">
                                <Download size={16} />
                                <span>Descargar CV</span>
                            </MagneticButton>
                        </a>

                        {/* Close Button */}
                        <MagneticButton variant="secondary" size="sm" onClick={onClose} className="gap-2">
                            <X size={16} />
                            <span>Cerrar</span>
                        </MagneticButton>
                    </div>
                </div>

                {/* PDF Viewer Body */}
                <div className="flex-1 bg-dark/50 relative p-4 flex flex-col items-center justify-center overflow-hidden">
                    {shouldRenderIframe ? (
                        <div className="w-full h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden border border-gray-800 bg-[#121212]">
                            {/* PDF iframe viewer */}
                            <iframe
                                src={`${pdfUrl}#toolbar=0`}
                                className="w-full h-full border-none hidden md:block"
                                title="CV Carlos Montoya Preview"
                                onMouseEnter={() => document.body.classList.add('hide-custom-cursor')}
                                onMouseLeave={() => document.body.classList.remove('hide-custom-cursor')}
                            />
                            
                            {/* Fallback layout for mobile devices / small screens where inline PDFs aren't reliable */}
                            <div className="md:hidden flex flex-col items-center justify-center text-center p-6 h-full">
                                <div className="w-20 h-20 bg-accent-coral/25 rounded-full flex items-center justify-center border border-accent-coral mb-6 animate-pulse">
                                    <FileText className="text-accent-coral" size={40} />
                                </div>
                                <h4 className="font-display font-bold text-xl text-white mb-2">
                                    Visualización en Dispositivo Móvil
                                </h4>
                                <p className="text-gray-400 font-sans text-sm max-w-xs mb-8">
                                    Los navegadores móviles suelen requerir la descarga del archivo para poder leerlo correctamente.
                                </p>
                                <a href={pdfUrl} download="CV_Carlos_Alonso_Cruz_Montoya.pdf">
                                    <MagneticButton variant="primary" size="md" className="gap-2">
                                        <Download size={18} />
                                        <span>Descargar CV Completo</span>
                                    </MagneticButton>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="text-gray-500 animate-pulse font-sans">
                            Cargando vista previa...
                        </div>
                    )}
                </div>
                
                {/* Mobile direct download bar */}
                <div className="sm:hidden flex justify-center p-4 border-t border-gray-800 bg-gray-900/20">
                    <a href={pdfUrl} download="CV_Carlos_Alonso_Cruz_Montoya.pdf" className="w-full">
                        <button className="w-full bg-accent-coral text-dark border-2 border-dark shadow-[4px_4px_0px_#1a1a1a] font-sans font-semibold py-3 px-6 rounded-[2rem] flex items-center justify-center gap-2">
                            <Download size={18} />
                            <span>Descargar CV</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
