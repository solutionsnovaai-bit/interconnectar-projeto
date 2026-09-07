import { PLANOS, PROPOSTA, brl, waLink } from '../data/site';
import SectionHead from './SectionHead';
import { Check, Gift, Minus, Wpp } from './Icons';

function PlanCard({ plano }) {
  const { name, tagline, price, highlight, features } = plano;
  return (
    <article
      className={`reveal relative flex flex-col rounded-sm p-8 transition-all duration-500 md:p-9
                  ${highlight
                    ? 'z-10 bg-navy-950 text-cream shadow-[0_40px_80px_-30px_rgba(11,35,59,.55)] md:-my-6 md:py-14'
                    : 'border border-navy-900/10 bg-white text-navy-900'}`}
    >
      {highlight && (
        <span className="label absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-600 px-4 py-1.5 text-navy-950">
          Mais escolhido
        </span>
      )}

      <h3 className={`h-display text-[26px] ${highlight ? 'text-cream' : 'text-navy-900'}`}>{name}</h3>
      <p className={`mt-2 text-[13.5px] leading-relaxed ${highlight ? 'text-cream/60' : 'text-smoke'}`}>{tagline}</p>

      <div className="mb-8 mt-7 flex items-baseline gap-1.5">
        <span className={`font-display text-[15px] ${highlight ? 'text-gold-400' : 'text-gold-600'}`}>R$</span>
        <span className={`font-display text-5xl ${highlight ? 'text-cream' : 'text-navy-900'}`}>
          {brl(price).replace('R$', '').trim()}
        </span>
        <span className={`text-[13px] ${highlight ? 'text-cream/45' : 'text-smoke'}`}>/mês</span>
      </div>

      <ul className="mb-9 flex flex-1 flex-col gap-3.5">
        {features.map((f) => (
          <li key={f.text} className="flex items-start gap-3 text-[14px] leading-snug">
            <span className={`mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full
                               ${f.on ? (highlight ? 'bg-gold-500/20 text-gold-400' : 'bg-gold-600/12 text-gold-600') : (highlight ? 'bg-cream/10 text-cream/25' : 'bg-navy-900/6 text-navy-900/25')}`}>
              {f.on ? <Check className="h-[10px] w-[10px]" /> : <Minus className="h-[9px] w-[9px]" />}
            </span>
            <span className={f.on ? (highlight ? 'text-cream/85' : 'text-navy-900/80') : (highlight ? 'text-cream/35 line-through decoration-cream/20' : 'text-navy-900/30 line-through decoration-navy-900/15')}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={waLink(`Olá! Quero saber mais sobre o plano ${name} da Interconnectar.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn w-full ${highlight ? 'btn-gold' : 'btn-navy'}`}
      >
        <Wpp className="h-4 w-4" />
        Escolher {name}
      </a>
    </article>
  );
}

export default function Planos() {
  return (
    <section id="planos" className="relative overflow-hidden bg-cream py-20 md:py-32">
      <div className="wrap relative">
        <SectionHead
          center
          tag="Planos"
          title={<>Escolha o ritmo<br /><em className="not-italic text-gold-600">de captação.</em></>}
          lead="Sem contrato de fidelidade. Comece no plano que faz sentido hoje e suba quando o volume de contato pedir mais estrutura."
        />

        {PROPOSTA?.nome && (
          <div className="reveal mx-auto mb-14 flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-gold-600/25 bg-gold-600/[0.06] px-7 py-6 text-center sm:flex-row sm:gap-5 sm:text-left">
            <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-gold-600/15 text-gold-600">
              <Gift className="h-5 w-5" />
            </span>
            <p className="text-[14.5px] leading-relaxed text-navy-900/80">
              <strong className="text-navy-900">{PROPOSTA.nome}</strong>, essa proposta já vem com um presente:
              a taxa de setup — <span className="whitespace-nowrap line-through decoration-navy-900/30">{brl(PROPOSTA.setupOriginal)}</span>{' '}
              pra desenvolver e colocar todo esse sistema no ar — está{' '}
              <strong className="text-gold-600">{PROPOSTA.setupFinal === 0 ? 'zerada' : brl(PROPOSTA.setupFinal)}</strong> pra você.
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-3 md:items-center md:gap-5">
          {PLANOS.map((p) => (
            <PlanCard key={p.id} plano={p} />
          ))}
        </div>

        <p className="reveal mx-auto mt-12 max-w-lg text-center text-[13px] leading-relaxed text-smoke">
          Os valores acima cobrem nossa gestão — estratégia, criação e otimização.
          A verba de anúncios investida nas plataformas é paga à parte, direto pra
          Meta, e fica sob seu controle o tempo todo.
        </p>
      </div>
    </section>
  );
}
