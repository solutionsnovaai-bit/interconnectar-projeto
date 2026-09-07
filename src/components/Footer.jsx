import { BRAND, NAV_LINKS, waLink } from '../data/site';
import Mark from './Mark';
import { Instagram, Wpp } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 pt-16 text-cream/65">
      <div className="wrap grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#topo" className="mb-5 flex items-center gap-2.5">
            <Mark className="h-7 w-7 text-gold-500" />
            <span className="font-display text-lg font-semibold text-cream">{BRAND.name}</span>
          </a>
          <p className="max-w-xs text-[14px] leading-relaxed text-cream/50">
            Marketing e captação para escritórios de advocacia — redes sociais,
            tráfego pago e um agente de IA que nunca deixa um contato esperando.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="label mb-1 text-gold-400">Navegação</span>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[14px] transition-colors hover:text-cream">{l.label}</a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="label mb-1 text-gold-400">Contato</span>
          <a href={waLink('Olá! Vim pelo site da Interconnectar.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] transition-colors hover:text-cream">
            <Wpp className="h-4 w-4" /> {BRAND.whatsappLabel}
          </a>
          <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] transition-colors hover:text-cream">
            <Instagram className="h-4 w-4" /> @{BRAND.instagram}
          </a>
        </div>
      </div>

      <div className="wrap border-t border-cream/10 py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="label text-[9px] text-cream/30">© {year} {BRAND.full} · Todos os direitos reservados</span>
          <span className="label text-[9px] text-cream/20">Nova AI Solutions</span>
        </div>
      </div>
    </footer>
  );
}
