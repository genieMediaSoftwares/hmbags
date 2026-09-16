import React from 'react';
import { Sliders, CheckCircle2, Award, PackageCheck, Grid, Factory, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Custom Manufacturing',
      desc: 'Solutions built around your exact dimensioning, load thresholds, and aesthetic requirements.',
      icon: Sliders,
    },
    {
      title: 'Consistent Quality',
      desc: 'A quality-focused manufacturing workflow checking fabric GSM, seam weld integrity, and print clarity.',
      icon: CheckCircle2,
    },
    {
      title: 'Custom Branding',
      desc: 'Turn your bags into branded customer touchpoints with durable screen and flexographic printing.',
      icon: Award,
    },
    {
      title: 'Bulk Production',
      desc: 'Designed from the ground up to support high-volume recurring enterprise and retail store requirements.',
      icon: PackageCheck,
    },
    {
      title: 'Multiple Bag Formats',
      desc: 'From D-cut punches and loop handles to stand-up box bags and laminated photographic sleeves.',
      icon: Grid,
    },
    {
      title: 'Direct Manufacturing',
      desc: 'A direct manufacturing approach in Visakhapatnam eliminating middleman markups for business buyers.',
      icon: Factory,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0D0F14] text-white border-b border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1E28] border border-[#F59E0B]/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Value Proposition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Why Businesses Choose HM Bags
          </h2>

          <p className="text-base text-gray-400 font-sans-clean max-w-2xl mx-auto">
            Practical manufacturing solutions engineered for retailers, wholesalers, and corporate brands who require dependable packaging at scale.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-[#141821] border border-gray-800/90 hover:border-[#F59E0B]/50 hover:bg-[#181D28] transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-[#F59E0B] group-hover:scale-110 group-hover:border-[#F59E0B]/50 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-wide uppercase font-sans">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="h-0.5 w-8 bg-[#F59E0B]/40 group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
