import { Hero13 } from "@/components/features/home/hero13";
import { HomeAbout } from "@/components/features/home/HomeAbout";
import { HomeServicesCards } from "@/components/features/home/ServiceCards";
import { HomeMidCTA } from "@/components/features/home/HomeMidCTA";
import { HomeProjects } from "@/components/features/home/HomeProjects";
import { HomeTestimonials } from "@/components/HomeTestimonials";
import { HomeFinalCTA } from "@/components/features/home/HomeFinalCTA";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1920px]">
      <Hero13 />
      <HomeAbout />
      <HomeServicesCards />
      <HomeMidCTA />
      <HomeProjects />
      <HomeTestimonials />
      <HomeFinalCTA />
    </main>
  );
}
