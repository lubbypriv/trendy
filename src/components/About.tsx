import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const About = () => (
  <section id="sobre" className="bg-trendy-black py-24 noise-overlay relative overflow-hidden">
    <div className="relative z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-widest">Sobre nós</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-trendy-white mt-3">
          Somos mais que uma agência.
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Left visual card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-3xl p-10 flex flex-col justify-end min-h-[400px] overflow-hidden"
        >
          <span className="absolute top-6 left-6 right-6 font-display text-[6rem] sm:text-[8rem] leading-none text-trendy-white/[0.06] select-none pointer-events-none">
            trendy
          </span>
          <h3 className="font-display text-3xl sm:text-4xl text-trendy-white relative z-10">
            O Parceiro Ideal.
          </h3>
          {/* Stat badge */}
          <div className="absolute bottom-6 right-6 bg-card rounded-xl p-4 shadow-lg">
            <span className="font-display text-2xl text-foreground">50+</span>
            <p className="text-xs text-muted-foreground">Negócios transformados</p>
          </div>
          <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-trendy-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
            <MapPin className="text-trendy-white" size={12} />
            <span className="text-trendy-white text-xs">Benguela, Angola</span>
          </div>
        </motion.div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6"
        >
          <p className="text-base leading-relaxed" style={{ color: 'hsl(0 0% 60%)' }}>
            A Trendy nasceu com um propósito claro: democratizar o acesso a design e estratégia digital de qualidade em Angola. Porque todo negócio — não importa o tamanho — merece uma presença que gera confiança e resultados.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'hsl(0 0% 60%)' }}>
            Não somos apenas uma agência que entrega posts bonitos. Somos parceiros estratégicos que entendem que para micro empreendedores, cada cliente perdido por presença amadora dói no bolso.
          </p>
          <div className="border-l-4 border-primary pl-5 py-3 mt-2 bg-primary/5 rounded-r-xl">
            <p className="italic text-trendy-white text-base font-medium">
              "Transformamos micro empreendedores invisíveis em marcas impossíveis de ignorar."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
