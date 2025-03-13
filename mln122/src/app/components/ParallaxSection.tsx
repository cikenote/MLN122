"use client"; // Ensure this is a Client Component since we're using hooks

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  imageSrc: string;
}

function ParallaxSection({ children, imageSrc }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div ref={ref} className='relative min-h-screen'>
      {/* Parallax Image Background */}
      <motion.div
        className='absolute top-0 left-0 right-0 h-[120%]'
        style={{ y }}>
        <Image
          src={imageSrc}
          alt='Hình ảnh minh họa'
          //   layout='fill'
          objectFit='cover'
          width={1200}
          height={300}
          className='pointer-events-none'
        />
      </motion.div>
      {/* Foreground Content */}
      <div className='relative z-10 p-6 max-w-4xl mx-auto'>{children}</div>
    </div>
  );
}

export default ParallaxSection;
