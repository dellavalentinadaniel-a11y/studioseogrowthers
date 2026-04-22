
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import Badge from './Badge';

interface MarketingServiceDetailProps {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  investment?: string;
  features: string[];
  mainIcon: React.ReactNode;
  benefits: { icon: any, title: string, desc: string }[];
}

const MarketingServiceDetail = ({ title, subtitle, badge, description, investment, features, mainIcon, benefits }: MarketingServiceDetailProps) => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[8%] bg-black">
        <div className="max-w-7xl mx-auto text-left">
          <nav className="text-xs text-gray-500 mb-8 flex gap-2">
            <span>Inicio</span>
            <span>»</span>
            <span className="text-primary/80">Marketing Digital</span>
            <span>»</span>
            <span className="text-white">{title}</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            {title} <br /><span className="text-primary text-4xl md:text-6xl">{subtitle}</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="space-y-4 mb-12">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-lg font-bold">
                <CheckCircle2 className="text-primary" size={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {investment && (
            <div className="mb-10">
              <span className="text-gray-400 block mb-2">Inversión estimada:</span>
              <span className="text-4xl font-black text-white">{investment}</span>
            </div>
          )}

          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20">
            Consultar Ahora
          </button>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <Badge>{badge}</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            ¿Por qué elegir nuestro servicio?
          </h2>
          <p className="text-gray-500 mb-16">
            Estrategias pensadas para el crecimiento real de tu negocio.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {benefits.map((item, i) => (
              <div key={i} className="group text-left">
                <div className="text-primary mb-4 transition-transform group-hover:scale-110">
                    {React.createElement(item.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                <h4 className="font-black text-xl mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-[8%] bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Impulsá tu marca <span className="text-primary">hoy mismo</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Analizamos tu situación actual sin cargo para diseñar el mejor plan de acción.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-all shadow-xl shadow-primary/20">
            Solicitar Auditoría Gratis
          </button>
        </div>
      </section>
    </div>
  );
};

export default MarketingServiceDetail;
