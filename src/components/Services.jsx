import SectionTitle from "./SectionTitle";
import { services } from "../data/portfolioData";

function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-white dark:bg-slate-950"
    >
      <SectionTitle
        title="Services"
        subtitle="What I can help with as a web developer."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="card p-8 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-xl font-bold text-white">
              {index + 1}
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {service.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
