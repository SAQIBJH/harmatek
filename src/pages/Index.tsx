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
        <title>Industrial Engineering & Machine Manufacturing Company | Integrated Industrial Solutions</title>
        <meta
          name="description"
          content="Specialized industrial engineering company offering integrated solutions in machine design, production lines manufacturing, and high-quality industrial spare parts and components."
        />
        <meta
          name="keywords"
          content="forklift safety, collision avoidance system, FCAS, telematics, warehouse safety, material handling, fleet management, HarmaTek"
        />
        <meta name="author" content="HarmaTek" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://harmatek.co" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HarmaTek | Forklift Safety & Collision Avoidance Systems" />
        <meta
          property="og:description"
          content="Advanced forklift collision avoidance and telematics solutions for safer, more productive warehouses."
        />
        <meta property="og:site_name" content="HarmaTek" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HarmaTek | Forklift Safety Systems" />
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
