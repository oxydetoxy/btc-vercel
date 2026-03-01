"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { offerings, images } from "@/lib/content";

export function OfferingsGrid() {
  return (
    <section className="section-padding bg-[#fafaf9]">
      <div className="container-wide">
        <p className="font-accent text-[10px] uppercase tracking-[0.4em] text-golden mb-4">
          Offerings
        </p>
        <h2 className="font-display text-display-lg font-semibold text-black max-w-2xl">
          Classes, Sessions & More
        </h2>
        <p className="font-body text-black/70 mt-4 max-w-xl">
          Transformative programs and one-on-one support for your journey.
        </p>

        <div className="mt-16 space-y-0">
          {offerings.map((item, index) => (
            <OfferingBlock key={item.title} item={item} index={index} reverse={index % 2 === 1} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/classes/access"
            className="inline-flex items-center gap-3 font-accent text-xs uppercase tracking-[0.25em] text-golden hover:text-white transition-colors"
          >
            Explore All Classes
            <span className="text-golden">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function OfferingBlock({
  item,
  index,
  reverse,
}: {
  item: (typeof offerings)[0] & { image?: string };
  index: number;
  reverse: boolean;
}) {
  const fallback = images.fallback.offerings?.[index] ?? images.fallback.offering;
  const [imgSrc, setImgSrc] = useState(fallback);
  const href = item.external ? item.href : item.href;
  const isExternal = !!item.external;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group block border-t border-black/10 hover:bg-white/80 transition-colors bg-white ${
        index === offerings.length - 1 ? "border-b border-black/10" : ""
      }`}
    >
      <div className="grid md:grid-cols-12 gap-0 min-h-[320px] md:min-h-[380px]">
        <div className={`relative md:col-span-5 overflow-hidden ${reverse ? "md:order-2" : ""}`}>
          <div className="absolute inset-0">
            <Image
              src={imgSrc}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 42vw"
              unoptimized={imgSrc?.includes("bethechangebyaradhana.com") || imgSrc?.includes("unsplash.com")}
              onError={() => setImgSrc(fallback)}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent md:from-black/70 md:via-black/40 md:to-transparent ${
                reverse ? "md:bg-gradient-to-l" : "md:bg-gradient-to-r"
              }`}
            />
          </div>
        </div>
        <div
          className={`md:col-span-7 flex flex-col justify-center p-8 md:p-12 lg:p-16 ${
            reverse ? "md:text-right md:items-end" : ""
          }`}
        >
          <span className="font-accent text-[10px] uppercase tracking-[0.4em] text-golden">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-black mt-2 group-hover:text-golden transition-colors">
            {item.title}
          </h3>
          <p className="font-body text-black/70 mt-4 text-sm md:text-base leading-relaxed max-w-lg">
            {item.description}
          </p>
          <span
            className={`inline-flex items-center gap-2 mt-8 font-accent text-xs uppercase tracking-[0.2em] text-golden ${
              reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {item.cta}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
