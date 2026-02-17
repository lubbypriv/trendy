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
  <section id="depoimentos" className="bg-primary py-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary-foreground/60 text-xs font-bold uppercase tracking-widest">Depoimentos</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mt-3">
          O que os clientes dizem de nós.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-2xl p-6 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-primary-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="text-primary-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-primary-foreground/60 text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
