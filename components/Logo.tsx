"use client";

import Link from "next/link";
import { useState } from "react";
import { brand } from "@/lib/brand";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

const LOGO_SOURCES = [brand.logo, brand.logoAlt];

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const useText = sourceIndex >= LOGO_SOURCES.length;
  const isFooter = variant === "footer";

  if (useText) {
    return (
      <Link
        href="/"
        className={`font-display font-semibold tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap ${
          isFooter ? "text-2xl text-black" : "text-2xl md:text-3xl text-black"
        } ${className}`}
      >
        Be The Change
      </Link>
    );
  }

  return (
    <Link href="/" className={`block shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_SOURCES[sourceIndex]}
        alt="Be The Change"
        className={`object-contain object-left ${isFooter ? "h-11" : "h-10 md:h-12"} w-auto`}
        onError={() => setSourceIndex((i) => i + 1)}
      />
    </Link>
  );
}
