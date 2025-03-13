"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  scrollButton: {
    opacity: [0, 1, 0], // Nhấp nháy nhẹ
    y: [0, 10, 0], // Nhún lên xuống
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const sliderVariants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: "-100%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 12,
      ease: "linear",
    },
  },
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]); // Parallax nhẹ
  const opacityTitle = useTransform(scrollYProgress, [0, 1], [1, 0.5]); // Mờ dần khi scroll

  return (
    <div ref={ref} className='h-[calc(100vh-96px)] overflow-hidden relative'>
      <motion.article
        variants={textVariants}
        initial='initial'
        animate='animate'
        className='container max-w-7xl mx-auto h-full xl:h-3/4 flex flex-col gap-4 md:gap-8 items-center justify-center text-center'>
        <motion.h2
          variants={textVariants}
          whileHover='hover'
          style={{ y: yTitle, opacity: opacityTitle }}
          className='text-2xl md:text-4xl text-purple-200 tracking-widest uppercase '>
          Kinh Tế Chính Trị Mác - Lênin
        </motion.h2>
        <motion.h1
          variants={textVariants}
          whileHover='hover'
          style={{ y: yTitle, opacity: opacityTitle }}
          className='text-4xl md:text-6xl 2xl:text-8xl capitalize text-white font-extrabold'>
          Group 5
        </motion.h1>
        <motion.img
          src='/images/scroll.png'
          alt='scroll'
          variants={textVariants}
          animate='scrollButton'
          width={48}
          height={48}
          className='w-12 h-12'
        />
      </motion.article>

      <motion.div
        variants={sliderVariants}
        initial='initial'
        animate='animate'
        className='absolute bottom-10 text-[10vh] whitespace-nowrap text-hero-bottom w-full font-bold text-white flex'>
        <span className='pr-20'>Biểu hiện mới của độc quyền ngày nay</span>
        <span className='pr-20'>Biểu hiện mới của độc quyền ngày nay</span>
      </motion.div>
    </div>
  );
};
