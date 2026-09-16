import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO, PRODUCTS } from '../../data/companyData';
import { QuoteFormData, BagConfigState } from '../../types';
import { Send, CheckCircle2, ShieldCheck, Upload, Phone, Mail, FileCheck, ArrowRight, MessageSquare } from 'lucide-react';

interface QuoteFormSectionProps {
  initialConfig?: BagConfigState | null;
  initialProductName?: string | null;
}

export const QuoteFormSection: React.FC<QuoteFormSectionProps> = ({
  initialConfig,
  initialProductName,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    bagType: PRODUCTS[0].name,
    quantity: '1,000 – 3,000 Units',
    preferredSize: '12" x 16" (Standard)',
    printingRequired: 'Yes, Multi-Color',
    gsm: '75 GSM (Standard)',
    message: '',
    designFileName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileUploadName, setFileUploadName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Pre-fill if configurator or product card passed data
  useEffect(() => {
    if (initialConfig) {
      setFormData((prev) => ({
        ...prev,
        bagType: initialConfig.bagType,
        quantity: initialConfig.quantityTier,
        preferredSize: initialConfig.customSize,
        printingRequired: initialConfig.printSides === 'No Print (Plain)' ? 'Plain / No Print' : 'Yes, Multi-Color',
        message: `Configured in Studio: Color: ${initialConfig.bagColor}, Handle: ${initialConfig.handleType}, Brand: ${initialConfig.clientBrandName}`,
        designFileName: initialConfig.logoFileName || '',
      }));
      if (initialConfig.logoFileName) {
        setFileUploadName(initialConfig.logoFileName);
      }
    }
  }, [initialConfig]);

  useEffect(() => {
    if (initialProductName) {
      setFormData((prev) => ({
        ...prev,
        bagType: initialProductName,
      }));
    }
  }, [initialProductName]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileUploadName(file.name);
      setFormData((prev) => ({ ...prev, designFileName: file.name }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number for callback.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }
    if (!formData.bagType) newErrors.bagType = 'Please select a bag format.';
    if (!formData.quantity) newErrors.quantity = 'Please specify your required quantity.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppSend = () => {
    const text = `*New Bulk Quote Requirement for HM Bags*\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Company:* ${formData.companyName || 'Not specified'}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Bag Type:* ${formData.bagType}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Size:* ${formData.preferredSize}\n` +
      `*Printing:* ${formData.printingRequired}\n` +
      (formData.message ? `*Notes:* ${formData.message}\n` : '') +
      `_Sent via HM Bags Official Web Portal_`;

    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsappDefault}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="quote-form" className="py-20 md:py-28 bg-[#F5F6F8] text-gray-900 border-b border-gray-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[#B45309] text-[11px] font-bold uppercase tracking-widest">
            Direct Plant Quotation Desk
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 font-heading tracking-tight">
            Tell Us What You Need.
          </h2>

          <p className="text-base text-gray-600 font-sans-clean">
            Share your requirement and our team can help you determine the right bag solution, GSM gauge, and commercial pricing.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl bg-white border border-gray-200/90 shadow-xl p-6 sm:p-10 relative">
          
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6 animate-fade-in max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-500 mx-auto flex items-center justify-center text-amber-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-950 font-heading">
                  Thank You. Your requirement has been received.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans-clean">
                  Our management team at HM Bags Visakhapatnam will review your specifications ({formData.bagType}, {formData.quantity}) and reach out via phone at <strong>{formData.phone}</strong>.
                </p>
              </div>

              {/* Requirement Summary Box */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-left text-xs space-y-1.5 text-gray-700">
                <p className="font-bold text-gray-900 border-b pb-1">Requirement Summary:</p>
                <p><span className="text-gray-500">Contact:</span> {formData.fullName} ({formData.phone})</p>
                <p><span className="text-gray-500">Format:</span> {formData.bagType}</p>
                <p><span className="text-gray-500">Quantity Tier:</span> {formData.quantity}</p>
                <p><span className="text-gray-500">Size & Print:</span> {formData.preferredSize} • {formData.printingRequired}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward Details to WhatsApp Now</span>
                </button>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name (Required) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g., Rajesh Kumar"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:border-amber-600'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Company Name (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Company / Retail Store Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g., Visakha Silks & Textiles"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number (Required) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g., +91 98480 12345"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:border-amber-600'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., rajesh@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Product Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                {/* Bag Type (Required) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Bag Format <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.bagType}
                    onChange={(e) => setFormData({ ...formData, bagType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:border-amber-600 focus:outline-none"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Custom Bespoke Pouch">Custom Bespoke Pouch</option>
                  </select>
                </div>

                {/* Approximate Quantity (Required) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Approximate Quantity <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:border-amber-600 focus:outline-none"
                  >
                    <option value="500 – 1,000 Units (Starter Run)">500 – 1,000 Units (Starter)</option>
                    <option value="1,000 – 3,000 Units (Standard)">1,000 – 3,000 Units (Standard)</option>
                    <option value="3,000 – 5,000 Units">3,000 – 5,000 Units</option>
                    <option value="5,000 – 10,000 Units (Commercial Bulk)">5,000 – 10,000 Units (Bulk)</option>
                    <option value="10,000+ Units (Enterprise Run)">10,000+ Units (Enterprise)</option>
                  </select>
                </div>

                {/* Preferred Size */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Preferred Dimensions
                  </label>
                  <input
                    type="text"
                    value={formData.preferredSize}
                    onChange={(e) => setFormData({ ...formData, preferredSize: e.target.value })}
                    placeholder="e.g. 12x16 inches or A4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:border-amber-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Printing & File Upload */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Printing Required?
                  </label>
                  <select
                    value={formData.printingRequired}
                    onChange={(e) => setFormData({ ...formData, printingRequired: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:border-amber-600 focus:outline-none"
                  >
                    <option value="Yes, 1 Color">Yes, 1 Color Screen Print</option>
                    <option value="Yes, Multi-Color">Yes, Multi-Color Screen Print</option>
                    <option value="Full Colour Offset/Flexo">Full Colour Photographic / Flexo</option>
                    <option value="Plain / No Print">Plain / No Print (Fabric Only)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                    Upload Logo / Artwork (Optional)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,.pdf,.ai,.cdr"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full px-4 py-3 rounded-xl border border-dashed border-gray-300 hover:border-amber-600 text-xs font-semibold text-gray-700 hover:text-gray-950 bg-gray-50/50 hover:bg-gray-100 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-amber-600" />
                      <span className="truncate">
                        {fileUploadName ? fileUploadName : 'Click or Drag Logo / Design File'}
                      </span>
                    </button>
                    {fileUploadName && (
                      <button
                        type="button"
                        onClick={() => setFileUploadName('')}
                        className="p-3 text-xs text-red-500 hover:text-red-700"
                        title="Remove file"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Message / Custom Requirements */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1.5">
                  Message / Custom Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about desired fabric color, handle style, payload weight, or specific deadline..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-gray-50/50 focus:bg-white focus:border-amber-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Row */}
              <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Your requirements are sent directly to HM Bags management.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto gold-metallic-btn px-8 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Request My Quote</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
