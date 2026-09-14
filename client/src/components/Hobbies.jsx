// Hobbies — a warm, human section with a rotating "quote of the moment" carousel.
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiBookOpen, FiFilm, FiMessageSquare, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { hobbies, quotes } from "../data/portfolioData.js";

const iconMap = {
  book: FiBookOpen,
  film: FiFilm,
  quote: FiMessageSquare,
};

const accentBg = {
  "accent-paper": "bg-accent-paper/10 text-accent-cream",
  "accent-terracotta": "bg-accent-terracotta/10 text-accent-terracotta",
  "accent-hunter": "bg-accent-hunter/10 text-accent-hunter",
};

const accentBorder = {
  "accent-paper": "hover:border-accent-paper/40",
  "accent-terracotta": "hover:border-accent-terracotta/40",
  "accent-hunter": "hover:border-accent-hunter/40",
};

export const defaultQuote = { text: "There's no such thing as a life that's better than yours.", source: 'J. Cole — "Love Yourz"' };

const QuoteCarousel = () => {
  const all = quotes.length ? quotes : [defaultQuote];
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % all.length), [all.length]);
  const prev = () => setIndex((i) => (i - 1 + all.length) % all.length);

  // Auto-rotate every 8s; pause controlled by manual navigation naturally resetting timer.
  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  const quote = all[index];

  return (
    <figure className="card-surface relative mx-auto max-w-2xl overflow-hidden px-6 py-10 text-center sm:px-12">
      <div className="absolute inset-0 bg-accent-gradient opacity-[0.08]" aria-hidden="true" />
      <span className="absolute left-6 top-2 font-display text-6xl leading-none text-accent-paper/40" aria-hidden="true">
        "
      </span>

      <AnimatePresence mode="wait">
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[7rem] font-display text-xl font-semibold leading-relaxed text-primary sm:text-2xl"
        >
          {quote.text}
        </motion.blockquote>
      </AnimatePresence>

      <figcaption className="relative mt-4 text-sm font-semibold uppercase tracking-widest text-accent-terracotta">
        {quote.source}
      </figcaption>

      {/* Controls */}
      <div className="relative mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous quote"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border-card bg-subtle text-secondary transition-colors hover:text-accent-paper"
        >
          <FiChevronLeft aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2">
          {all.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to quote ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-accent-terracotta" : "w-1.5 bg-base-700 hover:bg-accent-terracotta/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next quote"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border-card bg-subtle text-secondary transition-colors hover:text-accent-paper"
        >
          <FiChevronRight aria-hidden="true" />
        </button>
      </div>
    </figure>
  );
};

const Hobbies = () => (
  <section id="hobbies" className="section">
    <div className="container-x">
      <SectionHeading
        kicker="Hobbies"
        title="Away from the keyboard"
        subtitle="When I'm not building, I'm reading — and collecting the lines from movies and songs that stay with me."
      />

      <Reveal className="mb-12">
        <QuoteCarousel />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {hobbies.map((hobby, index) => {
          const Icon = iconMap[hobby.icon] || FiBookOpen;
          return (
            <Reveal key={hobby.title} delay={index * 0.1} className="h-full">
              <div
                className={`card-surface group h-full p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm ${accentBorder[hobby.accent]}`}
              >
                <span
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${accentBg[hobby.accent]}`}
                >
                  <Icon className="text-2xl" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold">{hobby.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{hobby.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Hobbies;