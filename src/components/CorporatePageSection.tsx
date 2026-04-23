import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Globe, Search, ShieldCheck, Mail, Share2, MessageCircle, Server, LifeBuoy, RefreshCcw, Activity, Wrench, ShieldAlert, Database, Star, ArrowRight, LayoutGrid, Users, PenTool } from 'lucide-react';
import Badge from './Badge';

const CorporatePageSection = () => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[8%] bg-black">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-gray-500 mb-8 flex gap-2">
            <span>Inicio</span>
            <span>»</span>
            <span className="text-primary/80">Diseño web precios</span>
            <span>»</span>
            <span className="text-white">Sitio web corporativo</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Web Corporativa <br /><span className="text-primary text-4xl md:text-6xl">de Autoridad</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            El ecosistema digital de tu empresa. Robustez técnica y estética premium para marcas que lideran su sector.
          </p>

          <div className="space-y-4 mb-12">
            {[
              "Sitio Multisección (Inicio, Nosotros, Servicios, Contacto)",
              "Dominio y hosting profesional por 1 año",
              "Optimización SEO Avanzada",
              "Correos corporativos ilimitados"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-lg font-bold">
                <CheckCircle2 className="text-primary" size={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <span className="text-gray-400 block mb-2">Inversión desde:</span>
            <span className="text-4xl font-black text-white">$420.000</span>
          </div>

          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20">
            Solicitar Presupuesto
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge>Institucional</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Presencia digital que genera confianza
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              No es solo una web, es la cara de tu empresa al mundo. Diseñamos estructuras que proyectan profesionalismo y solidez.
            </p>

            <div className="space-y-8">
              {[
                { 
                  title: "Diseño Coherente con tu Marca", 
                  desc: "Alineamos cada píxel con tu identidad corporativa para que tu mensaje sea claro y potente en cada sección del sitio." 
                },
                { 
                  title: "SEO On-Page Estratégico", 
                  desc: "Arquitectura pensada para que Google indexe tu contenido rápidamente y tus clientes potenciales te encuentren con facilidad." 
                },
                { 
                  title: "Blog y Gestión de Contenidos", 
                  desc: "Sistema autogestionable para que puedas educar a tu audiencia, compartir noticias y atraer tráfico orgánico de calidad." 
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
                src="/imagenes/home/marketing_main.png" 
                alt="Web Corporativa" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-[8%] bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Badge>Beneficios</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Potencia tu Empresa
          </h2>
          <p className="text-gray-500 mb-16">
            Todo lo necesario para una presencia institucional de primer nivel.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { icon: LayoutGrid, title: "Multisección", desc: "Hasta 5 secciones principales para organizar tu información." },
              { icon: Users, title: "Nosotros y Equipo", desc: "Humaniza tu marca mostrando quiénes están detrás del proyecto." },
              { icon: PenTool, title: "Diseño a Medida", desc: "Sin plantillas genéricas. Diseño 100% original para tu marca." },
              { icon: Search, title: "SEO Ready", desc: "Estructura optimizada para motores de búsqueda desde el día 1." },
              { icon: ShieldCheck, title: "Seguridad Total", desc: "Protección contra ataques y certificados SSL incluidos." },
              { icon: Mail, title: "Correos Pro", desc: "Configuración de cuentas corporativas para todo tu equipo." },
              { icon: Share2, title: "Social Connect", desc: "Integración completa con tus redes sociales y perfiles." },
              { icon: MessageCircle, title: "WhatsApp Directo", desc: "Botón flotante para consultas rápidas de clientes." },
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

      {/* CTA Section */}
      <section className="py-24 px-[8%] bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Lleva tu empresa al <span className="text-primary">siguiente nivel</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Solicitá hoy mismo tu presupuesto para un sitio web corporativo de alto impacto.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-all shadow-xl shadow-primary/20">
            Empezar Proyecto
          </button>
        </div>
      </section>
    </div>
  );
};

export default CorporatePageSection;
