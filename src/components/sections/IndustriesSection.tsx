import React, { useState } from 'react';
import { INDUSTRIES } from '../../data/companyData';
import { ShoppingBag, Store, Shirt, Cross, Utensils, Building2, ArrowRight } from 'lucide-react';

interface IndustriesSectionProps {
  onSelectIndustryForQuote: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onSelectIndustryForQuote }) => {
  const iconMap: Record<string, React.ElementType> = {
    ShoppingBag,
    Store,
    Shirt,
    Cross,
    Utensils,
    Building2,
  };

  return (
    <section id="industries" className="py-20 md:py-28 bg-[#F5F6F8] text-gray-900 border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[#B45309] text-[11px] font-bold uppercase tracking-widest">
            Sector-Specific Solutions
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 font-heading tracking-tight">
            Bags for Every Business
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-sans-clean max-w-2xl mx-auto">
            From heavy-duty supermarket grocery bags to boutique fashion carry packs, our manufacturing accommodates diverse sector demands.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.iconName] || ShoppingBag;
            return (
              <div
                key={ind.id}
                className="group flex flex-col rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Industry Photo */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white">
                    <div className="p-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/20 text-[#F59E0B]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold tracking-wide">
                      {ind.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-amber-800 italic">
                      "{ind.tagline}"
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>

                  {/* Recommended Bag Formats */}
                  <div className="pt-2 border-t border-gray-100 space-y-1.5">
                    <p className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                      Recommended Formats:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.recommendedBags.map((bag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[10px] font-medium border border-gray-200"
                        >
                          {bag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA link */}
                  <button
                    onClick={() => onSelectIndustryForQuote(ind.name)}
                    className="text-xs font-bold text-gray-900 hover:text-amber-700 inline-flex items-center gap-1.5 transition-colors pt-2 cursor-pointer"
                  >
                    <span>Inquire for {ind.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
