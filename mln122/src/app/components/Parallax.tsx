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

  // Hiệu ứng cuộn text
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  // const opacityText = useTransform(
  //   scrollYProgress,
  //   [0, 0.2, 0.8, 1],
  //   [0, 1, 1, 0]
  // );
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Hiệu ứng nền di chuyển mượt hơn
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-screen relative flex items-center justify-center overflow-hidden z-50"
      )}
    >
      {/* Hiệu ứng chữ */}
      <motion.h1
        style={{ y: yText, scale: scaleText }}
        className="uppercase text-center text-8xl md:text-6xl font-bold text-white z-50 w-[60%] transition-all duration-500 ease-out"
      >
        {type}
      </motion.h1>

      {/* Background Layer 1 */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="bg-[url(/images/mountains.png)] bg-cover bg-bottom w-full h-full absolute z-30"
      />

      {/* Background Layer 2 */}
      <motion.div
        style={{ y: yBg }}
        className="bg-[url(/images/stars.png)] bg-cover bg-bottom w-full h-full absolute z-10 opacity-80"
      />
    </div>
  );
};
