import { motion } from "framer-motion";

const BeforeAfter = () => (
  <section
    id="trabalho"
    className="bg-trendy-black py-32 md:py-48 relative overflow-hidden"
  >
    <div className="container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24"
      >
        <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary block">
          Trabalho
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Imagem 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[4/5] object-cover bg-trendy-dark"
        >
          <img
            src="/trabalho-1.jpg"
            alt="Editorial project 1"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </motion.div>

        {/* Imagem 2 (desalinhada para efeito editorial) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-square md:mt-48 object-cover bg-trendy-dark"
        >
          <img
            src="/trabalho-2.jpg"
            alt="Editorial project 2"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </motion.div>

        {/* Imagem 3 (Full width span) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-video md:col-span-2 object-cover bg-trendy-dark"
        >
          <img
            src="/trabalho-3.jpg"
            alt="Editorial project 3"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;

