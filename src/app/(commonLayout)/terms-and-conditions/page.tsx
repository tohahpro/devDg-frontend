import Image from "next/image";
import Link from "next/link";

import {
    ArrowRight,
    FileText,
    Mail,
    MapPin,
    MessageSquareText,
} from "lucide-react";

import TermsHero from "../../../assets/Images/tarms-condition/tarms-Hero.png";
import BgHero from "../../../assets/Images/background/contact-bg.png";
import ProjectCTA from "@/components/shared/ProjectCTA";



const termsSections = [
    {
        number: "01",
        id: "introduction",
        title: "Introduction",
        content:
            "Welcome to Depth Digi. These Terms & Conditions govern your use of our website and the services we provide, including web development, search engine optimization (SEO) and product photo editing. By accessing our website or working with us, you agree to be bound by these terms.",
    },
    {
        number: "02",
        id: "our-services",
        title: "Our Services",
        content:
            "Depth Digi provides digital services including, but not limited to, website design and development, SEO services and product photo editing. The specific scope, deliverables and timelines for each project will be outlined in a separate proposal or agreement.",
    },
    {
        number: "03",
        id: "quotes-and-payments",
        title: "Quotes and Payments",
        content:
            "All quotes are valid for a limited period as stated in the proposal. A project typically requires an advance payment to begin. The remaining balance is due as per the agreed milestones or before final delivery. Payments must be made in the agreed currency and through the methods we provide.",
    },
    {
        number: "04",
        id: "project-delivery",
        title: "Project Delivery",
        content:
            "We will deliver the agreed work within the estimated timeline. Timelines may vary depending on project complexity, client feedback and the timely provision of required content or information.",
    },
    {
        number: "05",
        id: "client-responsibilities",
        title: "Client Responsibilities",
        content:
            "You agree to provide accurate information, content, access and feedback in a timely manner. Delays from your side may affect project timelines.",
    },
    {
        number: "06",
        id: "revisions",
        title: "Revisions",
        content:
            "We include a reasonable number of revisions as outlined in the proposal. Additional revisions beyond the agreed scope may incur extra charges.",
    },
    {
        number: "07",
        id: "intellectual-property",
        title: "Intellectual Property",
        content:
            "Upon full payment, you will receive the rights to use the final deliverables for your business. We reserve the right to display the work in our portfolio unless otherwise agreed in writing. Third-party assets such as fonts, plugins or stock images remain subject to their respective licenses.",
    },
    {
        number: "08",
        id: "use-of-our-website",
        title: "Use of Our Website",
        content:
            "You may use our website for lawful purposes only. You agree not to misuse the site, attempt unauthorized access or engage in any activity that could harm its functionality or security.",
    },
    {
        number: "09",
        id: "limitation-of-liability",
        title: "Limitation of Liability",
        content:
            "While we strive to deliver high-quality work, Depth Digi is not liable for any indirect, incidental or consequential damages arising from the use of our services or website.",
    },
    {
        number: "10",
        id: "termination",
        title: "Termination",
        content:
            "Either party may terminate a project if the other party breaches these terms. Any completed work will be invoiced for payment up to the termination date.",
    },
    {
        number: "11",
        id: "confidentiality",
        title: "Confidentiality",
        content:
            "We respect your privacy and keep your business information confidential. We will not share your information with third parties without your consent, except as required by law.",
    },
    {
        number: "12",
        id: "changes-to-these-terms",
        title: "Changes to These Terms",
        content:
            "We may update these Terms & Conditions from time to time. The latest version will always be available on this page with the updated date.",
    },
    {
        number: "13",
        id: "governing-law",
        title: "Governing Law",
        content:
            "These terms are governed by the laws of Bangladesh, unless otherwise agreed in writing.",
    },
];

export default function TermsAndConditionsPage() {
    return (
        <main className="overflow-hidden bg-white text-[#111140] py-18">
            {/* HERO  */}

            <section className="relative isolate overflow-hidden">
                {/* Background */}
                <Image
                    src={BgHero}
                    alt=""
                    fill
                    priority
                    className="pointer-events-none absolute inset-0 z-0 object-cover object-center"
                />

                {/* Soft white blend */}
                <div className="pointer-events-none absolute inset-0 z-0 bg-white/10" />

                <div className="container relative z-10 mx-auto px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:py-20">
                    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
                        {/* LEFT */}
                        <div className="lg:col-span-6">
                            <SectionLabel>Legal</SectionLabel>

                            <h1 className="mt-4 text-4xl font-black leading-none tracking-tight text-[#111140] sm:text-5xl lg:text-6xl">
                                Terms &amp; Conditions
                            </h1>

                            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-lg">
                                These Terms &amp; Conditions outline the rules,
                                responsibilities and expectations for working with Depth Digi.
                                By using our website or services, you agree to these terms.
                            </p>

                            <p className="mt-4 text-xs font-medium text-slate-500 sm:text-sm">
                                Last updated: January 1, 2026
                            </p>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="relative lg:col-span-6">
                            <div className="relative mx-auto aspect-video w-full max-w-2xl">
                                <Image
                                    src={TermsHero}
                                    alt="Clear terms, stronger relationships"
                                    fill
                                    priority
                                    className="object-contain object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  TERMS CONTENT  */}

            <section className="py-8 sm:py-10 lg:py-12">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                        {/*  SIDEBAR */}

                        <aside className="lg:col-span-4 xl:col-span-3">
                            <div className="lg:sticky lg:top-24">
                                <div className="rounded-2xl bg-linear-to-br from-violet-50 via-white to-indigo-50 p-4 shadow-sm sm:p-5">
                                    {/* Heading */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm sm:size-10 lg:size-11">
                                            <FileText className="size-4 sm:size-5" />
                                        </div>

                                        <h2 className="text-base font-black sm:text-lg lg:text-xl">
                                            On This Page
                                        </h2>
                                    </div>

                                    {/* Navigation */}
                                    <nav className="mt-5 grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                                        {termsSections.map((section, index) => (
                                            <Link
                                                key={section.id}
                                                href={`#${section.id}`}
                                                className={`
                          group flex items-center gap-3 rounded-lg
                          px-3 py-2.5
                          text-sm transition-all duration-300

                          ${index === 0
                                                        ? "bg-violet-100 text-violet-600"
                                                        : "text-[#111140] hover:bg-white hover:text-violet-600"
                                                    }
                        `}
                                            >
                                                <span
                                                    className={`
                            w-6 shrink-0 text-xs font-semibold
                            ${index === 0
                                                            ? "text-violet-600"
                                                            : "text-slate-500 group-hover:text-violet-600"
                                                        }
                          `}
                                                >
                                                    {section.number}
                                                </span>

                                                <span className="leading-5">
                                                    {section.title}
                                                </span>
                                            </Link>
                                        ))}

                                        <Link
                                            href="#contact-us"
                                            className="
                        group flex items-center gap-3 rounded-lg
                        px-3 py-2.5
                        text-sm text-[#111140]
                        transition-all duration-300
                        hover:bg-white hover:text-violet-600
                      "
                                        >
                                            <span className="w-6 shrink-0 text-xs font-semibold text-slate-500 group-hover:text-violet-600">
                                                14
                                            </span>

                                            <span>Contact Us</span>
                                        </Link>
                                    </nav>

                                    {/* Help box */}
                                    <div className="mt-7 rounded-xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-5">
                                        <div className="flex items-start gap-3">
                                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                                <MessageSquareText className="size-5" />
                                            </div>

                                            <div>
                                                <p className="text-sm font-bold text-[#111140]">
                                                    Have a question?
                                                </p>

                                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                                    We&apos;re here to help.
                                                </p>

                                                <Link
                                                    href="/contact"
                                                    className="
                            group/link mt-3 inline-flex items-center gap-2
                            text-sm font-bold text-violet-600
                          "
                                                >
                                                    Contact Us

                                                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT CONTENT */}

                        <div className="min-w-0 lg:col-span-8 xl:col-span-9">
                            <div className="space-y-6 sm:space-y-7">
                                {termsSections.map((section) => (
                                    <TermsSection
                                        key={section.id}
                                        id={section.id}
                                        number={section.number}
                                        title={section.title}
                                    >
                                        {section.content}
                                    </TermsSection>
                                ))}

                                {/*   CONTACT US  */}

                                <section
                                    id="contact-us"
                                    className="scroll-mt-28"
                                >
                                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-base font-black text-violet-600 sm:size-12 sm:text-lg">
                                            14
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <h2 className="text-lg font-black leading-tight sm:text-xl">
                                                Contact Us
                                            </h2>

                                            <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                                                If you have any questions about these Terms &amp;
                                                Conditions, please contact us at:
                                            </p>

                                            <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
                                                {/* Email */}
                                                <a
                                                    href="mailto:hello@depthdigi.com"
                                                    className="
                            flex items-center gap-2
                            font-medium text-violet-600
                            transition hover:text-violet-700
                          "
                                                >
                                                    <Mail className="size-4 shrink-0" />

                                                    hello@depthdigi.com
                                                </a>

                                                {/* Locations */}
                                                <div className="flex flex-wrap gap-x-5 gap-y-3">
                                                    <span className="flex items-start gap-2 font-medium text-[#111140]">
                                                        <MapPin className="mt-0.5 size-4 shrink-0 text-violet-600" />
                                                        Queens, NY 11435, USA
                                                    </span>

                                                    <span className="flex items-start gap-2 font-medium text-[#111140]">
                                                        <MapPin className="mt-0.5 size-4 shrink-0 text-violet-600" />
                                                        Gaibandha, Bangladesh
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  REUSABLE CTA  */}

            <ProjectCTA
                eyebrow="Ready to work together?"
                title="Let's build something great."
                description="Have a project in mind? We'd love to hear about it and discuss the best way to move forward."
            />
        </main>
    );
}

/* ==========================================================
   SECTION LABEL
========================================================== */

function SectionLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-600">
            <FileText className="size-4" />
            {children}
        </div>
    );
}

/* ==========================================================
   TERMS SECTION
========================================================== */

function TermsSection({
    number,
    id,
    title,
    children,
}: {
    number: string;
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className="scroll-mt-28"
        >
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
                {/* Number */}
                <div
                    className="
            flex size-11 shrink-0 items-center justify-center
            rounded-xl bg-violet-50
            text-base font-black text-violet-600
            sm:size-12 sm:text-lg
          "
                >
                    {number}
                </div>

                {/* Content */}
                <div className="min-w-0">
                    <h2 className="text-lg font-black leading-tight text-[#111140] sm:text-xl">
                        {title}
                    </h2>

                    <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600 sm:text-base">
                        {children}
                    </p>
                </div>
            </div>
        </section>
    );
}