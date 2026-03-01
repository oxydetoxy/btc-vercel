"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { about, images } from "@/lib/content";

export function AboutBlock() {
  const [aboutSrc, setAboutSrc] = useState(images.about);
  return (
    <section className="section-padding bg-white overflow-hidden border-t border-black/5">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="font-accent text-[10px] uppercase tracking-[0.4em] text-golden mb-4">
              About
            </p>
            <h2 className="font-display text-display-lg font-semibold text-black">
              Meet Aradhana
            </h2>
            <div className="mt-4 h-px w-16 bg-golden" aria-hidden />
            <p className="font-body text-black/80 text-lg leading-relaxed mt-8 max-w-2xl">
              {about.bio}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-10 font-accent text-xs uppercase tracking-[0.2em] text-golden hover:text-black transition-colors"
            >
              Read More
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto overflow-hidden rounded-sm">
              <div className="absolute inset-0 border border-black/10 p-4 -m-4 rounded-sm" aria-hidden />
              <Image
                src={aboutSrc}
                alt={`${about.name}, ${about.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                unoptimized={aboutSrc.includes("bethechangebyaradhana.com") || aboutSrc.includes("unsplash")}
                onError={() => setAboutSrc(images.fallback.about)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
