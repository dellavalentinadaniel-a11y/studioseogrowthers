/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  Monitor, 
  ShoppingBag, 
  CheckCircle2, 
  TrendingUp, 
  Globe, 
  Smartphone, 
  BarChart3,
  Menu,
  X,
  Search,
  MousePointerClick,
  Layout,
  FileText,
  Users,
  Sparkles
} from 'lucide-react';

// --- Types ---
type PageId = 'home' | 'landing' | 'corporativa' | 'ecommerce' | 'aluvalle';

// --- Components ---

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`bg-primary/20 text-blue-400 px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-[10px] font-bold tracking-widest uppercase rounded-md mb-4 inline-block ${className}`}>
    {children}
  </span>
);

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (id: PageId) => void, currentPage: PageId }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/60 backdrop-blur-md border-b border-white/5 px-[8%] py-6">
      <div className="flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
            K
          </div>
          <div className="font-display font-extrabold text-xl tracking-tighter uppercase whitespace-nowrap">
            SEO <span className="text-primary">GROWTHERS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'landing', label: 'Landing Pro' },
            { id: 'corporativa', label: 'Corporativa' },
            { id: 'ecommerce', label: 'E-Commerce' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as PageId)}
              className={`text-sm font-semibold transition-colors hover:text-white ${
                currentPage === item.id ? 'text-white border-b-2 border-primary pb-1' : 'text-gray-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href="https://wa.me/tu-numero" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-900/20 transition-all"
          >
            Presupuesto
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-4 md:hidden"
          >
            {[
              { id: 'home', label: 'Home' },
              { id: 'landing', label: 'Landing Pro' },
              { id: 'corporativa', label: 'Corporativa' },
              { id: 'ecommerce', label: 'E-Commerce' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id as PageId);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-bold ${currentPage === item.id ? 'text-primary' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://wa.me/tu-numero" 
              className="bg-primary text-white text-center py-4 rounded-xl font-bold"
            >
              Consultar Proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const PlanCard = ({ title, desc, onClick, icon: Icon }: { title: string, desc: string, onClick: () => void, icon: any }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    onClick={onClick}
    className="group relative bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[32px] p-8 transition-all hover:border-primary/50 hover:bg-primary/5 cursor-pointer h-full flex flex-col"
  >
    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-2xl font-black mb-3">{title}</h3>
    <p className="text-gray-400 text-xs leading-relaxed mb-8 flex-1">{desc}</p>
    <button className="w-full py-4 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all">
      Ver Identidad
    </button>
  </motion.div>
);

const SectionHeading = ({ badge, title, desc, centered = false }: { badge?: string, title: string, desc?: string, centered?: boolean }) => (
  <div className={`max-w-3xl mb-16 ${centered ? 'mx-auto text-center' : ''}`}>
    {badge && <Badge>{badge}</Badge>}
    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1]">
      {title}
    </h2>
    {desc && <p className="text-gray-soft text-lg leading-relaxed">{desc}</p>}
  </div>
);

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "La landing page de SEO Growthers duplicó nuestra tasa de conversión en una semana. El equipo entiende perfectamente el tráfico pago.",
      name: "Sofía Martínez",
      company: "Elevate SaaS",
      logo: "https://picsum.photos/seed/ele/120/40?grayscale"
    },
    {
      quote: "Expertos en lo que hacen. La web corporativa nos dio la presencia y autoridad que necesitábamos para cerrar clientes B2B grandes.",
      name: "Javier López",
      company: "Grupo Global",
      logo: "https://picsum.photos/seed/glo/120/40?grayscale"
    },
    {
      quote: "Nuestras ventas online subieron un 40% tras rediseñar el funnel del E-commerce. La automatización de stock es una genialidad.",
      name: "Elena Torres",
      company: "Aura Moda",
      logo: "https://picsum.photos/seed/mod/120/40?grayscale"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-[8%] relative group">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge>Testimonios</Badge>
          <h2 className="text-3xl font-black text-white">Lo que dicen nuestros clientes</h2>
        </div>
        
        <div className="relative min-h-[300px] flex items-center justify-center">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 z-20 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 -translate-x-6 md:translate-x-0"
            aria-label="Anterior"
          >
            <ArrowRight className="rotate-180" size={20} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 z-20 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 translate-x-6 md:translate-x-0"
            aria-label="Siguiente"
          >
            <ArrowRight size={20} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center max-w-3xl text-center px-12"
            >
              <div className="text-2xl md:text-3xl font-medium text-white italic mb-12 leading-relaxed text-balance">
                "{testimonials[index].quote}"
              </div>
              
              <div className="flex flex-col items-center gap-6">
                <div className="h-10 opacity-60 grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={testimonials[index].logo} 
                    alt={testimonials[index].company}
                    referrerPolicy="no-referrer"
                    className="h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-base">{testimonials[index].name}</div>
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{testimonials[index].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ver testimonio ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === i ? 'w-10 bg-primary shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'w-2 bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem: React.FC<{ icon: any, name: string }> = ({ icon: Icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-help shadow-lg"
      >
        <Icon size={32} />
      </motion.div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-md whitespace-nowrap z-30 shadow-xl pointer-events-none"
          >
            {name}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    { name: "SEO Audit", icon: Search },
    { name: "Paid Media", icon: MousePointerClick },
    { name: "UI/UX Design", icon: Layout },
    { name: "Content", icon: FileText },
    { name: "CRM Setup", icon: Users },
    { name: "CRO Ops", icon: Sparkles },
  ];

  return (
    <section className="py-24 px-[8%] border-y border-white/5 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-sm text-center md:text-left">
            <Badge>Servicios 360°</Badge>
            <h2 className="text-3xl font-black text-white mb-4">Soluciones de crecimiento modular.</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Complementamos tu arquitectura digital con servicios especializados para maximizar el retorno de inversión.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            {services.map((s, i) => (
              <ServiceItem key={i} icon={s.icon} name={s.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Sections ---

const HomeSection = ({ onNavigate }: { onNavigate: (id: PageId) => void }) => (
  <>
    {/* Hero */}
    <section className="pt-24 pb-16 px-[8%] text-center max-w-5xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Badge>Ingeniería de Crecimiento</Badge>
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tight text-balance">
          NO HACEMOS WEBS,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">CREAMOS ACTIVOS.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Fusionamos diseño de vanguardia con ingeniería de conversión para transformar tu tráfico en facturación real.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <PlanCard 
            icon={Zap}
            title="Landing Pro"
            desc="Máxima conversión para Google & Meta Ads. Mobile-First y gatillos mentales."
            onClick={() => onNavigate('landing')}
          />
          <PlanCard 
            icon={Monitor}
            title="Corporativa"
            desc="Autoridad y posicionamiento SEO orgánico. Arquitectura silo y CMS autónomo."
            onClick={() => onNavigate('corporativa')}
          />
          <PlanCard 
            icon={ShoppingBag}
            title="E-Commerce"
            desc="Tiendas de alto volumen automatizadas. Mercado Pago full y logística auto."
            onClick={() => onNavigate('ecommerce')}
          />
        </div>
      </motion.div>
    </section>

    {/* Success Story / Case Study Snapshot */}
    <section className="py-24 px-[8%]">
      <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden grid lg:grid-cols-2 gap-0 relative backdrop-blur-xl">
        <div className="p-12 md:p-20 flex flex-col justify-center">
          <Badge className="bg-primary/20 text-blue-400 border border-blue-500/30">Éxito Destacado</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
            Caso Aluvalle: +300% Tráfico Orgánico.
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Transformación digital completa: de tecnología obsoleta a una plataforma de alto rendimiento que multiplica leads.
          </p>
          <div className="flex gap-4 mb-8">
            <div className="bg-black/40 px-6 py-4 rounded-2xl border border-white/5 flex-1">
              <span className="block text-primary font-black text-3xl mb-1">ROI x5</span>
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Retorno Real</span>
            </div>
            <div className="bg-black/40 px-6 py-4 rounded-2xl border border-white/5 flex-1">
              <span className="block text-primary font-black text-3xl mb-1">+1.2k</span>
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Visitas Orgánicas</span>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('aluvalle')}
            className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
          >
            Ver Caso de Éxito Completo <ArrowRight size={20} />
          </button>
        </div>
        <div 
          className="bg-primary flex items-center justify-center p-12 min-h-[400px] relative overflow-hidden group cursor-pointer"
          onClick={() => onNavigate('aluvalle')}
        >
          <img 
            src="/imagenes/casos de exito/aluvalle-premium.webp" 
            alt="Aluvalle Premium" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-blue-600/20 blur-3xl group-hover:bg-blue-600/40 transition-colors"></div>
          <div className="text-white font-black text-6xl md:text-8xl tracking-tight relative z-10 drop-shadow-2xl">
            ALUVALLE
          </div>
        </div>
      </div>
    </section>

    {/* Key Services Interactive Icons */}
    <ServicesSection />

    {/* Testimonials Carousel */}
    <TestimonialCarousel />
  </>
);

const SuccessCaseAluvalle = ({ onBack }: { onBack: () => void }) => (
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
              Stack moderno basado en <strong>React y Next.js</strong> (SSG/SSR) para tiempos de respuesta instantáneos. Tailwind CSS para un diseño responsivo y WebP/AVIF para optimización de imágenes.
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
                <span className="text-lg font-bold text-gray-400 line-through decoration-red-500/50">{kpi.before}</span>
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
        className="bg-primary hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-900/40"
      >
        Empezar mi transformación
      </button>
    </footer>
  </section>
);

const PlanDetailLayout = ({ 
  badge, 
  title, 
  desc, 
  features, 
  imageLabel, 
  imageSide = 'right',
  onCtaClick 
}: { 
  badge: string, 
  title: string, 
  desc: string, 
  features: { title: string, desc: string }[], 
  imageLabel: string,
  imageSide?: 'left' | 'right'
  onCtaClick: () => void
}) => (
  <section className="py-24 px-[8%] relative overflow-hidden">
    <div className={`grid lg:grid-cols-2 gap-16 items-center relative z-10`}>
      {imageSide === 'left' && (
        <div className="bg-white/5 aspect-[4/3] rounded-[32px] border border-white/10 flex items-center justify-center order-2 lg:order-1 backdrop-blur-md">
          <span className="text-white/10 font-black text-3xl">{imageLabel}</span>
        </div>
      )}
      <div className={`order-1 ${imageSide === 'left' ? 'lg:order-2' : ''}`}>
        <Badge>{badge}</Badge>
        <h1 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] text-white">
          {title}
        </h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          {desc}
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-white">
                <CheckCircle2 size={20} className="text-primary" />
                {f.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <button 
          onClick={onCtaClick}
          className="mt-12 bg-primary hover:bg-blue-500 text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl shadow-blue-900/40 transition-all active:scale-95"
        >
          Consultar Proyecto
        </button>
      </div>
      {imageSide === 'right' && (
        <div className="bg-white/5 aspect-[4/3] rounded-[32px] border border-white/10 flex items-center justify-center order-2 backdrop-blur-md">
          <span className="text-white/10 font-black text-3xl">{imageLabel}</span>
        </div>
      )}
    </div>
  </section>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
  };

  const ctaLink = "https://wa.me/tu-numero";

  return (
    <div className="min-h-screen bg-dark text-light-gray relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="ambient-glow top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-600/10"></div>
      <div className="ambient-glow bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10"></div>

      <Navbar onNavigate={navigateTo} currentPage={currentPage} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div key="home">
              <HomeSection onNavigate={navigateTo} />
            </motion.div>
          )}
          
          {currentPage === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <PlanDetailLayout 
                badge="Página de Venta"
                title="Landing Page High-Conversion."
                desc="Estructuradas psicológicamente para transformar clics en clientes. El activo ideal para tus campañas de pauta digital."
                imageLabel="PREVIEW LANDING"
                onCtaClick={() => window.open(ctaLink, "_blank")}
                features={[
                  { title: "Estructura Persuasiva", desc: "Uso de gatillos mentales y jerarquía visual para el cierre de leads." },
                  { title: "Mobile Optimized", desc: "Velocidad de carga extrema y diseño adaptado al comportamiento móvil." },
                  { title: "WhatsApp Directo", desc: "Integración de chat para atención inmediata y aumento de ROI." },
                  { title: "Tracking Avanzado", desc: "Configuración de píxeles y eventos para medir cada centavo invertido." },
                ]}
              />
            </motion.div>
          )}

          {currentPage === 'corporativa' && (
            <motion.div 
              key="corporativa"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <PlanDetailLayout 
                imageSide="left"
                badge="Presencia Institucional"
                title="Web Corporativa de Autoridad."
                desc="El ecosistema digital de tu empresa. Robustez técnica y estética premium para marcas que lideran su sector."
                imageLabel="PREVIEW CORPORATIVA"
                onCtaClick={() => window.open(ctaLink, "_blank")}
                features={[
                  { title: "Secciones de Valor", desc: "Inicio, Servicios, Nosotros, Blog y Contacto con diseño coherente." },
                  { title: "SEO On-Page", desc: "Arquitectura pensada para que Google indexe tu contenido rápidamente." },
                  { title: "Blog Dinámico", desc: "Sistema autogestionable para educar a tu audiencia y atraer tráfico." },
                  { title: "Escalabilidad", desc: "Preparada para crecer a medida que tu negocio suma nuevos servicios." },
                ]}
              />
            </motion.div>
          )}

          {currentPage === 'ecommerce' && (
            <motion.div 
              key="ecommerce"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <PlanDetailLayout 
                badge="Ventas Online"
                title="E-Commerce Totalmente Automatizado."
                desc="Escalá tu facturación vendiendo a todo el país. Logística, pagos y stock sincronizados en un solo lugar."
                imageLabel="PREVIEW E-COMMERCE"
                onCtaClick={() => window.open(ctaLink, "_blank")}
                features={[
                  { title: "Checkout Fluido", desc: "Integración nativa con Mercado Pago para cobros en cuotas y tarjetas." },
                  { title: "Gestión de Stock", desc: "Panel administrativo simple para controlar inventario en tiempo real." },
                  { title: "Logística Inteligente", desc: "Integración con correos y apps de envío para envíos automáticos." },
                  { title: "Dashboard de Ventas", desc: "Análisis detallado de pedidos, tickets promedio y clientes recurrentes." },
                ]}
              />
            </motion.div>
          )}

          {currentPage === 'aluvalle' && (
            <motion.div 
              key="aluvalle"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              <SuccessCaseAluvalle onBack={() => navigateTo('home')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 px-[8%] py-24 border-t border-white/5 backdrop-blur-md bg-black/40">
        {/* Main Footer CTA */}
        <div className="mb-24 text-center md:text-left flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 p-10 md:p-20 rounded-[48px] border border-white/10 backdrop-blur-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl">
            <Badge>Último paso</Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1] tracking-tight">
              ¿LISTO PARA ESCALAR <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">TU FACTURACIÓN?</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Transformamos la complejidad técnica en resultados de negocio. Tu próximo activo digital de alto rendimiento está a un mensaje de distancia.
            </p>
          </div>
          <a 
            href={ctaLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 bg-primary hover:bg-blue-500 text-white px-12 py-7 rounded-full font-black text-xl shadow-[0_25px_60px_rgba(37,99,235,0.4)] transition-all active:scale-95 group/btn overflow-hidden flex items-center gap-4"
          >
            <span className="relative z-10">Solicitar Auditoría</span>
            <ArrowRight className="relative z-10 group-hover/btn:translate-x-2 transition-transform" size={24} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-dark bg-blue-500"></div>
              <div className="w-8 h-8 rounded-full border-2 border-dark bg-blue-700"></div>
              <div className="w-8 h-8 rounded-full border-2 border-dark bg-slate-800 flex items-center justify-center text-[8px] font-bold text-white">
                +50
              </div>
            </div>
            <p className="text-xs text-gray-500 font-medium italic">
              Más de 50 empresas escalando su facturación este mes.
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
            <span>Buenos Aires</span>
            <span>CDMX</span>
            <span>Madrid</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest border-t border-white/5 pt-8">
          <div>© 2024 SEO GROWTHERS. TODOS LOS DERECHOS RESERVADOS.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.a 
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.3)] z-50 text-white cursor-pointer"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
