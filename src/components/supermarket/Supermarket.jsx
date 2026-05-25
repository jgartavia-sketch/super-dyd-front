import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";

import { categories, products } from "../../data/products";

const whatsappNumber = "50664230421";

const formatCRC = (amount) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Supermarket() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState({});

  const selectedProducts = selectedCategory
    ? products[selectedCategory.id] || []
    : [];

  const cartItems = useMemo(() => Object.values(cart), [cart]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const total = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const openCategory = (category) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedCategory(category);
  };

  const backToCategories = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedCategory(null);
  };

  const addProduct = (product) => {
    setCart((prev) => {
      const current = prev[product.id];

      return {
        ...prev,
        [product.id]: {
          ...product,
          quantity: current ? current.quantity + 1 : 1,
        },
      };
    });
  };

  const removeProduct = (product) => {
    setCart((prev) => {
      const current = prev[product.id];

      if (!current) return prev;

      if (current.quantity === 1) {
        const copy = { ...prev };
        delete copy[product.id];
        return copy;
      }

      return {
        ...prev,
        [product.id]: {
          ...current,
          quantity: current.quantity - 1,
        },
      };
    });
  };

  const deleteProductFromCart = (productId) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const scrollToCart = () => {
    document
      .getElementById("pedido-carrito")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const sendWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    const orderLines = cartItems
      .map((item) => {
        const lineTotal = formatCRC(item.price * item.quantity);
        return `• ${item.quantity} x ${item.name} - ${lineTotal}`;
      })
      .join("\n");

    const message = [
      "Hola Supermercado D&D, quiero hacer este pedido:",
      "",
      orderLines,
      "",
      `Total estimado: ${formatCRC(total)}`,
      "",
      "Por favor confirmar disponibilidad y monto final.",
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="supermarket-section" id="supermercado">
      {!selectedCategory && (
        <>
          <div className="section-header">
            <span className="section-kicker">Supermercado D&D</span>

            <h2>Elegí una categoría</h2>

            <p>
              Explorá el catálogo, agregá productos al carrito y enviá tu pedido
              por WhatsApp cuando esté listo.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <motion.button
                className="category-card"
                key={category.id}
                type="button"
                onClick={() => openCategory(category)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>

                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </motion.button>
            ))}
          </div>
        </>
      )}

      {selectedCategory && (
        <>
          <button
            className="back-btn"
            type="button"
            onClick={backToCategories}
          >
            <ArrowLeft size={18} />
            Categorías
          </button>

          <div className="section-header">
            <span className="section-kicker">{selectedCategory.name}</span>

            <h2>Productos disponibles</h2>

            <p>
              Sumá o restá productos. El carrito se actualiza automáticamente.
            </p>
          </div>

          <div className="product-grid">
            {selectedProducts.map((product, index) => (
              <motion.article
                className="product-card"
                key={product.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.025 }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <strong>{formatCRC(product.price)}</strong>
                </div>

                <div className="quantity-control">
                  <button
                    type="button"
                    onClick={() => removeProduct(product)}
                    aria-label={`Quitar ${product.name}`}
                  >
                    <Minus size={16} />
                  </button>

                  <span>{cart[product.id]?.quantity || 0}</span>

                  <button
                    type="button"
                    onClick={() => addProduct(product)}
                    aria-label={`Agregar ${product.name}`}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </>
      )}

      <aside className="cart-panel" id="pedido-carrito">
        <div className="cart-title">
          <ShoppingCart size={20} />
          <h3>Carrito</h3>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Todavía no agregaste productos.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <span>
                    {item.quantity} x {item.name}
                  </span>

                  <strong>{formatCRC(item.price * item.quantity)}</strong>

                  <button
                    className="cart-remove-btn"
                    type="button"
                    onClick={() => deleteProductFromCart(item.id)}
                    aria-label={`Eliminar ${item.name} del carrito`}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Total estimado</span>
              <strong>{formatCRC(total)}</strong>
            </div>

            <div className="cart-actions">
              <button
                className="secondary-btn clear-cart-btn"
                type="button"
                onClick={clearCart}
              >
                <Trash2 size={18} />
                Vaciar carrito
              </button>

              <button
                className="primary-btn cart-btn"
                type="button"
                onClick={sendWhatsAppOrder}
              >
                Enviar pedido por WhatsApp
              </button>
            </div>
          </>
        )}
      </aside>

      {cartItems.length > 0 && (
        <div className="sticky-cart-bar">
          <button type="button" onClick={scrollToCart}>
            <ShoppingCart size={18} />
            Revisar pedido
          </button>

          <span>
            {totalItems} producto{totalItems !== 1 ? "s" : ""} ·{" "}
            {formatCRC(total)}
          </span>

          <button type="button" onClick={sendWhatsAppOrder}>
            Enviar
          </button>
        </div>
      )}
    </section>
  );
}