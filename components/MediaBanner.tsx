"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/content";

export function MediaBanner() {
  const [useFallback, setUseFallback] = useState(true);
  const sources = useFallback ? images.fallback.banners : images.banners;

  return (
    <section className="section-padding bg-[#fafaf9] overflow-hidden" aria-label="Gallery">
      <div className="container-wide mb-12">
        <p className="font-accent text-[10px] uppercase tracking-[0.4em] text-golden mb-4">
          Gallery
        </p>
        <h2 className="font-display text-display-md font-semibold text-black">
          Moments & Community
        </h2>
        <div className="mt-4 h-px w-16 bg-golden" aria-hidden />
      </div>
      <div className="flex gap-4 md:gap-6 animate-banner-scroll hover:[animation-play-state:paused] w-max">
        {[...sources, ...sources].map((src, i) => (
          <div
            key={`${i}-${src}`}
            className="relative w-72 h-48 md:w-96 md:h-60 flex-shrink-0 overflow-hidden rounded-sm border border-black/5"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="384px"
              unoptimized={src.includes("bethechangebyaradhana.com") || src.includes("unsplash.com")}
              onError={() => setUseFallback(true)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
