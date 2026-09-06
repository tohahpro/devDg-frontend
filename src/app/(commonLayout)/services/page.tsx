
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BarChart3,
    Camera,
    Check,
    ChevronDown,
    ChevronUp,
    Rocket,
    Smartphone,
    ShieldCheck,
    Zap,
} from "lucide-react";
import ServiceHero from "../../../assets/Images/service/service-Hero.png";
import ServiceDevelopment from "../../../assets/Images/service/service-Development.png";
import ServiceSeo from "../../../assets/Images/service/service-Seo.png";
import ServiceFaq from "@/components/modules/Home/Faq/ServiceFaq";
import ProjectCTA from "@/components/shared/ProjectCTA";
import BeforeAfter from "@/components/modules/Home/BeforeAfter";
import PreviewSlider from "@/components/modules/Home/Carousel/PreviewCarousel";


const webServices = [
    "Business Websites",
    "Custom Web Development",
    "E-commerce Development",
    "Landing Pages",
    "WordPress Development",
    "Website Redesign",
];

const seoServices = [
    "SEO Audit",
    "On-Page SEO",
    "Keyword Research",
    "Content Optimization",
    "Technical SEO",
    "Local SEO",
];

const photoServices = [
    "Background Removal",
    "Shadow Creation",
    "Image Retouching",
    "Color Correction",
    "Ghost Mannequin",
    "E-commerce Formatting",
];

const process = [
    {
        number: "01",
        title: "Discover",
        text: "We learn about your goals and challenges.",
    },
    {
        number: "02",
        title: "Strategy",
        text: "We create a plan tailored to your business.",
    },
    {
        number: "03",
        title: "Execute",
        text: "We design, develop, optimize or edit.",
    },
    {
        number: "04",
        title: "Refine",
        text: "We review, test and improve.",
    },
    {
        number: "05",
        title: "Deliver",
        text: "We launch and hand over the final work.",
    },
    {
        number: "06",
        title: "Grow",
        text: "Ongoing support and optimization.",
    },
];

const comparisonItems = [
    {
        before:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685437/before1_nxryfo.png",
        after:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685436/after1_zhfmcx.png",
        preview:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685436/after1_zhfmcx.png",
        title: "Background Removal",
    },
    {
        before:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685436/before3_m20p7b.png",
        after:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685436/after3_ibciwv.png",
        preview:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685436/before3_m20p7b.png",
        title: "Color Correction",
    },
    {
        before:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685437/before2_fc3t99.png",
        after:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685436/after2_ixweny.png",
        preview:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685436/after2_ixweny.png",
        title: "Shadow Creation",
    },
    {
        before:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685435/before4_ozhzvr.png",
        after:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685435/after4_gzdq3t.png",
        preview:
            "https://res.cloudinary.com/dhafh03o6/image/upload/v1788685435/after4_gzdq3t.png",
        title: "Shadow Creation",
    },
];


export default function ServicesPage() {


    return (
        <main className="overflow-hidden bg-white text-[#111140]">


            {/*HERO */}

            <section className="relative overflow-hidden bg-linear-to-br from-white via-white to-violet-50">
                <div className="container relative mx-auto px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-12">
                        {/* content */}
                        <div className="relative z-10 lg:col-span-6">
                            <Eyebrow>Our Services</Eyebrow>

                            <h1 className="mt-5 text-5xl font-black leading-none tracking-tight sm:text-6xl">
                                Digital solutions
                                <br />
                                built for real growth.
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                                From high-performing websites to better search visibility and
                                product images that sell — we help businesses grow through
                                practical, result-focused digital solutions.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-8">
                                <HeroBenefit icon={Rocket} title="Build" text="Better" />
                                <HeroBenefit icon={BarChart3} title="Rank" text="Higher" />
                                <HeroBenefit icon={Camera} title="Sell" text="More" />
                            </div>
                        </div>

                        {/* hero visual */}
                        <div className="relative lg:col-span-6">
                            <div className="relative aspect-square">
                                <Image
                                    src={ServiceHero}
                                    alt="Depth Digi growth services"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>

                            <div className="absolute right-0 top-30 hidden space-y-4 text-sm font-semibold uppercase tracking-widest text-indigo-900 lg:block">
                                <p>Ideas</p>
                                <p>Websites</p>
                                <p>Visibility</p>
                                <p>Visuals</p>
                                <p>Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WEB DEVELOPMENT */}

            <section className="py-20 lg:py-24">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-12">
                        {/* content */}
                        <div className="lg:col-span-5">
                            <ServiceLabel
                                number="01"
                                title="Web Development"
                                variant="purple"
                            />

                            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                                Websites built for
                                <br />
                                performance and people.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-slate-600">
                                We design and develop modern, responsive websites that are
                                fast, secure and easy to manage. Whether you need a business
                                website, an e-commerce store or a custom web application, we
                                build around your goals — not just a template.
                            </p>

                            <ServiceChecklist items={webServices} />

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-violet-700"
                            >
                                Discuss a Web Project
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        {/* visual */}
                        <div className="lg:col-span-7">
                            <div className="relative">
                                <div className="relative aspect-video">
                                    <Image
                                        src={ServiceDevelopment}
                                        alt="Web development services"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                    <ServiceFeature
                                        icon={Zap}
                                        title="Fast"
                                        text="Loading"
                                    />

                                    <ServiceFeature
                                        icon={Smartphone}
                                        title="Fully"
                                        text="Responsive"
                                    />

                                    <ServiceFeature
                                        icon={ShieldCheck}
                                        title="Secure"
                                        text="& Reliable"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*SEO */}

            <section className="relative overflow-hidden bg-linear-to-r from-[#17174a] via-[#252363] to-[#17174a] py-20 text-white lg:py-24">
                <div className="absolute left-1/2 top-1/2 size-96 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="container relative mx-auto px-6 lg:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-12">
                        {/* content */}
                        <div className="lg:col-span-5">
                            <ServiceLabel
                                number="02"
                                title="Search Engine Optimization"
                                variant="coral"
                                dark
                            />

                            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                                Be found by the
                                <br />
                                right people.
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-white/75">
                                We help your website rank higher, attract the right audience
                                and bring consistent, long-term traffic. Our SEO strategies
                                are based on real search intent, technical best practices and
                                high-quality content.
                            </p>

                            <ServiceChecklist items={seoServices} dark />

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#17174a]"
                            >
                                Talk About SEO
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        {/* visual */}
                        <div className="lg:col-span-7">
                            <div className="relative aspect-video">
                                <Image
                                    src={ServiceSeo}
                                    alt="SEO organic traffic growth"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*PHOTO EDITING */}

            <section className="overflow-hidden bg-linear-to-br from-white to-slate-50 py-14 sm:py-16 lg:py-20 xl:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
                        {/* CONTENT */}
                        <div className="min-w-0 lg:col-span-5">
                            <ServiceLabel
                                number="03"
                                title="Product Photo Editing"
                                variant="coral"
                            />

                            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#111140] sm:mt-5 sm:text-4xl lg:text-5xl">
                                Product images
                                <br className="hidden sm:block" />
                                <span className="sm:ml-0"> that sell.</span>
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:mt-5 sm:text-base sm:leading-7">
                                Clean, consistent and professional product photos can make a huge
                                difference in your online sales. We transform your raw product images
                                into high-quality, e-commerce-ready visuals with attention to every
                                detail.
                            </p>

                            <div className="mt-6 sm:mt-7">
                                <ServiceChecklist items={photoServices} />
                            </div>

                            <Link
                                href="/contact"
                                className="
            mt-7 inline-flex w-full items-center justify-center gap-3
            rounded-xl bg-violet-600 px-5 py-3.5
            text-sm font-semibold text-white
            transition-all duration-300
            hover:bg-violet-700
            sm:mt-8 sm:w-auto sm:px-7 sm:py-4
          "
                            >
                                Discuss an Editing Project
                                <ArrowRight className="size-4 shrink-0" />
                            </Link>
                        </div>

                        {/* VISUAL */}
                        <div className="min-w-0 lg:col-span-7">
                            <div className="mx-auto w-full max-w-3xl lg:max-w-none">
                                <PreviewSlider items={comparisonItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}

            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <Eyebrow>Our Process</Eyebrow>

                            <h2 className="mt-4 text-4xl font-black tracking-tight lg:text-5xl">
                                From idea to impact.
                            </h2>
                        </div>

                        <p className="max-w-sm leading-7 text-slate-600">
                            A clear process, thoughtful execution, and a focus on long-term
                            results.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
                        {process.map((item, index) => (
                            <div key={item.number} className="relative">
                                <div className="flex size-9 items-center justify-center rounded-full border-2 border-violet-500 text-sm font-bold text-violet-600">
                                    {item.number}
                                </div>

                                <h3 className="mt-4 font-bold">{item.title}</h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    {item.text}
                                </p>

                                {index < process.length - 1 && (
                                    <ArrowRight className="absolute -right-4 top-3 hidden size-4 text-slate-500 lg:block" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}

            <ProjectCTA
                eyebrow="Ready to get started?"
                title="Let's work on your next project."
                description="Tell us what you need, and we'll help you find the right solution."
            />

            {/* Faq  */}
            <ServiceFaq />

        </main>
    );
}

/*  REUSABLE COMPONENTS*/

function Eyebrow({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-600">
            <span className="flex size-4 items-center justify-center rounded border border-violet-500">
                <ChevronUp className="size-2.5" />
            </span>

            {children}
        </div>
    );
}

function HeroBenefit({
    icon: Icon,
    title,
    text,
}: {
    icon: React.ElementType;
    title: string;
    text: string;
}) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                <Icon className="size-6" />
            </div>

            <div className="font-bold leading-5">
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

function ServiceLabel({
    number,
    title,
    variant,
    dark = false,
}: {
    number: string;
    title: string;
    variant: "purple" | "coral";
    dark?: boolean;
}) {
    return (
        <div className="flex items-center gap-4">
            <span
                className={`flex items-center justify-center rounded-full px-4 py-2 text-sm font-bold text-white ${variant === "coral" ? "bg-[#ff7669]" : "bg-violet-600"
                    }`}
            >
                {number}
            </span>

            <span
                className={`text-xs font-bold uppercase tracking-widest ${dark ? "text-white/80" : "text-slate-500"
                    }`}
            >
                {title}
            </span>
        </div>
    );
}

function ServiceChecklist({
    items,
    dark = false,
}: {
    items: string[];
    dark?: boolean;
}) {
    return (
        <div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white">
                        <Check className="size-4" strokeWidth={3} />
                    </span>

                    <span
                        className={`text-sm font-medium ${dark ? "text-white/90" : "text-[#111140]"
                            }`}
                    >
                        {item}
                    </span>
                </div>
            ))}
        </div>
    );
}

function ServiceFeature({
    icon: Icon,
    title,
    text,
}: {
    icon: React.ElementType;
    title: string;
    text: string;
}) {
    return (
        <div className="flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 shadow-lg shadow-slate-200/60">
            <Icon className="size-6 text-violet-600" />

            <div className="text-sm font-bold leading-4">
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

function SocialIcon({
    icon: Icon,
}: {
    icon: React.ElementType;
}) {
    return (
        <Link
            href="#"
            className="flex size-8 items-center justify-center rounded-full bg-[#111140] text-white transition hover:bg-violet-600"
        >
            <Icon className="size-4" />
        </Link>
    );
}

function FooterColumn({
    title,
    links,
}: {
    title: string;
    links: string[];
}) {
    return (
        <div>
            <h3 className="font-bold">{title}</h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-600">
                {links.map((link) => (
                    <Link
                        key={link}
                        href="#"
                        className="transition hover:text-violet-600"
                    >
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
}