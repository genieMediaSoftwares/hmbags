import React from 'react';
import { ShoppingBag, Users, Eye, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface BrandingValueSectionProps {
  onRequestBrandedBags: () => void;
}

export const BrandingValueSection: React.FC<BrandingValueSectionProps> = ({ onRequestBrandedBags }) => {
  const journeySteps = [
    {
      step: '01',
      title: 'Customer Buys Product',
      desc: 'Purchase is packed inside a well-structured, comfortable bag printed with your company insignia.',
      icon: ShoppingBag,
    },
    {
      step: '02',
      title: 'Customer Carries Bag',
      desc: 'The customer travels through high-traffic shopping streets, public transport, and commercial zones.',
      icon: Users,
    },
    {
      step: '03',
      title: 'Others See Your Brand',
      desc: 'High-contrast logo, colors, and store phone number catch the eyes of dozens of prospective buyers.',
      icon: Eye,
    },
    {
      step: '04',
      title: 'Repeated Brand Visibility',
      desc: 'Because non-woven polypropylene is reusable, the customer uses the bag dozens of times at home and markets.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0B0D11] text-white border-b border-[#F59E0B]/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-dark opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181C25] border border-[#F59E0B]/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>High ROI Packaging Media</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Every Bag Carries <span className="gold-gradient-text">Your Brand.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-sans-clean max-w-2xl mx-auto">
            A shopping bag is not merely packaging. It is a durable, mobile brand asset that extends your storefront's reach into the streets.
          </p>
        </div>

        {/* 4-Stage Circulation Cycle */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {journeySteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#141822] border border-gray-800 p-6 flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black text-amber-400 font-heading">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-[#F59E0B] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 font-sans">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Circulation Step {item.step}</span>
                  <span className="text-[#F59E0B]">Active Impression</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-world Context Callout */}
        <div className="rounded-2xl bg-gradient-to-r from-[#171C26] via-[#12151D] to-[#0E1117] border border-[#F59E0B]/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h4 className="text-xl font-bold text-white font-heading">
              Ready to Upgrade from Plain Bags to Custom Branded Packs?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Our pre-press design team helps align your store logo, phone number, and address so your bags stand out across Visakhapatnam and wherever your buyers travel.
            </p>
          </div>

          <button
            onClick={onRequestBrandedBags}
            className="gold-metallic-btn px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
          >
            <span>Brand Your Bags Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
