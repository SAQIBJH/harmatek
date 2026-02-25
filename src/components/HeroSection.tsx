import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/images/hero-image-5.jpg";
import { useNavigate } from "react-router-dom";
import electronicsEquipment from "@/assets/images/electric-equipment.jpg";
import generalProfile from "@/assets/images/general-brochure.jpg";
import repairLab from "@/assets/images/repair-lab.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const brochureData = [
  {
    id: 1,
    title: "Electronics Equipment",
    image: electronicsEquipment,
    download: "/electric-equipment.pdf"
  },
  {
    id: 2,
    title: "General Profile",
    image: generalProfile,
    download: "/general-brochure.pdf"
  },
  {
    id: 3,
    title: "Lab Repair Services",
    image: repairLab,
    download: "/repair-lab.pdf"
  }
];

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className={`relative  flex items-center overflow-hidden pt-24 ${useIsMobile() ? "min-h-[70vh]" : "min-h-screen"}`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Modern warehouse with smart forklifts"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 circuit-pattern opacity-40" />
      </div>

      {/* Content */}
      <div className={`container mx-auto px-4 lg:px-8 relative z-10 `}>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                Hamratek Industrial Creative Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            >
            We are a specialized industrial engineering services company providing integrated solutions in the design and manufacturing of machines, production lines, and industrial , in addition to manufacturing spare parts and industrial components with high quality standards. 
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              Our team combines engineering expertise with modern technologies to deliver efficient, accurate, and reliable solutions that meet our clients’ operational needs while ensuring quality, safety, and on-time delivery.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              نحن شركة متخصصة في الخدمات الهندسية الصناعية، نقدم حلولًا متكاملة تشمل تصميم وتنفيذ الماكينات وخطوط الإنتاج بالإضافة إلى قطع الغيار والمكونات الصناعية بأعلى معايير الجوده
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button size="lg" className="text-lg px-8 shadow-gold"
                onClick={() => navigate("/products")}
              >

                Explore Solutions
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-primary/50 hover:bg-primary/10"
              >
                Watch Demo
              </Button> */}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-6 max-w-xl"
            >
              {[
                { icon: Shield, label: "Safety First", value: "99.9%" },
                { icon: Zap, label: "Response Time", value: "<50ms" },
                { icon: Target, label: "Accuracy", value: "360°" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden xl:grid xl:grid-cols-3 gap-6 mt-12 lg:mt-0 place-items-start justify-start"
          >
            {brochureData.map((brochure) => (
              <div key={brochure.id} className="rounded-lg overflow-hidden shadow-lg w-36 relative group border-2 border-gray-600 hover:border-primary hover:border-2 pb-2 bg-black/40 backdrop-blur-sm">
                <img
                  src={brochure.image}
                  alt={brochure.title}
                  className="w-36 object-cover transform duration-500 group-hover:scale-105 h-36 rounded-lg"
                />
                <p className="text-white mt-0.5  text-center text-xs font-semibold p-0.5">{brochure.title}</p>
                <div className="flex justify-center items-center pb-0.5">
                  <a href={brochure.download} className="mt-1 w-3/4 text-white bg-primary text-center p-1 rounded-lg inline-flex justify-center items-center mx-auto text-xs"
                    download>Download</a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity },
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
