import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-trendy-black py-16 md:py-24">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-trendy-white/10 pt-16">
        
        <div className="max-w-md border-l border-primary/50 pl-6">
          <p className="font-display text-3xl md:text-4xl text-trendy-white italic mb-4">
            trendy.
          </p>
          <p className="font-body text-trendy-cream opacity-50 text-sm md:text-base leading-relaxed">
            O mercado angolano merece marcas melhores.<br />Estamos a construí-las.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-4">
          <div className="flex gap-8 mb-4">
            <a href="https://instagram.com/trendy.gs" target="_blank" rel="noopener noreferrer" className="font-body text-xs font-bold uppercase tracking-widest text-trendy-white hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="mailto:trendy.ctt@gmail.com" className="font-body text-xs font-bold uppercase tracking-widest text-trendy-white hover:text-primary transition-colors">
              Email
            </a>
            <a href="https://wa.me/244935047246" target="_blank" rel="noopener noreferrer" className="font-body text-xs font-bold uppercase tracking-widest text-trendy-white hover:text-primary transition-colors">
              WhatsApp
            </a>
          </div>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-trendy-cream/30">
            © {new Date().getFullYear()} Trendy. Feito em Benguela, Angola.
          </p>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
