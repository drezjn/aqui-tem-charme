import { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";

const WHATSAPP = "https://wa.me/5531984211978?text=Ol%C3%A1%21%20Fiz%20o%20diagn%C3%B3stico%20capilar%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

type Step = {
  key: string;
  question: string;
  options: string[];
};

const STEPS: Step[] = [
  { key: "tipo", question: "Qual é o seu tipo de cabelo?", options: ["Liso", "Ondulado", "Cacheado", "Crespo"] },
  { key: "quimica", question: "Possui química?", options: ["Não", "Coloração", "Mechas", "Progressiva", "Mais de uma química"] },
  { key: "dificuldade", question: "Principal dificuldade?", options: ["Ressecamento", "Quebra", "Frizz", "Falta de brilho", "Crescimento lento"] },
  { key: "objetivo", question: "Objetivo principal?", options: ["Recuperação", "Hidratação", "Crescimento", "Definição", "Brilho"] },
];

function buildResult(answers: Record<string, string>) {
  const { tipo, quimica, dificuldade, objetivo } = answers;
  const intensity = quimica === "Mais de uma química" || dificuldade === "Quebra" ? "Alto" : quimica === "Não" ? "Leve" : "Moderado";
  const treatmentMap: Record<string, string> = {
    Recuperação: "Reconstrução com máscara intensiva",
    Hidratação: "Cronograma capilar com hidratação profunda",
    Crescimento: "Tônico estimulante + massagem capilar",
    Definição: "Finalização para cachos com técnica de fitagem",
    Brilho: "Selagem térmica com óleos nobres",
  };
  return {
    profile: `Cabelo ${tipo?.toLowerCase()} ${quimica !== "Não" ? `com ${quimica.toLowerCase()}` : "natural"}`,
    care: intensity,
    recommendation: treatmentMap[objetivo] ?? "Tratamento personalizado",
    note: dificuldade
      ? `Foco em reduzir ${dificuldade.toLowerCase()} mantendo a saúde dos fios.`
      : "Cuidado equilibrado para manter a saúde dos fios.",
  };
}

export function HairDiagnosis() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = step >= STEPS.length;

  const choose = (value: string) => {
    setAnswers((prev) => ({ ...prev, [STEPS[step].key]: value }));
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  if (done) {
    const r = buildResult(answers);
    return (
      <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-luxe animate-fade-up">
        <div className="flex items-center gap-2 text-gold">
          <Sparkles className="size-5" />
          <span className="text-xs uppercase tracking-[0.2em]">Resultado do diagnóstico</span>
        </div>
        <h3 className="mt-4 text-3xl md:text-4xl text-display text-foreground">{r.profile}</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-muted p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Nível de cuidados</div>
            <div className="mt-2 text-2xl text-display text-foreground">{r.care}</div>
          </div>
          <div className="rounded-2xl bg-muted p-6 md:col-span-2">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Recomendação personalizada</div>
            <div className="mt-2 text-xl text-foreground">{r.recommendation}</div>
          </div>
        </div>
        <p className="mt-6 text-muted-foreground">{r.note} Recomendamos uma avaliação profissional presencial para um plano sob medida.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium text-foreground shadow-soft transition hover:scale-[1.02]"
          >
            Agendar Avaliação pelo WhatsApp <ArrowRight className="size-4" />
          </a>
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm text-foreground transition hover:bg-muted"
          >
            <RotateCcw className="size-4" /> Refazer
          </button>
        </div>
      </div>
    );
  }

  const current = STEPS[step];
  const progress = ((step) / STEPS.length) * 100;

  return (
    <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-luxe">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>Pergunta {step + 1} de {STEPS.length}</span>
        <span className="text-gold">Diagnóstico Capilar</span>
      </div>
      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full bg-gradient-gold transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>
      <h3 key={current.key} className="mt-8 text-3xl md:text-4xl text-display text-foreground animate-fade-up">
        {current.question}
      </h3>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {current.options.map((opt) => (
          <button
            key={opt}
            onClick={() => choose(opt)}
            className="group rounded-2xl border border-border bg-background px-6 py-5 text-left text-foreground transition hover:border-gold hover:bg-muted hover:shadow-soft"
          >
            <div className="flex items-center justify-between">
              <span className="text-base">{opt}</span>
              <ArrowRight className="size-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-gold" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
