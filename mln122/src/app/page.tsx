import { Cursor } from "@/app/components/Cursor";
import { Hero } from "@/app/components/Hero";
import { Parallax } from "@/app/components/Parallax";
import { SectionOne } from "@/app/components/SectionOne/SectionOne";
import SectionTwo from "@/app/components/SectionTwo/SectionTwo";
import Image from "next/image";
import SectionThree from "./components/SectionThree.tsx/SectionThree";

export default function Home() {
  return (
    <div>
      <main className="bg-indigo-950 h-[7900px]">
        <Cursor />
        <section
          id="home"
          className="w-full h-screen overflow-hidden snap-center bg-hero-gradient"
        >
          <Hero />
        </section>
        <section className="w-full h-screen snap-center bg-black">
          <Parallax type="Biểu hiện mới của độc quyền trong điều kiện ngày nay" />
        </section>
        <section className="w-full h-screen overflow-hidden snap-center ">
          <SectionOne />
        </section>
        <section className="w-full h-screen overflow-hidden snap-center bg-black">
          <div className="border shadow-2xl border-emerald-500 bg-emerald-500 rounded-3xl p-4 text-4xl">
            👉 Kết luận: Chủ nghĩa tư bản ngày nay có sự thay đổi mạnh mẽ, độc
            quyền mở rộng cả về quy mô và phạm vi hoạt động, kết hợp chặt chẽ
            với nhà nước, tài chính và công nghệ để kiểm soát nền kinh tế toàn
            cầu
          </div>
          <Image
            src="/images/image_7.svg"
            alt="Hình ảnh minh họa"
            width={1000}
            height={1000}
          />{" "}
        </section>
        <section className="w-full overflow-hidden snap-center bg-black z-50">
          <Parallax type="Biểu hiện mới của độc quyền trong điều kiện ngày nay" />
        </section>
        <section className="w-full h-screen snap-center ">
          <SectionTwo />
        </section>
      </main>
      <div className="bg-indigo-950  h-[3000px]">
        <section className="bg-indigo-950 w-full overflow-hidden snap-center bg-black z-50">
          <Parallax type=" Vai trò lịch sử của chủ nghĩa tư bản" />
        </section>
        <section className=" bg-indigo-950 w-full h-screen snap-center ">
          <SectionThree />
        </section>
      </div>
    </div>
  );
}
