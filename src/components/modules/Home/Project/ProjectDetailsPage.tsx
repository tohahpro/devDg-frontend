"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Activity,
  Calendar,
  CircleCheckBig,
  Code2,
  ExternalLink,
  Gauge,
  Layers3,
  Monitor,
  ShieldCheck,
  Sparkles,
  Star,
  TimerReset,
  Users,
  Zap,
} from "lucide-react";

import { IProject } from "@/types/projects.interface";
import ProjectGalleryCarousel from "./ProjectGalleryCarousel";

interface ProjectDetailsProps {
  projectData: IProject;
}

export default function ProjectDetails({
  projectData,
}: ProjectDetailsProps) {
  const project = projectData;

  const techStack = project.techStack
    ? project.techStack
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean)
    : [];


  const previewImages = [...(project.previewImages ?? [])].sort(
    (a, b) => Number(a.order) - Number(b.order)
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <article className="relative mx-auto container">
        {/* HERO */}
        <header className="relative border-b border-border/60 px-4 pt-10 md:px-6 lg:pt-14">
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-muted/70 via-background to-background" />

          <section className="grid items-center gap-10 py-16 lg:grid-cols-[1fr_0.65fr] lg:py-24">
            {/* LEFT */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                {project.isFeatured
                  ? "Featured Case Study"
                  : "Project Case Study"}
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border/70 bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
                <span className="bg-linear-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>

              {project.description && (
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                  {project.description}
                </p>
              )}

              {/* ACTION BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-4">
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Preview
                  </Link>
                )}

                {project.gitHubFrontend && (
                  <Link
                    href={project.gitHubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View frontend source code of ${project.title}`}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-6 py-2.5 text-sm font-semibold shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
                  >
                    <Code2 className="h-4 w-4" />
                    Frontend Link
                  </Link>
                )}
              </div>

              {/* INFO CARDS */}
              <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  {
                    label: "Category",
                    value: project.category || "Web Application",
                    icon: Layers3,
                  },
                  {
                    label: "Status",
                    value: project.status || "Completed",
                    icon: Monitor,
                  },
                  {
                    label: "Duration",
                    value: project.duration || "Not specified",
                    icon: TimerReset,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="group rounded-md border border-border/70 bg-card/70 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                    >
                      <dt className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon className="h-4 w-4 text-primary" />
                        {item.label}
                      </dt>

                      <dd className="text-sm font-bold">
                        {item.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-md bg-linear-to-br from-primary/20 via-purple-500/10 to-emerald-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-md border border-border/70 bg-card/80 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-4/5 overflow-hidden rounded-md lg:aspect-20/22">
                  {project.heroImage ? (
                    <Image
                      src={project.heroImage}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                      alt={project.title}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-muted text-sm text-muted-foreground">
                      No hero image available
                    </div>
                  )}
                </div>

                <div className="absolute bottom-6 left-6 right-6 rounded-md border border-white/20 bg-background/75 p-4 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        Project Quality
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        UI, Performance & UX Focused
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>

        {/* PROJECT STATS */}
        {project.projectState && (
          <section className="px-4 pt-14 md:px-6">
            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-linear-to-br from-card via-card to-primary/5 p-6 shadow-sm md:p-8">
              {/* Decorative blur */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />

              <div className="relative mb-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Project Performance
                </span>

                <h2 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">
                  Built for scale, speed and reliability
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                  A quick overview of the project&apos;s reach, performance and
                  availability.
                </p>
              </div>

              <div className="relative grid gap-4 md:grid-cols-3">
                {[
                  {
                    label: "Active Users",
                    value: project.projectState.users,
                    icon: Users,
                  },
                  {
                    label: "Performance",
                    value: project.projectState.performance,
                    icon: Gauge,
                  },
                  {
                    label: "Uptime",
                    value: project.projectState.uptime,
                    icon: Activity,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="group relative overflow-hidden rounded-xl border border-border/70 bg-background/75 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                    >
                      <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125" />

                      <div className="relative">
                        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>

                        <p className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
                          {item.value || "N/A"}
                        </p>

                        <p className="mt-2 text-sm font-medium text-muted-foreground">
                          {item.label}
                        </p>

                        <div className="mt-5 h-1 w-12 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* GALLERY */}
        {previewImages.length > 0 && (
          <section
            className="px-4 py-20 md:px-6"
            aria-labelledby="gallery-title"
          >
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Code2 className="h-3.5 w-3.5" />
                  Interface Preview
                </span>

                <h2
                  id="gallery-title"
                  className="text-3xl font-black tracking-tight md:text-4xl"
                >
                  Project Gallery
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                  A visual walkthrough of the interface, user flow, and
                  important screens designed for this project.
                </p>
              </div>
            </div>

            <ProjectGalleryCarousel
              images={previewImages}
              projectTitle={project.title}
            />
          </section>
        )}

        {/* FEATURES + CHALLENGES */}
        <section
          className="px-4 pb-20 md:px-6"
          aria-labelledby="details-title"
        >
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Development Breakdown
            </span>

            <h2
              id="details-title"
              className="text-3xl font-black tracking-tight md:text-4xl"
            >
              Features, Challenges & Solutions
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              A clear overview of what was built, what problems were
              solved, and how the final product became more useful.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* FEATURES */}
            <section className="rounded-md border border-border/70 bg-card/70 p-6 shadow-sm backdrop-blur-xl md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Key Features
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Main functionalities of this project
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {project.features?.map((feature) => (
                  <li
                    key={feature.id}
                    className="group flex gap-3 rounded-md border border-border/70 bg-background/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-accent/60"
                  >
                    <CircleCheckBig className="mt-1 h-5 w-5 shrink-0 text-primary" />

                    <p className="text-sm leading-7 text-muted-foreground">
                      {feature.name}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* CHALLENGES */}
            <section className="rounded-md border border-border/70 bg-card/70 p-6 shadow-sm backdrop-blur-xl md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Challenges & Solutions
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Practical problems solved during development
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {project.challenges?.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-md border border-border/70 bg-background/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-accent/60"
                  >
                    <h4 className="font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        {project.highlights &&
          project.highlights.length > 0 && (
            <section
              className="px-4 pb-20 md:px-6"
              aria-labelledby="highlights-title"
            >
              <div className="rounded-md border border-border/70 bg-linear-to-br from-card via-card to-muted/40 p-6 shadow-sm md:p-8">
                <div className="mb-8 max-w-2xl">
                  <span className="mb-3 inline-flex items-center gap-2 rounded bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Star className="h-3.5 w-3.5" />
                    Project Value
                  </span>

                  <h2
                    id="highlights-title"
                    className="text-3xl font-black tracking-tight"
                  >
                    Project Highlights
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Special improvements, polished details, and
                    value-added functionalities included in the final
                    work.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {project.highlights.map(
                    (highlight, index) => (
                      <div
                        key={highlight.id}
                        className="group relative overflow-hidden rounded-md border border-border/70 bg-background/70 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                      >
                        <div className="pointer-events-none absolute -bottom-8 -right-4 text-[8rem] font-black leading-none text-muted-foreground/10 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/10">
                          {String(index + 1)}
                        </div>

                        <div className="relative z-10 flex min-h-22 flex-col justify-end">
                          <span className="mb-3 h-1 w-10 rounded-full bg-primary/40 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />

                          <p className="text-sm font-semibold leading-7">
                            {highlight.name}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>
          )}

        {/* CTA */}
        <section className="px-4 pb-8 md:px-6">
          <div className="relative overflow-hidden rounded-md border border-border/70 bg-foreground p-8 text-background shadow-2xl md:p-10">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/30 blur-[90px]" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-[90px]" />

            <div className="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
              <div>
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-background/10 px-3 py-1 text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  Like this project?
                </p>

                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Let&apos;s build something better together.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-background/70">
                  Explore the live project, review the source code, or
                  use this case study as a reference for your next
                  digital product.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {project.gitHubFrontend && (
                  <Link
                    href={project.gitHubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-background/20 bg-background/10 px-6 py-3.5 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-background/20"
                  >
                    <Code2 className="h-4 w-4" />
                    Frontend GitHub
                  </Link>
                )}

                {project.gitHubBackend && (
                  <Link
                    href={project.gitHubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-background/20 bg-background/10 px-6 py-3.5 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-background/20"
                  >
                    <Code2 className="h-4 w-4" />
                    Backend GitHub
                  </Link>
                )}

                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}