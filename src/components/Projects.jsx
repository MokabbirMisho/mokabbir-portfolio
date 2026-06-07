import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

const categoryColor = {
  Frontend: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  MERN: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  "Full Stack": "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
};

function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
    >
      {/* ── Screenshot / Thumbnail ── */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-900 to-sky-950">
        {!imgError ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          /* Fallback if screenshot fails */
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-black text-white/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Dark overlay on hover — shows links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-900/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-400"
          >
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
          >
            <FaGithub size={14} /> GitHub
          </a>
        </div>

        {/* Category badge — top left */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow ${
            categoryColor[project.category] ?? "bg-slate-100 text-slate-700"
          }`}
        >
          {project.category}
        </span>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="mt-5 flex gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-sky-500 dark:text-slate-400"
          >
            <FaGithub size={15} /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-sky-500 transition hover:text-sky-600"
          >
            View Live <FaExternalLinkAlt size={11} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-slate-50 dark:bg-slate-900"
    >
      <SectionTitle
        title="Projects"
        subtitle="Selected projects showing my frontend, backend, and full-stack development skills."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
