"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";
import Image from "next/image";

export default function Footer() {
    const [showTop, setShowTop] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const sendMessage = () => {
        if (!message.trim()) {
            alert("Please enter a message");
            return;
        }

        setLoading(true);

        emailjs.send(
            "service_bd211e4",
            "template_r7tjvva",
            {
                message: message,
                source: "Footer Chat",
                date: new Date().toLocaleString(),
            },
            "TmykMe89Lk37Keumh"
        )
            .then(() => {
                alert("Message sent successfully ✅");
                setMessage("");
            })
            .catch(() => {
                alert("Failed to send message ❌");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            {/* Message Bar */}
            <section className="bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] px-6 py-12">
                <div className="max-w-3xl mx-auto flex flex-col gap-6">

                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                        Send us a Message
                    </h2>
                    <p className="text-lg text-white text-center font-medium">
                        We’d love to hear from you
                    </p>

                    {/* Input */}
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message..."
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10
                                   text-white placeholder-gray-300 focus:outline-none
                                   focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="px-6 py-3 rounded-lg
                                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                                       text-white font-semibold hover:scale-105 transition
                                       disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-[#1e3a8a] text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            <Link href="/">
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Bitfix Logo"
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                    <span className="text-2xl font-bold">Bitfix</span>
                                </div>
                            </Link>
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Building scalable, secure, and modern digital solutions
                            to help businesses grow in the digital era.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/Aboutpage">About</Link></li>
                            <li><Link href="/Roadmappage">Services</Link></li>
                            <li><Link href="/Roadmappage">Roadmap</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Web Development</li>
                            <li>Mobile Applications</li>
                            <li>Digital Solutions & Marketing</li>
                            <li>Secure Systems</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Email: Info@bitfixtechnolologies.com</li>
                            <li>Phone: +91 8089071500</li>
                            <li>Location: India</li>
                        </ul>
                    </div>
                </div>

                {/* Social Icons */}
               
                <div className="flex justify-center gap-4 pb-6">
                    {[
                        {
                            icon: Facebook,
                            link: "https://www.facebook.com/people/Bitfix-Technologies/61583949820214/", 
                            label: "Facebook",
                        },
                        {
                            icon: Instagram,
                            link: "https://www.instagram.com/bitfixtechnologies/", 
                            label: "Instagram",
                        },
                        {
                            icon: Twitter,
                            link: "https://twitter.com/bitfix",
                            label: "Twitter",
                        },
                        {
                            icon: Linkedin,
                            link: "https://www.linkedin.com/company/bitfix",
                            label: "LinkedIn",
                        },
                    ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="w-10 h-10 flex items-center justify-center rounded-full
                   bg-white/10 border border-white/20
                   hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500
                   hover:scale-110 transition-all duration-300"
                            >
                                <Icon size={18} />
                            </a>
                        );
                    })}
                </div>


                <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Bitfix. All rights reserved.
                </div>
            </footer>

            {showTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 w-12 h-12 rounded-full
                               bg-white/10 text-white text-xl"
                >
                    ↑
                </button>
            )}
        </>
    );
}
