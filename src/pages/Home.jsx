import { useState } from "react";
import {
  Award,
  Clock,
  Gift,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  QrCode,
  Share2,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Supermarket from "../components/supermarket/Supermarket";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");

  const whatsappLink =
    "https://wa.me/50664230421?text=Hola%20Super%20D%26D%20%232%2C%20quiero%20hacer%20una%20consulta.";
  const frequentCustomerLink =
    "https://wa.me/50664230421?text=Hola%20Super%20D%26D%20%232%2C%20quiero%20registrarme%20como%20cliente%20frecuente.";
  const facebookLink = "https://www.facebook.com/superdyd2/";
  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=Super%20DYD%20%232%20La%20Pi%C3%B1ata%20Ciudad%20Quesada%20San%20Carlos%20Costa%20Rica";
  const wazeLink =
    "https://waze.com/ul?q=Super%20DYD%20%232%20La%20Pi%C3%B1ata%20Ciudad%20Quesada%20San%20Carlos%20Costa%20Rica&navigate=yes";

  return (
    <main className="site-shell">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {activeSection === "inicio" && (
        <Hero setActiveSection={setActiveSection} />
      )}

      {activeSection === "supermercado" && <Supermarket />}

      {activeSection === "cliente-frecuente" && (
        <section className="loyalty-section">
          <div className="loyalty-hero">
            <span className="section-kicker">Cliente Frecuente</span>

            <h2>Comprá, acumulá y disfrutá más beneficios</h2>

            <p>
              Una propuesta de fidelización para que los clientes de Mini Super
              D&amp;D #2 puedan registrarse, acumular puntos y recibir
              promociones especiales.
            </p>
          </div>

          <div className="loyalty-showcase">
            <div className="loyalty-card main-loyalty-card">
              <div className="loyalty-icon">
                <QrCode size={34} />
              </div>

              <span>Tarjeta digital</span>
              <h3>Cliente Frecuente D&amp;D</h3>

              <p>
                Cada cliente puede tener una tarjeta digital con QR para
                identificarse rápido en futuras compras, promociones y campañas.
              </p>

              <div className="qr-preview">
                <QrCode size={88} />
                <div>
                  <strong>D&amp;D-CLIENTE</strong>
                  <small>QR de demostración</small>
                </div>
              </div>
            </div>

            <div className="loyalty-card">
              <div className="loyalty-icon">
                <Star size={32} />
              </div>

              <span>Puntos</span>
              <h3>Acumulá por tus compras</h3>

              <p>
                Sistema preparado para registrar compras, sumar puntos y activar
                beneficios según consumo.
              </p>
            </div>

            <div className="loyalty-card">
              <div className="loyalty-icon">
                <Gift size={32} />
              </div>

              <span>Premios</span>
              <h3>Promociones exclusivas</h3>

              <p>
                Ideal para rifas, descuentos, combos especiales y campañas por
                temporada.
              </p>
            </div>

            <div className="loyalty-card">
              <div className="loyalty-icon">
                <Award size={32} />
              </div>

              <span>Negocio inteligente</span>
              <h3>Más conexión con clientes</h3>

              <p>
                Una base para conocer clientes frecuentes y construir marketing
                local con datos reales.
              </p>
            </div>
          </div>

          <div className="loyalty-steps">
            <div>
              <Sparkles size={26} />
              <span>1</span>
              <p>El cliente se registra con nombre y WhatsApp.</p>
            </div>

            <div>
              <ShoppingBag size={26} />
              <span>2</span>
              <p>Compra en el súper y acumula puntos.</p>
            </div>

            <div>
              <Gift size={26} />
              <span>3</span>
              <p>Recibe beneficios, promos y recompensas.</p>
            </div>
          </div>

          <div className="loyalty-banner">
            <div>
              <h3>Activá tu tarjeta de cliente frecuente</h3>
              <p>
                Para esta demostración, el registro se puede iniciar por
                WhatsApp. En una versión completa, esto puede conectarse a base
                de datos, QR real, historial de compras y panel administrativo.
              </p>
            </div>

            <a href={frequentCustomerLink} target="_blank" rel="noreferrer">
              <MessageCircle size={20} />
              Registrarme por WhatsApp
            </a>
          </div>
        </section>
      )}

      {activeSection === "contacto" && (
        <section className="contact-section">
          <div className="contact-hero">
            <span className="section-kicker">Contacto</span>

            <h2>Estamos cerca de vos</h2>

            <p>
              Mini Super D&amp;D #2 está en La Piñata, Ciudad Quesada, San
              Carlos. Consultá por WhatsApp, visitá nuestro Facebook o abrí la
              ubicación para llegar sin vueltas.
            </p>
          </div>

          <div className="contact-grid">
            <a
              className="contact-card featured"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">
                <MessageCircle size={30} />
              </div>

              <span>Pedidos y consultas</span>
              <h3>WhatsApp</h3>
              <p>6423-0421</p>

              <strong>Escribir ahora</strong>
            </a>

            <a
              className="contact-card"
              href={facebookLink}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">
                <Share2 size={30} />
              </div>

              <span>Redes sociales</span>
              <h3>Facebook</h3>
              <p>Seguinos para novedades, productos y promociones.</p>

              <strong>Ver página</strong>
            </a>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={30} />
              </div>

              <span>Ubicación</span>
              <h3>La Piñata</h3>
              <p>Ciudad Quesada, San Carlos, Costa Rica.</p>

              <div className="location-actions">
                <a href={mapsLink} target="_blank" rel="noreferrer">
                  <MapPin size={18} />
                  Google Maps
                </a>

                <a href={wazeLink} target="_blank" rel="noreferrer">
                  <Navigation size={18} />
                  Waze
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Clock size={30} />
              </div>

              <span>Atención</span>
              <h3>Horario</h3>
              <p>
                Lunes a sábado: 7:00 a.m. - 10:00 p.m.
                <br />
                Domingos: 7:00 a.m. - 7:00 p.m.
              </p>

              <strong>Abierto todos los días</strong>
            </div>
          </div>

          <div className="contact-banner">
            <div>
              <ShoppingBag size={34} />
              <div>
                <h3>Tu mini súper de confianza</h3>
                <p>
                  Canasta básica, abarrotes, verdulería, snacks, limpieza, gas y
                  productos para moto o carro.
                </p>
              </div>
            </div>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <Phone size={20} />
              Contactar
            </a>
          </div>
        </section>
      )}
    </main>
  );
}