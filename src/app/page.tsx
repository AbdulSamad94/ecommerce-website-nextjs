import DressStyles from "@/components/DressStyles";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OffersSection from "@/components/OffersSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <OffersSection />
      <DressStyles />
      <Testimonials />
    </div>
  );
}
