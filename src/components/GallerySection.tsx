import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import foodBananaLeaf from "@/assets/food-bananaleal.jpg";
import foodBiryani from "@/assets/food-biryani.jpg";
import foodCrab from "@/assets/food-crab.jpg";
import foodNattuKozhi from "@/assets/food-nattukozhi.jpg";
import restaurantAmbience from "@/assets/restaurant-ambience.jpg";
import foodKaadai from "@/assets/food-kaadai.jpg";

const images = [
  { src: foodBananaLeaf, alt: "Banana Leaf Meals", span: "col-span-2 row-span-2" },
  { src: restaurantAmbience, alt: "Restaurant Ambience", span: "" },
  { src: foodCrab, alt: "Crab Masala", span: "" },
  { src: foodNattuKozhi, alt: "Nattu Kozhi Curry", span: "" },
  { src: foodBiryani, alt: "Chicken Biryani", span: "" },
  { src: foodKaadai, alt: "Kaadai Fry", span: "col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Experience
          </p>
          <h2 className="heading-section text-foreground mb-4">
            The Virundhu Experience
          </h2>
          <div className="divider-ornament" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`overflow-hidden rounded-lg group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
