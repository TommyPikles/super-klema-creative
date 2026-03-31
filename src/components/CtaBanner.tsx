"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function CtaBanner() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="contact"
      className="animate-on-scroll bg-dark py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 text-center md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          [Ready to elevate your brand?]
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 lg:text-lg">
          [Let&rsquo;s talk about your next project. We&rsquo;d love to hear
          your vision and show you how we can bring it to life.]
        </p>
        <a
          href="#"
          className="mt-8 inline-block w-full rounded-full bg-accent px-10 py-4 text-base font-bold text-dark transition-all duration-200 hover:scale-[1.03] hover:bg-accent-dark active:scale-[1.03] md:w-auto"
          aria-label="Start your project"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}
