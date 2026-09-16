import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { HMBagsLogo } from '../common/HMBagsLogo';
import { Phone, Mail, MapPin, Instagram, MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Bag Collection', href: '#products' },
    { label: 'Design Your Bag', href: '#configurator' },
    { label: 'Manufacturing Process', href: '#manufacturing' },
    { label: 'Industries Served', href: '#industries' },
    { label: 'Production Gallery', href: '#gallery' },
    { label: 'Bulk Quotation', href: '#quote-form' },
    { label: 'Common Questions', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-[#07090C] text-gray-400 border-t border-gray-900 relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Brand Identity & Mission (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <HMBagsLogo size="md" showTagline={true} />

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm pt-2 leading-relaxed">
              HM Bags is a direct manufacturing enterprise specializing in non-woven carry bags, loop handle retail bags, and custom printed packaging for businesses, supermarkets, and corporate brands.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>Visakhapatnam Manufacturing Facility • Andhra Pradesh</span>
            </div>

            {/* Verified Social / Messaging Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={COMPANY_INFO.contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors inline-flex items-center gap-2 text-xs"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4 text-[#F59E0B]" />
                <span>@{COMPANY_INFO.contact.instagram}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappDefault}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-500/30 transition-colors inline-flex items-center gap-2 text-xs"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact & Office
            </h4>

            <div className="space-y-2 text-gray-300">
              <p className="font-semibold text-white">
                HANISHA PANDAVA <span className="text-[#F59E0B] font-normal">• Managing Director</span>
              </p>
              <p className="font-mono text-gray-400">Cell: +91 96433 11777</p>

              <p className="font-semibold text-white pt-1">
                P. ESWARA RAO <span className="text-[#F59E0B] font-normal">• General Manager</span>
              </p>
              <p className="font-mono text-gray-400">Cell: +91 92466 18635</p>
            </div>

            <div className="pt-2 space-y-1 text-gray-400 border-t border-gray-800">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.fullFormatted}</span>
              </div>

              <div className="flex items-center gap-1.5 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} HM Bags. All Rights Reserved. Manufacturers of Non Woven & Shopping Bags.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
