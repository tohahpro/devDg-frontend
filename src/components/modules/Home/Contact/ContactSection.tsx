"use client";


import { ArrowUpRight, Check, Clock3, Globe2, Mail, MapPin, MessageCircleMore } from "lucide-react";
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
                  value="+1 (646) 731-4797"
                  text="Message us anytime."
                />

                <ContactItem
                  icon={MapPin}
                  title="Our Locations"
                  text="Operating across two regions, working with clients worldwide."
                  value={
                    <div className="relative overflow-hidden rounded-2xl border border-violet-100 bg-linear-to-br from-white via-violet-50/40 to-indigo-50/60 shadow-sm">
                      {/* soft glow */}
                      <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-violet-200/40 blur-3xl" />

                      {/* USA */}
                      <div className="group relative flex items-start justify-between gap-4 p-5 transition-all duration-300 hover:bg-white/70">
                        <div className="flex items-start gap-4">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-black text-[#111140]">
                                New York
                              </p>

                              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-violet-600 shadow-sm">
                                USA
                              </span>
                            </div>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                              148-28 88th Avenue, Apt. 6H
                              <br />
                              Queens, NY 11435
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight className="mt-1 size-4 shrink-0 text-violet-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600" />
                      </div>

                      <div className="mx-5 border-t border-violet-100" />

                      {/* Bangladesh */}
                      <div className="group relative flex items-start justify-between gap-4 p-5 transition-all duration-300 hover:bg-white/70">
                        <div className="flex items-start gap-4">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-sm font-black text-[#111140]">
                                Gaibandha
                              </p>

                              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-violet-600 shadow-sm">
                                Bangladesh
                              </span>
                            </div>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                              Board Bazar
                              <br />
                              Gaibandha, Bangladesh
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight className="mt-1 size-4 shrink-0 text-violet-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600" />
                      </div>

                      {/* bottom strip */}
                      <div className="flex items-center justify-between border-t border-violet-100 bg-white/50 px-5 py-3">
                        <span className="text-xs font-semibold text-slate-500">
                          Remote Worldwide
                        </span>

                        <span className="flex items-center gap-2 text-xs font-bold text-violet-600">
                          Global Presence
                          <Globe2 className="size-3.5" />
                        </span>
                      </div>
                    </div>
                  }
                />

                <ContactItem
                  icon={Clock3}
                  title="Working Hours"
                  value="24/7"
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


function ContactItem({
  icon: Icon,
  title,
  value,
  text,
}: {
  icon: React.ElementType;
  title: string;
  value: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
        <Icon className="size-6" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-[#111140]">
          {title}
        </p>

        <div className="mt-1.5">
          {value}
        </div>

        {text && (
          <p className="mt-3 text-xs leading-5 text-slate-500">
            {text}
          </p>
        )}
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