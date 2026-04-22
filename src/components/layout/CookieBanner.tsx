
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
  onNavigate?: (page: any) => void;
}

const CookieBanner = ({ onNavigate }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleMoreInfo = () => {
    if (onNavigate) {
      onNavigate('home'); // O la página de política si existiera
    } else {
      alert("Política de privacidad y cookies próximamente.");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 text-left">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 shrink-0">
                <Cookie size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">Control de Cookies</h3>
                <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia y analizar nuestro tráfico. Al continuar navegando, aceptas nuestro uso de cookies de acuerdo con nuestra política.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 w-full md:w-auto shrink-0">
              <button 
                onClick={handleMoreInfo}
                className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
              >
                Más información
              </button>
              <button 
                onClick={handleReject}
                className="px-6 py-2 text-sm font-bold border border-slate-700 text-gray-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all active:scale-95"
              >
                Rechazar
              </button>
              <button 
                onClick={handleAccept}
                className="px-8 py-2 text-sm font-bold bg-primary hover:bg-cyan-600 text-white rounded-xl transition-all shadow-lg shadow-cyan-900/20 active:scale-95"
              >
                Aceptar Todo
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
