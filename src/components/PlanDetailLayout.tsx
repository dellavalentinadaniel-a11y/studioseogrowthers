import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Badge from './Badge';

interface Feature {
  title: string;
  desc: string;
}

interface PlanDetailLayoutProps {
  badge: string;
  title: string;
  desc: string;
  features: Feature[];
  imageLabel: string;
  imageSide?: 'left' | 'right';
  onCtaClick: () => void;
}

const PlanDetailLayout = ({ 
  badge, 
  title, 
  desc, 
  features, 
  imageLabel, 
  imageSide = 'right',
  onCtaClick 
}: PlanDetailLayoutProps) => (
  <section className="py-24 px-[8%] relative overflow-hidden">
    <div className={`grid lg:grid-cols-2 gap-16 items-center relative z-10`}>
      {imageSide === 'left' && (
        <div className="bg-white/5 aspect-[4/3] rounded-[32px] border border-white/10 flex items-center justify-center order-2 lg:order-1 backdrop-blur-md">
          <span className="text-white/10 font-black text-3xl">{imageLabel}</span>
        </div>
      )}
      <div className={`order-1 ${imageSide === 'left' ? 'lg:order-2' : ''}`}>
        <Badge>{badge}</Badge>
        <h1 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] text-white">
          {title}
        </h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          {desc}
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-white">
                <CheckCircle2 size={20} className="text-primary" />
                {f.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <button 
          onClick={onCtaClick}
          className="mt-12 bg-primary hover:bg-cyan-700 text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl shadow-cyan-900/40 transition-all active:scale-95"
        >
          Consultar Proyecto
        </button>
      </div>
      {imageSide === 'right' && (
        <div className="bg-white/5 aspect-[4/3] rounded-[32px] border border-white/10 flex items-center justify-center order-2 backdrop-blur-md">
          <span className="text-white/10 font-black text-3xl">{imageLabel}</span>
        </div>
      )}
    </div>
  </section>
);

export default PlanDetailLayout;
