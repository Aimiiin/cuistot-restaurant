import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import food1 from "@/assets/food-1.png";
import food2 from "@/assets/food-2.png";
import food3 from "@/assets/food-3.png";
import interiorImg from "@/assets/interior.png";
import poolImg from "@/assets/pool-night.png";
import exteriorImg from "@/assets/exterior.png";

const images = [
  { src: food1, alt: "Burrata Salad", span: "col-span-1 row-span-1" },
  { src: interiorImg, alt: "Interior", span: "col-span-1 row-span-2 md:row-span-2" },
  { src: food2, alt: "Risotto", span: "col-span-1 row-span-1" },
  { src: poolImg, alt: "Evening Ambiance", span: "col-span-1 md:col-span-2 row-span-1" },
  { src: food3, alt: "Chef Salad", span: "col-span-1 row-span-1" },
  { src: exteriorImg, alt: "Exterior", span: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-charcoal-deep" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-accent text-lg tracking-[0.3em] uppercase mb-4">
            Galerie
          </p>
          <h2 className="text-4xl md:text-5xl font-display mb-4">
            Visual <span className="gold-gradient-text">Journey</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              className={`${img.span} overflow-hidden cursor-pointer group relative`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={selected}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
