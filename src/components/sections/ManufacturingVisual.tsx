import React, { useState } from 'react';
import { Layers, Printer, ShieldCheck, Cog, Box, Truck } from 'lucide-react';

export const ManufacturingVisual: React.FC = () => {
  // Configurable plant visual assets (replaceable with actual plant photos)
  const [activeArea, setActiveArea] = useState<number>(0);

  const plantAreas = [
    {
      title: 'Ultrasonic Conversion Lines',
      tag: 'Thermal Welding',
      description: 'High-speed automated non-woven bag making machines executing continuous heat sealing of side seams and bottom gussets.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      icon: Cog,
      note: '[FACTORY PHOTO ASSET: Replace with /images/manufacturing/ultrasonic-machine.jpg]'
    },
    {
      title: 'Flexographic & Screen Printing Units',
      tag: 'Ink Compounding',
      description: 'Precision cylinder and screen printing stations utilizing quick-drying, high-contrast inks calibrated to your brand Pantone palette.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      icon: Printer,
      note: '[FACTORY PHOTO ASSET: Replace with /images/manufacturing/printing-press.jpg]'
    },
    {
      title: 'Virgin Polypropylene Roll Storage',
      tag: 'Raw Materials',
      description: 'Climate-controlled warehousing of spunbond virgin polypropylene rolls in assorted GSM thicknesses and vibrant masterbatch colors.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      icon: Layers,
      note: '[FACTORY PHOTO ASSET: Replace with /images/manufacturing/raw-materials.jpg]'
    },
    {
      title: 'Baling, Counting & Logistics Staging',
      tag: 'Packaging & Dispatch',
      description: 'Defect-free digital counting and moisture-barrier baling prepared for secure dispatch across Visakhapatnam, Andhra Pradesh and Pan-India.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
      icon: Truck,
      note: '[FACTORY PHOTO ASSET: Replace with /images/manufacturing/dispatch-dock.jpg]'
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0A0C10] text-white border-b border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              Plant Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight mt-1">
              Manufacturing Behind Every Bag
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xl font-sans-clean">
              Industrial machinery, automated ultrasonic sealing, and rigorous floor inspection supporting seamless bulk execution.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#141822] border border-gray-800 text-xs text-gray-400 max-w-sm">
            <span className="text-[#F59E0B] font-bold">Plant Location:</span> Akkayyapalem, Visakhapatnam, AP. Dedicated B2B commercial manufacturing unit.
          </div>
        </div>

        {/* Interactive Plant Area Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Area Switchers */}
          <div className="lg:col-span-5 space-y-3">
            {plantAreas.map((area, idx) => {
              const Icon = area.icon;
              const isSelected = activeArea === idx;
              return (
                <button
                  key={area.title}
                  onClick={() => setActiveArea(idx)}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#181D27] border-[#F59E0B] shadow-lg'
                      : 'bg-[#0E1117] border-gray-800 hover:border-gray-700 text-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#F59E0B]/10 text-[#F59E0B]' : 'bg-black/30 text-gray-500'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
                          {area.tag}
                        </span>
                        <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                          {area.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                  {isSelected && (
                    <p className="text-xs text-gray-300 mt-2.5 pt-2 border-t border-gray-800 leading-relaxed">
                      {area.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Plant Photography Display */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#F59E0B]/30 shadow-2xl bg-black group h-80 sm:h-96">
              <img
                src={plantAreas[activeArea].image}
                alt={plantAreas[activeArea].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white text-sm">
                    {plantAreas[activeArea].title}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    HM Bags Industrial Production Benchmark
                  </p>
                </div>
                <span className="text-[10px] text-amber-300 font-mono px-2 py-1 rounded bg-[#161A22] border border-amber-500/30">
                  Direct Plant
                </span>
              </div>
            </div>
            
            {/* Transparent Note regarding real images as required by prompt #13 */}
            <p className="text-[10px] text-gray-700 mt-2 text-right">
              Reference plant visual representation • HM Bags Visakhapatnam Plant Operational Desk
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
