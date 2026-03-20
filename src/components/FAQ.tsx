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
    className="bg-trendy-black py-[120px] noise-overlay"
  >
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-16 text-center max-w-3xl mx-auto"
      >
        <span className="text-primary font-body text-xs font-bold uppercase tracking-widest mb-4 block">
          FAQ
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-trendy-white mt-3 leading-[1.1]">
          Tens dúvidas? <span className="text-primary italic font-bold">Normal.</span>
        </h2>
        <p className="mt-6 font-body text-trendy-cream opacity-80 text-lg md:text-xl leading-relaxed">
          A maioria dos nossos clientes também duvidou antes de decidir.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <motion.details
            key={item.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="group rounded-sm px-6 py-5 border border-white/10 transition-colors hover:border-primary/50"
            style={{ background: "hsl(0 0% 6%)" }}
          >
            <summary className="flex items-center justify-between cursor-pointer list-none font-display text-xl sm:text-2xl text-trendy-white outline-none">
              <span>{item.q}</span>
              <span className="ml-4 text-primary text-2xl leading-none group-open:rotate-45 transition-transform duration-300 font-sans font-light">
                +
              </span>
            </summary>
            <p className="mt-4 font-body text-base text-trendy-cream opacity-70 leading-relaxed pl-2 border-l-2 border-primary/30">
              {item.a}
            </p>
          </motion.details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;

