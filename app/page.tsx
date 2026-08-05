import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Visas from "@/components/Visas";

const WhyChoose = dynamic(() => import("@/components/WhyChoose"));
const Services = dynamic(() => import("@/components/Services"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Blog = dynamic(() => import("@/components/Blog"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Packages />
      <Visas />
      <WhyChoose />
      <Services />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  );
}
