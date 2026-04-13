"use client";

import { useState } from "react";
import Button from "@/components/Button";
import ProjectBlock from "@/components/ProjectBlock";
import Section from "@/components/Section";

const featuredProjects = [
  {
    title: "LMS (Learning Management System)",
    description:
      "Production-grade LMS used by 50,000+ users with real-time classes and AI-powered learning support.",
    videoEmbedUrl: "https://www.youtube.com/embed/ksqYR32UbuI",
    points: [
      "Built full-stack system using Next.js, Node.js (TypeScript), PostgreSQL, Redis",
      "Implemented multi-currency payments (Razorpay, PayPal) with idempotent workflows",
      "Real-time live classes and engagement systems",
      "LangChain-based RAG AI chatbot for contextual learning",
      "AWS infrastructure, CI/CD pipelines, performance optimization",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "AWS",
      "LangChain",
    ],
  },
  {
    title: "AVANI (AI Mock Interviewer)",
    description:
      "Real-time AI-powered mock interview platform generating personalized interviews from resumes.",
    videoEmbedUrl: "https://www.youtube.com/embed/QqcK-Xbn6lY",
    points: [
      "Resume parsing + structured data extraction",
      "LLM-based dynamic question generation",
      "WebSocket-based real-time interview sessions",
      "Live coding prompts + streaming feedback",
      "Automated evaluation pipelines",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "LLMs",
    ],
  },
];

const moreProjects = [
  {
    title: "Bytes — Short Form Learning Platform",
    points: [
      "Built video-based learning system with FFmpeg pipelines",
      "Video compression, transcoding, thumbnail generation",
      "Full-stack with Node.js, PostgreSQL, Redis",
    ],
    techStack: ["Node.js", "PostgreSQL", "Redis", "FFmpeg", "Next.js"],
  },
  {
    title: "AI Job Platform",
    points: [
      "Scraped job listings and built semantic search",
      "Vector embeddings for jobs and profiles",
    ],
    techStack: ["Node.js", "LLMs", "Vector DB"],
  },
  {
    title: "AI Internship Portal",
    points: [
      "Automated project generation and scoring",
      "Human-in-the-loop evaluation",
    ],
    techStack: ["Node.js", "AI pipelines"],
  },
  {
    title: "AI Blog Platform",
    points: ["Automated content generation and publishing workflows"],
    techStack: ["LLMs", "Node.js"],
  },
];

export default function Home() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <main className="mx-auto w-full max-w-[750px] px-6 py-24 text-left sm:py-32">
      <header className="py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Saurabh Suryavanshi
        </h1>
        <p className="mt-6 text-2xl font-semibold tracking-tight text-gray-900">
          I build scalable backend systems & AI products.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
          Backend-focused fullstack engineer working on AI-powered systems,
          real-time applications, and scalable architectures.
        </p>
        <p className="mt-4 text-sm text-gray-500">Mumbai, India</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#selected-work">View Work</Button>
          <Button href="https://github.com/hitmxn30" external variant="text">
            GitHub
          </Button>
        </div>
      </header>

      <Section id="selected-work" title="Selected Work">
        {featuredProjects.map((project) => (
          <ProjectBlock
            key={project.title}
            title={project.title}
            description={project.description}
            videoEmbedUrl={project.videoEmbedUrl}
            points={project.points}
            techStack={project.techStack}
          />
        ))}
      </Section>

      <Section title="More Projects">
        <button
          type="button"
          onClick={() => setShowMoreProjects((prev) => !prev)}
          className="inline-flex items-center border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition-opacity hover:opacity-70"
          aria-expanded={showMoreProjects}
          aria-controls="more-projects-content"
        >
          {showMoreProjects ? "Hide More Projects" : "View More Projects"}
        </button>

        <div
          id="more-projects-content"
          className={`overflow-hidden transition-all duration-300 ease-out ${
            showMoreProjects ? "mt-8 max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-10 border-t border-gray-200 pt-8">
            {moreProjects.map((project) => (
              <article key={project.title}>
                <h3 className="text-xl font-semibold tracking-tight text-gray-950">
                  {project.title}
                </h3>
                <ul className="mt-4 space-y-2 text-base leading-7 text-gray-600">
                  {project.points.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-medium text-gray-500">
                  {project.techStack.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Skills">
        <div className="space-y-6">
          <p className="text-base leading-7 text-gray-600">
            <span className="font-medium text-gray-900">Languages:</span>{" "}
            TypeScript, JavaScript
          </p>
          <p className="text-base leading-7 text-gray-600">
            <span className="font-medium text-gray-900">Frameworks:</span>{" "}
            Node.js, Express.js, Next.js, React.js, React Native, LangChain,
            LangGraph
          </p>
          <p className="text-base leading-7 text-gray-600">
            <span className="font-medium text-gray-900">Databases:</span>{" "}
            PostgreSQL, MySQL, MongoDB, Redis
          </p>
          <p className="text-base leading-7 text-gray-600">
            <span className="font-medium text-gray-900">Tools:</span> Docker,
            Git, AWS
          </p>
        </div>
      </Section>

      <Section title="Contact" className="pb-24 sm:pb-32">
        <div className="space-y-4 text-base leading-7 text-gray-600">
          <p>
            <span className="font-medium text-gray-900">Email:</span>{" "}
            <a
              href="mailto:saurabhlm10@gmail.com"
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              saurabhlm10@gmail.com
            </a>
          </p>
          <p>
            <span className="font-medium text-gray-900">Phone:</span> +91
            8879522628
          </p>
          <p>
            <span className="font-medium text-gray-900">GitHub:</span>{" "}
            <a
              href="https://github.com/hitmxn30"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              github.com/hitmxn30
            </a>
          </p>
          <p>
            <span className="font-medium text-gray-900">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/saurabh-suryavanshi-b77a81148"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              linkedin.com/in/saurabh-suryavanshi-b77a81148
            </a>
          </p>
        </div>
        <p className="mt-10 text-base font-medium text-gray-900">
          Open to backend and AI-focused opportunities.
        </p>
      </Section>
    </main>
  );
}
