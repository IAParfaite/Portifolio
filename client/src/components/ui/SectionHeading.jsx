// Consistent section heading — kicker + title + optional subtitle.
import Reveal from "./Reveal.jsx";

const SectionHeading = ({ kicker, title, subtitle, className = "" }) => (
  <Reveal className={`mb-14 text-center ${className}`}>
    {kicker && (
      <span className="mb-3 inline-block rounded-full border border-accent-paper/40 bg-accent-paper/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent-cream">
        {kicker}
      </span>
    )}
    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
    {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;