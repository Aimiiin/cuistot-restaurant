import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import BackgroundDecoration from "./BackgroundDecoration";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <BackgroundDecoration variant="contact" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-accent text-lg tracking-[0.3em] uppercase mb-4">
            Localisation
          </p>
          <h2 className="text-4xl md:text-5xl font-display mb-4">
            Find <span className="gold-gradient-text">Us</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-display text-lg mb-1">Address</p>
                  <p className="text-muted-foreground font-body text-sm">Lotissement Benflis, Batna, Algeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-display text-lg mb-1">Phone</p>
                  <p className="text-muted-foreground font-body text-sm">0559 40 67 62 / 0554 91 80 17</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/WVRKvJfqZvt8jbhT8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors"
            >
              Open in Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-video overflow-hidden border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.3846334866967!2d6.1567318759044785!3d35.544201772631766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f411007b8a83d7%3A0xeeeaa4cc3eee5306!2sRestaurant%20Le%20Cuistot!5e0!3m2!1sen!2sdz!4v1773075952089!5m2!1sen!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              title="Restaurant Le Cuistot Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
