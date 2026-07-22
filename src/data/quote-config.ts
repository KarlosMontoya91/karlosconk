export interface ProjectOption {
    id: string;
    label: string;
    basePrice: number;
    description?: string;
    icon?: any; 
}

export interface FeatureOption {
    id: string;
    label: string;
    price: number;
    description?: string;
}

export const projectTypes: ProjectOption[] = [
    { id: 'landing', label: 'Landing Page', basePrice: 4500, description: 'Sitio de 1 página para conversión.' },
    { id: 'corporate', label: 'Sitio Web Corporativo', basePrice: 8000, description: 'Sitio multi-página para empresas.' },
    { id: 'ecommerce', label: 'E-commerce', basePrice: 12000, description: 'Tienda en línea completa.' },
    { id: 'custom', label: 'Sistema a Medida', basePrice: 15000, description: 'Aplicación web compleja (CRM, Panel).' },
    { id: 'uxui', label: 'Solo Diseño UX/UI', basePrice: 2500, description: 'Diseño en Figma listo para programar.' }
];

export const projectSizes: ProjectOption[] = [
    { id: 'small', label: 'Pequeño (1-3 páginas)', basePrice: 1, description: 'Multiplicador base' },
    { id: 'medium', label: 'Mediano (4-8 páginas)', basePrice: 1.5, description: 'Multiplicador x1.5' },
    { id: 'large', label: 'Grande (+8 páginas)', basePrice: 2, description: 'Multiplicador x2' }
];

export const extraFeatures: FeatureOption[] = [
    { id: 'seo', label: 'SEO Avanzado', price: 1500, description: 'Optimización on-page profunda.' },
    { id: 'blog', label: 'Blog / Noticias', price: 2000, description: 'Gestor de contenidos (CMS).' },
    { id: 'multilang', label: 'Multi-idioma', price: 3000, description: 'Sitio en español e inglés.' },
    { id: 'auth', label: 'Sistema de Login', price: 4000, description: 'Registro y acceso de usuarios.' },
    { id: 'animations', label: 'Animaciones GSAP', price: 2500, description: 'Micro-interacciones avanzadas.' }
];
