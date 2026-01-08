"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leftCards = [
  { title: "Web Development", desc: "Modern, fast, and SEO-friendly websites." },
  { title: "Mobile Apps", desc: "Smooth, scalable Android & iOS apps." },
  { title: "Digital Strategy", desc: "Smart solutions to boost your business." },
];

const rightCards = [
  { title: "Secure Systems", desc: "Robust, scalable, and safe software." },
  { title: "Cloud Solutions", desc: "Reliable cloud infrastructure services." },
  { title: "UI/UX Design", desc: "Intuitive and user-friendly designs." },
];

export default function BestServices() {
  return (
    <section className="px-6 py-24 bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Best Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Innovative solutions to take your business to the next level.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-16">

        {/* Left Cards */}
        <div className="flex flex-col gap-8">
          {leftCards.map((card, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 w-64 relative"
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }} // disappear when out of viewport
              viewport={{ amount: 0.5 }} // trigger when 50% visible
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="absolute -top-4 left-4 text-white font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Central Image */}
        <motion.div
          className="w-72 h-72 md:w-96 md:h-96 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/services.png"
            alt="Best Services"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Cards */}
        <div className="flex flex-col gap-8">
          {rightCards.map((card, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 w-64 relative"
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }} // disappear when out of viewport
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="absolute -top-4 left-4 text-white font-bold text-xl">
                {index + 1 + leftCards.length}
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
