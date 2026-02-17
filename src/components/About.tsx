import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const About = () => (
  <section
    id="sobre"
    className="bg-trendy-black py-24 noise-overlay relative overflow-hidden"
  >
    <div className="relative z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-widest">
          Sobre nós
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-trendy-white mt-3">
          Somos a equipa criativa no backstage da tua marca.
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Left visual card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-3xl p-8 sm:p-10 flex flex-col justify-end min-h-[320px] sm:min-h-[380px] overflow-hidden"
        >
          <span className="absolute top-6 left-6 right-6 font-display text-[4.5rem] xs:text-[5.5rem] sm:text-[7rem] md:text-[8rem] leading-none text-trendy-white/[0.06] select-none pointer-events-none">
            trendy
          </span>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-trendy-white relative z-10 max-w-[12ch]">
            O Parceiro Ideal.
          </h3>
          {/* Stat badge */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-card rounded-xl px-4 py-3 shadow-lg max-w-[60%] sm:max-w-none">
            <span className="font-display text-xl sm:text-2xl text-foreground">
              Alguns
            </span>
            <p className="text-[0.65rem] sm:text-xs text-muted-foreground">
              Negócios transformados
            </p>
          </div>
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 bg-trendy-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
            <MapPin className="text-trendy-white" size={12} />
            <span className="text-trendy-white text-[0.65rem] sm:text-xs">
              Benguela, Angola
            </span>
          </div>
        </motion.div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6"
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: "hsl(0 0% 60%)" }}
          >
            A Trendy nasceu com um propósito claro: levar design e estratégia
            digital com cara de “grande marca” para negócios que ainda estão a
            dar os primeiros passos.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "hsl(0 0% 60%)" }}
          >
            Não somos só a agência que entrega posts bonitos. Somos o parceiro
            que pensa contigo, puxa a tua marca para cima e evita que percas
            clientes por causa de comunicação amadora.
          </p>
          <div className="border-l-4 border-primary pl-5 py-3 mt-2 bg-primary/5 rounded-r-xl">
            <p className="italic text-trendy-white text-base font-medium">
              "Transformamos micro empreendedores invisíveis em marcas
              impossíveis de ignorar."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;