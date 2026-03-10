import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import exteriorImg from "@/assets/exterior.png";
import poolImg from "@/assets/pool-night.png";
import BackgroundDecoration from "./BackgroundDecoration";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <BackgroundDecoration variant="about" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={exteriorImg}
                alt="Le Cuistot Exterior"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
              <img
                src={poolImg}
                alt="Le Cuistot Evening"
                className="absolute -bottom-8 -right-8 w-2/3 aspect-video object-cover border-4 border-background hidden md:block"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-accent text-lg tracking-[0.3em] uppercase mb-4">
              Notre Histoire
            </p>
            <h2 className="text-4xl md:text-5xl font-display mb-6 leading-tight">
              A Refined Culinary <br />
              <span className="gold-gradient-text">Destination</span>
            </h2>
            <div className="divider-gold !mx-0 mb-8" />
            <p className="text-foreground/70 font-body leading-relaxed mb-6">
              Restaurant Le Cuistot offers a refined dining experience in Batna,
              combining quality cuisine, warm hospitality, and a sophisticated
              atmosphere loved by locals and visitors alike.
            </p>
            <p className="text-foreground/70 font-body leading-relaxed mb-8">
              From our carefully crafted menu featuring the finest ingredients to
              our elegant poolside evening ambiance, every detail is designed to
              create an unforgettable experience.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-display text-primary">4.2</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">Rating ⭐</p>
              </div>
              <div>
                <p className="text-3xl font-display text-primary">61</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">Reviews</p>
              </div>
              <div>
                <p className="text-3xl font-display text-primary">6:30</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">PM Open</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
