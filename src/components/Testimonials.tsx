"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const testimonials = [
  {
    quote:
      "[Klema Creative transformed our brand from the ground up. Their strategic approach and creative execution exceeded every expectation we had.]",
    name: "[Jane Smith]",
    company: "[Acme Corp]",
    avatar: "https://placehold.co/64x64/e2e8f0/64748b?text=JS",
  },
  {
    quote:
      "[Working with Klema was a game-changer. They understood our vision immediately and delivered a website that truly represents who we are.]",
    name: "[John Doe]",
    company: "[Summit LLC]",
    avatar: "https://placehold.co/64x64/e2e8f0/64748b?text=JD",
  },
  {
    quote:
      "[The results speak for themselves. Our engagement is up 200% and our brand has never looked better. Highly recommend their team.]",
    name: "[Sarah Lee]",
    company: "[Bloom Co]",
    avatar: "https://placehold.co/64x64/e2e8f0/64748b?text=SL",
  },
];

export default function Testimonials() {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      ref={ref}
      className="animate-on-scroll bg-gray-light py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
          [What Our Clients Say]
        </h2>

        {/* Desktop: 3-column grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <span className="text-4xl leading-none text-primary">&ldquo;</span>
              <p className="mt-2 text-base leading-relaxed text-gray-600">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-dark">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single-card carousel */}
        <div className="md:hidden">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <span className="text-4xl leading-none text-primary">&ldquo;</span>
            <p className="mt-2 text-base leading-relaxed text-gray-600">
              {testimonials[current].quote}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="h-10 w-10 rounded-full"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-bold text-dark">
                  {testimonials[current].name}
                </p>
                <p className="text-xs text-gray-500">
                  {testimonials[current].company}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-lg transition-colors duration-200 active:bg-gray-100"
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                    i === current ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-lg transition-colors duration-200 active:bg-gray-100"
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
