import { motion } from "framer-motion";
import { MapPin, ShoppingCart } from "lucide-react";

export default function Hero({ setActiveSection }) {
  const goToStore = () => {
    setActiveSection("supermercado");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-background" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1>Todo lo que buscás<span> más cerca.</span></h1>
        <div className="hero-actions">
          <button className="primary-btn" type="button" onClick={goToStore}><ShoppingCart size={20} />Ver supermercado</button>
        </div>
        <div className="hero-location"><MapPin size={18} />La Piñata, Ciudad Quesada, San Carlos</div>
      </motion.div>
    </section>
  );
}
