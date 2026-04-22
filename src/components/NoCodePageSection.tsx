
import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Link, 
  Zap, 
  Share2, 
  Repeat, 
  ArrowRight, 
  AlertCircle, 
  MessageSquare, 
  Calendar, 
  Table, 
  Mail, 
  Clock,
  Settings,
  Layers,
  Database
} from 'lucide-react';
import Badge from './Badge';

const NoCodePageSection = () => {
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
            <span className="text-white">Integraciones No-Code</span>
          </nav>
          
          <Badge>Ecosistemas Conectados</Badge>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
            Haz que tus aplicaciones <br />
            <span className="text-primary">hablen entre sí.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mb-10 max-w-3xl leading-tight font-medium">
            Conectamos tus herramientas favoritas para que la información fluya sin intervención manual.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
            Conectar mis aplicaciones <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 1. El Problema: "La Isla de Datos" */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold mb-4">
              <AlertCircle size={20} />
              <span>EL DESAFÍO DE LA FRAGMENTACIÓN</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              ¿Pasás el día saltando de <span className="text-primary">una pestaña a otra?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed text-left">
                Usamos Google Sheets para el control, Gmail para comunicarnos y Slack para el equipo. El problema es que <span className="font-black text-black">estas herramientas no se hablan.</span>
              </p>
              <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-gray-300">
                <p className="text-gray-800 italic text-left">
                  "Perdemos horas copiando datos manualmente de un lugar a otro, y en ese camino, la información se pierde o llega tarde."
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            {/* Visual representation of islands */}
            <div className="grid grid-cols-2 gap-6 relative">
                <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 border border-gray-200 shadow-sm"><Table size={48}/></div>
                <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 border border-gray-200 shadow-sm"><Mail size={48}/></div>
                <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 border border-gray-200 shadow-sm"><MessageSquare size={48}/></div>
                <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400 border border-gray-200 shadow-sm"><Calendar size={48}/></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-500 animate-pulse border-4 border-white shadow-xl">
                        <Share2 size={32}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. La Solución: Integraciones No-Code */}
      <section className="py-24 px-[8%] bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="md:order-2">
            <Badge>No-Code Power</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              El pegamento digital <br /><span className="text-primary">de tu empresa.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 text-left">
              Creamos puentes automatizados entre las aplicaciones que ya usas. Sin programadores, sin meses de espera. Usamos plataformas como <span className="text-white font-bold text-left">Make (ex Integromat) o Zapier</span> para que tus apps trabajen en equipo.
            </p>
            <div className="flex gap-4">
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-bold">Make.com</div>
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-bold">Zapier</div>
                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-bold">Airtable</div>
            </div>
          </div>
          <div className="md:order-1 relative h-[400px] flex items-center justify-center">
             <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full"></div>
                <div className="relative bg-white/5 border border-white/10 p-12 rounded-[64px] backdrop-blur-xl">
                    <Link className="text-primary animate-bounce" size={120} strokeWidth={1}/>
                    <div className="mt-8 flex justify-between gap-4">
                        <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Ejemplos Prácticos */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Ejemplo 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block text-left">CASO DE USO 1: VENTAS</span>
              <h2 className="text-4xl font-black mb-6 leading-tight text-left">De la consulta a la acción <br />en 1 segundo.</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-left">
                Cuando un cliente llena un formulario web, el sistema reacciona instantáneamente en múltiples canales.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Database, label: "Se crea una fila en Google Sheets." },
                  { icon: MessageSquare, label: "Alerta automática en canal de Slack." },
                  { icon: Mail, label: "Email de bienvenida instantáneo desde Gmail." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 group hover:border-primary/30 transition-all">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all"><item.icon size={20}/></div>
                    <span className="font-bold text-gray-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 p-12 rounded-[48px] border border-primary/10 relative overflow-hidden">
                <div className="flex flex-col gap-6">
                    <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 self-start max-w-[80%]">
                        <Badge className="bg-primary/10 text-primary border-none">Trigger</Badge>
                        <span className="text-xs font-bold">Nuevo Lead Web</span>
                    </div>
                    <div className="flex justify-center"><ArrowRight className="text-primary rotate-90" size={24}/></div>
                    <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 self-center max-w-[80%]">
                        <Badge className="bg-green-500/10 text-green-600 border-none">Action</Badge>
                        <span className="text-xs font-bold">Carga en CRM/Sheets</span>
                    </div>
                    <div className="flex justify-center"><ArrowRight className="text-primary rotate-90" size={24}/></div>
                    <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 self-end max-w-[80%]">
                        <Badge className="bg-blue-500/10 text-blue-600 border-none">Action</Badge>
                        <span className="text-xs font-bold">Alerta en Slack</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Ejemplo 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block text-left">CASO DE USO 2: OPERACIONES</span>
              <h2 className="text-4xl font-black mb-6 leading-tight text-left">Control total sin <br />revisar tableros.</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-left">
                Olvidate de revisar fechas de vencimiento manualmente. El sistema te avisa cuando es necesario actuar.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Clock, label: "Detección de vencimientos en Airtable/Monday." },
                  { icon: MessageSquare, label: "Recordatorio por Slack al responsable." },
                  { icon: Calendar, label: "Agendamiento automático en Google Calendar." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 group hover:border-primary/30 transition-all">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all"><item.icon size={20}/></div>
                    <span className="font-bold text-gray-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:order-1 bg-gray-900 p-12 rounded-[48px] text-white">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-sm font-bold">Alerta: Entrega Proyecto X</span>
                    </div>
                    <div className="h-0.5 bg-white/10 w-full"></div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-xs text-gray-400">Notificando a:</p>
                        <p className="text-sm font-bold text-primary">@Director_Proyectos</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Las Ventajas del "No-Code" */}
      <section className="py-24 px-[8%] bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto text-center">
          <Badge>Beneficios No-Code</Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-16">Velocidad y Flexibilidad <br /><span className="text-primary">sin código</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Costo-Efectivo", 
                icon: Database,
                desc: "Mucho más accesible que desarrollar un software a medida desde cero." 
              },
              { 
                title: "Velocidad", 
                icon: Zap,
                desc: "Podemos tener un flujo de trabajo funcionando en 48-72 horas." 
              },
              { 
                title: "Evolutivo", 
                icon: Repeat,
                desc: "Si cambiás de herramienta mañana, el puente se ajusta en minutos." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 hover:scale-[1.02] transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto">
                    <item.icon size={32} />
                </div>
                <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Antes vs. Después (La Transformación) */}
      <section className="py-24 px-[8%] bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black">La Transformación</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/10 p-10 rounded-3xl border border-white/10">
              <h4 className="text-2xl font-black mb-6 uppercase tracking-widest text-white/50">Antes</h4>
              <p className="text-xl font-medium leading-relaxed italic">
                "Recibí un mail, avisame por WhatsApp, cargalo cuando puedas al Excel".
              </p>
            </div>
            <div className="bg-white/10 p-10 rounded-3xl border border-white/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4"><Zap size={40} className="text-white animate-pulse"/></div>
                <h4 className="text-2xl font-black mb-6 uppercase tracking-widest text-white">Después</h4>
                <p className="text-xl font-black leading-relaxed">
                    "El sistema lo detecta, lo carga, lo avisa y lo archiva solo".
                </p>
            </div>
          </div>
          <p className="text-center mt-12 text-xl font-bold">
            Liberamos a tu personal de tareas de "mensajería" para que se enfoquen en la toma de decisiones.
          </p>
        </div>
      </section>

      {/* 7. Propuesta de Inicio: "Quick Win" */}
      <section className="py-24 px-[8%] bg-white text-black text-center">
        <div className="max-w-4xl mx-auto">
          <Badge>Próximos Pasos</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">¿Por dónde empezamos?</h2>
          <p className="text-xl text-gray-600 mb-16 leading-relaxed">
            Identificamos las <span className="font-black text-black">3 tareas que más fricción</span> te generan hoy y las conectamos esta misma semana. Si una herramienta tiene una API, nosotros podemos conectarla.
          </p>

          <div className="bg-gray-900 rounded-[64px] p-12 md:p-20 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
            <h3 className="text-3xl md:text-5xl font-black mb-8 relative z-10 text-white">Implementación en tiempo récord</h3>
            <p className="text-gray-400 mb-12 text-lg relative z-10">
              Dejá de ser el puente manual entre tus aplicaciones. <br />
              <span className="text-white font-bold">Hacelas trabajar para vos.</span>
            </p>
            <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/20 relative z-10 active:scale-95">
              Solicitar Mi Flujo Automatizado
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoCodePageSection;
