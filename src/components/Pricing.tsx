import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const tabs = ["Gestão de Redes", "Social Media Design", "Identidade Visual", "Tráfego Pago"] as const;

interface Plan {
  name: string;
  price: string;
  badge?: string;
  ideal: string;
  items: string[];
  footer: string;
  highlighted?: boolean;
  noteBox?: string;
}

const data: Record<string, Plan[]> = {
  "Gestão de Redes": [
    {
      name: "STARTER",
      price: "35.000 kz/mês",
      badge: "Iniciante",
      ideal: "Micro negócios começando agora",
      items: [
        "12 posts por mês (3x por semana)",
        "2 formatos: Feed + Stories",
        "Planejamento de conteúdo mensal",
        "Legendas estratégicas",
        "Hashtags otimizadas",
        "1 plataforma (Instagram OU Facebook)",
        "Resposta a mensagens (horário comercial)",
        "Relatório mensal básico",
      ],
      footer: "Contrato mínimo 3 meses",
    },
    {
      name: "GROWTH",
      price: "65.000 kz/mês",
      badge: "Crescimento",
      ideal: "Negócios querendo crescer e profissionalizar",
      highlighted: true,
      items: [
        "20 posts por mês (5x por semana)",
        "3 formatos: Feed + Stories + Reels",
        "Planejamento estratégico mensal",
        "Criação de Reels/TikToks (4 por mês)",
        "Legendas + Hashtags + Agendamento",
        "2 plataformas (Instagram + Facebook OU TikTok)",
        "Gestão de comentários e mensagens",
        "Stories diários (mínimo 3 por dia)",
        "Relatório mensal detalhado",
        "1 reunião mensal de alinhamento",
      ],
      footer: "Contrato mínimo 3 meses",
    },
    {
      name: "PRO",
      price: "95.000 kz/mês",
      badge: "Profissional",
      ideal: "Negócios sérios sobre presença digital",
      items: [
        "30 posts por mês (conteúdo diário)",
        "Todos os formatos: Feed + Stories + Reels + Carrosséis",
        "Estratégia de conteúdo personalizada",
        "Criação de Reels/TikToks (8 por mês)",
        "3 plataformas (Instagram + Facebook + TikTok)",
        "Gestão completa de interações",
        "Stories diários + Enquetes e interações",
        "Relatório detalhado + Insights estratégicos",
        "2 reuniões mensais",
        "Consultoria de crescimento",
      ],
      footer: "Contrato mínimo 6 meses",
    },
  ],
  "Social Media Design": [
    {
      name: "ESSENCIAL",
      price: "25.000 kz",
      ideal: "Quem já gere redes mas precisa de design profissional",
      items: [
        "5 artes para feed (estilo consistente)",
        "Templates editáveis no Figma (3 modelos)",
        "Paleta de cores definida",
        "Guia rápido de uso",
        "2 revisões incluídas",
      ],
      footer: "Prazo 7 dias úteis",
    },
    {
      name: "MENSAL",
      price: "40.000 kz/mês",
      ideal: "Negócios que postam regularmente",
      highlighted: true,
      items: [
        "10 artes para feed por mês",
        "5 templates para Stories",
        "Feed organizado e estratégico",
        "Calendário visual mensal",
        "Revisões ilimitadas",
      ],
      footer: "Entrega semanal",
    },
    {
      name: "PREMIUM",
      price: "70.000 kz/mês",
      ideal: "Marcas que exigem alta qualidade visual",
      items: [
        "15 artes para feed por mês",
        "10 templates para Stories",
        "Calendário visual completo",
        "Capas de destaques personalizadas",
        "Revisões ilimitadas",
        "Prioridade no atendimento",
      ],
      footer: "Entrega semanal",
    },
  ],
  "Identidade Visual": [
    {
      name: "LOGO BÁSICO",
      price: "15.000 kz",
      ideal: "Negócios iniciantes com orçamento limitado",
      items: [
        "Briefing criativo",
        "2 conceitos de logo",
        "1 revisão",
        "Logo final em PNG e JPG",
        "Paleta de cores (3 cores)",
        "Manual básico de uso (1 página)",
      ],
      footer: "Prazo 7 dias úteis",
    },
    {
      name: "IDENTIDADE COMPLETA",
      price: "45.000 kz",
      ideal: "Negócios sérios querendo marca profissional",
      highlighted: true,
      items: [
        "Briefing estratégico detalhado",
        "Pesquisa de concorrência e mercado",
        "3 conceitos de logo",
        "3 revisões",
        "Logo em todos os formatos (PNG, JPG, SVG, AI)",
        "Versões: Colorida, Preto, Branco, Monocromática",
        "Paleta de cores completa",
        "Tipografia definida (fontes)",
        "Aplicações mockup (5 exemplos)",
        "Manual de identidade visual (PDF completo)",
      ],
      footer: "Prazo 15 dias úteis",
    },
    {
      name: "BRANDING PREMIUM",
      price: "85.000 kz",
      ideal: "Marcas que querem posicionamento forte",
      items: [
        "Análise de posicionamento",
        "Estratégia de marca",
        "Tom de voz e personalidade da marca",
        "Tagline/Slogan",
        "Padrões visuais e texturas",
        "Papelaria (cartão de visita, papel timbrado)",
        "Templates para redes sociais (6 modelos)",
        "Consultoria de aplicação da marca",
        "2 reuniões de alinhamento",
        "Assinatura de e-mail",
      ],
      footer: "Prazo 21 dias úteis",
    },
  ],
  "Tráfego Pago": [
    {
      name: "TESTE",
      price: "25.000 kz gestão",
      badge: "Experimental",
      ideal: "Primeira vez anunciando",
      items: [
        "Configuração de conta Business",
        "Pixel do Facebook instalado",
        "1 campanha (objetivo único)",
        "3 conjuntos de anúncios",
        "3 criativos (imagens/vídeos)",
        "Gestão por 7 dias",
        "Relatório final",
      ],
      footer: "",
      noteBox: "Verba de anúncios: Mín. 30.000 kz (não incluso) · Total mínimo: 55.000 kz",
    },
    {
      name: "GROWTH",
      price: "45.000 kz/mês gestão",
      badge: "Crescimento",
      ideal: "Negócios querendo resultados consistentes",
      highlighted: true,
      items: [
        "Estratégia de funil",
        "2-3 campanhas simultâneas",
        "Múltiplos conjuntos de anúncios",
        "Remarketing configurado",
        "6 criativos + testes A/B",
        "Gestão diária e otimização",
        "Relatório semanal",
        "1 reunião mensal",
        "Ajustes ilimitados",
      ],
      footer: "",
      noteBox: "Verba de anúncios: Mín. 60.000 kz (não incluso) · Contrato: Mínimo 3 meses",
    },
    {
      name: "SCALE",
      price: "75.000 kz/mês gestão",
      badge: "Escalar",
      ideal: "Negócios prontos para crescer agressivamente",
      items: [
        "Estratégia completa de funil",
        "2-3 campanhas simultâneas",
        "Múltiplos conjuntos de anúncios",
        "Remarketing configurado",
        "6 criativos + testes A/B",
        "Gestão diária e otimização",
        "Relatório semanal",
        "1 reunião mensal",
        "Ajustes ilimitados",
      ],
      footer: "",
      noteBox: "Verba de anúncios: Mín. 100.000 kz (não incluso) · Contrato: Mínimo 6 meses",
    },
  ],
};

const PlanCard = ({ plan }: { plan: Plan }) => (
  <div
    className={`relative rounded-2xl p-6 sm:p-8 flex flex-col h-full transition-transform hover:-translate-y-1 ${
      plan.highlighted
        ? "border-2 border-primary bg-card shadow-xl"
        : "border border-border bg-card"
    }`}
  >
    {plan.highlighted && (
      <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
        Mais popular
      </span>
    )}
    {plan.badge && (
      <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
        {plan.badge}
      </span>
    )}
    <h3 className="font-display text-lg text-foreground">{plan.name}</h3>
    <p className="font-display text-2xl sm:text-3xl text-primary mt-2">{plan.price}</p>
    <p className="text-sm text-muted-foreground mt-2 mb-6">{plan.ideal}</p>
    <ul className="space-y-2 flex-1">
      {plan.items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
    {plan.noteBox && (
      <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3 text-xs text-green-800">
        {plan.noteBox}
      </div>
    )}
    {plan.footer && (
      <p className="mt-4 pt-4 border-t text-xs text-muted-foreground">{plan.footer}</p>
    )}
    <a
      href="#contacto"
      className={`mt-6 block text-center rounded-full py-3 text-sm font-semibold transition-transform hover:scale-105 ${
        plan.highlighted
          ? "bg-primary text-primary-foreground"
          : "border border-foreground/20 text-foreground hover:bg-foreground/5"
      }`}
    >
      Começar agora
    </a>
  </div>
);

const Pricing = () => {
  const [active, setActive] = useState<string>("Gestão de Redes");

  return (
    <section id="precos" className="py-24" style={{ background: 'hsl(30 23% 94%)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Pacotes & Preços</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3">
            Escolhe o plano certo para o teu negócio.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/5 text-foreground hover:bg-foreground/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {data[active].map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricing;
