import { BRAND, CTA_FINAL, waLink } from '../data/site';
import { Wpp } from './Icons';
import GhostText from './GhostText';
import Mark from './Mark';

export default function CtaFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-center text-cream md:py-32">
      <Mark className="pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2 text-cream opacity-[0.03]" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-600/20 blur-[110px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden text-center opacity-60">
        <GhostText tone="light" className="inline-block text-[18vw] leading-[0.8] md:text-[11vw]">
          {BRAND.name.toUpperCase()}
        </GhostText>
      </div>

      <div className="wrap relative">
        <span className="label reveal mb-6 inline-block text-gold-400">{CTA_FINAL.eyebrow}</span>
        <h2 className="h-display reveal mx-auto mb-5 max-w-2xl text-[clamp(30px,5.2vw,56px)]">
          {CTA_FINAL.title}
          <br />
          <em className="not-italic text-gold-400">{CTA_FINAL.titleEm}</em>
        </h2>
        <p className="reveal mx-auto mb-10 max-w-lg text-[15.5px] leading-relaxed text-cream/65">
          {CTA_FINAL.lead}
        </p>

        <div className="reveal flex flex-wrap justify-center gap-3">
          <a
            href={waLink('Olá! Vim pelo site e quero montar meu plano com a Interconnectar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <Wpp className="h-4 w-4" />
            Falar no WhatsApp agora
          </a>
          <a href="#planos" className="btn btn-ghost">
            Ver planos de novo
          </a>
        </div>
      </div>
    </section>
  );
}
