import React from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const ContactFormSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="w-full max-w-3xl mx-auto bg-dark/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Empecemos tu Proyecto</h2>
          <p className="text-gray-400 text-lg">Completá el formulario y nos pondremos en contacto con una propuesta a tu medida.</p>
        </div>
        
        <form className="space-y-6" action="https://formsubmit.co/seogrowthers@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Nuevo Presupuesto Web - SEO Growthers" />
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Nombre Completo</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input type="text" name="nombre" required className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Juan Pérez" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Corporativo</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="juan@empresa.com" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">¿En qué podemos ayudarte?</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-gray-500" size={20} />
              <textarea name="mensaje" required rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Contanos brevemente sobre tu proyecto..."></textarea>
            </div>
          </div>
          
          <button type="submit" className="w-full bg-primary hover:bg-cyan-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
            Solicitar Presupuesto <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
