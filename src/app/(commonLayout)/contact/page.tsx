
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
import ProjectCTA from "@/components/shared/ProjectCTA";
import { SectionLabel } from "@/components/shared/SectionLabel";



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
                            <SectionLabel>Get In Touch</SectionLabel>

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
                            <div className="relative aspect-16/7 w-full lg:translate-y-8">
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
            <ProjectCTA
                eyebrow="Ready to move forward?"
                title="Let's build something great together."
                description="Every successful project starts with a simple conversation. Tell us what you need, and we'll help you find the right solution."
            />
        </main>
    );
}




