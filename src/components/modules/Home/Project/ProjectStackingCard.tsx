"use client";

import Image from "next/image";
import Link from "next/link";
import {
    motion,
    MotionValue,
    useTransform,
} from "framer-motion";
import {
    ArrowUpRight,
    ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { IProject } from "@/types/projects.interface";

interface ProjectStackingCardProps {
    project: IProject;
    index: number;
    progress?: MotionValue<number>;
    range?: [number, number];
    targetScale?: number;
    disableAnimation?: boolean;
}

const projectThemes = [
    {
        card: "bg-[#eef1ff] dark:bg-[#171926]",
        image: "bg-[#dce2ff] dark:bg-[#24283d]",
        badge:
            "bg-[#7184ff]/12 text-[#5268e8] dark:bg-[#7184ff]/15 dark:text-[#aab5ff]",
    },
    {
        card: "bg-[#fff1ef] dark:bg-[#211817]",
        image: "bg-[#ffe0dc] dark:bg-[#382321]",
        badge:
            "bg-[#ff8175]/12 text-[#d85b50] dark:bg-[#ff8175]/15 dark:text-[#ffaaa2]",
    },
    {
        card: "bg-[#fff8e7] dark:bg-[#211e16]",
        image: "bg-[#fff0c7] dark:bg-[#37301e]",
        badge:
            "bg-[#f7b63d]/12 text-[#b77913] dark:bg-[#f7b63d]/15 dark:text-[#ffd577]",
    },
    {
        card: "bg-[#eafaf7] dark:bg-[#14201e]",
        image: "bg-[#d3f4ef] dark:bg-[#203532]",
        badge:
            "bg-[#19bda9]/12 text-[#138f80] dark:bg-[#19bda9]/15 dark:text-[#7be5d8]",
    },
    {
        card: "bg-[#edf8ff] dark:bg-[#152029]",
        image: "bg-[#d8f0fb] dark:bg-[#203541]",
        badge:
            "bg-[#36aee2]/12 text-[#2184af] dark:bg-[#36aee2]/15 dark:text-[#82d7f7]",
    },
];

const ProjectStackingCard = ({
    project,
    index,
    progress,
    range,
    targetScale,
    disableAnimation = false,
}: ProjectStackingCardProps) => {
    // Only create a MotionValue for scale when progress, range and targetScale are provided.
    // Otherwise fallback to a static scale of 1 to avoid passing an invalid value to useTransform.
    const scale =
        progress && range && typeof targetScale === "number"
            ? useTransform(progress, range, [1, targetScale])
            : 1;

    const projectDetailsUrl = `/projects/${project.slug}`;

    const techStack = project.techStack
        ? project.techStack
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [];

    const theme =
        projectThemes[index % projectThemes.length];

    const stackGap = 37;
    const stickyTop = 140;

    return (
        <div
            className="sticky flex items-start justify-center"
            style={{
                top: disableAnimation ? undefined : `${stickyTop}px`,
                zIndex: index + 1,
            }}
        >
            <motion.div
                style={{
                    scale,
                    top: disableAnimation ? 0
                        : `${index * stackGap}px`,
                    transformOrigin: "top center",
                }}
                className="relative w-full origin-top mb-20"
            >
                <article
                    aria-labelledby={`project-title-${project.id}`}
                    className={`relative grid w-full gap-5 overflow-hidden rounded-2xl border border-black/[0.07] 
                        shadow-[0_20px_60px_rgba(15,23,42,0.14)] ring-1 ring-white/50 dark:border-white/8 
                        dark:shadow-[0_24px_70px_rgba(0,0,0,0.38)] dark:ring-white/4 
                        md:grid-cols-[0.92fr_1.08fr] md:gap-6 p-5 ${theme.card}`}
                >
                    {/* Content */}
                    <div className="relative z-10 order-2 flex min-w-0 flex-col md:order-1">
                        {project.category && (
                            <p
                                className={`w-fit rounded-md px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] sm:px-3 sm:py-1.5 sm:text-[10px] lg:text-xs ${theme.badge}`}
                            >
                                {project.category}
                            </p>
                        )}

                        <Link
                            href={projectDetailsUrl}
                            className="mt-3 w-fit"
                        >
                            <h3
                                id={`project-title-${project.id}`}
                                className="text-2xl font-black leading-[1.05] tracking-[-0.035em] text-slate-950 transition-colors duration-300 hover:text-primary dark:text-white sm:text-3xl md:text-[30px] lg:text-4xl xl:text-[40px]"
                            >
                                {project.title}
                            </h3>
                        </Link>

                        {project.description && (
                            <p className="mt-3 line-clamp-2 max-w-xl text-sm leading-6 text-slate-700/80 dark:text-white/65 sm:line-clamp-3 lg:text-base lg:leading-7">
                                {project.description}
                            </p>
                        )}

                        {techStack.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {techStack.slice(0, 5).map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded border border-black/[0.07] bg-white/60 px-2.5 py-1 text-[10px] font-semibold text-slate-700 shadow-sm backdrop-blur-md dark:border-white/8 dark:bg-white/6 dark:text-white/75"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <dl className="mt-5 grid grid-cols-2 gap-5 border-t border-black/10 pt-4 dark:border-white/10">
                            <div>
                                <dt className="text-xs text-slate-500 dark:text-white/50">
                                    Duration
                                </dt>

                                <dd className="mt-1 text-base font-semibold text-slate-950 dark:text-white lg:text-lg">
                                    {project.duration || "Not specified"}
                                </dd>
                            </div>

                            <div>
                                <dt className="text-xs text-slate-500 dark:text-white/50">
                                    Status
                                </dt>

                                <dd className="mt-1 text-base font-semibold text-slate-950 dark:text-white lg:text-lg">
                                    {project.status || "Completed"}
                                </dd>
                            </div>
                        </dl>

                        <div className="grow" />

                        {project.liveLink && (
                            <div className="mt-6">
                                <Button
                                    className="group h-11 w-full rounded-lg bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
                                >
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                    >
                                        Live Demo

                                        <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Image */}
                    <Link
                        href={projectDetailsUrl}
                        aria-label={`View ${project.title} project details`}
                        className={`relative order-1 overflow-hidden rounded-xl border border-white/60 shadow-[0_16px_45px_rgba(15,23,42,0.14)] ring-1 ring-black/4 md:order-2 ${theme.image}`}
                    >
                        <div className="relative aspect-video h-full w-full">
                            {project.heroImage ? (
                                <Image
                                    src={project.heroImage}
                                    alt={`${project.title} project interface preview`}
                                    fill
                                    priority={index === 0}
                                    sizes="(max-width:768px)100vw,(max-width:1024px)55vw,55vw"
                                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-sm text-slate-600 dark:text-white/60">
                                    No image available
                                </div>
                            )}

                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
                        </div>
                    </Link>
                </article>
            </motion.div>
        </div>
    );
};

export default ProjectStackingCard;