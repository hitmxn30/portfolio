type ProjectBlockProps = {
  title: string;
  description?: string;
  videoEmbedUrl?: string;
  points: string[];
  techStack: string[];
  featured?: boolean;
};

export default function ProjectBlock({
  title,
  description,
  videoEmbedUrl,
  points,
  techStack,
  featured = false,
}: ProjectBlockProps) {
  return (
    <article className="py-8 sm:py-10">
      <h3
        className={`font-semibold tracking-tight text-gray-950 ${
          featured
            ? "text-2xl text-indigo-900 sm:text-3xl"
            : "text-xl sm:text-2xl"
        }`}
      >
        {title}
      </h3>
      {description ? (
        <p className="mt-3 text-base leading-7 text-gray-600">{description}</p>
      ) : null}

      {videoEmbedUrl ? (
        <div className="mt-6 overflow-hidden border border-gray-200">
          <iframe
            title={`${title} video`}
            src={videoEmbedUrl}
            className="aspect-video w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : null}

      <ul className="mt-6 space-y-2 text-base leading-7 text-gray-600">
        {points.map((point) => (
          <li key={point}>- {point}</li>
        ))}
      </ul>

      <p className="mt-6 text-sm font-medium text-gray-500">
        {techStack.join(" · ")}
      </p>
    </article>
  );
}
