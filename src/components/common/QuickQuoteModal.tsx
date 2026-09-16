import React from 'react';
import { QuoteFormSection } from '../sections/QuoteFormSection';
import { BagConfigState, Product } from '../../types';
import { X } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  config?: BagConfigState | null;
  selectedProduct?: Product | null;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  config,
  selectedProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F5F6F8] rounded-2xl shadow-2xl border border-amber-500/30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-900 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pt-4 pb-2">
          <QuoteFormSection
            initialConfig={config}
            initialProductName={selectedProduct?.name}
          />
        </div>
      </div>
    </div>
  );
};
