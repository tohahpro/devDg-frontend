import {
    motion,
    useMotionValue,
    useSpring
} from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {

    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;

            // check if hoverable element
            if (
                target.closest("button, a, h1, h2, h3, h4, h5, h6, p, .card, [data-cursor='pointer']")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

    return (
        <>
            {/* OUTER GLOW */}
            <motion.div
                className="fixed rounded-full pointer-events-none z-30"
                animate={{
                    width: isHovering ? 320 : 300,
                    height: isHovering ? 320 : 300,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background:
                        "radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)",
                }}
            />

            {/* OUTER RING */}
            <motion.div
                className="fixed rounded-full pointer-events-none z-40 border border-black/10 dark:border-white/30"
                animate={{
                    width: isHovering ? 60 : 40,
                    height: isHovering ? 60 : 40,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* CENTER DOT */}
            <motion.div
                className="fixed rounded-full pointer-events-none z-50 bg-black dark:bg-white"
                animate={{
                    width: isHovering ? 12 : 8,
                    height: isHovering ? 12 : 8,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
};

export default CursorGlow;