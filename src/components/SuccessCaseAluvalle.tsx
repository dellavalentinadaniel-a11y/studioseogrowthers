import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Globe, TrendingUp } from 'lucide-react';
import Badge from './Badge';

interface SuccessCaseAluvalleProps {
  onBack: () => void;
}

const SuccessCaseAluvalle = ({ onBack }: SuccessCaseAluvalleProps) => (
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
        Aluvalle: Transformación Digital e <span className="text-primary">Impacto SEO</span>
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
        Este proyecto detalla el proceso de desarrollo web y la estrategia de optimización en motores de búsqueda realizada por SEOGrowthers. El objetivo fue migrar de una presencia limitada a una plataforma de alto rendimiento capaz de captar leads cualificados.
      </p>
    </header>

    <div className="grid md:grid-cols-2 gap-16 mb-24">
      <div>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-primary text-sm">01</span>
          El Desafío
        </h3>
        <div className="space-y-4 text-gray-400">
          <p>Aluvalle presentaba un sitio web con tecnología obsoleta que no cumplía con los estándares modernos de usabilidad (UX) ni con las métricas de Core Web Vitals.</p>
          <ul className="space-y-3">
            <li className="flex gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> Velocidad de carga lenta, especialmente en móviles.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> Arquitectura de información confusa.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> Baja visibilidad orgánica para keywords estratégicas.</li>
            <li className="flex gap-3"><CheckCircle2 className="text-primary shrink-0" size={20} /> Falta de identidad visual coherente.</li>
          </ul>
        </div>
      </div>
      <div className="bg-white/5 rounded-[32px] overflow-hidden border border-white/10 aspect-video flex items-center justify-center">
        <img src="/imagenes/casos de exito/aluvalle-case.webp" alt="Aluvalle Desafío" className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
      <div className="order-2 md:order-1 bg-white/5 rounded-[32px] overflow-hidden border border-white/10 aspect-video flex items-center justify-center">
        <img src="/imagenes/casos de exito/aluvalle-screens.webp" alt="Aluvalle Screens" className="w-full h-full object-cover" />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-primary text-sm">02</span>
          Nuestra Solución Técnica
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-primary">Desarrollo Full-Stack</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stack moderno basado en <strong>React y Vite</strong> para tiempos de respuesta instantáneos. Tailwind CSS para un diseño responsivo y WebP/AVIF para optimización de imágenes.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest text-primary">Estrategia SEO de Autoridad</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arquitectura de contenidos basada en <strong>silos (E-E-A-T)</strong>, investigación de keywords long-tail, optimización On-Page y datos estructurados (Local Business/Product).
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-24">
      <h3 className="text-2xl font-bold text-white mb-12 text-center">Resultados Obtenidos (KPIs)</h3>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { label: "Puntaje Core Web Vitals (LCP)", before: "4.2s (Pobre)", after: "1.1s (Excelente)", icon: Zap },
          { label: "Tráfico Orgánico Mensual", before: "~150 visitas", after: "+1,200 visitas", icon: Globe },
          { label: "Tasa de Conversión (Leads)", before: "0.5%", after: "3.8%", icon: TrendingUp },
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
      <h3 className="text-3xl font-black text-white mb-6">Conclusión</h3>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
        El proyecto Aluvalle demuestra que la combinación de un desarrollo técnico impecable con una estrategia SEO orientada al usuario es la clave para el éxito en el entorno digital actual.
      </p>
      <button 
        onClick={onBack}
        className="bg-primary hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-cyan-900/40"
      >
        Empezar mi transformación
      </button>
    </footer>
  </section>
);

export default SuccessCaseAluvalle;
