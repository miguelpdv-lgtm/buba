import { useState } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Search, ShoppingBag, User, Menu, X, Instagram, ArrowRight, Truck, Lock, HeadphonesIcon } from "lucide-react";
import logoImg from "../imports/Dise_o_sin_t_tulo.svg";
import heroImg from "../imports/WhatsApp_Image_2026-06-10_at_7.40.44_AM.jpeg";

/* MARKER-MAKE-KIT-INVOKED */

const products = [
  {
    id: 1,
    name: "Buba Demo",
    price: "$0 COP",
    image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "Buba Demo",
    price: "$0 COP",
    image: "https://images.unsplash.com/photo-1614179689702-355944cd0918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    tag: "NUEVO",
  },
  {
    id: 3,
    name: "Buba Demo",
    price: "$0 COP",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    tag: null,
  },
  {
    id: 4,
    name: "Buba Demo",
    price: "$0 COP",
    image: "https://images.unsplash.com/photo-1590739169125-a9438401596a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    tag: "EXCLUSIVO",
  },
];

const categories = [
  {
    id: 1,
    label: "BOLSOS",
    image: "https://images.unsplash.com/photo-1705909237050-7a7625b47fac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    id: 2,
    label: "CARTERAS",
    image: "https://images.unsplash.com/photo-1628149453636-23e882b3c1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    id: 3,
    label: "ACCESORIOS",
    image: "https://images.unsplash.com/photo-1629511565591-a1d494ad6c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

const services = [
  { icon: <Truck size={20} />, title: "ENVÍOS SIN RECARGOS", desc: "Envío gratis en pedidos mayores a $100" },
  { icon: <Lock size={20} />, title: "PAGOS SEGUROS", desc: "Transacciones protegidas y encriptadas" },
  { icon: <HeadphonesIcon size={20} />, title: "ATENCIÓN PERSONALIZADA", desc: "Te acompañamos en cada paso" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", backgroundColor: "#FAF8F4", color: "#1A1A1A", minHeight: "100vh" }}>

      {/* ── Announcement bar ── */}
      <div style={{ backgroundColor: "#1A1A1A", color: "#FAF8F4", textAlign: "center", padding: "10px 16px", fontSize: "0.72rem", letterSpacing: "0.16em" }}>
        ENVÍO GRATIS EN PEDIDOS MAYORES A $100 &nbsp;·&nbsp; COLECCIÓN 2026 DISPONIBLE
      </div>

      {/* ── Nav ── */}
      <nav style={{ backgroundColor: "#FAF8F4", borderBottom: "1px solid rgba(26,26,26,0.1)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <a href="#" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
            <ImageWithFallback src={logoImg} alt="Buba Handbags & Complement" style={{ height: 48, width: "auto", objectFit: "contain", filter: "brightness(0)" }} />
          </a>
          <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
            {["INICIO", "BOLSOS", "CALZADOS", "ACCESORIOS"].map((item) => (
              <li key={item}>
                <a href="#" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: "#1A1A1A", textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><Search size={18} color="#1A1A1A" /></button>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4, position: "relative" }}>
              <ShoppingBag size={18} color="#1A1A1A" />
              {cartCount > 0 && (
                <span style={{ position: "absolute", top: -2, right: -2, backgroundColor: "#1A1A1A", color: "#FAF8F4", borderRadius: "50%", width: 14, height: 14, fontSize: "0.55rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {cartCount}
                </span>
              )}
            </button>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><User size={18} color="#1A1A1A" /></button>
            <button className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div style={{ backgroundColor: "#FAF8F4", borderTop: "1px solid rgba(26,26,26,0.1)", padding: "24px" }} className="md:hidden">
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 20 }}>
              {["INICIO", "BOLSOS", "CALZADOS", "ACCESORIOS"].map((item) => (
                <li key={item}><a href="#" style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#1A1A1A", textDecoration: "none" }}>{item}</a></li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: "relative", height: "92vh", maxHeight: 960, overflow: "hidden" }} className="lg:mx-10 lg:rounded-2xl">
        <img src={heroImg} alt="Mujer con bolso Buba sobre fondo beige" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "65% top", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.52) 0%, rgba(10,10,10,0.15) 60%, transparent 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(24px, 7vw, 120px)" }}>
          <p style={{ fontSize: "0.68rem", letterSpacing: "0.22em", color: "#D4B896", marginBottom: 24, textTransform: "uppercase" }}>Nueva Colección 2026</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 5vw, 4.8rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: 24, color: "#FAF8F4" }}>
            La elegancia<br /><em>que te acompaña</em>
          </h1>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(250,248,244,0.8)", maxWidth: 400, marginBottom: 40, fontWeight: 300 }}>
            Bolsos y accesorios que expresan quién eres sin decir una sola palabra. Diseño atemporal, calidad excepcional.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button style={{ backgroundColor: "#FAF8F4", color: "#1A1A1A", border: "none", padding: "14px 36px", fontSize: "0.68rem", letterSpacing: "0.18em", cursor: "pointer", transition: "background-color 0.2s", textTransform: "uppercase" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E0DDD8")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FAF8F4")}>
              Ver Colección
            </button>
            <button style={{ backgroundColor: "transparent", color: "#FAF8F4", border: "1px solid rgba(250,248,244,0.7)", padding: "14px 36px", fontSize: "0.68rem", letterSpacing: "0.18em", cursor: "pointer", textTransform: "uppercase", transition: "background-color 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(250,248,244,0.15)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}>
              Lo Nuevo
            </button>
          </div>
        </div>
      </section>

      {/* ── Category tiles ── */}
      <section style={{ maxWidth: 1280, margin: "64px auto 0", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }} className="grid-cols-1 sm:grid-cols-3">
          {categories.map((cat) => (
            <a key={cat.id} href="#"
              style={{ display: "block", position: "relative", overflow: "hidden", aspectRatio: "5/4", textDecoration: "none", cursor: "pointer" }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.06)";
                const overlay = e.currentTarget.querySelector(".cat-overlay") as HTMLElement;
                if (overlay) overlay.style.backgroundColor = "rgba(10,10,10,0.60)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
                const overlay = e.currentTarget.querySelector(".cat-overlay") as HTMLElement;
                if (overlay) overlay.style.backgroundColor = "rgba(10,10,10,0.45)";
              }}
            >
              <ImageWithFallback src={cat.image} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }} />
              <div className="cat-overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,10,10,0.45)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, transition: "background-color 0.3s" }}>
                <span style={{ color: "#FAF8F4", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {cat.label}
                </span>
                <span style={{ color: "rgba(250,248,244,0.75)", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", borderBottom: "1px solid rgba(250,248,244,0.45)", paddingBottom: 3 }}>
                  VER TODO
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Nueva Colección ── */}
      <section style={{ maxWidth: 1280, margin: "80px auto 0", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8B7355", marginBottom: 8 }}>TEMPORADA 2026</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "#1A1A1A", margin: 0 }}>Nueva Colección</h2>
          </div>
          <a href="#" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", color: "#8B7355", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            VER TODO <ArrowRight size={14} />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} style={{ cursor: "pointer" }}
              onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.04)"; }}
              onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}
            >
              {/* Square-ish card: 5/4 ratio */}
              <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden", backgroundColor: "#F0EBE1" }}>
                <ImageWithFallback src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
                {product.tag && (
                  <span style={{ position: "absolute", top: 12, left: 12, backgroundColor: "#1A1A1A", color: "#FAF8F4", fontSize: "0.58rem", letterSpacing: "0.14em", padding: "4px 10px" }}>
                    {product.tag}
                  </span>
                )}
                <button className="product-cta" style={{ position: "absolute", bottom: 12, left: 12, right: 12, backgroundColor: "rgba(250,248,244,0.95)", border: "none", padding: "10px", fontSize: "0.65rem", letterSpacing: "0.14em", cursor: "pointer", opacity: 0, transition: "opacity 0.3s" }}>
                  AÑADIR AL CARRITO
                </button>
              </div>
              <div style={{ padding: "14px 4px 0" }}>
                <p style={{ fontSize: "0.8rem", color: "#1A1A1A", marginBottom: 4, letterSpacing: "0.04em" }}>{product.name}</p>
                <p style={{ fontSize: "0.78rem", color: "#8B7355", letterSpacing: "0.06em" }}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lifestyle: "Una mujer que sabe exactamente quién es." ── */}
      <section style={{ maxWidth: 1280, margin: "80px auto 0", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", minHeight: 520 }} className="grid-cols-1 md:grid-cols-2">
        {/* Text left */}
        <div>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8B7355", marginBottom: 24 }}>FILOSOFÍA BUBA</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 300, color: "#1A1A1A", lineHeight: 1.15, marginBottom: 28 }}>
            Una mujer que sabe{" "}
            <em>exactamente</em>{" "}
            quién es.
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#5A5A5A", lineHeight: 1.9, maxWidth: 400, fontWeight: 300, marginBottom: 36 }}>
            Cada bolso Buba es una declaración silenciosa. Confeccionado con materiales cuidadosamente seleccionados para mujeres que no necesitan explicarse.
          </p>
          <a href="#" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#1A1A1A", textDecoration: "none", borderBottom: "1px solid rgba(26,26,26,0.4)", paddingBottom: 4, alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8 }}>
            CONOCE NUESTRA HISTORIA <ArrowRight size={12} />
          </a>
        </div>
        {/* Model image right — portrait crop */}
        <div style={{ overflow: "hidden", aspectRatio: "3/4" }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1557161622-5f50ca344787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            alt="Mujer elegante caminando"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </section>

      {/* ── Featured: Buba Noir ── */}
      <section style={{ maxWidth: 1280, margin: "80px auto 0", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
        {/* Bag image left — more square */}
        <div style={{ aspectRatio: "5/4", overflow: "hidden", backgroundColor: "#F0EBE1" }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1590739169125-a9438401596a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
            alt="Buba Noir"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Info right */}
        <div>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8B7355", marginBottom: 16 }}>PIEZA DESTACADA</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 400, color: "#1A1A1A", marginBottom: 12 }}>Buba Demo</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", color: "#8B7355", marginBottom: 24, fontWeight: 300 }}>$0 COP</p>
          <p style={{ fontSize: "0.85rem", color: "#5A5A5A", lineHeight: 1.8, maxWidth: 380, fontWeight: 300, marginBottom: 36 }}>
            La Buba Noir encarna la elegancia oscura. Cuero genuino negro, herrajes dorados y un diseño estructurado que transita del día a la noche sin esfuerzo.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button style={{ backgroundColor: "#1A1A1A", color: "#FAF8F4", border: "none", padding: "14px 40px", fontSize: "0.68rem", letterSpacing: "0.18em", cursor: "pointer", transition: "background-color 0.2s", textTransform: "uppercase" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3A3A3A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A1A1A")}>
              Comprar Ahora
            </button>
            <button style={{ backgroundColor: "transparent", color: "#1A1A1A", border: "1px solid rgba(26,26,26,0.3)", padding: "14px 28px", fontSize: "0.68rem", letterSpacing: "0.18em", cursor: "pointer", textTransform: "uppercase" }}>
              Ver Detalles
            </button>
          </div>
        </div>
      </section>

      {/* ── Service icons ── */}
      <section style={{ maxWidth: 1280, margin: "72px auto 0", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, borderTop: "1px solid rgba(26,26,26,0.1)", borderBottom: "1px solid rgba(26,26,26,0.1)", padding: "40px 0" }} className="grid-cols-1 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{ color: "#8B7355", flexShrink: 0, marginTop: 2 }}>{s.icon}</div>
              <div>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "#1A1A1A", marginBottom: 6 }}>{s.title}</p>
                <p style={{ fontSize: "0.78rem", color: "#5A5A5A", fontWeight: 300, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Instagram strip ── */}
      <section style={{ maxWidth: 1280, margin: "72px auto 0", padding: "0 24px" }}>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <p style={{ fontSize: "0.85rem", letterSpacing: "0.04em", color: "#1A1A1A" }}>@bubabags.col</p>
          <a href="#" style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "#1A1A1A", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(26,26,26,0.3)", paddingBottom: 2 }}>
            VER EN INSTAGRAM <ArrowRight size={12} />
          </a>
        </div>

        {/* Photo strip — 5 equal square cells, no gap */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0 }}>
          {/* Cell 1 */}
          <div style={{ aspectRatio: "1/1", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
            onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}>
            <ImageWithFallback src="https://images.unsplash.com/photo-1629511565591-a1d494ad6c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Instagram 1" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
          </div>

          {/* Cell 2 — dark with text */}
          <div style={{ aspectRatio: "1/1", backgroundColor: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, cursor: "pointer" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", fontWeight: 300, color: "#FAF8F4", lineHeight: 1.2, textAlign: "center" }}>
              Diseñado<br /><em>a tu</em><br />medida.
            </p>
          </div>

          {/* Cell 3 */}
          <div style={{ aspectRatio: "1/1", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
            onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}>
            <ImageWithFallback src="https://images.unsplash.com/photo-1614179689702-355944cd0918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Instagram 3" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
          </div>

          {/* Cell 4 */}
          <div style={{ aspectRatio: "1/1", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
            onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}>
            <ImageWithFallback src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Instagram 4" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
          </div>

          {/* Cell 5 */}
          <div style={{ aspectRatio: "1/1", overflow: "hidden", cursor: "pointer" }}
            onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
            onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}>
            <ImageWithFallback src="https://images.unsplash.com/photo-1557161622-5f50ca344787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Instagram 5" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#1A1A1A", color: "#FAF8F4", padding: "64px 24px 32px", marginTop: 72 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 40, marginBottom: 56 }} className="grid-cols-2 md:grid-cols-4">
            <div>
              <div style={{ marginBottom: 20 }}>
                <ImageWithFallback src={logoImg} alt="Buba" style={{ height: 48, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              </div>
              <p style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.5)", lineHeight: 1.8, fontWeight: 300 }}>Bolsos y accesorios para la mujer contemporánea.</p>
            </div>
            {[
              { heading: "TIENDA", links: ["Inicio", "Bolsos", "Calzados", "Accesorios"] },
              {
                heading: "CONTACTO", links: [], custom: (
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    <li><a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.6)", textDecoration: "none" }}>WhatsApp</a></li>
                    <li><a href="https://instagram.com/bubabags.col" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.6)", textDecoration: "none" }}>@bubabags.col</a></li>
                  </ul>
                )
              },
            ].map((col) => (
              <div key={col.heading}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "#8B7355", marginBottom: 20 }}>{col.heading}</p>
                {"custom" in col ? col.custom : (
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                    {col.links.map((item) => (
                      <li key={item}><a href="#" style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.6)", textDecoration: "none" }}>{item}</a></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(250,248,244,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: "0.65rem", color: "rgba(250,248,244,0.35)", letterSpacing: "0.08em" }}>© 2026 Buba Handbags & Complement™. Todos los derechos reservados.</p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacidad", "Términos", "Cookies"].map((item) => (
                <a key={item} href="#" style={{ fontSize: "0.65rem", color: "rgba(250,248,244,0.35)", textDecoration: "none" }}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`div:hover .product-cta { opacity: 1 !important; }`}</style>
    </div>
  );
}
