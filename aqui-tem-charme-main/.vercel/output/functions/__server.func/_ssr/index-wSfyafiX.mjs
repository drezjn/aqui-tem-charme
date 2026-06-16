import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MessageCircle, A as ArrowUpRight, S as Star, a as Sparkles, b as Scissors, F as Flower2, H as Heart, D as Droplets, W as WandSparkles, U as Users, L as Leaf, c as Award, Q as Quote, d as MapPin, C as Clock, P as Phone, I as Instagram, e as ChevronDown, f as CircleCheck, g as ArrowRight, R as RotateCcw, X } from "../_libs/lucide-react.mjs";
const heroImg = "/assets/hero-salon-hWgh73wc.jpg";
const g1 = "/assets/gallery-hair-1-DBk8xnu8.jpg";
const g2 = "/assets/gallery-nails-1-ClW1VcDe.jpg";
const g3 = "/assets/gallery-estetica-1-CY_qDp9f.jpg";
const g4 = "/assets/gallery-hair-2-BeWlVuxc.jpg";
const g5 = "/assets/gallery-nails-2-DGyKpVIR.jpg";
const g6 = "/assets/gallery-hair-3-DX9lhU1P.jpg";
const g7 = "/assets/gallery-estetica-2-DyfX-3_y.jpg";
const WHATSAPP$1 = "https://wa.me/5531984211978?text=Ol%C3%A1%21%20Fiz%20o%20diagn%C3%B3stico%20capilar%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";
const STEPS = [
  { key: "tipo", question: "Qual é o seu tipo de cabelo?", options: ["Liso", "Ondulado", "Cacheado", "Crespo"] },
  { key: "quimica", question: "Possui química?", options: ["Não", "Coloração", "Mechas", "Progressiva", "Mais de uma química"] },
  { key: "dificuldade", question: "Principal dificuldade?", options: ["Ressecamento", "Quebra", "Frizz", "Falta de brilho", "Crescimento lento"] },
  { key: "objetivo", question: "Objetivo principal?", options: ["Recuperação", "Hidratação", "Crescimento", "Definição", "Brilho"] }
];
function buildResult(answers) {
  const { tipo, quimica, dificuldade, objetivo } = answers;
  const intensity = quimica === "Mais de uma química" || dificuldade === "Quebra" ? "Alto" : quimica === "Não" ? "Leve" : "Moderado";
  const treatmentMap = {
    Recuperação: "Reconstrução com máscara intensiva",
    Hidratação: "Cronograma capilar com hidratação profunda",
    Crescimento: "Tônico estimulante + massagem capilar",
    Definição: "Finalização para cachos com técnica de fitagem",
    Brilho: "Selagem térmica com óleos nobres"
  };
  return {
    profile: `Cabelo ${tipo?.toLowerCase()} ${quimica !== "Não" ? `com ${quimica.toLowerCase()}` : "natural"}`,
    care: intensity,
    recommendation: treatmentMap[objetivo] ?? "Tratamento personalizado",
    note: dificuldade ? `Foco em reduzir ${dificuldade.toLowerCase()} mantendo a saúde dos fios.` : "Cuidado equilibrado para manter a saúde dos fios."
  };
}
function HairDiagnosis() {
  const [step, setStep] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState({});
  const done = step >= STEPS.length;
  const choose = (value) => {
    setAnswers((prev) => ({ ...prev, [STEPS[step].key]: value }));
    setStep((s) => s + 1);
  };
  const restart = () => {
    setAnswers({});
    setStep(0);
  };
  if (done) {
    const r = buildResult(answers);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 md:p-12 shadow-luxe animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em]", children: "Resultado do diagnóstico" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-3xl md:text-4xl text-display text-foreground", children: r.profile }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Nível de cuidados" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl text-display text-foreground", children: r.care })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted p-6 md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Recomendação personalizada" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xl text-foreground", children: r.recommendation })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-muted-foreground", children: [
        r.note,
        " Recomendamos uma avaliação profissional presencial para um plano sob medida."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: WHATSAPP$1,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium text-foreground shadow-soft transition hover:scale-[1.02]",
            children: [
              "Agendar Avaliação pelo WhatsApp ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: restart,
            className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm text-foreground transition hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-4" }),
              " Refazer"
            ]
          }
        )
      ] })
    ] });
  }
  const current = STEPS[step];
  const progress = step / STEPS.length * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 md:p-12 shadow-luxe", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Pergunta ",
        step + 1,
        " de ",
        STEPS.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Diagnóstico Capilar" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-gold transition-all duration-500", style: { width: `${progress}%` } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-3xl md:text-4xl text-display text-foreground animate-fade-up", children: current.question }, current.key),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3 sm:grid-cols-2", children: current.options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => choose(opt),
        className: "group rounded-2xl border border-border bg-background px-6 py-5 text-left text-foreground transition hover:border-gold hover:bg-muted hover:shadow-soft",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: opt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-gold" })
        ] })
      },
      opt
    )) })
  ] });
}
function Lightbox({ src, alt, onClose }) {
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      onClick: onClose,
      className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm animate-fade-up",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute right-4 top-4 rounded-full bg-background/90 p-2 text-foreground shadow-soft transition hover:scale-110",
            "aria-label": "Fechar",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src,
            alt,
            onClick: (e) => e.stopPropagation(),
            className: "max-h-[90vh] max-w-full rounded-2xl object-contain shadow-luxe"
          }
        )
      ]
    }
  );
}
function Reveal({ children, delay = 0, as: As = "div", className = "" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = `${delay}ms`;
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  const Tag = As;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { ref, className: `reveal ${className}`, children });
}
const WHATSAPP = "https://wa.me/5531984211978?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Aqui%20Tem%20Charme.";
const services = [{
  icon: Scissors,
  title: "Cabelos",
  desc: "Cortes, escova, finalização e cuidados completos para cada tipo de fio."
}, {
  icon: Sparkles,
  title: "Unhas",
  desc: "Manicure e pedicure com acabamento impecável em ambiente higienizado."
}, {
  icon: Flower2,
  title: "Estética Facial",
  desc: "Limpeza de pele, hidratação e protocolos de luminosidade."
}, {
  icon: Heart,
  title: "Estética Corporal",
  desc: "Tratamentos relaxantes e modeladores para o seu bem-estar."
}, {
  icon: Droplets,
  title: "Hidratação",
  desc: "Cronograma capilar profundo para devolver maciez e brilho."
}, {
  icon: WandSparkles,
  title: "Transformação Capilar",
  desc: "Coloração, mechas e progressivas com técnica e segurança."
}];
const benefits = [{
  icon: Users,
  title: "Atendimento personalizado",
  desc: "Cada cliente é única — escutamos antes de transformar."
}, {
  icon: Leaf,
  title: "Ambiente acolhedor",
  desc: "Espaço pensado para você relaxar do início ao fim."
}, {
  icon: Award,
  title: "Profissionais especializados",
  desc: "Equipe atualizada com as principais técnicas do mercado."
}, {
  icon: Sparkles,
  title: "Produtos de qualidade",
  desc: "Trabalhamos com marcas reconhecidas e cuidado profissional."
}, {
  icon: Heart,
  title: "Bem-estar em foco",
  desc: "Mais que beleza: uma experiência sensorial completa."
}, {
  icon: Star,
  title: "Avaliações 5.0",
  desc: "41 clientes recomendam nosso espaço no Google."
}];
const gallery = [{
  src: g1,
  alt: "Cabelo brilhoso pós-tratamento",
  span: "row-span-2"
}, {
  src: g2,
  alt: "Manicure nude elegante",
  span: ""
}, {
  src: g3,
  alt: "Estética facial e skincare",
  span: ""
}, {
  src: g4,
  alt: "Cabelo cacheado definido",
  span: ""
}, {
  src: g5,
  alt: "Francesinha clássica",
  span: "row-span-2"
}, {
  src: g6,
  alt: "Mechas iluminadas",
  span: ""
}, {
  src: g7,
  alt: "Ambiente spa relaxante",
  span: ""
}];
const testimonials = [{
  name: "Mariana S.",
  text: "Atendimento impecável. Saí me sentindo outra pessoa — a equipe entendeu exatamente o que eu queria.",
  role: "Cliente desde 2022"
}, {
  name: "Juliana P.",
  text: "O ambiente é lindo, acolhedor e as profissionais são super atenciosas. Virei cliente fiel.",
  role: "Cliente"
}, {
  name: "Camila R.",
  text: "Melhor salão do Bairro da Glória. Cabelo saiu maravilhoso e o cuidado é nota mil.",
  role: "Cliente"
}, {
  name: "Beatriz L.",
  text: "Fiz uma hidratação e a diferença foi gigante. Recomendo demais, super profissionais.",
  role: "Cliente"
}];
const faqs = [{
  q: "Precisa agendar?",
  a: "Sim, trabalhamos com agendamento para garantir um atendimento exclusivo. Basta chamar no WhatsApp."
}, {
  q: "Quais formas de pagamento?",
  a: "Aceitamos PIX, dinheiro, cartões de débito e crédito."
}, {
  q: "Quais serviços são oferecidos?",
  a: "Cabelos, unhas, estética facial e corporal, hidratações e transformações capilares completas."
}, {
  q: "Como funciona a avaliação?",
  a: "Você passa pelo nosso diagnóstico, conversamos sobre seus objetivos e montamos o plano ideal para você."
}];
const marqueeWords = ["Cabelos", "Unhas", "Estética Facial", "Hidratação Profunda", "Transformação Capilar", "Bem-estar", "Avaliação 5.0"];
function Index() {
  const [open, setOpen] = reactExports.useState(0);
  const [light, setLight] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/75 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-2xl text-foreground", children: "Aqui Tem Charme" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-eyebrow text-gold sm:inline", children: "est. ✦" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-9 text-[13px] text-muted-foreground md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#servicos", className: "link-underline transition hover:text-foreground", children: "Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#galeria", className: "link-underline transition hover:text-foreground", children: "Galeria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#diagnostico", className: "link-underline transition hover:text-foreground", children: "Diagnóstico" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sobre", className: "link-underline transition hover:text-foreground", children: "Sobre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", className: "link-underline transition hover:text-foreground", children: "Contato" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP, target: "_blank", rel: "noreferrer", className: "btn-luxe hidden items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2.5 text-[13px] text-background transition hover:text-foreground sm:inline-flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
        " Agendar"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden bg-gradient-luxe pt-32 pb-24 md:pt-40 md:pb-36", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 top-20 size-[28rem] rounded-full bg-gold-soft/40 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-40 bottom-0 size-[28rem] rounded-full bg-nude/70 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-24 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-3 rounded-full border border-gold/40 bg-background/70 px-5 py-2 text-eyebrow text-foreground/70 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 animate-gold-pulse rounded-full bg-gold" }),
            "Contagem · Bairro da Glória"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] text-display text-foreground", children: [
            "A beleza que ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic text-gold-deep", children: "realça" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "sua melhor versão."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground", children: "Cuidados completos para cabelos, unhas e estética em um ambiente acolhedor e profissional no Bairro da Glória, em Contagem." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP, target: "_blank", rel: "noreferrer", className: "btn-luxe group inline-flex items-center gap-3 rounded-full bg-foreground px-9 py-4 text-sm font-medium text-background transition hover:text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
              " Agendar pelo WhatsApp",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#diagnostico", className: "group inline-flex items-center gap-2 px-5 py-4 text-sm font-medium text-foreground link-underline", children: [
              "Fazer Diagnóstico Capilar",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-5 fill-gold text-gold", strokeWidth: 0 }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-display text-xl text-foreground", children: [
                "5.0 ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-base", children: "no Google" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "41 avaliações reais de clientes" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-fade-up [animation-delay:200ms]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-gold opacity-15 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Salão Aqui Tem Charme em Contagem", width: 1600, height: 1200, className: "aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-8 -left-8 hidden rounded-2xl border border-border/60 bg-background/95 p-5 shadow-luxe backdrop-blur sm:block animate-float-slow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "Nosso compromisso" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-display text-xl text-foreground leading-tight", children: [
              "Seu momento",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "começa aqui."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 top-8 hidden rotate-3 rounded-2xl border border-border/60 bg-background/95 px-4 py-3 shadow-soft backdrop-blur md:block animate-float-slow [animation-delay:1s]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: "Atendimento Premium" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-background py-7 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: [...Array(2)].map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 items-center gap-12 pr-12", children: marqueeWords.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12 text-display text-2xl text-foreground/60", children: [
      w,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-gold" })
    ] }, `${k}-${w}`)) }, k)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "servicos", className: "py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "— Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground", children: [
          "Cuidados completos,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic text-gold-deep", children: "do fio aos detalhes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-lg text-muted-foreground", children: "Cada serviço é executado com técnica refinada e produtos selecionados para entregar resultado e bem-estar." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x lg:grid-cols-3", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 70, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative flex h-full flex-col gap-5 p-8 transition duration-700 hover:bg-gradient-luxe md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-eyebrow text-muted-foreground", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-5 text-muted-foreground opacity-0 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-gold-deep" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-9 text-foreground transition duration-700 group-hover:text-gold-deep group-hover:scale-110", strokeWidth: 1.25 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl text-display text-foreground", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto h-px w-12 origin-left scale-x-0 bg-gradient-gold transition duration-700 group-hover:scale-x-100" })
      ] }) }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-luxe py-28 md:py-36", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_center,_var(--foreground)_1px,_transparent_1px)] [background-size:24px_24px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-14 lg:grid-cols-[1fr_1.6fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "— Diferenciais" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground", children: [
            "Por que escolher o",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic", children: "Aqui Tem Charme?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-muted-foreground", children: "Cuidado, técnica e acolhimento caminham juntos para entregar uma experiência sensorial completa." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2", children: benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full gap-5 bg-background/80 p-7 backdrop-blur transition hover:bg-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-foreground shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "size-5", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-xl text-foreground", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: b.desc })
          ] })
        ] }) }, b.title)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "galeria", className: "py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "— Galeria" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground", children: [
            "Trabalhos que",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic", children: "falam por nós." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-muted-foreground", children: "Resultados reais em cabelos, unhas e estética. Clique para ampliar." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, className: "mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4", children: gallery.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLight(img), className: `group relative overflow-hidden rounded-2xl ${img.span}`, style: {
        animationDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, loading: "lazy", className: "size-full object-cover transition duration-1000 ease-out group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3 flex items-end justify-between opacity-0 transition duration-500 group-hover:opacity-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-background", children: img.alt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-5 text-background" })
        ] })
      ] }, img.src)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ink py-28 md:py-36", style: {
      background: "var(--ink)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 text-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "flex flex-wrap items-end justify-between gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "— Prova social" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-background", children: [
            "Clientes que",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic text-gold", children: "viraram fãs." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 rounded-2xl border border-background/10 bg-background/5 p-5 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-6xl text-background", children: "5.0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-gold text-gold", strokeWidth: 0 }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-background/60", children: "41 avaliações · Google" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex h-full flex-col rounded-3xl border border-background/10 bg-background/[0.04] p-8 transition duration-500 hover:bg-background/[0.08] hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-7 text-gold", strokeWidth: 1.2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 flex-1 leading-relaxed text-background/85", children: [
          '"',
          t.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 border-t border-background/15 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-background", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-background/50", children: t.role })
        ] })
      ] }) }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "diagnostico", className: "bg-gradient-cream py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "— Ferramenta exclusiva" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground", children: [
          "Descubra o tratamento ideal",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic text-gold-deep", children: "para o seu cabelo." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl text-muted-foreground", children: "Responda 4 perguntas rápidas e receba uma recomendação personalizada." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, className: "mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HairDiagnosis, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre", className: "py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g3, alt: "Ambiente acolhedor do salão", loading: "lazy", className: "aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background p-6 shadow-luxe sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-4xl text-gold-deep", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-display text-xl text-foreground leading-tight max-w-[180px]", children: [
            "Beleza com",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "sensibilidade."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 120, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "— Sobre nós" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground", children: [
          "Um espaço pensado",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic", children: "para a sua autoestima." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 space-y-5 text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "O Aqui Tem Charme nasceu com um propósito claro: oferecer uma experiência de beleza completa, com atendimento humanizado e cuidado personalizado para cada cliente." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mais do que um salão, somos um refúgio no Bairro da Glória, onde cada detalhe é pensado para o seu bem-estar. Nossa equipe combina técnica, sensibilidade e amor pelo que faz." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8", children: [{
          n: "5.0",
          l: "Avaliação"
        }, {
          n: "41+",
          l: "Avaliações"
        }, {
          n: "100%",
          l: "Personalizado"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-5xl text-foreground", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-eyebrow text-muted-foreground", children: s.l })
        ] }, s.l)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contato", className: "bg-gradient-cream py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "— Localização" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground", children: [
          "Venha nos",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic text-gold-deep", children: "visitar." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: "Rua da Bélgica, 486" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Bairro da Glória · Contagem - MG · CEP 32340-030" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-5 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-foreground", children: "Terça a Sábado" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "09:00 às 19:00" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+5531984211978", className: "link-underline text-foreground", children: "(31) 98421-1978" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-5 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/espacoaquitemcharme", target: "_blank", rel: "noreferrer", className: "link-underline text-foreground", children: "@espacoaquitemcharme" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.google.com/maps/dir/?api=1&destination=Rua+da+Bélgica+486+Contagem+MG", target: "_blank", rel: "noreferrer", className: "btn-luxe mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition hover:text-foreground", children: [
          "Como Chegar ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border shadow-luxe", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Mapa Aqui Tem Charme", src: "https://www.google.com/maps?q=Rua+da+B%C3%A9lgica+486+Contagem+MG&output=embed", className: "h-96 w-full border-0 lg:h-full", loading: "lazy" }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "— Dúvidas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground", children: [
          "Perguntas ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic text-gold-deep", children: "frequentes" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 divide-y divide-border border-y border-border", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: i * 60, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? null : i), className: "flex w-full items-center justify-between gap-4 py-6 text-left group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display text-xl text-foreground transition group-hover:text-gold-deep", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-5 shrink-0 text-muted-foreground transition duration-500 ${open === i ? "rotate-180 text-gold-deep" : ""}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid transition-all duration-500 ease-out ${open === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden text-muted-foreground leading-relaxed", children: f.a }) })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-32 md:py-40", style: {
      background: "var(--ink)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-32 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-nude/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "relative mx-auto max-w-3xl px-6 text-center text-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto size-12 text-gold", strokeWidth: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-8 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] text-display text-background", children: [
          "Pronta para transformar",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display-italic text-gold", children: "sua autoestima?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-7 max-w-xl text-background/70 leading-relaxed", children: "Agende seu horário e viva uma experiência de beleza pensada especialmente para você." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP, target: "_blank", rel: "noreferrer", className: "btn-luxe group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-12 py-5 text-base font-medium text-foreground shadow-gold transition hover:scale-[1.02]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5" }),
          " Agendar pelo WhatsApp",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-background py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.5fr_1fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-2xl text-foreground", children: "Aqui Tem Charme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed", children: "Boutique de beleza no Bairro da Glória — onde cada cliente vive uma experiência única." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "Visite" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Rua da Bélgica, 486" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Bairro da Glória — Contagem, MG" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Ter–Sáb · 09h às 19h" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-eyebrow text-gold", children: "Contato" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+5531984211978", className: "block link-underline", children: "(31) 98421-1978" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/espacoaquitemcharme", target: "_blank", rel: "noreferrer", className: "block link-underline", children: "@espacoaquitemcharme" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-12 max-w-7xl px-6 text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Aqui Tem Charme Espaço de Beleza · Todos os direitos reservados"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP, target: "_blank", rel: "noreferrer", "aria-label": "Agendar pelo WhatsApp", className: "group fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-luxe transition hover:scale-110", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "relative size-6" })
    ] }),
    light && /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { src: light.src, alt: light.alt, onClose: () => setLight(null) })
  ] });
}
export {
  Index as component
};
