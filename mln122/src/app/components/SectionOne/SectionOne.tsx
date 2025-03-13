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
      {/* Sticky Header with improved animations */}
      <motion.article
        className='sticky top-0 left-0 pt-4 md:pt-6 flex flex-col gap-2 z-20 bg-indigo-950/80 backdrop-blur-sm'
        style={{
          opacity: headerOpacity,
          y: headerY,
        }}>
        <h2 className='text-center text-purple-400 text-2xl md:text-4xl'>
          Biểu hiện mới của độc quyền trong điều kiện ngày nay
        </h2>

        {/* Progress bar */}
        <motion.div
          className='h-1 bg-purple-500 origin-left'
          style={{ scaleX }}
        />
      </motion.article>

      {/* Scrollable Container with improved scroll behavior */}
      <div
        ref={containerRef}
        className='flex-1 h-[90vh] overflow-x-hidden scroll-smooth'
        style={{
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}>
        {/* Overview Section with staggered animations */}
        {/* <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className='w-full h-screen flex items-center justify-center'
          style={{ scrollSnapAlign: "start" }}>
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-wrap justify-center gap-6 mx-auto p-6 w-full max-w-6xl'>
            {imageData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                viewport={{ once: false, amount: 0.2 }}
                className='border border-gray-500 z-50 p-6 text-gray-100 hover:bg-gray-100 hover:text-black rounded-md transition-all cursor-pointer backdrop-blur-sm bg-indigo-900/30'
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)",
                  transition: { duration: 0.3 },
                }}
                onClick={() => scrollToSection(index + 1)}>
                <motion.h5
                  className='text-xl font-semibold mb-4'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.15,
                    type: "spring",
                  }}>
                  {item.title}
                </motion.h5>

                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  className='w-full max-w-xs bg-indigo-950 rounded-lg overflow-hidden'>
                  {item.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <Dialog>
                        <DialogTrigger
                          className='bg-indigo-950 w-full'
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the parent onClick
                            setSelectedImage(img);
                          }}>
                          <motion.div
                            whileHover={{
                              scale: 1.03,
                              transition: { duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className='overflow-hidden rounded-md'>
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={item.title}
                              width={1000}
                              height={1000}
                              className='rounded-md transition-all duration-500 hover:brightness-110'
                            />
                          </motion.div>
                        </DialogTrigger>
                      </Dialog>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <motion.p
                  className='mt-4 text-sm text-gray-300 line-clamp-2'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.15,
                    type: "spring",
                  }}>
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.article>
        </div> */}

        {/* Add detail sections with improved animations */}
        {imageData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              sectionRefs.current[index + 1] = el;
            }}
            className='w-full h-screen flex items-center justify-center'
            style={{ scrollSnapAlign: "start" }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className='w-full max-w-6xl p-6'>
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
