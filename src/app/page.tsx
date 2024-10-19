import Hero from "@/components/Hero";
import OffersSection from "@/components/OffersSection";
import DressStyles from "@/components/DressStyles";
import Testimonials from "@/components/Testimonials";
import CTR from "@/components/CTR";

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="onsale">
        <OffersSection />
      </section>
      <section id="brands">
        <DressStyles />
      </section>
      <Testimonials />
    </div>
  );
}
