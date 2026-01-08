"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Message Bar */}
            <section className="bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] px-6 py-12">
                <div className="max-w-3xl mx-auto flex flex-col gap-6">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                        Send us a Message
                    </h2>
                    <p className="text-lg text-white text-center font-medium">
                        We’d love to hear from you
                    </p>

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Your message..."
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </section>





            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Bitfix</h2>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Building scalable, secure, and modern digital solutions
                            to help businesses grow in the digital era.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                            <li><Link href="/Aboutpage" className="hover:text-blue-400">About</Link></li>
                            <li><Link href="/Roadmappage" className="hover:text-blue-400">Services</Link></li>
                            <li><Link href="/Roadmappage" className="hover:text-blue-400">Roadmap</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Web Development</li>
                            <li>Mobile Applications</li>
                            <li>UI / UX Design</li>
                            <li>Secure Systems</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Email: support@bitfix.com</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Location: India</li>
                        </ul>
                    </div>

                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center p-3">
                    <div className="flex gap-4">
                        {[{ icon: Facebook, link: "#" },
                        { icon: Instagram, link: "#" },
                        { icon: Twitter, link: "#" },
                        { icon: Linkedin, link: "#" },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Social link"
                                    className="w-10 h-10 rounded-full flex items-center justify-center
                             bg-white/10 backdrop-blur-md border border-white/20
                             text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                             hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
                             hover:scale-110 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Bitfix. All rights reserved.
                </div>
            </footer>

            {/* Scroll To Top Button */}
            {showTop && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full
                     bg-white/10 backdrop-blur-lg border border-white/20
                     flex items-center justify-center text-white text-xl
                     hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                     hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]
                     hover:scale-110 transition-all duration-300"
                >
                    ↑
                </button>
            )}
        </>
    );
}
