import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Badge from './Badge';

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
  }, [testimonials.length]);

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
                index === i ? 'w-10 bg-primary shadow-[0_0_15px_rgba(225,29,72,0.5)]' : 'w-2 bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
