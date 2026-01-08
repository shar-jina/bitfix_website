"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0f172a] text-white px-6 py-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">Bitfix</Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <Link href="/" className="hover:text-blue-400 font-bold transition">Home</Link>
          <Link href="/Visionmission" className="hover:text-blue-400 font-bold transition">Vision & Mission</Link>
          <Link href="/Aboutpage" className="hover:text-blue-400 font-bold transition">About</Link>
          <Link href="/Roadmappage" className="hover:text-blue-400 font-bold transition">Roadmap</Link>
          <Link href="/team" className="hover:text-blue-400 font-bold transition">Team</Link>
          <Link href="/Contactpage" className="hover:text-blue-400 font-bold transition">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#0f172a] px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/Visionmission" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Vision & Mission</Link>
          <Link href="/Aboutpage" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Roadmappage" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Roadmap</Link>
          <Link href="/team" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Team</Link>
          <Link href="/Contactpage" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
