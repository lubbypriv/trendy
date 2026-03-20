import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: MessageCircle, label: "WhatsApp", value: "+244 935 047 246", href: "https://wa.me/244935047246" },
  { icon: Mail, label: "Email", value: "trendy.ctt@gmail.com", href: "mailto:trendy.ctt@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "@trendy.gs", href: "https://instagram.com/trendy.gs" },
  { icon: MapPin, label: "Localização", value: "Benguela, Angola" },
  { icon: Clock, label: "Horário", value: "Seg–Sex, 08h às 17h" },
];

const Contact = () => {
  return (
    <section
      id="contacto"
      className="bg-trendy-black min-h-screen flex items-center py-32 md:py-48 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary mb-12 block">
            Próximo Passo
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] text-trendy-white leading-[1.0] tracking-tight mb-20">
            A tua marca pode ser a próxima que Angola não consegue <span className="text-primary italic">ignorar.</span>
          </h2>

          <a
            href="https://wa.me/244935047246"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-4 bg-transparent border border-trendy-white px-10 py-6 text-sm font-body font-bold uppercase tracking-widest text-trendy-white transition-all duration-300 ease-out hover:bg-primary hover:border-primary"
          >
            Fala connosco
            <div className="w-2 h-2 rounded-full bg-trendy-white transition-colors duration-300"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
