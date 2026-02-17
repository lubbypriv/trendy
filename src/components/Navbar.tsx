import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contacto", href: "#contacto" }];


  return (
    <nav
      className="fixed top-3 left-0 right-0 z-50 transition-all duration-300"
    >
      <div
        className={`container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-white/10 shadow-lg shadow-black/30 ${
          scrolled ? "glass" : "glass"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-md shadow-black/30">
            <img
              src="/tt.svg"
              alt="Trendy"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-display text-lg sm:text-xl text-primary tracking-tight">
            trendy
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              scrolled ? "text-foreground" : "text-trendy-white"
            }`}
          >

              {l.label}
            </a>
          )}
          <a
            href="#contacto"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            Fale connosco

          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu">

          {mobileOpen ? (
            <X
              className={scrolled ? "text-foreground" : "text-trendy-white"}
              size={24}
            />
          ) : (
            <Menu
              className={scrolled ? "text-foreground" : "text-trendy-white"}
              size={24}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass absolute inset-x-4 top-full mx-auto mt-2 rounded-2xl p-6 flex flex-col gap-4 shadow-xl border border-white/15"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-foreground text-base font-medium hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Fala connosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

};

export default Navbar;