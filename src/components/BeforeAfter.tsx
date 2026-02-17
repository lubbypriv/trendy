import { motion } from "framer-motion";

const BeforeAfter = () => (
  <section
    id="antes-depois"
    className="bg-trendy-black py-24 relative overflow-hidden"
  >
    <div className="relative z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <span className="text-primary text-xs font-bold uppercase tracking-widest">
          Antes &amp; Depois
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-trendy-white mt-3">
          Quando a mesma marca ganha outra força.
        </h2>
        <p
          className="mt-4 max-w-2xl mx-auto text-sm sm:text-base"
          style={{ color: "hsl(0 0% 65%)" }}
        >
          A mesma empreendedora, o mesmo serviço. O que muda é a forma como a
          marca se apresenta e como passa a ser lembrada.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2 items-stretch">
        {/* Antes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass rounded-3xl overflow-hidden border border-white/10 flex flex-col"
        >
          <div className="flex items-center justify-between px-5 py-4 bg-trendy-black/40">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-trendy-white/70">
              Antes
            </span>
            <span className="text-[11px] text-trendy-white/50">
              Comunicação genérica · Visual sem identidade
            </span>
          </div>
          <div className="relative bg-black">
            <img
              src="/antes.png"
              alt="Peça de comunicação antes da Trendy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Depois */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass rounded-3xl overflow-hidden border border-primary/40 flex flex-col ring-1 ring-primary/40"
        >
          <div className="flex items-center justify-between px-5 py-4 bg-primary/10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Depois com a Trendy
            </span>
            <span className="text-[11px] text-trendy-white/70">
              Mensagem clara · Visual que dá vontade de partilhar
            </span>
          </div>
          <div className="relative bg-black">
            <img
              src="/depois.png"
              alt="Peça de comunicação depois da Trendy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <p
          className="text-xs sm:text-sm"
          style={{ color: "hsl(0 0% 70%)" }}
        >
          Imagina o “antes e depois” da tua marca. Manda mensagem no WhatsApp e
          desenhamos juntos o próximo case da Trendy.
        </p>
      </motion.div>
    </div>
  </section>
);

export default BeforeAfter;

