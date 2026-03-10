import { useMemo } from "react";

import bg1 from "@/assets/images/bg1.png";
import bg2 from "@/assets/images/bg2.png";

type VariantType = "about" | "menu" | "gallery" | "reviews" | "services" | "contact" | "footer" | "default" | "gold" | "cinematic" | "vignette";

interface BackgroundDecorationProps {
  variant?: VariantType;
  showParticles?: boolean;
}

const LUXURY_VARIANTS: VariantType[] = ["about", "menu", "gallery", "reviews", "services", "contact", "footer"];

/** Which sections use bg1 vs bg2 for smooth alternation */
const VARIANT_TO_IMAGE: Record<string, string> = {
  about: "bg1",
  menu: "bg2",
  gallery: "bg1",
  reviews: "bg2",
  services: "bg1",
  contact: "bg2",
  footer: "bg1",
};

const BackgroundDecoration = ({ variant = "default", showParticles = false }: BackgroundDecorationProps) => {
  const isLuxury = LUXURY_VARIANTS.includes(variant);

  const bgImage = useMemo(() => {
    if (!isLuxury) return undefined;
    const key = VARIANT_TO_IMAGE[variant];
    return key === "bg1" ? bg1 : bg2;
  }, [variant, isLuxury]);

  if (!isLuxury) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 luxury-gradient opacity-90" />
        <div className="texture-noise" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 0: Background image — cover, center, no-repeat */}
      <div
        className="absolute inset-0 section-bg-image"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        }}
      />

      {/* Layer 1: Moderate dark overlay for readability — light enough to see the image */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.40) 100%)",
        }}
      />

      {/* Layer 2: Soft fade at TOP — from black to transparent, blends seamlessly from previous section */}
      <div className="section-top-fade" />

      {/* Layer 3: Soft fade at BOTTOM — transparent to page black for seamless scroll */}
      <div className="section-bottom-fade" />

      {/* Layer 4: Subtle vignette for depth and premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_45%,rgba(0,0,0,0.30)_100%)]" />
    </div>
  );
};

export default BackgroundDecoration;
