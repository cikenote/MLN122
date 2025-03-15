"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { SectionThreeDetails } from "./SectionThreeDetails";
import Image from "next/image";
// import { portfolioData } from "@/data";

const data = [
  {
    id: 1,
    title: "Vai trò tích cực của chủ nghĩa tư bản",
    image: "/images/image_13.svg",
    description:
      "Phát triển sản xuất: Nâng cao kỹ thuật, chuyển từ lao động thủ công sang tự động hóa, thúc đẩy CMCN 4.0\nMở rộng quy mô: Chuyển từ sản xuất nhỏ lẻ sang sản xuất quy mô lớn, tăng năng suất và cải tiến kỹ thuật\nXã hội hóa sản xuất: Thúc đẩy phân công lao động, liên kết kinh tế giữa các ngành và quốc gia.",
    // link: currentUrl,
  },
  {
    id: 2,
    title: "Những giới hạn phát triển của chủ nghĩa tư bản",
    image: "/images/image_14.svg",
    description:
      "Vì lợi ích tư sản: Bóc lột giá trị thặng dư, kìm hãm tiến bộ kỹ thuật\nGây chiến tranh: Tranh giành thuộc địa, chiến tranh thế giới, xung đột khu vực\nPhân hóa giàu - nghèo: Tư bản giàu lên, công nhân thu nhập giảm, nước nghèo tụt hậu\nMâu thuẫn nội tại: Sản xuất xã hội hóa nhưng chiếm hữu tư nhân.",
    // link: currentUrl,
  },
];
const SectionThree = () => {
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
    <div ref={ref} className='relative scroll-smooth'>
      <div className='sticky top-0 bg-black absolute'>
        <h2 className='text-center text-orange-400 mb-5  text-2xl md:text-5xl mt-20 '>
          Vai trò lịch sử của chủ nghĩa tư bản
        </h2>

        <article className=' left-0 mt-2 mb-2 flex flex-col gap-2'>
          <motion.div style={{ scaleX }} className='h-2 bg-white' />
        </article>
      </div>
      <div className='m-10'>
        {data.map((item) => (
          <div key={item.id} className='flex flex-col gap-20'>
            <SectionThreeDetails {...item} />
          </div>
        ))}
      </div>
      <section className='w-full flex items-center justify-center h-screen snap-center bg-black gap-10 p-6'>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }} // Chuyển động lên xuống
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Lặp vô hạn
          className='border text-white shadow-2xl w-[550px] flex justify-center items-center h-[550px] border-emerald-500 bg-emerald-500 rounded-3xl p-4 text-4xl text-center'>
          👉 Kết luận: Chủ nghĩa tư bản có vai trò to lớn trong sự phát triển
          kinh tế - xã hội, nhưng cũng tồn tại nhiều hạn chế, mâu thuẫn nội tại
          và những tác động tiêu cực
        </motion.div>

        <motion.div
          animate={{ x: [0, 15, -15, 0] }} // Di chuyển trái phải
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} // Lặp vô hạn
        >
          <Image
            src='/images/image_15.svg'
            alt='Hình ảnh minh họa'
            width={750}
            height={750}
            className='rounded-2xl shadow-lg'
          />
        </motion.div>
      </section>
      {/* <section className='w-full snap-center z-50 '>
        <div className='border shadow-2xl border-emerald-500 bg-emerald-500 rounded-3xl p-4 mt-20 w-full  snap-center z-50 text-4xl'>
          👉 Kết luận: Chủ nghĩa tư bản có vai trò to lớn trong sự phát triển
          kinh tế - xã hội, nhưng cũng tồn tại nhiều hạn chế, mâu thuẫn nội tại
          và những tác động tiêu cực
        </div>
        <Image
          src='/images/image_15.svg'
          alt='Hình ảnh minh họa'
          width={1000}
          height={1000}
        />{" "}
      </section> */}
    </div>
  );
};

export default SectionThree;
