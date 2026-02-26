"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { images } from "@/lib/content";

export function Hero() {
  // Start with fallback so hero is never black when site images 404
  const [useFallback, setUseFallback] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const sources = useFallback ? [images.fallback.hero] : images.hero;

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % sources.length);
    }, 5000);
    return () => clearInterval(id);
  }, [sources.length]);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-end overflow-hidden">
      {/* Background image(s) */}
      <div className="absolute inset-0 bg-charcoal">
        {sources.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
              unoptimized={src.includes("bethechangebyaradhana.com") || src.includes("unsplash")}
              onError={() => setUseFallback(true)}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-ink/50" aria-hidden />
      </div>

      <div className="relative section-padding pt-40 pb-20 md:pt-48 md:pb-28 z-10">
        <div className="container-wide">
          <p className="font-accent text-xs uppercase tracking-[0.3em] text-pastel/90 mb-4 animate-fade-in">
            Life Coach · Empowerment · Access Consciousness
          </p>
          <h1 className="font-display font-display-xl font-semibold text-pastel max-w-4xl drop-shadow-sm animate-slide-up">
            Be The Change
          </h1>
          <p className="font-display text-display-md text-pastel/95 max-w-xl mt-6 animate-slide-up">
            Create a life of infinite possibilities with joy, awareness, and transformation.
          </p>
          <div className="flex flex-wrap gap-4 mt-10 animate-slide-up">
            <Link href="/about" className="btn-primary bg-btc-hot text-white hover:bg-btc-hot/90">
              Meet Aradhana
            </Link>
            <Link href="/contact" className="border-2 border-pastel text-pastel font-accent uppercase tracking-[0.2em] text-sm px-8 py-4 transition-all duration-300 hover:bg-pastel hover:text-ink">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 md:right-16 flex gap-2 z-10">
        {sources.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === slideIndex ? "bg-pastel" : "bg-pastel/50"
            }`}
            onClick={() => setSlideIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
