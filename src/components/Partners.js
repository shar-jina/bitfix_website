"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  
  
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-24 bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Our Partners
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            We collaborate with innovative brands and businesses worldwide.
          </p>
        </div>

        {/* Logos */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition"
              >
                <Image
                  src={logo}
                  alt="Partner Logo"
                  width={200}
                  height={100}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
