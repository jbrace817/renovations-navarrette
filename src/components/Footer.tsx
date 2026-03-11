import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import Container from "./Container";
import Link from "next/link";
import { Logo } from "./Logo";
import Twitter from "@/assets/icons/Twitter";
import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";

import { cn } from "@/lib/utils";

const footerData = {
  heading: "Renovations By Navarrette",
  description:
    "Quality craftsmanship and attention to detail in every project. Transforming homes throughout the Southampton, PA area.",
  email: {
    label: "info@renovationsbynavarrette.com",
    href: "mailto:info@renovationsbynavarrette.com",
  },
  phone: {
    label: "(123) 456-7890",
    href: "tel:+11234567890",
  },
  location: "Southampton, PA",
  socialLinks: [
    {
      label: "Twitter",
      href: "#",
      icon: <Twitter className="fill-primary size-5" />,
    },
    {
      label: "Instagram",
      href: "#",
      icon: <Instagram className="fill-primary size-5" />,
    },
    {
      label: "Facebook",
      href: "#",
      icon: <Facebook className="fill-primary size-5" />,
    },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  serviceLinks: [
    { label: "Kitchen Remodeling", href: "/services#kitchen" },
    { label: "Bathroom Remodeling", href: "/services#bathroom" },
    { label: "Home Additions", href: "/services#additions" },
    { label: "Custom Cabinetry", href: "/services#cabinetry" },
  ],
};

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "mx-auto max-w-[1920px] bg-slate-900 pt-16 pb-8 md:pt-20",
        className,
      )}
    >
      <Container>
        {/* Main Footer Content */}
        <div className="mb-12 grid gap-10 md:mb-16 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo
              className="text-background mb-4 text-5xl md:text-5xl lg:text-4xl xl:text-5xl"
              invert
            />
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-white/60">
              {footerData.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {footerData.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:border-primary/30 hover:bg-primary/10 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/70 transition-all duration-300 hover:text-white"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-primary mb-4 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              <span className="bg-primary h-px w-4" />
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {footerData.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-primary mb-4 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              <span className="bg-primary h-px w-4" />
              Services
            </h3>
            <nav className="flex flex-col gap-3">
              {footerData.serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-primary mb-4 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
              <span className="bg-primary h-px w-4" />
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={footerData.email.href}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                <div className="bg-primary/20 group-hover:bg-primary/30 flex size-9 items-center justify-center rounded-full transition-colors">
                  <Mail className="text-primary size-4" />
                </div>
                <span>{footerData.email.label}</span>
              </a>
              <a
                href={footerData.phone.href}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                <div className="bg-primary/20 group-hover:bg-primary/30 flex size-9 items-center justify-center rounded-full transition-colors">
                  <Phone className="text-primary size-4" />
                </div>
                <span>{footerData.phone.label}</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="bg-primary/20 flex size-9 items-center justify-center rounded-full">
                  <MapPin className="text-primary size-4" />
                </div>
                <span>{footerData.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © {currentYear} Renovations By Navarrette. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-xs text-white/50">
            <span>Designed by</span>
            <Link
              href="https://www.oneupdigitalstudio.com"
              className="text-primary group hover:text-primary inline-flex items-center gap-1 font-semibold transition-colors"
            >
              OneUp Digital
              <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
