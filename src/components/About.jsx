import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolioData";

function About() {
  const details = [
    ["Website", personalInfo.website],
    ["City", personalInfo.location],
    ["Degree", "Master's"],
    ["Email", personalInfo.email],
    ["GitHub", "MokabbirMisho"],
    ["Freelance", "Available"],
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950">
      <SectionTitle
        title="About"
        subtitle="I build practical, clean, and responsive web applications with strong attention to user experience and maintainable code."
      />

      <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card overflow-hidden p-0"
        >
          <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-7xl font-extrabold">
            <span className="bg-gradient-to-br from-sky-400 to-white bg-clip-text text-transparent">
              MM
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Full-Stack Web Developer
          </h3>

          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
            I am a developer with experience in frontend and backend
            development. My focus is creating websites and applications that are
            simple to use, responsive on every device, and built with clean
            structure.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {details.map(([label, value]) => (
              <div key={label} className="flex gap-3">
                <span className="mt-0.5 font-bold text-sky-500">›</span>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {label}:
                  </span>{" "}
                  <span className="break-all text-slate-600 dark:text-slate-400">
                    {value}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 leading-8 text-slate-600 dark:text-slate-400">
            I enjoy working with React, Tailwind CSS, Node.js, Express, and
            MongoDB. My goal is to grow as a professional software developer and
            build products that solve real problems.
          </p>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn mt-8 inline-flex"
          >
            View GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
