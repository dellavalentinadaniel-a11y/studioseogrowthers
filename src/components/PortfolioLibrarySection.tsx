
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layout, Globe, Smartphone, Search, Filter, ArrowUpRight } from 'lucide-react';
import Badge from './Badge';

const PortfolioLibrarySection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { 
      id: 1,
      category: 'landing',
      title: "NutriLife Landing",
      desc: "Página de aterrizaje optimizada para conversión de suplementos naturales.",
      image: "/imagenes/casos de exito/aluvalle-screens.webp", // Reutilizando assets existentes
      tags: ["React", "Tailwind", "SEO"]
    },
    { 
      id: 2,
      category: 'corporativa',
      title: "Constructora Delta",
      desc: "Sitio institucional robusto con catálogo de obras y sección de servicios.",
      image: "/imagenes/casos de exito/aluvalle-case.webp",
      tags: ["Wordpress", "Custom UI"]
    },
    { 
      id: 3,
      category: 'ecommerce',
      title: "Glow Beauty Shop",
      desc: "Tienda online completa con pasarela de pagos y gestión de stock.",
      image: "/imagenes/casos de exito/aluvalle-screens.webp",
      tags: ["WooCommerce", "MercadoPago"]
    },
    { 
      id: 4,
      category: 'landing',
      title: "SaaS Analytics One",
      desc: "One page para plataforma de software con planes de precios dinámicos.",
      image: "/imagenes/casos de exito/aluvalle-case.webp",
      tags: ["Next.js", "Framer Motion"]
    },
    { 
      id: 5,
      category: 'corporativa',
      title: "Estudio Contable Pérez",
      desc: "Web profesional para firma de servicios financieros.",
      image: "/imagenes/casos de exito/aluvalle-screens.webp",
      tags: ["Minimalist", "Fast Load"]
    },
    { 
      id: 6,
      category: 'ecommerce',
      title: "Urban Fit Wear",
      desc: "E-commerce de indumentaria deportiva con filtros avanzados.",
      image: "/imagenes/casos de exito/aluvalle-case.webp",
      tags: ["Tienda Nube", "Custom CSS"]
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-dark min-h-screen text-white pt-32 pb-24 px-[8%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge>Showcase</Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Biblioteca de <br /><span className="text-primary">Ejemplos Web</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explorá nuestra galería de desarrollos realizados. Desde landing pages ágiles hasta tiendas online complejas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'landing', label: 'Landing Pages' },
            { id: 'corporativa', label: 'Corporativas' },
            { id: 'ecommerce', label: 'E-Commerce' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all border ${
                filter === btn.id 
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Ver Ejemplo <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                      {project.category === 'landing' ? <Smartphone size={14}/> : project.category === 'ecommerce' ? <Layout size={14}/> : <Globe size={14}/>}
                      {project.category}
                    </span>
                    <button className="text-primary hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Footer */}
        <div className="mt-24 bg-white/5 rounded-[48px] p-12 md:p-20 text-center border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">¿Te gusta lo que ves?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Podemos crear una solución similar o 100% personalizada para tu negocio. <span className="text-white font-bold">Hagamos que tu proyecto despegue.</span>
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all relative z-10 shadow-xl shadow-primary/20 active:scale-95">
            Iniciar mi Proyecto
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLibrarySection;
