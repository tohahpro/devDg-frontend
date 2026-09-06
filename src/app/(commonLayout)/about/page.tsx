
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BarChart3,
    Check,
    ChevronUp,
    Gem,
    Globe2,
    Heart,
    Layers3,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
    X,
    Zap,
} from "lucide-react";


import AboutHero from "../../../assets/Images/about/about-Hero.png";
import AboutWeAre from "../../../assets/Images/about/about-We_are.png";
import AboutTeam from "../../../assets/Images/about/about-Team.png";
import ProjectCTA from "@/components/shared/ProjectCTA";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function AboutPage() {

    return (
        <main className="overflow-hidden bg-white text-[#111140]">

            <section className="relative overflow-hidden bg-linear-to-br from-white via-white to-violet-50 pt-32 lg:pt-36">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid min-h-152 items-center gap-12 lg:grid-cols-12">

                        {/* LEFT CONTENT */}
                        <div className="relative z-10 lg:col-span-5">
                            <div className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-violet-600">
                                <span className="flex size-5 items-center justify-center rounded-md border border-violet-500">
                                    <ChevronUp className="size-3" />
                                </span>

                                About Depth Digi
                            </div>

                            <h1 className="text-5xl font-black leading-none tracking-tight text-[#111140] sm:text-6xl lg:text-7xl">
                                Depth is not just
                                <br />
                                our name.

                                <span className="mt-2 block text-violet-600">
                                    It&apos;s how we work.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                                We believe better digital results come from understanding what sits
                                beneath the surface — the business, the customer, the problem and
                                the opportunity. That&apos;s why we go deeper.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700"
                            >
                                Let&apos;s Work Together
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="relative lg:col-span-7">
                            <div className="relative aspect-16/10 w-full">
                                <Image
                                    src={AboutHero}
                                    alt="Go deeper mountain visual"
                                    fill
                                    priority
                                    className="object-contain object-center"
                                />
                            </div>

                            {/* RIGHT TEXT LIST */}
                            <div className="absolute right-0 top-16 hidden space-y-4 text-sm font-semibold uppercase tracking-widest text-indigo-900 xl:block">
                                <p>People</p>
                                <p>Strategy</p>
                                <p>Technology</p>
                                <p>Creativity</p>
                                <p>Growth</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SOFT BOTTOM FADE */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent" />
            </section>

            {/* STATS */}

            <section className="relative container mx-auto z-20 -mt-8">
                <div className=" px-6 lg:px-8">
                    <div className="grid overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-xl shadow-violet-100/50 sm:grid-cols-2 lg:grid-cols-4">
                        <StatCard
                            icon={Users}
                            value="20+"
                            label="Projects Completed"
                        />

                        <StatCard
                            icon={Globe2}
                            value="10+"
                            label="Businesses Worldwide"
                        />

                        <StatCard icon={Gem} value="3" label="Core Services" />

                        <StatCard
                            icon={Sparkles}
                            value="100%"
                            label="Commitment to Quality"
                            last
                        />
                    </div>
                </div>
            </section>

            {/*  WHO WE ARE */}

            <section className="py-24">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

                        {/* image */}
                        <div className="relative lg:col-span-4">
                            <div className="relative aspect-square overflow-hidden rounded-2xl">
                                <Image
                                    src={AboutWeAre}
                                    alt="Depth Digi office"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute bottom-6 left-6 rounded-xl bg-white p-6 shadow-xl sm:w-72">
                                <div className="flex gap-5">
                                    <div className="text-5xl font-black leading-none text-violet-600">
                                        “
                                    </div>

                                    <div>
                                        <p className="font-semibold leading-6 text-[#111140]">
                                            A digital partner for businesses that care about the details.
                                        </p>
                                    </div>
                                </div>

                                <ArrowRight className="ml-auto mt-3 size-7 -rotate-45 text-[#ff7669]" />
                            </div>
                        </div>

                        {/* content */}
                        <div className="lg:col-span-5 lg:pl-2">
                            <SectionLabel>Who We Are</SectionLabel>

                            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                                A focused digital agency
                                <br className="hidden xl:block" />
                                with a broader perspective.
                            </h2>

                            <p className="mt-6 max-w-2xl leading-7 text-slate-600">
                                Depth Digi brings together web development, search engine
                                optimization and product photo editing under one roof. Our work
                                spans different disciplines, but our approach stays consistent —
                                understand the objective, simplify the problem, execute carefully
                                and build with long-term value in mind.
                            </p>

                            <Link
                                href="/services"
                                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold text-white"
                            >
                                Our Services
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        {/* commitment card */}
                        <div className="lg:col-span-3">
                            <div className="rounded-2xl bg-violet-50 p-7">
                                <h3 className="text-2xl font-black leading-tight">
                                    Small team.
                                    <br />
                                    Big commitment.
                                </h3>

                                <div className="mt-4 h-0.5 w-6 bg-violet-500" />

                                <div className="mt-8 space-y-8">
                                    <MiniFeature
                                        icon={Heart}
                                        title="Client-focused"
                                        description="Your goals come first."
                                    />

                                    <MiniFeature
                                        icon={Layers3}
                                        title="Integrated approach"
                                        description="Web, search and visuals."
                                    />

                                    <MiniFeature
                                        icon={BarChart3}
                                        title="Long-term value"
                                        description="Built for what's next."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}

            <section className="bg-linear-to-r from-violet-50 via-white to-violet-50 py-16">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-start">

                        {/* Heading */}
                        <div className="lg:col-span-3">
                            <SectionLabel>Our Values</SectionLabel>

                            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#111140]">
                                What guides
                                <br />
                                our work.
                            </h2>
                        </div>

                        {/* Values */}
                        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-4">

                            <ValueCard
                                icon={Target}
                                title="Clarity over noise"
                                description="Good digital experiences make complex things feel simple."
                            />

                            <ValueCard
                                icon={Zap}
                                title="Purpose over decoration"
                                description="Design and technology should support real business goals."
                            />

                            <ValueCard
                                icon={ShieldCheck}
                                title="Quality over shortcuts"
                                description="The details matter — from clean code to polished visuals."
                            />

                            <ValueCard
                                icon={BarChart3}
                                title="Progress over launch day"
                                description="We think about what happens after delivery."
                            />

                        </div>
                    </div>
                </div>
            </section>

            {/* HOW WE THINK + TEAM IMAGE + MISSION */}

            <section className="py-24 container mx-auto">
                <div className="grid items-center gap-12 px-6 lg:grid-cols-12 lg:px-8">
                    {/* how we think */}
                    <div className="lg:col-span-4">
                        <SectionLabel>How We Think</SectionLabel>

                        <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight">
                            We start with
                            <br />
                            better questions.
                        </h2>

                        <p className="mt-5 leading-7 text-slate-600">
                            We do not begin with “What should this look like?” We begin with:
                        </p>

                        <div className="mt-7 space-y-4">
                            <Question number="01" text="What needs to improve?" />
                            <Question number="02" text="Who are we helping?" />
                            <Question number="03" text="What does success look like?" />
                            <Question number="04" text="What is getting in the way?" />
                        </div>

                        <p className="mt-7 leading-7 text-slate-600">
                            Once these answers are clear, better design, better technical
                            decisions and better results become much easier to achieve.
                        </p>
                    </div>

                    {/* middle image */}
                    <div className="relative lg:col-span-4">
                        <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
                            <Image
                                src={AboutTeam}
                                alt="Depth Digi collaborative team"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute bottom-5 left-5 rounded-xl bg-white px-6 py-5 shadow-xl">
                            <div className="flex items-center gap-4">
                                <Users className="size-7 text-violet-600" />

                                <div>
                                    <p className="font-bold">Collaborative team.</p>
                                    <p className="text-sm text-slate-500">Real results.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* mission */}
                    <div className="lg:col-span-4">
                        <SectionLabel>Our Mission</SectionLabel>

                        <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight">
                            To help businesses
                            <br />
                            grow with purpose
                            <br />
                            through digital solutions.
                        </h2>

                        <p className="mt-6 leading-7 text-slate-600">
                            We combine strategy, technology and creative execution to build
                            digital experiences that are useful, visible and built to last.
                        </p>

                        <div className="mt-7 space-y-4">
                            <MissionPoint text="Build better digital experiences" />
                            <MissionPoint text="Increase search visibility" />
                            <MissionPoint text="Create product visuals that convert" />
                        </div>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold text-white"
                        >
                            Start a Project
                            <ArrowRight className="size-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}

            <ProjectCTA
                eyebrow="Ready to move forward?"
                title="Let's build something meaningful."
                description="Tell us about your project and we'll help you find the right next step."
            />

        </main>
    );
}

/*====
   COMPONENTS
========================================================== */


function StatCard({
    icon: Icon,
    value,
    label,
    last = false,
}: {
    icon: React.ElementType;
    value: string;
    label: string;
    last?: boolean;
}) {
    return (
        <div
            className={`flex items-center gap-5 px-8 py-7 ${last ? "" : "border-b border-violet-100 sm:border-b-0 sm:border-r"
                }`}
        >
            <Icon
                className="size-10 shrink-0 text-violet-600"
                strokeWidth={1.8}
            />

            <div>
                <p className="text-3xl font-black tracking-tight">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
        </div>
    );
}

function MiniFeature({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                <Icon className="size-5" />
            </div>

            <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    );
}

function ValueCard({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
}) {
    return (
        <div>
            <div className="mb-5 flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                    <Icon className="size-7" />
                </div>

                <h3 className="font-bold leading-7">{title}</h3>
            </div>

            <p className="pl-0 text-sm leading-6 text-slate-500 lg:pl-16">
                {description}
            </p>
        </div>
    );
}

function Question({
    number,
    text,
}: {
    number: string;
    text: string;
}) {
    return (
        <div className="flex items-center gap-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-violet-500 text-xs font-bold text-violet-600">
                {number}
            </span>

            <p className="text-sm text-slate-600">{text}</p>
        </div>
    );
}

function MissionPoint({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white">
                <Check className="size-4" strokeWidth={3} />
            </span>

            <p className="text-slate-600">{text}</p>
        </div>
    );
}
