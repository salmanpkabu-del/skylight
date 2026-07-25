// lib/visas-data.ts

export interface Visa {
  id: string;
  country: string;
  flag: string;
  code: string;
  processingTime: string;
  validity: string;
  type: string;
  price: string;
  requirements: string[];
  description: string;
  steps?: { title: string; desc: string }[];
  faqs?: { q: string; a: string }[];
}

export const visas: Visa[] = [
  {
    id: "usa",
    country: "United States",
    flag: "🇺🇸",
    code: "us",
    processingTime: "15–30 days",
    validity: "10 years",
    type: "B1/B2 Tourist",
    price: "AED 800",
    description: "Full embassy-ready documentation, DS-160 form assistance, and interview preparation.",
    requirements: ["Valid passport (6+ months)", "Bank statements", "Employment letter", "Photographs", "Travel itinerary"],
    steps: [
      { title: "DS-160 Application Form", desc: "We accurately complete your DS-160 online application form adhering to US Embassy standards." },
      { title: "Embassy Fee Payment", desc: "We guide you through paying the official US consular MRV application fee." },
      { title: "Interview Scheduling", desc: "We secure the earliest available appointment at the US Consulate in Dubai or Embassy in Abu Dhabi." },
      { title: "1-on-1 Interview Preparation", desc: "Our visa specialists conduct mock interviews and organize your supporting document binder." },
    ],
    faqs: [
      { q: "How long is the US B1/B2 tourist visa valid for UAE residents?", a: "For most nationalities residing in the UAE, the B1/B2 visa is issued as a multiple-entry visa valid for up to 10 years." },
      { q: "Can I apply if my UAE residence visa is newly issued?", a: "Yes, provided your UAE residence visa is valid for at least 3 months from your appointment date and you have employment verification." },
    ],
  },
  {
    id: "schengen",
    country: "Schengen (Europe)",
    flag: "🇪🇺",
    code: "eu",
    processingTime: "10–15 days",
    validity: "90 days / 2 years",
    type: "Short-Stay C Visa",
    price: "AED 500",
    description: "Access to 26 European countries with a single visa. We handle the complete VFS Global submission.",
    requirements: ["Valid passport", "Travel insurance", "Hotel bookings", "Bank statements", "Return flight proof"],
    steps: [
      { title: "Destination & Embassy Check", desc: "We identify the correct Schengen member state embassy based on your travel itinerary and stay duration." },
      { title: "Appointment Booking", desc: "We secure your appointment at VFS Global or TLScontact in Dubai or Abu Dhabi." },
      { title: "Document Formatting", desc: "We issue verifiable flight reservations, hotel vouchers, and €30,000 Schengen travel insurance." },
      { title: "Biometrics & Submission", desc: "You attend your appointment for fingerprinting while we track your passport delivery." },
    ],
    faqs: [
      { q: "Which Schengen country is easiest to apply from UAE?", a: "Countries like France, Spain, Germany, and Switzerland have frequent appointments at VFS Global and clear document guidelines." },
      { q: "How early should I apply before my European trip?", a: "We strongly recommend starting your application 6 to 8 weeks before your intended departure date." },
    ],
  },
  {
    id: "new-zealand",
    country: "New Zealand",
    flag: "🇳🇿",
    code: "nz",
    processingTime: "7–10 days",
    validity: "Multiple entries",
    type: "Visitor Visa",
    price: "AED 450",
    description: "End-to-end online application support for one of the world's most beautiful destinations.",
    requirements: ["Valid passport", "Character declaration", "Medical declaration", "Proof of funds", "Travel plans"],
    steps: [
      { title: "Online RealMe Portal Setup", desc: "We create and manage your official Immigration New Zealand online application profile." },
      { title: "Document Upload & Formatting", desc: "We digitize and format your bank statements, employment NOC, and travel itinerary." },
      { title: "Application Submission", desc: "We lodge your application and handle all correspondence with immigration officers." },
      { title: "e-Visa Grant Notice", desc: "Once approved, your electronic visa grant notice is delivered directly to your email and WhatsApp." },
    ],
    faqs: [
      { q: "Do I need to submit my physical passport for a New Zealand visa?", a: "No, New Zealand issues electronic visas (eVisa). You only need to upload high-resolution scans of your passport." },
      { q: "What is the financial requirement for New Zealand?", a: "You should show funds of at least NZD 1,000 per month of stay, supported by stamped UAE bank statements." },
    ],
  },
  {
    id: "armenia",
    country: "Armenia",
    flag: "🇦🇲",
    code: "am",
    processingTime: "On Arrival / 3 days",
    validity: "120 days",
    type: "Tourist Visa",
    price: "Free–AED 200",
    description: "UAE passport holders enter visa-free. Other nationalities receive expert e-visa processing.",
    requirements: ["Valid passport", "Return ticket", "Proof of accommodation"],
    steps: [
      { title: "Residency Eligibility Check", desc: "We verify if your nationality and UAE residence permit qualify for visa-free or visa-on-arrival entry." },
      { title: "e-Visa Processing (If Required)", desc: "For non-exempt passport holders, we submit your official Armenian e-Visa application online." },
      { title: "Travel Voucher Issuance", desc: "We provide confirmed hotel vouchers and return flight itineraries required at Yerevan border control." },
      { title: "Departure Briefing", desc: "We brief you on customs regulations and currency exchange before your flight." },
    ],
    faqs: [
      { q: "Can UAE residents travel to Armenia without a visa?", a: "Yes, UAE residents with a residence visa valid for at least 6 months can obtain a visa on arrival or enter visa-free depending on their nationality." },
      { q: "How long is the flight from Sharjah/Dubai to Armenia?", a: "Direct flights from Sharjah (Air Arabia) or Dubai (flydubai) to Yerevan take approximately 3 hours." },
    ],
  },
  {
    id: "azerbaijan",
    country: "Azerbaijan",
    flag: "🇦🇿",
    code: "az",
    processingTime: "3–5 days",
    validity: "30 days",
    type: "e-Visa",
    price: "AED 150",
    description: "Fast and straightforward e-ASAN system application for the Land of Fire.",
    requirements: ["Valid passport", "Passport photo", "Travel dates", "Hotel confirmation"],
    steps: [
      { title: "ASAN Visa Application", desc: "We submit your details through the official ASAN electronic visa portal of Azerbaijan." },
      { title: "Document Verification", desc: "We ensure your passport copy and photograph meet exact biometric sizing standards." },
      { title: "Express Processing Tracking", desc: "We monitor your application through government checkpoints for rapid clearance." },
      { title: "Instant e-Visa Delivery", desc: "Your official PDF e-Visa is sent to your phone, ready to print and present at Baku airport." },
    ],
    faqs: [
      { q: "Can I get an urgent Azerbaijan visa in 24 hours?", a: "Yes, an urgent ASAN e-visa option is available which processes within 3 to 5 hours for an additional government fee." },
      { q: "Do UAE citizens need a visa for Azerbaijan?", a: "UAE passport holders can obtain a visa on arrival at any international airport in Azerbaijan." },
    ],
  },
  {
    id: "albania",
    country: "Albania",
    flag: "🇦🇱",
    code: "al",
    processingTime: "Visa-Free",
    validity: "90 days",
    type: "Visa-Free Entry",
    price: "Free",
    description: "UAE residents enjoy visa-free entry to Albania — the Mediterranean's best-kept secret.",
    requirements: ["UAE residence visa or passport", "Return ticket", "Sufficient funds proof"],
    steps: [
      { title: "Document Pre-Check", desc: "We audit your UAE residency validity to ensure it meets Albania's visa exemption criteria." },
      { title: "Flight & Hotel Package", desc: "We book your direct flights to Tirana and handpick Mediterranean resorts in Ksamil and Sarandë." },
      { title: "Border Control Folder", desc: "We assemble your travel insurance, return ticket, and hotel bookings into an official border entry folder." },
      { title: "24/7 Transit Support", desc: "Our team remains reachable via WhatsApp while you travel through Albanian immigration." },
    ],
    faqs: [
      { q: "Is Albania really visa-free for all UAE residents?", a: "During the summer tourist season (and often year-round), Albania allows UAE residents with valid residency to enter without a visa for up to 90 days." },
      { q: "What currency is used in Albania?", a: "The currency is the Albanian Lek (ALL), but Euros are also widely accepted in hotels and tourist areas." },
    ],
  },
  {
    id: "uzbekistan",
    country: "Uzbekistan",
    flag: "🇺🇿",
    code: "uz",
    processingTime: "2–3 days",
    validity: "30 days",
    type: "e-Visa",
    price: "AED 100",
    description: "Quick e-visa to explore the Silk Road cities of Samarkand and Bukhara.",
    requirements: ["Valid passport", "Passport photo", "Travel itinerary"],
    steps: [
      { title: "Official e-Visa Portal Submission", desc: "We lodge your application on the Ministry of Foreign Affairs e-Visa portal of Uzbekistan." },
      { title: "Photo & Passport Optimization", desc: "We format your digital passport photo to meet Central Asian biometric recognition requirements." },
      { title: "Payment & Consular Tracking", desc: "We handle the foreign currency consular fee payment and track processing milestones." },
      { title: "Approved e-Visa Dispatch", desc: "Receive your official electronic visa grant within 48 to 72 hours via WhatsApp and email." },
    ],
    faqs: [
      { q: "Can UAE residents enter Uzbekistan visa-free?", a: "UAE citizens enjoy visa-free entry for up to 30 days. Most UAE resident expats qualify for a simplified online e-visa that takes 2–3 days." },
      { q: "When is the best time to visit Tashkent and Samarkand?", a: "Spring (April to May) and Autumn (September to November) offer the most pleasant weather for sightseeing along the Silk Road." },
    ],
  },
  {
    id: "georgia",
    country: "Georgia",
    flag: "🇬🇪",
    code: "ge",
    processingTime: "Visa-Free",
    validity: "365 days",
    type: "Visa-Free Entry",
    price: "Free",
    description: "One of the most generous visa policies in the world — UAE residents stay up to 1 year!",
    requirements: ["UAE residence visa or passport", "Return ticket"],
    steps: [
      { title: "Residency Verification", desc: "We confirm your UAE residence permit has at least 6 months validity remaining." },
      { title: "Custom Holiday Package Design", desc: "We craft your itinerary covering Tbilisi old town, Kazbegi mountains, and Gudauri resorts." },
      { title: "Immigration Entry Document Pack", desc: "We prepare your confirmed hotel vouchers, return flights, and health insurance required by Georgian border guards." },
      { title: "Seamless Arrival Guidance", desc: "We provide insider tips on airport SIM cards, taxi apps (Bolt/Yandex), and halal dining." },
    ],
    faqs: [
      { q: "How long can UAE residents stay in Georgia without a visa?", a: "UAE residents with a valid residence permit can enter and stay in Georgia visa-free for up to 90 days in any 180-day period (and often up to 1 full year depending on nationality)." },
      { q: "What documents do Georgian border guards check upon arrival?", a: "They typically inspect your original passport, physical Emirates ID or residency visa copy, return flight ticket, and confirmed hotel booking." },
    ],
  },
];
