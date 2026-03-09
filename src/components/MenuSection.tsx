import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

type MenuItem = { name: string; price: string };
type MenuCategory = { category: string; items: MenuItem[] };

const menuData: MenuCategory[] = [
  {
    category: "Entrées Chaudes",
    items: [
      { name: "Soupe du jour", price: "400 DA" },
      { name: "Mini Bourek (5PCS)", price: "500 DA" },
      { name: "Camembert pané", price: "650 DA" },
      { name: "Gratin poulet", price: "600 DA" },
      { name: "Gratin viande", price: "600 DA" },
      { name: "Vol-au-vent poulet et champignons (2PCS)", price: "600 DA" },
    ],
  },
  {
    category: "Entrées Froides",
    items: [
      { name: "Salade Mechouia", price: "650 DA" },
      { name: "Salade César", price: "650 DA" },
      { name: "Salade Greque", price: "650 DA" },
      { name: "Salade Burrata", price: "800 DA" },
      { name: "Salade Cuistot façon chef", price: "1000 DA" },
      { name: "Salade de thon à la catalane", price: "800 DA" },
      { name: "Bruschetta", price: "1000 DA" },
    ],
  },
  {
    category: "Burgers",
    items: [
      { name: "Big bœuf burger", price: "750 DA" },
      { name: "Chicken big burger", price: "600 DA" },
      { name: "Mini burgers (3pcs/pour enfant)", price: "600 DA" },
    ],
  },
  {
    category: "Viande Rouge",
    items: [
      { name: "Entrecôte grillée", price: "1800 DA" },
      { name: "Entrecôte chausseur (sauce forest)", price: "2000 DA" },
      { name: "Filet de bœuf grillé", price: "2000 DA" },
      { name: "Filet de bœuf pepper sauce (5 bales)", price: "2000 DA" },
      { name: "Noisette d'agneau (4pcs)", price: "2200 DA" },
      { name: "Émincé de bœuf aux champignons façon mexicaine (hot)", price: "1900 DA" },
      { name: "Mechoui d'agneau façon chef", price: "3000 DA" },
      { name: "Mixette de grillades (2prs)", price: "5300 DA" },
      { name: "Steak à cheval", price: "1500 DA" },
      { name: "Rôti de veau sauce brune", price: "2200 DA" },
      { name: "Côte de bœuf", price: "2400 DA" },
    ],
  },
  {
    category: "Viandes Blanches",
    items: [
      { name: "Cordon bleu", price: "1400 DA" },
      { name: "Escalope de poulet sauce champignon", price: "1500 DA" },
      { name: "Poulet à la milanaise", price: "1500 DA" },
      { name: "Fricassé de poulet à la crème", price: "1500 DA" },
      { name: "Cuisse de poulet à la texane", price: "1100 DA" },
      { name: "Escalope de poulet à la Parmigiana", price: "1400 DA" },
    ],
  },
  {
    category: "Pasta & Risotto",
    items: [
      { name: "Lasagne", price: "900 DA" },
      { name: "Spaghetti Bolognaise", price: "950 DA" },
      { name: "Spaghetti sauce Pesto", price: "1000 DA" },
      { name: "Tagliatelle Alfredo", price: "950 DA" },
      { name: "Tagliatelle Carbonara", price: "900 DA" },
      { name: "Penne aux 4 fromages", price: "900 DA" },
      { name: "Risotto poulet champignons", price: "1400 DA" },
      { name: "Risotto aux crevettes", price: "1900 DA" },
      { name: "Risotto champignon courgettes", price: "1000 DA" },
    ],
  },
  {
    category: "Poissons",
    items: [
      { name: "Dorade grillée", price: "****" },
      { name: "Loup de mer grillé", price: "****" },
      { name: "Crevettes sautées à l'ail", price: "****" },
      { name: "Crevettes en sauce", price: "****" },
      { name: "Merlan", price: "****" },
      { name: "Rouget", price: "****" },
      { name: "Espadon", price: "****" },
      { name: "Paela (vendredi uniquement)", price: "2500 DA / pers" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Mousse Au Chocolat", price: "500 DA" },
      { name: "Tarte Au Citron", price: "400 DA" },
      { name: "Tartelettes aux fruits (2pcs)", price: "350 DA" },
      { name: "Crème Brûlée", price: "400 DA" },
      { name: "Fondant Au Chocolat", price: "400 DA" },
      { name: "Tiramisu", price: "500 DA" },
      { name: "Nougat Glacé", price: "500 DA" },
      { name: "Boule De Glace Au Choix", price: "200 DA" },
      { name: "Assiette De Fruits De Saison", price: "600 DA / pers" },
    ],
  },
  {
    category: "Boissons",
    items: [
      { name: "Café Capsule", price: "250 DA" },
      { name: "Cappucino", price: "100 DA" },
      { name: "Thé maison Solo", price: "100 DA" },
      { name: "Jus de fraise", price: "400 DA" },
      { name: "Jus de citron", price: "350 DA" },
      { name: "Jus d'orange", price: "350 DA" },
      { name: "Mojito classique", price: "500 DA" },
      { name: "Cocktail de Fruits", price: "550 DA" },
      { name: "Mojito (blue/red/fruit de passion)", price: "500 DA" },
      { name: "Bora Bora", price: "450 DA" },
      { name: "Fleur Damour", price: "450 DA" },
      { name: "Bleu Lagoon", price: "450 DA" },
      { name: "Coca / Hamoud / Fonta (1L)", price: "150 DA" },
      { name: "Eau 1.5L", price: "100 DA" },
      { name: "Eau 0.5L", price: "50 DA" },
    ],
  },
];

const categories = menuData.map((c) => c.category);

const MenuSection = () => {
  const [active, setActive] = useState(categories[0]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const activeMenu = menuData.find((c) => c.category === active);

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-accent text-lg tracking-[0.3em] uppercase mb-4">
            Découvrez
          </p>
          <h2 className="text-4xl md:text-5xl font-display mb-4">
            Our <span className="gold-gradient-text">Menu</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-body transition-all duration-300 border ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-0"
        >
          {activeMenu?.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-baseline justify-between py-4 border-b border-border/50 group hover:bg-secondary/30 px-4 -mx-4 transition-colors duration-300"
            >
              <span className="font-accent text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                {item.name}
              </span>
              <span className="border-b border-dotted border-border/50 flex-1 mx-4 min-w-8" />
              <span className="text-primary font-body text-sm tracking-wider whitespace-nowrap">
                {item.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
