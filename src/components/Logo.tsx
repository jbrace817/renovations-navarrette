import Link from "next/link";
import { cn } from "@/lib/utils";

const maskStyle = {
  maskImage: "url(/images/logo/navarette-logo-outline.svg)",
  maskSize: "contain",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  WebkitMaskImage: "url(/images/logo/navarette-logo-outline.svg)",
  WebkitMaskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
} as const;

type LogoProps = {
  className?: string;
  href?: string;
  invert?: boolean;
};

export function Logo({ className, href = "/", invert = false }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-3",
        invert
          ? "text-background transition-colors duration-300"
          : "text-foreground",
        className,
      )}
      aria-label="Renovations By Navarrette"
    >
      {/* Logo mark — stacked full-color and outline versions that crossfade */}
      <span className="relative h-[1.1em] w-[1.1em] shrink-0">
        {/* Full-color version (default) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo/navarette-logo.svg"
          alt=""
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-300",
            invert ? "opacity-0" : "opacity-100",
          )}
        />
        {/* Outline version (inverted) — uses mask for currentColor inheritance */}
        <div
          className={cn(
            "absolute inset-0 bg-current transition-opacity duration-300",
            invert ? "opacity-100" : "opacity-0",
          )}
          style={maskStyle}
        />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="font-logo-text text-[0.64em] font-light tracking-[0.05em] italic">
          Renovations
        </span>
        <span className="font-logo-text text-[0.38em] font-normal tracking-[0.2em] uppercase">
          by Navarrette
        </span>
      </span>
    </Link>
  );
}
