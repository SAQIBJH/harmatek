import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>HarmTek | Forklift Safety & Collision Avoidance Systems</title>
        <meta
          name="description"
          content="HarmTek provides industry-leading forklift collision avoidance systems and telematics solutions. Enhance workplace safety and productivity with our advanced FCAS technology."
        />
        <meta
          name="keywords"
          content="forklift safety, collision avoidance system, FCAS, telematics, warehouse safety, material handling, fleet management, HarmTek"
        />
        <meta name="author" content="HarmTek" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://harmtek.co" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HarmTek | Forklift Safety & Collision Avoidance Systems" />
        <meta
          property="og:description"
          content="Advanced forklift collision avoidance and telematics solutions for safer, more productive warehouses."
        />
        <meta property="og:site_name" content="HarmTek" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HarmTek | Forklift Safety Systems" />
        <meta
          name="twitter:description"
          content="Industry-leading collision avoidance and safety solutions for material handling."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProductsSection />
          <FeaturesSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
