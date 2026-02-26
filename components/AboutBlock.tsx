"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { about, images } from "@/lib/content";

export function AboutBlock() {
  const [aboutSrc, setAboutSrc] = useState(images.about);
  return (
    <section className="section-padding bg-bone/40 border-y border-bone overflow-hidden">
      <div className="container-wide grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <span className="font-accent text-xs uppercase tracking-[0.3em] text-stone">
            About
          </span>
          <h2 className="font-display text-display-lg font-semibold text-ink mt-4">
            Meet Aradhana
          </h2>
          <p className="font-body text-ink/90 text-lg leading-relaxed mt-6">
            {about.bio}
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 font-accent text-xs uppercase tracking-[0.2em] text-ink link-underline"
          >
            Read More
          </Link>
        </div>
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="relative aspect-[4/5] max-w-lg mx-auto md:mr-0 md:ml-auto bg-bone overflow-hidden">
            <Image
              src={aboutSrc}
              alt={`${about.name}, ${about.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized={aboutSrc.includes("bethechangebyaradhana.com") || aboutSrc.includes("unsplash")}
              onError={() => setAboutSrc(images.fallback.about)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
