
import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Zap, 
  Target, 
  TrendingUp, 
  Clock, 
  Database, 
  Bot, 
  MessageSquare, 
  ArrowRight, 
  BarChart3, 
  Users,
  Search,
  Settings,
  HelpCircle,
  AlertCircle,
  RefreshCcw
} from 'lucide-react';
import Badge from './Badge';

const MarketingAutomationSection = () => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[8%] bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto text-left">
          <nav className="text-xs text-gray-500 mb-8 flex gap-2">
            <span>Inicio</span>
            <span>»</span>
            <span className="text-primary/80">Automatización</span>
            <span>»</span>
            <span className="text-white">Marketing y Ventas</span>
          </nav>
          
          <Badge>Ventas de Alto Impacto</Badge>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Vender más, <br />
            <span className="text-primary">trabajando menos.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl leading-relaxed font-medium">
            El futuro de tu crecimiento comercial no depende de más personal, sino de mejores sistemas.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20 flex items-center gap-3 active:scale-95">
            Empezar mi transformación <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 1. El Gancho (El Problema Actual) */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 text-red-600 font-bold mb-4">
              <AlertCircle size={20} />
              <span className="uppercase tracking-widest text-xs">EL DESAFÍO ACTUAL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              ¿Tu equipo de ventas está <span className="text-red-600">vendiendo</span> o está <span className="text-gray-400">administrando?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hoy, el <span className="font-black text-black text-xl">60% del tiempo</span> de un vendedor se pierde en tareas manuales: cargar Excels, perseguir leads que no responden o enviar correos de seguimiento.
              </p>
              <div className="p-8 bg-red-50 rounded-3xl border-l-4 border-red-500 shadow-sm">
                <p className="text-gray-800 italic text-lg leading-relaxed">
                  "Mientras tanto, los prospectos calificados se enfrían porque no reciben una respuesta inmediata."
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 flex flex-col justify-center text-center shadow-sm hover:border-red-200 transition-colors">
              <span className="text-6xl font-black text-red-600 mb-2">60%</span>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Tiempo Perdido en Tareas Manuales</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 flex flex-col justify-center text-center shadow-sm hover:border-red-200 transition-colors">
              <span className="text-6xl font-black text-red-600 mb-2">+4h</span>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Demora de Respuesta Promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. La Solución: El Ecosistema de Ventas Inteligente */}
      <section className="py-24 px-[8%] bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-0"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge>La Solución</Badge>
          <h2 className="text-4xl md:text-7xl font-black mb-8">Tu motor de crecimiento <span className="text-primary">24/7.</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-20 leading-relaxed">
            Presentamos un sistema integrado por tres pilares estratégicos que trabajan mientras tú duermes, asegurando que ningún cliente se quede sin respuesta.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { 
                icon: Database, 
                title: "CRM como Cerebro", 
                desc: "Centralización total de datos y visibilidad absoluta de cada etapa de tu embudo." 
              },
              { 
                icon: Bot, 
                title: "Chatbots IA", 
                desc: "Respuesta instantánea y calificación automática para filtrar prospectos reales." 
              },
              { 
                icon: RefreshCcw, 
                title: "Flujos de Nutrición", 
                desc: "Persistencia automática y personalizada sin intervención manual de tu equipo." 
              }
            ].map((pilar, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[48px] hover:border-primary/50 transition-all group backdrop-blur-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <pilar.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">{pilar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3, 4, 5. Pilares Detalle */}
      <section className="py-32 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-40">
          {/* Pilar 1 */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6 block">PILAR 1: EL ORDEN</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Adiós al caos <br />del Excel.</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Implementamos y configuramos <span className="text-black font-black">HubSpot, Pipedrive o Salesforce</span> según tu escala, para que tengas el control total de tu operación.
              </p>
              <ul className="space-y-5">
                {[
                  "Visibilidad total del embudo de ventas (Pipeline).",
                  "Historial completo de cada interacción con el cliente.",
                  "Pronósticos de venta reales basados en datos (Forecasting)."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-bold text-gray-800 text-lg">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-10 rounded-[64px] border border-gray-200 shadow-inner">
              <img src="/imagenes/casos de exito/aluvalle-screens.webp" alt="CRM Visualization" className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="md:order-2 text-left">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6 block">PILAR 2: LA INMEDIATEZ</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Atención inmediata, clientes filtrados.</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Tus clientes no esperan. Nuestros bots califican al prospecto antes de que llegue a tus vendedores, ahorrando tiempo valioso.
              </p>
              <ul className="space-y-5">
                {[
                  "Atención en WhatsApp, Web e Instagram las 24 horas.",
                  "Filtros inteligentes: Pregunta presupuesto y necesidad.",
                  "Agendamiento directo en el calendario comercial."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-bold text-gray-800 text-lg">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 p-12 rounded-[64px] border border-primary/10 md:order-1">
               <div className="bg-white rounded-3xl p-8 shadow-2xl space-y-6">
                  <div className="flex gap-3"><div className="w-10 h-10 bg-gray-200 rounded-full shrink-0"></div><div className="bg-gray-100 p-4 rounded-3xl rounded-tl-none text-sm font-medium w-full">Hola, busco un presupuesto para desarrollo web.</div></div>
                  <div className="flex gap-3 justify-end"><div className="bg-primary text-white p-4 rounded-3xl rounded-tr-none text-sm font-bold w-full shadow-lg shadow-primary/20">¡Hola! Claro. ¿Cuál es tu presupuesto estimado para el proyecto?</div><div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shrink-0 shadow-lg"><Bot size={20}/></div></div>
                  <div className="flex gap-3"><div className="w-10 h-10 bg-gray-200 rounded-full shrink-0"></div><div className="bg-gray-100 p-4 rounded-3xl rounded-tl-none text-sm font-medium w-full text-left">Entre $2000 y $5000 USD.</div></div>
                  <div className="pt-4 border-t border-gray-100 text-center"><span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Lead Calificado ✅</span></div>
               </div>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6 block">PILAR 3: LA PERSISTENCIA</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">No pierdas nunca más un prospecto.</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                El 80% de las ventas requieren 5 seguimientos. Nosotros los hacemos por vos, de forma automática y personalizada.
              </p>
              <ul className="space-y-5">
                {[
                  "Nutrición con contenido de valor automático cada 15 días.",
                  "Recuperación de carritos o propuestas sin respuesta.",
                  "Segmentación dinámica: Mensajes basados en el interés."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-bold text-gray-800 text-lg">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 p-12 rounded-[64px] text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700"><RefreshCcw size={160}/></div>
               <div className="flex items-center gap-4 mb-10 relative z-10">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary"><RefreshCcw size={28} className="animate-spin-slow"/></div>
                  <h4 className="text-xl font-black uppercase tracking-widest">Ciclo de Nutrición Activo</h4>
               </div>
               <div className="space-y-6 relative z-10">
                  <div className="h-3 bg-white/10 rounded-full w-full overflow-hidden"><div className="h-full bg-primary w-full animate-pulse"></div></div>
                  <div className="h-3 bg-white/10 rounded-full w-4/5 overflow-hidden"><div className="h-full bg-primary/60 w-3/4"></div></div>
                  <div className="h-3 bg-white/10 rounded-full w-1/2 overflow-hidden"><div className="h-full bg-primary/30 w-1/2"></div></div>
               </div>
               <p className="mt-12 text-xs font-black text-gray-500 uppercase tracking-widest relative z-10">Persistencia Automática: ON</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. El Resultado: El "Antes y Después" */}
      <section className="py-32 px-[8%] bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="bg-black/20 border-black/10 text-white mb-8">Impacto en los números</Badge>
          <h2 className="text-4xl md:text-7xl font-black mb-20 tracking-tight">Resultados Reales</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/10 p-12 rounded-[48px] backdrop-blur-md border border-white/10 shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-7xl font-black mb-6">+30%</div>
              <p className="font-black uppercase tracking-widest text-sm text-white/80">En tasa de conversión de leads</p>
            </div>
            <div className="bg-black/10 p-12 rounded-[48px] backdrop-blur-md border border-white/10 shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-7xl font-black mb-6">-50%</div>
              <p className="font-black uppercase tracking-widest text-sm text-white/80">Tiempo administrativo comercial</p>
            </div>
            <div className="bg-black/10 p-12 rounded-[48px] backdrop-blur-md border border-white/10 shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-7xl font-black mb-6">0%</div>
              <p className="font-black uppercase tracking-widest text-sm text-white/80">Leads olvidados o sin respuesta</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Inversión y Próximos Pasos */}
      <section className="py-32 px-[8%] bg-white text-black text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-20">Tu camino hacia la automatización</h2>
          
          <div className="grid md:grid-cols-3 gap-16 mb-24 text-left">
            {[
              { step: "01", title: "Auditoría", desc: "Analizamos tus procesos actuales y detectamos cuellos de botella." },
              { step: "02", title: "Configuración", desc: "Implementación técnica a medida de CRM, Bots y Flujos." },
              { step: "03", title: "Capacitación", desc: "Entrenamos a tu equipo para dominar sus nuevos superpoderes." }
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="text-9xl font-black text-gray-50 absolute -top-16 -left-4 -z-0 group-hover:text-primary/5 transition-colors">
                  {s.step}
                </div>
                <div className="relative z-10 pl-4 border-l-2 border-primary/20 group-hover:border-primary transition-colors">
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-wider">{s.title}</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 p-12 md:p-20 rounded-[64px] text-white relative overflow-hidden group shadow-3xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full group-hover:bg-primary/30 transition-all duration-1000"></div>
            <div className="relative z-10">
              <p className="text-2xl md:text-4xl font-bold mb-12 leading-tight italic text-white/90 max-w-4xl mx-auto">
                "La automatización no reemplaza a tus vendedores, <br />
                <span className="text-primary not-italic font-black underline decoration-primary/30">les da superpoderes."</span>
              </p>
              <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-primary/40 active:scale-95">
                Solicitar mi Auditoría Comercial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingAutomationSection;
