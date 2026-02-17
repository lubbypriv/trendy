import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Gestão de Redes Sociais",
    items: ["Planeamento de conteúdo", "Criação de posts", "Reels/TikToks", "Gestão de comentários", "Stories diários", "Relatórios mensais"],
    tags: ["Instagram", "Facebook", "TikTok", "Copywriting"],
  },
  {
    num: "02",
    title: "Social Media Design",
    items: ["Posts para feed", "Stories", "Reels", "Carrosséis", "Templates editáveis no Figma", "Calendário visual"],
    tags: ["Feed", "Stories", "Reels", "Templates"],
  },
  {
    num: "03",
    title: "Identidade Visual",
    items: ["Criação de logotipo", "Manual de identidade", "Paleta de cores", "Tipografia", "Mockups", "Arquivos editáveis"],
    tags: ["Logo", "Branding", "Manual", "Papelaria"],
  },
  {
    num: "04",
    title: "Tráfego Pago",
    items: ["Configuração de campanhas", "Meta Ads", "Google Ads", "Criação de criativos", "Remarketing", "Relatórios de performance"],
    tags: ["Meta Ads", "Google Ads", "Remarketing", "ROI"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Services = () => (
  <section id="servicos" className="bg-trendy-black py-24 noise-overlay relative">
    <div className="relative z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-widest">O que fazemos por ti</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-trendy-white mt-3">
          Do feed solto à marca consistente.
        </h2>
        <p className="mt-4 max-w-md" style={{ color: 'hsl(0 0% 50%)' }}>
          Cuidamos da parte visual e estratégica para que tu cuides daquilo que ninguém faz melhor: o teu negócio.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-b-2 hover:border-b-primary"
            style={{ background: 'hsl(0 0% 8.5%)' }}
          >
            <span className="font-display text-5xl text-primary/20">{s.num}</span>
            <h3 className="font-display text-xl text-trendy-white mt-2 mb-4">{s.title}</h3>
            <ul className="space-y-1.5 mb-5">
              {s.items.map((item, j) => (
                <li key={j} className="text-sm flex items-center gap-2" style={{ color: 'hsl(0 0% 55%)' }}>
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span key={tag} className="text-xs rounded-full border border-primary/20 text-primary px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
