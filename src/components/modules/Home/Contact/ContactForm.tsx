"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import {
    ArrowRight,
    BriefcaseBusiness,
    Check,
    ImageIcon,
    Loader2,
    Mail,
    MoreHorizontal,
    Search,
} from "lucide-react";

import { sendContactMessage } from "@/services/contactService";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";

type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const services = [
    {
        label: "Web Development",
        icon: BriefcaseBusiness,
    },
    {
        label: "SEO",
        icon: Search,
    },
    {
        label: "Product Photo Editing",
        icon: ImageIcon,
    },
    {
        label: "Something Else",
        icon: MoreHorizontal,
    },
];

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    const [selectedService, setSelectedService] =
        useState("Web Development");

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ContactFormData>({
        defaultValues: {
            name: "",
            email: "",
            subject: "Web Development",
            message: "",
        },
    });

    const handleServiceChange = (service: string) => {
        setSelectedService(service);

        setValue("subject", service, {
            shouldValidate: true,
        });
    };

    const onSubmit = async (data: ContactFormData) => {
        setLoading(true);

        try {
            const result = await sendContactMessage(data);

            if (result.success) {
                toast.success("Project inquiry sent successfully 🚀");

                reset({
                    name: "",
                    email: "",
                    subject: "Web Development",
                    message: "",
                });

                setSelectedService("Web Development");
            } else {
                toast.error(
                    result.message || "Failed to send project inquiry"
                );
            }
        } catch (error) {
            console.error(error);

            toast.error(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            {/* Header */}
            <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <Mail className="size-6" />
                </div>

                <div>
                    <h2 className="text-2xl font-black tracking-tight text-[#111140]">
                        Send us a message
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                        Fill out the form below and we&apos;ll get back
                        to you as soon as possible.
                    </p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8"
            >
                {/* hidden actual backend subject */}
                <input
                    type="hidden"
                    {...register("subject", {
                        required: true,
                    })}
                />

                {/* ==================================================
            STEP 1
        ================================================== */}

                <FormStep
                    number="1"
                    title="What can we help you with?"
                >
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {services.map((service) => (
                            <ServiceChoice
                                key={service.label}
                                icon={service.icon}
                                label={service.label}
                                selected={
                                    selectedService === service.label
                                }
                                onClick={() =>
                                    handleServiceChange(service.label)
                                }
                            />
                        ))}
                    </div>
                </FormStep>

                {/* ==================================================
            STEP 2
        ================================================== */}

                <FormStep
                    number="2"
                    title="Your details"
                >
                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Name */}
                        <Field
                            label="Full Name"
                            required
                            error={errors.name?.message}
                        >
                            <Input
                                type="text"
                                placeholder="John Doe"
                                className={`
                  h-12 rounded-lg
                  border-slate-200
                  bg-white
                  px-4
                  text-sm
                  shadow-none
                  transition
                  placeholder:text-slate-400
                  focus-visible:border-violet-500
                  focus-visible:ring-violet-500/10
                  ${errors.name
                                        ? "border-red-400"
                                        : ""
                                    }
                `}
                                {...register("name", {
                                    required: "Full name is required",
                                    minLength: {
                                        value: 2,
                                        message:
                                            "Please enter your full name",
                                    },
                                })}
                            />
                        </Field>

                        {/* Email */}
                        <Field
                            label="Work Email"
                            required
                            error={errors.email?.message}
                        >
                            <Input
                                type="email"
                                placeholder="you@company.com"
                                className={`
                  h-12 rounded-lg
                  border-slate-200
                  bg-white
                  px-4
                  text-sm
                  shadow-none
                  transition
                  placeholder:text-slate-400
                  focus-visible:border-violet-500
                  focus-visible:ring-violet-500/10
                  ${errors.email
                                        ? "border-red-400"
                                        : ""
                                    }
                `}
                                {...register("email", {
                                    required: "Email address is required",
                                    pattern: {
                                        value:
                                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message:
                                            "Please enter a valid email address",
                                    },
                                })}
                            />
                        </Field>

                        {/* Company — UI only */}
                        <Field label="Company / Brand">
                            <Input
                                type="text"
                                placeholder="Your company name (optional)"
                                className="
                  h-12 rounded-lg
                  border-slate-200
                  bg-white
                  px-4
                  text-sm
                  shadow-none
                  placeholder:text-slate-400
                  focus-visible:border-violet-500
                  focus-visible:ring-violet-500/10
                "
                            />
                        </Field>

                        {/* Website — UI only */}
                        <Field label="Website (optional)">
                            <Input
                                type="url"
                                placeholder="https://www.yourwebsite.com"
                                className="
                  h-12 rounded-lg
                  border-slate-200
                  bg-white
                  px-4
                  text-sm
                  shadow-none
                  placeholder:text-slate-400
                  focus-visible:border-violet-500
                  focus-visible:ring-violet-500/10
                "
                            />
                        </Field>
                    </div>
                </FormStep>

                {/* ==================================================
            STEP 3
        ================================================== */}

                <FormStep
                    number="3"
                    title="Project details"
                >
                    {/* Message */}
                    <Field
                        label="Tell us about your project"
                        required
                        error={errors.message?.message}
                    >
                        <Textarea
                            rows={5}
                            placeholder="What are you looking to build or improve? Share as much detail as you can..."
                            className={`
                min-h-32 resize-none
                rounded-lg
                border-slate-200
                bg-white
                px-4 py-3
                text-sm
                shadow-none
                placeholder:text-slate-400
                focus-visible:border-violet-500
                focus-visible:ring-violet-500/10
                ${errors.message
                                    ? "border-red-400"
                                    : ""
                                }
              `}
                            {...register("message", {
                                required:
                                    "Please tell us about your project",
                                minLength: {
                                    value: 10,
                                    message:
                                        "Please provide a little more detail",
                                },
                            })}
                        />
                    </Field>

                    {/* UI only fields */}
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <Field label="Budget (USD)">
                            <select
                                defaultValue=""
                                className="
                  h-12
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-4
                  text-sm
                  text-slate-600
                  outline-none
                  transition
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-500/10
                "
                            >
                                <option value="" disabled>
                                    Select a range
                                </option>

                                <option value="500-1000">
                                    $500 – $1,000
                                </option>

                                <option value="1000-3000">
                                    $1,000 – $3,000
                                </option>

                                <option value="3000-5000">
                                    $3,000 – $5,000
                                </option>

                                <option value="5000+">
                                    $5,000+
                                </option>
                            </select>
                        </Field>

                        <Field label="Timeline">
                            <select
                                defaultValue=""
                                className="
                  h-12
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-4
                  text-sm
                  text-slate-600
                  outline-none
                  transition
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-500/10
                "
                            >
                                <option value="" disabled>
                                    Select a timeline
                                </option>

                                <option value="asap">
                                    ASAP
                                </option>

                                <option value="2-4-weeks">
                                    2–4 weeks
                                </option>

                                <option value="1-2-months">
                                    1–2 months
                                </option>

                                <option value="flexible">
                                    Flexible
                                </option>
                            </select>
                        </Field>
                    </div>

                    {/* Agreement */}
                    <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500">
                        <input
                            type="checkbox"
                            required
                            className="
                mt-0.5 size-4
                shrink-0
                cursor-pointer
                rounded
                border-slate-300
                accent-violet-600
              "
                        />

                        <span>
                            I agree to be contacted about this project.
                            We&apos;ll only use your information to
                            respond to your enquiry.
                        </span>
                    </label>

                    {/* Submit */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="
              group
              mt-6
              h-auto
              w-full
              rounded-xl
              bg-linear-to-r
              from-violet-600
              to-indigo-600
              px-6
              py-4
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-violet-200
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:from-violet-700
              hover:to-indigo-700
              hover:shadow-xl
              disabled:pointer-events-none
              disabled:opacity-70
            "
                    >
                        {loading ? (
                            <>
                                Sending Inquiry
                                <Loader2 className="size-4 animate-spin" />
                            </>
                        ) : (
                            <>
                                Send Project Inquiry

                                <ArrowRight
                                    className="
                    size-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                                />
                            </>
                        )}
                    </Button>

                    {/* Response note */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                        <Check className="size-3.5 text-violet-500" />

                        We usually respond within 24 hours.
                    </div>
                </FormStep>
            </form>
        </div>
    );
}

/* =========================================================
   FORM STEP
========================================================= */

function FormStep({
    number,
    title,
    children,
}: {
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mt-8">
            <div className="mb-5 flex items-center gap-4">
                <span
                    className="
            flex size-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-violet-600
            text-sm
            font-bold
            text-white
            shadow-sm
            shadow-violet-200
          "
                >
                    {number}
                </span>

                <h3 className="font-bold text-[#111140]">
                    {title}
                </h3>
            </div>

            {children}
        </section>
    );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
    label,
    required = false,
    error,
    children,
}: {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="mb-2 block text-sm font-medium text-[#111140]">
                {label}

                {required && (
                    <span className="ml-1 text-[#ff7669]">
                        *
                    </span>
                )}
            </label>

            {children}

            {error && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

/* =========================================================
   SERVICE CHOICE
========================================================= */

function ServiceChoice({
    icon: Icon,
    label,
    selected,
    onClick,
}: {
    icon: React.ElementType;
    label: string;
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
        group
        relative
        flex min-h-32
        flex-col
        items-center
        justify-center
        gap-4
        rounded-xl
        border
        p-4
        text-center
        transition-all
        duration-300

        ${selected
                    ? `
              border-violet-500
              bg-violet-50
              shadow-sm
              shadow-violet-100
            `
                    : `
              border-slate-200
              bg-white
              hover:-translate-y-0.5
              hover:border-violet-300
              hover:bg-violet-50/50
              hover:shadow-sm
            `
                }
      `}
        >
            {/* selected check */}
            {selected && (
                <span
                    className="
            absolute
            right-2
            top-2
            flex size-5
            items-center
            justify-center
            rounded-full
            bg-violet-600
            text-white
          "
                >
                    <Check
                        className="size-3"
                        strokeWidth={3}
                    />
                </span>
            )}

            {/* Icon */}
            <div
                className={`
          flex size-11
          items-center
          justify-center
          rounded-xl
          transition-all
          duration-300

          ${selected
                        ? "bg-violet-600 text-white"
                        : "bg-violet-50 text-violet-600 group-hover:bg-violet-100"
                    }
        `}
            >
                <Icon className="size-5" />
            </div>

            <span className="text-sm font-bold leading-5 text-[#111140]">
                {label}
            </span>
        </button>
    );
}