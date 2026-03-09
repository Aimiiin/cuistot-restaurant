import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request sent! We'll contact you shortly.");
    setForm({ name: "", phone: "", date: "", guests: "", message: "" });
  };

  const inputClass =
    "w-full bg-transparent border border-border/50 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300";

  return (
    <section id="contact" className="section-padding bg-charcoal-deep" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-accent text-lg tracking-[0.3em] uppercase mb-4">
            Réservation
          </p>
          <h2 className="text-4xl md:text-5xl font-display mb-4">
            Book a <span className="gold-gradient-text">Table</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <input
            className={inputClass}
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            className={inputClass}
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <input
            className={inputClass}
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
          <input
            className={inputClass}
            placeholder="Number of Guests"
            type="number"
            min={1}
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            required
          />
          <textarea
            className={`${inputClass} md:col-span-2 min-h-[120px] resize-none`}
            placeholder="Special Requests..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-12 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300"
            >
              Reserve Now
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
