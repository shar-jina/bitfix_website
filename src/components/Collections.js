"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";


const collectionItems = [
  { src: "/images/project1.png", title: "Project One", link: "https://www.figma.com/proto/YVOmO87OH6tX3shiSjw6EW/ott-platform?page-id=0%3A1&node-id=0-26&viewport=90%2C67%2C0.21&t=cPXOZc4uIn1noLCm-1&scaling=min-zoom&content-scaling=fixed" },
  { src: "/images/project2.png", title: "Project Two", link: "https://www.figma.com/proto/JLfw0WTQEpfFiWhmMsg9PE/Ibis-Website--Papercrane?page-id=0%3A1&node-id=1-4&viewport=338%2C161%2C0.09&t=kJccrIddzEfRjHpt-1&scaling=min-zoom&content-scaling=fixed" },
  { src: "/images/project3.png", title: "Project Three", link: "https://www.figma.com/proto/dhKL4G5DjALVoIseYGJ9xt/Innovo-Group-Website?page-id=0%3A1&node-id=1-166&viewport=424%2C45%2C0.06&t=2XstF7WeOiNd5NAB-1&scaling=scale-down-width&content-scaling=fixed" },

];

export default function Collection() {
  const [position, setPosition] = useState(0);

  const move = (dir) => {
    if (dir === "left") {
      setPosition((prev) => (prev === 0 ? collectionItems.length - 1 : prev - 1));
    } else {
      setPosition((prev) => (prev === collectionItems.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="px-6 py-24 text-white flex flex-col items-center
                       bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a]">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">Our Collection</h2>

      {/* Image Row */}
      <div className="overflow-hidden w-full max-w-6xl">
        <motion.div
          className="flex gap-6"
          animate={{ x: -position * 360 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {[...collectionItems, ...collectionItems].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden shadow-2xl cursor-pointer
             bg-white/10 backdrop-blur-lg border border-white/20 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.1 }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Heading */}
                <div className="absolute bottom-0 w-full bg-black/22 backdrop-blur-md
                  text-white py-2 px-4 text-center font-semibold">
                  {item.title}
                </div>
              </motion.div>

            </Link>
          ))}

        </motion.div>
      </div>

      {/* Arrow Buttons */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={() => move("left")}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => move("right")}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
