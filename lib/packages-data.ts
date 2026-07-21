// lib/packages-data.ts

export interface PackageDay {
  day: number;
  title: string;
  description: string;
}

export interface Package {
  slug: string;
  name: string;
  prefix: string;
  tagline: string;
  destination: string;
  country: string;
  duration: string;
  nights: number;
  days: number;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  groupSize: string;
  image: string;
  gallery: string[];
  badge: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: PackageDay[];
  faqs: { q: string; a: string }[];
}

export const packages: Package[] = [
  {
    slug: "unforgettable-uzbekistan",
    name: "Unforgettable Uzbekistan",
    prefix: "Unforgettable",
    tagline: "Walk the ancient Silk Road legacy & vibrant bazaars",
    destination: "Tashkent & Samarkand",
    country: "Uzbekistan",
    duration: "3 Nights / 4 Days",
    nights: 3,
    days: 4,
    price: 1699,
    currency: "AED",
    rating: 4.9,
    reviewCount: 87,
    groupSize: "2–15",
    image: "/packages/uzbekistan.png",
    gallery: [
      "/packages/uzbekistan.png",
      "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
      "https://images.unsplash.com/photo-1626958390897-b45d2e96e97f?w=800&q=80",
    ],
    badge: "Best Seller",
    highlights: ["Registan Square", "Khast Imam Complex (Oldest Quran)", "Chorsu Bazaar", "High-speed Afrosiyob Train", "Artistic Tashkent Metro"],
    inclusions: [
      "Return flight ticket from UAE",
      "3 Nights hotel accommodation in Tashkent (3★ / 4★ hotel)",
      "Daily breakfast at hotel",
      "Full-day Tashkent city tour with guide & transport",
      "Professional English-speaking local guide",
      "All airport transfers & city transport",
      "All taxes and service charges",
    ],
    exclusions: [
      "Travel insurance (recommended)",
      "Personal expenses (meals not mentioned, tips, shopping)",
      "Optional activities (Magic City, cultural shows, Samarkand day trip)",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Tashkent – Capital Welcomes You", description: "Arrive at Tashkent International Airport. Warm meet & greet, private transfer to hotel. Evening orientation: walk around Independence Square, Amir Timur Square & grand Navoi Theater. Optional dinner with traditional Uzbek music & dance." },
      { day: 2, title: "Full-Day Tashkent City Tour", description: "Guided exploration of Old & New Tashkent. Visit Khast Imam Complex (home to the world's oldest Quran), wander through Chorsu Bazaar, Kukeldash Madrasa, ride the artistic Tashkent Metro, see the TV Tower and Monument of Courage." },
      { day: 3, title: "Optional Day Trip to Samarkand", description: "Early breakfast and transfer to train station. Ride the high-speed Afrosiyob train to Samarkand (2 hrs). Tour iconic Registan Square, Gur-e-Amir Mausoleum (tomb of Tamerlane), Bibi-Khanym Mosque, Siyob Bazaar & Shakhi-Zinda Necropolis. Return to Tashkent by evening train." },
      { day: 4, title: "Departure", description: "Breakfast at hotel, free time for souvenir shopping depending on flight schedule. Private transfer to Tashkent International Airport for return flight to UAE." },
    ],
    faqs: [
      { q: "Do UAE residents need a visa for Uzbekistan?", a: "Yes, UAE residents need an e-visa. We provide full e-visa processing and application assistance." },
      { q: "Is Uzbekistan cash-friendly?", a: "Yes! Uzbekistan is primarily cash-friendly. We recommend carrying USD for local currency exchange." },
      { q: "What is the best time to visit Uzbekistan from UAE?", a: "Spring (March–May) and Autumn (September–November) offer pleasant weather for sightseeing." },
    ],
  },
  {
    slug: "armenia-revealed",
    name: "Armenia Revealed",
    prefix: "Amazing",
    tagline: "Ancient monasteries & mountain vistas",
    destination: "Yerevan & Dilijan",
    country: "Armenia",
    duration: "6 Nights / 7 Days",
    nights: 6,
    days: 7,
    price: 2899,
    currency: "AED",
    rating: 4.8,
    reviewCount: 64,
    groupSize: "2–12",
    image: "/packages/armenia.png",
    gallery: ["/packages/armenia.png"],
    badge: "Cultural Gem",
    highlights: ["Geghard Monastery", "Garni Temple", "Lake Sevan", "Tatev Monastery", "Yerevan Cascade"],
    inclusions: [
      "Return flights from UAE",
      "6-night hotel (4-star)",
      "Daily breakfast",
      "All guided tours & transfers",
      "Armenia visa assistance",
      "Travel insurance",
    ],
    exclusions: ["Meals beyond breakfast", "Personal expenses", "Optional cable car rides"],
    itinerary: [
      { day: 1, title: "Arrival in Yerevan", description: "Arrive in the 'Pink City'. Check in and explore Republic Square at sunset." },
      { day: 2, title: "Yerevan City Tour", description: "Visit the Cascade, National History Museum, and vibrant Vernissage market." },
      { day: 3, title: "Garni & Geghard", description: "Day trip to the pagan Garni Temple and the breathtaking rock-cut Geghard Monastery." },
      { day: 4, title: "Lake Sevan", description: "Drive to the high-altitude Lake Sevan, visit Sevanavank Monastery, and enjoy fresh fish lunch." },
      { day: 5, title: "Dilijan Forest Town", description: "Explore Armenia's 'Switzerland' — the lush Dilijan nature reserve and old town workshops." },
      { day: 6, title: "Tatev Monastery", description: "Ride the world's longest non-stop double track cable car to the dramatic Tatev Monastery." },
      { day: 7, title: "Departure", description: "Morning free time in Yerevan. Transfer to Zvartnots Airport for return flight." },
    ],
    faqs: [
      { q: "Is Armenia visa-free for UAE residents?", a: "UAE passport holders can enter Armenia visa-free. We provide full assistance for other nationalities." },
    ],
  },
  {
    slug: "thailand-escape",
    name: "Thailand Escape",
    prefix: "Thrilling",
    tagline: "Temples, beaches & street food paradise",
    destination: "Bangkok & Phuket",
    country: "Thailand",
    duration: "7 Nights / 8 Days",
    nights: 7,
    days: 8,
    price: 2699,
    currency: "AED",
    rating: 4.9,
    reviewCount: 142,
    groupSize: "2–20",
    image: "/packages/thailand.png",
    gallery: ["/packages/thailand.png"],
    badge: "Most Popular",
    highlights: ["Grand Palace Bangkok", "Phi Phi Islands", "Elephant Sanctuary", "Floating Markets", "Patong Beach"],
    inclusions: [
      "Return flights from UAE",
      "7-night hotel (4-star resorts)",
      "Daily breakfast",
      "Bangkok–Phuket internal flight",
      "Island hopping boat tour",
      "Thai cooking class",
      "All transfers",
    ],
    exclusions: ["Visa fee (AED 150 approx)", "Lunches & dinners", "Personal shopping"],
    itinerary: [
      { day: 1, title: "Arrival in Bangkok", description: "Land at Suvarnabhumi, transfer to hotel. Evening Chao Phraya river cruise." },
      { day: 2, title: "Bangkok Temples", description: "Visit the Grand Palace, Wat Pho (Reclining Buddha), and Wat Arun by longtail boat." },
      { day: 3, title: "Floating Markets & Cooking", description: "Morning Damnoen Saduak floating market, afternoon Thai cooking class." },
      { day: 4, title: "Bangkok to Phuket", description: "Internal flight to Phuket. Afternoon at leisure on Patong Beach." },
      { day: 5, title: "Phi Phi Islands", description: "Full-day speedboat tour to Phi Phi Islands — snorkelling, swimming, and Maya Bay." },
      { day: 6, title: "Phang Nga Bay", description: "James Bond Island kayaking tour through dramatic limestone karsts." },
      { day: 7, title: "Elephant Sanctuary", description: "Ethical elephant encounter at a reputable sanctuary in the hills of Phuket." },
      { day: 8, title: "Departure", description: "Transfer to Phuket Airport for return flight to UAE." },
    ],
    faqs: [
      { q: "Do I need a visa for Thailand?", a: "UAE passport holders get 30 days visa-on-arrival. We assist with all documentation." },
    ],
  },
  {
    slug: "georgia-discovery",
    name: "Georgia Discovery",
    prefix: "Discover",
    tagline: "Wine, mountains & medieval castles",
    destination: "Tbilisi & Kazbegi",
    country: "Georgia",
    duration: "5 Nights / 6 Days",
    nights: 5,
    days: 6,
    price: 1999,
    currency: "AED",
    rating: 4.8,
    reviewCount: 98,
    groupSize: "2–15",
    image: "/packages/georgia.png",
    gallery: ["/packages/georgia.png"],
    badge: "Trending",
    highlights: ["Gergeti Trinity Church", "Mtskheta Old City", "Sighnaghi Wine Town", "Narikala Fortress", "Kakheti Wine Tour"],
    inclusions: [
      "Return flights from UAE",
      "5-night hotel (4-star)",
      "Daily breakfast",
      "All guided tours & transfers",
      "Wine tasting in Kakheti",
      "Travel insurance",
    ],
    exclusions: ["Meals beyond breakfast", "Personal expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival in Tbilisi", description: "Land in Tbilisi. Explore the atmospheric Old Town sulfur bath district at leisure." },
      { day: 2, title: "Tbilisi City Tour", description: "Narikala Fortress, Metekhi Church, Rustaveli Avenue, and the Dry Bridge flea market." },
      { day: 3, title: "Kazbegi Mountains", description: "Full-day drive to Kazbegi — hike to the iconic Gergeti Trinity Church at 2,170m." },
      { day: 4, title: "Mtskheta & Gori", description: "Visit Jvari Monastery and Svetitskhoveli Cathedral, then Stalin's birthplace museum." },
      { day: 5, title: "Kakheti Wine Region", description: "Wine trail through Georgia's premier wine region — tastings at family wineries." },
      { day: 6, title: "Departure", description: "Morning walk through Tbilisi's Vake Park. Transfer to airport for return flight." },
    ],
    faqs: [
      { q: "Is Georgia visa-free for UAE residents?", a: "Yes! UAE passport holders can visit Georgia completely visa-free for up to 90 days." },
    ],
  },
  {
    slug: "baku-azerbaijan",
    name: "Baku Azerbaijan",
    prefix: "Baku",
    tagline: "Land of fire & futuristic architecture",
    destination: "Baku & Sheki",
    country: "Azerbaijan",
    duration: "5 Nights / 6 Days",
    nights: 5,
    days: 6,
    price: 1799,
    currency: "AED",
    rating: 4.7,
    reviewCount: 76,
    groupSize: "2–12",
    image: "/packages/azerbaijan.png",
    gallery: ["/packages/azerbaijan.png"],
    badge: "Value Pick",
    highlights: ["Flame Towers", "Old City (Icheri Sheher)", "Gobustan Mud Volcanoes", "Ateshgah Fire Temple", "Heydar Aliyev Centre"],
    inclusions: [
      "Return flights from UAE",
      "5-night hotel (4-star)",
      "Daily breakfast & 2 dinners",
      "All guided tours & transfers",
      "Azerbaijan e-visa",
      "Travel insurance",
    ],
    exclusions: ["Lunches", "Personal expenses", "Optional cable car"],
    itinerary: [
      { day: 1, title: "Arrival in Baku", description: "Arrive in Baku. Evening stroll along the famous Baku Boulevard with Caspian Sea views." },
      { day: 2, title: "Baku Old City Tour", description: "Explore the walled Old City, Maiden Tower, Palace of the Shirvanshahs, and local handicraft shops." },
      { day: 3, title: "Gobustan & Mud Volcanoes", description: "Visit Gobustan National Park's ancient rock carvings, then the bizarre Absheron mud volcanoes." },
      { day: 4, title: "Ateshgah & Flame Towers", description: "Morning at the ancient Zoroastrian Fire Temple. Afternoon Heydar Aliyev Centre. Evening Flame Towers lit up." },
      { day: 5, title: "Sheki Day Trip", description: "Full-day trip to Sheki — visit the ornate Khan's Palace, old caravanserais, and local weavers." },
      { day: 6, title: "Departure", description: "Last morning for souvenirs and local tea. Transfer to Heydar Aliyev Airport." },
    ],
    faqs: [
      { q: "Do UAE residents need a visa for Azerbaijan?", a: "An e-visa is required. The fee is around AED 150 and we handle the full application for you." },
    ],
  },
  {
    slug: "kerala-backwaters",
    name: "Kerala Backwaters",
    prefix: "Serene",
    tagline: "God's own country — serene & soulful",
    destination: "Kochi & Alleppey",
    country: "India",
    duration: "6 Nights / 7 Days",
    nights: 6,
    days: 7,
    price: 2299,
    currency: "AED",
    rating: 4.9,
    reviewCount: 115,
    groupSize: "2–20",
    image: "/packages/india.png",
    gallery: ["/packages/india.png"],
    badge: "Family Favourite",
    highlights: ["Houseboat Stay", "Munnar Tea Gardens", "Periyar Wildlife", "Kovalam Beach", "Kathakali Dance"],
    inclusions: [
      "Return flights from UAE",
      "5 hotel nights + 1 houseboat night",
      "Daily breakfast + houseboat meals",
      "All transfers & guided tours",
      "Munnar tea estate visit",
      "Travel insurance",
    ],
    exclusions: ["India visa (if required)", "Lunches in hotels", "Personal shopping"],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", description: "Fly into Kochi. Transfer to hotel. Evening Chinese fishing nets walk at Fort Kochi." },
      { day: 2, title: "Kochi Heritage Tour", description: "Jewish Synagogue, Dutch Palace, Mattancherry spice market, and Kathakali dance show." },
      { day: 3, title: "Munnar Tea Country", description: "Scenic drive up to Munnar. Tea estate tour, tea museum, and spectacular mountain views." },
      { day: 4, title: "Periyar Wildlife Sanctuary", description: "Thekkady boat safari on Periyar Lake — elephants, bison, and exotic birds." },
      { day: 5, title: "Houseboat Day", description: "Board traditional Kerala houseboat on the backwaters — cruise through village canals, sunset onboard." },
      { day: 6, title: "Kovalam Beach", description: "Drive to the golden crescent of Kovalam Beach. Ayurvedic massage and leisure time." },
      { day: 7, title: "Departure", description: "Transfer to Trivandrum Airport for return flight to UAE." },
    ],
    faqs: [
      { q: "Do UAE residents need a visa for India?", a: "Most nationalities can obtain an e-Visa for India. We assist with the full application process." },
    ],
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  if (slug === "uzbekistan-odyssey") return packages.find((p) => p.slug === "unforgettable-uzbekistan");
  return packages.find((p) => p.slug === slug);
}
