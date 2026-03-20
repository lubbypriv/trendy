import { motion } from "framer-motion";

const services = [
  {
    title: "Branding",
    desc: "A alma da tua marca.",
  },
  {
    title: "Publicidade",
    desc: "Campanhas provocadoras.",
  },
  {
    title: "Marketing",
    desc: "Domínio do nicho em Angola.",
  },
];

const Services = () => (
  <section id="servicos" className="bg-trendy-black py-32 md:py-48 min-h-screen flex flex-col justify-center">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-24"
      >
        <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary block">
          O que fazemos
        </span>
      </motion.div>

      <div className="flex flex-col border-t border-trendy-white/10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col md:flex-row md:items-baseline justify-between py-12 md:py-16 border-b border-trendy-white/10 transition-colors hover:bg-white/[0.02]"
          >
            <h3 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] text-trendy-white transition-colors duration-500 group-hover:text-primary uppercase tracking-tighter leading-none mb-4 md:mb-0">
              {s.title}
            </h3>
            <p className="font-body text-trendy-cream opacity-50 text-xl lg:text-3xl font-light">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
