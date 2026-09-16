import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { ArrowRight, MessageSquare, ShieldCheck, Sparkles, Layers, Box, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToConfigurator = () => {
    const el = document.getElementById('configurator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0A0C10] border-b border-[#F59E0B]/15">
      {/* Background Ambience: Subtle Industrial Grid & Radiant Gold Spotlights */}
      <div className="absolute inset-0 bg-grid-industrial pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#F59E0B]/10 via-[#F59E0B]/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#D97706]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171B22] border border-[#F59E0B]/35 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-[11px] font-bold tracking-wider text-amber-200 uppercase">
                {COMPANY_INFO.name} • DIRECT B2B MANUFACTURERS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Premium Bags.{' '}
              <span className="block gold-gradient-text font-heading mt-1">
                Manufactured for Your Brand.
              </span>
            </h1>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-sans-clean leading-relaxed">
              Custom non-woven and shopping bags manufactured for businesses, retailers and brands. Direct factory production with precision printing, custom GSM gauges, and prompt bulk dispatch.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="gold-metallic-btn px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToProducts}
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#F59E0B]/50 transition-all cursor-pointer"
              >
                Explore Products
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsappDefault}?text=${encodeURIComponent(
                  'Hello HM Bags, I would like to inquire about non-woven bags manufacturing.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/30 transition-all inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Interactive Configurator Teaser */}
            <div className="pt-1">
              <button
                onClick={scrollToConfigurator}
                className="text-xs font-semibold text-amber-300/90 hover:text-amber-200 inline-flex items-center gap-1.5 group cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] group-hover:rotate-12 transition-transform" />
                <span>Try our Interactive Bag Configurator to preview shapes & colors →</span>
              </button>
            </div>

            {/* Credibility Strip Beneath CTA as instructed */}
            <div className="pt-4 border-t border-gray-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Custom Manufacturing</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Custom Printing</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Bulk Orders</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Business Branding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Visual Composition of Manufactured Bags */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Glow Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#161A22] via-[#0E1116] to-[#0B0D11] border border-[#F59E0B]/30 p-4 sm:p-6 shadow-2xl overflow-hidden">
                
                {/* Header Tag inside visual */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-200">
                      HM BAGS PRODUCTION SPECIMENS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 text-gray-400 border border-gray-800">
                    Visakhapatnam Unit
                  </span>
                </div>

                {/* Layered Showcase Grid */}
                <div className="grid grid-cols-2 gap-3.5 pt-4">
                  {/* Bag Specimen 1: Loop Handle Retail Bag */}
                  <div className="group relative rounded-xl overflow-hidden bg-black/40 border border-white/10 hover:border-[#F59E0B]/50 transition-all p-3 space-y-2">
                    <div className="relative h-36 w-full rounded-lg overflow-hidden bg-gray-900">
                      <img
                        src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
                        alt="HM Loop Handle Shopping Bag"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-bold text-amber-300 border border-[#F59E0B]/30">
                        Loop Handle
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Retail Shopping Bag</p>
                      <p className="text-[10px] text-gray-400">75 GSM • Ultrasonic Seam</p>
                    </div>
                  </div>

                  {/* Bag Specimen 2: D-Cut Punch Bag */}
                  <div className="group relative rounded-xl overflow-hidden bg-black/40 border border-white/10 hover:border-[#F59E0B]/50 transition-all p-3 space-y-2">
                    <div className="relative h-36 w-full rounded-lg overflow-hidden bg-gray-900">
                      <img
                        src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80"
                        alt="HM D-Cut Punch Bag"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-bold text-amber-300 border border-[#F59E0B]/30">
                        D-Cut Punch
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Compact D-Cut Carry</p>
                      <p className="text-[10px] text-gray-400">55 GSM • Pharma / Books</p>
                    </div>
                  </div>

                  {/* Bag Specimen 3: Structured Box Bag */}
                  <div className="group relative rounded-xl overflow-hidden bg-black/40 border border-white/10 hover:border-[#F59E0B]/50 transition-all p-3 space-y-2">
                    <div className="relative h-36 w-full rounded-lg overflow-hidden bg-gray-900">
                      <img
                        src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80"
                        alt="HM Box Bag 3D Gusset"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-bold text-amber-300 border border-[#F59E0B]/30">
                        Box Bag 3D
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Stand-Up Box Bag</p>
                      <p className="text-[10px] text-gray-400">90 GSM • Confectionery</p>
                    </div>
                  </div>

                  {/* Bag Specimen 4: Custom Branded Bag */}
                  <div className="group relative rounded-xl overflow-hidden bg-black/40 border border-white/10 hover:border-[#F59E0B]/50 transition-all p-3 space-y-2">
                    <div className="relative h-36 w-full rounded-lg overflow-hidden bg-gray-900">
                      <img
                        src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
                        alt="HM Custom Brand Bag"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-bold text-amber-300 border border-[#F59E0B]/30">
                        Custom Printed
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Multi-Color Brand Bag</p>
                      <p className="text-[10px] text-gray-400">Pantone Match Inks</p>
                    </div>
                  </div>
                </div>

                {/* Floating Manufacturing Badge */}
                <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                    <span>Non-Woven Polypropylene Virgin Grade</span>
                  </div>
                  <span className="text-[#F59E0B] font-bold">100% Recyclable</span>
                </div>
              </div>

              {/* Decorative Subtle Corner Accent */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#F59E0B]/10 rounded-full blur-xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
