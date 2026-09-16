import { Product, Industry, ProcessStep, FAQItem, GalleryItem } from '../types';

export const COMPANY_INFO = {
  name: 'HM BAGS',
  tagline: 'Manufacturers of Non Woven & Shopping Bags',
  subheading: 'Premium Non-Woven & Shopping Bags Built Around Your Business',
  badge: 'QUALITY BAGS • TRUSTED BY ALL',
  
  // Leadership from Visiting Card
  leadership: [
    {
      name: 'HANISHA PANDAVA',
      designation: 'Managing Director',
      cell: '+91 96433 11777',
      cellRaw: '919643311777',
      role: 'Executive Management & Client Relations',
    },
    {
      name: 'P. ESWARA RAO',
      designation: 'General Manager',
      cell: '+91 92466 18635',
      cellRaw: '919246618635',
      role: 'Plant Operations & Production Dispatch',
    }
  ],

  // Direct Contact Details from Visiting Card
  address: {
    doorNo: 'D.No. 49-32-22/1',
    area: 'Ramakrishna Nagar, Sankaramatam Road',
    landmark: 'Akkayyapalem',
    city: 'Visakhapatnam',
    pincode: '530016',
    state: 'Andhra Pradesh',
    country: 'India',
    fullFormatted: 'D.No. 49-32-22/1, Ramakrishna Nagar, Sankaramatam Road, Akkayyapalem, Visakhapatnam - 530016, Andhra Pradesh'
  },

  contact: {
    primaryPhone: '+91 96433 11777',
    secondaryPhone: '+91 92466 18635',
    email: 'hmbags2026@gmail.com',
    instagram: 'hm_bags__',
    instagramUrl: 'https://instagram.com/hm_bags__',
    whatsappDefault: '919643311777',
    workingHours: 'Mon – Sat: 9:00 AM – 8:00 PM IST (Bulk Desk)',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Akkayyapalem+Visakhapatnam+Andhra+Pradesh'
  },

  // Editable Statistics Placeholders as instructed in Section 18
  metrics: [
    {
      label: 'Years of Experience',
      value: 'Established',
      sublabel: 'Dedicated Bag Manufacturing',
      note: '[YEARS OF EXPERIENCE: Editable in companyData.ts]'
    },
    {
      label: 'Business Clients',
      value: '500+',
      sublabel: 'Retailers, Stores & Brands',
      note: '[CLIENTS SERVED: Editable in companyData.ts]'
    },
    {
      label: 'Product Variants',
      value: '40+',
      sublabel: 'Colors, Sizes & Formats',
      note: '[PRODUCT VARIANTS: Editable in companyData.ts]'
    },
    {
      label: 'Production Capacity',
      value: 'Bulk Ready',
      sublabel: 'High Speed Ultrasonic Sealing',
      note: '[PRODUCTION CAPACITY: Editable in companyData.ts]'
    }
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: 'non-woven-shopping-bags',
    name: 'Non-Woven Shopping Bags',
    category: 'shopping',
    shortDescription: 'Heavy-duty, reusable shopping carry bags engineered with reinforced seams for everyday retail and supermarket operations.',
    tagline: 'The Industry Standard for Retail Packaging',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
    features: ['High tensile non-woven polypropylene', 'Reinforced gusset base', 'Water-resistant surface', '100% recyclable material'],
    typicalApplications: ['Departmental Stores', 'Supermarkets', 'Textile Showrooms', 'Hardware & Home Goods'],
    availableCustomization: ['Custom GSM thickness', 'Full-bleed single/multi-color screen or flexo printing', 'Custom dimensions & gusset depths'],
    printingOptions: ['Screen Printing (Up to 4 Colors)', 'Flexographic Continuous Print', 'Rotogravure Laminated'],
    handleOptions: ['Soft Loop Handle', 'D-Cut Integrated Handle', 'Extended Shoulder Strap'],
    gsmRange: 'Available based on customization requirements (Standard: 40 GSM – 120 GSM)',
    sizeOptions: 'Standard sizes from 10x12 inches to 20x24 inches or custom bespoke cuts',
    bulkInfo: 'Available for bulk commercial shipments with tailored dispatch timelines.',
    badge: 'Best Seller'
  },
  {
    id: 'd-cut-bags',
    name: 'D-Cut Non-Woven Bags',
    category: 'non-woven',
    shortDescription: 'Ergonomic punch-handle carry bags designed for swift dispensing, compact storage, and clean brand presentation.',
    tagline: 'Sleek, Economical & Fast-Moving',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    features: ['Precision die-cut oval handle', 'Compact flat folding', 'Ultrasonic side heat sealing', 'Uniform fabric density'],
    typicalApplications: ['Pharmacies & Clinics', 'Footwear Outlets', 'Optical Stores', 'Stationery & Bookstores'],
    availableCustomization: ['Bottom gusset or flat pouch styling', 'Vibrant solid dyed fabric colors', 'Single or dual-sided logo prints'],
    printingOptions: ['Single-Color Fast Drying Flexo', 'Precision High-Contrast Screen Print'],
    handleOptions: ['Reinforced D-Cut Oval', 'Standard Die-Punch'],
    gsmRange: 'Available based on customization requirements (Typical: 45 – 90 GSM)',
    sizeOptions: '8x10, 10x14, 12x16, 14x19, 16x22 inches or custom dimensioning',
    bulkInfo: 'High-speed automated die-cutting ensures timely delivery for recurring bulk orders.',
    badge: 'Popular'
  },
  {
    id: 'w-cut-bags',
    name: 'W-Cut / U-Cut Bags',
    category: 'non-woven',
    shortDescription: 'Classic grocery-style side handle carry bags featuring side expansion gussets for bulky produce and everyday items.',
    tagline: 'High Volume Grocery & Retail Essential',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80',
    features: ['Deep expanding side gussets', 'Comfortable double loop straps', 'Strong bottom seal load rating', 'Reusable & eco-friendly'],
    typicalApplications: ['Supermarkets & Hypermarkets', 'Fruit & Vegetable Markets', 'Wholesale Provisions', 'Takeout Counters'],
    availableCustomization: ['Custom handle length', 'Brand logo placement on front & back panels', 'Color matching to brand palette'],
    printingOptions: ['Continuous Roll Flexographic', 'Spot Screen Print'],
    handleOptions: ['Integrated W-Cut / Vest Style Loop'],
    gsmRange: 'Available based on customization requirements (Typical: 35 – 70 GSM)',
    sizeOptions: '9x18, 11x21, 13x24, 16x28 inches with standard gusset expansion',
    bulkInfo: 'High-yield packaging cartons designed for easy storage on retail checkout racks.',
    badge: 'High Capacity'
  },
  {
    id: 'loop-handle-bags',
    name: 'Loop Handle Bags',
    category: 'shopping',
    shortDescription: 'Premium retail bags with welded flexible loop handles providing maximum carrying comfort and elevated store prestige.',
    tagline: 'Elevated Aesthetics for Fashion & Lifestyle',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    features: ['Ultrasonically bonded loop handles', 'Square or fold-over top rim', 'Generous weight-bearing threshold', 'Sophisticated drape'],
    typicalApplications: ['Fashion & Apparel Boutiques', 'Electronics & Mobile Stores', 'Cosmetics Showrooms', 'Exhibition Giveaways'],
    availableCustomization: ['Contrasting handle colors', 'Metallic gold/silver foil highlights', 'Bottom box board insertion'],
    printingOptions: ['Multi-Color Screen Print', 'Photographic BOPP Lamination', 'Metallic Inks'],
    handleOptions: ['Soft Poly Loop', 'Rigid Plastic Clip Handle', 'Woven Ribbon Tape'],
    gsmRange: 'Available based on customization requirements (Typical: 70 – 120 GSM)',
    sizeOptions: '12x14x4, 14x16x5, 16x18x5 inches or tailored to product boxes',
    bulkInfo: 'Manufactured with automated loop attaching systems for consistent bonding strength.',
    badge: 'Premium Finish'
  },
  {
    id: 'box-bags',
    name: 'Box Bags (Ultrasonic Sealed)',
    category: 'specialty',
    shortDescription: 'Structured three-dimensional cubic bags that stand upright on surfaces, ideal for apparel boxes, gift hampers, and sweet cartons.',
    tagline: 'Stand-Up Structure with Maximum Interior Volume',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
    features: ['Full bottom and side gussets', 'Rigid stand-up architectural form', 'Seamless ultrasonic ultrasonic welding', 'Wrinkle-resistant panels'],
    typicalApplications: ['Sweet & Confectionery Shops', 'Cake & Bakery Boxes', 'Shoe Box Packaging', 'Corporate Hamper Packaging'],
    availableCustomization: ['Custom base width & height matching box dimensions', 'Zipper closure or velcro snap options', 'Handle length matching'],
    printingOptions: ['4-Side Continuous Flexo', 'Custom Spot Color Screen'],
    handleOptions: ['Dual Soft Loop', 'Reinforced Riveted Handle', 'Die-Cut Integrated'],
    gsmRange: 'Available based on customization requirements (Typical: 80 – 130 GSM)',
    sizeOptions: 'Tailored specifically to match client carton or container measurements',
    bulkInfo: 'Flawless stackable construction reduces carton crushing during transit.',
    badge: 'Industrial Grade'
  },
  {
    id: 'laminated-bopp-bags',
    name: 'Laminated BOPP Bags',
    category: 'laminated',
    shortDescription: 'High-gloss or matte finished photographic grade bags with water-repellent film lamination for vivid, multi-color marketing graphics.',
    tagline: 'Photographic Quality & All-Weather Durability',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80',
    features: ['Gloss or velvet matte BOPP film layer', 'Impervious to rain, grease, and dust', 'Ultra-vivid high DPI photographic printing', 'Exceptional reuse lifespan'],
    typicalApplications: ['Seeds & Fertilizer Brands', 'Pet Food Packaging', 'Consumer Electronics Brands', 'Exclusive Retail Brand Campaigns'],
    availableCustomization: ['Spot UV varnish accents', 'Matte/Gloss combination finishes', 'Internal lining for heavy bulk commodities'],
    printingOptions: ['Multi-Cylinder Rotogravure Photographic (Up to 8 Colors)'],
    handleOptions: ['Stitched Webbing Tape', 'Heavy Duty Loop Handle'],
    gsmRange: 'Available based on customization requirements (Composite: 90 – 160 GSM)',
    sizeOptions: 'Custom cylinder-matched lengths and gussets for precise capacity',
    bulkInfo: 'Recommended for corporate campaign runs and high-volume industrial packaging.',
    badge: 'Photo Quality'
  },
  {
    id: 'custom-printed-bags',
    name: 'Custom Printed Brand Bags',
    category: 'custom-printed',
    shortDescription: 'Tailor-made branded carry bags printed with your exact logo, typography, contact details, and marketing messages.',
    tagline: 'Your Walking Billboard on Every City Street',
    image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=900&q=80',
    features: ['Exact Pantone / brand color ink compounding', 'Crisp micro-detail line reproduction', 'Non-fading industrial pigments', 'Dual-side or 4-side branding'],
    typicalApplications: ['Brand Launch Campaigns', 'Chain Stores & Franchises', 'Jewelry Showrooms', 'Exhibitions & Trade Fairs'],
    availableCustomization: ['Custom QR code integration', 'Store branch address listing', 'Social media handle inclusion'],
    printingOptions: ['Manual & Semi-Automatic Screen Printing', 'High-Speed Inline Flexo'],
    handleOptions: ['Matching or Contrast Color Loops', 'D-Cut Handle'],
    gsmRange: 'Available based on customization requirements',
    sizeOptions: 'All sizes from micro pouches (6x8") to mega garment sacks (24x30")',
    bulkInfo: 'Digital proofs provided before bulk run cylinders or screens are engraved.',
    badge: 'Brand Centric'
  },
  {
    id: 'promotional-event-bags',
    name: 'Promotional & Event Carry Bags',
    category: 'specialty',
    shortDescription: 'Cost-effective, highly visible carry bags manufactured for conferences, trade expos, product launches, and seasonal festivities.',
    tagline: 'High Volume Event Visibility & Distribution',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    features: ['Lightweight yet strong load threshold', 'Rapid turnaround manufacturing', 'Broad print canvas area', 'Eco-friendly disposal/reuse profile'],
    typicalApplications: ['Government & Corporate Summits', 'College Fests & Educational Kits', 'Festival Gift Packs (Diwali, New Year)', 'Hospitality Welcome Packs'],
    availableCustomization: ['Event sponsor logo placement', 'Dual handle styles', 'Special event color themes'],
    printingOptions: ['High-Volume Fast Screen', 'Rotary Flexo'],
    handleOptions: ['Soft Loop', 'D-Cut', 'Rope Cord'],
    gsmRange: 'Available based on customization requirements (Typical: 50 – 90 GSM)',
    sizeOptions: 'A4 document format, 12x15", 14x18" or customized dimensions',
    bulkInfo: 'Fast dispatch scheduling available for upcoming scheduled event dates.',
    badge: 'Event Ready'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'retail',
    name: 'Retail & Departmental',
    tagline: 'Keep your business visible long after the customer leaves the counter.',
    description: 'Sturdy, reusable shopping bags engineered for varied merchandise weights with expansive front panels for bold store branding.',
    recommendedBags: ['Loop Handle Bags', 'Non-Woven Shopping Bags', 'Box Bags'],
    iconName: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'supermarkets',
    name: 'Supermarkets & Groceries',
    tagline: 'High-capacity, cost-effective carry bags designed for heavy daily grocery volumes.',
    description: 'Engineered with deep side gussets and reinforced thermal seals to support canned goods, produce, and household cartons safely.',
    recommendedBags: ['W-Cut Bags', 'D-Cut Bags', 'Heavy Duty Loop Bags'],
    iconName: 'Store',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'fashion',
    name: 'Fashion & Apparel',
    tagline: 'Elevate your clothing line with boutique-grade textured bags that match your brand prestige.',
    description: 'Rich fabric textures, elegant handles, and clean screen printing give your garments the premium presentation they deserve.',
    recommendedBags: ['Box Bags', 'Loop Handle Bags', 'Laminated BOPP Bags'],
    iconName: 'Shirt',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'pharmacies',
    name: 'Pharmacies & Healthcare',
    tagline: 'Hygienic, compact, and tear-resistant carry bags for medical and wellness supplies.',
    description: 'Convenient D-cut formats with clear printing for emergency numbers, doctor directories, and pharmacy contact details.',
    recommendedBags: ['D-Cut Bags', 'Compact Non-Woven Pouches'],
    iconName: 'Cross',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'restaurants',
    name: 'Restaurants & Confectionery',
    tagline: 'Flat-bottom box bags tailored to keep food containers and sweet boxes level during transit.',
    description: 'Engineered with wide square bases that prevent curry spillages, cake tipping, and mithai carton shifting during customer pickup.',
    recommendedBags: ['Box Bags', 'Square Bottom Loop Bags'],
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'hospitality',
    name: 'Hotels & Corporate Events',
    tagline: 'Professional welcome kits and conference bags that establish instant corporate trust.',
    description: 'Crisp, distinguished bags suited for seminar delegate packages, hotel laundry collections, and VIP welcome amenities.',
    recommendedBags: ['Promotional Event Bags', 'Custom Printed Brand Bags'],
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Requirement',
    subtitle: 'Consultation & Specification Mapping',
    description: 'We understand your exact payload requirements, intended carry weight, store aesthetics, and budget constraints to specify the ideal bag profile.',
    details: ['Size & gusset dimensioning', 'Target weight threshold review', 'Quantity tier & timeline planning'],
    iconName: 'FileText'
  },
  {
    stepNumber: '02',
    title: 'Material Selection',
    subtitle: 'Fabric GSM & Color Formulation',
    description: 'Selection of 100% virgin polypropylene non-woven fabric in your chosen shade, gauge thickness (GSM), and finish.',
    details: ['Virgin polypropylene non-woven grades', '30+ vibrant dyed fabric color swatches', 'Uniform fabric density testing'],
    iconName: 'Layers'
  },
  {
    stepNumber: '03',
    title: 'Design & Printing',
    subtitle: 'Artwork Proofing & Ink Compounding',
    description: 'Your logo and artwork are formatted for sharp cylinder engraving or screen preparation with high-contrast, durable inks.',
    details: ['Digital artwork proof sign-off', 'Single or multi-color ink matching', 'Precision plate/screen alignment'],
    iconName: 'Printer'
  },
  {
    stepNumber: '04',
    title: 'Manufacturing',
    subtitle: 'Ultrasonic Sealing & High-Speed Assembly',
    description: 'Automated bag conversion using ultrasonic thermal bonding technology for seamless, fray-free joins and heavy handle retention.',
    details: ['Ultrasonic heat-fused side seams', 'Automated handle welding or punch cut', 'Clean automated bottom crease forming'],
    iconName: 'Cog'
  },
  {
    stepNumber: '05',
    title: 'Quality Check',
    subtitle: 'Tensile & Aesthetic Inspection',
    description: 'Every production batch undergoes manual and stress sampling to guarantee handle bonding strength and ink adhesion integrity.',
    details: ['Handle tear & tensile stress checks', 'Ink rub & bleed verification', 'Dimensional tolerance checks'],
    iconName: 'CheckCircle2'
  },
  {
    stepNumber: '06',
    title: 'Packing & Dispatch',
    subtitle: 'Secure Baling & Logistics Handover',
    description: 'Bags are bundled in moisture-resistant master cartons or compressed bales for safe overland transport straight to your warehouse.',
    details: ['Defect-free count tallying', 'Moisture-shield master wrap packaging', 'Prompt dispatch to Visakhapatnam & Pan-India'],
    iconName: 'Truck'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'ordering',
    question: 'What types of bags does HM Bags manufacture?',
    answer: 'HM Bags manufactures a comprehensive range of non-woven and shopping bags including Non-Woven Carry Bags, D-Cut Bags, W-Cut / U-Cut Bags, Loop Handle Bags, Box Bags with wide bottom gussets, Laminated BOPP Photographic Bags, and customized promotional event bags.'
  },
  {
    id: 'faq-2',
    category: 'customization',
    question: 'Can I customize the bag size, color, and fabric thickness (GSM)?',
    answer: 'Yes, full customization is available. You can specify exact bag dimensions (height, width, and side/bottom gusset depth), choose from over 30 vibrant fabric color shades, and select the optimal fabric thickness (GSM) suited for your specific product weight requirements.'
  },
  {
    id: 'faq-3',
    category: 'customization',
    question: 'Can you print our company logo and store contact details?',
    answer: 'Absolutely. We specialize in custom brand printing. We offer single-color and multi-color precision screen printing, high-speed inline flexographic printing, and full photographic rotogravure lamination. We print your brand logo, tagline, branch addresses, and QR codes.'
  },
  {
    id: 'faq-4',
    category: 'ordering',
    question: 'Do you accept bulk orders and what are the minimum order quantities?',
    answer: 'Yes, HM Bags is a direct manufacturing unit geared for bulk production. Minimum order quantities vary depending on the bag format, whether plain or custom printed, and the chosen printing method. Please share your required quantity in our quotation form, and our sales team will confirm feasibility.'
  },
  {
    id: 'faq-5',
    category: 'ordering',
    question: 'How can I request a quotation?',
    answer: 'You can request a quote directly through our website quotation form, message us directly on WhatsApp (+91 96433 11777 / +91 92466 18635), or email your specifications to hmbags2026@gmail.com. We typically respond with commercial quotations within 24 business hours.'
  },
  {
    id: 'faq-6',
    category: 'customization',
    question: 'Can I provide my own graphic design or logo artwork?',
    answer: 'Yes. You can upload or email your existing logo and vector artwork files (PDF, AI, CDR, PNG, or JPG). Before starting production, our pre-press team creates a digital proof layout showing exactly how your bag will look for your final approval.'
  },
  {
    id: 'faq-7',
    category: 'manufacturing',
    question: 'What information is required to get an accurate quotation?',
    answer: 'To provide the most accurate pricing, please let us know: (1) Preferred bag format (e.g. D-Cut, Loop Handle, Box Bag), (2) Approximate dimensions or sample product to be packed, (3) Fabric color, (4) Number of printing colors and sides, and (5) Approximate order quantity.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Custom Screen Printed Retail Bag',
    category: 'Custom Printing',
    description: 'Two-color high-contrast gold & white ink on midnight charcoal non-woven fabric.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
    specs: '75 GSM • Loop Handle • Screen Printed'
  },
  {
    id: 'gal-2',
    title: 'Apparel Boutique Loop Handle Bag',
    category: 'Products',
    description: 'Ultra-durable welded loop handle bag designed for luxury clothing and apparel brands.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    specs: '80 GSM • Soft Loop • High Gloss Print'
  },
  {
    id: 'gal-3',
    title: 'Ultrasonic Production Line',
    category: 'Manufacturing',
    description: 'High-speed automated ultrasonic sealing line fusing seams with high tensile integrity.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    specs: 'Automated Ultrasonic Sealing Line'
  },
  {
    id: 'gal-4',
    title: 'Structured Box Bag with Base Gusset',
    category: 'Products',
    description: 'Flat-bottom box bag format holding sweet cartons and shoeboxes with zero tilt.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
    specs: '90 GSM • Wide Base Gusset • Box Form'
  },
  {
    id: 'gal-5',
    title: 'Bulk Finished Bales for Dispatch',
    category: 'Packaging',
    description: 'Carefully counted and moisture-shield wrapped master bundles ready for freight dispatch.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    specs: 'Master Carton Packing • Moisture Shielded'
  },
  {
    id: 'gal-6',
    title: 'Multi-Color Event & Summit Bags',
    category: 'Completed Orders',
    description: 'Special conference delegate carry bags delivered on schedule for corporate symposium.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    specs: '60 GSM • Dual Side Printed • D-Cut'
  }
];

export const CONFIGURATOR_OPTIONS = {
  bagTypes: [
    { id: 'd-cut', name: 'D-Cut Bag', baseMultiplier: 1.0, previewShape: 'd-cut' },
    { id: 'loop-handle', name: 'Loop Handle Bag', baseMultiplier: 1.25, previewShape: 'loop' },
    { id: 'box-bag', name: 'Box Bag (3D Gusset)', baseMultiplier: 1.45, previewShape: 'box' },
    { id: 'w-cut', name: 'W-Cut Grocery Bag', baseMultiplier: 0.9, previewShape: 'w-cut' }
  ],
  colors: [
    { id: 'charcoal', name: 'Obsidian Charcoal', hex: '#181A20', textColor: '#FFFFFF' },
    { id: 'vibrant-gold', name: 'Imperial Gold', hex: '#F59E0B', textColor: '#111827' },
    { id: 'royal-blue', name: 'Royal Navy Blue', hex: '#1E3A8A', textColor: '#FFFFFF' },
    { id: 'ruby-red', name: 'Crimson Red', hex: '#B91C1C', textColor: '#FFFFFF' },
    { id: 'emerald-green', name: 'Emerald Green', hex: '#047857', textColor: '#FFFFFF' },
    { id: 'warm-ivory', name: 'Warm Ivory / Cream', hex: '#FEF3C7', textColor: '#1F2937' },
    { id: 'pure-black', name: 'Classic Black', hex: '#0F0F10', textColor: '#F59E0B' },
    { id: 'slate-grey', name: 'Industrial Slate Grey', hex: '#4B5563', textColor: '#FFFFFF' }
  ],
  handleTypes: [
    { id: 'matching-loop', name: 'Matching Color Loop Handle' },
    { id: 'gold-contrast-loop', name: 'Vibrant Metallic Gold Loop' },
    { id: 'black-contrast-loop', name: 'Black Contrast Loop' },
    { id: 'die-cut', name: 'Die-Cut Oval Handle (Punch)' }
  ],
  printOptions: [
    'Single Side (Logo + Contact)',
    'Double Side (Logo Both Sides)',
    'Full Gusset + Dual Side Branding',
    'Plain (No Printing)'
  ],
  quantityTiers: [
    '500 – 1,000 Units (Starter Run)',
    '1,000 – 3,000 Units (Standard)',
    '5,000 – 10,000 Units (Commercial Bulk)',
    '10,000+ Units (Enterprise Bulk Supply)'
  ],
  sizes: [
    'Compact (8" x 10" - Small items/Pharma)',
    'Medium (12" x 15" - Apparel/Retail)',
    'Large (16" x 18" - Departmental/Shoe)',
    'Jumbo (20" x 22" - Winterwear/Supermarket)'
  ]
};
