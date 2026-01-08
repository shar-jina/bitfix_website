"use client";

import OurServices from "@/components/Servicecard";
import { motion } from "framer-motion";



const roadmap = [
  { step: "01", title: "Planning & Research", desc: "Understanding goals, market research, and defining strategy." },
  { step: "02", title: "Design & Prototyping", desc: "Creating intuitive UI/UX designs and interactive prototypes." },
  { step: "03", title: "Development", desc: "Building scalable, secure, and high-performance solutions." },
  { step: "04", title: "Testing & Optimization", desc: "Ensuring quality, performance, and security." },
  { step: "05", title: "Launch & Support", desc: "Deployment, monitoring, and continuous improvements." },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="px-6 py-20 bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Our Roadmap
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A structured journey from idea to successful product launch.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-40" />

          <div className="space-y-1">
            {roadmap.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`relative flex ${
                    isLeft ? "justify-start pr-6" : "justify-end pl-6"
                  }`}
                >
                  {/* Card */}
                  <div
                    className="w-full md:w-[400px]
                    bg-white/10 backdrop-blur-lg
                    border border-white/20
                    rounded-xl p-5 hover:border-blue-400 transition"
                  >
                    <h3 className="text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Step Circle */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-5
                    w-10 h-10 rounded-full
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    flex items-center justify-center
                    font-bold text-sm shadow-lg"
                  >
                    {item.step}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <OurServices/>
      </div>
    </section>
  );
}

