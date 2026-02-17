import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    text: "Percebemos em que ponto o teu negócio está hoje, quem queres atingir e o que te está a travar. Tudo numa conversa leve, sem complicar.",
  },
  {
    num: "02",
    title: "Estratégia",
    text: "Desenhamos o caminho: posicionamento, tom de voz e prioridades para a tua marca deixar de ser só “mais uma” no feed.",
  },
  {
    num: "03",
    title: "Criação",
    text: "Transformamos estratégia em peças reais: identidade visual, conteúdos e campanhas alinhadas ao que o teu público sente e vive.",
  },
  {
    num: "04",
    title: "Acompanhamento",
    text: "Olhamos para os números, ajustamos a rota e vamos optimizando. Marca viva, em constante evolução, não um ficheiro esquecido numa pasta.",
  },
];

const Process = () => (
  <section
    id="processo"
    className="bg-trendy-black py-24 relative overflow-hidden"
  >
    <div className="relative z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-widest">
          Como é trabalhar com a Trendy
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-trendy-white mt-3">
          Simples para ti. Estratégico nos bastidores.
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto text-sm sm:text-base"
          style={{ color: "hsl(0 0% 60%)" }}
        >
          Um processo pensado para micro empreendedores que não têm tempo a
          perder, mas querem resultados de gente grande.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-3xl px-6 py-7 border border-white/10 flex flex-col gap-3"
          >
            <span className="font-display text-4xl text-primary/60">
              {step.num}
            </span>
            <h3 className="font-display text-lg text-trendy-white">
              {step.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "hsl(0 0% 70%)" }}
            >
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;

