"use client";

import Image from "next/image";
import { useScrollReveal } from "./useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="about"
      className="animate-on-scroll bg-gray-light py-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-12 lg:px-24">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
          <Image
            src="https://placehold.co/800x600/1e293b/f8fafc?text=[Team+Photo]"
            alt="[Team photo placeholder]"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-dark md:text-4xl lg:text-5xl">
            [We&rsquo;re Klema Creative.]
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
            [We are a team of designers, strategists, and developers who believe
            in the power of great design to transform businesses. Founded with a
            mission to make world-class creative accessible to growing brands.]
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
            [Every project we take on is an opportunity to create something
            meaningful. We combine strategic thinking with creative excellence to
            deliver results that matter.]
          </p>
          <a
            href="#"
            className="mt-8 inline-block w-full rounded-full border-2 border-dark px-8 py-3 text-center text-base font-semibold text-dark transition-all duration-200 hover:scale-[1.03] hover:bg-dark hover:text-white active:scale-[1.03] md:w-auto"
            aria-label="Meet the team"
          >
            Meet the Team
          </a>
        </div>
      </div>
    </section>
  );
}
