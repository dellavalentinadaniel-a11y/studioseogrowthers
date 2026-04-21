import React from 'react';
import { Search, MousePointerClick, Layout, FileText, Users, Sparkles } from 'lucide-react';
import Badge from './Badge';
import ServiceItem from './ServiceItem';

const ServicesSection = () => {
  const services = [
    { name: "SEO Audit", icon: Search },
    { name: "Paid Media", icon: MousePointerClick },
    { name: "UI/UX Design", icon: Layout },
    { name: "Content", icon: FileText },
    { name: "CRM Setup", icon: Users },
    { name: "CRO Ops", icon: Sparkles },
  ];

  return (
    <section className="py-24 px-[8%] border-y border-white/5 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-sm text-center md:text-left">
            <Badge>Servicios 360°</Badge>
            <h2 className="text-3xl font-black text-white mb-4">Soluciones de crecimiento modular.</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Complementamos tu arquitectura digital con servicios especializados para maximizar el retorno de inversión.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            {services.map((s, i) => (
              <ServiceItem key={i} icon={s.icon} name={s.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
