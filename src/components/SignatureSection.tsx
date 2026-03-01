import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import foodBiryani from "@/assets/food-biryani.jpg";
import foodChicken65 from "@/assets/food-chicken65.jpg";
import foodNattuKozhi from "@/assets/food-nattukozhi.jpg";
import foodKaadai from "@/assets/food-kaadai.jpg";
import foodFish from "@/assets/food-fish.jpg";
import foodPrawn from "@/assets/food-prawn.jpg";

const signatures = [
  { name: "Chicken Biryani", image: foodBiryani },
  { name: "Chicken 65", image: foodChicken65 },
  { name: "Nattu Kozhi Varuval", image: foodNattuKozhi },
  { name: "Kaadai Fry", image: foodKaadai },
  { name: "Fish Fry", image: foodFish },
  { name: "Prawn Masala", image: foodPrawn },
];

const SignatureSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="specialties" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Chef's Pride
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Our Signature Dishes
          </h2>
          <div className="divider-ornament" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatures.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="food-card group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {dish.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
