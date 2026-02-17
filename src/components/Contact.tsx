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
      className="py-24"
      style={{ background: "hsl(30 23% 94%)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Contacto</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3">
              Vamos criar algo incrível.
            </h2>
            <p className="text-muted-foreground mt-4 mb-8">
              Conta-nos um bocado sobre o teu negócio. Respondemos em até 24h com ideias e próximos passos.
            </p>

            <div className="space-y-4">
              {contactInfo.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <c.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA em vez de formulário Tally */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col gap-6"
          >
            <h3 className="font-display text-xl text-foreground">
              Bora tirar a tua marca do modo invisível?
            </h3>
            <p className="text-sm text-muted-foreground">
              Escolhe o canal que preferes e fala directamente connosco. Nada de formalidades demais, só uma conversa honesta sobre o teu projecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/244935047246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
              <a
                href="mailto:trendy.ctt@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                <Mail size={18} />
                Enviar email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
