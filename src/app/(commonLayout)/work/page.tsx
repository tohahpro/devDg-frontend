"use client";

import Image from "next/image";
import {
    ChevronDown,
} from "lucide-react";
import { useMemo, useState } from "react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ProjectCard } from "@/components/modules/Project/ProjectCard";

import { Category, IProject } from "@/types/projects.interface";
import WorkHero from "../../../assets/Images/work/work-Hero.png"
import BgHero from "../../../assets/Images/background/contact-bg.png"



const projects: IProject[] = [
    {
        title: "Nessa Foundation",
        description:
            "A modern website to support their mission and improve user engagement.",
        image: "https://res.cloudinary.com/dhafh03o6/image/upload/v1788680254/nessa_ezmccw.png",
        categories: ["Web Development", "UX/UI"],
        features: [
            "Modern & clean design",
            "Donation system integration",
            "Easy content management",
            "Mobile responsive",
        ],
        type: "Web Development",
    },
    {
        title: "E-commerce Brand",
        description:
            "A high-performing online store with a focus on conversion and user experience.",
        image: "https://res.cloudinary.com/dhafh03o6/image/upload/v1788680307/e-commerce_u3non6.png",
        categories: ["E-commerce", "Web Development"],
        features: [
            "Custom ecommerce development",
            "Product filtering & search",
            "Secure checkout integration",
            "Mobile-first design",
        ],
        type: "Web Development",
    },
    {
        title: "Local Business (SEO)",
        description:
            "Improved search visibility for a local business through technical and on-page optimization.",
        image: "https://res.cloudinary.com/dhafh03o6/image/upload/v1788680942/Local_SEO_tmy5au.png",
        categories: ["SEO", "Growth"],
        features: [
            "Technical SEO",
            "On-page optimization",
            "Local SEO",
            "Content strategy",
        ],
        type: "SEO",
    },
    {
        title: "Product Imaging Project",
        description:
            "5,000+ product images edited for an ecommerce store with consistent quality and fast turnaround.",
        image: "https://res.cloudinary.com/dhafh03o6/image/upload/v1788680723/imaging_i4fumk.png",
        categories: ["Product Photo Editing", "E-commerce"],
        features: [
            "Background removal",
            "Color correction",
            "Shadow creation",
            "Bulk image processing",
        ],
        type: "Product Photo Editing",
    },
    {
        title: "Corporate Website",
        description:
            "A professional website redesign for a growing company to better represent their brand and services.",
        image: "https://res.cloudinary.com/dhafh03o6/image/upload/v1788680601/corporate_a3vqxs.png",
        categories: ["Web Development", "Redesign"],
        features: [
            "Modern UI/UX",
            "Service-focused structure",
            "Performance optimization",
            "Easy content updates",
        ],
        type: "Web Development",
    },
    {
        title: "E-commerce SEO Growth",
        description:
            "Increased organic traffic and product visibility for an online store through content and technical SEO.",
        image: "https://res.cloudinary.com/dhafh03o6/image/upload/v1788680942/SEO_Growth_dzrr8t.png",
        categories: ["SEO", "Content"],
        features: [
            "Keyword research",
            "Product page optimization",
            "Content improvement",
            "Technical fixes",
        ],
        type: "SEO",
    },
];

const filters: Category[] = [
    "All",
    "Web Development",
    "SEO",
    "Product Photo Editing",
];

export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState<Category>("All");
    const [sort, setSort] = useState("Latest First");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects;

        return projects.filter((project) =>
            project.categories.includes(activeFilter)
        );
    }, [activeFilter]);

    return (
        <main className="bg-white text-[#111140]">
            {/*  HERO  */}
            <section className="relative isolate overflow-hidden pt-28 lg:pt-32">
                {/* BACKGROUND IMAGE */}
                <Image
                    src={BgHero}
                    alt=""
                    fill
                    priority
                    className="pointer-events-none absolute inset-0 z-0 object-cover object-center"
                />

                {/* CONTENT */}
                <div className="container relative z-10 mx-auto px-6 lg:px-8">
                    <div className="grid items-center gap-10 lg:grid-cols-12">

                        {/* LEFT */}
                        <div className="pb-10 lg:col-span-5 lg:pb-14">
                            <SectionLabel>Our Work</SectionLabel>

                            <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-[#111140] sm:text-6xl">
                                Real projects.

                                <span className="mt-1 block text-violet-600">
                                    Real outcomes.
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                                A selection of digital projects where strategy, design,
                                technology, search and visual content come together to solve
                                real business goals.
                            </p>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="relative self-end lg:col-span-7">
                            <div className="relative aspect-16/7 w-full translate-y-5  lg:translate-y-8">
                                <Image
                                    src={WorkHero}
                                    alt="Ideas into impact"
                                    fill
                                    priority
                                    className="object-contain object-bottom"
                                />
                            </div>

                            {/* RIGHT KEYWORDS */}
                            <div className="absolute right-3 top-10 hidden space-y-4 text-xs font-semibold uppercase tracking-widest text-indigo-900/80 xl:block">
                                <p>We Build</p>
                                <p>We Optimize</p>
                                <p>We Create</p>
                                <p>We Grow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  FILTER BAR  */}
            <section className="border-b border-slate-100 py-5">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                        {/* Filters */}
                        <div className="flex flex-wrap gap-3">
                            {filters.map((filter) => {
                                const active = activeFilter === filter;

                                return (
                                    <button
                                        key={filter}
                                        type="button"
                                        onClick={() => setActiveFilter(filter)}
                                        className={`
                      rounded-xl border px-5 py-3 text-sm font-medium
                      transition-all duration-300
                      ${active
                                                ? "border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-100"
                                                : "border-slate-200 bg-white text-[#111140] hover:border-violet-300 hover:text-violet-600"
                                            }
                    `}
                                    >
                                        {filter}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Sort */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-[#111140]">
                                Sort by
                            </span>

                            <div className="relative">
                                <select
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                                    className="
                    appearance-none
                    rounded-xl
                    border border-slate-200
                    bg-white
                    py-3 pl-5 pr-10
                    text-sm
                    font-medium
                    text-[#111140]
                    outline-none
                    transition
                    hover:border-violet-300
                    focus:border-violet-500
                  "
                                >
                                    <option>Latest First</option>
                                    <option>Oldest First</option>
                                    <option>A–Z</option>
                                    <option>Z–A</option>
                                </select>

                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-violet-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  PROJECT GRID */}
            <section className="py-8 lg:py-10">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid gap-5 lg:grid-cols-2">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA  */}

        </main>
    );
}

