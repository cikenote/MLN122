"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { SectionTwoDetails } from "./SectionTwoDetails";
import Image from "next/image";
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
      "Kiểm soát ngân sách: Giới lập pháp kiểm soát ngân sách nhà nước, trong khi giới hành pháp bị ràng buộc bởi luật ngân sách\nƯu tiên kinh tế: Chống lạm phát và thất nghiệp là mục tiêu hàng đầu\nCổ phần nhà nước: Nhà nước nắm cổ phần lớn trong các ngân hàng và tập đoàn lớn\nĐầu tư công: Nhà nước tập trung vào nghiên cứu khoa học, hạ tầng và nhu cầu xã hội, trong khi tư nhân hướng đến lợi nhuận cao\nLợi ích từ đầu tư công: Các tập đoàn độc quyền hưởng lợi lớn từ các dự án đầu tư công\nKiểm soát kinh tế vĩ mô: Thông qua thu-chi ngân sách, lãi suất, trợ giá và tỷ giá hối đoái\nCứu trợ trong khủng hoảng: Nhà nước giải cứu các tập đoàn lớn khỏi phá sản (ví dụ: Citigroup, AIG, và các ngân hàng Anh).\nChi tiêu xã hội: Một số quốc gia ưu tiên chi tiêu ngân sách cho môi trường và an sinh xã hội (ví dụ: Na Uy với giáo dục và y tế miễn phí)\nKết quả của đấu tranh xã hội: Những cải cách này là thành quả của cuộc đấu tranh lâu dài của nhân dân, không phải là sự thức tỉnh của chủ nghĩa tư bản",
    // link: currentUrl,
  },
  {
    id: 3,
    title: "Biểu hiện mới trong vai trò công cụ điều tiết kinh tế",
    image: "/images/image_11.svg",
    description:
      "Độc quyền nhà nước tập trung vào các lĩnh vực kinh tế trọng yếu\nChính phủ & nghị viện tư sản vận hành như một công ty cổ phần, nơi quyền lực thuộc về tầng lớp tư sản độc quyền\nĐa nguyên tư sản chỉ duy trì ở mức không đe dọa quyền lực tư bản, nhằm xoa dịu phong trào chống lũng đoạn tư bản\nKhi quyền lực bị đe dọa, tư sản sẵn sàng giải tán chính phủ, ban bố tình trạng khẩn cấp, hoặc thực hiện đảo chính (như Chile 1973, Nga 1993)\nViện trợ nước ngoài trở thành công cụ điều tiết kinh tế nội địa, bao gồm cả hàng hóa, công nghệ lỗi thời, thiết bị và chuyên gia từ nước cung cấp.",
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
    <div ref={ref} className="relative scroll-smooth">
      <div className="sticky top-0 bg-black absolute">
        <h2 className="text-center text-orange-400  text-2xl md:text-5xl mt-20 ">
          Biểu hiện mới của độc quyền nhà nước dưới chủ nghĩa tư bản
        </h2>

        <article className=" left-0  flex flex-col gap-2">
          <motion.div style={{ scaleX }} className="h-2 bg-white" />
        </article>
      </div>
      <div className="m-10">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-20">
            <SectionTwoDetails {...item} />
          </div>
        ))}
      </div>
      <section className="w-full h-[1000px] snap-center bg-black z-50 ">
        <Image
          src="/images/image_12.svg"
          alt="Hình ảnh minh họa"
          width={1200}
          height={1000}
        />{" "}
      </section>

      <div className="border shadow-2xl border-emerald-500 bg-emerald-500 rounded-3xl p-4 mt-20 w-full  snap-center z-50 text-4xl">
        👉 Kết luận: Độc quyền nhà nước dưới chủ nghĩa tư bản ngày nay thể hiện
        qua: cơ chế phân chia quyền lực thỏa hiệp, sự kiểm soát mạnh mẽ ngân
        sách nhà nước, bảo vệ lợi ích tư bản thông qua đầu tư công & cứu trợ
        khủng hoảng, cũng như tận dụng viện trợ quốc tế để thúc đẩy lợi ích kinh
        tế trong nước
      </div>
    </div>
  );
};

export default SectionTwo;
