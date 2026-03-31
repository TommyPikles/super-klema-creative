"use client";

import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    icon: "\u2728",
    name: "[Brand Identity]",
    description:
      "[We craft memorable brand identities that resonate with your audience and set you apart from the competition.]",
  },
  {
    icon: "\uD83D\uDDA5\uFE0F",
    name: "[Web Design]",
    description:
      "[Custom websites built for performance, conversion, and beautiful user experiences across every device.]",
  },
  {
    icon: "\uD83D\uDCDD",
    name: "[Content Strategy]",
    description:
      "[Strategic content planning and creation that drives engagement, builds trust, and fuels organic growth.]",
  },
  {
    icon: "\uD83D\uDCF1",
    name: "[Social Media]",
    description:
      "[Full-service social media management that builds community and drives measurable business results.]",
  },
  {
    icon: "\uD83C\uDFA5",
    name: "[Motion & Video]",
    description:
      "[Compelling video content and motion graphics that capture attention and tell your brand story.]",
  },
  {
    icon: "\uD83D\uDCC8",
    name: "[Marketing Strategy]",
    description:
      "[Data-driven marketing strategies that align your goals with actionable plans for sustainable growth.]",
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="services"
      className="animate-on-scroll bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-primary">
            [What We Do]
          </span>
          <h2 className="text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            [Services built for growth]
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 lg:text-lg">
            [From brand strategy to digital execution, we offer a full suite of
            creative services to help your business thrive.]
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:-translate-y-0.5 active:shadow-md"
            >
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="mb-2 text-lg font-bold text-dark">
                {service.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-dark"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block w-full rounded-full border-2 border-dark px-8 py-3 text-base font-semibold text-dark transition-all duration-200 hover:scale-[1.03] hover:bg-dark hover:text-white active:scale-[1.03] md:w-auto"
            aria-label="See all services"
          >
            See All Services
          </a>
        </div>
      </div>
    </section>
  );
}
