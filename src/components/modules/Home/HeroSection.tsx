/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MasonryCarousel } from "./MasonryCarousel";


const HeroSection = () => {

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#fbfbfe] dark:bg-[#070a14]"
    >
      {/* BASE BACKGROUND */}
      <div className="absolute inset-0 -z-50 bg-[#fbfbfe] dark:bg-[#070a14]" />

      {/* SOFT TOP LINEAR GRADIENT */}
      <div
        className="absolute inset-0 -z-40 bg-linear-to-b from-primary/7
        via-transparent to-transparent dark:from-primary/12"
      />

      {/* LARGE CENTER GLOW */}
      <div
        className="
      absolute -top-[18rem] left-1/2 -z-40
      h-[42rem] w-[68rem]
      -translate-x-1/2
      rounded-full
      bg-primary/08
      blur-[120px]
      dark:bg-primary/12
    "
      />

      {/* LEFT SOFT PINK GLOW */}
      <motion.div
        style={{ y, opacity }}
        className="
      absolute top-[16%] -left-44 -z-30
      h-[32rem] w-[32rem]
      rounded-full
      bg-pink-300/20
      blur-[130px]
      dark:bg-fuchsia-500/10
    "
      />

      {/* RIGHT PURPLE GLOW */}
      <motion.div
        style={{ y, opacity }}
        className="
      absolute top-[8%] -right-40 -z-30
      h-[36rem] w-[36rem]
      rounded-full
      bg-violet-300/25
      blur-[140px]
      dark:bg-violet-600/15
    "
      />

      {/* BOTTOM CENTER GLOW */}
      <div
        className="
      absolute bottom-[-18rem] left-1/2 -z-30
      h-[34rem] w-[55rem]
      -translate-x-1/2
      rounded-full
      bg-indigo-200/20
      blur-[140px]
      dark:bg-indigo-600/10
    "
      />

      {/* DOT GRID PATTERN */}
      <div
        className="
    absolute inset-0 -z-20
    opacity-45 dark:opacity-20
    [background-image:radial-gradient(circle,rgba(99,102,241,0.22)_1.6px,transparent_1.6px)]
    [background-size:24px_24px]
    [mask-image:linear-gradient(to_bottom,black_0%,black_65%,transparent_100%)]
  "
      />

      {/* SUBTLE VERTICAL LIGHT */}
      <div
        className="
      absolute top-0 left-1/2 -z-10
      h-full w-px
      -translate-x-1/2
      bg-linear-to-b
      from-transparent
      via-primary/10
      to-transparent
    "
      />

      {/* DECORATIVE DOTS - TOP RIGHT */}
      <div
        className="
      absolute top-24 right-[5%] -z-10
      hidden h-24 w-24 md:block
      opacity-60
      [background-image:radial-gradient(circle,rgba(99,102,241,0.7)_1.4px,transparent_1.4px)]
      [background-size:12px_12px]
      [mask-image:linear-gradient(to_bottom_left,black,transparent_75%)]
    "
      />

      {/* DECORATIVE DOTS - LEFT */}
      <div
        className="
      absolute bottom-36 left-[3%] -z-10
      hidden h-20 w-20 lg:block
      opacity-30
      [background-image:radial-gradient(circle,rgba(236,72,153,0.7)_1.3px,transparent_1.3px)]
      [background-size:11px_11px]
      [mask-image:linear-gradient(to_top_right,black,transparent_75%)]
    "
      />

      {/* WATERMARK */}
      <div
        className="
      pointer-events-none absolute inset-0 -z-10
      flex items-start justify-center pt-60
      md:items-center md:pt-0
    "
      >
        <h1
          className="
        whitespace-nowrap
        text-[3rem] font-black
        tracking-[0.12em]
        text-slate-950/[0.025]
        md:text-[5rem]
        lg:text-[7rem]
        xl:text-[9rem]
        dark:text-white/[0.025]
      "
        >
          FULL STACK
        </h1>
      </div>

      {/* CONTENT */}
      <div
        className="
      container mx-auto flex min-h-screen items-center
      px-6 pb-20 pt-28
      md:px-10 md:pb-28 md:pt-32
      lg:pt-24
    "
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
          mx-auto flex max-w-3xl flex-col gap-6
          text-center lg:mx-0 lg:text-left
        "
          >
            {/* STATUS */}
            <div
              className="
            mx-auto inline-flex w-fit items-center gap-2
            rounded-full
            border border-slate-200/80
            bg-white/70
            px-4 py-2
            text-sm text-muted-foreground
            shadow-[0_8px_30px_rgba(15,23,42,0.06)]
            backdrop-blur-xl
            lg:mx-0
            dark:border-white/10
            dark:bg-white/[0.05]
          "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>

              Available for work
            </div>

            {/* TITLE */}
            <h1
              className="
            text-[2.8rem] font-bold
            leading-[1.02] tracking-[-0.045em]
            text-slate-950
            sm:text-6xl
            lg:text-[4.5rem]
            xl:text-[5rem]
            dark:text-white
          "
            >
              Crafting digital <br />

              <span
                className="
              bg-linear-to-r
              from-primary
              via-violet-500
              to-fuchsia-500
              bg-clip-text
              text-transparent
            "
              >
                experiences
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
            mx-auto max-w-xl
            text-base leading-7
            text-slate-600
            sm:text-lg
            lg:mx-0
            dark:text-slate-400
          "
            >
              I'm a full-stack developer specializing in fast, accessible, and
              visually appealing web apps.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 pt-3 lg:justify-start">
              <Button
                size="lg"
                className="
              h-12 rounded-lg px-6
              text-sm font-semibold
              shadow-[0_12px_30px_rgba(15,23,42,0.18)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_18px_38px_rgba(15,23,42,0.22)]
            "
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
              h-12 rounded-lg
              border-slate-200/90
              bg-white/65 px-6
              text-sm font-semibold
              shadow-sm
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-white
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:hover:bg-white/[0.08]
            "
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
          relative flex w-full justify-center
          lg:justify-end
        "
          >
            {/* CAROUSEL BACK GLOW */}
            <div
              className="
            absolute left-1/2 top-1/2 -z-10
            h-[80%] w-[85%]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-linear-to-r
            from-pink-300/25
            via-primary/20
            to-violet-300/30
            blur-[80px]
            dark:from-pink-500/10
            dark:via-primary/15
            dark:to-violet-500/15
          "
            />

            <MasonryCarousel />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div
        className="
      pointer-events-none absolute inset-x-0 bottom-0 z-0
      h-32
      bg-linear-to-t
      from-background
      to-transparent
    "
      />
    </section>
  );
};

export default HeroSection;