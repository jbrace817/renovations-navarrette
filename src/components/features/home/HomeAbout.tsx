"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight, MapPin } from "lucide-react";

import Container from "@/components/Container";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import AvatarGroupTightBorder1 from "@/components/avatar-group-tight-border-1";

interface HomeAboutProps {
  className?: string;
}

const stats = [
  {
    value: 15,
    suffix: "+",
    label: (
      <>
        Years of <br /> Expertise
      </>
    ),
  },
  {
    value: 500,
    suffix: "+",
    label: (
      <>
        Projects <br /> Completed
      </>
    ),
  },
  {
    value: 98,
    suffix: "%",
    label: (
      <>
        Satisfaction <br /> Rate
      </>
    ),
  },
];

const HomeAbout = ({ className }: HomeAboutProps) => {
  return (
    <section className={cn("py-16 md:py-24 lg:py-20", className)}>
      <Container>
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Image on left */}
          <div className="order-2 w-full lg:order-1 lg:w-1/2">
            <FadeIn delay={1.4} inViewPort>
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/8215884/pexels-photo-8215884.jpeg"
                  alt="Custom home remodeling showcase"
                  className="h-[500px] w-full rounded-3xl object-cover md:h-[600px]"
                  width={600}
                  height={600}
                />

                {/* Statistics Overlay Card - Bottom Left */}
                <div className="bg-background absolute bottom-0 left-0 max-w-[calc(100%-3rem)] rounded-2xl p-4 md:max-w-sm md:p-6">
                  <div className="flex gap-x-5 max-[344px]:gap-x-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex flex-col">
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          className="text-foreground mb-1 text-2xl font-bold md:text-3xl lg:text-4xl"
                        />
                        <span className="text-muted-foreground text-xs leading-tight md:text-sm">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-background absolute -top-4 -left-4 h-8 w-6 rotate-90 rounded-2xl mask-[radial-gradient(circle_at_0_0,transparent_1rem,black_1rem)] mask-size-[100%_100%] mask-position-[0_0] mask-no-repeat [-webkit-mask-image:radial-gradient(circle_at_0_0,transparent_0.75rem,black_0.75rem)] [-webkit-mask-position:0_0] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]" />
                  <div className="bg-background absolute -right-2 -bottom-4 h-8 w-6 rotate-90 rounded-2xl mask-[radial-gradient(circle_at_0_0,transparent_1rem,black_1rem)] mask-size-[100%_100%] mask-position-[0_0] mask-no-repeat [-webkit-mask-image:radial-gradient(circle_at_0_0,transparent_0.75rem,black_0.75rem)] [-webkit-mask-position:0_0] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Content on right */}
          <div className="order-1 w-full lg:order-2 lg:w-1/2 lg:max-w-xl">
            {/* Eyebrow text with accent line */}
            <FadeIn delay={1.2} inViewPort>
              <div className="mb-6 flex items-center gap-3 md:mb-8">
                <span className="bg-primary h-px w-8 md:w-12" />
                <p className="text-primary text-sm font-semibold tracking-wider uppercase md:text-base">
                  About Artisan Builders
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1.2} inViewPort>
              <h2 className="text-foreground mb-8 text-3xl leading-[1.15] font-semibold tracking-tight sm:text-4xl md:mb-10 lg:text-[2.75rem]">
                Dedicated To Delivering High-Quality Custom Home Remodeling With{" "}
                <span className="text-primary">Craftsmanship</span> You Can
                Trust
              </h2>
            </FadeIn>

            {/* Client count and location row */}
            <FadeIn delay={0.3}>
              <div className="mb-8 flex flex-wrap items-center gap-8 md:mb-10 md:gap-12">
                <div className="flex flex-col gap-1">
                  <AvatarGroupTightBorder1 />
                  <p className="text-foreground text-sm font-medium md:text-base">
                    15k+ Happy Clients
                  </p>
                </div>

                <div className="bg-border hidden h-12 w-px sm:block" />

                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 flex size-10 items-center justify-center rounded-full">
                    <MapPin className="text-primary size-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-xs tracking-wide uppercase">
                      Located in
                    </span>
                    <span className="text-foreground text-base font-semibold">
                      Doylestown, PA
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-muted-foreground text-base leading-relaxed text-pretty md:max-w-lg md:text-lg">
                We specialize in custom home remodeling that blends smart
                layouts, premium materials, and modern aesthetics. From small
                upgrades to complete transformations, we bring your vision to
                life with attention to detail and exceptional craftsmanship.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} inViewPort>
              <div className="mt-8 flex items-center gap-2 md:mt-10">
                <a
                  href="/about"
                  className="text-foreground group hover:text-primary inline-flex items-center gap-2 text-base font-semibold transition-colors"
                >
                  Learn more about us
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { HomeAbout };
