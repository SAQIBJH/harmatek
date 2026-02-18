import { motion } from "framer-motion";
import { getProductImage } from "@/data/productImages";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  index: number;
}

const ProductCard = ({
  title,
  description,
  image,
  features,
  index,
}: ProductCardProps) => {
  // Get the actual image URL from the import map
  const imageUrl = getProductImage(image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-elevated"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <motion.img
          src={imageUrl || "/placeholder-product.png"}
          alt={title}
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onError={(e) => {
            // Fallback if image fails to load
            (e.target as HTMLImageElement).src = "/placeholder-product.png";
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        
        {/* Floating animation effect */}
        <motion.div
          className="absolute inset-0 bg-primary/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 4).map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2 text-sm text-foreground/80"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.article>
  );
};

export default ProductCard;
