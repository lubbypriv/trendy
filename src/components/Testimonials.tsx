import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Antes da Trendy, o meu Instagram parecia de outra pessoa. Agora até clientes novos comentam o quanto a marca parece profissional. As mensagens no direct triplicaram.",
    name: "Jacira Paiva",
    role: "Dona de salão, Benguela",
  },
  {
    text: "Investir na identidade visual foi a melhor decisão que tomei para o negócio. A Trendy entende o mercado angolano e entrega com qualidade. Recomendo sem hesitar.",
    name: "Manuel Ferreira",
    role: "Proprietário, Restaurante",
  },
  {
    text: "Em 2 meses de gestão de redes, o meu negócio passou a ser reconhecido na cidade. A equipa da Trendy é comprometida e criativa. Resultado real, não promessas vazias.",
    name: "Carla Neves",
    role: "Empreendedora, Benguela",
  },
];

const Testimonials = () => (
  <section id="depoimentos" className="bg-trendy-black py-32 md:py-48 min-h-screen flex flex-col justify-center border-t border-trendy-white/10">
    <div className="container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-24"
      >
        <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary block">
          O que dizem de nós
        </span>
      </motion.div>

      <div className="flex flex-col gap-32 md:gap-48 max-w-5xl">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="font-display text-4xl sm:text-5xl md:text-6xl text-trendy-white leading-tight mb-8 italic">
              "{t.text}"
            </p>
            <div className="flex items-center gap-6">
              <div className="w-8 h-px bg-primary"></div>
              <div>
                <p className="text-trendy-white font-body text-sm tracking-widest uppercase font-bold">{t.name}</p>
                <p className="text-trendy-cream opacity-50 font-body text-xs tracking-widest uppercase mt-1">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
