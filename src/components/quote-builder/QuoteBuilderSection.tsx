import { useState } from 'react';
import { projectTypes, projectSizes, extraFeatures } from '../../data/quote-config';
import { calculateQuote } from '../../domain/quote/calculateQuote';
import type { QuoteState } from '../../domain/quote/calculateQuote';
import { generateWhatsAppLink } from '../../utils/whatsapp';
import { Check, Send, AlertCircle } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

export const QuoteBuilderSection = () => {
    const [state, setState] = useState<QuoteState>({
        typeId: null,
        sizeId: null,
        featureIds: [],
    });

    const [currentStep, setCurrentStep] = useState(1);

    const calculation = calculateQuote(state);

    const toggleFeature = (id: string) => {
        setState(prev => {
            const isSelected = prev.featureIds.includes(id);
            if (isSelected) {
                return { ...prev, featureIds: prev.featureIds.filter(fid => fid !== id) };
            } else {
                return { ...prev, featureIds: [...prev.featureIds, id] };
            }
        });
    };

    const isUxUiOnly = state.typeId === 'uxui';

    const handleNext = () => {
        if (currentStep === 1 && isUxUiOnly) {
            setCurrentStep(3); // Skip size
        } else {
            setCurrentStep(prev => Math.min(prev + 1, 3));
        }
    };

    const handlePrev = () => {
        if (currentStep === 3 && isUxUiOnly) {
            setCurrentStep(1);
        } else {
            setCurrentStep(prev => Math.max(prev - 1, 1));
        }
    };

    const handleWhatsApp = () => {
        window.open(generateWhatsAppLink(state, calculation.total), '_blank');
    };

    return (
        <section id="quote" className="py-24 bg-[#050505] border-t border-gray-900">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">Configura tu proyecto</h2>
                    <p className="text-lg text-gray-400 font-sans leading-relaxed max-w-2xl mx-auto">
                        Obtén un presupuesto estimado al instante. Selecciona las opciones que mejor se adapten a lo que necesitas.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-12">
                    
                    {/* Steps / Form */}
                    <div className="md:col-span-8">
                        {/* Progress Bar */}
                        <div className="flex items-center justify-between mb-8">
                            {[1, 2, 3].map(step => (
                                <div key={step} className={`flex items-center ${step < 3 ? 'w-full' : ''}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors ${
                                        currentStep >= step ? 'bg-accent-mint text-dark' : 'bg-gray-800 text-gray-500'
                                    }`}>
                                        {step}
                                    </div>
                                    {step < 3 && (
                                        <div className={`h-1 flex-1 mx-2 rounded transition-colors ${
                                            currentStep > step ? 'bg-accent-mint' : 'bg-gray-800'
                                        }`} />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Step 1: Tipo de Proyecto */}
                        {currentStep === 1 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h3 className="text-2xl font-bold text-white mb-6">1. ¿Qué tipo de proyecto necesitas?</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {projectTypes.map(pt => (
                                        <button
                                            key={pt.id}
                                            onClick={() => setState({ ...state, typeId: pt.id })}
                                            className={`p-5 rounded-2xl border text-left transition-all ${
                                                state.typeId === pt.id 
                                                ? 'bg-accent-mint/10 border-accent-mint' 
                                                : 'bg-[#0a0a0a] border-gray-800 hover:border-gray-600'
                                            }`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className={`font-bold ${state.typeId === pt.id ? 'text-accent-mint' : 'text-white'}`}>
                                                    {pt.label}
                                                </h4>
                                                {state.typeId === pt.id && <Check size={18} className="text-accent-mint" />}
                                            </div>
                                            <p className="text-sm text-gray-400">{pt.description}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Tamaño */}
                        {currentStep === 2 && !isUxUiOnly && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h3 className="text-2xl font-bold text-white mb-6">2. Tamaño del proyecto</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {projectSizes.map(size => (
                                        <button
                                            key={size.id}
                                            onClick={() => setState({ ...state, sizeId: size.id })}
                                            className={`p-5 rounded-2xl border text-center transition-all ${
                                                state.sizeId === size.id 
                                                ? 'bg-accent-coral/10 border-accent-coral' 
                                                : 'bg-[#0a0a0a] border-gray-800 hover:border-gray-600'
                                            }`}
                                        >
                                            <div className="flex justify-center mb-2">
                                                {state.sizeId === size.id && <Check size={18} className="text-accent-coral" />}
                                            </div>
                                            <h4 className={`font-bold mb-2 ${state.sizeId === size.id ? 'text-accent-coral' : 'text-white'}`}>
                                                {size.label}
                                            </h4>
                                            <p className="text-xs text-gray-400">{size.description}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 3: Funcionalidades */}
                        {currentStep === 3 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h3 className="text-2xl font-bold text-white mb-6">3. Funcionalidades extra</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {extraFeatures.map(feat => {
                                        const isSelected = state.featureIds.includes(feat.id);
                                        return (
                                            <button
                                                key={feat.id}
                                                onClick={() => toggleFeature(feat.id)}
                                                className={`p-5 rounded-2xl border text-left transition-all ${
                                                    isSelected 
                                                    ? 'bg-accent-sky/10 border-accent-sky' 
                                                    : 'bg-[#0a0a0a] border-gray-800 hover:border-gray-600'
                                                }`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className={`font-bold ${isSelected ? 'text-accent-sky' : 'text-white'}`}>
                                                        {feat.label}
                                                    </h4>
                                                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                                                        isSelected ? 'bg-accent-sky border-accent-sky text-dark' : 'border-gray-600'
                                                    }`}>
                                                        {isSelected && <Check size={14} />}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-400 mb-2">{feat.description}</p>
                                                <span className="text-xs font-semibold text-gray-300">
                                                    +${feat.price.toLocaleString('es-MX')} MXN
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-10 pt-6 border-t border-gray-900">
                            <button
                                onClick={handlePrev}
                                disabled={currentStep === 1}
                                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                                    currentStep === 1 ? 'opacity-0 cursor-default' : 'bg-gray-800 text-white hover:bg-gray-700'
                                }`}
                            >
                                Atrás
                            </button>

                            {currentStep < 3 ? (
                                <button
                                    onClick={handleNext}
                                    disabled={
                                        (currentStep === 1 && !state.typeId) || 
                                        (currentStep === 2 && !state.sizeId && !isUxUiOnly)
                                    }
                                    className="px-6 py-2 rounded-lg font-semibold bg-white text-dark hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Siguiente
                                </button>
                            ) : null}
                        </div>
                    </div>

                    {/* Summary Sidebar (Sticky) */}
                    <div className="md:col-span-4">
                        <div className="sticky top-24 bg-dark border border-gray-800 rounded-2xl p-6 shadow-2xl">
                            <h3 className="font-display font-bold text-xl text-white mb-6 border-b border-gray-800 pb-4">Resumen</h3>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Tipo:</span>
                                    <span className="text-white font-medium text-right">
                                        {state.typeId ? projectTypes.find(t => t.id === state.typeId)?.label : '-'}
                                    </span>
                                </div>
                                
                                {!isUxUiOnly && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Tamaño:</span>
                                        <span className="text-white font-medium text-right">
                                            {state.sizeId ? projectSizes.find(s => s.id === state.sizeId)?.label : '-'}
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Extras ({state.featureIds.length}):</span>
                                    <span className="text-white font-medium text-right">
                                        {state.featureIds.length > 0 
                                            ? `$${calculation.breakdown.featuresTotal.toLocaleString('es-MX')}`
                                            : '-'
                                        }
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-gray-800 pt-6 mb-8">
                                <span className="block text-sm text-gray-500 mb-1 uppercase tracking-wider">Inversión Estimada</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-accent-mint">${calculation.total.toLocaleString('es-MX')}</span>
                                    <span className="text-gray-400 font-medium">MXN</span>
                                </div>
                                <div className="flex items-start gap-2 mt-3 text-xs text-gray-500">
                                    <AlertCircle size={14} className="shrink-0 mt-0.5" />
                                    <p>Este precio es un aproximado. Se requiere una reunión de descubrimiento para el presupuesto final.</p>
                                </div>
                            </div>

                            <div onClick={handleWhatsApp} className={`w-full ${calculation.total === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
                                <MagneticButton variant="primary" size="lg" className="w-full flex justify-center">
                                    <span className="flex items-center gap-2">
                                        Enviar a WhatsApp <Send size={16} />
                                    </span>
                                </MagneticButton>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
