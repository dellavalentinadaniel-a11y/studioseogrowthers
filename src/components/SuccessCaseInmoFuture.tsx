import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Globe, TrendingUp, Search, Layout, Database } from 'lucide-react';
import Badge from './Badge';

interface SuccessCaseInmoFutureProps {
  onBack: () => void;
}

const SuccessCaseInmoFuture = ({ onBack }: SuccessCaseInmoFutureProps) => (
  <section className="py-24 px-[8%] max-w-6xl mx-auto">
    <button 
      onClick={onBack}
      className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]"
    >
      <ArrowRight className="rotate-180" size={16} /> Volver a Inicio
    </button>

    <header className="mb-20">
      <Badge>Caso de Éxito</Badge>
      <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1] text-white">
        InmoFuture: <span className="text-primary">Ecosistema Digital</span> para Real Estate
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
        Desarrollo de una plataforma integral de gestión inmobiliaria diseñada para maximizar la conversión de leads y automatizar el ciclo de venta de propiedades de lujo.
      </p>
      <div className="mt-10 flex gap-4">
        <a 
          href="https://inmobiliaria-plantilla.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary hover:bg-cyan-700 text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-2 shadow-xl shadow-primary/20"
        >
          Visitar Sitio En Vivo <Globe size={18} />
        </a>
      </div>
    </header>

    <div className="grid md:grid-cols-2 gap-16 mb-24">
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-primary text-sm">01</span>
          El Desafío Inmobiliario
        </h3>
        <div className="space-y-4 text-gray-400">
          <p>El sector inmobiliario tradicional sufre de procesos manuales y una desconexión crítica entre la oferta y el interés del usuario en tiempo real.</p>
          <ul className="space-y-3">
            <li className="flex gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> Experiencia de búsqueda frustrante en dispositivos móviles.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> Gestión ineficiente de consultas y seguimientos.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> Baja calidad visual en la presentación de propiedades premium.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> Falta de sincronización entre el catálogo y los portales externos.</li>
          </ul>
        </div>
      </div>
      <div className="bg-white/5 rounded-[32px] overflow-hidden border border-white/10 aspect-video flex items-center justify-center">
        <img src="/imagenes/PORTAFOLIO/inmofuture.png" alt="InmoFuture Dashboard" className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
            { icon: Search, title: "Buscador Inteligente", desc: "Filtros avanzados y búsqueda por mapa con actualización instantánea de resultados." },
            { icon: Layout, title: "Diseño Conversivo", desc: "Landing pages específicas para cada propiedad optimizadas para captar leads." },
            { icon: Database, title: "CRM Integrado", desc: "Panel de administración para agentes con seguimiento automático de clientes." }
        ].map((item, i) => (
            <div key={i} className="bg-white/2 p-8 rounded-[32px] border border-white/5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    <item.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
        ))}
    </div>

    <div className="mb-24">
      <h3 className="text-2xl font-bold text-white mb-12 text-center">Impacto en el Negocio</h3>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { label: "Velocidad de Carga (LCP)", before: "4.5s", after: "1.2s", icon: Zap },
          { label: "Conversión de Visitantes", before: "1.2%", after: "5.5%", icon: TrendingUp },
          { label: "Productividad de Agentes", before: "Base", after: "+40%", icon: Globe },
        ].map((kpi, i) => (
          <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 backdrop-blur-xl relative group hover:border-primary/30 transition-all">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
              <kpi.icon size={24} />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">{kpi.label}</h4>
            <div className="space-y-4">
              <div>
                <span className="block text-[10px] uppercase font-bold text-gray-600">Antes</span>
                <span className="text-lg font-bold text-gray-400 line-through decoration-cyan-500/50">{kpi.before}</span>
              </div>
              <div className="pt-4 border-t border-white/5">
                <span className="block text-[10px] uppercase font-bold text-primary">Después</span>
                <span className="text-3xl font-black text-white">{kpi.after}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <footer className="bg-primary/10 border border-primary/20 p-12 rounded-[40px] text-center">
      <h3 className="text-3xl font-black text-white mb-6">¿Listo para escalar tu negocio?</h3>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
        InmoFuture es solo un ejemplo de cómo la tecnología puede revolucionar una industria tradicional. Podemos hacer lo mismo por tu empresa.
      </p>
      <button 
        onClick={onBack}
        className="bg-primary hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-cyan-900/40"
      >
        Solicitar Consultoría Gratuita
      </button>
    </footer>
  </section>
);

export default SuccessCaseInmoFuture;
