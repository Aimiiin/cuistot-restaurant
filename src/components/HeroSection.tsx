import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import interiorImg from "@/assets/interior.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={interiorImg}
          alt="Le Cuistot Interior"
          className="w-full h-full object-cover"
          loading="eager" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.img

          alt="Le Cuistot Restaurant"
          className="h-24 md:h-36 mx-auto mb-8 drop-shadow-2xl object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }} src={logo} />


        <motion.div
          className="divider-gold mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }} />


        <motion.p
          className="font-accent text-xl md:text-2xl text-foreground/80 tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}>

          An Elegant Dining Experience in Batna
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}>

          <a
            href="#menu"
            className="px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300">

            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>

        <ChevronDown className="w-6 h-6 text-primary/60" />
      </motion.div>
    </section>);

};

export default HeroSection;