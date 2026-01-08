"use client";

import { motion } from "framer-motion";

export default function VisionMission() {
  const sections = [
    {
      title: "Our Vision",
      desc: "To empower businesses with scalable, innovative, and secure digital solutions that transform the way they grow online."
    },
    {
      title: "Our Mission",
      desc: "To deliver high-quality web and mobile applications with modern design, strong security, and seamless user experience."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 ">
      {sections.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-xl text-center hover:scale-105 transition-all"
        >
          <h2 className="text-3xl font-bold mb-6">{item.title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
