import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import productFCAS from "@/assets/product-fcas.png";
import productTelematics from "@/assets/product-telematics.png";
import productCustom from "@/assets/product-custom.png";

const products = [
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
            Innovative <span className="text-gradient-gold">Safety Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cutting-edge systems engineered to enhance workplace safety and
            boost productivity in material handling operations.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
