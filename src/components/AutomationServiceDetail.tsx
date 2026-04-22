
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap, Cpu, Settings, Workflow, Bot, ShieldCheck, RefreshCcw } from 'lucide-react';
import Badge from './Badge';

interface AutomationServiceDetailProps {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  mainIcon: React.ReactNode;
  benefits: { icon: any, title: string, desc: string }[];
}

const AutomationServiceDetail = ({ title, subtitle, badge, description, features, mainIcon, benefits }: AutomationServiceDetailProps) => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[8%] bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto text-left">
          <nav className="text-xs text-gray-500 mb-8 flex gap-2">
            <span>Inicio</span>
            <span>»</span>
            <span className="text-primary/80">Automatización</span>
            <span>»</span>
            <span className="text-white">{title}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                {mainIcon}
            </div>
            <Badge>{badge}</Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            {title} <br /><span className="text-primary text-4xl md:text-6xl">{subtitle}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-base font-bold bg-white/5 p-4 rounded-xl border border-white/10">
                <CheckCircle2 className="text-primary" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20">
            Agendar Demo Técnica
          </button>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Badge>Eficacia Operativa</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Tecnología de Vanguardia
            </h2>
            <p className="text-gray-500">
              Implementamos soluciones que eliminan el error humano y multiplican la productividad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-[32px] border border-gray-100 hover:border-primary/30 transition-all group">
                <div className="text-primary mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    {React.createElement(item.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                <h4 className="font-black text-xl mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-[8%] bg-black text-white text-center">
        <div className="max-w-4xl mx-auto bg-white/5 p-12 md:p-20 rounded-[48px] border border-white/10 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10 text-white">
            ¿Listo para <span className="text-primary">automatizar?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 relative z-10">
            Hacé que tu empresa trabaje 24/7 sin aumentar los costos operativos.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-all shadow-xl shadow-primary/20 relative z-10 active:scale-95">
            Contactar Especialista
          </button>
        </div>
      </section>
    </div>
  );
};

export default AutomationServiceDetail;
