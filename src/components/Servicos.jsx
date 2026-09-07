import { SERVICOS } from '../data/site';
import SectionHead from './SectionHead';

export default function Servicos() {
  return (
    <section id="servicos" className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute -right-[4%] top-24 overflow-hidden opacity-70 md:top-20">
        <span className="ghost-text block text-[19vw] leading-none text-navy-900/[0.16] md:text-[10.5vw]">
          SERVIÇOS
        </span>
      </div>

      <div className="wrap relative">
        <SectionHead
          tag="O que fazemos"
          title={<>Três frentes,<br /><em className="not-italic text-gold-600">um sistema só.</em></>}
          lead="Cada parte cobre uma etapa da jornada de quem vai virar cliente — da primeira impressão até a conversa marcada."
        />

        <div className="grid gap-px overflow-hidden rounded-sm border border-navy-900/8 bg-navy-900/8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICOS.map((s) => (
            <article key={s.id} className="reveal group relative bg-paper p-8 transition-colors duration-500 hover:bg-white">
              <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-0 bg-gold-600 transition-all duration-500 ease-soft group-hover:w-full" />
              <span className="label mb-8 block text-navy-900/25">{s.n}</span>
              <h3 className="h-display mb-3 text-[22px] text-navy-900">{s.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-smoke">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
