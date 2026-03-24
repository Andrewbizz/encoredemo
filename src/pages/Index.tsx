import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedAuctions from "@/components/FeaturedAuctions";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import "@/styles/index.css";
import AnnouncementPopup from "@/components/AnnouncmentPopup";

const Index = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main className="mainPage">
        <HeroSection />
        <HowItWorks />
        <FeaturedAuctions />
        <ServicesSection />
        <BenefitsSection />
        <TestimonialsSection />

        <CTASection />
      </main>
      <Footer />

      <AnnouncementPopup />
    </div>
  );
};

export default Index;
