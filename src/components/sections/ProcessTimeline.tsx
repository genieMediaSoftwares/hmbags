import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/companyData';
import { FileText, Layers, Printer, Cog, CheckCircle2, Truck, Sparkles, ChevronRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const iconMap: Record<string, React.ElementType> = {
    FileText,
    Layers,
    Printer,
    Cog,
    CheckCircle2,
    Truck,
  };

  return (
    <section id="manufacturing" className="py-20 md:py-28 bg-[#0C0E14] text-white border-b border-[#F59E0B]/20 relative">
      <div className="absolute inset-0 bg-texture-dark opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181C25] border border-[#F59E0B]/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Industrial Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            How Your Bag Is Made
          </h2>

          <p className="text-base text-gray-400 font-sans-clean">
            A transparent 6-stage engineering workflow from initial bag dimensioning to moisture-sealed dispatch.
          </p>
        </div>

        {/* Desktop Step Selector Tabs / Timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = iconMap[step.iconName] || FileText;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-[#1D222E] border-[#F59E0B] shadow-lg shadow-[#F59E0B]/10'
                    : 'bg-[#12151C] border-gray-800 hover:border-gray-700 text-gray-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xl font-black font-heading ${isActive ? 'text-[#F59E0B]' : 'text-gray-600'}`}>
                    {step.stepNumber}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#F59E0B]' : 'text-gray-500'}`} />
                </div>
                <h4 className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-gray-400'}`}>
                  {step.title}
                </h4>

                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F59E0B] rotate-45" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detail Showcase (Desktop) */}
        <div className="hidden lg:block rounded-2xl bg-gradient-to-r from-[#171B24] via-[#131620] to-[#0F1218] border border-[#F59E0B]/30 p-8 shadow-xl">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-amber-400 font-heading">
                  STAGE {PROCESS_STEPS[activeStep].stepNumber}
                </span>
                <span className="h-4 w-[1px] bg-gray-700" />
                <span className="text-sm font-bold uppercase tracking-widest text-[#F59E0B]">
                  {PROCESS_STEPS[activeStep].subtitle}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {PROCESS_STEPS[activeStep].title} Process
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Key Quality Benchmarks:
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {PROCESS_STEPS[activeStep].details.map((d, i) => (
                    <div key={i} className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300">
                      <span className="text-[#F59E0B] mr-1.5 font-bold">•</span>
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-black/50 border border-white/10 text-center">
              <span className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-mono">
                Production Integrity
              </span>
              <p className="text-base font-bold text-amber-200">
                Direct Supervision by Plant GM P. Eswara Rao
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Visakhapatnam Manufacturing Facility
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {PROCESS_STEPS.map((step) => {
            const Icon = iconMap[step.iconName] || FileText;
            return (
              <div
                key={step.stepNumber}
                className="rounded-xl bg-[#141821] border border-gray-800 p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg font-black text-[#F59E0B] font-heading">
                      {step.stepNumber}
                    </span>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      {step.title}
                    </h4>
                  </div>
                  <Icon className="w-4 h-4 text-[#F59E0B]" />
                </div>

                <p className="text-xs font-semibold text-amber-300/80">{step.subtitle}</p>
                <p className="text-xs text-gray-300 leading-relaxed">{step.description}</p>

                <div className="pt-2 border-t border-gray-800/80 space-y-1">
                  {step.details.map((d, i) => (
                    <div key={i} className="text-[11px] text-gray-400 flex items-center gap-1.5">
                      <span className="text-[#F59E0B]">•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
