export type Language = "en" | "ar";

export interface TranslationDict {
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
  };
}

export const dictionary: Record<Language, TranslationDict> = {
  en: {
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
      pax: "pax",
      from: "From",
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
    },
  },

  ar: {
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
    },
  },
};
