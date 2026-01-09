"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="px-6 py-24 text-white
      bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left: Images */}
        <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[650px]">

          {/* Main Large Image */}
          <motion.div
            className="absolute z-10"
            style={{ top: "20%", left: "35%" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            <Image
              src="/images/about1.webp"
              alt="Main Image"
              width={250}
              height={250}
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* Small scattered images */}
          <motion.div
            className="absolute hidden md:block"
            style={{ top: "10%", left: "15%" }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            <Image src="/images/about2.webp" alt="Image 2" width={120} height={120} className="rounded-xl shadow-2xl" />
          </motion.div>

          <motion.div
            className="absolute hidden md:block"
            style={{ top: "40%", left: "10%" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            <Image src="/images/about3.webp" alt="Image 3" width={130} height={130} className="rounded-xl shadow-2xl" />
          </motion.div>

          <motion.div
            className="absolute hidden md:block"
            style={{ top: "15%", left: "65%" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            <Image src="/images/about4.webp" alt="Image 4" width={120} height={120} className="rounded-xl shadow-2xl" />
          </motion.div>

          <motion.div
            className="absolute hidden md:block"
            style={{ top: "70%", left: "50%" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            <Image src="/images/about5.webp" alt="Image 5" width={100} height={100} className="rounded-xl shadow-2xl" />
          </motion.div>

          {/* Mobile fallback: single image */}
          <motion.div
            className="md:hidden flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            <Image src="/images/about1.webp" alt="Main Mobile" width={200} height={200} className="rounded-xl shadow-2xl" />
          </motion.div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Bitfix</h2>
          <p className="text-lg md:text-xl mb-4">
            Bitfix delivers smart web and mobile solutions that empower businesses to grow efficiently.
          </p>
          <p className="text-lg md:text-xl mb-6">
            From custom software development to digital strategy and optimization, we create tools that help you innovate and expand your digital presence.
          </p>
          <Link
            href="/Aboutpage"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
             text-white font-semibold px-8 py-3 rounded-full
             shadow-lg hover:shadow-2xl
             transform hover:scale-105 transition duration-300"
          >
            Learn More
          </Link>
        </div>

      </div>

      {/* Soft rotating background circles */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 bg-blue-700 rounded-full opacity-20 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-72 h-72 bg-purple-700 rounded-full opacity-20 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}



