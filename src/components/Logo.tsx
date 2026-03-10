import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  name?: string; // "Artisan Builders"
  mark?: string; // "A"
  invert?: boolean;
};

export function Logo({
  className,
  href = "/",
  name = "Artisan Builders",
  mark = "A",
  invert = false,
}: LogoProps) {
  const [firstWord, ...rest] = name.split(" ");
  const secondLine = rest.join(" "); // "Builders"

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-3", className)}
      aria-label={name}
    >
      {/* Fancy A mark */}
      <span
        className={cn(
          "font-logo-mark text-[1em] leading-none tracking-tight",
          invert
            ? "text-background transition-colors duration-300"
            : "text-foreground",
        )}
      >
        {mark}
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="font-brand text-[0.35em] font-bold tracking-[0.18em] uppercase">
          {firstWord}
        </span>
        <span className="font-brand text-primary text-[0.35em] font-bold tracking-[0.12em] uppercase">
          {secondLine}
        </span>
      </span>
    </Link>
  );
}
