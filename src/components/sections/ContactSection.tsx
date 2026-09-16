import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { HMBagsLogo } from '../common/HMBagsLogo';
import { Phone, Mail, MapPin, Instagram, MessageSquare, Clock, ArrowRight, ExternalLink, ShieldCheck, User } from 'lucide-react';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0C0E14] text-white border-b border-[#F59E0B]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#181C25] border border-[#F59E0B]/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest">
            Plant & Sales Head Office
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Let's Manufacture Something Great.
          </h2>

          <p className="text-base text-gray-400 font-sans-clean max-w-2xl mx-auto">
            Connect directly with HM Bags leadership in Visakhapatnam to discuss bag specifications, sample physical swatches, and schedule bulk dispatches.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Leadership & Visiting Card Contacts (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Leadership Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPANY_INFO.leadership.map((leader, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#141822] border border-gray-800 hover:border-[#F59E0B]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B]">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-wide">
                          {leader.name}
                        </h4>
                        <p className="text-xs text-[#F59E0B] font-semibold">
                          {leader.designation}
                        </p>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-400">{leader.role}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
                    <a
                      href={`tel:${leader.cellRaw}`}
                      className="text-xs text-amber-300 hover:text-white font-mono flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{leader.cell}</span>
                    </a>
                    <a
                      href={`tel:${leader.cellRaw}`}
                      className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-[10px] text-gray-300 font-bold uppercase"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Address & Operational Info Card */}
            <div className="p-6 rounded-2xl bg-[#141822] border border-gray-800 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Manufacturing Facility & Sales Office
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                    {COMPANY_INFO.address.fullFormatted}
                  </p>
                  <a
                    href={COMPANY_INFO.contact.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#F59E0B] hover:text-amber-200 mt-2 font-semibold transition-colors"
                  >
                    <span>View Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>{COMPANY_INFO.contact.workingHours}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps & Direct Contact Action Box (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Visual Location Frame / Map Placeholder with Directions */}
            <div className="rounded-2xl overflow-hidden bg-[#141822] border border-gray-800 relative flex-1 min-h-[260px] flex flex-col justify-between p-6">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#F59E0B] uppercase tracking-widest">
                    Visakhapatnam Operational Hub
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Visakhapatnam, Andhra Pradesh
                </h3>
                <p className="text-xs text-gray-400">
                  Sankaramatam Road, Ramakrishna Nagar, Akkayyapalem. Strategically located for swift freight transport across coastal AP and national highways.
                </p>
              </div>

              {/* Styled Interactive Map Link Card */}
              <div className="my-4 p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-amber-200">
                  <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                  <span className="font-semibold">B2B Sample Inspections Welcomed</span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Clients are invited to examine material GSM gauges, ultrasonic welds, and sample color swatches in person.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-gray-800">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappDefault}?text=${encodeURIComponent(
                    'Hello HM Bags, I would like to inquire about bag manufacturing.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Us on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="w-full gold-metallic-btn py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Submit Detailed Bulk Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
