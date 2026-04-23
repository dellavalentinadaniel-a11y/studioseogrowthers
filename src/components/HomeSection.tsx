import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Zap, 
  Globe, 
  Smartphone, 
  CheckCircle2, 
  Search,
  MousePointerClick,
  Sparkles,
  MessageCircle,
  Layout
} from 'lucide-react';
import type { PageId } from './Navbar';
import ServicesSection from './ServicesSection';
import TestimonialCarousel from './TestimonialCarousel';
import PortfolioSection from './PortfolioSection';

interface HomeSectionProps {
  onNavigate: (id: PageId) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => (
  <>
    {/* Hero Section */}
    <section className="pt-32 pb-16 px-[8%] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-left"
        >
          <a 
            href="https://seogrowthers.com/"
            className="mb-10 relative inline-block group"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse group-hover:bg-primary/30 transition-colors"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl transition-transform group-hover:scale-105">
              <img 
                src="/imagenes/logo/logo_official.png" 
                alt="Logo Isotipo" 
                className="h-20 w-auto object-contain rounded-full shadow-2xl shadow-primary/20"
              />
            </div>
          </a>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary/50"></span>
            Diseño Web de Alto Vuelo
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1] tracking-tight">
            Sitios web <span className="text-primary">a medida</span> de tus necesidades
          </h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
            En <span className="text-white font-bold">seogrowthers.com</span> creamos sitios web pensados para hacer crecer tu negocio. 
            Hacemos foco en tu objetivo: <span className="text-white font-bold">atraer, comunicar y vender.</span> 
            Combinamos diseños atractivos con estrategia comercial para que tu negocio despegue.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={() => onNavigate('landing')}
              className="bg-primary hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all group w-full sm:w-auto justify-center"
            >
              Nuestros Servicios 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('aluvalle')}
              className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all border border-white/10 w-full sm:w-auto justify-center"
            >
              Caso Aluvalle
            </button>
          </div>
          <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
            <div className="flex gap-1 text-orange-400">
              <Sparkles size={20} fill="currentColor" />
              <Sparkles size={20} fill="currentColor" />
              <Sparkles size={20} fill="currentColor" />
              <Sparkles size={20} fill="currentColor" />
              <Sparkles size={20} fill="currentColor" />
            </div>
            <span className="text-sm font-bold text-gray-400">5.0 en Google My Business</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Main Browser Mockup */}
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative z-20">
            <div className="bg-white/10 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              </div>
            </div>
            <img 
              src="/imagenes/casos de exito/aluvalle-case.webp" 
              alt="Preview Patagonia Wander" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Second Mockup Offset */}
          <div className="absolute -bottom-12 -right-8 w-2/3 bg-white/5 rounded-2xl border border-white/10 overflow-hidden shadow-2xl z-30 hidden md:block">
            <div className="bg-white/10 px-4 py-1.5 flex items-center justify-between">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
              <ArrowRight size={12} className="text-white/20" />
            </div>
            <img 
              src="/imagenes/casos de exito/aluvalle-screens.webp" 
              alt="Preview Work" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Feature Grid Section */}
    <section className="py-24 px-[8%]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">1 DISEÑO WEB DE ALTO VUELO</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1]">
            Diseño web que se <span className="text-primary">ajusta a tus necesidades</span>
          </h2>
          <p className="text-gray-400 max-w-4xl text-sm leading-relaxed">
            En <span className="text-white">seogrowthers.com</span> desarrollamos sitios webs <span className="text-white">modernos, atractivos y ágiles</span> pensados en tu marca o negocio. Trabajamos para asegurarnos que tu sitio te represente haciéndolo 100% a medida. Diseñamos sitios web para todos los niveles y necesidades: desde opciones económicas para emprendedores, freelancers y profesionales independientes (como abogados, diseñadores, médicos o contadores), hasta desarrollos a medida para pymes y empresas consolidadas. Tu presencia online, con identidad propia y lista para crecer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 bg-white/5 p-12 rounded-[40px] border border-white/5">
          {[
            { icon: Smartphone, title: "Diseño responsive", desc: "Tu sitio se adapta a cualquier pantalla, desde celulares y tablets hasta computadoras." },
            { icon: CheckCircle2, title: "Sitios Seguros SSL", desc: "Sitios webs con Certificados de encriptación de extremo a extremo incluidos en todos nuestros sitios." },
            { icon: MousePointerClick, title: "Diseño a medida", desc: "Hacemos sitios 100% personalizados, únicos, para que tu empresa realmente se destaque." },
            { icon: Zap, title: "Optimizado para tus clientes", desc: "Sitios webs diseñados con diseños orientados a tus clientes. Claro, bien organizado y listo para convertir." },
            { icon: Globe, title: "Sitios Rápidos", desc: "Sitios webs veloces, potenciados por 3 capas de caché y CDN que aseguran velocidades máximas." },
            { icon: Search, title: "Optimizado para buscadores", desc: "Diseño web con contenido optimizado para posicionar en los resultados de los principales buscadores." },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white shrink-0 border border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Web Types Section */}
    <section className="py-24 px-[8%] bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">1 TIPOS DE WEBS</span>
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1]">
              Diseñamos todo <span className="text-primary">tipo de webs</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            En seogrowthers.com desarrollamos todo tipo de webs, desde landing pages y sitios corporativos, hasta plataformas. Somos la puerta de entrada de tu empresa o negocio a internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { id: 'landing' as PageId, title: "Landing Page", icon: Layout, desc: "Es una página web diseñada específicamente para convertir visitantes en clientes o contactos, enfocándose en un solo objetivo claro." },
            { id: 'landing' as PageId, title: "One Page", icon: Smartphone, desc: "Una página única que concentra tu propuesta de valor, diseñada para presentar información de una empresa o proyecto en una sola página web." },
            { id: 'corporativa' as PageId, title: "Corporativo o clásico", icon: Globe, desc: "Presenta la identidad de la empresa, diseñada para comunicar con sobriedad y guiar al visitante hacia la información clave de sus servicios y contactos." },
            { id: 'ecommerce' as PageId, title: "Tienda Online", icon: MousePointerClick, desc: "Reúne tus productos en un solo espacio digital, diseñada para mostrar con orden y guiar al visitante hacia la compra que lo convierte en cliente." },
          ].map((card, i) => (
            <div 
              key={i} 
              className="bg-white p-10 rounded-[45px] text-black flex flex-col h-[420px] relative overflow-hidden group cursor-pointer border border-primary/5 shadow-xl shadow-black/5"
              onClick={() => onNavigate(card.id)}
            >
              <div className="mb-10 text-primary">
                <card.icon size={44} strokeWidth={1.2} />
              </div>
              <h3 className="text-2xl font-black mb-6 leading-tight pr-4">{card.title}</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-8 flex-1">{card.desc}</p>
              <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-primary transition-all group-hover:gap-4">
                Saber más <ArrowRight size={16} />
              </button>
              
              {/* Circular Overlay Pattern */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white tracking-tight">Plataformas Online</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { title: "Plataforma Mayorista", desc: "Acoplado a tu tienda Online permite que gestiones clientes, precios, descuentos y productos al por mayor y al por menor." },
            { title: "E-Learning", desc: "Permite que gestiones cursos, alumnos, evaluaciones y contenidos digitales, tanto en formación individual como en programas grupales." },
            { title: "Diario Online", desc: "Gestión de noticias, redactores, secciones y contenidos digitales, tanto en publicaciones diarias como en ediciones especiales." },
            { title: "Inmobiliarias", desc: "Gestioná tus propiedades, agentes, categorías y contenidos digitales, tanto en publicaciones individuales como en catálogos completos." },
          ].map((card, i) => (
            <div key={i} className="bg-primary p-10 rounded-[45px] text-white flex flex-col h-[380px] relative overflow-hidden group border border-white/5 hover:scale-[1.02] transition-all duration-500">
              <h3 className="text-2xl font-black mb-6 leading-tight">{card.title}</h3>
              <p className="text-white/80 text-[13px] leading-relaxed mb-8 flex-1">{card.desc}</p>
              
              {/* Circular Overlay Pattern */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/10 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Feature List Section (Image 2) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center py-24 border-t border-white/5">
          <div className="relative">
             <div className="bg-white/5 rounded-3xl border border-white/10 p-4 aspect-[4/3] flex items-center justify-center overflow-hidden">
                <img 
                  src="/imagenes/casos de exito/aluvalle-case.webp" 
                  alt="Laptop Mockup" 
                  className="w-full h-full object-cover rounded-xl opacity-80"
                />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-primary p-4 rounded-2xl shadow-2xl hidden md:block">
               <Smartphone className="text-white" size={32} />
             </div>
          </div>
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">1 EN TODOS LOS PLANES</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1]">
              ¿Qué tendrá tu próximo <span className="text-primary">sitio web?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-sm">
              En seogrowthers.com simplificamos la forma de desarrollar sitios. Nos encargamos de todo para que nos des tu idea y nosotros te entreguemos el producto final.
            </p>
            <div className="space-y-4">
              {[
                { title: "Diseño", desc: "Todos nuestros sitios web 100% a medida" },
                { title: "Dominio", desc: "Incluye registro de dominio bonificado" },
                { title: "Hosting", desc: "Tu sitio web alojado en servidores de primer nivel bonificado" },
                { title: "Soporte", desc: "Brindamos soporte para que saques el máximo de tu web" },
                { title: "Pago único", desc: "Sin suscripciones, sin ataduras" },
                { title: "Autoadministración", desc: "Podés editar todo el contenido" },
                { title: "Whatsapp", desc: "Botón flotante de Whatsapp" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-sm font-bold text-white">{f.title}:</span>
                  <span className="text-sm text-gray-400">{f.desc}</span>
                </div>
              ))}
            </div>
            <button className="mt-10 bg-primary hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all group">
              <MessageCircle size={20} /> Saber más
            </button>
          </div>
        </div>

        {/* Tools Row */}
        <div className="flex flex-wrap justify-center items-center gap-10 py-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          {['WordPress', 'WooCommerce', 'Elementor', 'HTML5', 'PHP', 'JavaScript', 'Meta', 'Google Ads', 'Illustrator', 'Photoshop'].map((tool, i) => (
            <span key={i} className="text-xs font-black tracking-widest uppercase text-white">{tool}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Section (Image 3) */}
    <section className="py-24 px-[8%] bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">1 PRECIOS</span>
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
            Diseño web a <span className="text-primary">precios competitivos</span>
          </h2>
          <p className="text-gray-400 mt-4">Diseño web a medida sin pagar demás, sin sorpresas y a precios competitivos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Landing Page One Page", 
              price: "299.990", 
              desc: "Diseño ideal para comenzar en Internet o promocionar tu negocio.",
              features: ["Diseño profesional", "Diseño en 1 página", "5 secciones internas", "Hosting y Dominio por 1 año", "Certificado SSL incluido", "2 Cuentas de correo electrónico"]
            },
            { 
              title: "Sitio Corporativo", 
              price: "420.000", 
              desc: "Destacá tus servicios o productos con una solución completa.",
              features: ["Diseño profesional", "Diseño en 5 páginas", "Hosting y Dominio por 1 año", "Certificado SSL incluido", "5 Cuentas de correo electrónico", "Blog"]
            },
            { 
              title: "Tienda Online", 
              price: "560.000", 
              desc: "Destacá tus servicios o productos con una solución completa.",
              features: ["Diseño profesional", "Diseño en 5 páginas", "Hosting y Dominio por 1 año", "Certificado SSL incluido", "5 Cuentas de correo electrónico", "Blog"]
            }
          ].map((plan, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] text-black flex flex-col group hover:scale-[1.02] transition-all border border-transparent hover:border-primary/20">
              <div className="mb-8 w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white">
                 {i === 0 ? <Layout size={32} /> : i === 1 ? <Globe size={32} /> : <MousePointerClick size={32} />}
              </div>
              <h3 className="text-2xl font-black mb-2">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">$ {plan.price}</span>
                <span className="text-gray-400 text-sm ml-2 font-bold uppercase tracking-widest">ARS</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">{plan.desc}</p>
              
              <div className="space-y-4 mb-10">
                {plan.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{f}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-primary hover:bg-cyan-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-900/20">
                <MessageCircle size={18} /> ¡Empezá ya mismo!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio Section */}
    <PortfolioSection onNavigate={onNavigate} />

    {/* Key Services Interactive Icons */}
    <ServicesSection />

    {/* Testimonials Carousel */}
    <TestimonialCarousel />
  </>
);

export default HomeSection;
