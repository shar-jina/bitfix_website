"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const [clicked, setClicked] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setClicked(true);

    // fast random rotation on click
    controls.start({
      rotateX: Math.floor(Math.random() * 60 - 30),
      rotateY: Math.floor(Math.random() * 60 - 30),
      rotateZ: Math.floor(Math.random() * 30 - 15),
      transition: { duration: 1, ease: "easeInOut" },
    }).then(() => setClicked(false));
  };

  return (
    <main className="min-h-screen flex items-center px-6 bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left side: Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Your Business with Smart Technology
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-lg">
            From websites and mobile apps to fintech and custom software, we deliver solutions that accelerate growth and efficiency.
          </p>
           <Link
            href="/Contactpage"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
             text-white font-semibold px-8 py-3 rounded-full
             shadow-lg hover:shadow-2xl
             transform hover:scale-105 transition duration-300"
          >
            Explore More
          </Link>
        </div>

        {/* Right side: Image */}
        <motion.div
          className="flex-1 cursor-pointer"
          onClick={handleClick}
          animate={{
            rotateX: clicked ? undefined : [0, 5, 0, -5, 0], // slow float
            rotateY: clicked ? undefined : [0, 5, 0, -5, 0],
            rotateZ: clicked ? undefined : [0, 2, 0, -2, 0],
            y: clicked ? undefined : [0, -10, 0, -5, 0], // gentle floating
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div animate={controls}>
            <Image
              src="/images/hero1.png"
              alt="Bitfix Hero"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </main>
  );
}




