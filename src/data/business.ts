/**
 * Centralized Business Configuration for Doppio Cafe & Studio
 * Patia, Bhubaneswar, Odisha, India.
 *
 * All public-facing statements are audited against verified Google Maps data,
 * official social listings, and photographic records.
 */

export interface BusinessConfig {
  verified: {
    name: string;
    brandWordmark: string;
    subtitle: string;
    address: {
      plot: string;
      street: string;
      locality: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      landmark: string;
      full: string;
    };
    coordinates: {
      lat: number;
      lng: number;
    };
    contact: {
      phone: string;
      phoneDisplay: string;
      whatsappNumber: string; // E.164 digits without +
      email?: string;
    };
    hours: {
      display: string;
      days: string;
      openHour: number; // 24-hr format (10 = 10 AM)
      closeHour: number; // 24-hr format (22 = 10 PM)
      lastOrderHour: number; // 21.5 = 9:30 PM
      timezone: string;
      utcOffsetMinutes: number; // +330 for IST
    };
    social: {
      instagramHandle: string;
      instagramUrl: string;
      googleMapsUrl: string;
      googleMapsEmbedUrl: string;
      websiteUrl: string;
    };
    pricing: {
      averageForTwo: string;
      currency: string;
      currencySymbol: string;
    };
    tagline: string;
    heroHeadline: string;
    heroSubhead: string;
    spaces: Array<{
      name: string;
      description: string;
      setting: 'outdoor' | 'indoor';
    }>;
  };
  pendingOwnerConfirmation: {
    exactFoundingDate?: string;
    wifiDetails?: string;
    petPolicyOutdoor?: string;
    parkingCapacity?: string;
    specialDietaryNotes?: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  verified: {
    name: "Doppio Cafe & Studio",
    brandWordmark: "DOPPIO",
    subtitle: "Cafe & Studio",
    address: {
      plot: "Plot 3",
      street: "Infocity Avenue",
      locality: "Patia",
      city: "Bhubaneswar",
      state: "Odisha",
      postalCode: "751024",
      country: "India",
      landmark: "Near Infocity Square & Aangan Convention, Patia Tech Hub",
      full: "Plot 3, Infocity Avenue, Patia, Bhubaneswar, Odisha 751024, India"
    },
    coordinates: {
      lat: 20.3430495,
      lng: 85.8097024
    },
    contact: {
      phone: "+917440024446",
      phoneDisplay: "+91 74400 24446",
      whatsappNumber: "917440024446",
      email: "connect@doppiocafe.in"
    },
    hours: {
      display: "10:00 AM – 10:00 PM",
      days: "Every Day (Monday – Sunday)",
      openHour: 10,
      closeHour: 22,
      lastOrderHour: 21.5, // 9:30 PM
      timezone: "Asia/Kolkata",
      utcOffsetMinutes: 330 // +5:30
    },
    social: {
      instagramHandle: "@doppio_coffee_studio",
      instagramUrl: "https://www.instagram.com/doppio_coffee_studio/",
      googleMapsUrl: "https://www.google.com/maps/place/Doppio+Cafe+%26+Studio/@20.3430495,85.8097024,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909ea639fe209:0xaa162841f60bca2d!8m2!3d20.3430495!4d85.8097024!16s%2Fg%2F11j2y_4lf7",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.9653636290853!2d85.80712747596859!3d20.343049511019685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ea639fe209%3A0xaa162841f60bca2d!2sDoppio%20Cafe%20%26%20Studio!5e0!3m2!1sen!2sin!4v1730248000000!5m2!1sen!2sin",
      websiteUrl: "https://doppiocafe-beta.vercel.app/"
    },
    pricing: {
      averageForTwo: "₹1,000 for two approx.",
      currency: "INR",
      currencySymbol: "₹"
    },
    tagline: "Good Food, Great Coffee, Greenery Overhead and Cozy Conversations — Only at Cafe Doppio",
    heroHeadline: "Your Everyday Escape, Perfectly Brewed.",
    heroSubhead: "Good coffee, beautiful spaces, and memorable moments. Welcome to Doppio Cafe & Studio.",
    spaces: [
      {
        name: "Botanical Outdoor Courtyard",
        description: "Open-air patio shaded by living trees, climbing bougainvillea, and warm evening globe lanterns.",
        setting: "outdoor"
      },
      {
        name: "The Honeycomb Lounge",
        description: "Air-conditioned interior with custom geometric honeycomb timber ceiling, terrazzo dining tables, and comfortable seating.",
        setting: "indoor"
      },
      {
        name: "The Studio Book Nook",
        description: "Curated literary corner featuring novels, art pottery, and creative studio ambiance.",
        setting: "indoor"
      }
    ]
  },
  pendingOwnerConfirmation: {
    exactFoundingDate: "To be verified with café owner (easel board references 6+ years community presence)",
    wifiDetails: "Guest Wi-Fi provided on premise (confirm network credentials with staff)",
    petPolicyOutdoor: "Outdoor patio accommodating pets subject to guest comfort (confirm pet guidelines with owner)",
    parkingCapacity: "Street-side parking on Infocity Avenue (confirm dedicated bays with owner)",
    specialDietaryNotes: "Vegetarian, Jain-friendly modifications and dairy alternatives (confirm kitchen handling with chef)"
  }
};

// Backwards-compatible export mapping for existing components
export const BUSINESS_INFO = {
  name: BUSINESS_CONFIG.verified.name,
  address: BUSINESS_CONFIG.verified.address.full,
  landmark: BUSINESS_CONFIG.verified.address.landmark,
  phone: BUSINESS_CONFIG.verified.contact.phone,
  phoneDisplay: BUSINESS_CONFIG.verified.contact.phoneDisplay,
  whatsappNumber: BUSINESS_CONFIG.verified.contact.whatsappNumber,
  email: BUSINESS_CONFIG.verified.contact.email,
  instagram: BUSINESS_CONFIG.verified.social.instagramUrl,
  instagramHandle: BUSINESS_CONFIG.verified.social.instagramHandle,
  googleMapsUrl: BUSINESS_CONFIG.verified.social.googleMapsUrl,
  googleMapsEmbed: BUSINESS_CONFIG.verified.social.googleMapsEmbedUrl,
  coordinates: BUSINESS_CONFIG.verified.coordinates,
  openingHours: BUSINESS_CONFIG.verified.hours,
  pricing: BUSINESS_CONFIG.verified.pricing.averageForTwo,
  tagline: BUSINESS_CONFIG.verified.tagline,
  heroHeadline: BUSINESS_CONFIG.verified.heroHeadline,
  heroSubhead: BUSINESS_CONFIG.verified.heroSubhead
};
