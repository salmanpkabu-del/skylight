import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Visas from "@/components/Visas";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

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
