// lib/visas-data.ts

export interface Visa {
  id: string;
  country: string;
  flag: string;
  processingTime: string;
  validity: string;
  type: string;
  price: string;
  requirements: string[];
  description: string;
}

export const visas: Visa[] = [
  {
    id: "usa",
    country: "United States",
    flag: "🇺🇸",
    processingTime: "15–30 days",
    validity: "10 years",
    type: "B1/B2 Tourist",
    price: "AED 800",
    description: "Full embassy-ready documentation, DS-160 form assistance, and interview preparation.",
    requirements: ["Valid passport (6+ months)", "Bank statements", "Employment letter", "Photographs", "Travel itinerary"],
  },
  {
    id: "schengen",
    country: "Schengen (Europe)",
    flag: "🇪🇺",
    processingTime: "10–15 days",
    validity: "90 days / 2 years",
    type: "Short-Stay C Visa",
    price: "AED 500",
    description: "Access to 26 European countries with a single visa. We handle the complete VFS Global submission.",
    requirements: ["Valid passport", "Travel insurance", "Hotel bookings", "Bank statements", "Return flight proof"],
  },
  {
    id: "new-zealand",
    country: "New Zealand",
    flag: "🇳🇿",
    processingTime: "7–10 days",
    validity: "Multiple entries",
    type: "Visitor Visa",
    price: "AED 450",
    description: "End-to-end online application support for one of the world's most beautiful destinations.",
    requirements: ["Valid passport", "Character declaration", "Medical declaration", "Proof of funds", "Travel plans"],
  },
  {
    id: "armenia",
    country: "Armenia",
    flag: "🇦🇲",
    processingTime: "On Arrival / 3 days",
    validity: "120 days",
    type: "Tourist Visa",
    price: "Free–AED 200",
    description: "UAE passport holders enter visa-free. Other nationalities receive expert e-visa processing.",
    requirements: ["Valid passport", "Return ticket", "Proof of accommodation"],
  },
  {
    id: "azerbaijan",
    country: "Azerbaijan",
    flag: "🇦🇿",
    processingTime: "3–5 days",
    validity: "30 days",
    type: "e-Visa",
    price: "AED 150",
    description: "Fast and straightforward e-ASAN system application for the Land of Fire.",
    requirements: ["Valid passport", "Passport photo", "Travel dates", "Hotel confirmation"],
  },
  {
    id: "albania",
    country: "Albania",
    flag: "🇦🇱",
    processingTime: "Visa-Free",
    validity: "90 days",
    type: "Visa-Free Entry",
    price: "Free",
    description: "UAE residents enjoy visa-free entry to Albania — the Mediterranean's best-kept secret.",
    requirements: ["UAE residence visa or passport", "Return ticket", "Sufficient funds proof"],
  },
  {
    id: "uzbekistan",
    country: "Uzbekistan",
    flag: "🇺🇿",
    processingTime: "2–3 days",
    validity: "30 days",
    type: "e-Visa",
    price: "AED 100",
    description: "Quick e-visa to explore the Silk Road cities of Samarkand and Bukhara.",
    requirements: ["Valid passport", "Passport photo", "Travel itinerary"],
  },
  {
    id: "georgia",
    country: "Georgia",
    flag: "🇬🇪",
    processingTime: "Visa-Free",
    validity: "365 days",
    type: "Visa-Free Entry",
    price: "Free",
    description: "One of the most generous visa policies in the world — UAE residents stay up to 1 year!",
    requirements: ["UAE residence visa or passport", "Return ticket"],
  },
];
