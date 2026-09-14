// Skills — categorized cards with animated progress bars (Framer Motion), including ML focus.
import { motion } from "framer-motion";
import {
  FiLayout,
  FiServer,
  FiDatabase,
  FiSmartphone,
  FiGitBranch,
  FiPenTool,
  FiCpu,
  FiTrendingUp,
} from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import { skillGroups, mlHighlights } from "../data/portfolioData.js";

const iconMap = {
  layout: FiLayout,
  server: FiServer,
  database: FiDatabase,
  mobile: FiSmartphone,
  architecture: FiGitBranch,
  design: FiPenTool,
};

const SkillCard = ({ group, index }) => {
  const Icon = iconMap[group.icon] || FiServer;
  return (
    <Reveal delay={(index % 3) * 0.1} className="h-full">
      <div className="card-surface group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-hunter/50 hover:shadow-glow-sm">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-glow-sm">
            <Icon aria-hidden="true" />
          </span>
          <h3 className="font-display text-base font-semibold">{group.title}</h3>
        </div>

        <ul className="space-y-4">
          {group.skills.map((skill, i) => (
            <li key={skill.name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-secondary">{skill.name}</span>
                <span className="text-xs text-muted">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-subtle">
                <motion.div
                  className="h-full rounded-full bg-accent-gradient"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

const Skills = () => (
  <section id="skills" className="section">
    <div className="container-x">
      <SectionHeading
        kicker="Skills"
        title="What I work with"
        subtitle="A full-stack toolkit spanning interfaces, systems, data and design."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.title} group={group} index={index} />
        ))}
      </div>

      {/* ML — folded into Skills */}
      <div className="mt-20">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-card bg-subtle px-4 py-1.5 text-xs font-medium text-accent-terracotta">
              <FiCpu aria-hidden="true" /> Machine Learning
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">Where I'm heading next</h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              ML isn't a random detour — it's the same math, logic and problem-solving I already build with, applied to data.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {mlHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="h-full">
              <div className="card-surface group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-hunter/50 hover:shadow-glow-sm">
                <FiCpu
                  className="absolute -right-4 -top-4 text-7xl text-accent-hunter/10 transition-transform duration-500 group-hover:rotate-12"
                  aria-hidden="true"
                />
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent-terracotta/30 bg-accent-terracotta/10 text-accent-terracotta">
                  <FiTrendingUp aria-hidden="true" />
                </span>
                <h4 className="font-display text-base font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Placeholder for an ML demo/notebook — swap the URL below */}
        <Reveal className="mt-12">
          <div className="card-surface relative overflow-hidden p-8 text-center md:p-10">
            <div className="absolute inset-0 bg-accent-gradient opacity-10" />
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-bold md:text-2xl">Coming soon: ML experiments</h4>
              <p className="mx-auto mt-3 max-w-xl text-muted">
                I'm currently working on a small ML concept demo — a notebook that applies the math foundation above to a
                real, fun dataset. Placeholder until it ships.
              </p>
              <a
                href="https://github.com/IAParfaite"
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-accent-terracotta/40 bg-accent-terracotta/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-terracotta/20"
              >
                Follow my ML journey
              </a>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Skills;