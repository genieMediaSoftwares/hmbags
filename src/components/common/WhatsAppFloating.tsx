import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = 'Hello HM Bags, I would like to inquire about bag manufacturing and request a bulk quotation.';
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsappDefault}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside aria-label="Floating WhatsApp contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Label */}
      <div
        className={`hidden sm:block px-3.5 py-2 rounded-xl bg-[#12151D] text-white text-xs font-bold border border-emerald-500/30 shadow-2xl transition-all duration-300 pointer-events-none select-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-90 -translate-x-1'
        }`}
      >
        <span className="text-emerald-400 mr-1.5 font-bold">●</span>
        {isHovered ? 'Chat with HM Bags' : 'Need a Quick Quote?'}
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(16,185,129,0.55)] hover:scale-108 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Chat with HM Bags on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
};
