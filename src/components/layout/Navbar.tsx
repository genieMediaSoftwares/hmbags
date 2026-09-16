import React, { useState, useEffect } from 'react';
import { HMBagsLogo } from '../common/HMBagsLogo';
import { COMPANY_INFO } from '../../data/companyData';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Configurator', href: '#configurator' },
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'Industries', href: '#industries' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D11]/95 backdrop-blur-md border-b border-[#F59E0B]/20 py-2.5 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-[#0B0D11]/90 via-[#0B0D11]/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group transition-transform focus:outline-none"
            aria-label="HM Bags Home"
          >
            <HMBagsLogo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="px-3 py-1.5 text-xs font-semibold text-gray-300 hover:text-[#F59E0B] transition-colors rounded-md hover:bg-white/5 tracking-wider uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct WhatsApp Action */}
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsappDefault}?text=${encodeURIComponent(
                'Hello HM Bags, I would like to inquire about non-woven bags manufacturing.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/50 hover:text-white transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Primary CTA: GET A QUOTE */}
            <button
              onClick={onOpenQuoteModal}
              className="gold-metallic-btn px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="gold-metallic-btn px-3 py-1.5 rounded-md text-[11px] font-bold uppercase"
            >
              Quote
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl lg:hidden flex flex-col p-6 animate-fade-in overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-gray-800">
            <HMBagsLogo size="sm" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2.5 text-base font-semibold text-gray-200 hover:text-[#F59E0B] border-b border-gray-800/60 uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Direct Contacts */}
          <div className="mt-auto pt-6 border-t border-gray-800 space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full gold-metallic-btn py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-center"
            >
              Request a Bulk Quote
            </button>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href="tel:9643311777"
                className="py-2 px-3 rounded-lg bg-gray-900 border border-gray-800 text-xs text-center text-gray-300 hover:text-white flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                Call MD
              </a>
              <a
                href="tel:9246618635"
                className="py-2 px-3 rounded-lg bg-gray-900 border border-gray-800 text-xs text-center text-gray-300 hover:text-white flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                Call GM
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
