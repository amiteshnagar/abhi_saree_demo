export const BUSINESS_INFO = {
  name: "Abhi Saree Collection",
  owner: "Shailu",
  address: "Near Railway Crossing, Abhi Computer, New Colony, Pachore, District Rajgarh, Madhya Pradesh, India, PIN 465683",
  addressQuery: "Near Railway Crossing, Abhi Computer, New Colony, Pachore, District Rajgarh, Madhya Pradesh 465683",
  whatsappNumber: "+91 93402 63875",
  whatsappDigits: "919340263875",
  instagramHandle: "@abhi_saree_collection",
  instagramUrl: "https://www.instagram.com/abhi_saree_collection/",
  hours: "Monday–Sunday, 8:00 AM–8:00 PM",
  currency: "₹"
};

export const CATEGORIES = [
  { id: 'all', label: 'All Collections' },
  { id: 'sarees', label: 'Sarees', count: 4 },
  { id: 'suits', label: 'Suits', count: 0 },
  { id: 'blouses', label: 'Blouses', count: 0 },
  { id: 'undergarments', label: 'Undergarments', count: 0 },
  { id: 'other', label: 'Other Collections', count: 0 }
];

// Curated reference products strictly according to instructions
export const SAMPLE_PRODUCTS = [
  {
    id: "sample-saree-1",
    name: "Royal Crimson Banarasi Saree",
    category: "sarees",
    price: 8499,
    isSample: true,
    contentStatus: "sample_reference",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "An opulent crimson Banarasi saree featuring intricate zari weaving throughout the pallu and body. Handpicked to represent timeless Indian bridal majesty.",
    attributes: {
      fabric: "Silk Blend with Fine Zari",
      color: "Royal Crimson & Gold",
      work: "Traditional Zari Brocade",
      occasion: "Bridal, Festive & Celebrations",
      blousePiece: "Included (unstitched)"
    }
  },
  {
    id: "sample-saree-2",
    name: "Golden Temple Border Saree",
    category: "sarees",
    price: 11999,
    isSample: true,
    contentStatus: "sample_reference",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Masterful architectural temple border work paired with rich gold motifs. Crafted for landmark family milestones and traditional Indian ceremonies.",
    attributes: {
      fabric: "Pure Kanjivaram-Style Woven Silk",
      color: "Heritage Mustard Gold & Maroon",
      work: "Korvai Temple Border & Rich Pallu",
      occasion: "Weddings & Traditional Pujas",
      blousePiece: "Included (unstitched)"
    }
  },
  {
    id: "sample-saree-3",
    name: "Blush Ivory Handwoven Saree",
    category: "sarees",
    price: 4250,
    isSample: true,
    contentStatus: "sample_reference",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Subtle elegance in serene blush ivory. Soft hand-feel with light decorative border work, offering graceful daytime poise and understated charm.",
    attributes: {
      fabric: "Chanderi / Fine Linen Silk Blend",
      color: "Blush Ivory & Subtle Rose Gold",
      work: "Fine Thread Weave with Zari Selvedge",
      occasion: "Day Celebrations & Receptions",
      blousePiece: "Included (unstitched)"
    }
  },
  {
    id: "sample-saree-4",
    name: "Midnight Maroon Embellished Saree",
    category: "sarees",
    price: 6800,
    isSample: true,
    contentStatus: "sample_reference",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Deep regal maroon silhouette adorned with graceful boutique sequin accents and fine floral bootis. Designed for evening grandeur and receptions.",
    attributes: {
      fabric: "Rich Georgette Silk",
      color: "Midnight Maroon",
      work: "Hand-embellished border and buta work",
      occasion: "Evening Gatherings, Sangeet & Receptions",
      blousePiece: "Included (unstitched)"
    }
  }
];