"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { images } from "@/lib/content";

export function Hero() {
  const [useFallback, setUseFallback] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const sources = useFallback ? [images.fallback.hero] : images.hero;

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % sources.length);
    }, 6000);
    return () => clearInterval(id);
  }, [sources.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {sources.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${
              i === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover scale-105"
              priority={i === 0}
              sizes="100vw"
              unoptimized={src.includes("bethechangebyaradhana.com") || src.includes("unsplash")}
              onError={() => setUseFallback(true)}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" aria-hidden />
      </div>

      <div className="relative section-padding pt-48 pb-24 md:pt-56 md:pb-32 z-10">
        <div className="container-wide max-w-4xl">
          <p className="font-accent text-[11px] uppercase tracking-[0.35em] text-golden mb-6 opacity-90">
            Life Coach · Empowerment · Access Consciousness
          </p>
          <h1 className="font-display text-display-xl font-semibold text-white leading-[0.95] tracking-tight">
            Be The Change
          </h1>
          <div className="mt-6 h-px w-16 bg-golden/80" aria-hidden />
          <p className="font-display text-xl md:text-2xl text-white/95 mt-8 max-w-xl leading-relaxed">
            Create a life of infinite possibilities with joy, awareness, and transformation.
          </p>
          <div className="flex flex-wrap gap-5 mt-12">
            <Link
              href="/about"
              className="btn-primary bg-golden text-white hover:bg-golden/90 px-10 py-4"
            >
              Meet Aradhana
            </Link>
            <Link
              href="/contact"
              className="border border-white/80 text-white font-accent uppercase tracking-[0.2em] text-sm px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 right-8 md:right-20 flex gap-3 z-10">
        {sources.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            className={`h-px transition-all duration-300 ${
              i === slideIndex ? "w-8 bg-golden" : "w-6 bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setSlideIndex(i)}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#mission"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-golden transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-accent text-[10px] uppercase tracking-[0.3em]">Discover</span>
        <span className="block w-px h-12 bg-current opacity-60 group-hover:opacity-100 animate-pulse" />
      </a>
    </section>
  );
}
