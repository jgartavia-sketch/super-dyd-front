import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-background"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-badge">
          <Sparkles size={16} />
          Tu súper de confianza
        </div>

        <h1>
          Comprar cerca de casa
          <span> nunca se vio tan bien.</span>
        </h1>

        <p>
          Supermercado D&D combina cercanía, buenos precios y una
          experiencia moderna para toda la comunidad de
          La Piñata, Ciudad Quesada.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/50664230421"
            target="_blank"
            className="primary-btn"
          >
            <ShoppingCart size={20} />
            Comprar por WhatsApp
          </a>

          <a href="#categorias" className="secondary-btn">
            Ver categorías
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="hero-location">
          <MapPin size={18} />
          La Piñata, Ciudad Quesada, San Carlos
        </div>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
      >
        <div className="card-glow"></div>

        <h3>Promociones activas</h3>

        <div className="promo-item">
          <span>Canasta básica</span>
          <strong>Ofertas semanales</strong>
        </div>

        <div className="promo-item">
          <span>Bebidas y snacks</span>
          <strong>Combos especiales</strong>
        </div>

        <div className="promo-item">
          <span>Clientes frecuentes</span>
          <strong>Beneficios exclusivos</strong>
        </div>
      </motion.div>
    </section>
  );
}