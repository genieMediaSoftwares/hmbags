export interface Product {
  id: string;
  name: string;
  category: 'non-woven' | 'shopping' | 'custom-printed' | 'laminated' | 'specialty';
  shortDescription: string;
  tagline: string;
  image: string;
  features: string[];
  typicalApplications: string[];
  availableCustomization: string[];
  printingOptions: string[];
  handleOptions: string[];
  gsmRange: string;
  sizeOptions: string;
  bulkInfo: string;
  badge?: string;
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  recommendedBags: string[];
  iconName: string;
  image: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ordering' | 'manufacturing' | 'customization' | 'delivery';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Products' | 'Custom Printing' | 'Manufacturing' | 'Packaging' | 'Completed Orders';
  description: string;
  image: string;
  specs?: string;
}

export interface BagConfigState {
  bagType: string;
  bagColor: string;
  handleType: string;
  printSides: 'Single Side' | 'Double Side' | 'Full Gusset Printing' | 'No Print (Plain)';
  quantityTier: string;
  customSize: string;
  gsmThickness: string;
  logoDataUrl: string | null;
  logoFileName: string | null;
  clientBrandName: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  bagType: string;
  quantity: string;
  preferredSize: string;
  printingRequired: 'Yes, 1 Color' | 'Yes, Multi-Color' | 'Full Colour Offset/Flexo' | 'Plain / No Print';
  gsm: string;
  message: string;
  designFileUrl?: string;
  designFileName?: string;
}
