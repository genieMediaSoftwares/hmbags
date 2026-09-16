import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCTS } from '../../data/companyData';
import { Download, FileText, ArrowRight, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';

interface CatalogueSectionProps {
  onRequestQuote: () => void;
}

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({ onRequestQuote }) => {
  const [showSpecSheet, setShowSpecSheet] = useState(false);

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <section className="py-20 md:py-24 bg-[#F8F9FA] text-gray-900 border-b border-gray-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[#B45309] text-[11px] font-bold uppercase tracking-widest">
            B2B Specification Guide
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 font-heading tracking-tight">
            Looking for the Right Bag for Your Business?
          </h2>

          <p className="text-base text-gray-600 font-sans-clean leading-relaxed">
            Explore our complete product range, GSM density charts, standard dimensions, and printing capabilities in our official digital catalog.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
          <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold text-gray-900">Dimension Matrices</p>
              <p className="text-gray-500">8"x10" to 20"x24" size guides</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold text-gray-900">GSM Material Guide</p>
              <p className="text-gray-500">Load rating & fabric thickness</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold text-gray-900">Direct Plant Contacts</p>
              <p className="text-gray-500">MD & GM phone numbers</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setShowSpecSheet(true)}
            className="px-6 py-3.5 rounded-xl bg-gray-950 hover:bg-gray-800 text-white text-xs sm:text-sm font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-md transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#F59E0B]" />
            <span>View Digital Catalogue / Spec Sheet</span>
          </button>

          <button
            onClick={onRequestQuote}
            className="gold-metallic-btn px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Structured note for PDF replacement as required by prompt #20 */}
        <p className="text-[11px] text-gray-700 italic">
          * Connected to HM Bags dynamic specification viewer. A printable PDF can be downloaded or printed directly from the viewer.
        </p>

      </div>

      {/* Digital Specification Sheet Modal */}
      {showSpecSheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white text-gray-900 rounded-2xl shadow-2xl p-6 md:p-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B45309]">
                  HM BAGS • VISAKHAPATNAM PLANT
                </span>
                <h3 className="text-xl font-bold text-gray-950 font-heading">
                  Non-Woven & Shopping Bag Product Catalogue
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintOrDownload}
                  className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print / Save PDF
                </button>
                <button
                  onClick={() => setShowSpecSheet(false)}
                  className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Spec Table */}
            <div className="py-6 space-y-6">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                <div>
                  <p className="font-bold">Company: {COMPANY_INFO.name}</p>
                  <p>Managing Director: HANISHA PANDAVA (Cell: 96433 11777)</p>
                  <p>General Manager: P. ESWARA RAO (Cell: 92466 18635)</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-gray-600">Location: Visakhapatnam-16, AP</p>
                  <p className="font-mono text-gray-600">Email: {COMPANY_INFO.contact.email}</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-gray-200">
                  <thead className="bg-gray-100 text-gray-800 font-bold border-b border-gray-200 uppercase">
                    <tr>
                      <th className="p-3">Product Name</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Standard Sizes</th>
                      <th className="p-3">GSM Range</th>
                      <th className="p-3">Typical Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {PRODUCTS.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-gray-950">{p.name}</td>
                        <td className="p-3 uppercase text-gray-600 font-mono text-[10px]">{p.category}</td>
                        <td className="p-3 text-gray-600">{p.sizeOptions}</td>
                        <td className="p-3 text-gray-600">{p.gsmRange}</td>
                        <td className="p-3 text-gray-600">{p.typicalApplications.slice(0, 2).join(', ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 space-y-1">
                <p className="font-bold text-gray-900">Customization & Commercial Terms:</p>
                <p>• Custom colors available with standard MOQ guidelines.</p>
                <p>• Cylinder engraving & screen charges apply for custom brand artwork sign-offs.</p>
                <p>• Delivery across Visakhapatnam, Andhra Pradesh, and overland freight throughout India.</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-500">
                Official HM Bags Product Spec Reference
              </span>
              <button
                onClick={() => {
                  setShowSpecSheet(false);
                  onRequestQuote();
                }}
                className="gold-metallic-btn px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
              >
                Inquire With Specifications
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
