import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skillCategories } from "../data/portfolioData";

const categoryColors = {
  Frontend: "bg-sky-50 border-sky-200 text-sky-700 dark:bg-sky-950/40 dark:border-sky-800 dark:text-sky-300",
  Backend: "bg-violet-50 border-violet-200 text-violet-700 dark:bg-violet-950/40 dark:border-violet-800 dark:text-violet-300",
  Database: "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300",
  "Tools & Other": "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300",
};

const headerColors = {
  Frontend: "text-sky-500",
  Backend: "text-violet-500",
  Database: "text-emerald-500",
  "Tools & Other": "text-amber-500",
};

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-slate-50 dark:bg-slate-900"
    >
      <SectionTitle
        title="Skills"
        subtitle="Technologies and tools I use to design, build, and maintain modern web applications."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="card p-6"
          >
            <h3 className={`mb-4 text-sm font-bold uppercase tracking-widest ${headerColors[group.category]}`}>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium ${categoryColors[group.category]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
