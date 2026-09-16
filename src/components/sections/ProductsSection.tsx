import React, { useState } from 'react';
import { PRODUCTS } from '../../data/companyData';
import { Product } from '../../types';
import { ProductDetailModal } from './ProductDetailModal';
import { ArrowRight, Eye, CheckCircle2, Shield, Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProductForQuote: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onSelectProductForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'All Bag Formats' },
    { id: 'shopping', label: 'Shopping & Retail' },
    { id: 'non-woven', label: 'D-Cut / W-Cut' },
    { id: 'custom-printed', label: 'Custom Printed' },
    { id: 'laminated', label: 'Laminated BOPP' },
    { id: 'specialty', label: 'Box & Event Bags' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 md:py-28 bg-[#F8F9FA] text-gray-900 border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-[#B45309] text-[11px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Direct Plant Production Range</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 font-heading tracking-tight">
            Our Bag Collection
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-sans-clean">
            Designed for businesses. Manufactured for scale. Every format engineered for durability, consistent GSM density, and clean visual branding.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gray-950 text-white shadow-md border border-amber-500/40'
                  : 'bg-white text-gray-700 hover:text-gray-950 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#D97706]/60 transition-all duration-300 overflow-hidden"
            >
              {/* Product Card Image with Subtle Zoom */}
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0B0D11] text-[#F59E0B] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                )}

                {/* Quick View Button overlay on hover */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold tracking-wider uppercase cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#F59E0B]" />
                  <span>View Specifications</span>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-950 group-hover:text-[#B45309] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Suitable Applications Pills */}
                <div>
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Ideal For:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {product.typicalApplications.slice(0, 2).map((app, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[10px] font-medium"
                      >
                        {app}
                      </span>
                    ))}
                    {product.typicalApplications.length > 2 && (
                      <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 text-[10px]">
                        +{product.typicalApplications.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-bold text-gray-700 hover:text-black inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 text-[#D97706]" />
                  </button>

                  <button
                    onClick={() => onSelectProductForQuote(product)}
                    className="px-3 py-1.5 rounded-lg bg-gray-950 hover:bg-amber-600 text-white text-xs font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Quote</span>
                  </button>
                </div>
              </div>

              {/* Subtle Gold Accent Line on Card Hover */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-amber-400 to-[#D97706] transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Specification Note */}
        <div className="mt-12 text-center text-xs text-gray-700 max-w-xl mx-auto italic">
          * GSM thickness, bag dimensions, handle length, and printing plates are custom engineered based on client specifications.
        </div>

      </div>

      {/* Product Specification Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectForQuote={(prod) => {
          setSelectedProduct(null);
          onSelectProductForQuote(prod);
        }}
      />
    </section>
  );
};
