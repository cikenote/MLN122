"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import "swiper/css";
import { SectionOneDetails } from "./SectionOneDetails";

const imageData = [
  {
    id: 1,
    title: "Tích tụ và tập trung tư bản",
    images: ["/images/image_1.svg"],
    description:
      "Quá trình tích tụ và tập trung tư bản trong nền kinh tế hiện đại.",
  },
  {
    id: 2,
    title: "Vai trò của tư bản tài chính trong tập đoàn độc quyền",
    images: ["/images/image_2.svg"],
    description:
      "Tư bản tài chính đóng vai trò quan trọng trong việc hình thành và phát triển các tập đoàn độc quyền.",
  },
  {
    id: 3,
    title: "Xuất khẩu tư bản",
    images: ["/images/image_3.svg"],
    description:
      "Quá trình xuất khẩu tư bản và ảnh hưởng của nó đến nền kinh tế toàn cầu.",
  },
  {
    id: 4,
    title: "Phân chia thị trường thế giới",
    images: [
      "/images/image_4.svg",
      "/images/image_5.svg",
      "/images/image_6.svg",
    ],
    description:
      "Các tập đoàn độc quyền phân chia thị trường thế giới để tối đa hóa lợi nhuận và giảm thiểu cạnh tranh.",
  },
];

export const SectionOne = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // For smooth parallax effects
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Smoother progress indicator
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Initialize refs array
  useEffect(() => {
    sectionRefs.current = Array(imageData.length + 1).fill(null);
  }, []);

  // Enhanced scroll tracking with debounce for better performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (!containerRef.current) return;

      // Clear the timeout if it exists
      if (timeoutId) clearTimeout(timeoutId);

      // Set a timeout to run the scroll calculation
      timeoutId = setTimeout(() => {
        const scrollPosition = containerRef.current!.scrollTop;
        const containerHeight = containerRef.current!.clientHeight;

        // Find which section is currently most visible with improved calculation
        let newActiveSection = 0;
        sectionRefs.current.forEach((ref, index) => {
          if (!ref) return;

          const { offsetTop } = ref;
          // const sectionCenter = offsetTop + offsetHeight / 2;
          // const viewportCenter = scrollPosition + containerHeight / 2;

          // Calculate how close the section center is to the viewport center
          // const distance = Math.abs(sectionCenter - viewportCenter);

          if (scrollPosition >= offsetTop - containerHeight / 3) {
            newActiveSection = index;
          }
        });

        setActiveSection(newActiveSection);
      }, 10); // Small delay for better performance
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, []);

  // Improved smooth scroll to section
  // const scrollToSection = (index: number) => {
  //   const ref = sectionRefs.current[index];
  //   if (ref && containerRef.current) {
  //     const targetPosition = ref.offsetTop;

  //     // Animate scroll with framer-motion
  //     const startPosition = containerRef.current.scrollTop;
  //     const distance = targetPosition - startPosition;

  //     const startTime = performance.now();
  //     const duration = 800; // ms

  //     // Easing function for smooth acceleration and deceleration
  //     const easeInOutCubic = (t: number) =>
  //       t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  //     const animateScroll = (currentTime: number) => {
  //       const elapsedTime = currentTime - startTime;
  //       const progress = Math.min(elapsedTime / duration, 1);
  //       const easedProgress = easeInOutCubic(progress);

  //       if (containerRef.current) {
  //         containerRef.current.scrollTop =
  //           startPosition + distance * easedProgress;
  //       }

  //       if (progress < 1) {
  //         requestAnimationFrame(animateScroll);
  //       }
  //     };

  //     requestAnimationFrame(animateScroll);
  //   }
  // };

  // Create parallax values for different elements
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [-20, 0]);

  return (
    <div className='relative w-full h-screen flex flex-col'>
      <h2 className='text-center mt-2 z-20 text-purple-400 text-2xl md:text-2xl'>
        Biểu hiện mới của độc quyền trong điều kiện ngày nay
      </h2>
      {/* Sticky Header with improved animations */}
      <motion.article
        className='sticky top-0 left-0 pt-2 md:pt-4 flex flex-col gap-2 z-20 bg-indigo-950/80 backdrop-blur-sm'
        style={{
          opacity: headerOpacity,
          y: headerY,
        }}>
        {/* Progress bar */}
        <motion.div
          className='h-1 bg-purple-500 origin-left'
          style={{ scaleX }}
        />
      </motion.article>

      {/* Scrollable Container with improved scroll behavior */}
      <div
        ref={containerRef}
        className='flex-1 overflow-y-auto scroll-smooth'
        style={{
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}>
        {/* Add detail sections with improved animations */}
        {imageData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              sectionRefs.current[index + 1] = el;
            }}
            className='w-full flex items-center justify-center'
            style={{ scrollSnapAlign: "start" }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className=' mb-20 max-w-6xl p-6'>
              <SectionOneDetails item={item} />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Enhanced Image Dialog */}
      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className='max-w-4xl bg-indigo-950/90 backdrop-blur-md'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt='Ảnh chi tiết'
                width={800}
                height={600}
                className='rounded-lg'
              />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
