import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/companyData';
import { GalleryItem } from '../../types';
import { Sparkles, Eye, X, ZoomIn, Layers } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Products', 'Custom Printing', 'Manufacturing', 'Packaging', 'Completed Orders'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0D0F14] text-white border-b border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181D26] border border-[#F59E0B]/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Visual Production Archives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Made to Be Seen.
          </h2>

          <p className="text-base text-gray-400 font-sans-clean max-w-2xl mx-auto">
            A visual showcase of finished non-woven formats, precision ink impressions, and secure logistics baling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold shadow-md'
                  : 'bg-[#141822] text-gray-400 hover:text-white hover:bg-[#1A1F2C] border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#141822] border border-gray-800 hover:border-[#F59E0B]/60 transition-all duration-300 cursor-pointer shadow-lg flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm text-[10px] font-bold text-amber-300 uppercase tracking-wider border border-[#F59E0B]/30">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon Overlay */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <ZoomIn className="w-4 h-4 text-[#F59E0B]" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1 text-left">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-1">
                    {item.description}
                  </p>
                  {item.specs && (
                    <p className="text-[10px] font-mono text-[#F59E0B] pt-0.5">
                      {item.specs}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#121620] border border-[#F59E0B]/40 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-xl overflow-hidden max-h-[70vh] bg-black mb-4">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain max-h-[70vh] mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
                  {lightboxItem.category}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {lightboxItem.description}
                </p>
              </div>

              {lightboxItem.specs && (
                <div className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-amber-300">
                  {lightboxItem.specs}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
