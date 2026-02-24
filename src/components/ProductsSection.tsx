import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Contractors from "@/assets/productImages/aux-contact-ua-2-1a1b-front-mount-1no-1nc-for-mc-9b-mc150a.webp";
import PowerSupplies from "@/assets/productImages/vfd-elw-vfd007el21w-1-ac-motor-drives-1-hp.webp";
import EngineeringServices from "@/assets/images/engineering-solutions.png";
// import { products } from "@/data/products";

const products = [
  {
    title: "Contactors",
    description:
      "Advanced sensor technology that detects pedestrians, objects, and other forklifts in real-time to prevent accidents.",
    image: Contractors,
    features: ["Consistent performance under use", "Refined surface finish", "Long-term durability", "Easy maintenance design"],
  },
  {
    title: "Power Supplies",
    description:
      "Comprehensive fleet management and productivity monitoring system for data-driven warehouse optimization.",
    image: PowerSupplies,
    features: ["Refined surface finish", "Long-term durability", "Easy maintenance design", "Stable structural integrity"]
  },
  {
    title: "Engineering Services",
    description:
      "Advanced safety systems, industrial automation and bespoke technical support",
    image: EngineeringServices,
    features: [
      "Design & manufacturing of custom machines",
      "Industrial automation and process optimization solutions",
      "High-precision industrial component manufacturing",
      "End-to-end engineering support",
    ],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 circuit-dots opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Browse <span className="text-gradient-gold">Our Products</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our comprehensive suite of safety and productivity solutions designed for the modern warehouse.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} isProductSection />
          ))}
        </div>

        {/* View All Products Link */}
        <div className="flex justify-center mt-12">
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View all products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
