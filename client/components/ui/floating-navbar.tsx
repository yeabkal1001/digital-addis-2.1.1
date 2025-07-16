"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          "rounded-full border border-white/30 shadow-xl",
          "bg-white/30 backdrop-blur-2xl",
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/40 before:to-white/10 before:pointer-events-none before:z-[-1]",
          className
        )}
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.08)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-800 dark:text-neutral-50 items-center flex space-x-1 text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-white/40 hover:backdrop-blur transition-colors duration-200",
              idx === navItems.length - 1 && "bg-white/50 dark:bg-white/10 border border-white/40 text-black dark:text-white font-bold shadow-md hover:bg-white/70 dark:hover:bg-white/20"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}; 