import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShoppingCart, CreditCard, Box, BarChart3, ShieldCheck, Mail, Share2, MessageCircle, Server, LifeBuoy, RefreshCcw, Activity, Wrench, ShieldAlert, Database, Star, ArrowRight, Zap, Truck } from 'lucide-react';
import Badge from './Badge';

const EcommercePageSection = () => {
  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-[8%] bg-black">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-gray-500 mb-8 flex gap-2">
            <span>Inicio</span>
            <span>»</span>
            <span className="text-primary/80">Diseño web precios</span>
            <span>»</span>
            <span className="text-white">Tiendas online</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Tienda Online <br /><span className="text-primary text-4xl md:text-6xl">Automatizada</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Vendé tus productos a todo el país las 24 horas del día. Gestión de stock, pagos y logística sincronizados en un solo lugar.
          </p>

          <div className="space-y-4 mb-12">
            {[
              "Catálogo ilimitado de productos",
              "Integración con Mercado Pago / Tarjetas",
              "Gestión de stock e inventario",
              "Integración con métodos de envío (Correo Argentino, OCA, etc.)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-lg font-bold">
                <CheckCircle2 className="text-primary" size={24} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-10">
            <span className="text-gray-400 block mb-2">Inversión desde:</span>
            <span className="text-4xl font-black text-white">$560.000</span>
          </div>

          <button className="bg-primary hover:bg-cyan-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20">
            Abrir Mi Tienda
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-[8%] bg-white text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge>E-Commerce</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Escalá tus ventas sin límites físicos
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Convertí tu negocio en una máquina de vender. Optimizamos el proceso de compra para que sea rápido, seguro y fluido para tus clientes.
            </p>

            <div className="space-y-8">
              {[
                { 
                  title: "Experiencia de Compra Fluida", 
                  desc: "Diseñamos checkouts rápidos que reducen el abandono de carrito y aumentan tu ticket promedio." 
                },
                { 
                  title: "Control Total del Negocio", 
                  desc: "Panel administrativo intuitivo para gestionar pedidos, clientes y promociones de forma centralizada." 
                },
                { 
                  title: "Automatización de Pagos y Envíos", 
                  desc: "Sincronización automática con plataformas de pago y logística para que vos solo te preocupes por despachar." 
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
            <div className="bg-primary/5 rounded-[40px] p-8">
              <img 
                src="/imagenes/home/portfolio_main.png" 
                alt="Tienda Online" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-[8%] bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Badge>Funcionalidades</Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            E-Commerce de Alto Rendimiento
          </h2>
          <p className="text-gray-500 mb-16">
            Todo lo que necesitás para liderar las ventas online en tu rubro.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { icon: ShoppingCart, title: "Carrito Pro", desc: "Sistema de carrito inteligente con recuperación de ventas." },
              { icon: CreditCard, title: "Pagos Online", desc: "Integración nativa con las principales pasarelas de pago." },
              { icon: Box, title: "Gestión Stock", desc: "Control de inventario en tiempo real con alertas de falta de stock." },
              { icon: Truck, title: "Logística", desc: "Cálculo de costos de envío automático según zona y peso." },
              { icon: BarChart3, title: "Reportes", desc: "Análisis detallado de ventas, productos más vendidos y ROI." },
              { icon: ShieldCheck, title: "Seguridad", desc: "Protocolos de seguridad bancaria para transacciones protegidas." },
              { icon: Zap, title: "Filtros Pro", desc: "Buscador y filtros avanzados para que tus clientes encuentren todo." },
              { icon: MessageCircle, title: "Chat Soporte", desc: "Integración con WhatsApp Business para atención al cliente." },
            ].map((item, i) => (
              <div key={i} className="group">
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
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Empezá a vender <br /><span className="text-primary">en todo el país</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Tu tienda online profesional, lista para facturar desde el primer día.
          </p>
          <button className="bg-primary hover:bg-cyan-600 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-all shadow-xl shadow-primary/20">
            Crear Mi Tienda
          </button>
        </div>
      </section>
    </div>
  );
};

export default EcommercePageSection;
