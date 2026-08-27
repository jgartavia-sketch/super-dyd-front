import { Award, Gift, Megaphone, Newspaper, Trophy } from "lucide-react";
import Hero from "./Hero";

const news = [
  { icon: Newspaper, tag: "Últimas noticias", title: "D&D ahora está más cerca", text: "Consultá productos, prepará tu pedido y envialo directamente por WhatsApp." },
  { icon: Megaphone, tag: "Promoción", title: "Ofertas semanales", text: "Revisá nuestras novedades y aprovechá precios especiales en productos seleccionados." },
  { icon: Gift, tag: "Beneficios", title: "Puntos por referidos", text: "Creá tu cuenta, compartí tu código y acumulá puntos cuando tus amigos se registren." },
];

export default function HomeContent({ setActiveSection }) {
  return <>
    <Hero setActiveSection={setActiveSection} />
    <section className="home-content-section">
      <div className="section-header"><span className="section-kicker">Novedades D&amp;D</span><h2>Noticias y promociones</h2><p>Todo lo que está pasando en el súper, reunido en un solo lugar.</p></div>
      <div className="news-grid">{news.map(({ icon: Icon, tag, title, text }) => <article className="info-card" key={title}><div className="feature-icon"><Icon size={28} /></div><span>{tag}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="feature-panel"><div><span className="section-kicker">Concursos activos</span><h2>Tu próxima compra puede traer premio</h2><p>Los concursos, requisitos y fechas se publicarán aquí. Registrate para participar y recibir novedades.</p><button type="button" className="primary-btn" onClick={() => setActiveSection("mi-cuenta")}><Award size={19} />Crear mi cuenta</button></div><div className="contest-badge"><Gift size={48} /><strong>Próximamente</strong><span>Nuevos concursos</span></div></div>
      <div className="winners-panel"><Trophy size={42} /><div><span>Ganadores</span><h3>Celebramos a nuestra comunidad</h3><p>Cuando finalice un concurso, publicaremos aquí a sus ganadores de forma transparente.</p></div></div>
    </section>
  </>;
}
