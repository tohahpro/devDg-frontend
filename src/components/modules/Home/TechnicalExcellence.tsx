
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Activity,
  Database,
  Palette,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Frontend Architecture",
    desc: "Designing scalable, maintainable frontend architecture using React and Next.js with TypeScript. Emphasis on modular patterns, domain-driven structure, clean abstractions, and predictable state management using Redux Toolkit, RTK Query, and React Hook Form with validation.",
    icon: Code2,
    tags: ["React", "Next.js", "Redux", "TypeScript"],
  },
  {
    title: "High-Performance Web",
    desc: "Building blazing-fast web applications optimized for Core Web Vitals and Lighthouse scores. Leveraging SSR, ISR, dynamic imports, memoization, advanced caching strategies, and API optimizations to deliver exceptional performance at scale.",
    icon: Activity,
    tags: ["Performance", "SSR", "Web Vitals", "Optimization"],
  },
  {
    title: "API Integration & Data Handling",
    desc: "Integrating complex REST APIs with robust error handling, optimistic updates, pagination, filtering, and caching. Experienced in handling real-time data, file-based access control, and secure data flow in enterprise applications.",
    icon: Database,
    tags: ["REST", "Auth", "Data Flow"],
  },
  {
    title: "Design Systems & UI/UX Engineering",
    desc: "Creating pixel-perfect, responsive, and accessible design systems that scale across teams. Building reusable UI components with Tailwind CSS and ShadCN UI, ensuring consistency, usability, and WCAG-compliant accessibility across products.",
    icon: Palette,
    tags: ["Design System", "Tailwind", "UX"],
  },
  {
    title: "Advanced Animations & Micro-Interactions",
    desc: "Enhancing user experience with smooth, high-performance animations using Framer Motion, and CSS transitions. Implementing layout animations and gesture-based interactions for engaging interfaces.",
    icon: Sparkles,
    tags: ["Framer Motion"],
  }
];


export default function TechnicalExcellence() {
  return (
    <section className="py-24 text-foreground bg-muted">
      <div className="container mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 text-center md:text-left">

          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Solutions
          </p>

          <h2 className="font-extrabold leading-tight">
            Elevating Brands through
          </h2>

          <h2 className="font-extrabold italic leading-tight text-transparent bg-clip-text bg-linear-to-r from-muted-foreground via-primary to-muted-foreground">
            Technical Excellence.
          </h2>

        </div>

        {/* Grid Wrapper */}
        <div className="border border-border overflow-hidden rounded-xl">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`
                  relative p-8 md:p-10
                  border-b border-border
                  md:border-r 
                  group overflow-hidden                  
                  md:nth-[2n]:border-r-0                  
                  last:border-b-0
                  before:absolute
                  before:left-0
                  before:top-0
                  before:h-0
                  before:w-0.5
                  before:bg-linear-to-b
                  before:from-primary
                  before:to-transparent
                  before:opacity-70
                  before:transition-all
                  before:duration-500

                  hover:before:h-full
                  hover:before:opacity-100

                  bg-card text-card-foreground
                `}
              >
                {/* Icon */}
                <div className="mb-6 text-muted-foreground">
                  <item.icon className="w-6 md:w-8 h-6 md:h-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs uppercase tracking-widest px-2 py-1 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}