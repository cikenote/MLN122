"use client";
import { motion } from "framer-motion";
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
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: -100,
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

export const Hero = () => {
  return (
    <div className='h-[calc(100vh-96px)] overflow-hidden relative'>
      <motion.article
        variants={textVariants}
        initial='initial'
        animate='animate'
        className='container max-w-7xl mx-auto h-full xl:h-3/4 flex flex-col gap-4 md:gap-8 items-center justify-center text-center'>
        <motion.h2
          variants={textVariants}
          className='text-2xl md:text-4xl text-purple-shade spacing tracking-widest uppercase'>
          Kinh Tế Chính Trị Mác - Lênin
        </motion.h2>
        <motion.h1
          variants={textVariants}
          className='text-4xl md:text-6xl 2xl:text-8xl capitalize'>
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
        className='absolute text-[50vh] -bottom-28 whitespace-nowrap text-hero-bottom w-1/3 font-bold'>
        Biểu hiện mới của độc quyền ngày nay
      </motion.div>
    </div>
  );
};
