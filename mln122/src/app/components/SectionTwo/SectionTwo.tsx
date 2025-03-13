"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { SectionTwoDetails } from "./SectionTwoDetails";
// import { portfolioData } from "@/data";

const data = [
  {
    id: 1,
    title: "Biểu hiện mới về cơ chế quan hệ nhân sự",
    image: "/images/image_8.svg",
    description:
      "Cơ chế quan hệ nhân sự ngày càng thể hiện tính đa nguyên, khi quyền lực nhà nước không còn tập trung vào tư bản độc quyền mà phải chia sẻ, thỏa hiệp, đồng thời xuất hiện thế lực trung dung, tạo nên một hệ thống kinh tế - chính trị ôn hòa hơn",
    // link: currentUrl,
  },
  {
    id: 2,
    title: "Biểu hiện mới về sở hữu nhà nước",
    image: "/images/image_10.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    // link: currentUrl,
  },
  {
    id: 3,
    title: "Biểu hiện mới trong vai trò công cụ điều tiết kinh tế",
    image: "/images/image_11.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    // link: currentUrl,
  },
];
const SectionTwo = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div ref={ref} className='relative overflow-auto scroll-smooth'>
      <article className='sticky top-0 left-0 pt-4 md:pt-10 flex flex-col gap-2'>
        <h2 className='text-center text-orange-400 text-2xl md:text-5xl'>
          Biểu hiện mới của độc quyền nhà nước dưới chủ nghĩa tư bản
        </h2>
        <motion.div style={{ scaleX }} className='h-2 bg-white' />
      </article>
      {data.map((item) => (
        <SectionTwoDetails key={item.id} {...item} />
      ))}
    </div>
  );
};

export default SectionTwo;
