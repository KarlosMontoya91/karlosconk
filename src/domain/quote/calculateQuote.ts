import { projectTypes, projectSizes, extraFeatures } from '../../data/quote-config';

export interface QuoteState {
    typeId: string | null;
    sizeId: string | null;
    featureIds: string[];
}

export interface QuoteCalculation {
    total: number;
    breakdown: {
        base: number;
        sizeMultiplier: number;
        featuresTotal: number;
    };
    isEstimated: boolean;
}

export const calculateQuote = (state: QuoteState): QuoteCalculation => {
    let base = 0;
    let sizeMultiplier = 1;
    let featuresTotal = 0;

    if (state.typeId) {
        const typeObj = projectTypes.find(t => t.id === state.typeId);
        if (typeObj) base = typeObj.basePrice;
    }

    // Size multiplier only applies to web dev, not UXUI only
    if (state.sizeId && state.typeId !== 'uxui') {
        const sizeObj = projectSizes.find(s => s.id === state.sizeId);
        if (sizeObj) sizeMultiplier = sizeObj.basePrice;
    }

    if (state.featureIds.length > 0) {
        state.featureIds.forEach(fId => {
            const featObj = extraFeatures.find(f => f.id === fId);
            if (featObj) featuresTotal += featObj.price;
        });
    }

    const total = (base * sizeMultiplier) + featuresTotal;

    return {
        total,
        breakdown: {
            base,
            sizeMultiplier,
            featuresTotal
        },
        isEstimated: true // All quotes from builder are estimates
    };
};
