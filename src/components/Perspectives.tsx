import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const posts = [
  {
    image: "/perspectiva-1.png",
    link: "https://instagram.com/trendy.gs",
    alt: "Angola tem negócios de milhões com imagem de mercado informal"
  },
  {
    image: "/perspectiva-2.png",
    link: "https://instagram.com/trendy.gs",
    alt: "O cliente angolano exige qualidade mas não quer pagar por ela"
  },
  {
    image: "/perspectiva-3.png",
    link: "https://instagram.com/trendy.gs",
    alt: "Comprarias cereais feito em Angola com a mesma confiança que compras um Chocapic?"
  }
];

const Perspectives = () => (
  <section
    id="perspectivas"
    className="bg-trendy-black py-32 md:py-48 relative overflow-hidden"
  >
    <div className="container mx-auto px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 md:mb-32"
      >
        <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8 block">
          Perspectivas
        </span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] text-trendy-white leading-none tracking-tight">
          O que dizemos sobre o mercado.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {posts.map((post, i) => (
          <motion.a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group block relative w-full aspect-[4/5] bg-trendy-dark overflow-hidden transition-transform duration-700 hover:-translate-y-4"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Overlay & Icon */}
            <div className="absolute inset-0 bg-trendy-black/0 group-hover:bg-trendy-black/40 transition-colors duration-500 flex items-center justify-center">
              <div className="text-trendy-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100 transform">
                <Instagram size={48} strokeWidth={1.5} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-20 md:mt-32 flex justify-center md:justify-end"
      >
        <a
          href="https://instagram.com/trendy.gs"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col font-body font-bold text-xs tracking-[0.2em] uppercase text-trendy-white"
        >
          Ver mais no Instagram
          <span className="h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500 mt-1"></span>
        </a>
      </motion.div>
    </div>
  </section>
);

export default Perspectives;
