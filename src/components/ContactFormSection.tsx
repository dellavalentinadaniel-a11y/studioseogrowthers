import React, { useState } from 'react';
import { Rocket, Phone, MessageCircle, MapPin, Send, Mail, ChevronDown, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ContactFormSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    try {
      // Usamos el endpoint /ajax de FormSubmit para envío asíncrono
      const response = await fetch("https://formsubmit.co/ajax/seogrowthers@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setStatus('error');
    }
  };

  return (
    <section className="py-24 px-[8%] max-w-7xl mx-auto min-h-screen flex items-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10">
        
        {/* Left: Form Card */}
        <div className="lg:col-span-7 bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group min-h-[600px] flex flex-col">
          {/* Top Gradient Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-cyan-400 opacity-50"></div>
          
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                  <CheckCircle2 size={64} />
                </div>
                <h2 className="text-4xl font-black text-white">¡Intento Transmitido!</h2>
                <p className="text-gray-400 text-lg max-w-md mx-auto">
                  Hemos recibido tu consulta correctamente. Un estratega de <span className="text-cyan-400">SEO Growthers</span> se pondrá en contacto contigo a la brevedad.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-cyan-400 font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-cyan-400">
                    <Rocket size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-white tracking-tight">Formulario de Consulta</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 flex-1">
                  <input type="hidden" name="_subject" value="Nuevo Presupuesto Web - SEO Growthers" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">IDENTIDAD_ID *</label>
                      <input 
                        type="text" 
                        name="nombre" 
                        required 
                        disabled={status === 'loading'}
                        placeholder="Nombre completo o alias"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/50 focus:bg-black/60 transition-all disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">ENLACE_PROTOCOLO *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        disabled={status === 'loading'}
                        placeholder="correo@neuronal.com"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/50 focus:bg-black/60 transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">FRECUENCIA_TEL (Opcional)</label>
                      <input 
                        type="tel" 
                        name="telefono" 
                        disabled={status === 'loading'}
                        placeholder="+54 9 2995504783"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/50 focus:bg-black/60 transition-all disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">VECTOR_MOTIVO *</label>
                      <div className="relative">
                        <select 
                          name="motivo" 
                          required 
                          disabled={status === 'loading'}
                          aria-label="Motivo de la consulta"
                          className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white appearance-none focus:outline-none focus:border-cyan-400/50 transition-all disabled:opacity-50"
                        >
                          <option value="" disabled selected>Selecciona un vector</option>
                          <option value="desarrollo">Desarrollo Web</option>
                          <option value="marketing">Marketing Digital</option>
                          <option value="automatizacion">Automatización / IA</option>
                          <option value="otros">Otros</option>
                        </select>
                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">CARGA_MENSAJE *</label>
                    <textarea 
                      name="mensaje" 
                      required 
                      rows={5} 
                      disabled={status === 'loading'}
                      placeholder="Escribe tu consulta aquí..."
                      className="w-full bg-black/40 border border-white/5 rounded-3xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/50 focus:bg-black/60 transition-all resize-none disabled:opacity-50"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="checkbox" required id="privacy" className="w-5 h-5 rounded-md bg-black/40 border-white/10 text-cyan-400 focus:ring-0" />
                    <label htmlFor="privacy" className="text-xs text-gray-500">
                      Acepto los <span className="text-cyan-400 cursor-pointer hover:underline">términos de servicio</span> y la <span className="text-cyan-400 cursor-pointer hover:underline">política de privacidad</span>.
                    </label>
                  </div>

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                    >
                      <AlertCircle size={18} />
                      Hubo un error al enviar. Por favor, intenta de nuevo o contáctanos por WhatsApp.
                    </motion.div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full md:w-auto bg-cyan-400 hover:bg-cyan-300 disabled:bg-gray-700 text-black font-black py-5 px-12 rounded-2xl transition-all flex items-center justify-center gap-3 group/btn uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  >
                    {status === 'loading' ? (
                      <>Transmitiendo... <Loader2 size={18} className="animate-spin" /></>
                    ) : (
                      <>TRANSMITIR INTENTO <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Info Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Sales Card */}
          <div className="bg-[#111622] border border-white/5 rounded-[32px] p-8 shadow-xl">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6">
              <Mail size={20} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ventas y Servicios</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">Solicitudes de presupuesto y asesoramiento técnico.</p>
            <a href="mailto:seogrowthers@gmail.com" className="text-white font-bold hover:text-cyan-400 transition-colors block mb-4">seogrowthers@gmail.com</a>
            
            <div className="pt-4 border-t border-white/5">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Para contactarnos</p>
              <a href="mailto:seogrowthers@outlook.es" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">seogrowthers@outlook.es</a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-[#111622] border border-green-500/20 rounded-[32px] p-8 shadow-xl relative overflow-hidden group/wa">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Atención Directa</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Ponte en contacto al instante mediante WhatsApp.</p>
            <p className="text-green-500 font-bold text-lg mb-6 tracking-wide">+54 9 2995504783</p>
            <a 
              href="https://wa.me/5492995504783" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
            >
              Chatear por WhatsApp
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-[#111622] border border-white/5 rounded-[32px] p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white shrink-0">
                <MapPin size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-6">Nuestras Sedes</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-white font-bold text-sm">Planta Industrial & Ventas</p>
                      <p className="text-gray-500 text-xs mt-1">Argentina Neuquén Capital</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-sm">+54 9 299 608-7387</p>
                      <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-tighter">LUN A VIE: 8:00 A 17:00 HS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>
    </section>
  );
};

export default ContactFormSection;
