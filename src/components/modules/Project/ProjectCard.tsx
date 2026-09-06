import { IProject } from "@/types/projects.interface";
import { Check } from "lucide-react";
import Image from "next/image";



export function ProjectCard({
    project,
}: {
    project: IProject;
}) {
    return (
        <article
            className="
        group
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        p-4
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-200
        hover:shadow-xl
        hover:shadow-violet-100/60
      "
        >
            <div className="grid h-full gap-6 md:grid-cols-12 md:items-center">
                {/* Image */}
                <div className="md:col-span-7">
                    <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-violet-50">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="
                object-cover
                transition-transform duration-500
                group-hover:scale-[1.02]
              "
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex h-full flex-col md:col-span-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.categories.map((category) => (
                            <span
                                key={category}
                                className="
                  rounded-full
                  bg-violet-50
                  px-3 py-1
                  text-xs
                  font-semibold
                  text-violet-600
                "
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    <h2 className="mt-4 text-2xl font-black tracking-tight">
                        {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                        {project.description}
                    </p>

                    <div className="mt-5 space-y-3">
                        {project.features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3"
                            >
                                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white">
                                    <Check
                                        className="size-3"
                                        strokeWidth={3}
                                    />
                                </span>

                                <span className="text-sm text-slate-600">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* <Link
                        href="#"
                        className="
              group/link
              mt-auto
              flex items-center gap-2
              pt-6
              text-sm
              font-bold
              text-violet-600
            "
                    >
                        View Case Study

                        <ArrowRight
                            className="
                size-4
                transition-transform duration-300
                group-hover/link:translate-x-1
              "
                        />
                    </Link> */}
                </div>
            </div>
        </article>
    );
}