import { motion } from "framer-motion";
import { MessageCircle, Mail, Instagram, MapPin, Clock } from "lucide-react";
import { useEffect } from "react";

const contactInfo = [
  { icon: MessageCircle, label: "WhatsApp", value: "+244 935 047 246", href: "https://wa.me/244935047246" },
  { icon: Mail, label: "Email", value: "trendy.ctt@gmail.com", href: "mailto:trendy.ctt@gmail.com" },
  { icon: Instagram, label: "Instagram", value: "@trendy.gs", href: "https://instagram.com/trendy.gs" },
  { icon: MapPin, label: "Localização", value: "Benguela, Angola" },
  { icon: Clock, label: "Horário", value: "Seg–Sex, 08h às 17h" },
];

const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    const v = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };
    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (!d.querySelector(`script[src="${w}"]`)) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <section id="contacto" className="py-24" style={{ background: 'hsl(30 23% 94%)' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
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
              Conta-nos sobre o teu negócio. Respondemos em até 24h.
            </p>

            <div className="space-y-4">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <c.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Tally form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="font-display text-xl text-foreground mb-1">Pede o teu orçamento</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Preenche o formulário e entramos em contacto brevemente.
            </p>
            <iframe
              data-tally-src="https://tally.so/embed/rjAdPp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="BRIEFING DE PROJETO"
              style={{ border: 'none', background: 'transparent' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
