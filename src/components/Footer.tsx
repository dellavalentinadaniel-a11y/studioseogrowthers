
import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import LogoComponent from './shared/LogoComponent';

interface FooterProps {
    onNavigate?: (page: any) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {

    const handleFeatureNotImplemented = () => {
        alert("Esta función no está implementada todavía — ¡pero no te preocupes! ¡Puedes solicitarla pronto! 🚀");
    };

    const handleLinkClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        if (href.startsWith('http')) {
            window.open(href, '_blank', 'noopener noreferrer');
        } else if (href === '#') {
            handleFeatureNotImplemented();
        } else if (href === '/') {
            if (onNavigate) onNavigate('home');
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (href.includes('#')) {
            const id = href.split('#')[1];
            const targetElement = document.getElementById(id);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                handleFeatureNotImplemented();
            }
        } else {
            // Mapeo de rutas a las secciones/páginas del proyecto actual
            const pageMap: Record<string, any> = {
                '/services': 'home', // En este proyecto parece que los servicios están en Home
                '/landing': 'landing',
                '/corporativa': 'corporativa',
                '/ecommerce': 'ecommerce',
                '/blog': 'home', // No hay página de blog explícita en el destino aún
                '/contact': 'home',
                '/privacy-policy': 'home',
                '/terms-of-service': 'home',
                '/resources': 'home',
                '/tools': 'home',
            };
            
            if (onNavigate && pageMap[href]) {
                onNavigate(pageMap[href]);
            } else {
                handleFeatureNotImplemented();
            }
        }
    };

    const footerSections = [
        {
            title: 'Enlaces Rápidos',
            links: [
                { name: 'Inicio', href: '/' },
                { name: 'Servicios', href: '/services' },
                { name: 'Recursos', href: '/resources' },
                { name: 'Herramientas', href: '/tools' },
            ],
        },
        {
            title: 'Nosotros',
            links: [
                { name: 'Quiénes somos', href: '#' },
                { name: 'Misión y visión', href: '#' },
                { name: 'Equipo', href: '#' },
                { name: 'Blog', href: '/blog' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { name: 'Política de Privacidad', href: '/privacy-policy' },
                { name: 'Términos de Servicio', href: '/terms-of-service' },
                { name: 'Contacto', href: '/contact' },
            ],
        },
    ];

    const socialLinks = [
        { icon: <Twitter size={20} />, name: 'Twitter', href: 'https://x.com/SEOGrowthers' },
        { icon: <Linkedin size={20} />, name: 'LinkedIn', href: 'https://www.linkedin.com/company/seogrowthers' },
        { icon: <Instagram size={20} />, name: 'Instagram', href: 'https://www.instagram.com/seogrowthers/' },
        { icon: <Youtube size={20} />, name: 'YouTube', href: 'https://www.youtube.com/@seogrowthers-s4r' },
    ];

    return (
        <footer className="bg-[#0C0D0D] border-t border-white/10 pt-16 pb-8 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <div className="mb-4">
                            <LogoComponent size="xl" isLink={true} />
                        </div>
                        <p className="text-cyan-400 font-medium mb-2 tracking-wide">Web Development • SEO • Analytics</p>
                        <p className="text-gray-400">Soluciones creativas que impulsan resultados reales para tu negocio.</p>
                    </div>

                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <p className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">{section.title}</p>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <p className="font-semibold text-white mb-6 uppercase tracking-wider text-sm">Síguenos</p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 bg-white/5 rounded-lg hover:bg-white/10"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-xs tracking-widest uppercase">
                    <p>&copy; {new Date().getFullYear()} SEO Growthers. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
