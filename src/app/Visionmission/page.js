"use client";

import ProjectsCompletedCard from "@/components/ProjectsCompletedCard";
import VisionMission from "@/components/Visionmission";




export default function VisionMissionPage() {
  return (
    <main className="bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white min-h-screen pt-24">

      {/* Page Heading */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Vision & Mission</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Discover our goals and the mission that drives our business forward.
        </p>
      </section>

      {/* Vision & Mission Cards */}
      <VisionMission />
      <ProjectsCompletedCard/>

    </main>
  );
}
