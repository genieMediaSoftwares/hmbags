import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Building, Users, Grid, Zap, ShieldAlert, MessageSquare } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const iconList = [Building, Users, Grid, Zap];

  return (
    <section className="py-16 md:py-20 bg-[#0B0D11] text-white border-b border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
            Manufacturing Scale & Capacity
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Operational Highlights
          </h2>
          <p className="text-xs text-gray-400">
            Dedicated non-woven plant serving retail stores, distributors, and corporate brands.
          </p>
        </div>

        {/* 4 Editable Metric Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.metrics.map((m, idx) => {
            const Icon = iconList[idx] || Building;
            return (
              <div
                key={m.label}
                className="p-6 rounded-2xl bg-[#13161F] border border-gray-800 hover:border-[#F59E0B]/40 transition-colors text-center space-y-2 flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-black/50 border border-white/10 mx-auto flex items-center justify-center text-[#F59E0B]">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight gold-gradient-text">
                    {m.value}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-200 mt-1 uppercase tracking-wider">
                    {m.label}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {m.sublabel}
                  </p>
                </div>

                <p className="text-[9px] text-gray-600 font-mono pt-2 border-t border-gray-800/80">
                  {m.note}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verified Reviews Placeholder Container (Section 34) */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141822] border border-gray-800 max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs text-amber-300">
            <MessageSquare className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Verified Client Feedback Module</span>
          </div>
          <h3 className="text-base font-bold text-white">
            Client Testimonials Section
          </h3>
          <p className="text-xs text-gray-400 max-w-lg mx-auto">
            "Client testimonials can be added here upon formal verification. HM Bags partners with prominent retailers in Visakhapatnam and regional commercial hubs."
          </p>
          <p className="text-[10px] text-gray-600 font-mono">
            [TESTIMONIALS: Ready for real client reviews via companyData.ts]
          </p>
        </div>

      </div>
    </section>
  );
};
