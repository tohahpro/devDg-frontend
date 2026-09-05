/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import {
  Server, Triangle, Code2,
  CreditCard, Atom, Palette, Cloud,
} from "lucide-react";
import {
  SiTailwindcss, SiPostman, SiShadcnui, SiRedis, SiFusionauth,
  SiMongodb, SiPostgresql, SiPrisma, SiTypescript
} from "react-icons/si";
import { FaGithub, FaFigma, FaSlack, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";


// shadcn tabs
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const skillsData: Record<string, any[]> = {
  EXPERTISE: [
    { name: "React", category: "FRONTEND CORE", icon: Atom, colSpan: "md:col-span-1 lg:col-span-1" },
    { name: "TypeScript", category: "LANGUAGE", icon: SiTypescript, colSpan: "md:col-span-2 lg:col-span-1" },
    { name: "Next.js", category: "FRAMEWORK", icon: RiNextjsLine, colSpan: "md:col-span-2 lg:col-span-2" },
    { name: "Tailwind CSS", category: "STYLING", icon: SiTailwindcss, colSpan: "md:col-span-1 lg:col-span-1" },
    { name: "Node.js", category: "BACKEND", icon: FaNodeJs, colSpan: "md:col-span-1 lg:col-span-2" },
    { name: "Express.js", category: "BACKEND", icon: Server, colSpan: "md:col-span-2 lg:col-span-1" },
  ],
  COMFORTABLE: [
    { name: "MongoDB", category: "Data Modeling", icon: SiMongodb, colSpan: "md:col-span-1 lg:col-span-1" },
    { name: "PostgreSQL", category: "Data Modeling", icon: SiPostgresql, colSpan: "md:col-span-2 lg:col-span-2" },
    // { name: "Figma", category: "Design Handoff", icon: MessageSquare, colSpan: "md:col-span-2 lg:col-span-1" },
    { name: "Passport.js", category: "Authentication", icon: SiFusionauth, colSpan: "md:col-span-2 lg:col-span-1" },
    // { name: "Stripe", category: "PAYMENTS", icon: CreditCard, colSpan: "md:col-span-2 lg:col-span-2" },
    { name: "Prisma", category: "Orm Logic", icon: SiPrisma, colSpan: "md:col-span-1 lg:col-span-2" },
    { name: "UI/UX Design", category: "Design", icon: Palette, colSpan: "md:col-span-2 lg:col-span-1" },
  ],
  FAMILIAR: [
    { name: "Framer Motion", category: "ANIMATION", icon: Cloud, colSpan: "md:col-span-2 lg:col-span-2" },
    { name: "Redis", category: "Caching", icon: SiRedis, colSpan: "md:col-span-1 lg:col-span-2" },
  ],
  TOOLS: [
    { name: "GitHub", category: "CI/CD & FLOW", icon: FaGithub, colSpan: "md:col-span-2 lg:col-span-1" },
    { name: "Figma", category: "DESIGN HANDOFF", icon: FaFigma, colSpan: "md:col-span-1 lg:col-span-1" },
    { name: "Postman", category: "API TESTING", icon: SiPostman, colSpan: "md:col-span-1 lg:col-span-2" },
    // { name: "Docker", category: "CONTAINERIZATION", icon: Server, colSpan: "md:col-span-2 lg:col-span-1" },
    { name: "Vercel", category: "DEPLOYMENT", icon: Triangle, colSpan: "md:col-span-2 lg:col-span-1" },
    { name: "Slack", category: "COLLABORATION", icon: FaSlack, colSpan: "md:col-span-2 lg:col-span-2" },
    // { name: "Jira", category: "PROJECT MANAGEMENT", icon: MessageSquare, colSpan: "md:col-span-1 lg:col-span-2" },
    { name: "Shadcn UI", category: "Component Libraries", icon: SiShadcnui, colSpan: "md:col-span-1 lg:col-span-1" },
    { name: "Stripe", category: "PAYMENTS", icon: CreditCard, colSpan: "md:col-span-1 lg:col-span-2" },
    { name: "VS Code", category: "DEVELOPMENT ENVIRONMENT", icon: Code2, colSpan: "md:col-span-2 lg:col-span-1" },
  ],
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("TOOLS");

  return (
    <section id="skills" className="py-24 relative text-foreground">
      <div className="mx-auto px-6 md:px-10 container">

        {/* Header */}
        <div className="text-center md:text-left mb-16 md:mb-0 max-w-3xl mx-auto md:mx-0">
          {/* STATUS / BADGE */}
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Technical Arsenal
          </p>

          {/* TITLE */}
          <h2 className="font-extrabold tracking-tight">
            Develop with <br />
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
              Modern Tech.
            </span>
          </h2>

          {/* DESC */}
          {/* <p className="mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
            A focused stack of modern tools I use to build fast, scalable, and polished
            web applications.
          </p> */}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center md:justify-end">
            <TabsList className="flex justify-end mb-12 bg-card text-card-foreground py-5 md:py-6 rounded-md shadow-sm">
              {Object.keys(skillsData).map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="flex-1 rounded-md md:px-2 py-4 md:py-5 data-[state=active]:bg-background data-[state=active]:shadow-xl"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {Object.keys(skillsData).map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {skillsData[tab].map((skill, index) => (
                  <motion.article
                    key={`${tab}-${skill.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "bg-card text-card-foreground border rounded-xl p-6 relative overflow-hidden group hover:border-primary/40 transition",
                      skill.colSpan
                    )}
                  >
                    {/* Top Right Circle */}
                    {/* <div className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-125" /> */}

                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-lg transition-all duration-500 group-hover:scale-125" />

                    <div className="absolute -right-8 -top-8 h-18 w-18 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150" />

                    {/* Existing Number */}
                    <div className="absolute -bottom-8 -right-4 text-9xl font-black text-muted-foreground/10">
                      {index + 1}
                    </div>

                    <div className="flex flex-col justify-between h-full gap-10">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border group-hover:scale-110 transition">
                        <skill.icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
                      </div>

                      <div>
                        <h4 className="font-bold mb-2">{skill.name}</h4>

                        <span
                          className="relative pl-4 text-[10px] tracking-widest uppercase text-muted-foreground transition-all duration-300 ease-out before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-px before:w-3 before:bg-muted-foreground before:transition-all before:duration-300 group-hover:pl-7 group-hover:before:w-6"
                        >
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}

              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}