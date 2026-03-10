import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import PhotoAttribution from "@/components/PhotoAttribution";
import { FadeIn } from "@/components/FadeIn";

interface HomeFinalCTAProps {
  className?: string;
}

const HomeFinalCTA = ({ className }: HomeFinalCTAProps) => {
  return (
    <section className={cn("", className)}>
      <FadeIn>
        <div className="relative h-[550px] overflow-hidden md:h-[480px] lg:h-[520px] xl:h-[620]">
          {/* Background Images */}
          <Image
            src="https://images.pexels.com/photos/7031606/pexels-photo-7031606.jpeg"
            alt="Modern residential home exterior"
            fill
            className="hidden object-cover md:block"
            priority
          />
          <Image
            src="https://images.pexels.com/photos/19227221/pexels-photo-19227221.jpeg"
            alt="Home interior"
            fill
            className="block object-cover md:hidden"
            priority
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-black/60 md:bg-transparent md:bg-linear-to-r md:from-black/70 md:via-black/32 md:to-transparent" />

          {/* Content */}
          <Container className="absolute inset-0 z-10 flex items-center">
            <div className="w-full px-6 py-10 sm:px-8 md:px-12 lg:px-16">
              <div className="relative w-full max-w-xl">
                {/* Eyebrow */}
                <FadeIn delay={0.1}>
                  <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
                    <span className="bg-primary h-px w-8 md:w-12" />
                    <p className="text-sm font-semibold tracking-wider text-white/90 uppercase md:text-base">
                      Get Started
                    </p>
                    <span className="bg-primary h-px w-8 md:hidden md:w-12" />
                  </div>
                </FadeIn>

                {/* Heading */}
                <FadeIn delay={0.2}>
                  <h2 className="mb-6 text-center text-3xl leading-[1.1] font-semibold tracking-tight text-white sm:text-4xl md:text-left lg:text-5xl">
                    Ready to Transform Your
                    <br />
                    <span className="text-primary">Home</span>?
                  </h2>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={0.3}>
                  <p className="mx-auto max-w-md text-center text-base leading-relaxed text-balance text-white/80 md:mx-0 md:text-left md:text-lg">
                    Clear timelines. Quality craftsmanship. Remodels done
                    right—from start to finish.
                  </p>
                </FadeIn>

                {/* CTAs */}
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                  <FadeIn delay={0.4}>
                    <Button
                      asChild
                      size="lg"
                      className="group w-full rounded-full px-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                      <Link href="/contact">Request a Free Estimate</Link>
                    </Button>
                  </FadeIn>
                  <FadeIn
                    delay={0.5}
                    className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="hover:text-primary-foreground bg-opacity-0 w-full rounded-full border-white/20 text-white transition-colors duration-300 hover:cursor-pointer hover:bg-white/20 sm:w-auto"
                    >
                      View Our Work
                      <ArrowRight className="ml-2 size-4 transition-transform duration-300 hover:translate-x-1" />
                    </Button>
                  </FadeIn>
                </div>

                {/* Photo Attribution */}
                <FadeIn delay={0.5}>
                  <div className="mt-8 hidden md:block">
                    <PhotoAttribution
                      author="Max Vakhtbovych"
                      url="https://www.pexels.com/photo/exterior-of-modern-residential-house-in-summer-7031606/"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </div>
      </FadeIn>
    </section>
  );
};

export { HomeFinalCTA };
