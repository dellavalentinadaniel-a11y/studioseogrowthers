import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Badge from './Badge';

interface Project {
  title: string;
  category: string;
  image: string;
  link?: string;
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    title: "Aluvalle - Sistema de Aberturas",
    category: "Sitio Corporativo / Catálogo Técnico",
    image: "/imagenes/casos de exito/aluvalle-case.webp",
    isFeatured: true
  },
  {
    title: "Eco-Lodge Patagonia",
    category: "Landing Page / Reservas",
    image: "/imagenes/home/portfolio_main.png",
  },
  {
    title: "Marketplace Global",
    category: "E-Commerce",
    image: "/imagenes/home/marketing_main.png",
  },
  {
    title: "Inmobiliaria Premium",
    category: "Plataforma de Gestión",
    image: "/imagenes/home/automation_main.png",
  }
];

const PortfolioSection = ({ onNavigate }: { onNavigate: (id: any) => void }) => {
  return (
    <section className="py-32 px-[8%] relative overflow-hidden bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Badge>Portafolio</Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-6 leading-tight">
              Nuestros trabajos <span className="text-primary">más recientes</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm mb-4">
            Cada proyecto es un desafío único. Aquí te mostramos cómo ayudamos a nuestros clientes a destacar en el mundo digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`group relative overflow-hidden rounded-[40px] border border-white/5 bg-white/5 backdrop-blur-xl ${
                project.isFeatured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-10 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <ExternalLink size={20} />
                  </div>
                </div>

                {project.isFeatured && (
                  <button 
                    onClick={() => onNavigate('aluvalle')}
                    className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all"
                  >
                    Ver Caso de Éxito <ArrowRight size={16} />
                  </button>
                )}
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-full font-black text-lg border border-white/10 transition-all flex items-center gap-4 mx-auto group">
            Ver Portafolio Completo
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
