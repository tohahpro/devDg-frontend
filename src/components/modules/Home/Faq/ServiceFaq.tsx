"use client"

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";



const faqs = [
    {
        question: "What services does Depth Digi provide?",
        answer:
            "We provide web development, SEO and product photo editing services for businesses that want to improve their digital presence.",
    },
    {
        question: "Can you work on an existing website?",
        answer:
            "Yes. We can redesign, improve, optimize or extend an existing website depending on your current setup and goals.",
    },
    {
        question: "Do you work with businesses internationally?",
        answer:
            "Yes. Depth Digi works remotely with businesses and organizations worldwide.",
    },
    {
        question: "How do I get started?",
        answer:
            "Send us a short overview of your project and goals. We will review your requirements and recommend the best next step.",
    },
];

const ServiceFaq = () => {

    const [openFaq, setOpenFaq] = useState<number | null>(null);


    return (
        <>
            {/* FAQ */}

            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                Frequently Asked Questions
                            </p>

                            <h2 className="mt-3 text-4xl font-black tracking-tight">
                                Common questions.
                            </h2>
                        </div>
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

export default ServiceFaq;