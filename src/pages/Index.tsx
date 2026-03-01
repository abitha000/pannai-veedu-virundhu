import WelcomeAnimation from "@/components/WelcomeAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import SignatureSection from "@/components/SignatureSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <WelcomeAnimation />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <SignatureSection />
        <GallerySection />
        <BookingSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
