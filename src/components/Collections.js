"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const collectionItems = [
  { src: "/images/collection.jpeg", title: "Project One" },
  { src: "/images/collection2.jpeg", title: "Project Two" },
  { src: "/images/collection3.jpeg", title: "Project Three" },
  { src: "/images/collection4.jpeg", title: "Project Four" },
  { src: "/images/collection5.jpeg", title: "Project Five" },
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
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden shadow-2xl cursor-pointer
                         bg-white/10 backdrop-blur-lg border border-white/20 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={320}
                height={240}
                className="rounded-xl"
              />

              {/* Heading Div */}
              <div className="absolute bottom-0 w-full bg-white/20 backdrop-blur-md text-white py-2 px-4 text-center font-semibold">
                {item.title}
              </div>
            </motion.div>
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
