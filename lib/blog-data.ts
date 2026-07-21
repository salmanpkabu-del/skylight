// lib/blog-data.ts

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
  faqs?: { q: string; a: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-holiday-packages-uae-2025",
    title: "Top 7 Affordable Holiday Packages from UAE in 2025",
    excerpt: "From exotic Silk Road destinations to tropical beaches — these UAE-departure packages offer incredible value without compromising on experience.",
    category: "Travel Tips",
    date: "July 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    author: {
      name: "Skylight Travel Team",
      role: "UAE Destination Specialists",
    },
    content: [
      "Traveling from the UAE has never been more exciting or accessible. With direct flights from Dubai (DXB), Sharjah (SHJ), and Abu Dhabi (AUH) to over 100 global destinations, planning a short getaway or a long vacation is easier than ever.",
      "Whether you are looking for budget-friendly mountain escapes, visa-on-arrival tropical beaches, or rich historical Silk Road tours, here are the top 7 affordable holiday packages from the UAE for 2025.",
      "### 1. Unforgettable Uzbekistan (Tashkent & Samarkand)",
      "Uzbekistan has emerged as one of the top trending destinations for UAE residents. Offering high-speed Afrosiyob train journeys between Tashkent and Samarkand, grand Islamic architecture, and mouth-watering Central Asian cuisine, it offers immense value. Most UAE residents can easily obtain an e-visa within 3 working days.",
      "### 2. Amazing Armenia (Yerevan & Dilijan)",
      "Just a short 3-hour flight from Sharjah or Dubai, Armenia offers crisp mountain air, ancient monasteries, and vibrant café culture. Best of all, UAE residents enjoy visa-free entry for up to 180 days, making it an ideal last-minute holiday choice.",
      "### 3. Thrilling Thailand (Phuket & Bangkok)",
      "Thailand remains the undisputed king of tropical holidays. From island hopping in Phi Phi to bustling night markets in Bangkok, package tours from the UAE start as low as AED 2,699 including return flights and 4-star beach resort stays.",
      "### 4. Discover Georgia (Tbilisi & Kazbegi)",
      "With snow-capped Caucasus peaks and green valleys, Georgia is a year-round favourite. UAE residents benefit from visa-on-arrival or visa-free entry, and flights take less than 3.5 hours.",
      "### 5. Baku, Azerbaijan",
      "Known as the Pearl of the Caspian Sea, Baku blends futuristic Flame Towers with medieval Old City charms. Easy e-visa processing and affordable luxury hotels make Azerbaijan a top weekend getaway.",
      "### 6. Serene Kerala, India",
      "Overnight houseboats in Alleppey and misty tea plantations in Munnar make Kerala a top eco-tourism destination. Direct flights from Sharjah to Kochi make travel seamless.",
      "### 7. Almaty, Kazakhstan",
      "For mountain lovers and winter sports enthusiasts, Almaty offers alpine lakes and cable car rides up Shymbulak. Visa-free entry for UAE passport holders and simple e-visas for residents make Almaty a fantastic alternative.",
    ],
    faqs: [
      {
        q: "What is the cheapest country to travel to from the UAE?",
        a: "Georgia, Armenia, and Azerbaijan are among the most budget-friendly destinations from the UAE, with packages starting from AED 1,699–1,799 per person including flights and hotels.",
      },
      {
        q: "Do UAE residents need visas for Georgia and Armenia?",
        a: "UAE residents with a valid UAE residence visa (valid for at least 6 months) receive visa-free entry or visa-on-arrival for Georgia and Armenia.",
      },
    ],
  },
  {
    slug: "schengen-visa-guide-uae-residents",
    title: "Complete Schengen Visa Guide for UAE Residents 2025",
    excerpt: "Everything you need to know about applying for a Schengen visa from the UAE — documents, timelines, appointment booking, and success tips.",
    category: "Visa Guide",
    date: "June 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80",
    author: {
      name: "Visa Operations Team",
      role: "Senior Visa Consultants",
    },
    content: [
      "Planning a European vacation from the UAE? Applying for a Schengen visa can feel daunting due to appointment slot shortages and strict documentation requirements. However, with proper preparation, your application can be smooth and successful.",
      "Here is your step-by-step guide to securing a Schengen visa from Dubai, Sharjah, or Abu Dhabi in 2025.",
      "### Step 1: Determine Which Country to Apply To",
      "You must apply to the embassy/VFS center of the country where you will spend the most nights. If spending equal nights in multiple countries, apply to your primary port of entry.",
      "### Step 2: Book Your VFS Global or TLScontact Appointment Early",
      "Schengen visa appointment slots fill up rapidly during peak travel seasons (Eid holidays, Summer, and December). We recommend securing your slot at least 6 to 8 weeks before your intended travel date.",
      "### Step 3: Prepare the Mandatory Document Checklist",
      "- Valid Passport (minimum 6 months validity from return date + 2 blank pages)\n- Valid UAE Residence Visa (minimum 3 months validity remaining)\n- Official No Objection Certificate (NOC) from employer detailing salary, designation, and approved leave dates\n- Stamped Bank Statements for the last 3 to 6 months showing sufficient funds\n- Confirmed Return Flight Reservation and Hotel Bookings\n- Travel Medical Insurance covering minimum €30,000 emergency medical expenses",
      "### How Skylight Travel Helps You Win Visa Approval",
      "At Skylight Travel Sharjah, our visa specialists verify every document, fill out your Schengen forms accurately, reserve verifiable flight & hotel itineraries, and guide you through your VFS appointment.",
    ],
    faqs: [
      {
        q: "How long does a Schengen visa take to process in UAE?",
        a: "Standard processing time is 10 to 15 working days after submitting biometrics at VFS. During peak months, processing can take up to 21 days.",
      },
      {
        q: "How much bank balance is required for a Schengen visa from UAE?",
        a: "Embassies generally look for a minimum balance of AED 15,000 to AED 25,000 per applicant, depending on the length of stay and destination.",
      },
    ],
  },
  {
    slug: "best-travel-agency-sharjah",
    title: "Why Skylight is Sharjah's Most Trusted Travel Agency",
    excerpt: "With 5,000+ happy travellers, 10+ years of experience, and a dedicated team in Al Sajaa — discover why UAE residents choose Skylight Travel.",
    category: "About Skylight",
    date: "June 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80",
    author: {
      name: "Skylight Management",
      role: "Sharjah, UAE",
    },
    content: [
      "Finding a travel agency that combines transparent pricing, deep destination knowledge, and genuine customer care can be a challenge. Located in Al Sajaa, Sharjah, Skylight Travel has grown over the past decade to become one of the UAE's most recommended travel partners.",
      "### 1. Transparent Pricing — Zero Hidden Fees",
      "We believe trust begins with clear pricing. When we quote a package price, it includes taxes, airport transfers, and breakdown details so you never encounter unexpected surcharges.",
      "### 2. Personalised Human Support",
      "In an era of automated bots, Skylight offers direct WhatsApp access and phone support with real, UAE-based travel consultants who monitor your trip from takeoff to landing.",
      "### 3. Complete One-Stop Travel Solutions",
      "From flight tickets and luxury hotel stays to complex multi-destination tour packages and visa processing, we handle every detail under one roof.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
