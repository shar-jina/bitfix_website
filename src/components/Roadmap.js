"use client";

import { motion } from "framer-motion";
const cardVariants = {
  hidden: {
    opacity: 0,
    x: 120,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};


const roadmap = [
    {
        step: "01",
        title: "Planning & Research",
        desc: "Understanding business goals, market research, and defining the roadmap strategy.",
    },
    {
        step: "02",
        title: "Design & Prototyping",
        desc: "Creating modern UI/UX designs and interactive prototypes for validation.",
    },
    {
        step: "03",
        title: "Development Phase",
        desc: "Building scalable, secure, and high-performance applications.",
    },
    {
        step: "04",
        title: "Testing & Optimization",
        desc: "Ensuring performance, security, and bug-free delivery.",
    },
    {
        step: "05",
        title: "Launch & Support",
        desc: "Product launch, monitoring, and continuous improvement.",
    },
];

export default function Roadmap() {
    return (
        <section
            id="roadmap"
            className="px-6 py-24 text-white
      bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a]"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Roadmap
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        A clear and structured approach to deliver high-quality digital solutions.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-white/20 pl-8 space-y-14">

                    {roadmap.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >

                        
                            {/* Number Circle */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -left-[42px] top-0 w-12 h-12
                rounded-full bg-gradient-to-r from-blue-500 to-purple-500
                flex items-center justify-center font-bold text-white shadow-lg"
                            >
                                {item.step}
                            </motion.div>

                            {/* Card */}
                            <div className="bg-white/10 backdrop-blur-lg border border-white/20
              rounded-xl p-6 hover:border-blue-400 transition">
                                <h3 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
