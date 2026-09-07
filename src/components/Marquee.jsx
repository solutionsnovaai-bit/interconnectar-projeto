import { MARQUEE_WORDS } from '../data/site';

export default function Marquee() {
  const row = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div className="overflow-hidden border-y border-navy-900/8 bg-navy-900 py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <span key={k} className="flex items-center whitespace-nowrap">
            {row.map((w, i) => (
              <span key={`${k}-${i}`} className="label flex items-center text-cream/80">
                {w}
                <i className="mx-6 text-[7px] not-italic text-gold-500">◆</i>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
