import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  image: string;
  highlights: string[];
};

const services: ServiceCard[] = [
  {
    title: "Kitchen Remodeling",
    description:
      "Better layout, upgraded finishes, and smart storage—built for how you live.",
    href: "/services/kitchen-remodeling",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    highlights: ["Layout upgrades", "Tile + flooring", "Custom storage"],
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Clean, comfortable bathrooms with quality tile work and durable finishes.",
    href: "/services/bathroom-remodeling",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    highlights: ["Tile work", "Fixtures + lighting", "Custom details"],
  },
  {
    title: "Basement Finishing",
    description:
      "Turn unused space into a family room, office, gym, or guest-ready area.",
    href: "/services/basement-finishing",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3",
    highlights: ["Framing + finishes", "Comfort upgrades", "Multi-use spaces"],
  },
  {
    title: "Home Additions",
    description:
      "Expand your home with additions that blend seamlessly with the existing structure.",
    href: "/services/home-additions",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    highlights: ["New rooms", "Structural work", "Permits + planning"],
  },
  {
    title: "Outdoor Living",
    description:
      "Decks, patios, and hardscapes designed for relaxing, hosting, and durability.",
    href: "/services/outdoor-living",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    highlights: ["Decks", "Hardscapes", "Outdoor spaces"],
  },
  {
    title: "Custom Cabinetry & Built-Ins",
    description:
      "Built-to-fit cabinetry, built-ins, and storage solutions made for your space.",
    href: "/services/custom-cabinetry",
    image:
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    highlights: ["Custom cabinets", "Built-ins", "Storage options"],
  },
];

export function HomeServicesCards() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-center justify-center md:mb-16">
          <FadeIn>
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="bg-primary h-px w-8 md:w-12" />
              <p className="text-primary text-sm font-semibold tracking-wider uppercase md:text-base">
                Our Services
              </p>
              <span className="bg-primary h-px w-8 md:w-12" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-heading text-foreground mb-4 text-center text-3xl leading-[1.15] font-semibold tracking-tight text-balance sm:text-4xl md:mb-6 lg:text-[2.75rem]">
              Remodeling and Building Work—
              <span className="text-primary">Done Right</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-2xl text-center text-base leading-relaxed text-pretty md:text-lg">
              Explore the core services we&pos;re known for. From interior
              remodels to outdoor builds and custom woodwork, everything is
              planned and built with care.
            </p>
          </FadeIn>
        </div>

        {/* Service Cards Grid */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(
            (
              { title, description, href, image, highlights },
              index: number,
            ) => (
              <FadeIn delay={0.1 * index} key={title}>
                <Link
                  href={href}
                  className="group bg-card focus-visible:ring-ring relative cursor-pointer rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none"
                >
                  <div className="overflow-hidden rounded-t-2xl p-2">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                      <Image
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        fill
                      />
                      <div className="absolute top-3 right-3 flex items-center justify-center">
                        <div className="rounded-full bg-white/50 p-2.5 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-white/80 group-hover:shadow-xl">
                          <ArrowUpRight className="text-foreground size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pt-3 pb-6">
                    <h3 className="text-foreground mb-2 text-lg font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                      {description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {highlights.map((item, idx) => (
                        <Badge
                          key={item}
                          variant="secondary"
                          className={`${idx > 1 ? "hidden sm:inline-flex" : "inline-flex"} border-border bg-muted text-muted-foreground border px-2.5 py-1 text-xs font-medium shadow-sm`}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ),
          )}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="py-12">
          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:mt-16">
            <p className="text-muted-foreground max-w-md text-center text-sm leading-relaxed md:text-base">
              Need something else? We handle full-scope remodeling—doors,
              windows, siding, concrete, electrical, and more.
            </p>
            <div className="relative flex w-full justify-center">
              <Button
                asChild
                size="lg"
                className="z-10 w-fit rounded-full px-8"
              >
                <Link href="/services">View all services</Link>
              </Button>
              <div
                aria-hidden="true"
                className="border-muted-foreground/40 absolute top-1/2 left-0 z-0 h-0.5 w-full -translate-y-1/2 rounded-full border-t"
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
