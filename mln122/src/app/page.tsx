import { Cursor } from "@/app/components/Cursor";
import { Hero } from "@/app/components/Hero";
import { Parallax } from "@/app/components/Parallax";
import { SectionOne } from "@/app/components/SectionOne/SectionOne";
import SectionTwo from "@/app/components/SectionTwo/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
    <main className='bg-indigo-950'>
      <Cursor />
      <section
        id='home'
        className='w-full h-screen overflow-hidden snap-center bg-hero-gradient'>
        <Hero />
      </section>
      <section className='w-full h-screen overflow-hidden snap-center bg-black'>
        <Parallax type='Biểu hiện mới của độc quyền trong điều kiện ngày nay' />
      </section>
      <section className='w-full h-screen overflow-hidden snap-center '>
        <SectionOne />
      </section>
      <section className='w-full h-screen overflow-hidden snap-center bg-black'>
        <div className='border shadow-2xl border-emerald-500 bg-emerald-500 rounded-3xl p-4'>
          👉 Kết luận: Chủ nghĩa tư bản ngày nay có sự thay đổi mạnh mẽ, độc
          quyền mở rộng cả về quy mô và phạm vi hoạt động, kết hợp chặt chẽ với
          nhà nước, tài chính và công nghệ để kiểm soát nền kinh tế toàn cầu
        </div>
        <Image
          src='/images/image_7.svg'
          alt='Hình ảnh minh họa'
          width={1000}
          height={1000}
        />{" "}
      </section>
      <section className='w-full h-screen overflow-hidden snap-center bg-black'>
        <Parallax type='Biểu hiện mới của độc quyền trong điều kiện ngày nay' />
      </section>
      <section className='w-full h-screen overflow-hidden snap-center '>
        <SectionTwo />
      </section>
      <section className='w-full h-screen overflow-hidden snap-center bg-black'>
        <div className='border shadow-2xl border-emerald-500 bg-emerald-500 rounded-3xl p-4'>
          👉 Kết luận: Độc quyền nhà nước dưới chủ nghĩa tư bản ngày nay thể
          hiện qua: cơ chế phân chia quyền lực thỏa hiệp, sự kiểm soát mạnh mẽ
          ngân sách nhà nước, bảo vệ lợi ích tư bản thông qua đầu tư công & cứu
          trợ khủng hoảng, cũng như tận dụng viện trợ quốc tế để thúc đẩy lợi
          ích kinh tế trong nước
        </div>
        <Image
          src='/images/image_12.svg'
          alt='Hình ảnh minh họa'
          width={1000}
          height={1000}
        />{" "}
      </section>
    </main>
  );
}
