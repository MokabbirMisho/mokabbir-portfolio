function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h2 className="section-title">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-sky-500" />
      {subtitle && (
        <p className="mt-5 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
