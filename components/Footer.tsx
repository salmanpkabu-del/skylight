import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Packages", href: "/packages" },
  { label: "Visas", href: "/visas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Flight Bookings", href: "/contact" },
  { label: "Hotel Reservations", href: "/contact" },
  { label: "Holiday Tour Packages", href: "/packages" },
  { label: "Visa Assistance", href: "/visas" },
  { label: "Umrah & Hajj Packages", href: "/contact" },
  { label: "Car Rental Services", href: "/contact" },
  { label: "Cruise Bookings", href: "/contact" },
];

const socials = [
  { icon: <InstagramIcon className="w-4 h-4" />, href: "https://instagram.com/skylighttravel", label: "Instagram" },
  { icon: <FacebookIcon className="w-4 h-4" />, href: "https://facebook.com/skylighttravel", label: "Facebook" },
  { icon: <LinkedinIcon className="w-4 h-4" />, href: "https://linkedin.com/company/skylighttravel", label: "LinkedIn" },
  { icon: <MessageCircle className="w-4 h-4" />, href: "https://wa.me/971582738508", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-[#011c15] relative overflow-hidden text-white pt-24 lg:pt-32 border-t border-white/10">
      
      {/* Huge Background Typography - SKYLIGHT */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none flex items-end justify-center opacity-[0.025] z-0 mix-blend-overlay">
        <span className="text-[26vw] font-bold leading-[0.75] tracking-tighter text-white whitespace-nowrap translate-y-[22%]">SKYLIGHT</span>
      </div>

      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md-tablet:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 lg:mb-32">
          
          {/* Brand Col - spans 4 */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8 md-tablet:col-span-2">
            <Link href="/" className="mb-8 block">
              <Image
                src="/skylight.svg"
                alt="Skylight Travel"
                width={200}
                height={50}
                className="h-10 sm:h-12 w-auto invert brightness-0 hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-white/50 mb-10 max-w-sm">
              Sharjah&apos;s trusted travel & tourism company, where every journey begins with trust. We craft premium holidays and secure seamless visas with genuine care.
            </p>
            
            {/* Newsletter Input */}
            <div className="w-full max-w-sm relative group">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-green/80 mb-4">Newsletter</p>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-green/50 focus:bg-white/10 transition-all duration-300"
                />
                <button 
                  type="button"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-green text-brand-black flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <Send className="w-4 h-4 ml-[-2px]" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Quick Links - spans 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-[15px] text-white/50 hover:text-white transition-colors w-fit"
                  >
                    <span className="w-0 overflow-hidden opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 ease-[var(--ease-spring)] flex items-center text-brand-green">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - spans 3 */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
              Services
            </h4>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-[15px] text-white/50 hover:text-white transition-colors w-fit"
                  >
                    <span className="w-0 overflow-hidden opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 ease-[var(--ease-spring)] flex items-center text-brand-green">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - spans 3 */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-6">
              <a
                href="https://maps.google.com/?q=Al+Sajaa+Sharjah+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 text-white/50 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-brand-black transition-all duration-300 mt-[-4px]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[14px] leading-relaxed max-w-[180px]">Al Sajaa, Sharjah<br/>United Arab Emirates</span>
              </a>
              
              <a
                href="tel:+971582738508"
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-brand-black transition-all duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[14px]">+971 58 273 8508</span>
              </a>

              <a
                href="mailto:info@skylighttravels.com"
                className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-brand-black transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[14px]">info@skylighttravels.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 relative z-20">
          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} Skylight Travel. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:bg-brand-green hover:text-brand-black hover:border-brand-green transition-all duration-300 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">{s.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
