// Full-height intro with animated background, tagline and CTA buttons.
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AnimatedBackground from "./AnimatedBackground.jsx";
import Button from "./ui/Button.jsx";
import { profile, stats } from "../data/portfolioData.js";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => (
  <section id="top" className="relative flex min-h-screen items-center pt-24">
    <AnimatedBackground />

    <div className="container-x relative py-20">
      {/* Ambient glow behind the headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent-hunter/15 blur-[120px]"
        aria-hidden="true"
      />

      {/* Availability pill */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-card bg-subtle px-4 py-1.5 text-xs font-medium text-secondary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-terracotta opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-terracotta" />
          </span>
          Open to opportunities
        </span>
      </motion.div>

      {/* Name + titles */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="max-w-4xl text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
      >
        {profile.name.split(" ")[0]}{" "}
        <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="mt-5 max-w-xl font-display text-lg font-medium tracking-wide text-accent-terracotta md:text-xl"
      >
        {profile.role}
      </motion.p>

      {/* Tagline / bio */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
      >
        {profile.shortTagline}
      </motion.p>

      {/* CTAs */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-10 flex flex-wrap gap-4">
        <Button href="#projects">
          View My Work <FiArrowRight />
        </Button>
        <Button href="#contact" variant="secondary">
          Let's Connect
        </Button>
      </motion.div>

      {/* Stats strip */}
      <motion.dl
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
        className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="card-surface px-5 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-hunter/50 hover:shadow-glow-sm"
          >
            <dt className="text-xs font-medium uppercase tracking-widest text-muted">{s.label}</dt>
            <dd className="mt-1 font-display text-2xl font-bold text-gradient">{s.value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>
  </section>
);

export default Hero;