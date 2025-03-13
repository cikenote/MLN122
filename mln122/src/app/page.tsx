import { Cursor } from "@/app/components/Cursor";
import { Hero } from "@/app/components/Hero";
import { Parallax } from "@/app/components/Parallax";

export default function Home() {
  return (
    <main className=''>
      <Cursor />
      <section
        id='home'
        className='w-full h-screen overflow-hidden snap-center bg-hero-gradient'>
        <Hero />
      </section>{" "}
      <section className='w-full h-screen overflow-hidden snap-center bg-black text-green-500'>
        <Parallax type='Biểu hiện mới của độc quyền trong điều kiện ngày nay' />
      </section>
    </main>
  );
}
