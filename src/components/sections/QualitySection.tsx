import React from 'react';
import { ShieldCheck, Layers, Gauge, CheckCircle2 } from 'lucide-react';

export const QualitySection: React.FC = () => {
  const qualityStages = [
    {
      stage: '01',
      title: 'Material Standard',
      tagline: 'Virgin Polymer Density & GSM Verification',
      checks: [
        '100% virgin spunbond polypropylene polymer selection',
        'Fabric thickness consistency check across roll width',
        'Pigment dispersion check for uniform vibrant color density',
      ],
      icon: Layers,
    },
    {
      stage: '02',
      title: 'Manufacturing Precision',
      tagline: 'Automated Ultrasonic Heat Bond Testing',
      checks: [
        'Continuous high-frequency ultrasonic seam welding calibration',
        'Handle weld bonding pull-force resistance verification',
        'Crisp die-cut punch alignment without ragged edges',
      ],
      icon: Gauge,
    },
    {
      stage: '03',
      title: 'Final Quality Check',
      tagline: 'Static Load & Print Adhesion Review',
      checks: [
        'Static weight load testing according to bag size specifications',
        'Ink rub and adhesion verification to prevent transfer in rain',
        'Accurate bundle counting and moisture-proof master packaging',
      ],
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0E1117] text-white border-b border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1F2B] border border-[#F59E0B]/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Inspection Benchmark</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Quality That Reaches Your Customer.
          </h2>

          <p className="text-base text-gray-400 font-sans-clean max-w-2xl mx-auto">
            A 3-stage manufacturing gate ensures that every batch dispatched from our Visakhapatnam plant withstands daily handling without seam ruptures.
          </p>
        </div>

        {/* 3-Stage Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {qualityStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.stage}
                className="relative rounded-2xl bg-[#141822] border border-gray-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-amber-400 font-heading">
                      {stage.stage}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-[#F59E0B] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#F59E0B] mt-0.5">
                      {stage.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-800/80 space-y-2">
                    {stage.checks.map((check, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>{check}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-800/80 text-[11px] text-gray-400 flex items-center justify-between">
                  <span>Batch Protocol</span>
                  <span className="text-amber-300 font-mono">100% Inspected</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
