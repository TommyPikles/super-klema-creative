"use client";

import { useScrollReveal } from "./useScrollReveal";

const steps = [
  {
    number: "01",
    title: "[Discover]",
    description:
      "[We learn everything about your brand, goals, audience, and competitive landscape.]",
  },
  {
    number: "02",
    title: "[Strategize]",
    description:
      "[We develop a tailored plan and creative direction aligned with your business objectives.]",
  },
  {
    number: "03",
    title: "[Create]",
    description:
      "[Our team designs, builds, and refines every deliverable to the highest standard.]",
  },
  {
    number: "04",
    title: "[Launch & Grow]",
    description:
      "[We launch your project and continue to optimize for performance and growth.]",
  },
];

export default function Process() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="process"
      className="animate-on-scroll bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-primary">
            [How We Work]
          </span>
          <h2 className="text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            [Our process]
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 lg:text-lg">
            [A proven, collaborative process that takes your project from
            concept to launch with clarity and confidence.]
          </p>
        </div>

        {/* Desktop: horizontal row | Mobile: vertical stack */}
        <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gray-200 md:block" />

          {/* Mobile vertical line */}
          <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gray-200 md:hidden" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex gap-4 md:flex-col md:items-center md:text-center">
              {/* Number badge */}
              <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white md:h-16 md:w-16 md:text-lg">
                {step.number}
              </div>
              <div className="pt-1 md:pt-4">
                <h3 className="text-lg font-bold text-dark">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600 md:mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
