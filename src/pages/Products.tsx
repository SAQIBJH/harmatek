import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// Option 1: Import from separate data file (recommended for dynamic updates)
// import { products } from "@/data/products";

// Option 2: Inline data (current approach)
import productFCAS from "@/assets/product-fcas.png";
import productTelematics from "@/assets/product-telematics.png";
import productCustom from "@/assets/product-custom.png";
import {products} from "../data/products"

const productss = [
  {
    title: "Forklift Collision Avoidance System (FCAS)",
    description:
      "Advanced sensor technology that detects pedestrians, objects, and other forklifts in real-time to prevent accidents.",
    image: productFCAS,
    features: [
      "360° detection coverage",
      "Real-time audio/visual alerts",
      "Speed limiting functionality",
      "Customizable detection zones",
    ],
  },
  {
    title: "Telematics Solutions",
    description:
      "Comprehensive fleet management and productivity monitoring system for data-driven warehouse optimization.",
    image: productTelematics,
    features: [
      "Real-time fleet tracking",
      "Operator performance analytics",
      "Impact detection & reporting",
      "Maintenance scheduling",
    ],
  },
  {
    title: "Custom Safety Solutions",
    description:
      "Tailored safety engineering solutions designed to meet your unique operational requirements.",
    image: productCustom,
    features: [
      "In-house R&D capabilities",
      "Modular system design",
      "Seamless integration",
      "Ongoing support",
    ],
  },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Our Products | HarmaTek</title>
        <meta
          name="description"
          content="Explore HarmaTek's range of forklift safety systems, collision avoidance technology, and telematics solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
        <Header />

        <main className="flex-grow pt-32 pb-24">
          {/* Page Header */}
          <div className="container mx-auto px-4 lg:px-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Our <span className="text-gradient-gold">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover our comprehensive suite of safety and productivity solutions designed for the modern warehouse.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={product.title} {...product} index={index} />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <p className="text-muted-foreground mb-6">
                Looking for a custom solution? We specialize in tailoring our technology to your specific needs.
              </p>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg">
                Contact Sales Team
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Products;
