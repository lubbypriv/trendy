import { motion } from "framer-motion";
import { Sparkles, Palette, Share2, TrendingUp } from "lucide-react";

const serviceCards = [
  { icon: Share2, label: "Gestão de Redes" },
  { icon: Palette, label: "Identidade Visual" },
  { icon: Sparkles, label: "Social Media" },
  { icon: TrendingUp, label: "Tráfego Pago" },
];

const marqueeItems = [
  "Gestão de Redes Sociais",
  "Identidade Visual",
  "Social Media Design",
  "Tráfego Pago",
  "Landing Pages",
  "Audiovisual",
  "Branding",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-trendy-black overflow-hidden grid-pattern noise-overlay">
      {/* Ambient blobs */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16 flex flex-col lg:flex-row items-center lg:items-start gap-12 min-h-screen">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 max-w-2xl flex flex-col justify-center min-h-[70vh]"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-8 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-blink" />
            <span className="text-xs font-medium text-primary">
              Benguela, Angola · Abertos para novos projectos
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-6">
            <span className="text-trendy-white">Marcas que</span>
            <br />
            <span className="relative inline-block my-1">
              <span className="absolute inset-0 bg-primary rounded-sm -rotate-1 scale-x-105 scale-y-110" />
              <span className="relative text-trendy-white px-2">ninguém</span>
            </span>
            <br />
            <span className="text-trendy-white">consegue</span>
            <br />
            <span className="text-trendy-white">ignorar.</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-8 leading-relaxed" style={{ color: 'hsl(0 0% 55%)' }}>
            Transformamos micro empreendedores invisíveis em marcas impossíveis
            de ignorar. Design estratégico, presença digital e resultados reais.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="rounded-full bg-primary px-7 py-3.5 text-primary-foreground font-semibold text-sm transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              Quero crescer <span>→</span>
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-trendy-white/20 px-7 py-3.5 text-trendy-white font-medium text-sm transition-colors hover:border-trendy-white/50"
            >
              Ver serviços
            </a>
          </div>
        </motion.div>

        {/* Right floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block flex-shrink-0 mt-32"
        >
          <div className="animate-float grid grid-cols-2 gap-4 w-[320px]">
            {serviceCards.map((s, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-5 flex flex-col gap-3 border-t-2 border-t-primary/40"
              >
                <s.icon className="text-primary" size={22} />
                <span className="text-trendy-white text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 bg-primary py-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-primary-foreground font-semibold text-sm flex items-center gap-4">
              {item} <span className="text-primary-foreground/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
