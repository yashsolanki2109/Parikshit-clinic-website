import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { BookingWizard } from "@/components/booking-wizard";
import { Services } from "@/components/services";
import { MeetDoctor } from "@/components/meet-doctor";
import { Technology } from "@/components/technology";
import { Transformations } from "@/components/transformations";
import { Pricing } from "@/components/pricing";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <BookingWizard />
        <Services />
        <MeetDoctor />
        <Technology />
        <Transformations />
        <Pricing />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
