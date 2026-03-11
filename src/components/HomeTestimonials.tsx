import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Container from "@/components/Container";
import PhotoAttribution from "./PhotoAttribution";
import StarRating from "./rating-basic";
import { FadeIn, FadeInStagger } from "./FadeIn";

const testimonials = [
  {
    id: 1,
    name: "Megan Alvarez",
    city: "Perkasie",
    quote:
      "Renovations By Navarrette treated our home like it was their own. The crew showed up on time, kept everything clean, and the final result looks like it belongs in a magazine.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    initials: "MA",
    rating: 4.5,
  },
  {
    id: 2,
    name: "David Chen",
    city: "Jamison",
    quote:
      "The communication was unreal. We always knew what was happening, what was next, and why. The craftsmanship is top-notch—every detail feels intentional.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    rating: 4,
  },
  {
    id: 3,
    name: "Lindsay Price",
    city: "Landsdale",
    quote:
      "We got three quotes and Renovations By Navarrette was the only team that asked the right questions. They solved problems before they became problems and delivered exactly what they promised.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    rating: 5,
  },
  {
    id: 4,
    name: "Robert Gaines",
    city: "New Hope",
    quote:
      "Our addition looks original to the house—no awkward transitions, no shortcuts. Neighbors have literally stopped by to ask who did the work.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    rating: 4.5,
  },
];

type Testimonial = {
  name: string;
  city?: string;
  quote: string;
  image?: string;
  rating?: number;
};

interface HomeTestimonialsProps {
  className?: string;
  testimonials?: Testimonial[];
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  // If only one name: "Megan" => "M"
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "";

  const first = parts[0][0]?.toUpperCase() ?? "";
  const last = parts[parts.length - 1][0]?.toUpperCase() ?? "";

  return `${first}${last}`;
}

const avatarColors = [
  "bg-rose-500",
  "bg-pink-500",
  "bg-fuchsia-500",
  "bg-purple-500",
  "bg-violet-500",
  "bg-indigo-500",
  "bg-blue-500",
  "bg-sky-500",
  "bg-cyan-500",
  "bg-teal-500",
  "bg-emerald-500",
  "bg-green-500",
  "bg-lime-500",
  "bg-slate-500",
  "bg-orange-500",
  "bg-red-500",
];

function getAvatarColor(name: string) {
  // Generate a consistent hash from the name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Use absolute value and modulo to pick a color
  const index = Math.abs(hash) % avatarColors.length;
  return avatarColors[index];
}

const HomeTestimonials = ({ className }: HomeTestimonialsProps) => {
  return (
    <section className={cn("bg-slate-900 py-16 md:py-24 lg:py-32", className)}>
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-primary h-px w-8 md:w-12" />
              <p className="text-sm font-semibold tracking-wider text-white/70 uppercase md:text-base">
                Testimonials
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading max-w-2xl text-2xl leading-[1.15] font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-5 lg:gap-6">
          {/* Featured Row: Image + Main Testimonial */}
          <FadeInStagger>
            <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
              {/* Image */}
              <FadeIn
                delay={0.1}
                className="relative h-72 w-full overflow-hidden rounded-2xl lg:h-auto"
              >
                <Image
                  src="/images/testimonial/staircase.jpg"
                  alt="Modern interior design"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  fill
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                {/* <div className="absolute bottom-0 left-0 p-4">
                  <PhotoAttribution
                    author="The Ghazi"
                    url="https://www.pexels.com/photo/elegant-modern-interior-with-minimalist-design-32473245/"
                  />
                </div> */}
              </FadeIn>

              {/* Featured Testimonial Card */}
              <FadeIn delay={0.2} className="lg:col-span-2">
                <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
                  {/* Gradient accent */}
                  <div className="from-primary/10 pointer-events-none absolute inset-0 bg-linear-to-br via-transparent to-transparent" />

                  <div className="relative">
                    {/* Quote Icon */}
                    <div className="bg-primary/20 mb-6 flex size-12 items-center justify-center rounded-full">
                      <Quote className="text-primary size-6" />
                    </div>

                    <StarRating outOfFive={testimonials[0].rating} />

                    <blockquote className="mt-4 text-xl leading-relaxed font-medium text-white lg:text-2xl xl:text-3xl">
                      &ldquo;{testimonials[0].quote}&rdquo;
                    </blockquote>

                    <div className="mt-6 flex items-center gap-4">
                      <Avatar className="size-12 ring-2 ring-white/20">
                        <AvatarFallback
                          className={cn(
                            "text-sm font-semibold text-white",
                            getAvatarColor(testimonials[0].name),
                          )}
                        >
                          {getInitials(testimonials[0].name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white">
                          {testimonials[0].name}
                        </p>
                        <p className="text-sm text-white/60">
                          {testimonials[0].city}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeInStagger>

          {/* Secondary Testimonials Grid */}
          <FadeInStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {testimonials.slice(1).map((testimonial) => (
              <FadeIn
                key={testimonial.id}
                className={cn(testimonial.id === 4 && "md:hidden lg:block")}
                delay={0.1 * testimonial.id}
              >
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  {/* Gradient accent */}
                  <div className="from-primary/5 pointer-events-none absolute inset-0 bg-linear-to-br via-transparent to-transparent" />

                  <div className="relative">
                    <StarRating outOfFive={testimonial.rating} />
                    <blockquote className="mt-4 text-base leading-relaxed text-white/80">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="relative mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <Avatar className="size-10 ring-2 ring-white/20">
                      <AvatarFallback
                        className={cn(
                          "text-xs font-semibold text-white",
                          getAvatarColor(testimonial.name),
                        )}
                      >
                        {getInitials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-white/60">
                        {testimonial.city}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  );
};

export { HomeTestimonials };
