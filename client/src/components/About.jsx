// About — personal + professional story with the required caption image block.
import { motion } from "framer-motion";
import { FiHeart, FiFeather } from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Badge from "./ui/Badge.jsx";
import { profile } from "../data/portfolioData.js";

const highlights = [
  {
    icon: FiHeart,
    title: "Dev + Design + Architecture",
    desc: "I move between interfaces, business logic and the systems underneath them.",
  },
  {
    icon: FiFeather,
    title: "Math & Problem Solving",
    desc: "I think in structure — clean ERDs, DFDs and logic that holds up under pressure.",
  },
];

const About = () => (
  <section id="about" className="section">
    <div className="container-x">
      <SectionHeading
        kicker="About Me"
        title="The person behind the code"
        subtitle="A full-stack developer who treats every build like a system to design — not just a page to ship."
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Caption image block — replace avatar URL in data/portfolioData.js */}
        <Reveal>
          <figure className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-accent-gradient opacity-25 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-card bg-base-800">
              {profile.avatar && profile.avatar !== "[ADD_LINK_HERE]" ? (
                <img src={profile.avatar} alt={`Portrait of ${profile.name}`} className="aspect-[4/5] w-full object-cover" />
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-base-700">
                  <span className="font-display text-7xl font-bold text-primary/10">A</span>
                </div>
              )}
              <figcaption className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-card bg-base-950/80 px-5 py-2 font-display text-sm font-medium text-primary backdrop-blur-sm">
                and that is me.
              </figcaption>
            </div>
          </figure>
        </Reveal>

        {/* Story */}
        <div>
          <Reveal delay={0.1}>
            <h3 className="text-2xl font-bold">Building things that feel inevitable.</h3>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 leading-relaxed text-muted">
              My journey started with curiosity about how systems fit together. That curiosity pulled me into the{" "}
              <span className="text-primary">MERN stack</span> — and then into design tools and system architecture. Today I
              build full-stack products end to end: clean data models, careful interfaces, and the logic that joins them.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 leading-relaxed text-muted">
              I care about <span className="text-primary">clean architecture</span> (ERDs, DFDs, logic design) and the
              problem-solving discipline that mathematics teaches. And when I'm not shipping, I'm collecting good quotes
              from movies and songs — proof that good systems and good stories share a secret: rhythm.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <Reveal key={h.title} delay={0.25}>
                <div className="card-surface group p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-hunter/50 hover:shadow-glow-sm">
                  <h.icon className="mb-3 text-2xl text-accent-terracotta transition-transform group-hover:scale-110" aria-hidden="true" />
                  <h4 className="font-display text-sm font-semibold">{h.title}</h4>
                  <p className="mt-2 text-sm text-muted">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-2">
            {["Problem-Solver", "Design Thinker", "Systems Mind", "Quote Collector"].map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;