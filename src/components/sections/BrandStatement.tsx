import React from 'react';
import { Sparkles, Layers, ShieldCheck, Cpu } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#0D0F14] border-b border-[#F59E0B]/20 overflow-hidden">
      {/* Subtle Radial Glow */}
      <div className="absolute inset-0 bg-texture-dark opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#F59E0B]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Subtle Gold Line with Diamond Center */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-[#F59E0B]/50 to-[#F59E0B]" />
          <span className="text-[#F59E0B] text-xs">◆</span>
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#F59E0B] uppercase font-industrial">
            Direct Plant Manufacturing
          </span>
          <span className="text-[#F59E0B] text-xs">◆</span>
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-[#F59E0B]/50 to-[#F59E0B]" />
        </div>

        {/* Large Statement Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          "From Material to Manufacturing,{' '}
          <span className="gold-gradient-text font-heading">
            We Build Bags Around Your Brand.
          </span>"
        </h2>

        {/* Supporting Explanation */}
        <p className="text-base sm:text-lg text-gray-300 font-sans-clean leading-relaxed max-w-3xl mx-auto pt-2">
          Whether you need everyday shopping bags, branded retail bags or custom bulk requirements, HM Bags combines manufacturing, customization and finishing to deliver bags built around your business.
        </p>

        {/* 3 Core Production Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F59E0B]/40 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-4 h-4 text-[#F59E0B]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Virgin Raw Material</h4>
            </div>
            <p className="text-xs text-gray-400">
              Formulated with high-strength polypropylene virgin polymers for tensile resilience.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F59E0B]/40 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="w-4 h-4 text-[#F59E0B]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Ultrasonic Sealing</h4>
            </div>
            <p className="text-xs text-gray-400">
              Automated high-frequency heat fusion guaranteeing leak-resistant and tear-resistant seams.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F59E0B]/40 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Exact Brand Inks</h4>
            </div>
            <p className="text-xs text-gray-400">
              High-adhesion industrial pigments preserving your store logo clarity in transit.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
