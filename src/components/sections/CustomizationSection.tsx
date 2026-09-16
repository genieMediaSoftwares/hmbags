import React from 'react';
import { ArrowRight, Layers, Palette, Printer, Sparkles, ShoppingBag, Check } from 'lucide-react';

interface CustomizationSectionProps {
  onStartCustomOrder: () => void;
}

export const CustomizationSection: React.FC<CustomizationSectionProps> = ({ onStartCustomOrder }) => {
  const steps = [
    {
      step: '01',
      title: 'Plain Fabric Roll',
      subtitle: 'Raw Material Selection',
      desc: '100% virgin polypropylene non-woven roll stock in your chosen GSM thickness and solid color shade.',
      icon: Layers,
      accent: 'from-gray-800 to-gray-900',
    },
    {
      step: '02',
      title: 'Custom Pre-Press Design',
      subtitle: 'Vector Layout & Proofing',
      desc: 'Digital dimensioning of logos, barcodes, store addresses, and social handles mapped to bag panels.',
      icon: Palette,
      accent: 'from-amber-950/50 to-gray-900',
    },
    {
      step: '03',
      title: 'Precision Printing',
      subtitle: 'Flexo or Screen Inking',
      desc: 'High-speed inline flexography or multi-color screen printing with dense, fade-resistant industrial pigments.',
      icon: Printer,
      accent: 'from-amber-900/40 to-gray-900',
    },
    {
      step: '04',
      title: 'Finished Branded Bag',
      subtitle: 'Ultrasonic Heat Welded',
      desc: 'Automated bottom creasing and ultrasonic handle sealing producing clean, tear-resistant walking billboards.',
      icon: ShoppingBag,
      accent: 'from-amber-600/30 via-[#1C1F28] to-[#0E1117]',
    },
  ];

  const customizationPillars = [
    { title: 'Custom Size', desc: 'Any height, width, and side/bottom gusset tailored to your packaging cartons.' },
    { title: 'Custom Colour', desc: 'Over 30 vibrant fabric shades matching your corporate identity and brand colors.' },
    { title: 'Custom Printing', desc: 'Single-color, multi-color, and full-bleed photographic cylinder printing.' },
    { title: 'Custom Handles', desc: 'Loop handles, D-cut punches, W-cut grocery vests, and reinforced top hems.' },
    { title: 'Custom Branding', desc: 'Highlighting phone numbers, store branches, QR codes, and website links.' },
    { title: 'Bulk Manufacturing', desc: 'High-capacity plant line in Visakhapatnam ready for recurring weekly dispatches.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D11] text-white border-b border-[#F59E0B]/20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-texture-dark opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181C24] border border-[#F59E0B]/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Manufacturing Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Your Brand. <span className="gold-gradient-text">Your Bag.</span>
          </h2>

          <p className="text-lg sm:text-xl text-amber-200/90 font-serif italic">
            "Turn a simple bag into a moving brand asset."
          </p>

          <p className="text-sm sm:text-base text-gray-300 font-sans-clean max-w-2xl mx-auto">
            From raw virgin polypropylene polymer rolls to precision-printed, ultrasonically welded finished bags carried across cities by your customers.
          </p>
        </div>

        {/* 4-Stage Visual Transformation Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative rounded-2xl bg-gradient-to-b from-[#171B24] to-[#0E1117] border border-gray-800 p-6 flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-400 font-heading">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-[#F59E0B] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-amber-300/80 mb-1">
                    {s.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#F59E0B]">
                    <div className="w-6 h-6 rounded-full bg-[#12151C] border border-[#F59E0B]/40 flex items-center justify-center text-[10px]">
                      →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 6 Customization Capabilities Cards */}
        <div className="rounded-2xl bg-[#13161F] border border-gray-800 p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider font-heading">
              Tailored Manufacturing Parameters
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Every parameter is calibrated to your specific packaging payload and brand aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customizationPillars.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-400 text-center sm:text-left">
              Send us your bag dimensions or logo file to receive a complimentary 3D production preview.
            </div>

            <button
              onClick={onStartCustomOrder}
              className="gold-metallic-btn px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Start Your Custom Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
