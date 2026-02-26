"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { offerings, images } from "@/lib/content";

export function OfferingsGrid() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <span className="font-accent text-xs uppercase tracking-[0.3em] text-stone">
          Offerings
        </span>
        <h2 className="font-display text-display-lg font-semibold text-ink mt-4 mb-16">
          Classes, Sessions & More
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {offerings.map((item) => (
            <OfferingCard key={item.title} item={item} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/classes/access" className="btn-outline">
            Explore All Classes
          </Link>
        </div>
      </div>
    </section>
  );
}

function OfferingCard({
  item,
}: {
  item: (typeof offerings)[0] & { image?: string };
}) {
  const [imgSrc, setImgSrc] = useState(item.image || images.fallback.offering);
  const href = item.external ? item.href : item.href;
  const isExternal = !!item.external;

  return (
    <div className="group border border-bone overflow-hidden bg-cream hover:border-stone/50 transition-colors duration-300">
      <div className="relative aspect-[16/10] bg-bone">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={imgSrc?.includes("bethechangebyaradhana.com")}
          onError={() => setImgSrc(images.fallback.offering)}
        />
      </div>
      <div className="p-8 md:p-10">
        <h3 className="font-display text-display-md font-semibold text-ink group-hover:text-charcoal">
          {item.title}
        </h3>
        <p className="font-body text-stone mt-3 text-sm leading-relaxed">
          {item.description}
        </p>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 font-accent text-xs uppercase tracking-[0.2em] text-ink link-underline"
          >
            {item.cta}
          </a>
        ) : (
          <Link
            href={href}
            className="inline-block mt-6 font-accent text-xs uppercase tracking-[0.2em] text-ink link-underline"
          >
            {item.cta}
          </Link>
        )}
      </div>
    </div>
  );
}
