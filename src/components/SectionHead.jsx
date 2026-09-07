export default function SectionHead({ tag, title, lead, light = false, center = false }) {
  return (
    <div className={`mb-14 max-w-2xl md:mb-20 ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`label reveal mb-5 inline-flex items-center gap-3 ${light ? 'text-gold-400' : 'text-gold-600'}`}>
        <i className={`h-px w-6 ${light ? 'bg-gold-400/60' : 'bg-gold-600/50'}`} />
        {tag}
      </span>
      <h2 className={`h-display reveal text-[clamp(30px,4.6vw,50px)] ${light ? 'text-cream' : 'text-navy-900'}`}>
        {title}
      </h2>
      {lead && (
        <p className={`reveal mt-5 text-[15.5px] leading-relaxed ${light ? 'text-cream/65' : 'text-smoke'}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
