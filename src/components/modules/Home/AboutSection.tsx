'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-32 bg-muted/40">
      <div className="container mx-auto px-6 md:px-10" ref={ref}>

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-xl text-center"
        >
          <h2 className="text-center font-extrabold leading-[0.95] tracking-tight md:text-left">
            Clear vision,
            <br />

            <span className="inline-block pr-3 italic text-transparent bg-clip-text bg-linear-to-r from-muted-foreground via-primary to-muted-foreground">
              focused execution
            </span>
          </h2>
        </motion.div>

        {/* 🔷 SPLIT SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* 🎯 MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="p-10 rounded-xl border bg-card text-card-foreground backdrop-blur-sm space-y-6"
          >
            <h3 className="">My Mission</h3>

            <p className="text-muted-foreground leading-relaxed">
              My mission is to design and develop scalable, production-ready
              applications that solve real-world problems. I focus on writing
              clean, maintainable code while ensuring performance, reliability,
              and long-term scalability.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I aim to continuously improve my skills and contribute to building
              impactful digital products that create value for users and businesses.
            </p>

            {/* subtle highlight */}
            <div className="pt-4 border-t border-border text-sm text-muted-foreground">
              “Simplicity, scalability, and performance drive everything I build.”
            </div>
          </motion.div>

          {/* 🎯 FOCUS AREAS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <h3 className="">Focus Areas</h3>

            {[
              {
                title: "Enterprise Application Development",
                desc: "Building large-scale systems with robust architecture.",
              },
              {
                title: "Scalable System Design",
                desc: "Designing maintainable and modular backend/frontend systems.",
              },
              {
                title: "Performance Optimization",
                desc: "Improving speed, efficiency, and responsiveness of apps.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                className="p-6 rounded-xl bg-card text-card-foreground border backdrop-blur-sm hover:border-primary/40 transition group"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary mt-1" size={20} />

                  <div>
                    <h4 className="font-medium group-hover:text-primary transition">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}