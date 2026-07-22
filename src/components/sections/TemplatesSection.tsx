import { useState } from 'react';
import { Download, ExternalLink, Filter } from 'lucide-react';

const templatesData = [
    {
        id: 't1',
        name: 'Design System Starter',
        category: 'UX/UI',
        description: 'Kit de UI base con tokens y componentes accesibles.',
        format: '.fig',
        compatibility: 'Figma',
        price: 'Gratuito',
        status: 'Disponible',
        featured: true,
        preview: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 't2',
        name: 'Dashboard UI Kit',
        category: 'Desarrollo',
        description: 'Componentes React y Tailwind listos para paneles administrativos.',
        format: 'React + TS',
        compatibility: 'Vite / Next.js',
        price: '$29 USD',
        status: 'Disponible',
        featured: false,
        preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 't3',
        name: 'User Journey Map Template',
        category: 'UX Research',
        description: 'Plantilla completa para mapear la experiencia del usuario.',
        format: 'PDF / Notion',
        compatibility: 'Notion',
        price: 'Gratuito',
        status: 'Disponible',
        featured: false,
        preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 't4',
        name: 'Landing Page Conversion',
        category: 'Negocios',
        description: 'Estructura orientada a conversión basada en StoryBrand.',
        format: 'Figma',
        compatibility: 'Figma',
        price: '$15 USD',
        status: 'Próximamente',
        featured: false,
        preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    }
];

const categories = ['Todos', 'UX/UI', 'Desarrollo', 'Negocios', 'UX Research', 'Gratuitos'];

export const TemplatesSection = () => {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filteredTemplates = templatesData.filter(t => {
        if (activeFilter === 'Todos') return true;
        if (activeFilter === 'Gratuitos') return t.price.toLowerCase() === 'gratuito';
        return t.category === activeFilter;
    });

    return (
        <section id="templates" className="py-24 bg-[#080808] border-t border-gray-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Plantillas y recursos digitales</h2>
                    <p className="text-lg text-gray-400 font-sans max-w-2xl">
                        Acelera tu trabajo con herramientas, kits y plantillas diseñadas con buenas prácticas.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-10 items-center">
                    <Filter size={18} className="text-gray-500 mr-2 hidden sm:block" />
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent-mint ${
                                activeFilter === cat 
                                ? 'bg-white text-dark' 
                                : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-600 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredTemplates.length > 0 ? filteredTemplates.map(template => (
                        <div key={template.id} className="bg-dark rounded-2xl overflow-hidden border border-gray-800 flex flex-col group">
                            <div className="h-48 relative overflow-hidden bg-gray-900">
                                <img 
                                    src={template.preview} 
                                    alt={`Preview de ${template.name}`} 
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                                {template.status === 'Próximamente' && (
                                    <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center">
                                        <span className="bg-gray-800 border border-gray-700 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            Próximamente
                                        </span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-accent-sky uppercase tracking-wider">{template.category}</span>
                                    <span className={`text-xs font-bold ${template.price === 'Gratuito' ? 'text-accent-mint' : 'text-white'}`}>
                                        {template.price}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{template.name}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">{template.description}</p>
                                
                                <div className="flex gap-2 mb-6">
                                    <span className="inline-block px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-400">
                                        {template.format}
                                    </span>
                                    <span className="inline-block px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs text-gray-400">
                                        {template.compatibility}
                                    </span>
                                </div>
                                
                                <div className="mt-auto">
                                    <button 
                                        disabled={template.status !== 'Disponible'}
                                        className={`w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-mint ${
                                            template.status === 'Disponible' 
                                            ? 'bg-white text-dark hover:bg-gray-200' 
                                            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                        }`}
                                    >
                                        {template.price === 'Gratuito' ? (
                                            <><Download size={16} /> Descargar gratis</>
                                        ) : (
                                            <><ExternalLink size={16} /> Ver detalles</>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full py-12 text-center">
                            <p className="text-gray-500">No hay plantillas disponibles en esta categoría en este momento.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
