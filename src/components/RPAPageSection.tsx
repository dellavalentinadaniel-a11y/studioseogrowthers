
import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Cpu, 
  Settings, 
  Activity, 
  Zap, 
  Clock, 
  Database, 
  ShieldCheck, 
  BarChart, 
  ArrowRight,
  AlertTriangle,
  FileText,
  MousePointer,
  Layers,
  Search
} from 'lucide-react';
import Badge from './Badge';

const RPAPageSection = () => {
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
            <span className="text-white">RPA (Bots)</span>
          </nav>
          
          <Badge>Eficiencia Invisible</Badge>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
            Automatiza la Operación, <br />
            <span className="text-primary">Libera el Talento.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mb-10 max-w-3xl leading-tight font-medium">
            Sustituí las tareas repetitivas por procesos autónomos que funcionan con precisión quirúrgica.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
            Descubrir mis procesos automatizables <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 1. El Problema: El "Cuello de Botella" Administrativo */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold mb-4">
              <AlertTriangle size={20} />
              <span>EL CUELLO DE BOTELLA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              ¿Cuánto le cuesta a tu empresa el <span className="text-primary">error humano?</span>
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed text-left">
                Tareas como la carga de facturas o la conciliación de cuentas son monótonas y propensas a errores. Un empleado administrativo dedica hasta el <span className="font-black text-black">40% de su jornada</span> a tareas que no aportan valor estratégico.
              </p>
              <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-gray-300">
                <p className="text-gray-800 italic text-left">
                  "La fatiga administrativa genera costos operativos ocultos que drenan la rentabilidad de tu negocio."
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-900 rounded-[40px] p-10 text-white shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Activity size={120}/></div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Pérdida de Valor Mensual</h4>
                <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Tareas Estratégicas</span>
                        <span className="font-bold text-green-400">60%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 w-[60%]"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Carga Manual / Copy-Paste</span>
                        <span className="font-bold text-primary">40%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[40%] animate-pulse"></div>
                    </div>
                </div>
                <p className="mt-10 text-xs text-gray-500 font-bold uppercase tracking-tighter">Impacto: -16 horas semanales por empleado</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ¿Qué es RPA? (Explicado Simple) */}
      <section className="py-24 px-[8%] bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="md:order-2">
            <Badge>Concepto RPA</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Un empleado digital para tus <span className="text-primary">procesos más críticos.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 text-left">
              El RPA no es un robot físico; es un software (bot) que emula las acciones de un humano en una computadora: hace clics, copia y pega, abre emails y navega por sistemas (SAP, Excel, Webs bancarias) pero <span className="text-white font-bold">10 veces más rápido</span> y sin equivocarse.
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                    <MousePointer className="text-primary" size={20}/>
                    <span className="text-sm font-bold">Emula Acciones</span>
                </div>
                <div className="flex items-center gap-3">
                    <Zap className="text-primary" size={20}/>
                    <span className="text-sm font-bold">10x Velocidad</span>
                </div>
                <div className="flex items-center gap-3">
                    <ShieldCheck className="text-primary" size={20}/>
                    <span className="text-sm font-bold">0% Error</span>
                </div>
                <div className="flex items-center gap-3">
                    <Layers className="text-primary" size={20}/>
                    <span className="text-sm font-bold">Multi-Sistema</span>
                </div>
            </div>
          </div>
          <div className="md:order-1 relative">
             <div className="bg-white/5 border border-white/10 rounded-[48px] p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/30"></div>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><Search size={20}/></div>
                        <div className="h-2 bg-white/10 rounded-full w-2/3"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><FileText size={20}/></div>
                        <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><Settings size={20}/></div>
                        <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
                    <Cpu className="text-primary animate-pulse" size={64}/>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Soluciones A y B */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Solución A */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">SOLUCIÓN A: FINANZAS</span>
              <h2 className="text-4xl font-black mb-6 leading-tight">Cierre de caja en minutos, <br />no en días.</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-left">
                El bot ingresa a tus homebankings, descarga extractos y los cruza con tu sistema contable de forma autónoma.
              </p>
              <div className="space-y-4">
                {[
                  "Identificación inmediata de discrepancias.",
                  "Descarga y cruce automático de múltiples bancos.",
                  "Reportes financieros listos a primera hora del día."
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-gray-800">
                    <CheckCircle2 className="text-primary" size={24} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-[40px] border border-gray-200">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                    <h5 className="text-xs font-black mb-4 uppercase text-gray-400">Estado de Conciliación</h5>
                    <div className="space-y-3">
                        <div className="flex justify-between text-xs font-bold"><span>Banco Galicia</span> <span className="text-green-600">OK</span></div>
                        <div className="flex justify-between text-xs font-bold"><span>Santander</span> <span className="text-green-600">OK</span></div>
                        <div className="flex justify-between text-xs font-bold"><span>BBVA</span> <span className="text-primary">PROCESANDO...</span></div>
                    </div>
                </div>
            </div>
          </div>

          {/* Solución B */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">SOLUCIÓN B: OPERACIONES</span>
              <h2 className="text-4xl font-black mb-6 leading-tight">Digitalización total del ciclo de compras.</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-left">
                Extraemos datos de facturas PDF vía OCR y los cargamos automáticamente en tu ERP, eliminando el error de carga manual.
              </p>
              <div className="space-y-4">
                {[
                  "Eliminación total del copy-paste entre sistemas.",
                  "Migración masiva de datos entre plataformas legacy.",
                  "Procesamiento de miles de documentos en segundos."
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-gray-800">
                    <CheckCircle2 className="text-primary" size={24} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:order-1 bg-primary/5 p-8 rounded-[40px] border border-primary/10 flex items-center justify-center">
                <FileText className="text-primary" size={120} strokeWidth={1}/>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ¿Por qué elegir RPA? */}
      <section className="py-24 px-[8%] bg-gray-50 text-black">
        <div className="max-w-7xl mx-auto text-center">
          <Badge>Diferenciales</Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-16">Implementación rápida <br /><span className="text-primary">sin cambiar tus sistemas</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "No Intrusivo", 
                icon: Settings,
                desc: "El bot trabaja sobre tus programas actuales. No hay que modificar el software que ya usás." 
              },
              { 
                title: "Escalable", 
                icon: Layers,
                desc: "Si el volumen de trabajo sube, activamos más bots en segundos para absorber la demanda." 
              },
              { 
                title: "Precisión 100%", 
                icon: ShieldCheck,
                desc: "Los bots no se cansan, no se distraen y no olvidan las reglas de negocio nunca." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 hover:-translate-y-2 transition-all">
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

      {/* 6. El Retorno de Inversión (ROI) */}
      <section className="py-24 px-[8%] bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-black/20 border-black/10 text-white">Productividad 24/7/365</Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-16">Impacto Inmediato en el ROI</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="text-7xl font-black">3x</div>
              <h5 className="text-xl font-bold">Disponibilidad</h5>
              <p className="text-white/70 text-sm">Un bot trabaja las 24hs, equivaliendo a 3 jornadas laborales humanas sin descanso.</p>
            </div>
            <div className="space-y-4">
              <div className="text-7xl font-black">10x</div>
              <h5 className="text-xl font-bold">Velocidad</h5>
              <p className="text-white/70 text-sm">Procesos que tardaban horas se reducen a minutos, acelerando el ciclo de negocio.</p>
            </div>
            <div className="space-y-4">
              <div className="text-7xl font-black">100%</div>
              <h5 className="text-xl font-bold">Compliance</h5>
              <p className="text-white/70 text-sm">Auditoría perfecta: cada acción del bot queda registrada para un control total.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Hoja de Ruta (Roadmap) */}
      <section className="py-24 px-[8%] bg-white text-black text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16">De la tarea manual a la autonomía digital</h2>
          
          <div className="grid md:grid-cols-3 gap-12 text-left relative">
            {/* Line connector */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 -z-0"></div>
            
            {[
              { step: "01", title: "Identificación (PDI)", desc: "Elegimos la tarea más pesada y repetitiva para maximizar el impacto inicial." },
              { step: "02", title: "Desarrollo", desc: "Programación de reglas, excepciones y lógicas de decisión del empleado digital." },
              { step: "03", title: "Go-Live", desc: "El bot empieza a operar con supervisión inicial hasta alcanzar autonomía total." }
            ].map((s, i) => (
              <div key={i} className="relative z-10 bg-white group">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-black mb-6 group-hover:bg-primary transition-colors">
                  {s.step}
                </div>
                <h4 className="text-xl font-black mb-3">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 md:p-20 bg-gray-900 rounded-[64px] text-white relative overflow-hidden group text-center">
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700"></div>
            <h3 className="text-3xl md:text-5xl font-black mb-8">¿Cuál es tu proceso más lento hoy?</h3>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Permití que tu equipo se enfoque en lo estratégico mientras nuestros bots se encargan del trabajo pesado.
            </p>
            <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/20 active:scale-95">
              Solicitar Diagnóstico RPA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RPAPageSection;
