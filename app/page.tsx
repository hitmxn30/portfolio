"use client";

import Button from "@/components/Button";
import ProjectBlock from "@/components/ProjectBlock";
import Section from "@/components/Section";

export default function Home() {
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
          <Button href="#experience">View Work</Button>
          <Button href="https://github.com/hitmxn30" external variant="text">
            GitHub
          </Button>
        </div>
      </header>

      <Section id="experience" title="Experience">
        <div className="ml-2 border-l border-gray-200">
          <article className="relative py-16 pl-8">
            <span className="absolute -left-[7px] top-20 h-3.5 w-3.5 rounded-full border border-gray-300 bg-white" />
            <p className="text-sm text-gray-500">Mar 2024 – Jan 2026</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950">
              EURON
            </h3>
            <p className="mt-2 text-base font-medium text-gray-800">
              Software Development Engineer - 2 (Founding Engineer)
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Built and scaled a production-grade AI-powered learning platform
              used by 50,000+ users.
            </p>

            <div className="mt-10 border-t border-gray-200">
              <ProjectBlock
                featured
                title="LMS (Learning Management System)"
                description="Production-grade LMS used by 50,000+ users with real-time classes and AI-powered learning."
                videoEmbedUrl="https://www.youtube.com/embed/ksqYR32UbuI"
                points={[
                  "Full-stack system with Next.js, Node.js (TypeScript), PostgreSQL, Redis",
                  "Multi-currency payments (Razorpay, PayPal) with idempotent workflows",
                  "Real-time live classes and engagement systems",
                  "LangChain-based RAG chatbot",
                  "AWS infra, CI/CD, performance optimization",
                ]}
                techStack={[
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                  "Redis",
                  "AWS",
                  "LangChain",
                ]}
              />
            </div>

            <div className="border-t border-gray-200">
              <ProjectBlock
                featured
                title="AVANI (AI Mock Interviewer)"
                description="AI-powered mock interviewer generating real-time personalized interviews."
                videoEmbedUrl="https://www.youtube.com/embed/QqcK-Xbn6lY"
                points={[
                  "Resume parsing + structured extraction",
                  "LLM-based dynamic question generation",
                  "WebSocket real-time interview system",
                  "Live coding + streaming feedback",
                  "Automated evaluation pipelines",
                ]}
                techStack={[
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                  "WebSockets",
                  "LLMs",
                ]}
              />
            </div>

            <div className="border-t border-gray-200">
              <ProjectBlock
                title="Bytes"
                points={[
                  "Built short-form video learning platform",
                  "FFmpeg pipelines for compression, transcoding, thumbnails",
                  "Full-stack architecture",
                ]}
                techStack={["Node.js", "PostgreSQL", "Redis", "FFmpeg", "Next.js"]}
              />
            </div>

            <div className="border-t border-gray-200">
              <ProjectBlock
                title="AI Job Platform"
                points={[
                  "Aggregated job listings via scraping",
                  "Vector embeddings + semantic search",
                  "Personalized job feed",
                ]}
                techStack={["Node.js", "LLMs", "Vector DB"]}
              />
            </div>

            <div className="border-t border-gray-200">
              <ProjectBlock
                title="AI Internship Portal"
                points={[
                  "Automated project generation and scoring",
                  "Human-in-the-loop validation system",
                ]}
                techStack={["Node.js", "AI pipelines"]}
              />
            </div>

            <div className="border-t border-gray-200">
              <ProjectBlock
                title="AI Blog Platform"
                points={["Automated content generation and publishing workflows"]}
                techStack={["LLMs", "Node.js"]}
              />
            </div>
          </article>

          <article className="relative py-16 pl-8">
            <span className="absolute -left-[7px] top-20 h-3.5 w-3.5 rounded-full border border-gray-300 bg-white" />
            <p className="text-sm text-gray-500">Jan 2023 – Feb 2024</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950">
              INEURON
            </h3>
            <p className="mt-2 text-base font-medium text-gray-800">
              Software Development Engineer - 1
            </p>
            <div className="mt-10 border-t border-gray-200">
              <ProjectBlock
                title="Zoom Integration for LMS"
                points={[
                  "Integrated Zoom for live lectures",
                  "Improved engagement and reduced piracy",
                  "Built using Next.js, Node.js, MongoDB",
                ]}
                techStack={["Next.js", "Node.js", "Express", "MongoDB"]}
              />
            </div>
            <div className="border-t border-gray-200">
              <ProjectBlock
                title="Support Community Portal"
                points={[
                  "Built student community system with messaging and video features",
                  "Improved engagement through peer interaction",
                ]}
                techStack={["Node.js", "Express", "MongoDB", "Redis", "AWS"]}
              />
            </div>
          </article>
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
