"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Check, Clock, Sparkles, Navigation } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    destination: "", 
    serviceType: "Holiday Package", 
    message: "" 
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const serviceTypes = ["Holiday Package", "Visa Assistance", "Flight & Hotel", "Umrah / Hajj", "General Enquiry"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="space-y-16">
      
      {/* 3 Quick Contact Methods Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* WhatsApp Card */}
        <a
          href="https://wa.me/971582738508"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#25D366]/10 border border-[#25D366]/30 p-6 rounded-2xl hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 shadow-lg flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-[#25D366] text-black flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-[#25D366] transition-colors">
            <MessageCircle className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#25D366] group-hover:bg-black animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#25D366] group-hover:text-black">
                Online Now
              </span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-black transition-colors">
              Chat on WhatsApp
            </h3>
            <p className="text-xs text-white/60 group-hover:text-black/80 transition-colors mt-0.5">
              +971 58 273 8508 • &lt; 5 min response
            </p>
          </div>
        </a>

        {/* Call Us Card */}
        <a
          href="tel:+971582738508"
          className="group relative bg-brand-card/90 border border-white/15 p-6 rounded-2xl hover:border-brand-green/50 hover:bg-brand-card transition-all duration-300 shadow-lg flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-black transition-colors">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-green block mb-1">
              Sun–Fri 9am–9pm
            </span>
            <h3 className="text-base font-semibold text-white group-hover:text-brand-green transition-colors">
              Call Travel Specialist
            </h3>
            <p className="text-xs text-white/60 mt-0.5">
              +971 58 273 8508 • Direct Line
            </p>
          </div>
        </a>

        {/* Visit HQ Card */}
        <a
          href="https://maps.google.com/?q=Al+Sajaa+Sharjah+UAE"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-brand-card/90 border border-white/15 p-6 rounded-2xl hover:border-brand-green/50 hover:bg-brand-card transition-all duration-300 shadow-lg flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-black transition-colors">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-green block mb-1">
              Sharjah Office HQ
            </span>
            <h3 className="text-base font-semibold text-white group-hover:text-brand-green transition-colors">
              Visit Al Sajaa HQ
            </h3>
            <p className="text-xs text-white/60 mt-0.5">
              Sharjah, UAE • Walk-ins Welcome
            </p>
          </div>
        </a>
      </div>

      {/* Main Grid: Form + Direct Details & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-brand-card/80 border border-white/15 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl">
          <div className="mb-8">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-green mb-1">Direct Consultation</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Send Us a Message</h2>
            <p className="text-white/60 text-xs sm:text-sm font-light mt-1">
              Fill in your details below. Our UAE consultants will get back to you within 2 hours.
            </p>
          </div>

          {status === "sent" ? (
            <div className="bg-brand-green/10 border border-brand-green/30 p-10 text-center rounded-2xl space-y-3">
              <div className="w-14 h-14 rounded-full bg-brand-green text-black flex items-center justify-center mx-auto mb-2 shadow-[0_0_25px_rgba(166,238,66,0.3)]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Message Received!</h3>
              <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed">
                Thank you for contacting Skylight Travel. A travel specialist will reach out to you via WhatsApp or email within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service Type Pills */}
              <div>
                <label className="text-xs uppercase tracking-wider text-white/60 block mb-3 font-semibold">
                  What service are you looking for?
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, serviceType: type })}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        form.serviceType === type
                          ? "bg-brand-green text-black shadow-[0_0_15px_rgba(166,238,66,0.3)]"
                          : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/60 block mb-2 font-semibold">
                    Full Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3.5 rounded-xl focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 focus:outline-none placeholder-white/30 transition-colors"
                    placeholder="e.g. Mohammed Al Hashimi"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/60 block mb-2 font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3.5 rounded-xl focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 focus:outline-none placeholder-white/30 transition-colors"
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              {/* Email & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/60 block mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3.5 rounded-xl focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 focus:outline-none placeholder-white/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/60 block mb-2 font-semibold">
                    Destination / Country
                  </label>
                  <input
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3.5 rounded-xl focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 focus:outline-none placeholder-white/30 transition-colors"
                    placeholder="e.g. Uzbekistan, Thailand, Schengen..."
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs uppercase tracking-wider text-white/60 block mb-2 font-semibold">
                  Trip Details / Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 text-white text-sm px-4 py-3.5 rounded-xl focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 focus:outline-none placeholder-white/30 transition-colors resize-none"
                  placeholder="Tell us your travel dates, number of adults/children, hotel preferences..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-green w-full py-4 text-sm font-bold tracking-[0.1em] uppercase disabled:opacity-60 rounded-xl gap-2.5 shadow-[0_0_25px_rgba(166,238,66,0.2)]"
              >
                <Send className="w-4 h-4" />
                <span>{status === "sending" ? "Sending Message..." : "Submit Travel Enquiry"}</span>
              </button>
            </form>
          )}
        </div>

        {/* Info & Map Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Office & Direct Contact Details */}
          <div className="bg-brand-card/80 border border-white/15 p-8 rounded-3xl backdrop-blur-md shadow-xl space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-green" /> Direct Contact Details
            </h3>

            <div className="space-y-5 text-sm text-white/80">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold">Head Office Address</p>
                  <p className="text-white/60 text-xs mt-0.5 leading-relaxed">
                    Al Sajaa Industrial Area, Sharjah, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <a href="mailto:info@skylighttravels.com" className="text-brand-green text-xs hover:underline mt-0.5 block">
                    info@skylighttravels.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold">Working Hours</p>
                  <p className="text-white/60 text-xs mt-0.5">
                    Sunday – Friday: 9:00 AM – 9:00 PM (UAE Time)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map Box */}
          <div className="bg-brand-card/80 border border-white/15 rounded-3xl overflow-hidden p-2 shadow-xl relative group">
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden relative">
              <iframe
                title="Skylight Travel Sharjah Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115431.14470355447!2d55.4526685!3d25.3211516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4b00000001%3A0x0!2sAl%20Sajaa%2C%20Sharjah!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md p-3.5 rounded-xl border border-white/15 flex items-center justify-between">
                <div>
                  <p className="text-white text-xs font-semibold">Skylight Travel HQ</p>
                  <p className="text-white/50 text-[11px]">Al Sajaa, Sharjah, UAE</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Al+Sajaa+Sharjah+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-brand-green text-black px-3 py-1.5 rounded-lg text-[11px] font-bold hover:bg-white transition-colors"
                >
                  <Navigation className="w-3 h-3" /> Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
