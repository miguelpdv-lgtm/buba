import { useState } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Search, ShoppingBag, Instagram, ArrowRight, Truck, Lock, HeadphonesIcon } from "lucide-react";
import logoImg from "../imports/logo.png";
import HeroImg from "../imports/hero.jpeg";
import bolso1Img from "../imports/bolso1.jpeg";
import bolso2Img from "../imports/bolso2.jpeg";
import bolso3Img from "../imports/bolso3.jpeg";
import bolso4Img from "../imports/bolso4.jpeg";
import mujer2Img from "../imports/mujer2.jpeg";
import insta1Img from "../imports/insta1.jpeg";
import insta2Img from "../imports/insta2.jpeg";
import insta3Img from "../imports/insta3.jpeg";
import insta4Img from "../imports/insta4.jpeg";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "./components/ui/sheet";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./components/ui/carousel";

/* MARKER-MAKE-KIT-INVOKED */

const products = [
  { id: 1, name: "Buba Demo", price: "$0 COP", image: bolso1Img, tag: "BEST SELLER" },
  { id: 2, name: "Buba Demo", price: "$0 COP", image: bolso2Img, tag: "NUEVO" },
  { id: 3, name: "Buba Demo", price: "$0 COP", image: bolso3Img, tag: null },
  { id: 4, name: "Buba Demo", price: "$0 COP", image: bolso4Img, tag: "EXCLUSIVO" },
];

const categories = [
  { id: 1, label: "BOLSOS", image: bolso1Img },
  { id: 2, label: "CALZADOS", image: bolso2Img },
  { id: 3, label: "ACCESORIOS", image: bolso3Img },
];

const services = [
  { icon: <Truck size={20} />, title: "ENVÍOS SIN RECARGOS", desc: "Envío gratis en todos los pedidos — $0 COP" },
  { icon: <Lock size={20} />, title: "PAGOS SEGUROS", desc: "Transacciones protegidas y encriptadas" },
  { icon: <HeadphonesIcon size={20} />, title: "SOPORTE EN WHATSAPP", desc: "Resolvemos Tus Dudas" },
];

const instagramImages = [
  { src: insta1Img, alt: "Instagram 1" },
  { src: insta2Img, alt: "Instagram 2" },
  { src: insta3Img, alt: "Instagram 3" },
  { src: insta4Img, alt: "Instagram 4" },
  { src: mujer2Img, alt: "Instagram 5" },
];

const navLinks = ["INICIO", "BOLSOS", "CALZADOS", "ACCESORIOS"];

export default function App() {
  const [cartCount] = useState(0);

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", backgroundColor: "#FAF8F4", color: "#1A1A1A", minHeight: "100vh" }}>

      {/* ── Announcement bar ── */}
      <div style={{ backgroundColor: "#1A1A1A", color: "#FAF8F4", textAlign: "center", padding: "10px 16px", fontSize: "0.72rem", letterSpacing: "0.16em" }}>
        ENVÍO GRATIS EN TODOS LOS PEDIDOS — $0 COP &nbsp;·&nbsp; COLECCIÓN 2026 DISPONIBLE
      </div>

      {/* ── Nav ── */}
      <nav style={{ backgroundColor: "#FAF8F4", borderBottom: "1px solid rgba(26,26,26,0.1)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px", height: 110 }} className="flex items-center justify-between md:px-6">
          <a href="#" className="flex items-center shrink-0">
            <img src={logoImg} alt="Buba Handbags & Complement" style={{ height: 90, width: "auto", objectFit: "contain" }} />
          </a>
          <ul className="hidden md:flex gap-9 list-none m-0 p-0">
            {navLinks.map((item) => (
              <li key={item}>
                <a href="#" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", color: "#1A1A1A", textDecoration: "none", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 md:gap-5">
            <button className="hidden md:block" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><Search size={18} color="#1A1A1A" /></button>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4, position: "relative" }}>
              <ShoppingBag size={18} color="#1A1A1A" />
              {cartCount > 0 && (
                <span style={{ position: "absolute", top: -2, right: -2, backgroundColor: "#1A1A1A", color: "#FAF8F4", borderRadius: "50%", width: 14, height: 14, fontSize: "0.55rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger — three lines */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="flex md:hidden flex-col gap-[4px] items-center justify-center" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
                  <span style={{ display: "block", width: 20, height: 2, backgroundColor: "#1A1A1A", borderRadius: 1 }} />
                  <span style={{ display: "block", width: 20, height: 2, backgroundColor: "#1A1A1A", borderRadius: 1 }} />
                  <span style={{ display: "block", width: 20, height: 2, backgroundColor: "#1A1A1A", borderRadius: 1 }} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" style={{ backgroundColor: "#FAF8F4", padding: 0, zIndex: 200 }}>
                <SheetTitle className="sr-only">Navegación</SheetTitle>
                <div style={{ padding: "32px 24px" }}>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 28 }}>
                    {navLinks.map((item) => (
                      <li key={item}>
                        <SheetClose asChild>
                          <a href="#" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: "#1A1A1A", textDecoration: "none", display: "block", transition: "opacity 0.2s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                            {item}
                          </a>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid rgba(26,26,26,0.1)", display: "flex", flexDirection: "column", gap: 20 }}>
                    <a href="#" style={{ fontSize: "0.75rem", letterSpacing: "0.16em", color: "#8B7355", textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
                      <Search size={16} /> BUSCAR
                    </a>
                    <a href="https://instagram.com/bubabags.col" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", letterSpacing: "0.16em", color: "#8B7355", textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
                      <Instagram size={16} /> INSTAGRAM
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: "relative", height: "85vh", maxHeight: 960, overflow: "hidden" }} className="lg:mx-10 lg:rounded-2xl">
        <img src={HeroImg} alt="Mujer con bolso Buba sobre fondo beige" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "65% top", display: "block" }} />
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
              <img src={cat.image} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }} />
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
          <a href="#" className="hidden sm:flex" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", color: "#8B7355", textDecoration: "none", alignItems: "center", gap: 8 }}>
            VER TODO <ArrowRight size={14} />
          </a>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {products.map((product) => (
            <div key={product.id} style={{ cursor: "pointer" }}
              onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.04)"; }}
              onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}
            >
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", backgroundColor: "#F0EBE1" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
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

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent style={{ marginLeft: -8 }}>
              {products.map((product) => (
                <CarouselItem key={product.id} style={{ paddingLeft: 8, flexBasis: "75%" }}>
                  <div style={{ cursor: "pointer" }}>
                    <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", backgroundColor: "#F0EBE1" }}>
                      <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      {product.tag && (
                        <span style={{ position: "absolute", top: 12, left: 12, backgroundColor: "#1A1A1A", color: "#FAF8F4", fontSize: "0.58rem", letterSpacing: "0.14em", padding: "4px 10px" }}>
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <div style={{ padding: "14px 4px 0" }}>
                      <p style={{ fontSize: "0.8rem", color: "#1A1A1A", marginBottom: 4, letterSpacing: "0.04em" }}>{product.name}</p>
                      <p style={{ fontSize: "0.78rem", color: "#8B7355", letterSpacing: "0.06em" }}>{product.price}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 top-1/2 -translate-y-1/2" variant="outline" style={{ backgroundColor: "rgba(250,248,244,0.9)", border: "1px solid rgba(26,26,26,0.15)", borderRadius: "50%", width: 36, height: 36 }} />
            <CarouselNext className="right-1 top-1/2 -translate-y-1/2" variant="outline" style={{ backgroundColor: "rgba(250,248,244,0.9)", border: "1px solid rgba(26,26,26,0.15)", borderRadius: "50%", width: 36, height: 36 }} />
          </Carousel>
        </div>
      </section>

      {/* ── Lifestyle: "Una mujer que sabe exactamente quién es." ── */}
      <section style={{ maxWidth: 1280, margin: "56px auto 0", padding: "0 24px" }} className="md:mt-20">
        <div style={{ display: "grid", gap: 32, alignItems: "center" }} className="md:grid-cols-2 md:gap-16 md:min-h-[520px]">
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8B7355", marginBottom: 16 }}>NUESTRA ESENCIA</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 5vw, 3.4rem)", fontWeight: 300, color: "#1A1A1A", lineHeight: 1.15, marginBottom: 20 }}>
              Una mujer que sabe <em>exactamente</em> quién es.
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#5A5A5A", lineHeight: 1.8, fontWeight: 300, marginBottom: 28 }}>
              Cada bolso Buba es una declaración silenciosa. Confeccionado con materiales cuidadosamente seleccionados para mujeres que no necesitan explicarse.
            </p>
            <a href="#" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#1A1A1A", textDecoration: "none", borderBottom: "1px solid rgba(26,26,26,0.4)", paddingBottom: 4, display: "inline-flex", alignItems: "center", gap: 8 }}>
              CONOCE NUESTRA HISTORIA <ArrowRight size={12} />
            </a>
          </div>
          <div style={{ overflow: "hidden", aspectRatio: "3/4", borderRadius: 4 }} className="md:aspect-[2/3] md:rounded-none">
            <img src={mujer2Img} alt="Mujer elegante caminando" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
        </div>
      </section>

      {/* ── Featured: Buba Noir ── */}
      <section style={{ maxWidth: 1280, margin: "56px auto 0", padding: "0 24px" }} className="md:mt-20">
        <div style={{ display: "grid", gap: 32, alignItems: "center" }} className="md:grid-cols-2 md:gap-16">
          <div style={{ aspectRatio: "3/4", overflow: "hidden", backgroundColor: "#F0EBE1", borderRadius: 4 }} className="md:aspect-[2/3] md:rounded-none">
            <img src={bolso4Img} alt="Buba Noir" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#8B7355", marginBottom: 12 }}>PIEZA DESTACADA</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 5vw, 3.5rem)", fontWeight: 400, color: "#1A1A1A", marginBottom: 8 }}>Buba Demo</h2>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "#8B7355", marginBottom: 20, fontWeight: 300 }}>$0 COP</p>
            <p style={{ fontSize: "0.85rem", color: "#5A5A5A", lineHeight: 1.8, fontWeight: 300, marginBottom: 28 }}>
           
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button style={{ backgroundColor: "#1A1A1A", color: "#FAF8F4", border: "none", padding: "12px 32px", fontSize: "0.68rem", letterSpacing: "0.18em", cursor: "pointer", transition: "background-color 0.2s", textTransform: "uppercase" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3A3A3A")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A1A1A")}>
                Comprar Ahora
              </button>
              <button style={{ backgroundColor: "transparent", color: "#1A1A1A", border: "1px solid rgba(26,26,26,0.3)", padding: "12px 24px", fontSize: "0.68rem", letterSpacing: "0.18em", cursor: "pointer", textTransform: "uppercase" }}>
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service icons ── */}
      <section style={{ maxWidth: 1280, margin: "72px auto 0", padding: "0 24px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ borderTop: "1px solid rgba(26,26,26,0.1)", borderBottom: "1px solid rgba(26,26,26,0.1)", padding: "40px 0" }}>
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <p style={{ fontSize: "0.85rem", letterSpacing: "0.04em", color: "#1A1A1A" }}>@bubabags.col</p>
          <a href="#" style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "#1A1A1A", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(26,26,26,0.3)", paddingBottom: 2 }}>
            VER EN INSTAGRAM <ArrowRight size={12} />
          </a>
        </div>

        {/* Desktop: 5-column grid */}
        <div className="hidden sm:grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: 0 }}>
          {instagramImages.map((item, i) => (
            <div key={i} style={{ aspectRatio: "1/1", overflow: "hidden", cursor: "pointer" }}
              onMouseEnter={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1.06)"; }}
              onMouseLeave={(e) => { const img = e.currentTarget.querySelector("img"); if (img) img.style.transform = "scale(1)"; }}>
              <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="sm:hidden">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent style={{ marginLeft: -4 }}>
              {instagramImages.map((item, i) => (
                <CarouselItem key={i} style={{ paddingLeft: 4, flexBasis: "60%" }}>
                  <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                    <img src={item.src} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 top-1/2 -translate-y-1/2" variant="outline" style={{ backgroundColor: "rgba(250,248,244,0.9)", border: "1px solid rgba(26,26,26,0.15)", borderRadius: "50%", width: 32, height: 32 }} />
            <CarouselNext className="right-1 top-1/2 -translate-y-1/2" variant="outline" style={{ backgroundColor: "rgba(250,248,244,0.9)", border: "1px solid rgba(26,26,26,0.15)", borderRadius: "50%", width: 32, height: 32 }} />
          </Carousel>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#1A1A1A", color: "#FAF8F4", padding: "64px 24px 32px", marginTop: 72 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
              <img src={logoImg} alt="Buba" style={{ height: 48, width: "auto", objectFit: "contain" }} />
            </div>
            <p style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.5)", lineHeight: 1.8, fontWeight: 300 }}>Bolsos y accesorios para la mujer contemporánea.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16" style={{ marginBottom: 48, justifyItems: "center" }}>
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "#8B7355", marginBottom: 20 }}>TIENDA</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
                {["Inicio", "Bolsos", "Calzados", "Accesorios"].map((item) => (
                  <li key={item}><a href="#" style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.6)", textDecoration: "none" }}>{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "#8B7355", marginBottom: 20 }}>CONTACTO</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
                <li><a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.6)", textDecoration: "none" }}>WhatsApp</a></li>
                <li><a href="https://instagram.com/bubabags.col" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.6)", textDecoration: "none" }}>@bubabags.col</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "#8B7355", marginBottom: 20 }}>SÍGUENOS</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
                <li><a href="https://instagram.com/bubabags.col" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.6)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}><Instagram size={14} /> Instagram</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(250,248,244,0.1)", paddingTop: 24, display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
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
