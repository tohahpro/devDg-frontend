"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const scrollTimeout = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      // Hide the button while actively scrolling
      setIsVisible(false);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Show the button 150ms after scrolling stops, if scrolled down enough
      scrollTimeout.current = setTimeout(() => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    if (window.scrollY > 300) {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-21 md:bottom-8 right-8 z-50"
        >
          <Button
            variant="default"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full shadow-lg w-9 md:w-12 h-9 md:h-12 hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="md:w-6 md:h-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
