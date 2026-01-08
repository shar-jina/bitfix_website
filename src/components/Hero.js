"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center px-6 bg-animated text-white">

      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left side: Text */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Bitfix – Smart Digital Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl mb-6 max-w-lg"
          >
            We provide web development, mobile applications, software solutions,
            and digital services that help businesses grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
       text-white font-semibold px-8 py-3 rounded-full
       shadow-lg hover:shadow-2xl
       transform hover:scale-105 transition duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Right side: Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/hero.webp"
            alt="Bitfix Hero"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </motion.div>
      </div>


    </main>
  );
}