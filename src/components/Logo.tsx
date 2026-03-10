import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  invert?: boolean;
};

export function Logo({ className, href = "/", invert = false }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="Renovations By Navarrette"
    >
      {/* Logo mark */}
      <Image
        src="/images/logo/navarette-logo.svg"
        alt=""
        width={200}
        height={200}
        className={cn("h-[1.1em] w-auto", invert && "brightness-0 invert")}
        priority
      />

      {/* Wordmark */}
      <span
        className={cn(
          "flex flex-col leading-none",
          invert
            ? "text-background transition-colors duration-300"
            : "text-foreground",
        )}
      >
        <span className="font-logo-text text-[0.38em] font-light tracking-[0.05em] italic">
          Renovations
        </span>
        <span className="font-logo-text text-[0.22em] font-normal tracking-[0.2em] uppercase">
          by Navarrette
        </span>
      </span>
    </Link>
  );
}
