import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-trendy-black py-16 border-t border-trendy-white/5">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-primary-foreground text-sm">t</span>
            </div>
            <span className="font-display text-lg text-primary">trendy</span>
          </div>
          <p className="text-sm" style={{ color: 'hsl(0 0% 45%)' }}>
            O Parceiro Ideal · Benguela, Angola 🇦🇴
          </p>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="text-trendy-white text-sm font-semibold mb-4">Serviços</h4>
          <ul className="space-y-2">
            {["Gestão de Redes", "Social Media", "Identidade Visual", "Tráfego Pago"].map((s) => (
              <li key={s}>
                <a href="#servicos" className="text-sm hover:text-primary transition-colors" style={{ color: 'hsl(0 0% 45%)' }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-trendy-white text-sm font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2">
            {[
              { label: "Sobre nós", href: "#sobre" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Contacto", href: "#contacto" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm hover:text-primary transition-colors" style={{ color: 'hsl(0 0% 45%)' }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h4 className="text-trendy-white text-sm font-semibold mb-4">Redes</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://instagram.com/trendy.gs" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors flex items-center gap-2" style={{ color: 'hsl(0 0% 45%)' }}>
                <Instagram size={14} /> @trendy.gs
              </a>
            </li>
            <li>
              <a href="mailto:trendy.ctt@gmail.com" className="text-sm hover:text-primary transition-colors flex items-center gap-2" style={{ color: 'hsl(0 0% 45%)' }}>
                <Mail size={14} /> trendy.ctt@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/244935047246" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors flex items-center gap-2" style={{ color: 'hsl(0 0% 45%)' }}>
                <MessageCircle size={14} /> +244 935 047 246
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-trendy-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: 'hsl(0 0% 35%)' }}>
          © 2026 Trendy · Todos os direitos reservados · Feito com ❤️ em Benguela
        </p>
        <div className="flex gap-4">
          <a href="https://instagram.com/trendy.gs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" style={{ color: 'hsl(0 0% 45%)' }}>
            <Instagram size={18} />
          </a>
          <a href="mailto:trendy.ctt@gmail.com" className="hover:text-primary transition-colors" style={{ color: 'hsl(0 0% 45%)' }}>
            <Mail size={18} />
          </a>
          <a href="https://wa.me/244935047246" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" style={{ color: 'hsl(0 0% 45%)' }}>
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
