"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Check } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
    <div className="grid grid-cols-2 gap-16 mobile-max:grid-cols-1 mobile-max:gap-10">
      {/* Form */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-8">Send Us a Message</h2>
        {status === "sent" ? (
          <div className="bg-brand-green/10 border border-brand-green/30 p-8 text-center rounded-xl">
            <Check className="w-12 h-12 text-brand-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Message Received!</h3>
            <p className="text-white/60 text-sm">Our team will contact you within 2 hours on WhatsApp or email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mobile-max:grid-cols-1">
              <div>
                <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">Full Name *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-green focus:outline-none placeholder-white/20 transition-colors rounded-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">Phone / WhatsApp *</label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-green focus:outline-none placeholder-white/20 transition-colors rounded-lg"
                  placeholder="+971 ..."
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-green focus:outline-none placeholder-white/20 transition-colors rounded-lg"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">Where do you want to go?</label>
              <input
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-green focus:outline-none placeholder-white/20 transition-colors rounded-lg"
                placeholder="e.g. Thailand, Georgia, Schengen visa..."
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/40 block mb-2">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 focus:border-brand-green focus:outline-none placeholder-white/20 transition-colors resize-none rounded-lg"
                placeholder="Tell us your travel dates, group size, budget..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-green w-full py-4 flex items-center justify-center gap-2.5 text-sm font-semibold tracking-[0.1em] uppercase disabled:opacity-60 rounded-lg"
            >
              <Send className="w-4 h-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      {/* Direct Contact & Map */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">Get in Touch Directly</h2>
          <div className="space-y-5">
            <a href="https://wa.me/971582738508" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="w-11 h-11 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">WhatsApp (Fastest)</p>
                <p className="text-white/50 text-sm">+971 58 273 8508</p>
                <p className="text-white/30 text-xs mt-0.5">Replies within 5 minutes</p>
              </div>
            </a>
            <a href="tel:+971582738508" className="flex items-start gap-4 group">
              <div className="w-11 h-11 bg-brand-green/10 border border-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                <Phone className="w-5 h-5 text-brand-green group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Call Us</p>
                <p className="text-white/50 text-sm">+971 58 273 8508</p>
                <p className="text-white/30 text-xs mt-0.5">Sun–Fri, 9am–9pm UAE time</p>
              </div>
            </a>
            <a href="mailto:info@skylighttravels.com" className="flex items-start gap-4 group">
              <div className="w-11 h-11 bg-brand-green/10 border border-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                <Mail className="w-5 h-5 text-brand-green group-hover:text-black transition-colors" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Email</p>
                <p className="text-white/50 text-sm">info@skylighttravels.com</p>
                <p className="text-white/30 text-xs mt-0.5">Response within 2 hours</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-brand-green/10 border border-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Office Address</p>
                <p className="text-white/50 text-sm">Al Sajaa, Sharjah, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 relative">
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
        </div>
      </div>
    </div>
  );
}
