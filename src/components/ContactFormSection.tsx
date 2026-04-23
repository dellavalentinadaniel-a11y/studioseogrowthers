import React from 'react';
import { Rocket, Phone, MessageCircle, MapPin, Send, Mail, ChevronDown } from 'lucide-react';

const ContactFormSection = () => {
  return (
    <section className="py-24 px-[8%] max-w-7xl mx-auto min-h-screen flex items-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10">
        
        {/* Left: Form Card */}
        <div className="lg:col-span-7 bg-[#0B0F17]/80 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          {/* Top Gradient Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-cyan-400 opacity-50"></div>
          
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-cyan-400">
              <Rocket size={24} />
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">Formulario de Consulta</h2>
          </div>

          <form action="https://formsubmit.co/seogrowthers@gmail.com" method="POST" className="space-y-8">
            <input type="hidden" name="_subject" value="Nuevo Presupuesto Web - SEO Growthers" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">IDENTIDAD_ID *</label>
                <input 
                  type="text" 
                  name="nombre" 
                  required 
                  placeholder="Nombre completo o alias"
                  className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/50 focus:bg-black/60 transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">ENLACE_PROTOCOLO *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="correo@neuronal.com"
                  className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/50 focus:bg-black/60 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">FRECUENCIA_TEL (Opcional)</label>
                <input 
                  type="tel" 
                  name="telefono" 
                  placeholder="+54 9 2995504783"
                  className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/50 focus:bg-black/60 transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">VECTOR_MOTIVO *</label>
                <div className="relative">
                  <select 
                    name="motivo" 
                    required 
                    aria-label="Motivo de la consulta"
                    className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white appearance-none focus:outline-none focus:border-cyan-400/50 transition-all"
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
                placeholder="Escribe tu consulta aquí..."
                className="w-full bg-black/40 border border-white/5 rounded-3xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-cyan-400/50 focus:bg-black/60 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" required id="privacy" className="w-5 h-5 rounded-md bg-black/40 border-white/10 text-cyan-400 focus:ring-0" />
              <label htmlFor="privacy" className="text-xs text-gray-500">
                Acepto los <span className="text-cyan-400 cursor-pointer hover:underline">términos de servicio</span> y la <span className="text-cyan-400 cursor-pointer hover:underline">política de privacidad</span>.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full md:w-auto bg-cyan-400 hover:bg-cyan-300 text-black font-black py-5 px-12 rounded-2xl transition-all flex items-center justify-center gap-3 group/btn uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              TRANSMITIR INTENTO <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Right: Info Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Sales Card */}
          <div className="bg-[#111622] border border-white/5 rounded-[32px] p-8 shadow-xl">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6">
              <Mail size={20} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ventas y Proyectos</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Asesoramiento comercial para obras y distribuidores.</p>
            <a href="mailto:seogrowthers@outlook.es" className="text-white font-bold hover:text-cyan-400 transition-colors">seogrowthers@outlook.es</a>
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
