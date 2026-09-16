import React, { useState, useRef } from 'react';
import { CONFIGURATOR_OPTIONS } from '../../data/companyData';
import { BagConfigState, Product } from '../../types';
import { Sparkles, Upload, ArrowRight, ShieldAlert, Check, RefreshCw, Palette, Layers, Scissors } from 'lucide-react';

interface BagConfiguratorProps {
  onConfigureSubmit: (config: BagConfigState) => void;
}

export const BagConfigurator: React.FC<BagConfiguratorProps> = ({ onConfigureSubmit }) => {
  const [bagType, setBagType] = useState(CONFIGURATOR_OPTIONS.bagTypes[1].id); // default loop-handle
  const [bagColor, setBagColor] = useState(CONFIGURATOR_OPTIONS.colors[0]); // obsidian
  const [handleType, setHandleType] = useState(CONFIGURATOR_OPTIONS.handleTypes[0].id);
  const [printOption, setPrintOption] = useState(CONFIGURATOR_OPTIONS.printOptions[0]);
  const [quantityTier, setQuantityTier] = useState(CONFIGURATOR_OPTIONS.quantityTiers[1]);
  const [customSize, setCustomSize] = useState(CONFIGURATOR_OPTIONS.sizes[1]);
  const [gsmThickness, setGsmThickness] = useState('75 GSM (Standard Retail)');
  const [clientBrandName, setClientBrandName] = useState('');
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [logoFileName, setLogoFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setLogoDataUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setBagType(CONFIGURATOR_OPTIONS.bagTypes[1].id);
    setBagColor(CONFIGURATOR_OPTIONS.colors[0]);
    setHandleType(CONFIGURATOR_OPTIONS.handleTypes[0].id);
    setPrintOption(CONFIGURATOR_OPTIONS.printOptions[0]);
    setQuantityTier(CONFIGURATOR_OPTIONS.quantityTiers[1]);
    setClientBrandName('');
    setLogoDataUrl(null);
    setLogoFileName(null);
  };

  const handleProceedToQuote = () => {
    const configState: BagConfigState = {
      bagType: CONFIGURATOR_OPTIONS.bagTypes.find(b => b.id === bagType)?.name || bagType,
      bagColor: bagColor.name,
      handleType: CONFIGURATOR_OPTIONS.handleTypes.find(h => h.id === handleType)?.name || handleType,
      printSides: printOption as any,
      quantityTier,
      customSize,
      gsmThickness,
      logoDataUrl,
      logoFileName,
      clientBrandName: clientBrandName || 'Your Brand Name',
    };
    onConfigureSubmit(configState);
  };

  return (
    <section id="configurator" className="py-20 md:py-28 bg-[#101318] text-white border-b border-[#F59E0B]/20 relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-texture-dark opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1F29] border border-[#F59E0B]/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Interactive B2B Concept Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Design Your Bag
          </h2>

          <p className="text-base text-gray-300 font-sans-clean">
            Customize bag format, fabric tones, handle style, and preview your brand placement in real time before sending your bulk inquiry.
          </p>
        </div>

        {/* Studio Layout: Left Controls + Right Live Vector Bag Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#161B23] border border-gray-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
            
            {/* Step 1: Bag Format */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-200 flex items-center justify-between">
                <span>1. Select Bag Format</span>
                <span className="text-[10px] text-gray-400">Ultrasonic Heat Fusion</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {CONFIGURATOR_OPTIONS.bagTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setBagType(type.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      bagType === type.id
                        ? 'bg-[#222936] border-[#F59E0B] text-white shadow-md'
                        : 'bg-[#12151B] border-gray-800 text-gray-400 hover:text-gray-200 hover:border-gray-700'
                    }`}
                  >
                    <p className="text-xs font-bold">{type.name}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Direct Plant Format</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fabric Color Selection */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-200 flex items-center justify-between">
                <span>2. Polypropylene Fabric Color</span>
                <span className="text-[10px] text-gray-300 font-semibold">{bagColor.name}</span>
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {CONFIGURATOR_OPTIONS.colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setBagColor(c)}
                    className={`h-10 rounded-lg flex items-center justify-center border-2 transition-transform hover:scale-105 cursor-pointer ${
                      bagColor.id === c.id ? 'border-amber-400 ring-2 ring-[#F59E0B]/30' : 'border-gray-700'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {bagColor.id === c.id && (
                      <Check className={`w-4 h-4 ${c.textColor === '#FFFFFF' ? 'text-white' : 'text-black'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Handle Style */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-200">
                3. Handle Attachment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CONFIGURATOR_OPTIONS.handleTypes.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setHandleType(h.id)}
                    className={`px-3 py-2.5 rounded-xl text-left border text-xs font-semibold transition-colors cursor-pointer ${
                      handleType === h.id
                        ? 'bg-[#222936] border-[#F59E0B] text-amber-200'
                        : 'bg-[#12151B] border-gray-800 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {h.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Printing & Artwork Branding */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-200">
                4. Printing & Logo Artwork
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CONFIGURATOR_OPTIONS.printOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setPrintOption(opt)}
                    className={`px-3 py-2 rounded-lg text-left border text-xs transition-colors cursor-pointer ${
                      printOption === opt
                        ? 'bg-[#222936] border-[#F59E0B] text-white font-bold'
                        : 'bg-[#12151B] border-gray-800 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* Brand Name Input + File Upload */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] text-gray-400 mb-1">
                    Your Brand Name / Store Text:
                  </label>
                  <input
                    type="text"
                    value={clientBrandName}
                    onChange={(e) => setClientBrandName(e.target.value)}
                    placeholder="e.g., Royal Silks or Fresh Mart"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#0E1116] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-gray-400 mb-1">
                    Upload Brand Logo (Optional):
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full px-3 py-2 rounded-lg bg-[#0E1116] border border-gray-700 text-xs text-gray-300 hover:text-white hover:border-[#F59E0B] flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span className="truncate">
                        {logoFileName ? logoFileName : 'Select Logo Image'}
                      </span>
                    </button>
                    {logoDataUrl && (
                      <button
                        type="button"
                        onClick={() => {
                          setLogoDataUrl(null);
                          setLogoFileName(null);
                        }}
                        className="px-2 py-2 text-xs text-red-400 hover:text-red-300 bg-red-950/40 rounded-lg border border-red-800"
                        title="Remove Logo"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Quantity & Dimensions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1.5">
                  5. Quantity Tier
                </label>
                <select
                  value={quantityTier}
                  onChange={(e) => setQuantityTier(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#0E1116] border border-gray-700 text-white focus:outline-none focus:border-[#F59E0B]"
                >
                  {CONFIGURATOR_OPTIONS.quantityTiers.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-200 mb-1.5">
                  6. Target Dimensions
                </label>
                <select
                  value={customSize}
                  onChange={(e) => setCustomSize(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#0E1116] border border-gray-700 text-white focus:outline-none focus:border-[#F59E0B]"
                >
                  {CONFIGURATOR_OPTIONS.sizes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reset & Summary Row */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-800">
              <button
                onClick={handleReset}
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Selections</span>
              </button>
              <span className="text-[11px] text-amber-400/90 font-mono">
                Virgin Polypropylene Non-Woven
              </span>
            </div>

          </div>

          {/* Right Live Preview Column (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            
            {/* Visual Preview Container */}
            <div className="rounded-2xl bg-gradient-to-b from-[#181D26] via-[#12161E] to-[#0D1016] border border-[#F59E0B]/35 p-6 shadow-2xl overflow-hidden relative text-center">
              
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 text-xs">
                <span className="font-bold text-amber-200 uppercase tracking-wider">
                  Live Vector Specimen
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono">
                  {CONFIGURATOR_OPTIONS.bagTypes.find(b => b.id === bagType)?.name}
                </span>
              </div>

              {/* Interactive Vector Bag Canvas */}
              <div className="py-6 flex items-center justify-center min-h-[360px]">
                <div className="relative w-64 h-80 flex items-center justify-center">
                  
                  {/* SVG Bag Representation */}
                  <svg
                    viewBox="0 0 240 300"
                    className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                  >
                    <defs>
                      <filter id="bagDepth" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.45" />
                      </filter>
                      <linearGradient id="fabricShine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
                        <stop offset="40%" stopColor="#000000" stopOpacity="0.0" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
                      </linearGradient>
                    </defs>

                    {/* Loop Handles (Rendered if loop handle or box bag) */}
                    {(bagType === 'loop-handle' || bagType === 'box-bag') && (
                      <g>
                        <path
                          d="M 90 70 C 90 20, 150 20, 150 70"
                          fill="none"
                          stroke={
                            handleType === 'gold-contrast-loop'
                              ? '#F59E0B'
                              : handleType === 'black-contrast-loop'
                              ? '#0A0A0A'
                              : bagColor.hex
                          }
                          strokeWidth="14"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 90 70 C 90 20, 150 20, 150 70"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeOpacity="0.2"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </g>
                    )}

                    {/* Bag Main Body */}
                    <rect
                      x="40"
                      y="65"
                      width="160"
                      height="215"
                      rx={bagType === 'box-bag' ? 4 : 8}
                      fill={bagColor.hex}
                      stroke="#FFFFFF"
                      strokeOpacity="0.1"
                      strokeWidth="1.5"
                      filter="url(#bagDepth)"
                    />

                    {/* 3D Box Bag Side Creases */}
                    {bagType === 'box-bag' && (
                      <path
                        d="M 40 250 L 70 280 L 170 280 L 200 250"
                        fill="none"
                        stroke="#000000"
                        strokeOpacity="0.35"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                      />
                    )}

                    {/* W-Cut Side Pleat Notches */}
                    {bagType === 'w-cut' && (
                      <g>
                        <path d="M 40 65 L 52 110 L 40 160" stroke="#000" strokeOpacity="0.2" fill="none" strokeWidth="2" />
                        <path d="M 200 65 L 188 110 L 200 160" stroke="#000" strokeOpacity="0.2" fill="none" strokeWidth="2" />
                        {/* W-Cut Top Vest Handle Cutout */}
                        <path
                          d="M 85 65 C 85 105, 155 105, 155 65 Z"
                          fill="#12161E"
                        />
                      </g>
                    )}

                    {/* D-Cut Punch Hole */}
                    {(bagType === 'd-cut' || handleType === 'die-cut') && (
                      <rect
                        x="95"
                        y="88"
                        width="50"
                        height="20"
                        rx="10"
                        fill="#12161E"
                        stroke="#FFFFFF"
                        strokeOpacity="0.2"
                        strokeWidth="1.5"
                      />
                    )}

                    {/* Fabric Texture Highlight Overlay */}
                    <rect
                      x="40"
                      y="65"
                      width="160"
                      height="215"
                      rx={bagType === 'box-bag' ? 4 : 8}
                      fill="url(#fabricShine)"
                      pointerEvents="none"
                    />

                    {/* Ultrasonic Welded Side Seam Dots */}
                    <line x1="46" y1="75" x2="46" y2="270" stroke="#000" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="194" y1="75" x2="194" y2="270" stroke="#000" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Brand Logo / Text Center Placement */}
                    <foreignObject x="50" y="130" width="140" height="110">
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                        {logoDataUrl ? (
                          <img
                            src={logoDataUrl}
                            alt="Brand Logo"
                            className="max-h-16 max-w-full object-contain mb-1"
                          />
                        ) : (
                          <div
                            className="text-lg font-bold font-heading tracking-wider leading-tight"
                            style={{
                              color: bagColor.textColor === '#FFFFFF' ? '#FDE68A' : '#111827',
                            }}
                          >
                            {clientBrandName || 'YOUR BRAND'}
                          </div>
                        )}
                        <span
                          className="text-[8px] font-semibold tracking-widest uppercase opacity-80 mt-1"
                          style={{ color: bagColor.textColor }}
                        >
                          {printOption !== 'Plain (No Printing)' ? printOption : 'Plain Non-Woven'}
                        </span>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
              </div>

              {/* Live Spec Details */}
              <div className="pt-4 border-t border-gray-800 text-left space-y-1.5 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-500">Fabric Color:</span>
                  <span className="font-semibold text-white">{bagColor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Format:</span>
                  <span className="font-semibold text-white">
                    {CONFIGURATOR_OPTIONS.bagTypes.find(b => b.id === bagType)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Volume Tier:</span>
                  <span className="font-semibold text-amber-300">{quantityTier}</span>
                </div>
              </div>

              {/* Prominent Required Disclaimer from prompt #11 */}
              <div className="mt-4 p-3 rounded-xl bg-black/50 border border-amber-500/25 text-[11px] text-amber-200/90 text-left flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <p>
                  <strong>Preview concept:</strong> Final production specifications, exact Pantone shade matching, and cylinder proofs are confirmed upon quotation sign-off.
                </p>
              </div>

              {/* Direct Quote CTA */}
              <button
                onClick={handleProceedToQuote}
                className="mt-5 w-full gold-metallic-btn py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Request Quote With This Spec</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
