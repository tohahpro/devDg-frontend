"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { PublicLogo } from "./PublicLogo";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export function ProjectsNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const MotionLink = motion(Link);

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Navbar */}
      <div className="container fixed left-1/2 top-2.5 z-50 mx-auto w-[95%] -translate-x-1/2">
        <div className="relative flex items-center justify-between overflow-hidden rounded-lg border border-black/10 bg-white/70 px-6 py-2.5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-black/40">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10"
          >
            <PublicLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="relative z-10 ml-auto mr-10 hidden gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <MotionLink
                  key={item.name}
                  href={item.href}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="relative flex items-center justify-center px-4 pt-4"
                >
                  {/* Active limelight */}
                  {isActive && (
                    <motion.div
                      layoutId="projects-navbar-limelight"
                      transition={{
                        type: "spring",
                        stiffness: 290,
                        damping: 28,
                      }}
                      className="absolute inset-x-3 top-0 z-0 h-0.5 rounded-full bg-primary"
                    >
                      {/* Small glow */}
                      <div className="absolute left-0 top-1 h-2.5 w-full rounded-full bg-primary opacity-80 blur-md" />

                      {/* Large glow */}
                      <div className="absolute left-[-15%] top-0 h-10 w-[130%] rounded-full bg-primary/30 blur-2xl" />

                      {/* Light beam */}
                      <div className="absolute left-[-58%] top-0.5 h-10 w-[216%] bg-linear-to-b from-primary/30 via-primary/10 to-transparent [clip-path:polygon(10%_100%,30%_0,70%_0,90%_100%)]" />
                    </motion.div>
                  )}

                  <span
                    className={cn(
                      "relative z-10 text-sm font-semibold transition-all duration-300",
                      isActive
                        ? "bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                        : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                    )}
                  >
                    {item.name}
                  </span>
                </MotionLink>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="relative z-10 flex items-center gap-3">
            <ThemeToggle />

            <button
              type="button"
              aria-label={
                isOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              className="cursor-pointer p-2 transition-transform active:scale-90 md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "100%",
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-2xl border border-black/10 bg-white/70 p-6 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-black/40"
            >
              <div className="flex flex-col">
                {navItems.map((item, index) => {
                  const isActive = isActiveRoute(
                    item.href
                  );

                  return (
                    <MotionLink
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition",
                        isActive
                          ? "bg-black/10 text-black dark:bg-white/10 dark:text-white"
                          : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                      )}
                    >
                      {item.name}
                    </MotionLink>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}