import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layout, Smartphone, Zap, Search, ShieldCheck, Mail, Share2, MessageCircle, Globe, Server, LifeBuoy, RefreshCcw, Activity, Wrench, ShieldAlert, Database, Star, ArrowRight } from 'lucide-react';
import Badge from './Badge';

const LandingPageSection = () => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section - Image 1 */}
      <section className="pt-32 pb-20 px-[8%] bg-black">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-gray-500 mb-8 flex gap-2">
            <span>Inicio</span>
            <span>»</span>
            <span className="text-primary/80">Diseño web precios</span>
            <span>»</span>
            <span className="text-white">Diseño web landing page</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Diseño web landing page
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Hacemos el diseño web de tu landing page para destacar y convertir visitantes en clientes.
          </p>

          <div className="space-y-4 mb-12">
            {[
              "Diseño de 1 página",
              "Dominio y hosting por 1 año",
              "Certificado SSL",
              "1 Correo corporativo"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-lg font-bold">
                <CheckCircle2 className="text-primary" size={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <span className="text-gray-400 block mb-2">Precio:</span>
            <span className="text-4xl font-black text-white">$299.990</span>
          </div>

          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20">
            Contactanos
          </button>
        </div>
      </section>

      {/* About Section - Image 2 */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">
              DISEÑO LANDING PAGE
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Sobre el diseño web landing page
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Una landing page bien diseñada es la clave para captar la atención de tu audiencia objetivo y guiarlos hacia la acción que deseas que realicen.
            </p>

            <div className="space-y-8">
              {[
                { 
                  title: "Diseño atractivo y responsivo", 
                  desc: "Creamos landing pages visualmente impactantes y completamente adaptables a diferentes dispositivos para garantizar una experiencia óptima para cada visitante, independientemente del dispositivo que utilice." 
                },
                { 
                  title: "Contenido persuasivo", 
                  desc: "Desarrollamos contenido que destaque tus fortalezas y proporcione a los visitantes la información que necesitan para tomar decisiones informadas. Cada elemento está estratégicamente ubicado para guiar a los usuarios hacia la acción deseada." 
                },
                { 
                  title: "Optimización para conversiones", 
                  desc: "Implementamos técnicas de optimización para aumentar las tasas de conversión, desde formularios de contacto efectivos hasta llamadas a la acción irresistibles." 
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
            <div className="bg-primary/5 rounded-[40px] p-8">
              <img 
                src="/imagenes/logo/Gemini_Generated_Image_loyalloyalloyall.png" 
                alt="Diseño Landing Page" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section - New */}
      <section className="py-24 px-[8%] bg-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <Badge>Caso de Éxito</Badge>
              <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
                Transformación Digital: <span className="text-primary">Proyecto Landing</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-4 leading-relaxed">
              Analizamos cómo implementamos una estrategia de conversión real para uno de nuestros clientes más recientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
            {/* Main large image */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
              <img 
                src="/imagenes/Landing Page/Captura de pantalla 2026-04-21 210336.png" 
                alt="Proyecto Destacado" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Vista Desktop</span>
                <h3 className="text-3xl font-black">Estructura High-Conversion</h3>
              </div>
            </div>

            {/* Side column with 2 images */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="flex-1 group relative overflow-hidden rounded-[40px] border border-white/10">
                <img 
                  src="/imagenes/Landing Page/Captura de pantalla 2026-04-21 210236.png" 
                  alt="Detalle 1" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 group relative overflow-hidden rounded-[40px] border border-white/10 bg-primary/20 flex items-center justify-center p-10">
                <div className="text-center">
                  <span className="text-5xl font-black text-primary block mb-2">+120%</span>
                  <p className="text-sm font-bold text-gray-300">Aumento en Conversión</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of smaller detail images */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "/imagenes/Landing Page/Captura de pantalla 2026-04-21 210307.png",
              "/imagenes/Landing Page/Captura de pantalla 2026-04-21 210352.png",
              "/imagenes/Landing Page/Captura de pantalla 2026-04-21 210403.png"
            ].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[30px] aspect-video border border-white/10 bg-white/5 p-4">
                <img 
                  src={img} 
                  alt={`Detalle ${i + 2}`} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potent Features - Image 3 */}
      <section className="py-24 px-[8%] bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">
            DISEÑO WEB DE LANDING PAGE
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Características potentes
          </h2>
          <p className="text-gray-500 mb-16">
            Te contamos todos los beneficios para el diseño de tu página web.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { icon: Smartphone, title: "Diseño responsive", desc: "El sitio web se adapta todos los tamaños de pantallas." },
              { icon: Layout, title: "Fácil navegación", desc: "Navegación clara y bien organizada para el usuario." },
              { icon: Zap, title: "Carga rápida", desc: "Optimizamos el tiempo de carga del sitio web." },
              { icon: Search, title: "Posicionamiento", desc: "Contenido relevante con palabras claves para posicionar." },
              { icon: ShieldCheck, title: "Sitio seguro (SSL)", desc: "Proporcionamos seguridad entre página web y el visitante." },
              { icon: Mail, title: "Correos corporativos", desc: "Configuramos correos personalizados con tu dominio." },
              { icon: Share2, title: "Redes sociales", desc: "Aplicamos tus perfiles sociales para aumentar tu alcance." },
              { icon: MessageCircle, title: "WhatsApp flotante", desc: "Botón de WhatsApp para que los clientes se comuniquen." },
            ].map((item, i) => (
              <div key={i} className="group">
                <item.icon className="text-primary mb-4 transition-transform group-hover:scale-110" size={32} strokeWidth={1.5} />
                <h4 className="font-black text-lg mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Service - Image 4 */}
      <section className="py-24 px-[8%] bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">
            DISEÑO WEB LANDING PAGE
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Servicio completo
          </h2>
          <p className="text-gray-500 mb-16">
            No solo es diseño y características, te damos un servicio web completo.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-32">
            {[
              { icon: Globe, title: "Dominio", desc: "Registramos el dominio que identifica a tu sitio en Internet." },
              { icon: Server, title: "Hosting", desc: "Alojamos tu web en un hosting seguro y de alta calidad." },
              { icon: LifeBuoy, title: "Soporte", desc: "Brindamos ayuda rápida y efectiva cuando lo necesites." },
              { icon: RefreshCcw, title: "Actualizaciones", desc: "Mantenemos tu página web actualizada." },
              { icon: Activity, title: "Monitoreo", desc: "Monitoreamos la disponibilidad y el rendimiento del sitio." },
              { icon: Wrench, title: "Mantenimiento", desc: "Realizamos el mantenimiento regular de tu web." },
              { icon: ShieldAlert, title: "Anti-Spam/Antivirus", desc: "Configuramos el anti-spam y antivirus para protección." },
              { icon: Database, title: "Backups", desc: "Realizamos copias de seguridad regulares." },
            ].map((item, i) => (
              <div key={i} className="group">
                <item.icon className="text-primary mb-4 transition-transform group-hover:scale-110" size={32} strokeWidth={1.5} />
                <h4 className="font-black text-lg mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-24 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">
                OPINIONES DE CLIENTES
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Estás en buena compañía
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                No hay nada más importante para nosotros que la satisfacción de nuestros clientes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-[40px] relative border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h5 className="font-bold">Mauro Bentancourt</h5>
                  <span className="text-xs text-gray-400">08/10/2025</span>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\"G\"_logo.svg" alt="Google" className="w-5 h-5 ml-auto" />
              </div>
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-8">
                "Excelente servicio muy profesional. Super recomendado!"
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all">
                  <ArrowRight size={18} className="rotate-180" />
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-all">
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-6 text-center">
                La evaluación general en Google es 5.0 de 5, en base a 45 reseñas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Bottom of Image 3 */}
      <section className="py-24 px-[8%] bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Obtené tu landing page
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Creamos tu página web personalizada, sin plantillas.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-all shadow-xl shadow-primary/20">
            Contactanos
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPageSection;
