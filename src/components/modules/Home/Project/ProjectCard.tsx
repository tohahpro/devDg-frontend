"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import {
    CardBody,
    CardContainer,
    CardItem,
} from "@/components/shared/3d-card";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types/projects.interface";

interface ProjectCardProps {
    project: IProject;
    index?: number;
}

const ProjectCard = ({
    project,
    index = 0,
}: ProjectCardProps) => {
    const techStack = project.techStack
        ? project.techStack
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [];

    const projectDetailsUrl = `/projects/${project.slug}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "10px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex"
        >
            <CardContainer className="h-full w-full">
                <CardBody className="group/card relative flex h-full w-full flex-col gap-6 rounded-xl border border-black/10 bg-card p-6 text-card-foreground dark:border-white/20 dark:hover:shadow-2xl dark:hover:shadow-primary/10">
                    {/* Project Image */}
                    <Link
                        href={projectDetailsUrl}
                        className="block"
                    >
                        <CardItem
                            translateZ="100"
                            className="w-full"
                        >
                            {project.heroImage ? (
                                <Image
                                    src={project.heroImage}
                                    height={500}
                                    width={900}
                                    className="h-60 w-full rounded-md object-cover transition-shadow duration-300 group-hover/card:shadow-xl sm:h-72"
                                    alt={project.title}
                                />
                            ) : (
                                <div className="flex h-60 w-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground sm:h-72">
                                    No image available
                                </div>
                            )}
                        </CardItem>
                    </Link>

                    {/* Project Content */}
                    <div className="flex h-full w-full flex-col">
                        <Link
                            href={projectDetailsUrl}
                            className="w-fit"
                        >
                            <CardItem
                                translateZ="50"
                                className="text-2xl font-bold text-neutral-600 transition-colors hover:text-primary dark:text-white"
                            >
                                {project.title}
                            </CardItem>
                        </Link>

                        {project.description && (
                            <CardItem className="mt-2 line-clamp-3 text-base leading-7 text-neutral-500 dark:text-neutral-300">
                                {project.description}
                            </CardItem>
                        )}

                        {techStack.length > 0 && (
                            <CardItem className="mt-4 flex flex-wrap gap-2">
                                {techStack.slice(0, 5).map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </CardItem>
                        )}

                        <div className="grow" />

                        {/* Action Button */}
                        {project.liveLink && (
                            <div className="mt-6 flex gap-3">
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 cursor-pointer"
                                >
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="group h-11 w-full cursor-pointer rounded border-border bg-background font-medium transition-colors duration-300 hover:border-primary hover:bg-primary/5"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        Live Demo
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </CardBody>
            </CardContainer>
        </motion.div>
    );
};

export default ProjectCard;