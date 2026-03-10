import logo from "@/assets/logo.png";
import { Phone, MapPin } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

import BackgroundDecoration from "./BackgroundDecoration";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border/50 py-16 px-6">
    <BackgroundDecoration variant="footer" showParticles={false} />
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
      <div>
        <img src={logo} alt="Le Cuistot" className="h-10 mb-4" />
        <p className="text-muted-foreground text-sm font-body leading-relaxed">
          An elegant dining experience in the heart of Batna, combining quality cuisine and warm hospitality.
        </p>
        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://www.instagram.com/le_cuistot_restaurant/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://web.facebook.com/Masnsen.lounge/?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4 text-primary">Quick Links</h4>
        <div className="space-y-2">
          {["Accueil", "Menu", "Galerie", "Services"].map((link) => (
            <a
              key={link}
              href={`#${link === "Accueil" ? "hero" : link.toLowerCase()}`}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display text-lg mb-4 text-primary">Contact</h4>
        <div className="space-y-3 text-sm text-muted-foreground font-body">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            Lotissement Benflis, Batna
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            0559 40 67 62
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            0554 91 80 17
          </div>
          <p className="pt-2">Opens daily at 6:30 PM</p>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border/30 text-center">
      <p className="text-xs text-muted-foreground font-body tracking-wider">
        © {new Date().getFullYear()} Restaurant Le Cuistot. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
