import { useEffect, useState } from 'react';
import { waLink } from '../data/site';
import { Wpp } from './Icons';

export default function FloatWpp() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.6);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <a
      href={waLink('Olá! Vim pelo site da Interconnectar.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-[70] grid h-14 w-14 place-items-center rounded-full bg-gold-600 text-navy-950
                  shadow-[0_14px_34px_-8px_rgba(201,162,39,.7)] transition-all duration-400 ease-soft
                  hover:bg-gold-500 ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'}`}
    >
      <Wpp className="h-7 w-7" />
    </a>
  );
}
