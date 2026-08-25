export type Language = "en" | "ar";

export interface TranslationDict {
  common: {
    backToHome: string;
    startingFrom: string;
    perPerson: string;
    pax: string;
  };
  nav: {
    packages: string;
    visas: string;
    about: string;
    contact: string;
    tagline: string;
    email: string;
    localTime: string;
    getInTouch: string;
  };
  hero: {
    eyebrow: string;
    headlineMain: string;
    headlineItalic: string;
    desc: string;
    btnPackages: string;
    btnWhatsApp: string;
    popular: string;
    stats: {
      travellers: string;
      destinations: string;
      rating: string;
      years: string;
    };
  };
  packages: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    viewAll: string;
    pax: string;
    from: string;
    apply: string;
    featured: string;
  };
  visas: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    desc: string;
    viewAll: string;
    apply: string;
    visaFree: string;
    processing: string;
  };
  about: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    p1: string;
    p2: string;
    statLabel: string;
    pillars: {
      expertTitle: string;
      expertDesc: string;
      supportTitle: string;
      supportDesc: string;
      priceTitle: string;
      priceDesc: string;
    };
  };
  why: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    cards: Array<{ title: string; desc: string }>;
  };
  services: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    learnMore: string;
    cards: Array<{ title: string; desc: string }>;
  };
  testimonials: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    tripLabel: string;
    prev: string;
    next: string;
    google: string;
  };
  faq: {
    tag: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  blog: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    viewAll: string;
    readArticle: string;
  };
  cta: {
    tag: string;
    titleMain: string;
    titleAccent: string;
    desc: string;
    btnPlan: string;
    btnWhatsApp: string;
  };
  contact: {
    tag: string;
    heroTitle: string;
    heroAccent: string;
    heroDesc: string;
    chatAgent1: string;
    chatAgent2: string;
    callDirect: string;
    visitHq: string;
    walkIns: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    destinationLabel: string;
    serviceLabel: string;
    messageLabel: string;
    submitBtn: string;
    sending: string;
    directDetails: string;
    headOffice: string;
    addressValue: string;
    workingHours: string;
    workingHoursValue: string;
    getDirections: string;
  };
  widget: {
    contactUs: string;
    agent1: string;
    agent2: string;
    aiChat: string;
    aiSub: string;
    online: string;
  };
  footer: {
    desc: string;
    explore: string;
    services: string;
    getInTouch: string;
    newsletter: string;
    emailPlaceholder: string;
    copyright: string;
    createdAndCaredBy: string;
  };
  aboutPage: {
    heroTag: string;
    heroTitleMain: string;
    heroTitleAccent: string;
    heroDesc: string;
    badgeLicensed: string;
    badgeExperience: string;
    badgeHQ: string;
    stats: Array<{ value: string; label: string; sub: string }>;
    storyEyebrow: string;
    photoEst: string;
    photoServed: string;
    photoRating: string;
    photoYears: string;
    photoHqTitle: string;
    photoHqSub: string;
    photoOpen: string;
    storyTitleMain: string;
    storyTitleAccent: string;
    storyP1Bold1: string;
    storyP1Bold2: string;
    storyP1Rest: string;
    storyP2Bold1: string;
    storyP2Bold2: string;
    storyP2Rest: string;
    milestones: Array<{ year: string; title: string; desc: string }>;
    latestBadge: string;
    whyChooseTag: string;
    whyChooseTitle: string;
    whyChooseSub: string;
    features: Array<{ title: string; desc: string }>;
    contactTag: string;
    contactTitle: string;
    contactDesc: string;
    btnWhatsApp: string;
    btnCall: string;
  };
  packagesPage: {
    heroTag: string;
    heroTitleMain: string;
    heroTitleAccent: string;
    heroDesc: string;
    badgeFrom: string;
    badgeFlightHotel: string;
    badgeWhatsApp: string;
    faqTag: string;
    faqTitle: string;
    faqs: Array<{ q: string; a: string }>;
  };
  visasPage: {
    heroTag: string;
    heroTitleMain: string;
    heroTitleAccent: string;
    heroDesc: string;
    badgeApproval: string;
    badgeExpress: string;
    badgeVFS: string;
    processTag: string;
    processTitle: string;
    steps: Array<{ num: string; title: string; desc: string }>;
    faqTag: string;
    faqTitle: string;
    faqs: Array<{ q: string; a: string }>;
  };
  contactPage: {
    heroTag: string;
    heroTitleMain: string;
    heroTitleAccent: string;
    heroDesc: string;
    badgeWhatsApp: string;
    badgeEmail: string;
    badgeNoHidden: string;
    faqTag: string;
    faqTitle: string;
    faqs: Array<{ q: string; a: string }>;
  };
  blogPage: {
    tag: string;
    heroTitleMain: string;
    heroTitleAccent: string;
    heroDesc: string;
  };
}

export const dictionary: Record<Language, TranslationDict> = {
  en: {
    common: {
      backToHome: "Back to Home",
      startingFrom: "Starting From",
      perPerson: " /person",
      pax: "pax",
    },
    nav: {
      packages: "Packages",
      visas: "Visas",
      about: "About",
      contact: "Contact",
      tagline: "UAE's Most Trusted Travel Agency",
      email: "info@skylighttourism.com",
      localTime: "UAE Time",
      getInTouch: "Get in touch",
    },
    hero: {
      eyebrow: "UAE's Most Trusted Travel Agency",
      headlineMain: "The World",
      headlineItalic: "Awaits.",
      desc: "Crafting premium holidays and securing seamless visas with genuine care. Trusted by over 5,000 UAE families since 2020.",
      btnPackages: "Explore Packages",
      btnWhatsApp: "WhatsApp Us",
      popular: "Popular →",
      stats: {
        travellers: "UAE Travellers",
        destinations: "Destinations",
        rating: "Rating",
        years: "Years of Trust",
      },
    },
    packages: {
      tag: "Holiday Packages",
      titleMain: "Your Dream",
      titleAccent: "Holidays Await",
      viewAll: "Explore All Packages",
      pax: "person",
      from: "Starting from",
      apply: "View Details",
      featured: "Featured",
    },
    visas: {
      tag: "Visa Services",
      titleMain: "Borderless Travel",
      titleAccent: "Starts Here",
      desc: "Expert visa assistance for UAE residents and expats. From e-visas to embassy appointments, we handle it all.",
      viewAll: "All Visa Services",
      apply: "Apply Now",
      visaFree: "Visa Free",
      processing: "Processing Time",
    },
    about: {
      tag: "Our Story",
      titleMain: "Built on Trust,",
      titleAccent: "Care & Dedication",
      p1: "In 2020, a small team in Sharjah started Highsky Travels with a simple belief — every UAE family deserves to see the world without the stress of planning it alone.",
      p2: "Six years on, in 2026 we rebranded to Skylight Travel, bringing a fresh digital experience to over 5,000 families who trust us with their most precious moments.",
      statLabel: "Years Serving UAE Families",
      pillars: {
        expertTitle: "UAE-Certified Experts",
        expertDesc: "Fully licensed by UAE Tourism Authorities with 6+ years of local experience.",
        supportTitle: "24/7 On-Trip Assistance",
        supportDesc: "Our UAE team is available on WhatsApp throughout your journey for flight changes or emergency support.",
        priceTitle: "Best Price Promise",
        priceDesc: "We match or beat any comparable travel quote while delivering 4-star handpicked hotel stays.",
      },
    },
    why: {
      tag: "Why Skylight",
      titleMain: "Why Thousands Choose",
      titleAccent: "Skylight Travel",
      cards: [
        { title: "Tailored Packages", desc: "Every trip is crafted around your budget, timeline, and dream destinations — no off-the-shelf itineraries." },
        { title: "Hassle-Free Visa Processing", desc: "Complete documentation support, appointment scheduling, and real-time status tracking — fully managed by us." },
        { title: "Expert Personal Guidance", desc: "Dedicated travel consultants available via WhatsApp, phone, or walk-in at our Sharjah office." },
        { title: "Best Price Promise", desc: "We match or beat any quoted price for identical itineraries. Transparent pricing, zero hidden fees." },
      ],
    },
    services: {
      tag: "What We Offer",
      titleMain: "End-to-End",
      titleAccent: "Travel Services",
      learnMore: "Learn More",
      cards: [
        { title: "Flight Bookings", desc: "Best-price flights on all major airlines, including economy, business, and first class." },
        { title: "Hotel Reservations", desc: "Hand-picked hotels across 50+ destinations, from boutique stays to 5-star resorts." },
        { title: "Holiday Tour Packages", desc: "Custom and ready-made packages with flights, hotels, transfers, and guided tours." },
        { title: "Visa Assistance", desc: "Full documentation, embassy submissions, and appointment scheduling." },
        { title: "Umrah & Hajj Packages", desc: "Carefully planned packages with accommodation in Makkah and Madinah." },
        { title: "Car Rental Services", desc: "Reliable rental cars at your destination, from budget compacts to premium SUVs." },
        { title: "Cruise Bookings", desc: "Mediterranean, Arabian Gulf, and world cruise packages at competitive prices." },
      ],
    },
    testimonials: {
      tag: "Testimonials",
      titleMain: "Real Stories from",
      titleAccent: "Real Travellers",
      tripLabel: "Trip",
      prev: "Previous testimonial",
      next: "Next testimonial",
      google: "Verified Google Review",
    },
    faq: {
      tag: "Got Questions?",
      title: "Frequently Asked Questions",
      items: [
        { q: "Why is Skylight Travel considered the best travel agency in Sharjah?", a: "Skylight Travel provides personalized holiday packages, transparent pricing with no hidden charges, complete Schengen & international visa guidance, and 24/7 dedicated WhatsApp support for UAE travelers." },
        { q: "What destinations can I travel to without a pre-arranged visa from the UAE?", a: "UAE residents with valid residency can travel visa-free or get visa-on-arrival to destinations like Georgia, Armenia, Azerbaijan, Montenegro, and Serbia. We handle all travel requirements for these regions." },
        { q: "How far in advance should I book my holiday package?", a: "We recommend booking at least 3 to 4 weeks in advance for regular holidays, and 6 to 8 weeks prior for peak seasons (Eid holidays, Summer vacations, and New Year) or destinations requiring embassy visa appointments." },
        { q: "Are flight tickets and hotel transfers included in Skylight holiday packages?", a: "Yes! All standard Skylight holiday packages include return flights from UAE airports (Dubai, Sharjah, Abu Dhabi), hotel stays with breakfast, airport transfers, and guided city sightseeing." },
        { q: "Can Skylight assist with Schengen or USA visa appointments from UAE?", a: "Absolutely. Our visa operations team assists with document verification, application forms, verified travel itineraries, hotel bookings, and securing VFS Global / embassy appointment slots." },
      ],
    },
    blog: {
      tag: "Travel Blog",
      titleMain: "Insider Guide",
      titleAccent: "to the World",
      viewAll: "View All Articles",
      readArticle: "Read Article",
    },
    cta: {
      tag: "Ready to Travel?",
      titleMain: "Your Next Adventure",
      titleAccent: "Starts Here",
      desc: "Speak to a Skylight travel consultant today for personalised planning, transparent pricing, and zero commitment.",
      btnPlan: "Plan My Trip",
      btnWhatsApp: "WhatsApp Us",
    },
    contact: {
      tag: "Contact Skylight Travel",
      heroTitle: "Plan Your Next",
      heroAccent: "Adventure Today",
      heroDesc: "Speak directly to our UAE-based travel consultants — personalized advice, transparent quotes, zero obligation.",
      chatAgent1: "Chat with Agent 1",
      chatAgent2: "Chat with Agent 2",
      callDirect: "Call Direct Line",
      visitHq: "Visit Sharjah HQ",
      walkIns: "Walk-ins Welcome",
      formTitle: "Send Us a Message",
      formSub: "Fill in your details below. Our UAE consultants will get back to you within 2 hours.",
      nameLabel: "Full Name",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email Address",
      destinationLabel: "Destination / Country",
      serviceLabel: "What service are you looking for?",
      messageLabel: "Trip Details / Message",
      submitBtn: "Submit Travel Enquiry",
      sending: "Sending Message...",
      directDetails: "Direct Contact Details",
      headOffice: "Head Office Address",
      addressValue: "Sharjah, United Arab Emirates",
      workingHours: "Working Hours",
      workingHoursValue: "Sunday – Friday: 9:00 AM – 9:00 PM (UAE Time)",
      getDirections: "Get Directions",
    },
    widget: {
      contactUs: "Contact Us",
      agent1: "Agent 1",
      agent2: "Agent 2",
      aiChat: "Sky AI Chat",
      aiSub: "Instant answers • 24/7",
      online: "Online",
    },
    footer: {
      desc: "Sharjah's trusted travel & tourism company, where every journey begins with trust. We craft premium holidays and secure seamless visas with genuine care.",
      explore: "Explore",
      services: "Services",
      getInTouch: "Get in Touch",
      newsletter: "Newsletter",
      emailPlaceholder: "Your email address",
      copyright: "Skylight Tourism LLC. All rights reserved.",
      createdAndCaredBy: "Created & cared by",
    },
    aboutPage: {
      heroTag: "About Skylight Travel",
      heroTitleMain: "Crafting Unforgettable",
      heroTitleAccent: "Journeys Since 2020",
      heroDesc: "Sharjah's trusted travel & tourism company — headquartered in Sharjah, UAE. Committed to delivering seamless holiday packages and hassle-free visas with genuine care.",
      badgeLicensed: "UAE Licensed Agency",
      badgeExperience: "6+ Years Experience",
      badgeHQ: "Sharjah HQ",
      stats: [
        { value: "5,000+", label: "UAE Families Served", sub: "Trusted since 2020" },
        { value: "50+", label: "Global Destinations", sub: "Worldwide holiday packages" },
        { value: "99.4%", label: "Visa Approval Rate", sub: "Schengen, Japan, UK & more" },
        { value: "4.9★", label: "Google Rating", sub: "Over 800+ 5-star reviews" },
      ],
      storyEyebrow: "Our Story",
      photoEst: "Est. 2020",
      photoServed: "Families Served",
      photoRating: "Google Rating",
      photoYears: "Years Active",
      photoHqTitle: "Skylight Travel HQ",
      photoHqSub: "Sharjah, United Arab Emirates",
      photoOpen: "Open",
      storyTitleMain: "Built on Trust, ",
      storyTitleAccent: "Care & Dedication",
      storyP1Bold1: "2020",
      storyP1Bold2: "Highsky Travels",
      storyP1Rest: "In 2020, a small team in Sharjah started Highsky Travels with a simple belief — every UAE family deserves to see the world without the stress of planning it alone.",
      storyP2Bold1: "2026",
      storyP2Bold2: "Skylight Travel",
      storyP2Rest: "Six years on, in 2026 we rebranded to Skylight Travel, bringing a fresh digital experience to over 5,000 families who trust us with their most precious moments.",
      milestones: [
        { year: "2020", title: "Founded as Highsky Travels", desc: "Started in Sharjah as Highsky Travels with a clear mission to simplify visa processing & holiday planning for UAE residents." },
        { year: "2024", title: "5,000+ Families Milestone", desc: "Celebrated serving over 5,000 UAE families with personalized 1-on-1 WhatsApp & walk-in service." },
        { year: "2026", title: "Rebranded to Skylight Travel", desc: "Officially rebranded to Skylight Travel, introducing enhanced digital services and premium custom holiday experiences." },
      ],
      latestBadge: "Latest",
      whyChooseTag: "Why Choose Us",
      whyChooseTitle: "What Sets Skylight Apart",
      whyChooseSub: "We treat your holiday as if it were our own family's trip.",
      features: [
        { title: "Transparent Pricing", desc: "No hidden fees or unexpected surcharges. Every quote is itemized, detailed, and clear before you pay." },
        { title: "Dedicated Consultant", desc: "A real human travel expert — reachable via WhatsApp, phone, or office walk-in — handles your trip from start to finish." },
        { title: "99.4% Visa Success", desc: "Deep expertise in Schengen, Japan, US, UK, and Silk Road visas with meticulous document review." },
        { title: "UAE-Certified Experts", desc: "Fully licensed by UAE Tourism Authorities with 6+ years of local experience." },
        { title: "24/7 On-Trip Assistance", desc: "Our UAE team is available on WhatsApp throughout your journey for flight changes or emergency support." },
        { title: "Best Price Promise", desc: "We match or beat any comparable travel quote while delivering 4-star handpicked hotel stays." },
      ],
      contactTag: "Personalized Service",
      contactTitle: "Speak to a Skylight Travel Specialist Today",
      contactDesc: "Whether you need a quick visa assessment or want us to craft a custom 7-day itinerary, our UAE team is standing by.",
      btnWhatsApp: "Chat on WhatsApp",
      btnCall: "Call Us Now",
    },
    packagesPage: {
      heroTag: "Holiday Packages 2025",
      heroTitleMain: "Curated Holiday Escapes",
      heroTitleAccent: "From the UAE",
      heroDesc: "All-inclusive travel packages crafted by UAE specialists — flights, 4-star hotels, guided tours, and complete visa assistance included.",
      badgeFrom: "Packages from AED 1,699",
      badgeFlightHotel: "Flight + 4★ Hotel Included",
      badgeWhatsApp: "24/7 WhatsApp Support",
      faqTag: "Got Questions?",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "How much do holiday packages from UAE cost?", a: "Holiday packages from UAE start from AED 1,699 per person for 4-night trips to Uzbekistan or Azerbaijan. Packages to Thailand, Georgia, and Armenia start from AED 1,999–2,899 per person including flights, hotels, and guided tours." },
        { q: "What is included in Skylight Travel packages?", a: "Skylight Travel packages typically include return flights from UAE, 4-star hotel accommodation, daily breakfast, all airport transfers, guided city tours, and travel insurance. Visa assistance is also provided." },
        { q: "Can I customise a holiday package?", a: "Absolutely. All Skylight Travel packages can be fully customised for your travel dates, budget, group size, and preferred hotels. Contact our team via WhatsApp or phone for a personalised quote." },
        { q: "Are visa fees included in the package price?", a: "For visa-free destinations (such as Georgia and Armenia for UAE residents), no visa fees apply. For e-visa destinations like Uzbekistan or Azerbaijan, full visa assistance and processing are included." },
      ],
    },
    visasPage: {
      heroTag: "Visa Services 2025",
      heroTitleMain: "Hassle-Free Visa Assistance",
      heroTitleAccent: "For UAE Residents",
      heroDesc: "Complete documentation, flight reservations, and embassy appointment scheduling handled by UAE visa specialists.",
      badgeApproval: "99.4% Approval Rate",
      badgeExpress: "Express E-Visa Support",
      badgeVFS: "VFS & Embassy Appointment Support",
      processTag: "How It Works",
      processTitle: "4-Step Simple Visa Process",
      steps: [
        { num: "01", title: "Consultation & Document Check", desc: "Our visa team checks your residence visa validity and lists exact embassy requirements." },
        { num: "02", title: "Form & Flight Reservation", desc: "We complete your official application forms and issue verifiable flight & hotel bookings." },
        { num: "03", title: "VFS / Embassy Appointment", desc: "We secure your appointment slot at VFS Global or TLScontact and format your file." },
        { num: "04", title: "Passport & Visa Delivery", desc: "Track your visa status until your passport is returned stamped and ready for travel." },
      ],
      faqTag: "Got Questions?",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "How long does a Schengen visa take from the UAE?", a: "A Schengen visa from the UAE typically takes 10–15 working days after your VFS appointment. We recommend applying at least 4–6 weeks before travel. Skylight Travel handles document preparation and appointment booking." },
        { q: "What documents are required for a USA visa from UAE?", a: "For a USA B1/B2 tourist visa from UAE, you need a valid passport (6+ months), completed DS-160 form, bank statements, employment NOC letter, photographs, and travel itinerary. We assist with all documentation." },
        { q: "Which countries are visa-free for UAE residents?", a: "UAE residents can travel visa-free to Georgia (up to 90 days), Armenia, and Montenegro. UAE passport holders enjoy visa-free access to 170+ countries. Contact Skylight Travel for destination-specific guidance." },
      ],
    },
    contactPage: {
      heroTag: "Contact Skylight Travel",
      heroTitleMain: "Plan Your Next",
      heroTitleAccent: "Adventure Today",
      heroDesc: "Speak directly to our UAE-based travel consultants — personalized advice, transparent quotes, zero obligation.",
      badgeWhatsApp: "< 5 Min WhatsApp Response",
      badgeEmail: "< 2 Hour Email Response",
      badgeNoHidden: "Zero Hidden Fees",
      faqTag: "Got Questions?",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "Do I need an appointment to visit your Sharjah office?", a: "No appointment needed! Walk-ins are always welcome Sunday to Friday, 9:00 AM – 9:00 PM at our Sharjah office." },
        { q: "How quickly will I receive my custom travel quote?", a: "Our consultants respond within 2 to 5 minutes on WhatsApp and within 2 hours for email inquiries with detailed itemized options." },
        { q: "Can you assist with urgent visa processing?", a: "Yes! We specialize in express e-visa applications for Uzbekistan, Azerbaijan, Armenia, Schengen, UK, Japan, and US visa appointments." },
        { q: "What payment methods do you accept?", a: "We accept credit/debit cards, online bank transfers, and cash payments at our Sharjah office." },
      ],
    },
    blogPage: {
      tag: "Skylight Travel Journal",
      heroTitleMain: "Insider Guides &",
      heroTitleAccent: "Travel Inspiration",
      heroDesc: "Expert travel advice, Schengen visa walkthroughs, and curated destination guides crafted specifically for UAE residents and families.",
    },
  },

  ar: {
    common: {
      backToHome: "العودة للرئيسية",
      startingFrom: "يبدأ من",
      perPerson: " / شخص",
      pax: "شخص",
    },
    nav: {
      packages: "الباقات السياحية",
      visas: "تأشيرات السفر",
      about: "عن سكاي لايت",
      contact: "اتصل بنا",
      tagline: "وكالة السفر الأكثر ثقة في الإمارات",
      email: "info@skylighttourism.com",
      localTime: "توقيت الإمارات",
      getInTouch: "تواصل معنا",
    },
    hero: {
      eyebrow: "وكالة السفر الأكثر ثقة في الإمارات",
      headlineMain: "العالم",
      headlineItalic: "بانتظارك.",
      desc: "نبتكر أروع الرحلات السياحية ونستخرج التأشيرات بكل سهولة وعناية فائقة. موضع ثقة أكثر من 5000 عائلة في الإمارات منذ عام 2020.",
      btnPackages: "استكشف الباقات",
      btnWhatsApp: "تواصل عبر واتساب",
      popular: "الأكثر طلباً ←",
      stats: {
        travellers: "مسافر في الإمارات",
        destinations: "وجهة عالمية",
        rating: "التقييم",
        years: "سنوات من الثقة",
      },
    },
    packages: {
      tag: "الباقات السياحية",
      titleMain: "رحلة أحلامك",
      titleAccent: "تبدأ هنا",
      viewAll: "عرض جميع الباقات",
      pax: "شخص",
      from: "يبدأ من",
      apply: "عرض التفاصيل",
      featured: "مميز",
    },
    visas: {
      tag: "خدمات التأشيرات",
      titleMain: "سفر بلا حدود",
      titleAccent: "يبدأ من هنا",
      desc: "خبرة متكاملة في استخراج تأشيرات السفر للمواطنين والمقيمين في الإمارات. من التأشيرات الإلكترونية إلى مواعيد السفارات.",
      viewAll: "جميع خدمات التأشيرات",
      apply: "قدّم الآن",
      visaFree: "بدون تأشيرة",
      processing: "مدة المعالجة",
    },
    about: {
      tag: "قصتنا",
      titleMain: "مبنيون على الثقة،",
      titleAccent: "والرعاية والإخلاص",
      p1: "في عام 2020، بدأ فريق صغير في الشارقة شركة هاي سكاي للسفريات بإيمان بسيط — كل عائلة في الإمارات تستحق رؤية العالم بدون عناء التخطيط المفرد.",
      p2: "وبعد ست سنوات، في عام 2026 جددنا هويتنا إلى سكاي لايت للسفريات، لنقدم تجربة رقمية فاخرة لأكثر من 5000 عائلة تثق بنا في أغلى لحظاتها.",
      statLabel: "سنوات في خدمة عائلات الإمارات",
      pillars: {
        expertTitle: "خبراء معتمدون في الإمارات",
        expertDesc: "مرخصون بالكامل من هيئات السياحة في الإمارات بخبرة محلية تزيد عن 6 سنوات.",
        supportTitle: "دعم 24/7 خلال الرحلة",
        supportDesc: "فريقنا في الإمارات متواجد عبر واتساب طوال رحلتك لتغيير الطيران أو الدعم الطارئ.",
        priceTitle: "ضمان أفضل الأسعار",
        priceDesc: "نضمن تقديم أفضل أسعار الرحلات مع إقامات إختيارية في فنادق 4 نجوم فاخرة.",
      },
    },
    why: {
      tag: "لماذا سكاي لايت",
      titleMain: "لماذا يختار الآلاف",
      titleAccent: "سكاي لايت للسفريات",
      cards: [
        { title: "باقات مُصمَّمة خصيصاً", desc: "كل رحلة مُصممة حول ميزانيتك وجدولك الزمني ووجهاتك المفضلة — لا برامج جاهزة." },
        { title: "استخراج تأشيرة بلا تعقيد", desc: "دعم كامل في الوثائق وحجز المواعيد وتتبع الطلبات لحظة بلحظة — ندير كل شيء نيابةً عنك." },
        { title: "إرشاد شخصي من خبراء", desc: "مستشارو سفر متخصصون متاحون عبر واتساب أو الهاتف أو بالزيارة المباشرة لمكتبنا في الشارقة." },
        { title: "ضمان أفضل سعر", desc: "نطابق أي عرض سعري أو نتفوق عليه لنفس البرنامج السياحي. أسعار شفافة بدون رسوم خفية." },
      ],
    },
    services: {
      tag: "ما نقدّمه",
      titleMain: "خدمات سفر",
      titleAccent: "متكاملة",
      learnMore: "اعرف المزيد",
      cards: [
        { title: "حجز تذاكر الطيران", desc: "أفضل أسعار التذاكر على جميع شركات الطيران الكبرى، اقتصادية وأعمال وأولى." },
        { title: "حجوزات الفنادق", desc: "فنادق مُختارة بعناية في أكثر من 50 وجهة، من الإقامات البوتيك إلى المنتجعات الخمس نجوم." },
        { title: "باقات العطلات السياحية", desc: "باقات مُخصصة وجاهزة تشمل الطيران والفنادق والتنقلات والجولات المُرشدة." },
        { title: "خدمات التأشيرات", desc: "توثيق كامل وتقديم للسفارات وجدولة مواعيد التأشيرات." },
        { title: "باقات العمرة والحج", desc: "برامج مُحكمة التنظيم مع الإقامة في مكة المكرمة والمدينة المنورة." },
        { title: "تأجير السيارات", desc: "سيارات إيجار موثوقة في وجهتك، من الاقتصادية إلى SUV الفاخرة." },
        { title: "حجوزات الرحلات البحرية", desc: "باقات بحرية في البحر الأبيض المتوسط والخليج العربي وحول العالم بأسعار تنافسية." },
      ],
    },
    testimonials: {
      tag: "آراء العملاء",
      titleMain: "قصص حقيقية من",
      titleAccent: "مسافرين حقيقيين",
      tripLabel: "الرحلة",
      prev: "التقييم السابق",
      next: "التقييم التالي",
      google: "تقييم موثّق على جوجل",
    },
    faq: {
      tag: "لديك أسئلة؟",
      title: "الأسئلة الشائعة",
      items: [
        { q: "لماذا تُعتبر سكاي لايت أفضل وكالة سياحية في الشارقة؟", a: "تقدم سكاي لايت باقات عطلات مُخصصة وأسعاراً شفافة بدون رسوم خفية وإرشاداً متكاملاً لتأشيرات شنغن والدول الأجنبية ودعماً على مدار الساعة عبر واتساب." },
        { q: "ما الوجهات التي يمكنني السفر إليها بدون تأشيرة مسبقة من الإمارات؟", a: "يمكن للمقيمين في الإمارات السفر بدون تأشيرة أو الحصول على تأشيرة عند الوصول إلى وجهات مثل جورجيا وأرمينيا وأذربيجان والجبل الأسود وصربيا." },
        { q: "قبل كم من الوقت ينبغي لي حجز باقة العطلة؟", a: "نوصي بالحجز قبل 3-4 أسابيع على الأقل للعطلات العادية، و6-8 أسابيع للمواسم الذروة مثل إجازات العيد والصيف ورأس السنة أو الوجهات التي تستلزم مواعيد سفارة." },
        { q: "هل تشمل باقات سكاي لايت تذاكر الطيران والنقل من الفنادق؟", a: "نعم! جميع باقات سكاي لايت القياسية تشمل رحلات ذهاباً وإياباً من مطارات الإمارات وإقامة مع الإفطار ونقلاً من وإلى المطار وجولات سياحية مُرشدة." },
        { q: "هل يمكن لسكاي لايت المساعدة في تأشيرات شنغن أو الولايات المتحدة من الإمارات؟", a: "بالتأكيد. يساعد فريق التأشيرات لدينا في التحقق من المستندات وتعبئة الاستمارات والحصول على مواعيد السفارات ومراكز VFS." },
      ],
    },
    blog: {
      tag: "مدونة السفر",
      titleMain: "دليل المطّلع",
      titleAccent: "حول العالم",
      viewAll: "عرض جميع المقالات",
      readArticle: "اقرأ المقال",
    },
    cta: {
      tag: "جاهز للسفر؟",
      titleMain: "مغامرتك القادمة",
      titleAccent: "تبدأ من هنا",
      desc: "تحدث اليوم مع مستشار سفر من سكاي لايت للحصول على تخطيط مُخصص وأسعار شفافة بدون أي التزام.",
      btnPlan: "خطط لرحلتي",
      btnWhatsApp: "تواصل عبر واتساب",
    },
    contact: {
      tag: "تواصل مع سكاي لايت للسفريات",
      heroTitle: "خطط لمغامرتك",
      heroAccent: "القادمة اليوم",
      heroDesc: "تحدث مباشرة مع مستشاري السفر لدينا في الإمارات — استشارات مخصصة وعروض أسعار شفافة بدون أي التزام.",
      chatAgent1: "محادثة المستشار 1",
      chatAgent2: "محادثة المستشار 2",
      callDirect: "الاتصال المباشر",
      visitHq: "زيارة المقر بالشارقة",
      walkIns: "نرحب بالزيارات المباشرة",
      formTitle: "أرسل لنا رسالة",
      formSub: "أدخل بياناتك أدناه، وسيتواصل معك مستشارونا في الإمارات خلال ساعتين.",
      nameLabel: "الاسم الكامل",
      phoneLabel: "رقم الهاتف / واتساب",
      emailLabel: "البريد الإلكتروني",
      destinationLabel: "الوجهة / الدولة",
      serviceLabel: "ما هي الخدمة التي تبحث عنها؟",
      messageLabel: "تفاصيل الرحلة / الرسالة",
      submitBtn: "إرسال طلب السفر",
      sending: "جاري إرسال الرسالة...",
      directDetails: "تفاصيل الاتصال المباشر",
      headOffice: "عنوان المقر الرئيسي",
      addressValue: "الشارقة، الإمارات العربية المتحدة",
      workingHours: "ساعات العمل",
      workingHoursValue: "الأحد – الجمعة: 9:00 صباحاً – 9:00 مساءً (توقيت الإمارات)",
      getDirections: "الحصول على الاتجاهات",
    },
    widget: {
      contactUs: "تواصل معنا",
      agent1: "المستشار 1",
      agent2: "المستشار 2",
      aiChat: "المستشار الذكي سكاي",
      aiSub: "إجابات فورية • 24/7",
      online: "متصل الان",
    },
    footer: {
      desc: "شركة السفر والسياحة الموثوقة في الشارقة، حيث تبدأ كل رحلة بالثقة. نبتكر أفضل العطلات ونضمن تأشيرات سلسة بكل عناية.",
      explore: "استكشف",
      services: "الخدمات",
      getInTouch: "تواصل معنا",
      newsletter: "النشرة البريدية",
      emailPlaceholder: "عنوان بريدك الإلكتروني",
      copyright: "سكاي لايت للسياحة ش.ذ.م.م. جميع الحقوق محفوظة.",
      createdAndCaredBy: "تصميم وعناية بواسطة",
    },
    aboutPage: {
      heroTag: "عن سكاي لايت للسفريات",
      heroTitleMain: "نصنع رحلات",
      heroTitleAccent: "لا تُنسى منذ 2020",
      heroDesc: "شركة السفر والسياحة الموثوقة في الشارقة — مقرها الرئيسي في الشارقة، الإمارات. ملتزمون بتقديم باقات عطلات متكاملة وتأشيرات سفر بكل سهولة وعناية فائقة.",
      badgeLicensed: "وكالة مرخصة في الإمارات",
      badgeExperience: "خبرة تزيد عن 6 سنوات",
      badgeHQ: "المقر الرئيسي في الشارقة",
      stats: [
        { value: "5,000+", label: "عائلة في الإمارات", sub: "موضع ثقة منذ 2020" },
        { value: "50+", label: "وجهة سياحية عالمية", sub: "باقات عطلات حول العالم" },
        { value: "99.4%", label: "نسبة قبول التأشيرات", sub: "شنغن، اليابان، بريطانيا والمزيد" },
        { value: "4.9★", label: "تقييم جوجل", sub: "أكثر من 800 تقييم 5 نجوم" },
      ],
      storyEyebrow: "قصتنا",
      photoEst: "تأسست 2020",
      photoServed: "عائلة تمت خدمتهم",
      photoRating: "تقييم جوجل",
      photoYears: "سنوات نشاط",
      photoHqTitle: "مقر سكاي لايت للسفريات",
      photoHqSub: "الشارقة، الإمارات العربية المتحدة",
      photoOpen: "مفتوح الآن",
      storyTitleMain: "مبنيون على الثقة، ",
      storyTitleAccent: "والرعاية والإخلاص",
      storyP1Bold1: "2020",
      storyP1Bold2: "هاي سكاي للسفريات",
      storyP1Rest: "في عام 2020، بدأ فريق صغير في الشارقة شركة هاي سكاي للسفريات بإيمان بسيط — كل عائلة في الإمارات تستحق رؤية العالم بدون عناء التخطيط بمفردها.",
      storyP2Bold1: "2026",
      storyP2Bold2: "سكاي لايت للسفريات",
      storyP2Rest: "وبعد ست سنوات، في عام 2026 جددنا هويتنا إلى سكاي لايت للسفريات، لنقدم تجربة رقمية فاخرة لأكثر من 5000 عائلة تثق بنا في أغلى لحظاتها.",
      milestones: [
        { year: "2020", title: "التأسيس باسم هاي سكاي للسفريات", desc: "انطلقت في الشارقة بمهمة واضحة لتسهيل استخراج التأشيرات وتخطيط العطلات للمقيمين في الإمارات." },
        { year: "2024", title: "إنجاز خدمة أكثر من 5,000 عائلة", desc: "الاحتفال بخدمة أكثر من 5,000 عائلة في الإمارات بخدمة مخصصة 1 على 1 عبر واتساب والزيارة المباشرة." },
        { year: "2026", title: "التجديد إلى سكاي لايت للسفريات", desc: "إطلاق الهوية الجديدة مع خدمات رقمية متطورة وتجارب عطلات سياحية فاخرة ومخصصة." },
      ],
      latestBadge: "الأحدث",
      whyChooseTag: "لماذا تختارنا",
      whyChooseTitle: "ما الذي يميز سكاي لايت",
      whyChooseSub: "نهتم بعطلتك تماماً كما لو كانت رحلة عائلتنا الخاصة.",
      features: [
        { title: "أسعار واضحة وشفافة", desc: "لا رسوم خفية أو تكاليف مفاجئة. كل عرض سعر مفصل وواضح بالكامل قبل السداد." },
        { title: "مستشار سفر مخصص", desc: "خبير سفر حقيقي — متاح عبر واتساب أو الهاتف أو الزيارة المباشرة — يتابع رحلتك من البداية حتى النهاية." },
        { title: "نسبة نجاح 99.4% للتأشيرات", desc: "خبرة واسعة في تأشيرات شنغن واليابان وأمريكا وبريطانيا وطريق الحرير مع تدقيق دقيق للمستندات." },
        { title: "خبراء معتمدون في الإمارات", desc: "مرخصون بالكامل من هيئات السياحة في الإمارات بخبرة محلية تتجاوز 6 سنوات." },
        { title: "دعم 24/7 طوال الرحلة", desc: "فريقنا في الإمارات متاح عبر واتساب طوال رحلتك لأي تعديل على الطيران أو المساعدة الطارئة." },
        { title: "ضمان أفضل الأسعار", desc: "نطابق أو نتفوق على أي عرض سعر مماثل مع توفير إقامات منتقاة في فنادق 4 نجوم." },
      ],
      contactTag: "خدمة شخصية متميزة",
      contactTitle: "تحدث مع متخصص سفر من سكاي لايت اليوم",
      contactDesc: "سواء كنت بحاجة لتقييم سريع للتأشيرة أو تصميم برنامج سياحي مخصص لمدة 7 أيام، فريقنا في الإمارات بانتظارك.",
      btnWhatsApp: "تواصل عبر واتساب",
      btnCall: "اتصل بنا الآن",
    },
    packagesPage: {
      heroTag: "باقات العطلات 2025",
      heroTitleMain: "عطلات سياحية مميزة",
      heroTitleAccent: "من الإمارات",
      heroDesc: "باقات سفر متكاملة صممها خبراء في الإمارات — تشمل تذاكر الطيران، فنادق 4 نجوم، جولات سياحية مرشدة، ومساعدة كاملة في التأشيرات.",
      badgeFrom: "باقات تبدأ من 1,699 درهم",
      badgeFlightHotel: "تشمل الطيران + فندق 4 نجوم",
      badgeWhatsApp: "دعم واتساب على مدار الساعة",
      faqTag: "لديك أسئلة؟",
      faqTitle: "الأسئلة الشائعة حول الباقات",
      faqs: [
        { q: "كم تبلغ تكلفة باقات العطلات من الإمارات؟", a: "تبدأ باقات العطلات من 1,699 درهم للشخص لرحلات 4 ليالٍ إلى أوزبكستان أو أذربيجان. وتبدأ باقات تايلاند وجورجيا وأرمينيا من 1,999 إلى 2,899 درهم للشخص شاملة الطيران والفنادق والجولات." },
        { q: "ما الذي تشمله باقات سكاي لايت للسفريات؟", a: "تشمل الباقات عادةً رحلات طيران ذهاباً وإياباً من الإمارات، إقامة في فنادق 4 نجوم مع الإفطار، جميع التنقلات من وإلى المطار، جولات سياحية مع مرشد، وتأمين السفر، بالإضافة إلى المساعدة في التأشيرة." },
        { q: "هل يمكنني تعديل وتخصيص باقة العطلة؟", a: "بالتأكيد. يمكن تخصيص جميع باقات سكاي لايت بالكامل لتناسب تواريخ سفرك، ميزانيتك، عدد المسافرين، وفنادقك المفضلة. تواصل مع فريقنا عبر واتساب للحصول على عرض مخصص." },
        { q: "هل رسوم التأشيرة مشمولة في سعر الباقة؟", a: "بالنسبة للوجهات التي لا تتطلب تأشيرة لمقيمي الإمارات (مثل جورجيا وأرمينيا)، لا توجد رسوم تأشيرة. أما الوجهات ذات التأشيرة الإلكترونية كأوزبكستان وأذربيجان، فتشمل الباقة المساعدة الكاملة واستخراج التأشيرة." },
      ],
    },
    visasPage: {
      heroTag: "خدمات التأشيرات 2025",
      heroTitleMain: "خدمات تأشيرات سلسة",
      heroTitleAccent: "للمقيمين في الإمارات",
      heroDesc: "إعداد متكامل للمستندات وحجوزات طيران وفنادق موثوقة وجدولة مواعيد السفارات بإشراف متخصصي التأشيرات في الإمارات.",
      badgeApproval: "نسبة قبول 99.4%",
      badgeExpress: "تأشيرات إلكترونية سريعة",
      badgeVFS: "حجز مواعيد VFS والسفارات",
      processTag: "خطوات العمل",
      processTitle: "4 خطوات بسيطة للحصول على التأشيرة",
      steps: [
        { num: "01", title: "الاستشارة وتدقيق المستندات", desc: "يفحص فريقنا صلاحية إقامتك ويوفر قائمة دقيقة بمتطلبات السفارة." },
        { num: "02", title: "تعبئة النماذج وحجز الطيران", desc: "نقوم بتعبئة طلبات التأشيرة الرسمية وإصدار حجوزات طيران وفنادق موثوقة ومؤكدة." },
        { num: "03", title: "حجز موعد VFS / السفارة", desc: "نحجز لك أقرب موعد متاح في مراكز VFS أو TLScontact ونجهز ملفك بالكامل." },
        { num: "04", title: "استلام الجواز والتأشيرة", desc: "تتبع حالة طلبك حتى استلام جواز سفرك مختوماً وجاهزاً للسفر." },
      ],
      faqTag: "لديك أسئلة؟",
      faqTitle: "الأسئلة الشائعة حول التأشيرات",
      faqs: [
        { q: "كم تستغرق تأشيرة شنغن من الإمارات؟", a: "تستغرق تأشيرة شنغن عادةً من 10 إلى 15 يوم عمل بعد موعد VFS. نوصي بالتقديم قبل 4 إلى 6 أسابيع من موعد السفر. تتولى سكاي لايت تجهيز المستندات وحجز المواعيد." },
        { q: "ما هي المستندات المطلوبة لتأشيرة أمريكا من الإمارات؟", a: "لتأشيرة السياحة الأمريكية B1/B2، يلزم جواز سفر ساري (6+ أشهر)، استمارة DS-160، كشف حساب بنكي، خطاب عدم ممانعة من جهة العمل، صور شخصية، وخطة سفر. نساعدك في كافة الإجراءات." },
        { q: "ما هي الدول التي يدخلها مقيمو الإمارات بدون تأشيرة مسبقة؟", a: "يمكن لمقيمي الإمارات السفر بدون تأشيرة مسبقة أو بتأشيرة عند الوصول إلى جورجيا (حتى 90 يوماً)، أرمينيا، والجبل الأسود. تواصل معنا لمعرفة متطلبات كل وجهة بدقة." },
      ],
    },
    contactPage: {
      heroTag: "تواصل مع سكاي لايت للسفريات",
      heroTitleMain: "خطط لمغامرتك",
      heroTitleAccent: "القادمة اليوم",
      heroDesc: "تحدث مباشرة مع مستشاري السفر لدينا في الإمارات — استشارات مخصصة وعروض أسعار شفافة بدون أي التزام.",
      badgeWhatsApp: "رد عبر واتساب خلال أقل من 5 دقائق",
      badgeEmail: "رد عبر البريد خلال أقل من ساعتين",
      badgeNoHidden: "بدون أي رسوم خفية",
      faqTag: "لديك أسئلة؟",
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        { q: "هل أحتاج إلى موعد مسبق لزيارة مكتب الشارقة؟", a: "لا داعي لأي موعد! نرحب بزيارتك مباشرة من الأحد إلى الجمعة، من 9:00 صباحاً حتى 9:00 مساءً في مكتبنا بالشارقة." },
        { q: "ما سرعة استلام عرض السعر المخصص لرحلتي؟", a: "يجيب مستشارونا خلال 2 إلى 5 دقائق عبر واتساب، وخلال ساعتين عبر البريد الإلكتروني مع خيارات مفصلة." },
        { q: "هل تقدمون خدمات استخراج التأشيرات العاجلة؟", a: "نعم! نتخصص في التأشيرات الإلكترونية السريعة لأوزبكستان وأذربيجان وأرمينيا ومواعيد تأشيرات شنغن وبريطانيا وأمريكا واليابان." },
        { q: "ما هي طرق الدفع المتاحة لديكم؟", a: "نقبل بطاقات الائتمان والخصم، التحويلات البنكية المباشرة، والدفع نقداً في مكتبنا بالشارقة." },
      ],
    },
    blogPage: {
      tag: "مجلة سكاي لايت للسفر",
      heroTitleMain: "أدلة السفر و",
      heroTitleAccent: "الإلهام السياحي",
      heroDesc: "نصائح سفر من الخبراء، وأدلة شاملة لتأشيرات شنغن، ووجهات سياحية مختارة خصيصاً للمقيمين والعائلات في الإمارات.",
    },
  },
};
