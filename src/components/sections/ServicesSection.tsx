import { MagneticButton } from '../ui/MagneticButton';
import { LayoutTemplate, Building, Palette, Code, Layers, ShoppingCart, RefreshCcw, Search, Zap, LineChart, MessageSquare } from 'lucide-react';

const services = [
    {
        id: 'landing',
        icon: LayoutTemplate,
        title: 'Landing pages',
        description: 'Ideal para presentar y vender un producto, servicio o campaña.',
        benefit: 'Alta tasa de conversión',
        useCase: 'Campañas de marketing, lanzamientos',
        price: 'Desde $4,500 MXN',
    },
    {
        id: 'corporate',
        icon: Building,
        title: 'Sitios web corporativos',
        description: 'Presencia digital sólida para transmitir confianza y autoridad.',
        benefit: 'Mejora de imagen corporativa',
        useCase: 'Empresas, agencias, pymes',
        price: 'Desde $8,000 MXN',
    },
    {
        id: 'uxui',
        icon: Palette,
        title: 'Diseño UX/UI',
        description: 'Diseño de interfaces atractivas, accesibles y fáciles de usar.',
        benefit: 'Usuarios más felices y menos abandonos',
        useCase: 'Apps móviles, SaaS, sistemas web',
        price: 'Desde $2,500 MXN',
    },
    {
        id: 'frontend',
        icon: Code,
        title: 'Desarrollo Front-End',
        description: 'Construcción de interfaces interactivas, rápidas y escalables con React.',
        benefit: 'Código limpio y mantenible',
        useCase: 'Componentes, migraciones, integraciones',
        price: 'Depende del alcance',
    },
    {
        id: 'system',
        icon: Layers,
        title: 'Sistemas web',
        description: 'Desarrollo a medida de herramientas internas y plataformas complejas.',
        benefit: 'Automatización y eficiencia',
        useCase: 'Paneles de administración, CRMs, ERPs',
        price: 'Requiere cotización',
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        title: 'Ecommerce',
        description: 'Tiendas online optimizadas para vender de forma segura.',
        benefit: 'Ventas 24/7',
        useCase: 'Catálogos de productos, ventas online',
        price: 'Desde $12,000 MXN',
    },
    {
        id: 'redesign',
        icon: RefreshCcw,
        title: 'Rediseño de productos',
        description: 'Actualización visual y funcional de sitios o apps existentes.',
        benefit: 'Mayor retención y modernidad',
        useCase: 'Productos legados, sitios antiguos',
        price: 'Requiere diagnóstico',
    },
    {
        id: 'audit',
        icon: Search,
        title: 'Auditoría UX',
        description: 'Análisis profundo de la experiencia actual y puntos de mejora.',
        benefit: 'Detección de problemas críticos',
        useCase: 'Productos con bajo rendimiento',
        price: 'Desde $1,500 MXN',
    },
    {
        id: 'optimization',
        icon: Zap,
        title: 'Optimización web',
        description: 'Mejora en tiempos de carga y accesibilidad (WCAG).',
        benefit: 'Mejor SEO y retención',
        useCase: 'Sitios lentos o mal indexados',
        price: 'Desde $1,000 MXN',
    },
    {
        id: 'analytics',
        icon: LineChart,
        title: 'Analítica digital',
        description: 'Integración y configuración de herramientas de rastreo.',
        benefit: 'Toma de decisiones con datos',
        useCase: 'Campañas activas, ecommerce',
        price: 'Desde $1,200 MXN',
    },
    {
        id: 'consulting',
        icon: MessageSquare,
        title: 'Consultoría',
        description: 'Asesoramiento técnico y estratégico para proyectos digitales.',
        benefit: 'Dirección clara y reducción de riesgos',
        useCase: 'Equipos de desarrollo, fundadores',
        price: 'Por hora',
    }
];

export const ServicesSection = () => {
    const handleQuote = () => {
        // We can pass pre-selected states via context or url params later. For now, scroll to Quote.
        document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="services" className="py-24 bg-dark border-t border-gray-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">¿Qué necesitas crear o mejorar?</h2>
                    <p className="text-lg text-gray-400 font-sans leading-relaxed">
                        Soluciones digitales diseñadas para resolver problemas reales, orientadas a la conversión y la experiencia del usuario. 
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="group relative bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-colors flex flex-col h-full">
                            <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-6 text-accent-sky group-hover:scale-110 group-hover:text-accent-mint transition-all">
                                <service.icon size={24} />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-grow">{service.description}</p>
                            
                            <div className="space-y-3 mb-8">
                                <div className="bg-dark p-3 rounded-lg border border-gray-800">
                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Beneficio clave</span>
                                    <span className="text-sm text-gray-300">{service.benefit}</span>
                                </div>
                                <div className="bg-dark p-3 rounded-lg border border-gray-800">
                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Uso recomendado</span>
                                    <span className="text-sm text-gray-300">{service.useCase}</span>
                                </div>
                            </div>
                            
                            <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between">
                                <span className="text-sm font-semibold text-accent-coral">{service.price}</span>
                                <div onClick={() => handleQuote()}>
                                    <MagneticButton size="sm" variant="secondary">
                                        Cotizar
                                    </MagneticButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
