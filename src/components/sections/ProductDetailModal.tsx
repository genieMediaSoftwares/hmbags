import React from 'react';
import { Product } from '../../types';
import { X, Check, ArrowRight, ShieldCheck, Layers, Printer, Ruler, Package } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onSelectForQuote,
}) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white text-gray-900 rounded-2xl shadow-2xl border border-amber-500/30 p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
          {/* Left Column: Product Photo + Key Badge */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0B0D11] text-[#F59E0B] text-xs font-bold uppercase tracking-wider border border-[#F59E0B]/40">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                <span>HM Bags Manufacturing Standard</span>
              </div>
              <p className="text-amber-800/90 leading-snug">
                Custom manufactured in Visakhapatnam. Batch testing on handle tear resistance and seam tensile tolerance.
              </p>
            </div>
          </div>

          {/* Right Column: Specifications & Customization Capabilities */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D97706]">
                HM Bags Product Specification
              </span>
              <h2 className="text-2xl font-extrabold text-gray-950 font-heading mt-0.5">
                {product.name}
              </h2>
              <p className="text-sm font-semibold text-gray-700 italic mt-0.5">
                "{product.tagline}"
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed font-sans-clean">
              {product.shortDescription}
            </p>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-1.5 font-bold text-gray-900 mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Material & Thickness</span>
                </div>
                <p className="text-gray-600">{product.gsmRange}</p>
              </div>

              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-1.5 font-bold text-gray-900 mb-1">
                  <Ruler className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Standard Sizes</span>
                </div>
                <p className="text-gray-600">{product.sizeOptions}</p>
              </div>

              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-1.5 font-bold text-gray-900 mb-1">
                  <Printer className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Printing Methods</span>
                </div>
                <p className="text-gray-600">{product.printingOptions.join(', ')}</p>
              </div>

              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-1.5 font-bold text-gray-900 mb-1">
                  <Package className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Bulk Order Info</span>
                </div>
                <p className="text-gray-600">{product.bulkInfo}</p>
              </div>
            </div>

            {/* Available Customization Points */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                Available Customization
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-700">
                {product.availableCustomization.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical Applications */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                Typical Business Applications
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.typicalApplications.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 text-gray-800 text-[11px] font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between border-t border-gray-200">
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Back to Catalogue
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectForQuote(product);
                }}
                className="gold-metallic-btn px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Quote for this Bag</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
