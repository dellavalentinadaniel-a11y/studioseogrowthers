
import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Bot, 
  Brain, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  Search, 
  MessageSquare, 
  Database, 
  Globe, 
  Settings,
  HelpCircle,
  Eye,
  Workflow
} from 'lucide-react';
import Badge from './Badge';

const AgenticAIPageSection = () => {
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
            <span className="text-white">IA Agéntica</span>
          </nav>
          
          <Badge>Nueva Fuerza Laboral</Badge>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Agentes de IA: <br />
            <span className="text-primary">Autonomía Real.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl leading-relaxed font-medium">
            No son scripts rígidos. Son colaboradores digitales que entienden el contexto, razonan y toman decisiones para cumplir tus objetivos.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20 flex items-center gap-3 active:scale-95">
            Desplegar mi primer agente <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 1. La Evolución: Del "Bot Rígido" al "Agente Inteligente" */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 text-primary font-bold mb-4">
              <Brain size={20} />
              <span className="uppercase tracking-widest text-xs">LA EVOLUCIÓN DE LA IA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              ¿Tu automatización se detiene cuando surge <span className="text-primary">un imprevisto?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              La automatización tradicional sigue reglas fijas: <span className="italic">"Si pasa A, haz B"</span>. Pero el mundo real es complejo. Los Agentes de IA no solo ejecutan tareas; entienden el contexto y deciden el mejor camino, tal como lo haría un experto.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h4 className="font-black text-gray-400 mb-2 uppercase text-xs">Bot Tradicional</h4>
                    <p className="text-sm font-bold text-gray-500 italic">"No entiendo el comando. Reintentar."</p>
                </div>
                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <h4 className="font-black text-primary mb-2 uppercase text-xs">Agente Agéntico</h4>
                    <p className="text-sm font-bold text-gray-800">"El sistema está caído, intentaré contactar al soporte y avisar al cliente."</p>
                </div>
            </div>
          </div>
          <div className="relative">
             <div className="bg-gray-900 rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Brain size={120}/></div>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary"><Eye size={24}/></div>
                        <div>
                            <h5 className="font-bold">Percepción</h5>
                            <p className="text-xs text-gray-400">Analiza el entorno y los datos.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary"><Brain size={24}/></div>
                        <div>
                            <h5 className="font-bold">Razonamiento</h5>
                            <p className="text-xs text-gray-400">Evalúa alternativas lógicas.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary"><Zap size={24}/></div>
                        <div>
                            <h5 className="font-bold">Acción</h5>
                            <p className="text-xs text-gray-400">Ejecuta la solución de forma autónoma.</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. ¿Qué es un Agente de IA? (Cerebro vs. Músculo) */}
      <section className="py-24 px-[8%] bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge>El Colaborador Digital</Badge>
          <h2 className="text-4xl md:text-7xl font-black mb-8">No es un script, <br />es un <span className="text-primary">Cerebro Operativo.</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-20 leading-relaxed">
            Un Agente Agéntico posee capacidades que van más allá del "copy-paste". Tiene la facultad de aprender y usar herramientas activamente.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "Razonar", desc: "Analiza situaciones complejas y elige el mejor camino." },
              { icon: Workflow, title: "Usar Herramientas", desc: "Entra a CRMs, lee PDFs, navega la web y usa APIs." },
              { icon: TrendingUp, title: "Aprender", desc: "Mejora su precisión y velocidad con cada interacción." },
              { icon: Zap, title: "Autonomía", desc: "Si encuentra un error, busca una alternativa sin detenerse." }
            ].map((cap, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:border-primary/50 transition-all group backdrop-blur-md">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <cap.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3, 4, 5. Aplicaciones Prácticas */}
      <section className="py-32 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-40">
          {/* Aplicación 1 */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6 block">APLICACIÓN 1: SOPORTE NIVEL 2</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-left">Resolución de problemas, <br />no solo respuestas.</h2>
              <p className="text-lg text-gray-600 mb-8 text-left">
                A diferencia de un chatbot común, el agente puede recibir una queja, verificar el estado del envío, decidir si corresponde una compensación y emitir un cupón de forma autónoma.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0"><CheckCircle2/></div>
                 <p className="text-sm font-bold text-gray-700">Resultado: Soporte humano solo para casos críticos.</p>
              </div>
            </div>
            <div className="bg-gray-900 p-10 rounded-[48px] text-white shadow-2xl">
                <div className="space-y-4 font-mono text-xs">
                    <div className="text-primary opacity-50"># Pensamiento del Agente:</div>
                    <div className="text-white">"El cliente reclama demora. Accediendo a Base de Datos..."</div>
                    <div className="text-white">"Envío #4402 retrasado por logística. Política aplicada: compensación 10%."</div>
                    <div className="text-white">"Generando cupón SALE10 y enviando por WhatsApp..."</div>
                    <div className="text-green-400 font-bold mt-4">✓ Tarea completada.</div>
                </div>
            </div>
          </div>

          {/* Aplicación 2 */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="md:order-2 text-left">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6 block">APLICACIÓN 2: RESEARCH ESTRATÉGICO</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-left">Inteligencia de mercado en tiempo real.</h2>
              <p className="text-lg text-gray-600 mb-8 text-left">
                Asignale una misión: "Analizá los precios de la competencia y ajustá nuestras ofertas". El agente navega, extrae datos y ejecuta cambios basados en tus parámetros de rentabilidad.
              </p>
              <ul className="space-y-4">
                {["Navegación web autónoma", "Procesamiento de datos en tiempo real", "Ajuste automático de catálogos"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-gray-800">
                        <CheckCircle2 className="text-primary" size={20}/> {item}
                    </li>
                ))}
              </ul>
            </div>
            <div className="md:order-1 bg-primary/5 p-12 rounded-[48px] border border-primary/10 flex items-center justify-center">
                <Globe className="text-primary animate-pulse" size={120} strokeWidth={1}/>
            </div>
          </div>

          {/* Aplicación 3 */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6 block text-left">APLICACIÓN 3: OPERACIONES</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-left">Coordinación total multietapa.</h2>
              <p className="text-lg text-gray-600 mb-8 text-left">
                Gestioná tu cadena de suministro sin estrés: detecta falta de stock, contacta proveedores, pide presupuestos y presenta la mejor opción lista para firmar.
              </p>
              <div className="p-8 bg-gray-900 rounded-3xl text-white">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-black uppercase tracking-widest text-primary">Proceso Activo</span>
                    <Badge className="bg-green-500/20 text-green-400 border-none">98% Eficiencia</Badge>
                </div>
                <div className="h-2 bg-white/10 rounded-full w-full mb-2 overflow-hidden"><div className="h-full bg-primary w-3/4"></div></div>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Analizando 5 proveedores de materia prima...</p>
              </div>
            </div>
            <div className="bg-gray-100 p-10 rounded-[48px] border border-gray-200">
                <img src="/imagenes/casos de exito/aluvalle-case.webp" alt="Ops Management" className="rounded-3xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Seguridad y Control (Human-in-the-loop) */}
      <section className="py-24 px-[8%] bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="text-left">
            <Badge className="bg-black/20 border-black/10 text-white mb-6">Seguridad Total</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Tú pones los límites, <br />el Agente hace el trabajo.</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-black mb-2 flex items-center gap-3"><ShieldCheck/> Barreras de Seguridad</h4>
                <p className="text-white/80 leading-relaxed">Definimos "Guardrails" estrictos: qué puede y qué no puede decidir el agente bajo ningún concepto.</p>
              </div>
              <div>
                <h4 className="text-2xl font-black mb-2 flex items-center gap-3"><Eye/> Supervisión Humana</h4>
                <p className="text-white/80 leading-relaxed">Configurá el sistema para que pida aprobación manual antes de acciones críticas como pagos o envíos masivos.</p>
              </div>
            </div>
          </div>
          <div className="bg-black/20 p-10 rounded-[48px] border border-white/10 backdrop-blur-md">
             <div className="flex flex-col gap-6">
                <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest">Pago Proveedor X</span>
                    <Badge className="bg-orange-500 text-black border-none font-black">REQUIERE APROBACIÓN</Badge>
                </div>
                <div className="flex gap-4">
                    <button className="flex-1 bg-white text-primary py-3 rounded-xl font-black text-sm">APROBAR</button>
                    <button className="flex-1 border border-white/30 text-white py-3 rounded-xl font-black text-sm text-left px-4">REVISAR</button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Por qué ahora: La Ventaja Competitiva */}
      <section className="py-32 px-[8%] bg-white text-black text-center">
        <div className="max-w-5xl mx-auto">
          <Badge>Ventaja Competitiva</Badge>
          <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tight">Escalabilidad infinita <br />sin aumentar la nómina.</h2>
          <p className="text-xl text-gray-600 mb-16 leading-relaxed">
            Mientras tu competencia contrata más gente para tareas de gestión, tú despliegas agentes que aprenden tu negocio y operan a la velocidad de la luz.
          </p>

          <div className="bg-gray-900 rounded-[64px] p-12 md:p-20 text-white relative overflow-hidden group shadow-3xl">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full group-hover:bg-primary/30 transition-all duration-1000"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black mb-8">¿Cuál es el primer proceso complejo que quieres delegar?</h3>
              <p className="text-gray-400 text-lg mb-12">Hagamos una prueba piloto y observá la inteligencia en acción.</p>
              <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-xl shadow-primary/40 active:scale-95">
                Hablar con un Especialista en IA
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgenticAIPageSection;
