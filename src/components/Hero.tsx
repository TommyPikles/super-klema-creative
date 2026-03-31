"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollReveal } from "./useScrollReveal";
import HeroRules from "./HeroRules";

export default function Hero() {
  const scrollRef = useScrollReveal();
  const heroRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const setRefs = (el: HTMLElement | null) => {
    heroRef.current = el;
    (scrollRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  return (
    <section
      ref={setRefs}
      className="animate-on-scroll relative min-h-screen overflow-hidden pt-16"
      style={{
        background: "linear-gradient(180deg, #ede9fe 0%, #ddd6fe 25%, #c4b5fd 50%, #c4b5fd 70%, #a78bfa 100%)",
      }}
    >
      {/* Subtle arc decorations */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-[35%] h-[800px] w-[800px] -translate-x-1/2 rounded-full border-2 border-white/40 md:h-[1100px] md:w-[1100px]"
        />
        <div
          className="absolute left-1/2 top-[40%] h-[600px] w-[600px] -translate-x-1/2 rounded-full border-2 border-white/35 md:h-[850px] md:w-[850px]"
        />
        <div
          className="absolute left-1/2 top-[45%] h-[400px] w-[400px] -translate-x-1/2 rounded-full border border-white/25 md:h-[600px] md:w-[600px]"
        />
      </div>

      <div
        ref={innerRef}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 md:px-12 lg:px-24"
      >
        {/* Text content */}
        <div
          ref={textColRef}
          className="flex flex-col items-center gap-6 pt-16 text-center md:pt-24"
        >
          <p
            ref={subheadingRef}
            className="text-sm font-extrabold uppercase tracking-[0.2em] md:text-base lg:text-lg"
            style={{
              background: "linear-gradient(90deg, #7c3aed, #6d28d9, #4f46e5, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital Marketing Agency Based<br />in San Antonio, Texas
          </p>

          <h1
            ref={headingRef}
            className="max-w-4xl text-5xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl"
            style={{ color: "#1e1b4b" }}
          >
            Bold Marketing for Big Texas Ideas.
          </h1>

          <div ref={ctaRef} className="relative z-20 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary/90 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-[1.03] hover:bg-primary-dark active:scale-[1.03]"
              aria-label="Get started"
            >
              Get started
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-dark text-sm"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Second headshot circle - right side, higher */}
      <div className="absolute bottom-[58%] right-4 z-0 md:right-12 lg:right-24">
        <div
          className="absolute -inset-5 rounded-full border-2 md:-inset-6"
          style={{
            border: "2px solid rgba(196,181,253,0.4)",
            mask: "radial-gradient(circle, white 60%, transparent 100%)",
            WebkitMask: "radial-gradient(circle, white 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute -inset-10 rounded-full border border-purple-300/20 md:-inset-12"
          style={{
            mask: "radial-gradient(circle, white 50%, transparent 100%)",
            WebkitMask: "radial-gradient(circle, white 50%, transparent 100%)",
          }}
        />
        <div className="h-22 w-22 overflow-hidden rounded-full border-4 border-purple-300/50 bg-purple-200 md:h-28 md:w-28">
          <Image
            src="/headshot-2.png"
            alt="Team member headshot"
            width={256}
            height={256}
            className="scale-[2.2] translate-x-[-12px] translate-y-10 object-cover"
          />
        </div>
      </div>

      {/* Headshot circle - sits between gradient and skyline */}
      <div className="absolute bottom-[40%] left-4 z-0 md:left-12 lg:left-24">
        {/* Outer ring - fading at edges */}
        <div
          className="absolute -inset-5 rounded-full border-2 md:-inset-6"
          style={{
            borderImage: "linear-gradient(135deg, rgba(196,181,253,0.5), rgba(196,181,253,0.1)) 1",
            borderImageSlice: 1,
            borderRadius: "9999px",
            border: "2px solid rgba(196,181,253,0.4)",
            mask: "radial-gradient(circle, white 60%, transparent 100%)",
            WebkitMask: "radial-gradient(circle, white 60%, transparent 100%)",
          }}
        />
        {/* Second outer ring */}
        <div
          className="absolute -inset-10 rounded-full border border-purple-300/20 md:-inset-12"
          style={{
            mask: "radial-gradient(circle, white 50%, transparent 100%)",
            WebkitMask: "radial-gradient(circle, white 50%, transparent 100%)",
          }}
        />
        {/* Main circle */}
        <div className="h-22 w-22 overflow-hidden rounded-full border-4 border-purple-300/50 bg-purple-200 md:h-28 md:w-28">
          <Image
            src="/headshot.jpg"
            alt="Founder headshot"
            width={256}
            height={256}
            className="scale-[1.3] translate-y-3 object-cover"
          />
        </div>
      </div>

      {/* Cityscape background image - bottom half, edge to edge */}
      <div className="absolute inset-x-0 -bottom-64 z-[1] h-[145%]">
        <Image
          src="/san-antonio-skyline-nobg.png"
          alt="San Antonio skyline"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Layout boundary guides - dev only */}
      <HeroRules
        visible={true}
        zones={[
          { ref: heroRef, label: "Hero Container", color: "rgba(255, 165, 0, 0.6)", borderWidth: 2 },
          { ref: innerRef, label: "Inner Content", color: "rgba(114, 75, 246, 0.6)", borderWidth: 2 },
          { ref: textColRef, label: "Text Column", color: "rgba(168, 85, 247, 0.4)", borderWidth: 1 },
          { ref: subheadingRef, label: "Subheading", color: "rgba(6, 214, 160, 0.5)" },
          { ref: headingRef, label: "Heading", color: "rgba(0, 180, 216, 0.5)" },
          { ref: ctaRef, label: "CTA Button", color: "rgba(255, 100, 100, 0.5)" },
        ]}
      />
    </section>
  );
}
