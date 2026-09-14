// Featured projects grid — data comes from data/portfolioData.js.
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";
import Badge from "./ui/Badge.jsx";
import { projects, profile } from "../data/portfolioData.js";

const ProjectCard = ({ project, index }) => {
  // Track cursor position for the spotlight hover glow.
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={(index % 2) * 0.1} className="h-full">
      <article
        onMouseMove={handleMove}
        className="spotlight-card card-surface group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent-hunter/50 hover:shadow-glow"
      >
        {/* Cursor-follow glow */}
        <div className="spotlight pointer-events-none absolute inset-0 z-10" aria-hidden="true" />

        {/* Placeholder screenshot — swap the image URL in data/portfolioData.js */}
      <div className="relative aspect-video overflow-hidden border-b border-card">
        {project.image && project.image !== "[ADD_LINK_HERE]" ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-base-700">
            <div className="absolute inset-0 bg-accent-gradient opacity-20 transition-opacity duration-500 group-hover:opacity-30" />
            <span className="font-display text-5xl font-bold text-primary/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-accent-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow-sm">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold transition-colors group-hover:text-accent-cream">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-card pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent-terracotta"
            >
              Live Demo <FiExternalLink aria-hidden="true" />
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-primary"
          >
            <FiGithub aria-hidden="true" /> Source
          </a>
        </div>
      </div>
    </article>
    </Reveal>
  );
};

const Projects = () => (
  <section id="projects" className="section">
    <div className="container-x">
      <SectionHeading
        kicker="Projects"
        title="Selected work"
        subtitle="Products and experiments built with intent — interfaces, systems and everything in between."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-card-strong px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-terracotta/60 hover:bg-accent-terracotta/10"
        >
          <FiGithub aria-hidden="true" /> More on GitHub
        </a>
      </Reveal>
    </div>
  </section>
);

export default Projects;