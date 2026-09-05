"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const stars = [
    { left: "12%", top: "35%", size: "text-[6px]" },
    { left: "22%", top: "48%", size: "text-[6px]" },
    { left: "35%", top: "53%", size: "text-[6px]" },
    { left: "40%", top: "30%", size: "text-[8px]" },
    { left: "63%", top: "42%", size: "text-[6px]" },
  ];

  const playSound = () => {

    try {
      const audioCtx = new (window.AudioContext ||
        (window as any).webkitAudioContext)();

      // Click
      const click = audioCtx.createOscillator();
      const clickGain = audioCtx.createGain();

      click.type = "triangle";
      click.frequency.setValueAtTime(650, audioCtx.currentTime);
      click.frequency.exponentialRampToValueAtTime(
        350,
        audioCtx.currentTime + 0.08
      );

      clickGain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      clickGain.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtx.currentTime + 0.08
      );

      click.connect(clickGain);
      clickGain.connect(audioCtx.destination);

      click.start();
      click.stop(audioCtx.currentTime + 0.08);

      // Swoosh
      const swoosh = audioCtx.createOscillator();
      const swooshGain = audioCtx.createGain();

      swoosh.type = "sine";
      swoosh.frequency.setValueAtTime(300, audioCtx.currentTime + 0.05);
      swoosh.frequency.exponentialRampToValueAtTime(
        700,
        audioCtx.currentTime + 0.15
      );

      swooshGain.gain.setValueAtTime(0.05, audioCtx.currentTime + 0.05);
      swooshGain.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtx.currentTime + 0.15
      );

      swoosh.connect(swooshGain);
      swooshGain.connect(audioCtx.destination);

      swoosh.start(audioCtx.currentTime + 0.05);
      swoosh.stop(audioCtx.currentTime + 0.15);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={() => {
        playSound();
        setTheme(isDark ? "light" : "dark")
      }}
      className={`relative w-22.5 h-11 rounded-full overflow-hidden
        transition-all duration-700 shadow-inner
        ${isDark
          ? "bg-linear-to-r from-slate-900 via-slate-800 to-slate-700"
          : "bg-linear-to-r from-sky-400 via-sky-300 to-sky-200"
        }
      `}
    >
      {/* Background Layers */}
      {!isDark ? (
        <>
          {/* Sky */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-4 h-full w-10 bg-sky-500/20 rounded-full" />
            <div className="absolute top-0 left-8 h-full w-10 bg-sky-500/10 rounded-full" />
          </div>

          {/* Clouds */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="absolute -bottom-2 left-2 w-8 h-8 bg-white rounded-full" />
            <div className="absolute -bottom-2.5 left-8 w-10 h-10 bg-white rounded-full" />
            <div className="absolute -bottom-2 left-16 w-8 h-8 bg-white rounded-full" />
            <div className="absolute -bottom-3 right-2 w-12 h-12 bg-white rounded-full" />
          </div>
        </>
      ) : (
        <>
          {/* Night Layers */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-5 h-full w-12 bg-white/5 rounded-full" />
            <div className="absolute top-0 left-10 h-full w-12 bg-white/5 rounded-full" />
          </div>

          {/* Stars */}
          {stars.map((star, i) => (
            <span
              key={i}
              className={`absolute text-white animate-pulse ${star.size}`}
              style={{
                left: star.left,
                top: star.top,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              ✦
            </span>
          ))}
        </>
      )}

      {/* Toggle Knob */}
      <div
        className={`absolute top-1 w-9 h-9
          rounded-full transition-all duration-700
          flex items-center justify-center shadow-lg
          ${isDark ? "translate-x-11.5" : "translate-x-1"}
        `}
      >
        {!isDark ? (
          // <div className="w-full h-full rounded-full bg-yellow-400 border border-yellow-500 shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
          <div className="relative w-full h-full">
            {/* Outer Glow */}
            <div className="absolute -inset-1 rounded-full bg-yellow-300/40 blur-md" />
            {/* Sun */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-yellow-200 via-yellow-400 to-yellow-500 border border-yellow-500 shadow-lg" />
            {/* Reflection */}
            <div className="absolute top-1.5 left-2 w-2.5 h-2.5 rounded-full bg-white/70" />
            {/* Soft Highlight */}
            <div className="absolute top-2 left-3 w-3 h-1.5 rounded-full bg-white/30 blur-sm" />
          </div>
        ) : (
          <div className="relative w-full h-full rounded-full bg-gray-300 border border-gray-400 inset-shadow-sm">
            <div className="absolute top-2 left-1.5 w-3 h-3 rounded-full bg-gray-400" />
            <div className="absolute top-2.5 right-1.5 w-2 h-2 rounded-full bg-gray-500" />
            <div className="absolute bottom-1.5 left-4 w-1.5 h-1.5 rounded-full bg-gray-500" />
          </div>
        )}
      </div>
    </button>
  );
}