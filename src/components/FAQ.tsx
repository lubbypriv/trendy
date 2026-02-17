import { motion } from "framer-motion";

const faqs = [
  {
    q: "Quanto tempo demora para começar a ver resultados?",
    a: "Depende do ponto de partida do teu negócio. Em média, quem faz gestão de redes connosco começa a notar mais interacções e mensagens entre 30 e 60 dias, se seguirmos o plano direitinho.",
  },
  {
    q: "Não tenho muitas fotos boas. Ainda assim podem ajudar?",
    a: "Sim. Trabalhamos com o que tens hoje, criamos direcções visuais, templates, referências de fotografia e, quando faz sentido, sugerimos sessões simples para deixar tudo com mais cara de marca.",
  },
  {
    q: "Os valores já incluem verba de anúncios?",
    a: "Nos planos de Tráfego Pago, os valores apresentados são apenas da gestão. A verba de anúncios é combinada à parte, de acordo com o teu orçamento e com a fase em que o teu negócio está.",
  },
  {
    q: "Como é feito o pagamento?",
    a: "Trabalhamos com pagamentos via transferência bancária ou referência. Nos pacotes mensais, o pagamento é feito no início de cada mês de trabalho.",
  },
  {
    q: "E se eu ainda não souber exactamente o que preciso?",
    a: "Tranquilo. A primeira conversa é exactamente para entender o momento do teu negócio e sugerir o caminho mais inteligente, sem empurrar serviço que não faz sentido para ti.",
  },
];

const FAQ = () => (
  <section
    id="faq"
    className="py-24"
    style={{ background: "hsl(30 23% 94%)" }}
  >
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-widest">
          Dúvidas frequentes
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3">
          Respostas directas, sem rodeios.
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
          Se ainda assim ficares com dúvidas, chama-nos no WhatsApp. É sempre
          melhor conversar do que adiar uma boa ideia.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((item, i) => (
          <motion.details
            key={item.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="group bg-card rounded-2xl px-5 py-4 sm:px-6 sm:py-5 border border-border/70"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-sm sm:text-base font-semibold text-foreground">
                {item.q}
              </span>
              <span className="ml-4 text-primary text-xl leading-none group-open:rotate-45 transition-transform select-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {item.a}
            </p>
          </motion.details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;

