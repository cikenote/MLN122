"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  type: string;
}

export const Parallax = ({ type }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-full relative flex items-center justify-center overflow-hidden",
        {
          "bg-past-work-gradient": type === "services",
          "bg-portfolio-gradient": type === "portfolio",
        }
      )}>
      <motion.h1
        style={{ y: yText }}
        className='uppercase  mx-auto text-centertext-8xl md:text-6xl z-50  w-[60%]'>
        {type}
      </motion.h1>
      <motion.div
        className={cn(
          "bg-[url(/images/mountains.png)] bg-contain bg-no-repeat md:bg-repeat md:bg-cover bg-bottom w-full h-full absolute z-30"
        )}
      />
      <motion.div
        style={{
          y: yBg,
        }}
        className={cn(
          "bg-contain bg-no-repeat md:bg-cover md:bg-repeat bg-bottom w-full h-full absolute z-20",
          {
            "bg-planets-image": type === "services",
            "bg-sun-image": type === "portfolio",
          }
        )}
      />
      <motion.div
        style={{ x: yBg }}
        className={cn(
          "bg-[url(/images/stars.png)] bg-cover bg-bottom w-full h-full absolute z-10"
        )}
      />
    </div>
  );
};
