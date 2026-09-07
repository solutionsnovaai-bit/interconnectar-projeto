import { FAQ } from '../data/site';
import SectionHead from './SectionHead';

export default function Faq() {
  return (
    <section id="duvidas" className="py-20 md:py-32">
      <div className="wrap max-w-3xl">
        <SectionHead
          tag="Dúvidas"
          title={<>Perguntas que<br /><em className="not-italic text-gold-600">sempre aparecem.</em></>}
        />

        <div className="border-t border-navy-900/10">
          {FAQ.map((f) => (
            <details key={f.q} className="reveal group border-b border-navy-900/10">
              <summary className="h-display flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[clamp(17px,2.2vw,21px)] font-medium text-navy-900 transition-colors hover:text-gold-600 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="relative h-4 w-4 flex-none">
                  <i className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-gold-600" />
                  <i className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-gold-600 transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="pb-7 pr-10 text-[15px] leading-relaxed text-smoke">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
