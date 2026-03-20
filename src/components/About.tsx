import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const About = () => (
  <section
    id="sobre"
    className="bg-trendy-black py-32 md:py-48 min-h-screen flex items-center"
  >
    <div className="container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl"
      >
        <span className="font-body text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-primary mb-12 block">
          Manifesto
        </span>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] text-trendy-white leading-[1.05] tracking-tight">
          Somos <span className="text-primary italic">angolanos.</span>
          <br />
          Conhecemos este mercado por dentro.
        </h2>
        
        <p className="mt-16 font-body text-trendy-cream opacity-70 text-2xl md:text-4xl leading-[1.4] max-w-4xl font-light">
          Sabemos o que o cliente angolano ignora, o que o convence e o que o faz voltar. É com esse conhecimento que construímos marcas.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;