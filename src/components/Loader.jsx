import { useEffect, useState } from 'react';
import Mark from './Mark';

export default function Loader() {
  const [gone, setGone] = useState(false);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t1 = setTimeout(() => setGone(true), reduced ? 100 : 1500);
    const t2 = setTimeout(() => setDead(true), reduced ? 400 : 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (dead) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-7 overflow-hidden
                  bg-navy-950 transition-opacity duration-700 ease-soft
                  ${gone ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF5A 1px, transparent 0)',
        backgroundSize: '28px 28px',
      }} />
      <div className="relative">
        <span className="absolute -inset-10 rounded-full bg-gold-600/25 blur-3xl animate-pulseSoft" />
        <Mark className="relative h-[74px] w-[74px] text-gold-500 opacity-0 animate-fadeUp" style={{ animationDelay: '.15s' }} />
      </div>
      <span className="label text-cream/45 opacity-0 animate-fadeUp" style={{ animationDelay: '.5s' }}>
        interconnectar
      </span>
      <div className="h-px w-40 overflow-hidden bg-cream/10">
        <div className="h-full w-0 bg-gold-500 animate-barGo" />
      </div>
    </div>
  );
}
