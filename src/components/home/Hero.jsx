import { motion } from "framer-motion";
import { MapPin, ShoppingCart, Sparkles } from "lucide-react";

export default function Hero({ setActiveSection }) {
  const goToStore = () => {
    setActiveSection("supermercado");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-background" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="hero-badge"><Sparkles size={16} />Tu súper de confianza</div>
        <h1>Comprar cerca de casa<span> nunca se vio tan bien.</span></h1>
        <p>Supermercado D&amp;D combina cercanía, buenos precios y una experiencia moderna para toda la comunidad de La Piñata, Ciudad Quesada.</p>
        <div className="hero-actions">
          <button className="primary-btn" type="button" onClick={goToStore}><ShoppingCart size={20} />Ver supermercado</button>
        </div>
        <div className="hero-location"><MapPin size={18} />La Piñata, Ciudad Quesada, San Carlos</div>
      </motion.div>
    </section>
  );
}
