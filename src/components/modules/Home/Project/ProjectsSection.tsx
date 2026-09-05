"use client";

import {
  motion,
  useScroll,
} from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { IProject } from "@/types/projects.interface";
import ProjectStackingCard from "./ProjectStackingCard";

interface ProjectsSectionProps {
  projects: {
    data: IProject[];
  };
}

const ProjectsSection = ({
  projects,
}: ProjectsSectionProps) => {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const featuredProjects =
    projects?.data
      ?.filter(
        (project) => project.isFeatured
      )
      .slice(0, 5) ?? [];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative"
    >
      <div className="container mx-auto px-6 py-12 md:px-10 md:py-16">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h2 className="mb-4 font-bold tracking-tighter">
            Featured Projects
          </h2>

          <p className="max-w-150 text-muted-foreground">
            A selection of my recent work. I build scalable
            applications with a focus on user experience.
          </p>
        </motion.div>

        {featuredProjects.length > 0 && (
          <>
            {/* Mobile and Tablet */}
            <div className="block md:hidden mt-10 space-y-8 lg:hidden">
              {featuredProjects.map(
                (project, index) => (
                  <ProjectStackingCard
                    key={project.id}
                    project={project}
                    index={index}
                    progress={scrollYProgress}
                    range={[0, 1]}
                    targetScale={1}
                    disableAnimation
                  />
                )
              )}
            </div>

            {/* Stacking Animation: Mobile, Tablet and Desktop */}
            <main
              ref={containerRef}
              className="relative hidden mb-20 last:mb-0 md:flex w-full flex-col items-center justify-center pt-8 md:pt-10"
            >
              {featuredProjects.map((project, index) => {
                const targetScale = Math.max(
                  0.88,
                  1 -
                  (featuredProjects.length - index - 1) *
                  0.03
                );

                const rangeStart =
                  featuredProjects.length > 1
                    ? index / (featuredProjects.length - 1)
                    : 0;

                return (
                  <ProjectStackingCard
                    key={project.id}
                    project={project}
                    index={index}
                    progress={scrollYProgress}
                    range={[rangeStart, 1]}
                    targetScale={targetScale}
                  />
                );
              })}
            </main>
          </>
        )}

        {/* More Projects */}
        <div className="mt-4 flex justify-center lg:mt-2">
          <Link href="/projects">
            <Button className="group cursor-pointer rounded-md bg-primary px-8 py-5 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 dark:shadow-primary/25">
              More Projects

              <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;