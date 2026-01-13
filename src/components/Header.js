"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (path) =>
    `font-bold transition hover:text-blue-400 ${
      pathname === path ? "text-blue-400" : "text-white"
    }`;

  return (
    <header className="w-full bg-[#0f172a] text-white px-6 py-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png" 
              alt="Bitfix Logo"
              width={100}             
              height={100}
              className="object-contain"
            />
          </div>
        </Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <Link href="/" className={navLink("/")}>Home</Link>
          <Link href="/Visionmission" className={navLink("/Visionmission")}>Vision & Mission</Link>
          <Link href="/Aboutpage" className={navLink("/Aboutpage")}>About</Link>
          <Link href="/Roadmappage" className={navLink("/Roadmappage")}>Roadmap</Link>
          <Link href="/Contactpage" className={navLink("/Contactpage")}>Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#0f172a] px-6 py-4 flex flex-col gap-4">
          <Link href="/" className={navLink("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/Visionmission" className={navLink("/Visionmission")} onClick={() => setIsOpen(false)}>Vision & Mission</Link>
          <Link href="/Aboutpage" className={navLink("/Aboutpage")} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Roadmappage" className={navLink("/Roadmappage")} onClick={() => setIsOpen(false)}>Roadmap</Link>
          <Link href="/Contactpage" className={navLink("/Contactpage")} onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
