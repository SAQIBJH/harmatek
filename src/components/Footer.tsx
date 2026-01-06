import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import harmtekLogo from "@/assets/harmtek-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.a
              href="#home"
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={harmtekLogo}
                alt="HarmaTek Logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30"
              />
              <span className="text-2xl font-display font-bold text-gradient-gold">
                HarmaTek
              </span>
            </motion.a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Pioneering safety and productivity solutions for the material
              handling industry. Making advanced safety accessible for all.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/harmtech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:info@harmtek.co"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Products", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                "Collision Avoidance",
                "Telematics",
                "Custom Solutions",
                "Fleet Management",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} HarmaTek. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
