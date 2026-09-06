"use client"

import { useState } from "react";
import {
    ArrowRight,
    ChevronDown,
    ChevronUp
} from "lucide-react";
import Link from "next/link";


const faqs = [
    {
        question: "What services does Depth Digi provide?",
        answer:
            "We provide web development, SEO and product photo editing services for businesses that want to build a stronger digital presence.",
    },
    {
        question: "Can you work on an existing website?",
        answer:
            "Yes. We can redesign, improve, optimize or extend an existing website depending on your goals and current technology.",
    },
    {
        question: "Do you work with businesses internationally?",
        answer:
            "Yes. We work remotely with businesses and organizations worldwide.",
    },
    {
        question: "How do I get started?",
        answer:
            "Send us your project details through the form and we will get back to you with the best next step.",
    },
];
const ContactFaq = () => {

    const [openFaq, setOpenFaq] = useState<number | null>(null);


    return (
        <>
            <section className="pb-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <Eyebrow>Frequently Asked Questions</Eyebrow>

                            <h2 className="mt-3 text-4xl font-black tracking-tight">
                                Common questions.
                            </h2>
                        </div>

                        {/* <Link
                            href="/faq"
                            className="inline-flex items-center gap-2 self-start rounded-full border border-violet-200 px-5 py-3 text-sm font-semibold text-violet-600"
                        >
                            View All FAQs
                            <ArrowRight className="size-4" />
                        </Link> */}
                    </div>

                    <div className="mt-8 grid gap-4 lg:grid-cols-2">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="rounded-xl border border-slate-200 bg-white shadow-sm"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                                    >
                                        <span className="font-medium">{faq.question}</span>

                                        {isOpen ? (
                                            <ChevronUp className="size-5 shrink-0" />
                                        ) : (
                                            <ChevronDown className="size-5 shrink-0" />
                                        )}
                                    </button>

                                    {isOpen && (
                                        <div className="border-t border-slate-100 px-6 py-5">
                                            <p className="text-sm leading-6 text-slate-600">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};



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

export default ContactFaq;