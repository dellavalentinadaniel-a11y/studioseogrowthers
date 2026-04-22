
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

export type CategoryId = 'desarrollo-web' | 'marketing-digital' | 'automatizacion';
export type PageId = 'home' | 'landing' | 'corporativa' | 'ecommerce' | 'portfolio-library' | 'marketing' | 'seo' | 'sem' | 'social-media' | 'content-marketing' | 'email-marketing' | 'automatizacion' | 'auto-marketing' | 'rpa' | 'no-code' | 'ia-agentica' | 'aluvalle';

interface NavbarProps {
  onNavigate: (id: PageId) => void;
  currentPage: PageId;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'desarrollo-web', 
      label: 'Desarrollo Web',
      subItems: [
        { id: 'landing', label: 'Landing Page' },
        { id: 'corporativa', label: 'Sitio Web Corporativo' },
        { id: 'ecommerce', label: 'Tiendas Online' },
        { id: 'portfolio-library', label: 'Portafolio (Ejemplos)' },
      ]
    },
    { 
      id: 'marketing', 
      label: 'Marketing Digital',
      subItems: [
        { id: 'seo', label: 'SEO' },
        { id: 'sem', label: 'SEM (Ads)' },
        { id: 'social-media', label: 'Redes Sociales' },
        { id: 'content-marketing', label: 'Marketing de Contenidos' },
        { id: 'email-marketing', label: 'Email Marketing' },
      ]
    },
    { 
      id: 'automatizacion', 
      label: 'Automatización',
      subItems: [
        { id: 'auto-marketing', label: 'Marketing y Ventas' },
        { id: 'rpa', label: 'RPA (Bots)' },
        { id: 'no-code', label: 'Integraciones No-Code' },
        { id: 'ia-agentica', label: 'IA Agéntica' },
      ]
    },
    { id: 'blog', label: 'Blog', href: 'https://seogrowthers.com/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark/60 backdrop-blur-md border-b border-white/5 px-[8%] py-6">
      <div className="flex justify-between items-center">
        <a 
          href="/"
          onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          className="flex items-center cursor-pointer group relative"
        >
          <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src="/imagenes/logo/logo.png" 
            alt="SEO Growthers Logo" 
            className="h-9 w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group/item"
              onMouseEnter={() => item.subItems && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold transition-colors hover:text-white text-gray-400"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  onClick={() => !item.subItems && onNavigate(item.id as PageId)}
                  className={`text-sm font-semibold transition-colors hover:text-white flex items-center gap-1 ${
                    currentPage === item.id || (item.subItems?.some(s => s.id === currentPage)) 
                      ? 'text-white' 
                      : 'text-gray-400'
                  }`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />}
                </button>
              )}

              {item.subItems && (
                <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${activeDropdown === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  <div className="bg-dark/95 backdrop-blur-xl border border-white/10 p-2 rounded-2xl min-w-[220px] shadow-2xl">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => onNavigate(sub.id as PageId)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-white/5 ${
                          currentPage === sub.id ? 'text-primary bg-white/5' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a 
            href="https://wa.me/tu-numero" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-cyan-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-900/20 transition-all"
          >
            Presupuesto
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-4 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {navItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-left text-lg font-bold text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        if (!item.subItems) {
                          onNavigate(item.id as PageId);
                          setIsOpen(false);
                        } else {
                          setActiveDropdown(activeDropdown === item.id ? null : item.id);
                        }
                      }}
                      className={`text-left text-lg font-bold ${
                        currentPage === item.id || (item.subItems?.some(s => s.id === currentPage)) 
                          ? 'text-primary' 
                          : 'text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                  {item.subItems && (
                    <ChevronDown 
                      size={20} 
                      className={`text-white transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`}
                      onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                    />
                  )}
                </div>
                
                {item.subItems && activeDropdown === item.id && (
                  <div className="pl-4 flex flex-col gap-3 border-l border-white/10 mt-2 py-2">
                    {item.subItems.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onNavigate(sub.id as PageId);
                          setIsOpen(false);
                        }}
                        className={`text-left text-base font-medium ${currentPage === sub.id ? 'text-primary' : 'text-gray-400'}`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a 
              href="https://wa.me/tu-numero" 
              className="bg-primary text-white text-center py-4 rounded-xl font-bold mt-4"
            >
              Consultar Proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
