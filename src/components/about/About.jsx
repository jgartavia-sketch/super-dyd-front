import { Clock, MapPin, MessageCircle, Navigation, Share2, ShoppingBag } from "lucide-react";

const whatsapp = "https://wa.me/50664230421?text=Hola%20Super%20D%26D%20%232%2C%20quiero%20hacer%20una%20consulta.";
const facebook = "https://www.facebook.com/superdyd2/";
const maps = "https://www.google.com/maps/search/?api=1&query=Super%20DYD%20%232%20La%20Pi%C3%B1ata%20Ciudad%20Quesada%20San%20Carlos%20Costa%20Rica";
const waze = "https://waze.com/ul?q=Super%20DYD%20%232%20La%20Pi%C3%B1ata%20Ciudad%20Quesada%20San%20Carlos%20Costa%20Rica&navigate=yes";

export default function About() {
  return <section className="about-section"><div className="account-heading"><span className="section-kicker">Nosotros</span><h2>El súper de la comunidad</h2><p>Estamos en La Piñata, Ciudad Quesada, con variedad, cercanía y atención todos los días.</p></div><div className="about-story"><div><ShoppingBag size={42} /><h3>Supermercado D&amp;D #2</h3><p>Un negocio local pensado para resolver las compras diarias de las familias de la zona: abarrotes, bebidas, frutas y verduras, limpieza, cuidado personal y mucho más.</p></div><div className="map-card"><MapPin size={38} /><span>Ubicación exacta</span><h3>La Piñata, Ciudad Quesada</h3><p>San Carlos, Alajuela, Costa Rica.</p><div className="location-actions"><a href={maps} target="_blank" rel="noreferrer"><MapPin size={17} />Google Maps</a><a href={waze} target="_blank" rel="noreferrer"><Navigation size={17} />Waze</a></div></div></div><div className="about-links"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={28} /><span>Pedidos y consultas</span><strong>6423-0421</strong></a><a href={facebook} target="_blank" rel="noreferrer"><Share2 size={28} /><span>Seguinos en Facebook</span><strong>Super D&amp;D #2</strong></a><article><Clock size={28} /><span>Horario</span><strong>Lunes a sábado: 7 a.m.–10 p.m.<br />Domingo: 7 a.m.–7 p.m.</strong></article></div></section>;
}
