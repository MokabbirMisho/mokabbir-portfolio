import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

const categoryColor = {
  Frontend: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  MERN: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  "Full Stack":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  "Full Stack SaaS":
    "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300",
};

function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: Math.min(index * 0.08, 0.32), duration: 0.4 }}
      className="group relative flex min-h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_24px_55px_rgba(14,165,233,0.14)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-sky-900"
    >
      <div className="absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-sky-400/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-900 to-sky-950">
        {!imgError ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} project preview`}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-5xl font-black text-white/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-40" />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${
            categoryColor[project.category] ??
            "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          {project.category}
        </span>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} live demo`}
          className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition duration-300 hover:bg-sky-500 hover:text-white focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-4 focus:ring-sky-300/50 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <FaExternalLinkAlt size={13} />
        </a>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap content-start gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 focus:outline-none focus:text-sky-600 dark:text-slate-400 dark:hover:text-white"
          >
            <FaGithub size={17} /> Source code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-2 text-sm font-bold text-sky-600 transition hover:gap-3 hover:text-sky-700 focus:outline-none focus:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300"
          >
            Live demo <FaArrowRight size={12} />
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

      <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
