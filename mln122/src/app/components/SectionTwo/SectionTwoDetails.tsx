"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface SectionTwoDetailsProps {
  id: number;
  title: string;
  image: string;
  description: string;
  //   link: string;
}

export const SectionTwoDetails = ({
  title,
  image,
  description,
}: //   link,
SectionTwoDetailsProps) => {
  const ref = useRef(null);

  return (
    <div className='w-full h-screen snap-center flex items-center justify-center overflow-hidden m'>
      <article className='max-w-7xl flex flex-col md:flex-row items-center justify-center gap-4 h-full p-4 mt-12 md:mt-0'>
        <figure ref={ref} className='md:flex-1 w-full'>
          <Image
            src={image}
            alt={title}
            width={800}
            height={800}
            className='w-full h-full object-cover rounded-md'
          />
        </figure>
        <motion.div className='md:flex-1 flex flex-col items-center md:items-start gap-4 p-2 text-center md:text-start'>
          <h3 className='text-4xl lg:text-6xl text-white font-semibold'>
            {title}
          </h3>
          <p className='text-gray-400 text-base lg:text-lg'>{description}</p>
        </motion.div>
      </article>
    </div>
  );
};
