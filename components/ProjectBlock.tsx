type ProjectBlockProps = {
  title: string;
  description: string;
  videoEmbedUrl?: string;
  points: string[];
  techStack: string[];
};

export default function ProjectBlock({
  title,
  description,
  videoEmbedUrl,
  points,
  techStack,
}: ProjectBlockProps) {
  return (
    <article className="py-12 first:pt-0 last:pb-0">
      <h3 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-gray-600">{description}</p>

      {videoEmbedUrl ? (
        <div className="mt-8 overflow-hidden border border-gray-200">
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

      <ul className="mt-8 space-y-2 text-base leading-7 text-gray-600">
        {points.map((point) => (
          <li key={point}>- {point}</li>
        ))}
      </ul>

      <p className="mt-8 text-sm font-medium text-gray-500">
        {techStack.join(" · ")}
      </p>
    </article>
  );
}
