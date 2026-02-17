import { motion } from "framer-motion";

const avulsos = [
  { servico: "Logotipo (simples)", inclui: "1 conceito · 1 revisão · PNG e JPG", preco: "10.000 kz", prazo: "3–5 dias" },
  { servico: "Flyer / Panfleto", inclui: "Design criativo · Até A5 · 2 revisões", preco: "7.000 kz", prazo: "2–3 dias" },
  { servico: "Banner para Redes", inclui: "Capa Facebook/LinkedIn OU Stories/Feed · 1 revisão", preco: "3.500 kz", prazo: "1–2 dias" },
  { servico: "Cardápio Digital", inclui: "Até 10 itens · 2 revisões · WhatsApp/Instagram", preco: "12.000 kz", prazo: "5 dias" },
  { servico: "Apresentação (Slide)", inclui: "Até 10 slides · Design profissional", preco: "15.000 kz", prazo: "5 dias" },
  { servico: "Catálogo de Produtos", inclui: "Até 20 produtos · Layout profissional · PDF", preco: "25.000 kz", prazo: "7 dias" },
];

const Avulsos = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-widest">Serviços Avulsos</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3">
          Só precisas de uma peça? Também fazemos.
        </h2>
        <p className="text-muted-foreground mt-3">Sem burocracia nem pacotes obrigatórios. Escolhe o que faz sentido para ti agora.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {avulsos.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{ background: 'hsl(30 23% 94%)' }}
          >
            <h3 className="font-display text-base text-foreground mb-2">{item.servico}</h3>
            <p className="text-sm text-muted-foreground mb-4">{item.inclui}</p>
            <div className="flex items-center justify-between">
              <span className="font-display text-lg text-primary">{item.preco}</span>
              <span className="text-xs font-medium rounded-full bg-green-100 text-green-700 px-3 py-1">
                {item.prazo}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Avulsos;
