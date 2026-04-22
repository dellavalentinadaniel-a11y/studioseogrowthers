import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar, { PageId } from './components/Navbar';
import HomeSection from './components/HomeSection';
import LandingPageSection from './components/LandingPageSection';
import SuccessCaseAluvalle from './components/SuccessCaseAluvalle';
import CorporatePageSection from './components/CorporatePageSection';
import EcommercePageSection from './components/EcommercePageSection';
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

      <Footer onNavigate={navigateTo} />
      <CookieBanner onNavigate={navigateTo} />
    </div>
  );
}
