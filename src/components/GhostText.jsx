/**
 * Texto enorme, só com contorno (sem preenchimento) — o efeito de fundo
 * usado em toda seção pra dar profundidade, igual à referência que o
 * Victor mandou. `tone` troca a cor do traço conforme o fundo da seção.
 */
export default function GhostText({ children, tone = 'gold', className = '', ...rest }) {
  const toneClass = tone === 'gold' ? 'text-gold-500/50' : tone === 'navy' ? 'text-navy-900/16' : 'text-cream/22';
  return (
    <span
      aria-hidden="true"
      className={`ghost-text pointer-events-none select-none whitespace-nowrap ${toneClass} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
