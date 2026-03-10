import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Truck, Clock } from "lucide-react";
import BackgroundDecoration from "./BackgroundDecoration";

const services = [
  { icon: UtensilsCrossed, title: "Dine-in", desc: "Elegant indoor & poolside dining" },
  { icon: ShoppingBag, title: "Kerbside Pickup", desc: "Ready when you arrive" },
  { icon: Truck, title: "Delivery", desc: "Fine dining at your doorstep" },
  { icon: Clock, title: "Opens 6:30 PM", desc: "Evening dining experience" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      <BackgroundDecoration variant="services" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-accent text-lg tracking-[0.3em] uppercase mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-display mb-4">
            How We <span className="gold-gradient-text">Serve You</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="text-center p-8 glass-card hover:border-primary/50 transition-all duration-500 group hover:gold-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <s.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
