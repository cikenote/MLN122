"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";

type SectionOneDetailsProps = {
  item: {
    id: number;
    title: string;
    images: string[];
    description: string;
  };
  onImageClick?: (image: string) => void;
};

export const SectionOneDetails = ({
  item,
  onImageClick,
}: SectionOneDetailsProps) => {
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
    hidden: { y: 0, opacity: 0 },
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

  // Handle image click for preview
  const handleImageClick = (image: string) => {
    if (onImageClick) {
      onImageClick(image);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.3 }}
      className='bg-primary/5 h-screen backdrop-blur-sm rounded-lg p-6 md:p-8'>
      <motion.h3
        variants={itemVariants}
        className='text-2xl  text-center md:text-3xl font-bold text-white mb-6'>
        {item.title}
      </motion.h3>

      <motion.div variants={itemVariants} className='mb-8'>
        <Card className='border-primary/20 bg-background/30'>
          <CardContent className='p-0 overflow-hidden rounded-lg'>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: "swiper-pagination-bullet-active",
                bulletClass: "swiper-pagination-bullet",
              }}
              modules={[Navigation, Pagination]}
              className='w-full rounded-lg relative group'>
              {item.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    className='overflow-hidden cursor-pointer'
                    onClick={() => handleImageClick(img)}>
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${item.title} - image ${i + 1}`}
                      width={800}
                      height={600}
                      className='w-full h-[400px] object-contain transition-all duration-500 hover:brightness-110'
                    />
                  </motion.div>
                </SwiperSlide>
              ))}

              {/* Custom navigation buttons */}
              {/* <div className='absolute top-1/2 left-2 z-10 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'>
                <Button
                  variant='outline'
                  size='icon'
                  className={cn(
                    "swiper-button-prev rounded-full bg-background/30 border-primary hover:bg-background/50"
                  )}>
                  <ChevronLeft className='h-5 w-5 text-white-foreground' />
                </Button>
              </div>
              <div className='absolute top-1/2 right-2 z-10 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'>
                <Button
                  variant='outline'
                  size='icon'
                  className={cn(
                    "swiper-button-next rounded-full bg-background/30 border-primary hover:bg-background/50"
                  )}>
                  <ChevronRight className='h-5 w-5 text-white-foreground' />
                </Button>
              </div> */}
            </Swiper>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className='prose prose-invert max-w-none'>
        <p className='text-lg text-center text-white text-foreground/80 leading-relaxed'>
          {item.description}
        </p>
      </motion.div>
    </motion.div>
  );
};
