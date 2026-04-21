import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export type PageId = 'home' | 'landing' | 'corporativa' | 'ecommerce' | 'aluvalle';

interface NavbarProps {
  onNavigate: (id: PageId) => void;
  currentPage: PageId;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'landing', label: 'Landing Page o One Page' },
    { id: 'corporativa', label: 'Sitio web corporativo o clásico' },
    { id: 'ecommerce', label: 'Tiendas online' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark/60 backdrop-blur-md border-b border-white/5 px-[8%] py-6">
      <div className="flex justify-between items-center">
        <a 
          href="https://seogrowthers.com/"
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
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as PageId)}
              className={`text-sm font-semibold transition-colors hover:text-white ${
                currentPage === item.id ? 'text-white border-b-2 border-primary pb-1' : 'text-gray-400'
              }`}
            >
              {item.label}
            </button>
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
            className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id as PageId);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-bold ${currentPage === item.id ? 'text-primary' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://wa.me/tu-numero" 
              className="bg-primary text-white text-center py-4 rounded-xl font-bold"
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
