import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Import hero images
import heroImage1 from "@/assets/images/hero-image-1.jpg";
import heroImage2 from "@/assets/images/hero-image-2.jpg";
import heroImage3 from "@/assets/images/hero-image-3.jpg";
import heroImage4 from "@/assets/images/hero-image-4.jpg";
import heroImage5 from "@/assets/images/hero-image-5.jpg";

const heroImages = [
  { src: heroImage1, alt: "Industrial warehouse operations" },
  { src: heroImage2, alt: "Modern safety equipment" },
  { src: heroImage3, alt: "Engineering solutions" },
  { src: heroImage4, alt: "Industrial automation" },
  { src: heroImage5, alt: "Warehouse technology" },
];

interface HeroSliderProps {
  title: React.ReactNode;
  subtitle: string;
}

const HeroSlider = ({ title, subtitle }: HeroSliderProps) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden rounded-2xl">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
        }}
        loop={true}
        className="w-full h-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
              />
              {/* Dark Overlay Gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" /> */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .custom-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          display: inline-block;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .custom-bullet-active {
          background: hsl(43 50% 55%);
          width: 30px;
          border-radius: 5px;
        }
        .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
