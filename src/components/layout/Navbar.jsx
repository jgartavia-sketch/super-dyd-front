import logo from "../../assets/branding/logo.png";
import { Menu } from "lucide-react";

export default function Navbar({ activeSection, setActiveSection }) {
  const goToSection = (section) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setActiveSection(section);
  };

  return (
    <header className="navbar">
      <button
        className="brand"
        type="button"
        onClick={() => goToSection("inicio")}
      >
        <img src={logo} alt="Supermercado D&D" />
      </button>

      <nav className="nav-links">
        <button
          type="button"
          className={activeSection === "inicio" ? "active-link" : ""}
          onClick={() => goToSection("inicio")}
        >
          Inicio
        </button>

        <button
          type="button"
          className={activeSection === "supermercado" ? "active-link" : ""}
          onClick={() => goToSection("supermercado")}
        >
          Supermercado
        </button>

        <button
          type="button"
          className={activeSection === "cliente-frecuente" ? "active-link" : ""}
          onClick={() => goToSection("cliente-frecuente")}
        >
          Cliente Frecuente
        </button>

        <button
          type="button"
          className={activeSection === "contacto" ? "active-link" : ""}
          onClick={() => goToSection("contacto")}
        >
          Contacto
        </button>
      </nav>

      <button className="mobile-menu" type="button">
        <Menu size={24} />
      </button>
    </header>
  );
}