import { motion } from "framer-motion";
import { Award, Users, Globe, Wrench } from "lucide-react";

const stats = [
  { icon: Award, value: "2022", label: "Founded" },
  { icon: Users, value: "100+", label: "Clients Worldwide" },
  { icon: Globe, value: "Multi", label: "Site Deployments" },
  { icon: Wrench, value: "Custom", label: "R&D Solutions" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 circuit-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              About HarmaTek
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Pioneering{" "}
              <span className="text-gradient-gold">Workplace Safety</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Established in 2022, HarmaTek is an Australian innovator committed
              to elevating safety and productivity standards within the material
              handling industry.
            </p>
            <p className="text-muted-foreground mb-8">
              Our vision advocates for a future where enhanced safety and
              productivity features are not just optional or luxury add-ons, but
              fundamental components of every forklift—ensuring a safer, more
              efficient, and technologically advanced industry standard.
            </p>

            {/* Mission Statement */}
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h3 className="font-display font-semibold text-foreground mb-2">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-sm">
                Innovation and excellence in creating systems that enhance both
                safety and efficiency, while ensuring accessibility and
                affordability for businesses of all sizes.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group shadow-card hover:shadow-elevated"
              >
                <stat.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
