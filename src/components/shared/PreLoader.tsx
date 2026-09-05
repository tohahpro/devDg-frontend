"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                // Random increment for a more organic loading feel
                const next = prev + Math.floor(Math.random() * 12) + 2;
                if (next >= 100) {
                    clearInterval(interval);
                    // Hold at 100% for a brief moment before triggering completion
                    setTimeout(onComplete, 400);
                    return 100;
                }
                return next;
            });
        }, 80);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background text-foreground"
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className="flex flex-col items-center justify-center w-full max-w-sm px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl md:text-9xl font-bold tracking-tighter tabular-nums flex items-baseline"
                >
                    {progress}
                    <span className="text-4xl md:text-6xl text-primary">%</span>
                </motion.div>

                <div className="w-full mt-8 h-0.5 bg-muted overflow-hidden relative rounded-full">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 flex justify-between w-full text-xs font-medium text-muted-foreground uppercase tracking-widest"
                >
                    <span>Loading</span>
                    <span>Experience</span>
                </motion.div>
            </div>
        </motion.div>
    );
}


export const PreLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className={` ${isLoading ? 'min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground h-screen overflow-hidden' : 'overflow-hidden'}`}>
            <AnimatePresence mode="wait">
                {isLoading && <Loader key="preloader" onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>
        </div>
    );
}
