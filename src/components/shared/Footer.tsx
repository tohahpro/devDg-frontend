import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import BrandLogo from "../../assets/logo/Brand-Logo.png"

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container mx-auto px-6 py-10 lg:px-8">
        {/* TOP */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src={BrandLogo}
                alt="Depth Digi"
                width={180}
                height={48}
                className="w-40"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Web, search and creative
              <br />
              built to move businesses forward.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <SocialLink href="https://www.facebook.com/depthdigi" icon={FaLinkedin} />
              <SocialLink href="https://www.facebook.com/depthdigi" icon={FaFacebook} />

            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-bold text-[#111140]">
              Services
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link
                href="/services"
                className="transition hover:text-violet-600"
              >
                Web Development
              </Link>

              <Link
                href="/services"
                className="transition hover:text-violet-600"
              >
                SEO
              </Link>

              <Link
                href="/services"
                className="transition hover:text-violet-600"
              >
                Product Photo Editing
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-bold text-[#111140]">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link
                href="/work"
                className="transition hover:text-violet-600"
              >
                Work
              </Link>

              <Link
                href="/about"
                className="transition hover:text-violet-600"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-violet-600"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-sm font-bold text-[#111140]">
              Get in touch
            </h3>

            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <a
                href="mailto:hello@depthdigi.com"
                className="flex items-center gap-3 transition hover:text-violet-600"
              >
                <Mail className="size-4 shrink-0 text-[#111140]" />
                hello@depthdigi.com
              </a>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#111140]" />

                  <span className="leading-5">
                    148-28 88th Avenue, Apt. 6H
                    <br />
                    Queens, NY 11435, USA
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#111140]" />

                  <span className="leading-5">
                    Board Bazar
                    <br />
                    Gaibandha, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-slate-200" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Depth Digi. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-violet-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-violet-600"
            >
              Terms & Conditions
            </Link>
          </div>

          <p>Built with depth, for what&apos;s next.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) {
  return (
    <Link
      href={href}
      className="flex size-7 items-center justify-center rounded-full bg-[#111140] text-white transition hover:bg-violet-600"
    >
      <Icon className="size-3.5" />
    </Link>
  );
}