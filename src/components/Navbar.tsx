"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/70 shadow-md backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-dark lg:text-2xl">
          [Klema Creative]
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-primary-dark md:inline-block"
        >
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-dark" />
          <span className="block h-0.5 w-6 bg-dark" />
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="/" className="text-xl font-bold text-dark">
              [Klema Creative]
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-2xl"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col px-6 pt-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-lg font-medium text-dark transition-colors duration-200 active:text-primary"
                  style={{ minHeight: 48 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pt-8">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-full bg-primary py-3.5 text-center text-base font-semibold text-white transition-transform duration-200 active:scale-[1.03]"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
