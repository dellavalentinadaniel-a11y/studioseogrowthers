
import React from 'react';
import { CheckCircle2, Search, TrendingUp, BarChart3, Target, Share2, MessageCircle, Mail, MousePointerClick, Zap, Star, ArrowRight, LineChart, Megaphone, Smartphone } from 'lucide-react';
import Badge from './Badge';

const MarketingPageSection = () => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[8%] bg-black">
        <div className="max-w-7xl mx-auto text-left">
          <nav className="text-xs text-gray-500 mb-8 flex gap-2">
            <span>Inicio</span>
            <span>»</span>
            <span className="text-white">Marketing Digital</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Marketing Digital <br /><span className="text-primary text-4xl md:text-6xl">Orientado a Resultados</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            No solo atraemos tráfico, atraemos clientes calificados. Estrategias integrales diseñadas para maximizar tu retorno de inversión (ROI).
          </p>

          <div className="space-y-4 mb-12">
            {[
              "Estrategia de SEO Avanzado",
              "Gestión de Campañas de Pago (Ads)",
              "Optimización de Tasa de Conversión (CRO)",
              "Analítica y Reportes Mensuales"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-lg font-bold">
                <CheckCircle2 className="text-primary" size={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20">
            Consultar Estrategia
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge>Crecimiento</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Escalamos tu presencia en buscadores y redes
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Utilizamos datos y creatividad para posicionar tu marca donde tus clientes están buscando. Nuestra metodología se basa en la mejora continua.
            </p>

            <div className="space-y-8 text-left">
              {[
                { 
                  title: "SEO Orgánico (Google)", 
                  desc: "Optimizamos tu sitio para que aparezca en los primeros resultados sin pagar por cada clic, construyendo autoridad a largo plazo." 
                },
                { 
                  title: "Publicidad en Meta y Google Ads", 
                  desc: "Llegamos a tu público ideal con campañas segmentadas por intereses, comportamientos y palabras clave de alta intención." 
                },
                { 
                  title: "Marketing de Contenidos", 
                  desc: "Creamos contenido de valor que educa a tu audiencia y los guía a través del embudo de ventas hasta la conversión final." 
                }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-black text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary/5 rounded-[40px] p-8 flex items-center justify-center">
                {/* Visual placeholder for marketing data */}
                <div className="w-full aspect-square bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-end h-40 gap-2">
                        {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                className="w-full bg-primary rounded-t-lg"
                            />
                        ))}
                    </div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-100 rounded-full w-1/2"></div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><TrendingUp /></div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Users /></div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Target /></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-[8%] bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Badge>Beneficios</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Tu marca en todas partes
          </h2>
          <p className="text-gray-500 mb-16">
            Estrategias multicanal para una cobertura digital completa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { icon: Search, title: "SEO On-Page", desc: "Optimización técnica y de contenido para buscadores." },
              { icon: Target, title: "Social Ads", desc: "Campañas segmentadas en Facebook, Instagram y LinkedIn." },
              { icon: Megaphone, title: "Google SEM", desc: "Publicidad paga para aparecer en búsquedas inmediatas." },
              { icon: LineChart, title: "Data Analytics", desc: "Medición exhaustiva de cada peso invertido." },
              { icon: MousePointerClick, title: "CRO", desc: "Mejoramos tu web para que convierta más visitantes." },
              { icon: Mail, title: "Email Marketing", desc: "Automatización de flujos para nutrir a tus leads." },
              { icon: Smartphone, title: "Mobile First", desc: "Estrategias pensadas para el dispositivo más usado." },
              { icon: Star, title: "Reputación Online", desc: "Gestión de reseñas y presencia en Google Maps." },
            ].map((item, i) => (
              <div key={i} className="group text-left">
                <item.icon className="text-primary mb-4 transition-transform group-hover:scale-110" size={32} strokeWidth={1.5} />
                <h4 className="font-black text-lg mb-2">{item.title}</h4>
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
            Empezá a vender <span className="text-primary">de verdad</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ponemos a tu disposición nuestro equipo de expertos en crecimiento digital.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-all shadow-xl shadow-primary/20">
            Quiero una Auditoría
          </button>
        </div>
      </section>
    </div>
  );
};

export default MarketingPageSection;
