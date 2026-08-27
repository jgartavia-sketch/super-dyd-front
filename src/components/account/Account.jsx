import { useEffect, useState } from "react";
import { Copy, Gift, LogIn, LogOut, Share2, Star, UserPlus, Users } from "lucide-react";
import { accountApi } from "../../services/api";

const emptyRegister = { name: "", email: "", phone: "", password: "", referral_code: "" };

export default function Account() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(emptyRegister);
  const [member, setMember] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("dyd_token")) return;
    accountApi.me().then(setMember).catch(() => localStorage.removeItem("dyd_token"));
  }, []);

  const submit = async (event) => {
    event.preventDefault(); setLoading(true); setMessage("");
    try {
      const data = mode === "register" ? await accountApi.register(form) : await accountApi.login({ email: form.email, password: form.password });
      if (data.token || data.access_token) localStorage.setItem("dyd_token", data.token || data.access_token);
      const profile = data.customer || data.user || await accountApi.me();
      setMember(profile); setForm(emptyRegister);
    } catch (error) { setMessage(error.message); } finally { setLoading(false); }
  };
  const logout = () => { localStorage.removeItem("dyd_token"); setMember(null); };
  const referralUrl = member?.referral_url || `${window.location.origin}/?ref=${member?.referral_code || ""}`;
  const copyReferral = async () => { await navigator.clipboard.writeText(referralUrl); setMessage("Enlace copiado."); };
  const shareReferral = () => window.open(`https://wa.me/?text=${encodeURIComponent(`Registrate en Supermercado D&D con mi enlace: ${referralUrl}`)}`, "_blank", "noopener,noreferrer");

  if (member) return <section className="account-section"><div className="account-heading"><span className="section-kicker">Mi cuenta</span><h2>Hola, {member.name}</h2><p>Este es tu centro de puntos y referidos.</p></div><div className="account-dashboard"><article className="points-summary"><Star size={34} /><span>Puntos acumulados</span><strong>{member.points ?? 0}</strong><small>Disponibles en tu cuenta</small></article><article className="account-card"><Users size={30} /><span>Referidos exitosos</span><strong>{member.referrals_count ?? 0}</strong><p>Personas registradas con tu código.</p></article><article className="account-card referral-card"><Gift size={30} /><span>Tu código</span><strong>{member.referral_code}</strong><p>Compartí tu enlace para sumar beneficios.</p><div className="referral-actions"><button type="button" onClick={copyReferral}><Copy size={17} />Copiar</button><button type="button" onClick={shareReferral}><Share2 size={17} />WhatsApp</button></div></article></div>{message && <p className="form-message success">{message}</p>}<button className="logout-btn" type="button" onClick={logout}><LogOut size={18} />Cerrar sesión</button></section>;

  return <section className="account-section"><div className="account-heading"><span className="section-kicker">Mi cuenta</span><h2>Puntos que conectan</h2><p>Registrate, recibí tu código personal y ganá beneficios al compartir D&amp;D.</p></div><div className="auth-shell"><div className="auth-benefits"><Gift size={38} /><h3>Tu comunidad también suma</h3><p>Compartí tu enlace único. Cuando una persona se registre correctamente con él, el sistema lo asociará a tu cuenta.</p><div><span><Star size={19} />Consultá tus puntos</span><span><Users size={19} />Revisá tus referidos</span><span><Share2 size={19} />Compartí por WhatsApp</span></div></div><form className="auth-form" onSubmit={submit}><div className="auth-tabs"><button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}><LogIn size={17} />Ingresar</button><button type="button" className={mode === "register" ? "active" : ""} onClick={() => setMode("register")}><UserPlus size={17} />Crear cuenta</button></div>{mode === "register" && <><label>Nombre completo<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label><label>WhatsApp<input required inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label></>}<label>Correo electrónico<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label><label>Contraseña<input required type="password" minLength="8" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label>{mode === "register" && <label>Código de referido <small>(opcional)</small><input value={form.referral_code} onChange={(e) => setForm({ ...form, referral_code: e.target.value.trim().toUpperCase() })} /></label>}{message && <p className="form-message">{message}</p>}<button className="primary-btn submit-btn" disabled={loading}>{loading ? "Procesando…" : mode === "login" ? "Ingresar a mi cuenta" : "Crear mi cuenta"}</button></form></div></section>;
}
