type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  description,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`border-t border-gray-200 py-24 ${className}`}>
      {title ? (
        <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
          {description}
        </p>
      ) : null}
      <div className={title || description ? "mt-10" : ""}>{children}</div>
    </section>
  );
}
