import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors, Sparkles, Heart, Flower2, Droplets, Wand2,
  Star, MapPin, Phone, Instagram, Clock, ChevronDown, MessageCircle, ArrowUpRight,
  CheckCircle2, Users, Award, Leaf, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import g1 from "@/assets/gallery-hair-1.jpg";
import g2 from "@/assets/gallery-nails-1.jpg";
import g3 from "@/assets/gallery-estetica-1.jpg";
import g4 from "@/assets/gallery-hair-2.jpg";
import g5 from "@/assets/gallery-nails-2.jpg";
import g6 from "@/assets/gallery-hair-3.jpg";
import g7 from "@/assets/gallery-estetica-2.jpg";
import { HairDiagnosis } from "@/components/site/HairDiagnosis";
import { Lightbox } from "@/components/site/Lightbox";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seu Salão de Beleza em Belo Horizonte MG" },
      { name: "description", content: "Salão beleza no Centro, Belo Horizonte MG. Cabelos, unhas, estética facial e corporal. Experiência personalizada. Agende pelo WhatsApp." },
      { property: "og:title", content: "Seu Salão de Beleza" },
      { property: "og:description", content: "Seu momento de beleza começa aqui." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5531995251154?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Aqui%20Tem%20Charme.";

const services = [
  { icon: Scissors, title: "Cabelos", desc: "Cortes, escova, finalização e cuidados completos para cada tipo de fio." },
  { icon: Sparkles, title: "Unhas", desc: "Manicure e pedicure com acabamento impecável em ambiente higienizado." },
  { icon: Flower2, title: "Estética Facial", desc: "Limpeza de pele, hidratação e protocolos de luminosidade." },
  { icon: Heart, title: "Estética Corporal", desc: "Tratamentos relaxantes e modeladores para o seu bem-estar." },
  { icon: Droplets, title: "Hidratação", desc: "Cronograma capilar profundo para devolver maciez e brilho." },
  { icon: Wand2, title: "Transformação Capilar", desc: "Coloração, mechas e progressivas com técnica e segurança." },
];

const benefits = [
  { icon: Users, title: "Atendimento personalizado", desc: "Cada cliente é única — escutamos antes de transformar." },
  { icon: Leaf, title: "Ambiente acolhedor", desc: "Espaço pensado para você relaxar do início ao fim." },
  { icon: Award, title: "Profissionais especializados", desc: "Equipe atualizada com as principais técnicas do mercado." },
  { icon: Sparkles, title: "Produtos de qualidade", desc: "Trabalhamos com marcas reconhecidas e cuidado profissional." },
  { icon: Heart, title: "Bem-estar em foco", desc: "Mais que beleza: uma experiência sensorial completa." },
  { icon: Star, title: "Avaliações 5.0", desc: "41 clientes recomendam nosso espaço no Google." },
];

const gallery = [
  { src: g1, alt: "Cabelo brilhoso pós-tratamento", span: "row-span-2" },
  { src: g2, alt: "Manicure nude elegante", span: "" },
  { src: g3, alt: "Estética facial e skincare", span: "" },
  { src: g4, alt: "Cabelo cacheado definido", span: "" },
  { src: g5, alt: "Francesinha clássica", span: "row-span-2" },
  { src: g6, alt: "Mechas iluminadas", span: "" },
  { src: g7, alt: "Ambiente spa relaxante", span: "" },
];

const testimonials = [
  { name: "Mariana S.", text: "Atendimento impecável. Saí me sentindo outra pessoa — a equipe entendeu exatamente o que eu queria.", role: "Cliente desde 2022" },
  { name: "Juliana P.", text: "O ambiente é lindo, acolhedor e as profissionais são super atenciosas. Virei cliente fiel.", role: "Cliente" },
  { name: "Camila R.", text: "Melhor salão do Centro. Cabelo saiu maravilhoso e o cuidado é nota mil.", role: "Cliente" },
  { name: "Beatriz L.", text: "Fiz uma hidratação e a diferença foi gigante. Recomendo demais, super profissionais.", role: "Cliente" },
];

const faqs = [
  { q: "Precisa agendar?", a: "Sim, trabalhamos com agendamento para garantir um atendimento exclusivo. Basta chamar no WhatsApp." },
  { q: "Quais formas de pagamento?", a: "Aceitamos PIX, dinheiro, cartões de débito e crédito." },
  { q: "Quais serviços são oferecidos?", a: "Cabelos, unhas, estética facial e corporal, hidratações e transformações capilares completas." },
  { q: "Como funciona a avaliação?", a: "Você passa pelo nosso diagnóstico, conversamos sobre seus objetivos e montamos o plano ideal para você." },
];

const marqueeWords = ["Cabelos", "Unhas", "Estética Facial", "Hidratação Profunda", "Transformação Capilar", "Bem-estar", "Avaliação 5.0"];

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  const [light, setLight] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-display text-2xl text-foreground">Salão de Beleza</span>
            <span className="hidden text-eyebrow text-gold sm:inline">est. ✦</span>
          </a>
          <nav className="hidden items-center gap-9 text-[13px] text-muted-foreground md:flex">
            <a href="#servicos" className="link-underline transition hover:text-foreground">Serviços</a>
            <a href="#galeria" className="link-underline transition hover:text-foreground">Galeria</a>
            <a href="#diagnostico" className="link-underline transition hover:text-foreground">Diagnóstico</a>
            <a href="#sobre" className="link-underline transition hover:text-foreground">Sobre</a>
            <a href="#contato" className="link-underline transition hover:text-foreground">Contato</a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-luxe hidden items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2.5 text-[13px] text-background transition hover:text-foreground sm:inline-flex"
          >
            <MessageCircle className="size-4" /> Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-gradient-luxe pt-32 pb-24 md:pt-40 md:pb-36">
        <div className="absolute -right-32 top-20 size-[28rem] rounded-full bg-gold-soft/40 blur-3xl" />
        <div className="absolute -left-40 bottom-0 size-[28rem] rounded-full bg-nude/70 blur-3xl" />
        <div className="absolute inset-x-0 top-24 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-background/70 px-5 py-2 text-eyebrow text-foreground/70 backdrop-blur">
              <span className="size-1.5 animate-gold-pulse rounded-full bg-gold" />
              Belo Horizonte · Centro
            </div>
            <h1 className="mt-8 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] text-display text-foreground">
              A beleza que <span className="text-display-italic text-gold-deep">realça</span><br />
              sua melhor versão.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Cuidados completos para cabelos, unhas e estética em um ambiente acolhedor e profissional no Centro, em Belo Horizonte.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-luxe group inline-flex items-center gap-3 rounded-full bg-foreground px-9 py-4 text-sm font-medium text-background transition hover:text-foreground"
              >
                <MessageCircle className="size-4" /> Agendar pelo WhatsApp
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#diagnostico"
                className="group inline-flex items-center gap-2 px-5 py-4 text-sm font-medium text-foreground link-underline"
              >
                Fazer Diagnóstico Capilar
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-5">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-display text-xl text-foreground">5.0 <span className="text-muted-foreground text-base">no Google</span></div>
                <div className="text-xs text-muted-foreground">41 avaliações reais de clientes</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-gold opacity-15 blur-3xl" />
            <div className="relative">
              <img
                src={heroImg}
                alt="Salão de Beleza em Belo Horizonte"
                width={1600}
                height={1200}
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/30" />
            </div>

            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-border/60 bg-background/95 p-5 shadow-luxe backdrop-blur sm:block animate-float-slow">
              <div className="text-eyebrow text-gold">Nosso compromisso</div>
              <div className="mt-2 text-display text-xl text-foreground leading-tight">Seu momento<br />começa aqui.</div>
            </div>
            <div className="absolute -right-4 top-8 hidden rotate-3 rounded-2xl border border-border/60 bg-background/95 px-4 py-3 shadow-soft backdrop-blur md:block animate-float-slow [animation-delay:1s]">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-gold" />
                <span className="text-xs font-medium text-foreground">Atendimento Premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-background py-7 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 pr-12">
              {marqueeWords.map((w) => (
                <span key={`${k}-${w}`} className="flex items-center gap-12 text-display text-2xl text-foreground/60">
                  {w}
                  <span className="size-1.5 rounded-full bg-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <div className="text-eyebrow text-gold">— Serviços</div>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground">
              Cuidados completos,<br />
              <span className="text-display-italic text-gold-deep">do fio aos detalhes.</span>
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">Cada serviço é executado com técnica refinada e produtos selecionados para entregar resultado e bem-estar.</p>
          </Reveal>

          <div className="mt-16 grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-x lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="group relative flex h-full flex-col gap-5 p-8 transition duration-700 hover:bg-gradient-luxe md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-eyebrow text-muted-foreground">0{i + 1}</span>
                    <ArrowUpRight className="size-5 text-muted-foreground opacity-0 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-gold-deep" />
                  </div>
                  <s.icon className="size-9 text-foreground transition duration-700 group-hover:text-gold-deep group-hover:scale-110" strokeWidth={1.25} />
                  <h3 className="text-3xl text-display text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                  <div className="mt-auto h-px w-12 origin-left scale-x-0 bg-gradient-gold transition duration-700 group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="relative overflow-hidden bg-gradient-luxe py-28 md:py-36">
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_center,_var(--foreground)_1px,_transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="text-eyebrow text-gold">— Diferenciais</div>
              <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground">
                Por que escolher o<br />
                <span className="text-display-italic">Seu salão de beleza?</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Cuidado, técnica e acolhimento caminham juntos para entregar uma experiência sensorial completa.
              </p>
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 60}>
                  <div className="flex h-full gap-5 bg-background/80 p-7 backdrop-blur transition hover:bg-background">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-gold text-foreground shadow-gold">
                      <b.icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-display text-xl text-foreground">{b.title}</div>
                      <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-eyebrow text-gold">— Galeria</div>
              <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground">
                Trabalhos que<br />
                <span className="text-display-italic">falam por nós.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">Resultados reais em cabelos, unhas e estética. Clique para ampliar.</p>
          </Reveal>

          <Reveal delay={150} className="mt-16">
            <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {gallery.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setLight(img)}
                  className={`group relative overflow-hidden rounded-2xl ${img.span}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="size-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between opacity-0 transition duration-500 group-hover:opacity-100">
                    <span className="text-xs font-medium text-background">{img.alt}</span>
                    <ArrowUpRight className="size-5 text-background" />
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-ink py-28 md:py-36" style={{ background: "var(--ink)" }}>
        <div className="mx-auto max-w-7xl px-6 text-background">
          <Reveal className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="text-eyebrow text-gold">— Prova social</div>
              <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-background">
                Clientes que<br />
                <span className="text-display-italic text-gold">viraram fãs.</span>
              </h2>
            </div>
            <div className="flex items-center gap-5 rounded-2xl border border-background/10 bg-background/5 p-5 backdrop-blur">
              <div className="text-display text-6xl text-background">5.0</div>
              <div>
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" strokeWidth={0} />)}</div>
                <div className="mt-1 text-sm text-background/60">41 avaliações · Google</div>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="group flex h-full flex-col rounded-3xl border border-background/10 bg-background/[0.04] p-8 transition duration-500 hover:bg-background/[0.08] hover:-translate-y-1">
                  <Quote className="size-7 text-gold" strokeWidth={1.2} />
                  <p className="mt-5 flex-1 leading-relaxed text-background/85">"{t.text}"</p>
                  <div className="mt-7 border-t border-background/15 pt-4">
                    <div className="font-medium text-background">{t.name}</div>
                    <div className="text-xs text-background/50">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section id="diagnostico" className="bg-gradient-cream py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="text-center">
            <div className="text-eyebrow text-gold">— Ferramenta exclusiva</div>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground">
              Descubra o tratamento ideal<br />
              <span className="text-display-italic text-gold-deep">para o seu cabelo.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Responda 4 perguntas rápidas e receba uma recomendação personalizada.</p>
          </Reveal>
          <Reveal delay={150} className="mt-14">
            <HairDiagnosis />
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={g3}
                alt="Ambiente acolhedor do salão"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background p-6 shadow-luxe sm:block">
                <div className="text-display text-4xl text-gold-deep">✦</div>
                <div className="mt-2 text-display text-xl text-foreground leading-tight max-w-[180px]">Beleza com<br />sensibilidade.</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="text-eyebrow text-gold">— Sobre nós</div>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground">
              Um espaço pensado<br />
              <span className="text-display-italic">para a sua autoestima.</span>
            </h2>
            <div className="mt-7 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                O Seu salão de beleza nasceu com um propósito claro: oferecer uma experiência de beleza completa, com atendimento humanizado e cuidado personalizado para cada cliente.
              </p>
              <p>
                Mais do que um salão, somos um refúgio no Bairro Centro, onde cada detalhe é pensado para o seu bem-estar. Nossa equipe combina técnica, sensibilidade e amor pelo que faz.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[{n: "5.0", l: "Avaliação"}, {n: "41+", l: "Avaliações"}, {n: "100%", l: "Personalizado"}].map((s) => (
                <div key={s.l}>
                  <div className="text-display text-5xl text-foreground">{s.n}</div>
                  <div className="mt-2 text-eyebrow text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="contato" className="bg-gradient-cream py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="text-eyebrow text-gold">— Localização</div>
                <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground">
                  Venha nos<br />
                  <span className="text-display-italic text-gold-deep">visitar.</span>
                </h2>
                <div className="mt-10 space-y-6">
                  <div className="flex gap-5">
                    <MapPin className="size-5 shrink-0 text-gold" />
                    <div>
                      <div className="font-medium text-foreground">Seu endereço, 000</div>
                      <div className="text-muted-foreground">Bairro Centro · Belo Horizonte - MG · CEP 00000-000</div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Clock className="size-5 shrink-0 text-gold" />
                    <div>
                      <div className="font-medium text-foreground">Terça a Sábado</div>
                      <div className="text-muted-foreground">09:00 às 19:00</div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Phone className="size-5 shrink-0 text-gold" />
                    <a href="tel:+5531995251154" className="link-underline text-foreground">(31) 99525-1154</a>
                  </div>
                  <div className="flex gap-5">
                    <Instagram className="size-5 shrink-0 text-gold" />
                    <a href="https://instagram.com/andrezjn" target="_blank" rel="noreferrer" className="link-underline text-foreground">
                      @seusalaodebeleza
                      </a>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+da+Bélgica+486+Belo Horizonte+MG"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxe mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition hover:text-foreground"
                >
                  Como Chegar <ArrowUpRight className="size-4" />
                </a>
              </div>
              <div className="overflow-hidden rounded-3xl border border-border shadow-luxe">
                <iframe
                  title="Mapa Seu salão de beleza"
                  src="https://www.google.com/maps?q=Rua+da+B%C3%A9lgica+486+Belo Horizonte+MG&output=embed"
                  className="h-96 w-full border-0 lg:h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <div className="text-eyebrow text-gold">— Dúvidas</div>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] text-display text-foreground">
              Perguntas <span className="text-display-italic text-gold-deep">frequentes</span>
            </h2>
          </Reveal>
          <div className="mt-14 divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left group"
                >
                  <span className="text-display text-xl text-foreground transition group-hover:text-gold-deep">{f.q}</span>
                  <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition duration-500 ${open === i ? "rotate-180 text-gold-deep" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-out ${open === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden text-muted-foreground leading-relaxed">{f.a}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-32 md:py-40" style={{ background: "var(--ink)" }}>
        <div className="absolute -left-32 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -right-32 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-nude/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <Reveal className="relative mx-auto max-w-3xl px-6 text-center text-background">
          <CheckCircle2 className="mx-auto size-12 text-gold" strokeWidth={1} />
          <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] text-display text-background">
            Pronta para transformar<br />
            <span className="text-display-italic text-gold">sua autoestima?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-background/70 leading-relaxed">
            Agende seu horário e viva uma experiência de beleza pensada especialmente para você.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-luxe group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-gold px-12 py-5 text-base font-medium text-foreground shadow-gold transition hover:scale-[1.02]"
          >
            <MessageCircle className="size-5" /> Agendar pelo WhatsApp
            <ArrowUpRight className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="text-display text-2xl text-foreground">Salão de Beleza</div>
            <div className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">Boutique de beleza no Centro — onde cada cliente vive uma experiência única.</div>
          </div>
          <div>
            <div className="text-eyebrow text-gold">Visite</div>
            <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <div>Seu endereço, 000</div>
              <div>Bairro Centro — Belo Horizonte, MG</div>
              <div>Ter–Sáb · 09h às 19h</div>
            </div>
          </div>
          <div>
            <div className="text-eyebrow text-gold">Contato</div>
            <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <a href="tel:+5531995251154" className="block link-underline">(31) 99525-1154</a>
              <a href="https://instagram.com/seusalaodebeleza" target="_blank" rel="noreferrer" className="block link-underline">@andrezjn</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Seu salão de beleza · Todos os direitos reservados
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="group fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-luxe transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-20" />
        <MessageCircle className="relative size-6" />
      </a>

      {light && <Lightbox src={light.src} alt={light.alt} onClose={() => setLight(null)} />}
    </div>
  );
}
