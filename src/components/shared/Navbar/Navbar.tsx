"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import BrandLogo from "../../../assets/logo/Brand-Logo.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-t border-violet-500 bg-white/95 backdrop-blur-xl">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-20 flex shrink-0 items-center"
          >
            <Image
              src={BrandLogo}
              alt="Depth Digi"
              width={180}
              height={50}
              priority
              className="h-auto w-36 sm:w-40"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative py-7 text-sm font-medium text-[#151542]
                    transition-colors duration-300
                    hover:text-violet-600
                    ${active
                      ? "text-[#151542]"
                      : ""
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute inset-x-0 bottom-4 mx-auto h-0.5
                      origin-center bg-violet-600
                      transition-all duration-300
                      ${active
                        ? "w-full scale-x-100 opacity-100"
                        : "w-0 scale-x-0 opacity-0"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className="
                h-auto rounded-xl
                bg-linear-to-r from-violet-600 to-indigo-500
                px-7 py-3.5
                text-sm font-semibold text-white
                shadow-lg shadow-violet-200/70
                transition-all duration-300
                hover:-translate-y-0.5
                hover:from-violet-700 hover:to-indigo-600
                hover:shadow-xl hover:shadow-violet-200
              "
            >
              <Link href="/contact" className="group flex items-center gap-3">
                Start a Project

                <ArrowRight
                  className="
                    size-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </Button>
          </div>
          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Button
                  variant="outline"
                  size="icon"
                  className="
          size-11 rounded-xl
          border-slate-200/80
          bg-white/90
          text-[#151542]
          shadow-sm
          backdrop-blur
          transition
          hover:border-violet-200
          hover:bg-violet-50
        "
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="
        flex w-full max-w-sm flex-col
        border-l border-violet-100
        bg-white/95
        p-0
        backdrop-blur-xl
      "
              >
                {/* Premium Close Button */}
                <SheetClose
                  className="
          absolute right-5 top-5 z-50
          flex size-10 items-center justify-center
          rounded-full
          border border-violet-200
          bg-white
          text-[#151542]
          shadow-md
          transition-all duration-300
          hover:rotate-90
          hover:border-violet-300
          hover:bg-violet-50
          hover:text-violet-600
          focus:outline-none
          focus:ring-2
          focus:ring-violet-200
        "
                >
                  <X className="size-5" />
                  <span className="sr-only">Close navigation menu</span>
                </SheetClose>

                {/* Top */}
                <div className="relative overflow-hidden border-b border-slate-100 px-6 pb-6 pt-7">
                  <div className="absolute -right-10 -top-10 size-32 rounded-full bg-violet-100 blur-3xl" />

                  <div className="relative flex items-center justify-between">
                    <SheetHeader className="space-y-0">
                      <SheetTitle className="text-left">
                        <Image
                          src={BrandLogo}
                          alt="Depth Digi"
                          width={180}
                          height={50}
                          className="h-auto w-36"
                        />
                      </SheetTitle>
                    </SheetHeader>
                  </div>

                  <p className="relative mt-4 max-w-xs pr-12 text-sm leading-6 text-slate-500">
                    Web, search and creative built to move businesses forward.
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex flex-1 flex-col overflow-y-auto px-6 py-6">
                  <nav className="flex flex-col">
                    {navItems.map((item, index) => {
                      const active = pathname === item.href;

                      return (
                        <SheetClose key={item.href}>
                          <Link
                            href={item.href}
                            className={`
                    group relative flex items-center justify-between
                    border-b border-slate-100
                    py-5
                    transition-all duration-300
                    ${active
                                ? "text-violet-600"
                                : "text-[#151542] hover:text-violet-600"
                              }
                  `}
                          >
                            <div className="flex items-center gap-4">
                              <span
                                className={`
                        text-xs font-semibold tracking-widest
                        ${active
                                    ? "text-violet-500"
                                    : "text-slate-300 group-hover:text-violet-400"
                                  }
                      `}
                              >
                                0{index + 1}
                              </span>

                              <span className="text-lg font-semibold">
                                {item.label}
                              </span>
                            </div>

                            <div
                              className={`
                      flex size-9 items-center justify-center
                      rounded-full
                      transition-all duration-300
                      ${active
                                  ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                                  : "bg-slate-50 text-slate-500 group-hover:bg-violet-50 group-hover:text-violet-600"
                                }
                    `}
                            >
                              <ArrowRight
                                className="
                        size-4
                        transition-transform duration-300
                        group-hover:translate-x-0.5
                      "
                              />
                            </div>

                            {active && (
                              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-violet-600 via-indigo-500 to-transparent" />
                            )}
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>

                  {/* Project CTA */}
                  <div className="relative mt-7 overflow-hidden rounded-2xl border border-violet-100 bg-linear-to-br from-violet-50 via-white to-indigo-50 p-5">
                    <div className="pointer-events-none absolute -bottom-8 -right-8 size-24 rounded-full bg-violet-100 blur-2xl" />

                    <div className="relative">
                      <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
                        Have a project in mind?
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-[#151542]">
                        Let&apos;s build something
                        <br />
                        worth growing.
                      </h3>

                      <SheetClose>
                        <Button
                          className="
                  mt-5 h-auto w-full
                  rounded-xl
                  bg-linear-to-r from-violet-600 to-indigo-500
                  py-4
                  text-sm font-semibold text-white
                  shadow-lg shadow-violet-200
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:from-violet-700
                  hover:to-indigo-600
                "
                        >
                          <Link
                            href="/contact"
                            className="group flex items-center justify-center gap-3"
                          >
                            Start a Project

                            <ArrowRight
                              className="
                      size-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                            />
                          </Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>

                  {/* Bottom contact */}
                  <div className="mt-auto border-t border-slate-100 pt-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Get in touch
                    </p>

                    <a
                      href="mailto:hello@depthdigi.com"
                      className="mt-3 block text-sm font-semibold text-[#151542] transition hover:text-violet-600"
                    >
                      hello@depthdigi.com
                    </a>

                    <p className="mt-2 text-xs text-slate-500">
                      Bangladesh · Remote Worldwide
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}