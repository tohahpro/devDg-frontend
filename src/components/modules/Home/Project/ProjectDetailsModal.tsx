/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

interface ProjectDetailsDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  project?: any;
}

export default function ProjectDetailsDialog({
  open,
  setOpen,
  project,
}: ProjectDetailsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="md:min-w-xl p-0 overflow-hidden">
        {/* Image */}
        <div className="relative">
          <Image
            src={project?.image}
            alt={project?.title}
            className="w-full h-48 object-cover"
            width={600}
            height={288}
          />
          <div className="absolute inset-0 bg-black/40" />
          <h2 className="absolute bottom-3 left-4 text-white text-xl font-semibold">
            {project?.title}
          </h2>
        </div>

        <div className="p-5">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-lg">Project Overview</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {project?.description}
            </DialogDescription>
          </DialogHeader>

          {/* Tech Stack */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">🚀 Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project?.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mt-4">
            <div className="flex items-center text-sm font-semibold mb-2">
              <div className="flex h-8 w-8 gap-1 items-center justify-center rounded-full bg-[#306636]/10">
                <span className="text-lg">📦</span>
              </div>
              Features
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {project?.features.map((feature: string) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-0.5 font-semibold text-[#306636]">
                    <CircleCheckBig className="w-3 h-3" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <a
              href={project?.github}
              target="_blank"
              className="flex-1 text-center px-4 py-2 rounded border text-sm hover:bg-muted transition"
            >
              GitHub
            </a>
            <a
              href={project?.live}
              target="_blank"
              className="flex-1 text-center px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black text-sm hover:opacity-80 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
