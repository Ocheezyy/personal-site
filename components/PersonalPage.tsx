import Link from "next/link";
import Image from "next/image";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter
} from "@/components/ui/card";
import { DownloadCloud } from "lucide-react";
import ContactForm from "./ContactForm";
import { projects } from "@/Projects";

export function PersonalPage() {
  const formsAccessKey = process.env.FORMS_ACCESS_KEY!;

  return (
    <div className="flex flex-col min-h-[100dvh] dark">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-gray-50">
        <Link className="flex items-center justify-center" href="#">
          <CodeIcon className="h-6 w-6 text-gray-50" />
          <span className="sr-only">Sean O&apos;Donnell</span>
        </Link>
      </header>
      <main className="bg-gray-900 text-gray-50">
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square bg-gray-50"
                height="550"
                src="/headshot.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-50">
                    Sean O&apos;Donnell
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Hi, I&apos;m Sean, a passionate web developer with expertise
                    across the entire stack.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                    href="/Sean_ODonnell_Resume.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <DownloadCloud />
                    &nbsp; Resume
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                    href="#contact"
                  >
                    Contact Me
                  </Link>
                  <div className="flex space-x-4 mt-2">
                    <Link
                      href="https://github.com/Ocheezyy"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GithubIcon className="h-6 w-6 text-gray-50" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/sean-odonnell-06a29b0/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <LinkedinIcon className="h-6 w-6 text-gray-50" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
                  Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">
                  Technical Proficiencies
                </h2>
              </div>
              <div className="mx-auto grid max-w-4xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-gray-50">Front-end</h3>
                  <p className="text-sm text-gray-400">
                    HTML, CSS, JavaScript, React, Vue, Tailwind
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-gray-50">Back-end</h3>
                  <p className="text-sm text-gray-400">
                    Node.js, Bun, Express, Next, Python, Django, Flask, .NET, C#
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-gray-50">Databases</h3>
                  <p className="text-sm text-gray-400">
                    MySQL, PostgreSQL, SQL Server, SQLite, MongoDB
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-gray-50">Cloud</h3>
                  <p className="text-sm text-gray-400">
                    AWS, DigitalOcean, Heroku, Vercel
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-gray-50">Tools</h3>
                  <p className="text-sm text-gray-400">
                    Git, Docker, Webpack, Babel, Jest, Postman
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-gray-50">Other</h3>
                  <p className="text-sm text-gray-400">
                    Agile, Scrum, JIRA, GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
                  Work History
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">
                  Professional Experience
                </h2>
              </div>
              <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-gray-800 text-gray-50">
                  <CardHeader>
                    <CardTitle>Laborworx</CardTitle>
                    <CardDescription>Software Engineer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">08/2022 - Current</p>
                    {/* <p className="text-sm text-gray-400">Brief description of your role and responsibilities.</p> */}
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 text-gray-50">
                  <CardHeader>
                    <CardTitle>Hunter Liberty</CardTitle>
                    <CardDescription>Software Engineer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">04/2021 - 08/2022</p>
                    {/* <p className="text-sm text-gray-400">Brief description of your role and responsibilities.</p> */}
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 text-gray-50">
                  <CardHeader>
                    <CardTitle>AVS Underwriting</CardTitle>
                    <CardDescription>Jr. Software Developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-400">07/2019 - 04/2021</p>
                    {/* <p className="text-sm text-gray-400">Brief description of your role and responsibilities.</p> */}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* TODO: Add fun projects here :) */}
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center" id="projects">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">My Personal Projects</h2>
              </div>
              <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, projectIdx) => (
                    <Card key={`project-${projectIdx}`} className="bg-gray-800 text-gray-50">
                      <CardHeader>
                        <CardTitle className="text-gray-50">{project.title}</CardTitle>
                        <CardDescription className="text-gray-400">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Image
                            alt={`${project.title}-preview-image`}
                            className="aspect-video overflow-hidden rounded-lg object-cover bg-gray-50"
                            height="225"
                            src={project.imageUrl}
                            width="400"
                        />
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIdx) => (
                          <span key={`${projectIdx}-tech-${techIdx}`} className="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-medium text-gray-50">
                            {tech}
                          </span>
                        ))}
                      </div>
                      </CardContent>
                      <CardFooter className="flex justify-between gap-2">
                        <Link
                            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 flex-1"
                            href={project.appUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          Live Demo
                        </Link>
                        <Link
                            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 flex-1"
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          <GithubIcon className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center"
          id="contact"
        >
          <div className="container px-4 md:px-6">
            <ContactForm formsAccessKey={formsAccessKey} />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-900 text-gray-400">
        <p className="text-xs">
          © 2024 Sean O&apos;Donnell. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {/* <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms
          </Link> */}
        </nav>
      </footer>
    </div>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
