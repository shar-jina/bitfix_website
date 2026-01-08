"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    desc: "Modern, responsive and scalable web applications.",
    img: "/images/service1.png",
  },
  {
    title: "Mobile Apps",
    desc: "High-performance Android and iOS applications.",
    img: "/images/service.png",
  },
  {
    title: "UI / UX Design",
    desc: "User-friendly and visually appealing designs.",
    img: "/images/service3.png",
  },
  {
    title: "AI Solutions",
    desc: "Smart AI-powered solutions for your business.",
    img: "/images/service4.png",
  },
  {
    title: "Cloud Services",
    desc: "Secure and scalable cloud infrastructure.",
    img: "/images/service5.png",
  },
  {
    title: "Maintenance",
    desc: "Continuous support and system optimization.",
    img: "/images/service6.png",
  },
];

export default function OurServices() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-white">
            Our Services
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Powerful solutions crafted to scale your business
          </p>
        </div>

        {/* BIG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-xl
                         border border-white/20
                         rounded-2xl overflow-hidden
                         hover:border-purple-400/60
                         hover:shadow-2xl"
            >

              {/* LARGE IMAGE */}
              <div className="relative w-full h-56 md:h-64">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {service.title}
                </h3>

                
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

