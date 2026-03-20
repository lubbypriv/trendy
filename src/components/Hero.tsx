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
    <section className="relative min-h-[100vh] w-full bg-trendy-black overflow-hidden noise-overlay flex flex-col justify-end pt-[120px] pb-[12vh] px-6 md:px-12">
      {/* Cinematic Background Image with ultra dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.webp" 
          alt="Angolan cinematic scene" 
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Massive Headline */}
          <h1 className="font-display text-[15vw] leading-[0.8] tracking-[-0.04em] text-trendy-white italic mb-12 drop-shadow-2xl flex flex-col uppercase mix-blend-difference">
            <span>O mercado não perdoa</span>
            <span className="text-primary mt-1">marcas fracas.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-trendy-white/20 pt-8 mt-12">
            <p className="text-trendy-white opacity-80 text-xl max-w-lg font-body font-light">
              Construímos marcas que ficam na memória e vendem.
            </p>

            {/* Links / Minimalist CTAs */}
            <div className="flex gap-10">
              <a
                href="https://instagram.com/trendy.gs"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col font-body font-bold text-xs tracking-[0.2em] uppercase text-trendy-white"
              >
                Ver trabalho
                <span className="h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500 mt-1"></span>
              </a>
              <a
                href="#contacto"
                className="group flex flex-col font-body font-bold text-xs tracking-[0.2em] uppercase text-primary"
              >
                Fala connosco
                <span className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 mt-1"></span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
