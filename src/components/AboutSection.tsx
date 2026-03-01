import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ownerImage from "@/assets/owner.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={ownerImage}
                alt="Founder of Pannai Veetu Virundhu"
                className="w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="heading-section text-foreground mb-6">
              From the Farmlands to Your Table
            </h2>
            <div className="divider-ornament mb-8 mx-0" />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Pannai Veetu Virundhu was born from a simple belief — that the most
                extraordinary meals come from the most ordinary kitchens. Our roots
                trace back to the fertile lands of Tamil Nadu, where food is not just
                sustenance, but celebration.
              </p>
              <p>
                Every dish we serve carries the soul of a village feast — slow-cooked
                country chicken, fragrant biryanis, and recipes passed down through
                generations. We source our ingredients fresh, honour time-tested
                methods, and serve with the warmth of a family gathering.
              </p>
              <p>
                This is more than a restaurant. This is a virundhu — a heartfelt
                invitation to sit, savour, and feel at home.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-0.5 bg-primary/40" />
              <p className="font-heading text-foreground italic">
                "Cook with love, serve with pride."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
