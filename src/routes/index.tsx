import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors, Sparkles, Heart, Flower2, Droplets, Wand2,
  Star, MapPin, Phone, Instagram, Clock, ChevronDown, MessageCircle, ArrowRight,
  CheckCircle2, Users, Award, Leaf,
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aqui Tem Charme — Salão de Beleza em Contagem MG" },
      { name: "description", content: "Salão de beleza no Bairro da Glória, Contagem MG. Cabelos, unhas, estética facial e corporal. Atendimento personalizado. Agende pelo WhatsApp." },
      { property: "og:title", content: "Aqui Tem Charme — Salão de Beleza em Contagem MG" },
      { property: "og:description", content: "Seu momento de beleza começa aqui." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5531984211978?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Aqui%20Tem%20Charme.";

const services = [
  { icon: Scissors, title: "Cabelos", desc: "Cortes, escova, finalização e cuidados completos para cada tipo de fio." },
  { icon: Sparkles, title: "Unhas", desc: "Manicure e pedicure com acabamento impecável e ambiente higienizado." },
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
  { name: "Mariana S.", text: "Atendimento impecável! Saí me sentindo outra pessoa. A Carol entendeu exatamente o que eu queria.", role: "Cliente desde 2022" },
  { name: "Juliana P.", text: "O ambiente é lindo, acolhedor e as profissionais são super atenciosas. Virei cliente fiel!", role: "Cliente" },
  { name: "Camila R.", text: "Melhor salão do Bairro da Glória! Cabelo saiu maravilhoso e o cuidado é nota mil.", role: "Cliente" },
  { name: "Beatriz L.", text: "Fiz uma hidratação e a diferença foi gigante. Recomendo demais, super profissionais.", role: "Cliente" },
];

const faqs = [
  { q: "Precisa agendar?", a: "Sim, trabalhamos com agendamento para garantir um atendimento exclusivo. Basta chamar no WhatsApp." },
  { q: "Quais formas de pagamento?", a: "Aceitamos PIX, dinheiro, cartões de débito e crédito." },
  { q: "Quais serviços são oferecidos?", a: "Cabelos, unhas, estética facial e corporal, hidratações e transformações capilares completas." },
  { q: "Como funciona a avaliação?", a: "Você passa pelo nosso diagnóstico, conversamos sobre seus objetivos e montamos o plano ideal para você." },
];

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  const [light, setLight] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="text-display text-xl tracking-wide text-foreground">Aqui Tem Charme</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#servicos" className="transition hover:text-foreground">Serviços</a>
            <a href="#galeria" className="transition hover:text-foreground">Galeria</a>
            <a href="#diagnostico" className="transition hover:text-foreground">Diagnóstico</a>
            <a href="#sobre" className="transition hover:text-foreground">Sobre</a>
            <a href="#contato" className="transition hover:text-foreground">Contato</a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition hover:scale-[1.02] sm:inline-flex"
          >
            <MessageCircle className="size-4" /> Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-gradient-luxe pt-28 pb-20 md:pt-36 md:pb-32">
        <div className="absolute -right-32 top-20 size-96 rounded-full bg-gold-soft/40 blur-3xl" />
        <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-nude/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
              <Sparkles className="size-3 text-gold" /> Contagem · Bairro da Glória
            </div>
            <h1 className="mt-6 text-5xl leading-[1.05] text-display text-foreground sm:text-6xl lg:text-7xl">
              A beleza que <em className="not-italic text-gold">realça</em> sua melhor versão.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Cuidados completos para cabelos, unhas e estética em um ambiente acolhedor e profissional no Bairro da Glória, em Contagem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background shadow-soft transition hover:scale-[1.02]"
              >
                <MessageCircle className="size-4" /> Agendar pelo WhatsApp
              </a>
              <a
                href="#diagnostico"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-8 py-4 text-sm font-medium text-foreground backdrop-blur transition hover:bg-background"
              >
                Fazer Diagnóstico Capilar <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-medium text-foreground">5.0 no Google</div>
                <div className="text-muted-foreground">41 avaliações reais</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="Salão Aqui Tem Charme em Contagem"
              width={1600}
              height={1200}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-5 shadow-luxe sm:block animate-float-slow">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Slogan</div>
              <div className="mt-1 text-display text-xl text-foreground">Seu momento começa aqui.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Serviços</div>
            <h2 className="mt-3 text-4xl text-display text-foreground md:text-5xl">
              Cuidados completos, do fio aos detalhes.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition duration-500 hover:-translate-y-1 hover:shadow-luxe"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-gradient-gold opacity-0 blur-2xl transition duration-500 group-hover:opacity-30" />
                <div className="relative">
                  <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-muted text-foreground transition group-hover:bg-gradient-gold">
                    <s.icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-2xl text-display text-foreground">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-gradient-luxe py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Diferenciais</div>
              <h2 className="mt-3 text-4xl text-display text-foreground md:text-5xl">
                Por que escolher o Aqui Tem Charme?
              </h2>
              <p className="mt-6 text-muted-foreground">
                Um espaço onde cuidado, técnica e acolhimento caminham juntos para entregar uma experiência única.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 rounded-2xl bg-background/70 p-6 backdrop-blur transition hover:bg-background hover:shadow-soft">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-foreground">
                    <b.icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{b.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Galeria</div>
              <h2 className="mt-3 text-4xl text-display text-foreground md:text-5xl">Trabalhos que falam por nós.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">Resultados reais em cabelos, unhas e estética. Clique nas imagens para ampliar.</p>
          </div>
          <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
            {gallery.map((img) => (
              <button
                key={img.src}
                onClick={() => setLight(img)}
                className={`group relative overflow-hidden rounded-2xl ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 transition duration-500 group-hover:bg-foreground/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-muted py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Prova social</div>
              <h2 className="mt-3 text-4xl text-display text-foreground md:text-5xl">Clientes que viraram fãs.</h2>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-background p-5 shadow-soft">
              <div className="text-display text-5xl text-foreground">5.0</div>
              <div>
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" />)}</div>
                <div className="mt-1 text-sm text-muted-foreground">41 avaliações no Google</div>
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col rounded-3xl bg-background p-8 shadow-soft">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" />)}</div>
                <p className="mt-4 flex-1 text-foreground/80">"{t.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section id="diagnostico" className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Ferramenta exclusiva</div>
            <h2 className="mt-3 text-4xl text-display text-foreground md:text-5xl">
              Descubra o tratamento ideal para o seu cabelo.
            </h2>
            <p className="mt-4 text-muted-foreground">Responda 4 perguntas rápidas e receba uma recomendação personalizada.</p>
          </div>
          <div className="mt-12">
            <HairDiagnosis />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-gradient-luxe py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <img
            src={g3}
            alt="Ambiente acolhedor do salão"
            loading="lazy"
            className="aspect-square w-full rounded-[2rem] object-cover shadow-luxe"
          />
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Sobre nós</div>
            <h2 className="mt-3 text-4xl text-display text-foreground md:text-5xl">
              Um espaço pensado para a sua autoestima.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                O Aqui Tem Charme nasceu com um propósito claro: oferecer uma experiência de beleza completa, com atendimento humanizado e cuidado personalizado para cada cliente.
              </p>
              <p>
                Mais do que um salão, somos um refúgio no Bairro da Glória, onde cada detalhe é pensado para o seu bem-estar. Nossa equipe combina técnica, sensibilidade e amor pelo que faz.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[{n: "5.0", l: "Avaliação"}, {n: "41+", l: "Avaliações"}, {n: "100%", l: "Personalizado"}].map((s) => (
                <div key={s.l}>
                  <div className="text-display text-4xl text-foreground">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="contato" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Localização</div>
              <h2 className="mt-3 text-4xl text-display text-foreground md:text-5xl">Venha nos visitar.</h2>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <MapPin className="size-5 shrink-0 text-gold" />
                  <div>
                    <div className="font-medium text-foreground">Rua da Bélgica, 486</div>
                    <div className="text-muted-foreground">Bairro da Glória · Contagem - MG · CEP 32340-030</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="size-5 shrink-0 text-gold" />
                  <div>
                    <div className="font-medium text-foreground">Terça a Sábado</div>
                    <div className="text-muted-foreground">09:00 às 19:00</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="size-5 shrink-0 text-gold" />
                  <a href="tel:+5531984211978" className="text-foreground hover:text-gold">(31) 98421-1978</a>
                </div>
                <div className="flex gap-4">
                  <Instagram className="size-5 shrink-0 text-gold" />
                  <a href="https://instagram.com/espacoaquitemcharme" target="_blank" rel="noreferrer" className="text-foreground hover:text-gold">
                    @espacoaquitemcharme
                  </a>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+da+Bélgica+486+Contagem+MG"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm text-background transition hover:scale-[1.02]"
              >
                Como Chegar <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="Mapa Aqui Tem Charme"
                src="https://www.google.com/maps?q=Rua+da+B%C3%A9lgica+486+Contagem+MG&output=embed"
                className="h-96 w-full border-0 lg:h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Dúvidas</div>
            <h2 className="mt-3 text-4xl text-display text-foreground md:text-5xl">Perguntas frequentes</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-background">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-foreground">{f.q}</span>
                  <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-muted-foreground animate-fade-up">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background md:py-32">
        <div className="absolute -left-20 top-1/2 size-96 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -right-20 top-1/2 size-96 -translate-y-1/2 rounded-full bg-nude/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <CheckCircle2 className="mx-auto size-12 text-gold" strokeWidth={1.2} />
          <h2 className="mt-6 text-4xl text-display text-background md:text-6xl">
            Pronta para transformar sua autoestima?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-background/70">
            Agende seu horário e viva uma experiência de beleza pensada especialmente para você.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-10 py-5 text-base font-medium text-foreground shadow-luxe transition hover:scale-[1.03]"
          >
            <MessageCircle className="size-5" /> Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div>
            <div className="text-display text-xl text-foreground">Aqui Tem Charme</div>
            <div className="mt-1 text-sm text-muted-foreground">Seu momento de beleza começa aqui.</div>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aqui Tem Charme Espaço de Beleza · Contagem, MG
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-luxe transition hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>

      {light && <Lightbox src={light.src} alt={light.alt} onClose={() => setLight(null)} />}
    </div>
  );
}
