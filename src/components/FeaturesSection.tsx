import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Clock, Settings } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Enhanced Safety",
    description:
      "Reduce workplace incidents with advanced collision detection that protects both pedestrians and equipment.",
  },
  {
    icon: TrendingUp,
    title: "Boost Productivity",
    description:
      "Optimize operations with real-time data analytics and fleet management insights.",
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description:
      "24/7 visibility into your fleet operations with instant alerts and comprehensive reporting.",
  },
  {
    icon: Settings,
    title: "Custom Integration",
    description:
      "Fully configurable solutions tailored to your unique operational requirements.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Choose <span className="text-gradient-gold">HarmaTek</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Industry-leading technology backed by in-house R&D expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
