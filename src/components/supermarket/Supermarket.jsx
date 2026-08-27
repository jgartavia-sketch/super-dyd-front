import { useMemo, useState } from "react";
import { ChevronDown, Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { categories, products } from "../../data/products";

const whatsappNumber = "50664230421";
const formatCRC = (amount) => new Intl.NumberFormat("es-CR", { style: "currency", currency: "CRC", maximumFractionDigits: 0 }).format(amount);

export default function Supermarket() {
  const [openCategory, setOpenCategory] = useState(null);
  const [cart, setCart] = useState({});
  const cartItems = useMemo(() => Object.values(cart), [cart]);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const changeQuantity = (product, delta) => setCart((current) => {
    const quantity = (current[product.id]?.quantity || 0) + delta;
    const next = { ...current };
    if (quantity <= 0) delete next[product.id]; else next[product.id] = { ...product, quantity };
    return next;
  });
  const sendOrder = () => {
    if (!cartItems.length) return;
    const lines = cartItems.map((item) => `• ${item.quantity} x ${item.name} - ${formatCRC(item.price * item.quantity)}`).join("\n");
    const message = ["Hola Supermercado D&D, quiero hacer este pedido:", "", lines, "", `Total estimado: ${formatCRC(total)}`, "", "Por favor confirmar disponibilidad y monto final."].join("\n");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  return <section className="supermarket-section"><div className="section-header"><span className="section-kicker">Supermercado D&amp;D</span><h2>Todo lo que necesitás</h2><p>Abrí una categoría, agregá productos y enviá el pedido al WhatsApp del supermercado.</p></div>
    <div className="category-accordion">{categories.map((category) => {
      const isOpen = openCategory === category.id;
      return <article className={`category-accordion-item ${isOpen ? "open" : ""}`} key={category.id}>
        <button className="category-accordion-button" type="button" aria-expanded={isOpen} onClick={() => setOpenCategory(isOpen ? null : category.id)}><img src={category.image} alt="" /><span><strong>{category.name}</strong><small>{category.description}</small></span><ChevronDown size={25} /></button>
        {isOpen && <div className="accordion-products">{(products[category.id] || []).map((product) => <article className="product-card" key={product.id}><div className="product-image"><img src={product.image} alt={product.name} /></div><div className="product-info"><h3>{product.name}</h3><strong>{formatCRC(product.price)}</strong></div><div className="quantity-control"><button type="button" onClick={() => changeQuantity(product, -1)} aria-label={`Quitar ${product.name}`}><Minus size={16} /></button><span>{cart[product.id]?.quantity || 0}</span><button type="button" onClick={() => changeQuantity(product, 1)} aria-label={`Agregar ${product.name}`}><Plus size={16} /></button></div></article>)}</div>}
      </article>;
    })}</div>
    <aside className="cart-panel" id="pedido-carrito"><div className="cart-title"><ShoppingCart size={20} /><h3>Tu pedido</h3></div>{!cartItems.length ? <p className="empty-cart">Todavía no agregaste productos.</p> : <><div className="cart-items">{cartItems.map((item) => <div className="cart-item" key={item.id}><span>{item.quantity} x {item.name}</span><strong>{formatCRC(item.price * item.quantity)}</strong><button className="cart-remove-btn" type="button" onClick={() => setCart((current) => { const next = { ...current }; delete next[item.id]; return next; })}><X size={16} /></button></div>)}</div><div className="cart-total"><span>Total estimado</span><strong>{formatCRC(total)}</strong></div><div className="cart-actions"><button className="secondary-btn clear-cart-btn" type="button" onClick={() => setCart({})}><Trash2 size={18} />Vaciar carrito</button><button className="primary-btn cart-btn" type="button" onClick={sendOrder}>Enviar pedido por WhatsApp</button></div></>}</aside>
    {!!cartItems.length && <div className="sticky-cart-bar"><button type="button" onClick={() => document.getElementById("pedido-carrito")?.scrollIntoView({ behavior: "smooth" })}><ShoppingCart size={18} />Revisar</button><span>{totalItems} producto{totalItems !== 1 ? "s" : ""} · {formatCRC(total)}</span><button type="button" onClick={sendOrder}>Enviar</button></div>}
  </section>;
}
