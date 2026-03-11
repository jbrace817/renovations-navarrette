import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImageComparisonCustomSlider } from "@/components/ImageSlider/ImageComparisonSlider";
import PhotoAttribution from "@/components/PhotoAttribution";

const projects = [
  {
    title: "Southampton Kitchen Rebuild",
    descriptionParts: [
      "A full kitchen transformation focused on flow and function.",
      "We reworked the layout for better movement, installed custom cabinetry with smart storage, upgraded lighting for a cleaner look, and finished it with durable surfaces and modern hardware that still feels warm and inviting.",
    ],
    imageBefore:
      "https://images.pexels.com/photos/20773076/pexels-photo-20773076.jpeg",
    imageAfter:
      "https://images.pexels.com/photos/4642438/pexels-photo-4642438.jpeg",
    badge: "Kitchen Remodel",
    serviceHref: "/services#kitchen-remodeling",
    highlights: ["Custom cabinetry", "Layout rework", "Lighting + finishes"],
    photoBeforeAuthor: "C.L. Russell",
    photoBeforeUrl:
      "https://www.pexels.com/photo/interior-design-of-kitchen-in-house-20773076/",
    photoAfterAuthor: "Brett Rogers",
    photoAfterUrl:
      "https://www.pexels.com/photo/interior-of-house-during-construction-4642438/",
  },
  {
    title: "Newtown Primary Bath Upgrade",
    descriptionParts: [
      "A spa-style primary bath renovation designed for comfort and daily convenience.",
      "We built a walk-in shower, delivered premium tilework with clean lines, improved lighting and ventilation, and added smarter storage so the room looks elevated while staying easy to maintain.",
    ],
    imageBefore:
      "https://images.pexels.com/photos/15062118/pexels-photo-15062118.jpeg",
    imageAfter:
      "https://images.pexels.com/photos/4642438/pexels-photo-4642438.jpeg",
    badge: "Bathroom Remodel",
    serviceHref: "/services#bathroom-remodeling",
    highlights: ["Walk-in shower", "Custom tile", "Built-in storage"],
    photoBeforeAuthor: "Curtis Adams",
    photoBeforeUrl:
      "https://images.pexels.com/photos/15062118/pexels-photo-15062118.jpeg",
    photoAfterAuthor: "Brett Rogers",
    photoAfterUrl:
      "https://www.pexels.com/photo/interior-of-house-during-construction-4642438/",
  },
  {
    title: "Warrington Home Addition Expansion",
    descriptionParts: [
      "A seamless home addition that adds square footage without looking 'tacked on.'",
      "We matched exterior details and rooflines, planned the new layout around how the family uses the space, and finished the interior so transitions feel natural—like the addition was always part of the original home.",
    ],
    imageBefore:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ali-moradi-qNic6LXHw-w-unsplash.jpg",
    imageAfter:
      "https://images.pexels.com/photos/4642438/pexels-photo-4642438.jpeg",
    badge: "Home Addition",
    serviceHref: "/services#home-additions",
    highlights: [
      "New living space",
      "Matched finishes",
      "Permit-ready planning",
    ],
    photoBeforeAuthor: "Ali Moradi",
    photoBeforeUrl: "https://unsplash.com/@alimoradi",
    photoAfterAuthor: "Brett Rogers",
    photoAfterUrl:
      "https://www.pexels.com/photo/interior-of-house-during-construction-4642438/",
  },
];

interface HomeProjectsProps {
  className?: string;
}

const HomeProjects = ({ className }: HomeProjectsProps) => {
  return (
    <section className={cn("py-16 md:py-24 lg:py-32", className)}>
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-primary h-px w-8 md:w-12" />
              <p className="text-primary text-sm font-semibold tracking-wider uppercase md:text-base">
                Our Projects
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="font-heading text-foreground max-w-xl text-3xl leading-[1.15] font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Recent <span className="text-primary">Transformations</span>
              </h2>
              <p className="text-muted-foreground max-w-md text-base leading-relaxed md:text-lg">
                We&apos;ve helped homeowners transform their spaces into
                beautiful, functional homes.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-border mt-8 h-px w-full" />
          </FadeIn>
        </div>

        {/* Projects List */}
        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
                {/* Content */}
                <FadeIn delay={0.1}>
                  <div className="flex h-full flex-col">
                    <Badge
                      variant="secondary"
                      className="text-primary bg-primary/10 border-primary/20 mb-4 w-fit border px-3 py-1 text-xs font-semibold"
                    >
                      {project.badge}
                    </Badge>
                    <h3 className="font-heading text-foreground mb-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>
                    <div className="mb-8 max-w-lg space-y-4">
                      <p className="text-foreground text-base leading-relaxed font-medium lg:text-lg">
                        {project.descriptionParts[0]}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                        {project.descriptionParts[1]}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-muted border-border text-muted-foreground rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="group w-full rounded-full md:w-fit"
                    >
                      <Link href={project.serviceHref}>
                        See {project.badge} Services
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>

                {/* Image Comparison */}
                <FadeIn
                  delay={0.2}
                  direction="top"
                  mobileDirection="bottom"
                  className="relative aspect-4/3 w-full overflow-hidden rounded-2xl md:aspect-square lg:aspect-4/3 lg:py-10"
                >
                  <ImageComparisonCustomSlider
                    imageBefore={project.imageBefore}
                    imageAfter={project.imageAfter}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between p-4">
                    {project.photoBeforeAuthor && (
                      <div className="pointer-events-auto">
                        <PhotoAttribution
                          author={project.photoBeforeAuthor}
                          url={project.photoBeforeUrl}
                        />
                      </div>
                    )}
                    {project.photoAfterAuthor && (
                      <div className="pointer-events-auto">
                        <PhotoAttribution
                          author={project.photoAfterAuthor}
                          url={project.photoAfterUrl}
                        />
                      </div>
                    )}
                  </div>
                </FadeIn>
              </div>

              {/* Divider */}
              {index !== projects.length - 1 && (
                <FadeIn delay={0.3}>
                  <div
                    aria-hidden="true"
                    className="bg-border mt-12 h-px w-full md:mt-20"
                  />
                </FadeIn>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { HomeProjects };
