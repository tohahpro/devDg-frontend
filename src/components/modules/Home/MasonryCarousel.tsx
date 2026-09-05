/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Atom, FileCode2, Globe, Palette, Wand2,
  Server, Database, Container, Cloud,
  GitBranch, Cpu, Terminal, Laptop, MonitorSmartphone
} from "lucide-react";
import { cn } from "@/lib/utils";

// Tool data with different heights to create a masonry effect
const tools = [
  // Column 1
  { icon: Atom, name: "React", h: "h-32", color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
  { icon: FileCode2, name: "TypeScript", h: "h-40", color: "text-[#3178C6]", bg: "bg-[#3178C6]/10" },
  { icon: Globe, name: "Next.js", h: "h-28", color: "text-foreground", bg: "bg-foreground/10" },
  { icon: Palette, name: "Tailwind", h: "h-36", color: "text-[#38B2AC]", bg: "bg-[#38B2AC]/10" },
  { icon: Wand2, name: "Framer", h: "h-32", color: "text-[#0055FF]", bg: "bg-[#0055FF]/10" },

  // Column 2
  { icon: Server, name: "Node.js", h: "h-40", color: "text-[#339933]", bg: "bg-[#339933]/10" },
  { icon: Database, name: "Database", h: "h-28", color: "text-[#336791]", bg: "bg-[#336791]/10" },
  { icon: Container, name: "Docker", h: "h-32", color: "text-[#2496ED]", bg: "bg-[#2496ED]/10" },
  { icon: Cloud, name: "AWS", h: "h-36", color: "text-[#FF9900]", bg: "bg-[#FF9900]/10" },
  // { icon: Figma, name: "Figma", h: "h-32", color: "text-[#F24E1E]", bg: "bg-[#F24E1E]/10" },

  // Column 3
  { icon: GitBranch, name: "Git", h: "h-28", color: "text-[#F05032]", bg: "bg-[#F05032]/10" },
  { icon: Cpu, name: "API", h: "h-40", color: "text-primary", bg: "bg-primary/10" },
  { icon: Terminal, name: "Bash", h: "h-32", color: "text-[#4EAA25]", bg: "bg-[#4EAA25]/10" },
  { icon: MonitorSmartphone, name: "Responsive", h: "h-36", color: "text-accent", bg: "bg-accent/10" },
  { icon: Laptop, name: "Web", h: "h-28", color: "text-secondary", bg: "bg-secondary/10" },
];

const col1 = tools.slice(0, 5);
const col2 = tools.slice(5, 10);
const col3 = tools.slice(10, 15);

function ToolCard({ item }: { item: any }) {
  const Icon = item.icon;
  return (
    <div className={`w-full ${item.h} rounded-2xl flex flex-col items-center justify-center p-4 border border-border/50 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all relative overflow-hidden group hover:-translate-y-1`}>
      <div className={cn(`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`)}></div>
      <Icon className={cn(`w-10 h-10 mb-2 ${item.color} drop-shadow-sm group-hover:scale-110 transition-transform duration-300`)} />
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors z-10">{item.name}</span>
    </div>
  );
}

export function MasonryCarousel() {
  return (
    <div className="relative h-90 md:h-137.5 w-full max-w-md md:ml-auto flex overflow-hidden [linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-4 w-full h-full justify-center px-9 md:px-0">
        {/* Column 1 - Scrolling UP */}
        <div className="flex-1 w-full relative">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex flex-col gap-4 w-full absolute pt-4"
          >
            {[...col1, ...col1].map((item, i) => (
              <ToolCard key={`c1-${i}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Column 2 - Scrolling DOWN */}
        <div className="flex-1 w-full relative">
          <motion.div
            animate={{ y: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex flex-col gap-4 w-full absolute pt-4"
          >
            {[...col2, ...col2].map((item, i) => (
              <ToolCard key={`c2-${i}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* Column 3 - Scrolling UP with delay */}
        <div className="flex-1 w-full relative">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex flex-col gap-4 w-full absolute pt-4"
          >
            {[...col3, ...col3].map((item, i) => (
              <ToolCard key={`c3-${i}`} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
