"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle } from "lucide-react";

export default function ProjectsCompletedCard() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Card Container */}
        <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                        rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between
                        border border-white/20 shadow-xl overflow-hidden gap-8">

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 z-20">
            
            {/* Projects Completed */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-24 h-24 rounded-full 
                              bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                              flex items-center justify-center shadow-lg">
                <CheckCircle size={36} className="text-white" />
              </div>
              <h2 className="text-5xl font-bold text-white mt-2">20+</h2>
              <p className="text-gray-200 text-center text-lg">Projects Completed</p>
            </div>

            {/* Partners */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-24 h-24 rounded-full 
                              bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                              flex items-center justify-center shadow-lg">
                <Users size={36} className="text-white" />
              </div>
              <h2 className="text-5xl font-bold text-white mt-2">18</h2>
              <p className="text-gray-200 text-center text-lg">Partners</p>
            </div>

          </div>

          {/* Big Image with 3D pop effect */}
          <motion.div
            className="relative md:absolute md:top-0 md:right-0 md:w-[500px] md:h-[500px] flex-shrink-0"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/images/projectcard.png" // Replace with your image
              alt="Project Animation"
              className="w-full h-full "
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
