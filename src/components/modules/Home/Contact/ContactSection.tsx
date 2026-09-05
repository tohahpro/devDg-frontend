"use client";


import { Check, Clock3, Globe2, Mail, MapPin, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import ContactImage from "../../../../assets/Images/contact/contact-image.png";



const ContactSection = () => {



  return (

    <section className="pb-20 pt-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-7">
            <ContactForm />

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl bg-violet-50 p-7">
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600">
                  <Globe2 className="size-5" />
                </div>

                <div>
                  <h2 className="text-2xl font-black">
                    Other ways to reach us
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Prefer a different channel? We&apos;re here.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-6">
                <ContactItem
                  icon={Mail}
                  title="Email"
                  value="hello@depthdigi.com"
                  text="We usually reply within 24 hours."
                />

                <ContactItem
                  icon={MessageCircleMore}
                  title="WhatsApp"
                  value="+880 1700 000000"
                  text="Message us anytime."
                />

                <ContactItem
                  icon={MapPin}
                  title="Location"
                  value="Bangladesh (Remote Worldwide)"
                  text="We work with clients globally."
                />

                <ContactItem
                  icon={Clock3}
                  title="Working Hours"
                  value="Sun – Thu: 9:00 AM – 6:00 PM (BST)"
                  text="We're online during business hours."
                />
              </div>

              <div className="mt-8 border-t border-violet-100 pt-6">
                <p className="max-w-xs rotate-[-4deg] font-serif text-3xl italic leading-tight text-indigo-900">
                  Good
                  <br />
                  Projects
                  <br />
                  Start with
                  <br />
                  a Conversation
                </p>

                <div className="mt-3 h-1 w-40 -rotate-6 bg-[#ff7669]" />
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src={ContactImage}
                alt="Depth Digi office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};


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
    <div className="mt-8">
      <div className="mb-5 flex items-center gap-4">
        <span className="flex size-9 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
          {number}
        </span>

        <h3 className="font-bold">{title}</h3>
      </div>

      {children}
    </div>
  );
}

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
      className={`relative flex min-h-32 flex-col items-center justify-center gap-4 rounded-xl border p-5 text-center transition ${selected
        ? "border-violet-500 bg-violet-50"
        : "border-slate-200 bg-white hover:border-violet-300"
        }`}
    >
      {selected && (
        <span className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full bg-violet-600 text-white">
          <Check className="size-3" strokeWidth={3} />
        </span>
      )}

      <div className="flex size-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
        <Icon className="size-6" />
      </div>

      <span className="text-sm font-bold leading-5">{label}</span>
    </button>
  );
}

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-[#ff7669]">*</span>}
      </span>

      {children}
    </label>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
  text,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
        <Icon className="size-6" />
      </div>

      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="mt-1 text-sm font-medium text-[#111140]">{value}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
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

export default ContactSection;