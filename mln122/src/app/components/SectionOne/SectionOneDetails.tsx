"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type SectionOneDetailsProps = {
  item: {
    id: number;
    title: string;
    images: string[];
    description: string;
  };
};

export const SectionOneDetails = ({ item }: SectionOneDetailsProps) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.3 }}
      className='bg-indigo-900/3  backdrop-blur-sm border border-gray-500 rounded-lg p-6 md:p-8'>
      <motion.h3
        variants={itemVariants}
        className='text-2xl md:text-3xl font-bold text-purple-400 mb-6'>
        {item.title}
      </motion.h3>

      <motion.div variants={itemVariants} className='mb-8'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: item.images.length > 1 ? 2 : 1 },
            1024: {
              slidesPerView: item.images.length > 2 ? 3 : item.images.length,
            },
          }}
          className='w-full rounded-lg overflow-hidden'>
          {item.images.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
                  transition: { duration: 0.3 },
                }}
                className='overflow-hidden rounded-md'>
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${item.title} - image ${i + 1}`}
                  width={800}
                  height={600}
                  className='rounded-md transition-all duration-500 hover:brightness-110 object-cover'
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className='prose prose-invert max-w-none'>
        <p className='text-lg text-gray-200 leading-relaxed'>
          {item.description}
        </p>

        {/* <motion.div
          variants={itemVariants}
          className='mt-8 p-4 bg-indigo-950/50 rounded-lg border border-purple-900'>
          <h4 className='text-xl text-purple-300 mb-3'>Đặc điểm chính</h4>
          <ul className='list-disc pl-5 space-y-2 text-gray-300'>
            <li>
              Đặc điểm quan trọng liên quan đến {item.title.toLowerCase()}
            </li>
            <li>Ảnh hưởng đến nền kinh tế toàn cầu</li>
            <li>Vai trò trong hệ thống tài chính hiện đại</li>
          </ul>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};
