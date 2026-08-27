import { Award, CalendarDays, Gift, Megaphone, Newspaper, Target, Trophy } from "lucide-react";
import Hero from "./Hero";

const news = [
  { icon: Newspaper, tag: "Últimas noticias", title: "D&D ahora está más cerca", text: "Consultá productos, prepará tu pedido y envialo directamente por WhatsApp." },
  { icon: Megaphone, tag: "Promoción", title: "Ofertas semanales", text: "Revisá nuestras novedades y aprovechá precios especiales en productos seleccionados." },
  { icon: Gift, tag: "Beneficios", title: "Puntos por referidos", text: "Creá tu cuenta, compartí tu código y acumulá puntos cuando tus amigos se registren." },
];

export default function HomeContent({ setActiveSection }) {
  const goToAccount = () => {
    setActiveSection("mi-cuenta");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <>
    <Hero setActiveSection={setActiveSection} />
    <section className="home-content-section">
      <div className="section-header"><span className="section-kicker">Novedades D&amp;D</span><h2>Noticias y promociones</h2><p>Todo lo que está pasando en el súper, reunido en un solo lugar.</p></div>
      <div className="news-grid">{news.map(({ icon: Icon, tag, title, text }) => <article className="info-card" key={title}><div className="feature-icon"><Icon size={28} /></div><span>{tag}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="feature-panel contest-active">
        <div className="contest-copy">
          <span className="section-kicker">Concurso activo</span>
          <h2>¡Llegá primero a 500 puntos!</h2>
          <p>El primer cliente que alcance los 500 puntos gana un <strong>15% de descuento</strong> en su próxima compra. Para participar solo tenés que registrarte y comprar para acumular puntos y recibir premios.</p>
          <div className="contest-details">
            <span><CalendarDays size={19} /><strong>Del 1 al 15 de septiembre</strong></span>
            <span><Target size={19} /><strong>Meta: 500 puntos</strong></span>
          </div>
          <button type="button" className="primary-btn" onClick={goToAccount}><Award size={19} />Crear mi cuenta</button>
        </div>
        <div className="contest-badge">
          <Gift size={48} />
          <span>Premio</span>
          <strong>15% OFF</strong>
          <small>Para el primero en llegar</small>
        </div>
      </div>
      <div className="winners-panel"><Trophy size={42} /><div><span>Ganadores</span><h3>Celebramos a nuestra comunidad</h3><p>Cuando finalice un concurso, publicaremos aquí a sus ganadores de forma transparente.</p></div></div>
    </section>
  </>;
}
