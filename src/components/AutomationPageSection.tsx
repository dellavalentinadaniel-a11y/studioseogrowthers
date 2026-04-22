
import React from 'react';
import { CheckCircle2, Zap, Cpu, Settings, MessageSquare, Database, Link, BarChart, Workflow, Bot, Clock, ShieldCheck, Mail, Share2, MessageCircle, Server, LifeBuoy, RefreshCcw, Activity, Wrench, ShieldAlert, Star, ArrowRight, LayoutGrid, Users, PenTool } from 'lucide-react';
import Badge from './Badge';

const AutomationPageSection = () => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[8%] bg-black">
        <div className="max-w-7xl mx-auto text-left">
          <nav className="text-xs text-gray-500 mb-8 flex gap-2">
            <span>Inicio</span>
            <span>»</span>
            <span className="text-white">Automatización de Procesos</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Automatización de <br /><span className="text-primary text-4xl md:text-6xl">Procesos con IA</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Liberá a tu equipo de tareas repetitivas. Implementamos flujos inteligentes que ahorran tiempo, eliminan errores y escalan tu operación sin aumentar costos.
          </p>

          <div className="space-y-4 mb-12 text-left">
            {[
              "Integración de Sistemas (CRMs, ERPs, Apps)",
              "Desarrollo de Agentes de IA Personalizados",
              "Automatización de Ventas y Seguimiento",
              "Workflows de Facturación y Reportes"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-lg font-bold">
                <CheckCircle2 className="text-primary" size={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20">
            Agendar Consultoría Técnica
          </button>
        </div>
      </section>

      {/* About Automation */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge>Eficiencia</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Tu negocio trabajando en piloto automático
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg text-left">
              Analizamos tus cuellos de botella y diseñamos soluciones tecnológicas que permiten que la información fluya sin intervención manual.
            </p>

            <div className="space-y-8 text-left">
              {[
                { 
                  title: "Sincronización Total", 
                  desc: "Conectamos todas tus herramientas para que la información se actualice en tiempo real en todos tus sistemas (Stock, Ventas, CRM)." 
                },
                { 
                  title: "Chatbots de IA de Última Generación", 
                  desc: "Asistentes virtuales que no solo responden preguntas frecuentes, sino que cierran ventas y agendan citas 24/7." 
                },
                { 
                  title: "Dashboards Automatizados", 
                  desc: "Visualizá el rendimiento de tu negocio con reportes que se generan solos, extrayendo datos de múltiples fuentes." 
                }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-black text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="bg-primary/5 rounded-[40px] p-8 flex items-center justify-center">
                {/* Visual representation of automation flow */}
                <div className="w-full bg-slate-900 rounded-3xl shadow-2xl p-8 space-y-6">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white"><Mail size={20}/></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-2 bg-white/20 rounded-full w-1/2"></div>
                            <div className="h-2 bg-white/10 rounded-full w-1/3"></div>
                        </div>
                        <div className="text-primary"><Zap size={20}/></div>
                    </div>
                    <div className="flex justify-center"><div className="w-0.5 h-8 bg-primary/30"></div></div>
                    <div className="flex items-center gap-4 bg-primary/10 p-4 rounded-xl border border-primary/20">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white"><Bot size={20}/></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-2 bg-primary/30 rounded-full w-3/4"></div>
                            <div className="h-2 bg-primary/20 rounded-full w-1/2"></div>
                        </div>
                    </div>
                    <div className="flex justify-center"><div className="w-0.5 h-8 bg-primary/30"></div></div>
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"><Database size={20}/></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-2 bg-white/20 rounded-full w-2/3"></div>
                            <div className="h-2 bg-white/10 rounded-full w-1/4"></div>
                        </div>
                        <div className="text-green-500 font-bold text-[10px]">SUCCESS</div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-[8%] bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Badge>Tecnología</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Potencia Operativa
          </h2>
          <p className="text-gray-500 mb-16">
            Herramientas diseñadas para maximizar la productividad de tu equipo.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { icon: Workflow, title: "Workflows", desc: "Diseño de flujos de trabajo lógicos y eficientes." },
              { icon: Bot, title: "IA Generativa", desc: "Integración de modelos como GPT-4 en tu negocio." },
              { icon: Link, title: "Conectores API", desc: "Unión de herramientas que no se hablan entre sí." },
              { icon: Clock, title: "Ahorro de Tiempo", desc: "Reducimos horas de trabajo manual a segundos." },
              { icon: ShieldCheck, title: "Cero Errores", desc: "Sistemas precisos que no fallan por cansancio." },
              { icon: RefreshCcw, title: "Auto-Sync", desc: "Datos siempre actualizados en toda la empresa." },
              { icon: BarChart, title: "Reportes Vivos", desc: "Información visual para toma de decisiones rápida." },
              { icon: MessageSquare, title: "Lead Nurturing", desc: "Seguimiento automático de clientes potenciales." },
            ].map((item, i) => (
              <div key={i} className="group text-left">
                <item.icon className="text-primary mb-4 transition-transform group-hover:scale-110" size={32} strokeWidth={1.5} />
                <h4 className="font-black text-lg mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-[8%] bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Dejá de hacer <span className="text-primary">tareas repetitivas</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Hacé que la tecnología trabaje para vos, no al revés.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-all shadow-xl shadow-primary/20">
            Hablar con un Experto
          </button>
        </div>
      </section>
    </div>
  );
};

export default AutomationPageSection;
