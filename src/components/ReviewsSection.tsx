import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ahmed B.", text: "Un excellent restaurant avec une ambiance raffinée. Les plats sont délicieux et le service est impeccable.", rating: 5 },
  { name: "Sarah M.", text: "La salade Burrata et le risotto étaient incroyables. Un endroit parfait pour un dîner en famille.", rating: 4 },
  { name: "Karim L.", text: "Cadre magnifique surtout le soir au bord de la piscine. Je recommande vivement l'entrecôte.", rating: 5 },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-charcoal-deep" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-accent text-lg tracking-[0.3em] uppercase mb-4">
            Avis
          </p>
          <h2 className="text-4xl md:text-5xl font-display mb-4">
            Guest <span className="gold-gradient-text">Reviews</span>
          </h2>
          <div className="divider-gold mb-6" />
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4].map((s) => (
              <Star key={s} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <Star className="w-6 h-6 text-primary fill-primary/30" />
          </div>
          <p className="text-muted-foreground text-sm">4.2 / 5 from 61 reviews</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="p-8 border border-border/50 hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <p className="text-primary font-display text-sm">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
