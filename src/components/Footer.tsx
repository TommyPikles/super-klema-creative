"use client";

import { useState } from "react";

const footerColumns = [
  {
    title: "Services",
    links: [
      "[Brand Identity]",
      "[Web Design]",
      "[Content Strategy]",
      "[Social Media]",
      "[Motion & Video]",
    ],
  },
  {
    title: "Company",
    links: ["[About]", "[Our Work]", "[Process]", "[Blog]", "[Careers]"],
  },
];

const contactInfo = [
  "[hello@klemacreative.com]",
  "[(555) 123-4567]",
  "[San Antonio, TX]",
];

const socials = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Behance", href: "#" },
  { name: "X", href: "#" },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (title: string) =>
    setOpenSection((prev) => (prev === title ? null : title));

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-24">
        {/* Top: logo + newsletter */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold">[Klema Creative]</p>
            <p className="mt-1 text-sm text-gray-400">
              [Building brands that move people.]
            </p>
          </div>
          <div className="w-full max-w-sm">
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter"
                type="email"
                placeholder="[Your email address]"
                className="w-full rounded-full bg-dark-light px-5 py-3 text-sm text-white placeholder-gray-400 outline-none ring-1 ring-gray-700 focus:ring-primary"
              />
              <button
                type="button"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-primary-dark active:scale-[1.03] sm:w-auto"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle: link columns */}
        <div className="mt-12 border-t border-gray-800 pt-10">
          {/* Desktop columns */}
          <div className="hidden gap-8 md:grid md:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                  {col.title}
                </p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                Contact
              </p>
              <ul className="space-y-2">
                {contactInfo.map((info) => (
                  <li key={info} className="text-sm text-gray-300">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                Follow Us
              </p>
              <ul className="space-y-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile accordions */}
          <div className="space-y-0 md:hidden">
            {footerColumns.map((col) => (
              <div key={col.title} className="border-b border-gray-800">
                <button
                  onClick={() => toggle(col.title)}
                  className="flex w-full items-center justify-between py-4 text-left text-sm font-bold uppercase tracking-widest text-gray-400"
                  aria-expanded={openSection === col.title}
                >
                  {col.title}
                  <span className="text-lg">
                    {openSection === col.title ? "\u2227" : "\u2228"}
                  </span>
                </button>
                {openSection === col.title && (
                  <ul className="space-y-2 pb-4">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-300 transition-colors duration-200 active:text-white"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact info - always visible on mobile */}
            <div className="border-b border-gray-800 py-4">
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gray-400">
                Contact
              </p>
              <ul className="space-y-2">
                {contactInfo.map((info) => (
                  <li key={info} className="text-sm text-gray-300">
                    {info}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social icons centered */}
            <div className="flex justify-center gap-6 py-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="text-sm text-gray-300 transition-colors duration-200 active:text-white"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-gray-800 pt-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <p>&copy; 2026 [Klema Creative]. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors duration-200 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors duration-200 hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
