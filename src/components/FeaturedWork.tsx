"use client";

import Image from "next/image";
import { useScrollReveal } from "./useScrollReveal";

const projects = [
  {
    name: "[Project Alpha]",
    category: "[Brand Identity]",
    image: "https://placehold.co/600x400/1e293b/f8fafc?text=[Project+1]",
  },
  {
    name: "[Project Beta]",
    category: "[Web Design]",
    image: "https://placehold.co/600x400/1e293b/f8fafc?text=[Project+2]",
  },
  {
    name: "[Project Gamma]",
    category: "[Marketing]",
    image: "https://placehold.co/600x400/1e293b/f8fafc?text=[Project+3]",
  },
];

export default function FeaturedWork() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="work"
      className="animate-on-scroll bg-gray-light py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-primary">
            [Our Work]
          </span>
          <h2 className="text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            [Featured projects]
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 lg:text-lg">
            [A selection of recent work we are proud of. Each project is a
            testament to our commitment to quality and creativity.]
          </p>
        </div>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="-mx-6 flex gap-6 overflow-x-auto px-6 pb-4 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative min-w-[280px] flex-shrink-0 snap-center overflow-hidden rounded-xl md:min-w-0"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Desktop hover overlay */}
                <div className="absolute inset-0 hidden items-center justify-center bg-dark/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                  <span className="text-base font-semibold text-white">
                    View Project &rarr;
                  </span>
                </div>
              </div>
              {/* Mobile: always show info below */}
              <div className="bg-white p-4 md:hidden">
                <h3 className="font-bold text-dark">{project.name}</h3>
                <span className="text-sm text-gray-500">
                  {project.category}
                </span>
              </div>
              {/* Desktop: show info on hover via overlay, but also show name below */}
              <div className="hidden bg-white p-4 md:block">
                <h3 className="font-bold text-dark">{project.name}</h3>
                <span className="text-sm text-gray-500">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block w-full rounded-full border-2 border-dark px-8 py-3 text-base font-semibold text-dark transition-all duration-200 hover:scale-[1.03] hover:bg-dark hover:text-white active:scale-[1.03] md:w-auto"
            aria-label="View full portfolio"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
