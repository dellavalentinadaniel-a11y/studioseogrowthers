import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar, { PageId } from './components/Navbar';
import HomeSection from './components/HomeSection';
import LandingPageSection from './components/LandingPageSection';
import SuccessCaseAluvalle from './components/SuccessCaseAluvalle';
import SuccessCaseInmoFuture from './components/SuccessCaseInmoFuture';
import CorporatePageSection from './components/CorporatePageSection';
import EcommercePageSection from './components/EcommercePageSection';
import MarketingPageSection from './components/MarketingPageSection';
import MarketingServiceDetail from './components/MarketingServiceDetail';
import AutomationPageSection from './components/AutomationPageSection';
import AutomationServiceDetail from './components/AutomationServiceDetail';
import MarketingAutomationSection from './components/MarketingAutomationSection';
import RPAPageSection from './components/RPAPageSection';
import NoCodePageSection from './components/NoCodePageSection';
import AgenticAIPageSection from './components/AgenticAIPageSection';
import PortfolioLibrarySection from './components/PortfolioLibrarySection';
import ContactFormSection from './components/ContactFormSection';
import { Search, Megaphone, Share2, PenTool, Mail, TrendingUp, Target, BarChart, Zap, Globe, Users, Clock, Cpu, Settings, Workflow, Bot, Database, Link, ShieldCheck, RefreshCcw, MessageCircle } from 'lucide-react';
import Footer from './components/Footer';
import CookieBanner from './components/layout/CookieBanner';

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
      <div className="ambient-glow top-[-200px] left-[-200px] w-[600px] h-[600px] bg-primary/10"></div>
      <div className="ambient-glow bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-primary/5"></div>

      <Navbar onNavigate={navigateTo} currentPage={currentPage} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HomeSection onNavigate={navigateTo} />
            </motion.div>
          )}
          
          {currentPage === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <LandingPageSection />
            </motion.div>
          )}

          {currentPage === 'corporativa' && (
            <motion.div 
              key="corporativa"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CorporatePageSection />
            </motion.div>
          )}

          {currentPage === 'ecommerce' && (
            <motion.div 
              key="ecommerce"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <EcommercePageSection />
            </motion.div>
          )}

          {currentPage === 'portfolio-library' && (
            <motion.div 
              key="portfolio-library"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              <PortfolioLibrarySection />
            </motion.div>
          )}

          {currentPage === 'marketing' && (
            <motion.div 
              key="marketing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <MarketingPageSection />
            </motion.div>
          )}

          {currentPage === 'seo' && (
            <motion.div key="seo" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <MarketingServiceDetail 
                title="SEO"
                subtitle="Posicionamiento Orgánico"
                badge="Search Engine Optimization"
                description="Optimizamos tu estructura y contenido para aparecer en los primeros resultados de Google sin pagar por cada clic."
                features={["Auditoría SEO Técnica", "Optimización On-Page", "Estrategia de Link Building", "Investigación de Keywords"]}
                mainIcon={<Search />}
                benefits={[
                  { icon: TrendingUp, title: "Tráfico Calificado", desc: "Atraé usuarios que ya están buscando lo que vos ofrecés." },
                  { icon: Target, title: "Autoridad de Marca", desc: "Aparecer primero genera confianza inmediata en tu sector." },
                  { icon: BarChart, title: "Retorno Sostenible", desc: "A diferencia de los anuncios, el SEO rinde frutos a largo plazo." }
                ]}
              />
            </motion.div>
          )}

          {currentPage === 'sem' && (
            <motion.div key="sem" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <MarketingServiceDetail 
                title="SEM"
                subtitle="Google Ads & Bing"
                badge="Search Engine Marketing"
                description="Campañas de pago diseñadas para generar resultados inmediatos y captar clientes en el momento exacto de la búsqueda."
                features={["Gestión de Google Ads", "Publicidad en Display", "Remarketing Estratégico", "Anuncios de Búsqueda"]}
                mainIcon={<Megaphone />}
                benefits={[
                  { icon: Zap, title: "Resultados Rápidos", desc: "Atraé tráfico a tu web desde el primer día de campaña." },
                  { icon: Target, title: "Segmentación Precisa", desc: "Mostrale tu anuncio solo a quienes cumplen tu perfil de cliente." },
                  { icon: BarChart, title: "Control Total", desc: "Vos decidís cuánto invertir y medís cada peso gastado." }
                ]}
              />
            </motion.div>
          )}

          {currentPage === 'social-media' && (
            <motion.div key="social-media" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <MarketingServiceDetail 
                title="Redes Sociales"
                subtitle="Instagram, TikTok & LinkedIn"
                badge="Social Media Strategy"
                description="Conectamos tu marca con su audiencia ideal a través de contenido relevante y pauta publicitaria segmentada."
                features={["Gestión de Comunidades", "Meta Ads (FB/IG)", "Estrategia en TikTok", "LinkedIn B2B"]}
                mainIcon={<Share2 />}
                benefits={[
                  { icon: Users, title: "Engagement Real", desc: "Construimos una comunidad fiel que interactúe con tu marca." },
                  { icon: Globe, title: "Visibilidad Masiva", desc: "Llegamos a miles de personas con contenido viral y pautado." },
                  { icon: MessageCircle, title: "Ventas Directas", desc: "Canalizamos el interés de las redes hacia tu proceso de venta." }
                ]}
              />
            </motion.div>
          )}

          {currentPage === 'content-marketing' && (
            <motion.div key="content-marketing" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <MarketingServiceDetail 
                title="Marketing de Contenidos"
                subtitle="Valor que Convierte"
                badge="Content Strategy"
                description="Creamos material educativo y entretenido para atraer, retener y convertir a tu audiencia en clientes leales."
                features={["Redacción de Blogs", "Guiones para Video", "Infografías y Recursos", "Ebooks y Whitepapers"]}
                mainIcon={<PenTool />}
                benefits={[
                  { icon: Target, title: "Autoridad", desc: "Demostrá que sos experto en tu tema con contenido de calidad." },
                  { icon: Search, title: "Potencia el SEO", desc: "El contenido fresco y útil es lo que Google más ama premiar." },
                  { icon: Zap, title: "Lead Magnet", desc: "Atraé prospectos interesados con recursos gratuitos de valor." }
                ]}
              />
            </motion.div>
          )}

          {currentPage === 'email-marketing' && (
            <motion.div key="email-marketing" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <MarketingServiceDetail 
                title="Email Marketing"
                subtitle="Comunicación Directa"
                badge="Email Automation"
                description="Llegamos directamente a la bandeja de entrada de tus clientes con mensajes personalizados y flujos automáticos."
                features={["Newsletters Mensuales", "Automatización de Flujos", "Segmentación de Listas", "Recuperación de Carritos"]}
                mainIcon={<Mail />}
                benefits={[
                  { icon: Clock, title: "Automatización", desc: "Tu marketing trabaja 24/7 mientras vos te enfocás en tu negocio." },
                  { icon: Target, title: "Personalización", desc: "Mensajes específicos para cada etapa del cliente." },
                  { icon: BarChart, title: "ROI Elevado", desc: "Es uno de los canales con mayor retorno de inversión digital." }
                ]}
              />
            </motion.div>
          )}

          {currentPage === 'automatizacion' && (
            <motion.div 
              key="automatizacion"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AutomationPageSection />
            </motion.div>
          )}

          {currentPage === 'auto-marketing' && (
            <motion.div key="auto-marketing" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <MarketingAutomationSection />
            </motion.div>
          )}

          {currentPage === 'rpa' && (
            <motion.div key="rpa" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <RPAPageSection />
            </motion.div>
          )}

          {currentPage === 'no-code' && (
            <motion.div key="no-code" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <NoCodePageSection />
            </motion.div>
          )}

          {currentPage === 'ia-agentica' && (
            <motion.div key="ia-agentica" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <AgenticAIPageSection />
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

          {currentPage === 'inmofuture' && (
            <motion.div 
              key="inmofuture"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              <SuccessCaseInmoFuture onBack={() => navigateTo('home')} />
            </motion.div>
          )}

          {currentPage === 'contacto' && (
            <motion.div 
              key="contacto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ContactFormSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5492995504783" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:animate-pulse" />
      </a>

      <Footer onNavigate={navigateTo} />
      <CookieBanner onNavigate={navigateTo} />
    </div>
  );
}
