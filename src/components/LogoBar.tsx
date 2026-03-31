"use client";

import { useScrollReveal } from "./useScrollReveal";

const logos = Array.from({ length: 6 }, (_, i) => ({
  name: `[Client ${i + 1}]`,
  src: `https://placehold.co/160x60/e2e8f0/94a3b8?text=Logo+${i + 1}`,
}));

export default function LogoBar() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="animate-on-scroll overflow-hidden bg-gray-light py-10 lg:py-14"
    >
      <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-medium">
        [Trusted by brands we love]
      </p>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12 px-6">
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              className="h-8 w-auto grayscale opacity-60 md:h-10"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
