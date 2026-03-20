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
    { label: "Perspectivas", href: "#perspectivas" },
    { label: "Testemunhos", href: "#depoimentos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-500 flex items-center justify-between px-6 md:px-12 py-6 ${scrolled ? 'bg-[#0A0A0A] backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <span className="font-display text-2xl lg:text-3xl text-trendy-white group-hover:text-primary transition-colors italic">
          trendy
        </span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-xs font-body font-bold uppercase tracking-widest text-trendy-white hover:text-primary transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden relative z-50 text-trendy-white hover:text-primary transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menu"
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-trendy-black z-40 flex flex-col justify-center items-center gap-8"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-5xl text-trendy-white hover:text-primary transition-colors italic"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;