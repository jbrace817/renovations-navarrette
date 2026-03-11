import { ArrowRight } from "lucide-react";
import Container from "../../Container";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PhotoAttribution from "@/components/PhotoAttribution";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

interface Hero13Props {
  className?: string;
}

const Hero13 = ({ className }: Hero13Props) => {
  return (
    <section
      className={cn(
        "relative mx-auto flex w-full max-w-[1920px] items-center overflow-hidden",
        "min-h-[max(824px,78svh)] md:min-h-[max(800px,78svh)] xl:min-h-[max(860px,76svh)]",
        "py-16 md:py-24 lg:py-32",
        className,
      )}
    >
      {/* Background image - full width of section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/11593502/pexels-photo-11593502.jpeg"
          alt="Home remodeling showcase"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent" />
      </div>

      {/* Content */}
      <Container className="relative z-10 w-full">
        <FadeIn className="mb-3 max-w-fit rounded-full bg-white/10 text-xs font-normal backdrop-blur-md sm:text-sm md:mb-4 lg:mb-10">
          <Badge
            variant="default"
            className="max-w-full bg-transparent py-1.5 pr-2.5 text-xs font-normal sm:text-sm lg:py-1.5 lg:pr-5 lg:pl-2"
          >
            <span className="bg-primary text-primary-foreground mr-1 flex size-6 w-fit shrink-0 items-center justify-center rounded-full px-2 py-3.5 text-xs font-semibold">
              Southampton, PA
            </span>
            <p className="truncate font-semibold whitespace-nowrap text-white">
              Licensed • Insured{" "}
            </p>
          </Badge>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="font-heading mb-4 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:mb-6 md:text-5xl md:text-[7vw] lg:text-7xl">
            Southampton&apos;s Trusted
            <br />
            Home Remodeling
            <br />
            Contractors
          </h1>
        </FadeIn>
        <FadeIn delay={0.4} inViewPort>
          <p className="max-w-2xl text-sm text-white/90 sm:text-base md:text-[2vw] lg:text-xl">
            Kitchens, bathrooms, basements, and full home renovations in
            Southampton, PA. Quality craftsmanship from a local team that
            treats every project like their own.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-6 lg:mt-10">
          <FadeIn delay={0.6} inViewPort>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground w-full rounded-full transition-colors duration-300 hover:cursor-pointer sm:w-auto"
            >
              Book Your Free Consultation
            </Button>
          </FadeIn>
          <FadeIn
            inViewPort
            delay={0.8}
            className="group rounded-full bg-white/10 backdrop-blur-md"
          >
            <Button
              size="lg"
              variant="outline"
              className="group hover:text-primary-foreground bg-opacity-0 w-full rounded-full border-white/20 text-white transition-colors duration-300 group-hover:cursor-pointer hover:bg-white/20 sm:w-auto"
            >
              View Our Work
              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </FadeIn>
        </FadeInStagger>

        <FadeIn delay={1} className="ml-2">
          <PhotoAttribution
            author="Curtis Adams"
            url="https://images.pexels.com/photos/11593502/pexels-photo-11593502.jpeg"
          />
        </FadeIn>
      </Container>
    </section>
  );
};

export { Hero13 };
