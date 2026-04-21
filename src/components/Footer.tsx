import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Badge from './Badge';

const Footer = () => (
  <footer className="relative z-10 px-[8%] py-24 border-t border-white/5 backdrop-blur-md bg-black/40">
    {/* Main Footer CTA */}
    <div className="mb-24 text-center md:text-left flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 p-10 md:p-20 rounded-[48px] border border-white/10 backdrop-blur-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 max-w-2xl">
        <Badge>Último paso</Badge>
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1] text-white">
          ¿Listo para <span className="text-primary">despegar?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-0 leading-relaxed">
          Agendá una breve reunión para que analicemos tu proyecto y te enviemos un presupuesto a medida. 
          <span className="text-white block mt-4 font-bold">Sin vueltas, directo al crecimiento.</span>
        </p>
      </div>
      
      <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
        <a 
          href="https://wa.me/tu-numero" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary hover:bg-red-700 text-white px-10 py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 transition-all shadow-2xl shadow-red-900/40 active:scale-95"
        >
          <MessageCircle size={28} />
          WhatsApp
        </a>
        <button className="bg-white/5 hover:bg-white/10 text-white px-10 py-6 rounded-3xl font-black text-xl border border-white/10 transition-all flex items-center justify-center gap-4 active:scale-95">
          Ver Portfolio
          <ArrowRight size={28} />
        </button>
      </div>
    </div>

    {/* Links Footer */}
    <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
      <div className="col-span-2">
        <div className="bg-primary px-3 py-1 rounded-lg inline-block mb-6">
          <span className="font-display font-black text-2xl tracking-tighter text-white lowercase">romero</span>
        </div>
        <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
          Estudio de diseño y desarrollo web especializado en conversión y crecimiento digital. 
          Ayudamos a marcas y profesionales a escalar mediante tecnología y estrategia.
        </p>
      </div>
      <div>
        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Servicios</h4>
        <ul className="space-y-4 text-sm text-gray-500 font-medium">
          <li className="hover:text-primary transition-colors cursor-pointer">Landing Pages</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Webs Corporativas</li>
          <li className="hover:text-primary transition-colors cursor-pointer">E-Commerce</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Plataformas</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Contacto</h4>
        <ul className="space-y-4 text-sm text-gray-500 font-medium">
          <li className="hover:text-primary transition-colors cursor-pointer">WhatsApp</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Email</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
          <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
        </ul>
      </div>
    </div>

    <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-xs font-bold uppercase tracking-widest">
      <div>© {new Date().getFullYear()} ROMERO.AR - TODOS LOS DERECHOS RESERVADOS.</div>
      <div className="flex gap-8">
        <span className="hover:text-white transition-colors cursor-pointer">Privacidad</span>
        <span className="hover:text-white transition-colors cursor-pointer">Términos</span>
      </div>
    </div>
  </footer>
);

export default Footer;
