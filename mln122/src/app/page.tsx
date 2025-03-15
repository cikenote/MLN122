"use client";
import { Cursor } from "@/app/components/Cursor";
import { Hero } from "@/app/components/Hero";
import { Parallax } from "@/app/components/Parallax";
import { SectionOne } from "@/app/components/SectionOne/SectionOne";
import SectionTwo from "@/app/components/SectionTwo/SectionTwo";
import Image from "next/image";
import SectionThree from "./components/SectionThree/SectionThree";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main className='bg-indigo-950 h-[8900px]'>
        <Cursor />
        <section
          id='home'
          className='w-full h-screen overflow-hidden snap-center bg-hero-gradient'>
          <Hero />
        </section>
        <section className='w-full h-screen snap-center bg-black'>
          <Parallax type='Biểu hiện mới của độc quyền trong điều kiện ngày nay' />
        </section>
        <section className='w-full h-screen overflow-hidden snap-center '>
          <SectionOne />
        </section>
        <section className='w-full flex items-center justify-center h-screen snap-center bg-black gap-10 p-6'>
          {/* Hộp nội dung luôn dao động lên xuống */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }} // Chuyển động lên xuống
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Lặp vô hạn
            className='border text-white shadow-2xl w-[550px] flex justify-center items-center h-[450px] border-emerald-500 bg-emerald-500 rounded-3xl p-4 text-4xl text-center'>
            👉 Kết luận: Chủ nghĩa tư bản ngày nay có sự thay đổi mạnh mẽ, độc
            quyền mở rộng cả về quy mô và phạm vi hoạt động, kết hợp chặt chẽ
            với nhà nước, tài chính và công nghệ để kiểm soát nền kinh tế toàn
            cầu
          </motion.div>

          {/* Hình ảnh luôn nhấp nhô nhẹ qua lại */}
          <motion.div
            animate={{ x: [0, 15, -15, 0] }} // Di chuyển trái phải
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} // Lặp vô hạn
          >
            <Image
              src='/images/image_7.svg'
              alt='Hình ảnh minh họa'
              width={750}
              height={750}
              className='rounded-2xl shadow-lg'
            />
          </motion.div>
        </section>
        <section className='w-full overflow-hidden snap-center bg-black z-50'>
          <Parallax type='Biểu hiện mới của độc quyền trong điều kiện ngày nay' />
        </section>
        <section className='w-full h-screen snap-center '>
          <SectionTwo />
        </section>
      </main>
      <div className='bg-indigo-950  h-[3000px]'>
        <section className=' w-full overflow-hidden snap-center bg-black z-50'>
          <Parallax type=' Vai trò lịch sử của chủ nghĩa tư bản' />
        </section>
        <section className=' bg-indigo-950 w-full h-screen snap-center '>
          <SectionThree />
        </section>
      </div>
      <div className='bg-amber-500 w-full'>
        <div>Cảm ơn mọi người</div>
        <h1>Danh nè</h1>
      </div>
    </>
  );
}
