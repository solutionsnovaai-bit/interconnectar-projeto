import { useEffect, useState } from 'react';
import { BRAND, NAV_LINKS, waLink } from '../data/site';
import { Wpp } from './Icons';

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setStuck(window.scrollY > 30);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // no topo (sobre o hero escuro) o texto precisa ser claro; depois de
  // rolar, a nav ganha fundo claro e o texto vira escuro. Com o drawer
  // mobile aberto, força sempre o modo claro-sobre-escuro — o drawer é
  // todo navy por baixo, então a nav tem que combinar com ele, não com
  // a posição de scroll de antes de abrir.
  const dark = !stuck || open;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ease-soft
                    ${stuck ? 'border-b border-navy-900/8 bg-paper/90 py-3 backdrop-blur-md' : 'py-5'}`}
      >
        <div className="wrap flex items-center gap-8">
          <a href="#topo" className="mr-auto flex items-center" aria-label="Início">
            <img src="/assets/logo-full.jpg" alt={BRAND.full} className="h-8 w-auto rounded-sm sm:h-9" />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`group relative py-1 text-[13.5px] font-medium transition-colors duration-500
                              ${dark ? 'text-cream/75 hover:text-cream' : 'text-navy-900/70 hover:text-navy-900'}`}
                >
                  {l.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-300 ease-soft group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={waLink('Olá! Quero saber mais sobre os planos da Interconnectar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold hidden !px-5 !py-2.5 !text-[13px] lg:inline-flex"
          >
            <Wpp className="h-3.5 w-3.5" />
            Falar agora
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <i className={`h-px w-5 transition-all duration-300 ${dark ? 'bg-cream' : 'bg-navy-900'} ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <i className={`h-px w-5 transition-all duration-300 ${dark ? 'bg-cream' : 'bg-navy-900'} ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[75] flex flex-col items-center justify-center gap-2 bg-navy-950
                    transition-all duration-400 ease-soft lg:hidden
                    ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="h-display py-2.5 text-3xl text-cream"
          >
            {l.label}
          </a>
        ))}
        <a
          href={waLink('Olá! Quero saber mais sobre os planos da Interconnectar.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn btn-gold mt-7"
        >
          <Wpp className="h-4 w-4" />
          Falar no WhatsApp
        </a>
      </div>
    </>
  );
}
