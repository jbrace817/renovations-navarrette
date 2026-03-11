import Link from "next/link";
import { Sparkles, ShieldCheck, Timer, ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import Image from "next/image";
import PhotoAttribution from "@/components/PhotoAttribution";
import { FadeIn } from "@/components/FadeIn";

type HomeMidCTAProps = {
  leftTitle?: string;
  leftSubtitle?: string;
  leftImageSrc?: string;
  leftImageAlt?: string;
  leftHref?: string;

  statEyebrow?: string;
  statValue?: string;
  statLabel?: string;
  statDescription?: string;
  ctaText?: string;
  ctaHref?: string;
};

export function HomeMidCTA({
  leftTitle = "Home Additions Built To Feel Original",
  leftSubtitle = "Add the space you need with an addition that blends seamlessly—matched finishes, smart layouts, and quality craftsmanship.",
  leftImageSrc = "https://images.pexels.com/photos/12700444/pexels-photo-12700444.jpeg",
  leftImageAlt = "Home addition exterior",

  statEyebrow = "Trusted Craftsmanship",
  statValue = "97%",
  statLabel = "of projects finish on-time",
  statDescription = "Clear timelines, clean job sites, and details handled the right way—so your remodel feels smooth from day one.",
  ctaText = "Request a Free Estimate",
  ctaHref = "/contact",
}: HomeMidCTAProps) {
  return (
    <section className="bg-slate-900 pt-16 pb-36 md:pt-24 md:pb-40">
      <Container>
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <FadeIn>
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-primary h-px w-8 md:w-12" />
              <p className="text-sm font-semibold tracking-wider text-white/70 uppercase md:text-base">
                Why Choose Us
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="max-w-2xl text-2xl leading-[1.15] font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Quality Work, <span className="text-primary">On Time</span>, Every
              Time
            </h2>
          </FadeIn>
        </div>

        <div className="grid gap-y-5 lg:grid-cols-3 lg:gap-6">
          {/* LEFT: Image Card */}
          <FadeIn delay={0.2} className="md:col-span-2">
            <div className="group relative isolate h-full overflow-hidden rounded-2xl">
              {/* Image */}
              <Image
                src={leftImageSrc}
                alt={leftImageAlt}
                className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[420px] lg:h-full"
                width={800}
                height={600}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                <div className="max-w-xl">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Sparkles className="size-3.5" />
                    Mid-Project Planning Included
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl">
                    {leftTitle}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-pretty text-white/80 sm:text-base">
                    {leftSubtitle}
                  </p>
                  <PhotoAttribution
                    author="Curtis Adams"
                    url="https://images.pexels.com/photos/12700444/pexels-photo-12700444.jpeg"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: Stat Card */}
          <FadeIn delay={0.3}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              {/* Subtle gradient accent */}
              <div className="from-primary/10 pointer-events-none absolute inset-0 bg-linear-to-br via-transparent to-transparent" />

              <div className="relative flex flex-1 flex-col">
                {/* Eyebrow */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="bg-primary size-2 rounded-full" />
                  <p className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                    {statEyebrow}
                  </p>
                </div>

                {/* Main Stat */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <p className="text-primary text-5xl font-bold tracking-tight sm:text-6xl">
                      {statValue}
                    </p>
                    <p className="text-sm font-medium text-white/70">
                      {statLabel}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {statDescription}
                  </p>
                </div>

                {/* Features List */}
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <div className="bg-primary/20 flex size-8 items-center justify-center rounded-full">
                      <Timer className="text-primary size-4" />
                    </div>
                    Clear milestones + weekly check-ins
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white/80">
                    <div className="bg-primary/20 flex size-8 items-center justify-center rounded-full">
                      <ShieldCheck className="text-primary size-4" />
                    </div>
                    Licensed, insured & code-compliant
                  </li>
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href={ctaHref}
                    className="bg-primary text-primary-foreground group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110"
                  >
                    {ctaText}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <p className="mt-4 text-center text-xs text-white/50">
                    No pressure—just a quick walkthrough and a clear next step.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
