import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const menuData: Record<string, string[]> = {
  "Veg Starters": [
    "Paneer 65", "Gobi 65", "Mushroom 65", "Paneer Tikka",
    "Gobi Manchurian", "Mushroom Manchurian", "Veg Cutlet",
  ],
  "Veg Masala": [
    "Paneer Butter Masala", "Mushroom Masala", "Gobi Masala",
    "Channa Masala", "Aloo Masala", "Kadai Paneer",
  ],
  "Veg Gravy": [
    "Paneer Gravy", "Mushroom Gravy", "Mixed Veg Gravy",
    "Dal Fry", "Sambar", "Rasam",
  ],
  "Non-Veg Starters": [
    "Chicken 65", "Chicken Lollipop", "Chicken Tikka",
    "Mutton Chukka", "Prawns Fry", "Fish Fry",
    "Chicken Manchurian", "Egg Podimas",
  ],
  "Kozhi Seval Varuval": [
    "Nattu Kozhi Varuval", "Nattu Kozhi Chukka",
    "Seval Varuval", "Kozhi Milagu Varuval",
    "Country Chicken Fry", "Kozhi Kari Varuval",
  ],
  "Non-Veg Masala": [
    "Chicken Masala", "Mutton Masala", "Egg Masala",
    "Chicken Chettinad", "Mutton Chettinad",
    "Chicken Pepper Masala",
  ],
  "Biryani": [
    "Chicken Biryani", "Mutton Biryani", "Egg Biryani",
    "Nattu Kozhi Biryani", "Prawn Biryani", "Fish Biryani",
    "Veg Biryani",
  ],
  "Veg Rice": [
    "Jeera Rice", "Ghee Rice", "Lemon Rice",
    "Coconut Rice", "Tomato Rice", "Curd Rice",
  ],
  "Veg Noodles": [
    "Veg Noodles", "Egg Noodles", "Chicken Noodles",
    "Veg Fried Rice", "Egg Fried Rice", "Chicken Fried Rice",
  ],
  "Meals": [
    "Veg Meals", "Non-Veg Meals", "Special Non-Veg Meals",
  ],
  "Crab Recipes": [
    "Crab Masala", "Crab Roast", "Crab Curry",
    "Pepper Crab", "Crab Chukka",
  ],
  "Fish Recipes": [
    "Fish Curry", "Fish Fry", "Fish Masala",
    "Fish Kulambu", "Prawn Masala", "Prawn Fry",
  ],
  "Dried Fish": [
    "Karuvadu Fry", "Karuvadu Kulambu",
    "Nethili Fry", "Dried Fish Masala",
  ],
  "Kaadai Recipes": [
    "Kaadai Fry", "Kaadai Roast", "Kaadai Varuval",
    "Kaadai Pepper Fry", "Kaadai Masala",
  ],
};

const categories = Object.keys(menuData);

const MenuSection = () => {
  const [active, setActive] = useState(categories[0]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Our Menu
          </p>
          <h2 className="heading-section text-foreground mb-4">
            A Feast of Flavours
          </h2>
          <div className="divider-ornament mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            From rustic village recipes to Chettinad spice mastery — every dish tells a story.
          </p>
        </motion.div>

        {/* Category tabs - scrollable */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shrink-0 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {menuData[active].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-3 p-4 bg-card rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
              <span className="text-foreground font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
