import type { QuoteState } from '../domain/quote/calculateQuote';
import { projectTypes, projectSizes, extraFeatures } from '../data/quote-config';

export const generateWhatsAppLink = (state: QuoteState, total: number) => {
    const phoneNumber = '528132765166'; // Defined in prompt
    
    let typeLabel = state.typeId ? projectTypes.find(t => t.id === state.typeId)?.label : 'No definido';
    let sizeLabel = state.sizeId ? projectSizes.find(s => s.id === state.sizeId)?.label : 'No definido';
    let featuresText = state.featureIds.length > 0 
        ? state.featureIds.map(id => extraFeatures.find(f => f.id === id)?.label).join(', ')
        : 'Ninguna';

    const message = `Hola Karlos, me interesa cotizar un proyecto.
He usado tu configurador y este es mi resumen:

*Tipo:* ${typeLabel}
*Tamaño:* ${sizeLabel}
*Extras:* ${featuresText}

*Estimado:* $${total.toLocaleString('es-MX')} MXN

Me gustaría dar el siguiente paso.`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
