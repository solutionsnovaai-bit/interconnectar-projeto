import { METODO } from '../data/site';
import SectionHead from './SectionHead';
import GhostText from './GhostText';

export default function Metodo() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-navy-950 py-20 text-cream md:py-32">
      <div className="pointer-events-none absolute inset-x-0 -bottom-[6%] overflow-hidden text-center">
        <GhostText tone="light" className="inline-block text-[19vw] leading-none md:text-[12vw]">
          MÉTODO
        </GhostText>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-600/10 blur-[120px]" />

      <div className="wrap relative">
        <SectionHead
          light
          tag="Como funciona"
          title={<>Da primeira campanha<br /><em className="not-italic text-gold-400">à rotina de captação.</em></>}
          lead="Nada de solto: cada frente entra numa ordem que já testamos com outros escritórios."
        />

        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {METODO.map((m, i) => (
            <div key={m.n} className="reveal relative pl-9">
              <span className="font-display absolute left-0 top-0 text-4xl text-gold-500/40">{m.n}</span>
              <h3 className="h-display mb-2.5 text-[21px] text-cream">{m.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-cream/60">{m.text}</p>
              {i < METODO.length - 1 && (
                <span className="pointer-events-none absolute -bottom-7 left-9 hidden h-px w-[70%] bg-gradient-to-r from-gold-500/25 to-transparent sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
