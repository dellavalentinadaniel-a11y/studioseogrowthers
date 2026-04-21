import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar, { PageId } from './components/Navbar';
import HomeSection from './components/HomeSection';
import SuccessCaseAluvalle from './components/SuccessCaseAluvalle';
import PlanDetailLayout from './components/PlanDetailLayout';
import Footer from './components/Footer';

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

      <Footer />
    </div>
  );
}
