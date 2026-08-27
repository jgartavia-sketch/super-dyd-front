import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import HomeContent from "../components/home/HomeContent";
import Supermarket from "../components/supermarket/Supermarket";
import Account from "../components/account/Account";
import About from "../components/about/About";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");
  return <main className="site-shell">
    <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
    {activeSection === "inicio" && <HomeContent setActiveSection={setActiveSection} />}
    {activeSection === "supermercado" && <Supermarket />}
    {activeSection === "mi-cuenta" && <Account />}
    {activeSection === "nosotros" && <About />}
  </main>;
}
