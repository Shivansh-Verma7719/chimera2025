"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ChimeraNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Competitions", href: "/competitions" },
    { name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Raffle", href: "/raffle" },
    { name: "Team", href: "/team" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-transparent z-50 px-4">
      <div className="mx-auto flex items-center justify-between">
        {/* Left - Chimera Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Chimera 2025"
            width={100}
            height={100}
            className="h-24 w-auto"
          />
        </Link>

        {/* Center - Navigation Items (Hidden on Mobile) */}
        <div className="hidden md:flex items-center justify-center space-x-6 flex-grow">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-lg hover:text-gray-300 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right - Ashoka Logo */}
        <Link
          href="https://ashoka.edu.in"
          target="_blank"
          className="flex-shrink-0"
        >
          <Image
            src="/images/ashoka_logo.png"
            alt="Ashoka University"
            width={100}
            height={100}
            className="h-16 w-auto"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Shown when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
          <div className="px-4 py-2 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white hover:text-gray-300 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/register"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors mt-4"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
