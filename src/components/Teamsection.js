"use client";

import Image from "next/image";

export default function TeamSection() {
    const team = [
        { name: "Manu Prasad", role: "Marketing Head", img: "/images/team1.jpeg" },
        { name: "Ajith", role: "Graphic Designer", img: "/images/team2.jpeg" },
        { name: "Muhammed Aes", role: "Hr", img: "/images/team3.jpeg" },
        { name: "Akhil", role: "Project Manager", img: "/images/team4.jpeg" },
    ];
    const interns = [
        { name: "Adel", role: "Developer Intern", img: "/images/intern2.jpeg" },
        { name: "sharjina", role: "Developer Intern", img: "/images/intern.png" },


    ]

    return (
        <section className="py-24 bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        The people behind Bitfix’s smart digital solutions.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-white/10 backdrop-blur-xl border border-white/20
                         rounded-2xl overflow-hidden text-center
                         hover:scale-105 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={400}
                                    height={400}
                                    className="w-full h-72 object-cover
                             group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-gray-300 mt-2">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-16 mt-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Meet Our Interns
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-10">
                    {interns.map((member, index) => (
                        <div
                            key={index}
                            className="group w-[280px] bg-white/10 backdrop-blur-xl border border-white/20
                 rounded-2xl overflow-hidden text-center
                 hover:scale-105 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={400}
                                    height={400}
                                    className="w-full h-72 object-cover
                     group-hover:scale-110 transition duration-500"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-gray-300 mt-2">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>






            </div>
        </section>
    );
}
