import SectionTitle from "./SectionTitle";
import { education, experiences } from "../data/portfolioData";

function TimelineItem({ title, subtitle, period, points }) {
  return (
    <div className="relative border-l-2 border-sky-200 pb-10 pl-8 dark:border-sky-900">
      <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-sky-500 bg-white dark:bg-slate-950" />

      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </h4>

      <p className="mt-1 font-medium text-slate-600 dark:text-slate-400">
        {subtitle}
      </p>

      <span className="mt-3 inline-block rounded bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
        {period}
      </span>

      {points && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-400">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Resume() {
  return (
    <section id="resume" className="section-padding bg-white dark:bg-slate-950">
      <SectionTitle
        title="Resume"
        subtitle="A short overview of my education, professional experience, and development journey."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Education
          </h3>

          {education.map((item) => (
            <TimelineItem
              key={item.degree}
              title={item.degree}
              subtitle={item.institution}
              period={item.period}
            />
          ))}
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Professional Experience
          </h3>

          {experiences.map((item) => (
            <TimelineItem
              key={item.role}
              title={item.role}
              subtitle={item.company}
              period={item.period}
              points={item.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
