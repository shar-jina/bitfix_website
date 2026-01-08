"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";
import Partners from "@/components/Partners";
import ProjectsCompletedCard from "@/components/ProjectsCompletedCard";



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r pt-24 from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white">

      {/* Header Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          We are a passionate team focused on building impactful digital solutions
          that drive innovation, growth, and success.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Who We Are</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our company is driven by creativity, technology, and a commitment
            to excellence. We collaborate with businesses across industries to
            transform ideas into powerful digital experiences.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            From startups to enterprises, we deliver solutions that are scalable,
            secure, and future-ready.
          </p>
        </div>

        {/* Image with subtle animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src="/images/aboutpage.png"
            alt="About us"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

      </section>

      {/* Values / Highlights */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition">
          <Users size={40} className="mx-auto mb-4 text-purple-400" />
          <h3 className="text-2xl font-semibold mb-2">Strong Team</h3>
          <p className="text-gray-300">
            A skilled and dedicated team working together to deliver excellence.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition">
          <Target size={40} className="mx-auto mb-4 text-blue-400" />
          <h3 className="text-2xl font-semibold mb-2">Clear Vision</h3>
          <p className="text-gray-300">
            Focused on long-term goals and meaningful innovation.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition">
          <Rocket size={40} className="mx-auto mb-4 text-pink-400" />
          <h3 className="text-2xl font-semibold mb-2">Growth Driven</h3>
          <p className="text-gray-300">
            Helping businesses scale and succeed in the digital world.
          </p>
        </div>

      </section>

      <Partners/>
      <ProjectsCompletedCard/>

    </main>
  );
}
