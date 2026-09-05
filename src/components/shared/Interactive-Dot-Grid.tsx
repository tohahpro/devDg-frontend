/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable prefer-const */
"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
}

export function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: Dot[] = [];
    const spacing = 25; // Space between dots
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const initGrid = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = [];
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
            size: 1.5,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Use a nice blue/cyan color that matches the screenshot
      ctx.fillStyle = resolvedTheme === 'dark' ? 'rgba(56, 189, 248, 0.6)' : 'rgba(2, 132, 199, 0.4)';

      dots.forEach((dot) => {
        let dx = mouse.x - dot.x;
        let dy = mouse.y - dot.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Repulsion force
        if (distance < mouse.radius) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let force = (mouse.radius - distance) / mouse.radius;
          
          let directionX = forceDirectionX * force * -5;
          let directionY = forceDirectionY * force * -5;
          
          dot.vx += directionX;
          dot.vy += directionY;
        }

        // Spring back to original position
        dot.vx += (dot.baseX - dot.x) * 0.03;
        dot.vy += (dot.baseY - dot.y) * 0.03;

        // Friction
        dot.vx *= 0.85;
        dot.vy *= 0.85;

        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      initGrid();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    initGrid();
    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
