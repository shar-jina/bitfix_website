"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Shield } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Modern, fast, and SEO-friendly websites built with cutting-edge technologies.",
    icon: Code,
  },
  {
    title: "Mobile Applications",
    desc: "Smooth, scalable Android and iOS apps with intuitive user experiences.",
    icon: Smartphone,
  },
  {
    title: "Digital Solutions",
    desc: "Custom digital products designed to accelerate business growth.",
    icon: Globe,
  },
  {
    title: "Secure Systems",
    desc: "Robust, scalable, and secure software solutions for enterprises.",
    icon: Shield,
  },
];

export default function Speciality() {
  return (
    <section className="px-6 py-24 bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Speciality
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We specialize in delivering reliable, scalable, and innovative
            digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#0b1220]/70 backdrop-blur-xl
                border border-white/10 rounded-2xl pt-16 pb-8 px-8
                hover:border-blue-500/40 transition"
              >

                {/* ICON ON TOP */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="relative w-20 h-20 flex items-center justify-center">

                    {/* ROTATING RING */}
                    <motion.div
                      className="absolute w-20 h-20 rounded-full border-2 border-blue-400/60"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "linear",
                      }}
                    />

                    {/* ICON CIRCLE */}
                    <div className="w-16 h-16 rounded-full
                      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                      flex items-center justify-center
                      shadow-xl z-10"
                    >
                      <Icon size={30} className="text-white" />
                    </div>

                  </div>
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-semibold mb-3 text-center mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

