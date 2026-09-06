import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProjectCTAProps = {
    eyebrow?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
};

export default function ProjectCTA({
    eyebrow = "Have a project in mind?",
    title = "Let's build something great together.",
    description = "Tell us about your project and we'll help you find the right solution.",
    buttonText = "Start a Project",
    buttonHref = "/contact",
}: ProjectCTAProps) {
    return (
        <section className="relative overflow-hidden bg-linear-to-r from-violet-600 via-indigo-600 to-indigo-900 text-white">
            {/* Decorative shape */}
            <div className="pointer-events-none absolute -bottom-24 -right-12 size-72 rounded-full border-[3rem] border-[#ff7c70]/80" />

            <div className="container relative mx-auto flex flex-col justify-between gap-10 px-6 py-14 lg:flex-row lg:items-center lg:px-8">
                {/* Content */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/80">
                        {eyebrow}
                    </p>

                    <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                        {title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                        {description}
                    </p>
                </div>

                {/* CTA */}
                <Link
                    href={buttonHref}
                    className="
            group
            relative z-10
            inline-flex items-center justify-center gap-3
            self-start
            rounded-xl bg-white
            px-8 py-4
            text-sm font-bold text-violet-600
            shadow-xl
            transition-all duration-300
            hover:-translate-y-0.5
            hover:shadow-2xl
            lg:self-center
          "
                >
                    {buttonText}

                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}