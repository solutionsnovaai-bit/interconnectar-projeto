import { HERO, HERO_STATS, waLink } from '../data/site';
import { ArrowRight, Wpp } from './Icons';

export default function Hero() {
  return (
    <header id="topo" className="relative isolate min-h-[100svh] overflow-hidden bg-navy-950">
      <img
        src="/assets/hero-desktop.jpg"
        alt="Interconnectar Assessoria Jurídica"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        fetchPriority="high"
      />
      <img
        src="/assets/hero-mobile.jpg"
        alt="Interconnectar Assessoria Jurídica"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        fetchPriority="high"
      />

      <div className="wrap relative flex min-h-[100svh] flex-col justify-end pb-14 pt-[60vh] sm:pt-[55vh] md:justify-center md:pb-28 md:pt-32">
        <div className="max-w-xl">
          <span className="label reveal mb-4 inline-flex items-center gap-3 text-gold-400 md:mb-6">
            <i className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            {HERO.eyebrow}
          </span>

          <h1 className="h-display reveal mb-4 text-[clamp(30px,5.6vw,60px)] text-cream md:mb-6">
            {HERO.title}
            <br />
            <em className="not-italic text-gold-400">{HERO.titleEm}</em>
          </h1>

          <p className="reveal mb-7 max-w-md text-[14.5px] leading-relaxed text-cream/70 md:mb-9 md:text-[15.5px]">
            {HERO.lead}
          </p>

          <div className="reveal flex flex-wrap gap-3">
            <a href={waLink('Olá! Quero saber mais sobre os planos da Interconnectar.')} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              <Wpp className="h-4 w-4" />
              Falar no WhatsApp
            </a>
            <a href="#planos" className="btn btn-ghost">
              Ver planos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="reveal mt-8 flex flex-wrap gap-x-9 gap-y-5 md:mt-12">
            {HERO_STATS.map((s) => (
              <li key={s.label} className="flex flex-col gap-1.5">
                <span className="font-display text-3xl text-gold-400">{s.n}</span>
                <span className="label whitespace-pre-line text-[9px] leading-relaxed text-cream/45">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href="#servicos" className="scroll-hint absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2.5 md:flex" aria-label="Rolar para baixo">
        <span className="label text-cream/40">role</span>
        <i className="h-7 w-px bg-gradient-to-b from-gold-400 to-transparent" />
      </a>
    </header>
  );
}
