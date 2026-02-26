"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/content";

export function MediaBanner() {
  // Default to fallback so gallery always shows (site URLs often 404)
  const [useFallback, setUseFallback] = useState(true);
  const sources = useFallback ? images.fallback.banners : images.banners;

  return (
    <section className="bg-ink py-8 overflow-hidden" aria-label="Media gallery">
      <div className="flex gap-4 md:gap-6 animate-banner-scroll hover:[animation-play-state:paused] w-max">
        {[...sources, ...sources].map((src, i) => (
          <div
            key={`${i}-${src}`}
            className="relative w-64 h-40 md:w-80 md:h-52 flex-shrink-0 rounded overflow-hidden bg-charcoal"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="320px"
              unoptimized={src.includes("bethechangebyaradhana.com") || src.includes("unsplash.com")}
              onError={() => setUseFallback(true)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
