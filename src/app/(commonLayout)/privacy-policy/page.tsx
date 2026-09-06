import Link from "next/link";
import {
    ArrowRight,
    Eye,
    FileText,
    LockKeyhole,
    Mail,
    MapPin,
    MessageSquareText,
    ShieldCheck,
    Users,
} from "lucide-react";

import PrivacyHero from "../../../assets/Images/privacy/privacy-Hero.png";
import BgHero from "../../../assets/Images/background/contact-bg.png";
import Image from "next/image";
import ProjectCTA from "@/components/shared/ProjectCTA";
import { SectionLabel } from "@/components/shared/SectionLabel";

const privacySections = [
    {
        number: "01",
        id: "introduction",
        title: "Introduction",
        content:
            "Welcome to Depth Digi. This Privacy Policy explains how we collect, use, store and protect your personal information when you visit our website (depthdigi.com) or use our services. By using our website, you agree to the practices described in this policy.",
    },
    {
        number: "02",
        id: "information-we-collect",
        title: "Information We Collect",
        content:
            "We may collect personal information that you voluntarily provide, such as your name, email address, phone number, company name and project details when you contact us. We also collect certain technical information automatically, including your IP address, browser type, device information, pages visited and referring links.",
    },
    {
        number: "03",
        id: "how-we-use-your-information",
        title: "How We Use Your Information",
        content:
            "We use your information to respond to your enquiries, provide our services, improve our website, communicate with you and ensure a better user experience. We do not use your information for unrelated marketing purposes without your consent.",
    },
    {
        number: "04",
        id: "cookies-and-tracking",
        title: "Cookies and Tracking",
        content:
            "Our website uses cookies and similar technologies to enhance your browsing experience, analyse site traffic and understand how visitors use our website. You can control or disable cookies through your browser settings.",
    },
    {
        number: "05",
        id: "sharing-your-information",
        title: "Sharing Your Information",
        content:
            "We do not sell, rent or trade your personal information. We may share information with trusted third-party service providers such as hosting, analytics or email services only when necessary to operate our website and deliver our services, and they are bound to keep your information secure.",
    },
    {
        number: "06",
        id: "data-security",
        title: "Data Security",
        content:
            "We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration or loss.",
    },
    {
        number: "07",
        id: "data-retention",
        title: "Data Retention",
        content:
            "We keep your information only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law.",
    },
    {
        number: "08",
        id: "your-rights",
        title: "Your Rights",
        content:
            "Depending on your location, you may have the right to access, correct, delete or restrict the use of your personal information. To make a request, please contact us using the details below.",
    },
    {
        number: "09",
        id: "third-party-links",
        title: "Third-Party Links",
        content:
            "Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies separately.",
    },
    {
        number: "10",
        id: "childrens-privacy",
        title: "Children's Privacy",
        content:
            "Our website and services are not intended for children under 13. We do not knowingly collect personal information from children.",
    },
    {
        number: "11",
        id: "international-users",
        title: "International Users",
        content:
            "If you are visiting from outside Bangladesh, please note that your information may be transferred to and processed in countries where our service providers operate.",
    },
    {
        number: "12",
        id: "changes-to-this-policy",
        title: "Changes to This Policy",
        content:
            "We may update this Privacy Policy from time to time. The latest version will always be available on this page with the updated date.",
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="overflow-hidden bg-white text-[#111140]">
            {/* HERO */}
            <section className="relative isolate overflow-hidden py-18">
                {/* Background */}
                <Image
                    src={BgHero}
                    alt=""
                    fill
                    priority
                    className="pointer-events-none absolute inset-0 z-0 object-cover object-center"
                />

                <div className="container relative z-10 mx-auto px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">

                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-6">
                            <SectionLabel>Privacy</SectionLabel>

                            <h1 className="mt-4 text-4xl font-black leading-none tracking-tight text-[#111140] sm:text-5xl lg:text-6xl">
                                Privacy{" "}
                                <span className="text-violet-600">
                                    Policy
                                </span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-lg">
                                Your privacy matters to us. This policy explains how Depth Digi
                                collects, uses, protects and handles your information when you visit
                                our website or use our services.
                            </p>

                            <p className="mt-4 text-xs font-medium text-slate-500 sm:text-sm">
                                Last updated: January 1, 2026
                            </p>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-6">
                            <div className="grid items-center gap-4 xl:grid-cols-12">

                                {/* Privacy Illustration */}
                                <div className="xl:col-span-9">
                                    <div className="relative aspect-video w-full">
                                        <Image
                                            src={PrivacyHero}
                                            alt="Privacy, security and trust"
                                            fill
                                            priority
                                            className="object-contain object-center"
                                        />
                                    </div>
                                </div>

                                {/* Keywords */}
                                <div className="xl:col-span-3">
                                    <div
                                        className="
      flex flex-wrap gap-x-5 gap-y-3
      text-[10px] font-bold uppercase tracking-widest
      text-indigo-900/80     
      flex-col
    "
                                    >
                                        <p className="text-sm">People</p>
                                        <p className="text-sm">Data</p>
                                        <p className="text-sm">Security</p>
                                        <p className="text-sm">Transparency</p>

                                        <p className="leading-5 text-sm">
                                            A Better Digital
                                        </p>

                                        <p className="text-sm">Tomorrow</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-8 sm:py-10 lg:py-12">
                <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                        {/* SIDEBAR */}
                        <aside className="lg:col-span-4 xl:col-span-3">
                            <div className="space-y-5 lg:sticky lg:top-24">
                                <div className="rounded-2xl bg-linear-to-br from-violet-50 to-indigo-50 p-4 sm:p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-9 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm sm:size-10 lg:size-11">
                                            <FileText className="size-4 sm:size-5 lg:size-6" />
                                        </div>

                                        <h2 className="text-base font-black sm:text-lg lg:text-3xl">
                                            On This Page
                                        </h2>
                                    </div>

                                    <nav className="mt-5 grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                                        {privacySections.map((section, index) => (
                                            <Link
                                                key={section.id}
                                                href={`#${section.id}`}
                                                className={`
                          flex items-center gap-3 rounded-lg px-3 py-2.5
                          text-sm transition
                          ${index === 0
                                                        ? "bg-violet-100 text-violet-600"
                                                        : "text-[#111140] hover:bg-white hover:text-violet-600"
                                                    }
                        `}
                                            >
                                                <span className="w-6 shrink-0 font-semibold">
                                                    {section.number}
                                                </span>

                                                <span className="leading-5">
                                                    {section.title}
                                                </span>
                                            </Link>
                                        ))}

                                        <Link
                                            href="#contact-us"
                                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-white hover:text-violet-600"
                                        >
                                            <span className="w-6 shrink-0 font-semibold">
                                                13
                                            </span>

                                            Contact Us
                                        </Link>
                                    </nav>

                                    <div className="mt-6 rounded-xl bg-white/80 p-4 shadow-sm sm:p-5">
                                        <div className="flex items-start gap-3">
                                            <MessageSquareText className="size-6 shrink-0 text-violet-600" />

                                            <div>
                                                <p className="font-bold">
                                                    Have a question?
                                                </p>

                                                <p className="mt-1 text-xs text-slate-500">
                                                    We&apos;re here to help.
                                                </p>

                                                <Link
                                                    href="/contact"
                                                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-violet-600"
                                                >
                                                    Contact Us
                                                    <ArrowRight className="size-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-linear-to-br from-violet-50 via-white to-indigo-50 p-5">
                                    <h3 className="text-xl font-black leading-tight sm:text-2xl">
                                        Your information,
                                        <br />
                                        our responsibility.
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        We are committed to handling your data with care,
                                        transparency and respect.
                                    </p>

                                    <div className="mt-6 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                                        <TrustItem
                                            icon={ShieldCheck}
                                            title="Secure by design"
                                            text="We follow industry best practices to keep your data safe."
                                        />

                                        <TrustItem
                                            icon={Eye}
                                            title="Transparent approach"
                                            text="Clear information about how we use your data."
                                        />

                                        <TrustItem
                                            icon={Users}
                                            title="Your control"
                                            text="You decide what information you share with us."
                                        />
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* POLICY */}
                        <div className="lg:col-span-8 xl:col-span-9">
                            <div className="space-y-7 sm:space-y-8">
                                {privacySections.map((section) => (
                                    <PrivacySection
                                        key={section.id}
                                        number={section.number}
                                        id={section.id}
                                        title={section.title}
                                    >
                                        {section.content}
                                    </PrivacySection>
                                ))}

                                <section
                                    id="contact-us"
                                    className="scroll-mt-28"
                                >
                                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-base font-black text-violet-600 sm:size-12 sm:text-lg">
                                            13
                                        </div>

                                        <div className="min-w-0">
                                            <h2 className="text-lg font-black sm:text-xl">
                                                Contact Us
                                            </h2>

                                            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600 sm:text-base">
                                                If you have any questions about this Privacy Policy or
                                                how your information is handled, please contact us at:
                                            </p>

                                            <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-6">
                                                <a
                                                    href="mailto:hello@depthdigi.com"
                                                    className="flex items-center gap-2 font-medium text-violet-600"
                                                >
                                                    <Mail className="size-4 shrink-0" />
                                                    hello@depthdigi.com
                                                </a>

                                                <div className="flex flex-wrap gap-5">
                                                    <span className="flex items-start gap-2 font-medium text-[#111140]">
                                                        <MapPin className="mt-0.5 size-4 shrink-0 text-violet-600" />
                                                        <span>
                                                            Queens, NY 11435, USA
                                                        </span>
                                                    </span>

                                                    <span className="flex items-start gap-2 font-medium text-[#111140]">
                                                        <MapPin className="mt-0.5 size-4 shrink-0 text-violet-600" />
                                                        <span>
                                                            Gaibandha, Bangladesh
                                                        </span>
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

            {/* CTA */}
            <ProjectCTA
                eyebrow="Have a project in mind?"
                title="Let's build something great together."
                description="Tell us about your project and we'll help you find the right solution."
            />
        </main>
    );
}



function PrivacySection({
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
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-base font-black text-violet-600 sm:size-12 sm:text-lg">
                    {number}
                </div>

                <div className="min-w-0">
                    <h2 className="text-lg font-black leading-tight sm:text-xl">
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

function TrustItem({
    icon: Icon,
    title,
    text,
}: {
    icon: React.ElementType;
    title: string;
    text: string;
}) {
    return (
        <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                <Icon className="size-5" />
            </div>

            <div>
                <p className="text-sm font-bold">
                    {title}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                    {text}
                </p>
            </div>
        </div>
    );
}