import DressStyles from "@/components/DressStyles";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OffersSection from "@/components/OffersSection";
import Testimonials from "@/components/Testimonials";
import CTR from "@/components/CTR";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <OffersSection />
      <DressStyles />
      <Testimonials />
      <CTR />
      <Footer />
    </div>
  );
}
