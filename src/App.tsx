/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { BrandStatement } from './components/sections/BrandStatement';
import { ProductsSection } from './components/sections/ProductsSection';
import { BagConfigurator } from './components/sections/BagConfigurator';
import { CustomizationSection } from './components/sections/CustomizationSection';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { ManufacturingVisual } from './components/sections/ManufacturingVisual';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { BrandingValueSection } from './components/sections/BrandingValueSection';
import { QualitySection } from './components/sections/QualitySection';
import { StatsSection } from './components/sections/StatsSection';
import { GallerySection } from './components/sections/GallerySection';
import { CatalogueSection } from './components/sections/CatalogueSection';
import { QuoteFormSection } from './components/sections/QuoteFormSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { QuickQuoteModal } from './components/common/QuickQuoteModal';
import { BagConfigState, Product } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<BagConfigState | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // When user configures a bag in the studio
  const handleConfigSubmit = (config: BagConfigState) => {
    setSelectedConfig(config);
    // Scroll directly to the on-page quote form or open quote modal
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  // When user clicks "Quote" on a product card
  const handleSelectProductForQuote = (product: Product) => {
    setSelectedProduct(product);
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  // When user clicks industry card
  const handleSelectIndustryForQuote = (industryName: string) => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#E5E7EB] font-sans antialiased overflow-x-hidden selection:bg-[#F59E0B] selection:text-black">
      
      {/* 1. Sticky Navbar */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      <main>
        {/* 2. Hero Section + 3. Credibility Strip */}
        <Hero
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 4. Brand Statement ("From Material to Manufacturing...") */}
        <BrandStatement />

        {/* 5. Products ("Our Bag Collection") */}
        <ProductsSection
          onSelectProductForQuote={handleSelectProductForQuote}
        />

        {/* 11. Bag Configurator Concept ("Design Your Bag") */}
        <BagConfigurator
          onConfigureSubmit={handleConfigSubmit}
        />

        {/* 6. Customization Section ("Your Brand. Your Bag.") */}
        <CustomizationSection
          onStartCustomOrder={() => {
            const el = document.getElementById('configurator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Manufacturing Process ("How Your Bag Is Made") */}
        <ProcessTimeline />

        {/* 8. Manufacturing Visual ("Manufacturing Behind Every Bag") */}
        <ManufacturingVisual />

        {/* 9. Why HM Bags */}
        <WhyChooseUs />

        {/* 10. Industries ("Bags for Every Business") */}
        <IndustriesSection
          onSelectIndustryForQuote={handleSelectIndustryForQuote}
        />

        {/* 11. Branding Section ("Every Bag Carries Your Brand.") */}
        <BrandingValueSection
          onRequestBrandedBags={() => setIsQuoteModalOpen(true)}
        />

        {/* 12. Quality Section ("Quality That Reaches Your Customer.") */}
        <QualitySection />

        {/* 13. Facts / Statistics (Editable Placeholders) */}
        <StatsSection />

        {/* 14. Gallery ("Made to Be Seen.") */}
        <GallerySection />

        {/* 15. Catalogue CTA ("Looking for the Right Bag for Your Business?") */}
        <CatalogueSection
          onRequestQuote={() => setIsQuoteModalOpen(true)}
        />

        {/* 16. Quote Form ("Tell Us What You Need.") */}
        <QuoteFormSection
          initialConfig={selectedConfig}
          initialProductName={selectedProduct?.name}
        />

        {/* 17. FAQ ("Common Inquiries") */}
        <FAQSection />

        {/* 18. Final CTA & Contact Section ("Let's Manufacture Something Great.") */}
        <ContactSection
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />
      </main>

      {/* 19. Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <WhatsAppFloating />

      {/* Quick Quote Trigger Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        config={selectedConfig}
        selectedProduct={selectedProduct}
      />

    </div>
  );
}
