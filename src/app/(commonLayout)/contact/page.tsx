
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    ChevronUp
} from "lucide-react";
import ContactSection from "@/components/modules/Home/Contact/ContactSection";

import ContactHero from "../../../assets/Images/contact/Contact-Hero.png";
import ContactBg from "../../../assets/Images/contact/contact-bg.png";
import ContactFaq from "@/components/modules/Home/Faq/ContactFaq";



export default function ContactPage() {


    return (
        <main className="overflow-hidden bg-white text-[#111140]">

            {/* HERO */}
            <section className="relative overflow-hidden pt-28 lg:pt-32">
                {/* BACKGROUND IMAGE */}
                <Image
                    src={ContactBg}
                    alt=""
                    fill
                    priority
                    className="pointer-events-none object-cover object-center"
                />

                {/* optional white overlay for perfect blending */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-white/10" />

                <div className="container relative mx-auto px-6 lg:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-12">

                        {/* LEFT CONTENT */}
                        <div className="relative z-10 pb-10 lg:col-span-5 lg:pb-14">
                            <Eyebrow>Get In Touch</Eyebrow>

                            <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-[#111140] sm:text-6xl">
                                Tell us what you&apos;re
                                <span className="mt-1 block text-violet-600">
                                    working on.
                                </span>
                            </h1>

                            <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
                                Whether you&apos;re planning a new website, want to improve your
                                search visibility, or need professional product photo editing,
                                we&apos;d love to hear about your project. Let&apos;s discuss how we
                                can help.
                            </p>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="relative self-end lg:col-span-7">
                            <div className="relative aspect-16/7 w-full">
                                <Image
                                    src={ContactHero}
                                    alt="Let's make it happen"
                                    fill
                                    priority
                                    className="object-contain object-bottom"
                                />
                            </div>

                            {/* RIGHT KEYWORDS */}
                            <div className="absolute right-4 top-12 hidden space-y-3 text-xs font-semibold uppercase tracking-widest text-indigo-900/80 xl:block">
                                <p>Ideas</p>
                                <p>Plans</p>
                                <p>Solutions</p>
                                <p>Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTACT */}
            <ContactSection />

            {/* FAQ */}
            <ContactFaq />

            {/* CTA */}
            <section className="relative overflow-hidden bg-linear-to-r from-indigo-800 via-violet-600 to-indigo-900 text-white">
                <div className="absolute -bottom-24 -right-12 size-72 rounded-full border-[3rem] border-[#ff7c70]/80" />

                <div className="container relative mx-auto flex flex-col justify-between gap-10 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                            Ready to move forward?
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                            Let&apos;s build something great together.
                        </h2>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                            Every successful project starts with a simple conversation. Tell
                            us what you need, and we&apos;ll help you find the right solution.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="relative z-10 inline-flex items-center justify-center gap-3 self-start rounded-xl bg-white px-8 py-4 text-sm font-bold text-violet-600 shadow-xl lg:self-center"
                    >
                        Start a Project
                        <ArrowRight className="size-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

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


