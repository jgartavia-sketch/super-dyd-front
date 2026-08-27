import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/branding/logo.png";

const links = [["inicio", "Inicio"], ["supermercado", "Supermercado"], ["mi-cuenta", "Mi cuenta"], ["nosotros", "Nosotros"]];

export default function Navbar({ activeSection, setActiveSection }) {
  const [open, setOpen] = useState(false);
  const navigate = (section) => {
    setActiveSection(section);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const items = links.map(([id, label]) => (
    <button key={id} type="button" className={activeSection === id ? "active-link" : ""} onClick={() => navigate(id)}>{label}</button>
  ));
  return (
    <header className={`navbar ${open ? "mobile-open" : ""}`}>
      <button className="brand" type="button" onClick={() => navigate("inicio")}><img src={logo} alt="Supermercado D&D" /></button>
      <nav className="nav-links" aria-label="Navegación principal">{items}</nav>
      <button className="mobile-menu" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      {open && <nav className="mobile-nav-links" aria-label="Navegación móvil">{items}</nav>}
    </header>
  );
}
