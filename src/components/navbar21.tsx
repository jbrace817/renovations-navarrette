"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Mail, Phone, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import Container from "./Container";
import Twitter from "@/assets/icons/Twitter";
import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import Link from "next/link";
import { Button } from "./ui/button";

interface MenuItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const servicesDropdown = [
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Basement Finishing", href: "/services/basement-finishing" },
  { label: "Home Additions", href: "/services/home-additions" },
  { label: "Outdoor Living", href: "/services/outdoor-living" },
  { label: "Custom Cabinetry", href: "/services/custom-cabinetry" },
];

const socialLinks = [
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
];

const contactInfo = {
  email: "info@renovationsbynavarrette.com",
  phone: "(215) 791-1660",
};

interface Navbar21Props {
  className?: string;
}

// Animated Hamburger Icon Component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative h-5 w-6">
      {/* Top line */}
      <motion.span
        className={cn(
          "absolute left-0 h-[2px] w-full bg-slate-900",
          isOpen && "bg-background",
        )}
        initial={false}
        animate={{
          top: isOpen ? "50%" : "0%",
          rotate: isOpen ? 45 : 0,
          translateY: isOpen ? "-50%" : "0%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      {/* Middle line */}
      <motion.span
        className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-slate-900"
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      {/* Bottom line */}
      <motion.span
        className={cn(
          "absolute left-0 h-[2px] w-full bg-slate-900",
          isOpen && "bg-background",
        )}
        initial={false}
        animate={{
          bottom: isOpen ? "50%" : "0%",
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? "50%" : "0%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};

const ServicesDropdown = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className="hover:text-primary group relative flex items-center gap-1 text-base font-semibold tracking-wide text-slate-800 transition-colors duration-300"
      >
        <span className="relative">
          {item.label}
          <span className="bg-primary absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
        </span>
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2"
          >
            <div className="bg-card border-border min-w-[220px] rounded-xl border p-2 shadow-lg">
              {servicesDropdown.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="hover:bg-muted group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors"
                >
                  <span>{service.label}</span>
                  <ArrowUpRight className="text-primary size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileServicesAccordion = ({
  index,
  closeMenu,
}: {
  index: number;
  closeMenu: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group flex w-full items-center gap-4"
      >
        <span className="text-primary font-mono text-xs opacity-50 transition-opacity group-hover:opacity-100">
          0{index + 1}
        </span>
        <span className="font-heading group-hover:text-primary text-4xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-5xl md:text-6xl lg:text-7xl">
          Services
        </span>
        <ChevronDown
          className={cn(
            "text-primary size-6 transition-transform duration-300 md:size-8",
            isExpanded && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="ml-8 mt-2 flex flex-wrap gap-1.5 sm:ml-10">
              {servicesDropdown.map((service, i) => (
                <motion.a
                  key={service.href}
                  href={service.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.04 * i,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="bg-white/5 text-white/70 hover:bg-primary/15 hover:text-primary rounded-full px-3.5 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  {service.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar21 = ({ className }: Navbar21Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll detection and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 10;
      const hideThreshold = 100; // Only start hiding after scrolling past this point

      setHasScrolled(currentScrollY > scrollThreshold);

      // Only hide/show based on direction if we've scrolled past the threshold
      if (currentScrollY > hideThreshold) {
        // Scrolling down - hide navbar
        if (
          currentScrollY > lastScrollY.current &&
          currentScrollY - lastScrollY.current > 5
        ) {
          setIsHidden(true);
        }
        // Scrolling up - show navbar
        else if (
          currentScrollY < lastScrollY.current &&
          lastScrollY.current - currentScrollY > 5
        ) {
          setIsHidden(false);
        }
      } else {
        // At the top - always show
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar Header - separate from fullscreen menu to avoid stacking context issues */}
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out",
          hasScrolled && !isOpen
            ? "bg-background/80 shadow-sm backdrop-blur-md"
            : "bg-transparent",
          isHidden && !isOpen ? "-translate-y-full" : "translate-y-0",
          className,
        )}
      >
        <Container className="flex items-center justify-between py-6">
          <div className="z-50">
            <div className="flex items-center gap-2">
              <Logo
                className={cn(
                  "text-5xl",
                  isOpen && "text-background transition-colors duration-300",
                )}
                invert={isOpen}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8 xl:gap-12 2xl:gap-16">
            {menuItems.map((item) =>
              item.label === "Contact" ? (
                <Button
                  key={item.label}
                  variant="secondary"
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 flex cursor-pointer items-center gap-4 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Button>
              ) : item.hasDropdown ? (
                <ServicesDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-primary group relative flex items-center gap-1 text-base font-semibold tracking-wide text-slate-800 transition-colors duration-300"
                >
                  <span className="relative">
                    {item.label}
                    <span className="bg-primary absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight className="text-primary size-4 opacity-0 transition-all delay-200 duration-200 group-hover:opacity-100" />
                </Link>
              ),
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-foreground hover:text-muted-foreground z-50 flex items-center gap-3 text-lg tracking-wider transition-colors lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="hidden sm:inline"
              ></motion.span>
            </AnimatePresence>
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </Container>
      </header>

      {/* Fullscreen Menu Overlay - separate from header to avoid backdrop-blur stacking context */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-hidden bg-slate-900"
          >
            {/* Subtle gradient accent */}
            {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" /> */}

            <Container className="relative flex h-full flex-col justify-between overflow-y-auto py-24 md:py-32">
              {/* Main Navigation */}
              <div className="flex flex-1 flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="mb-8 flex items-center gap-3"
                >
                  <span className="bg-primary h-px w-8" />
                  <span className="text-xs font-semibold tracking-wider text-white/50 uppercase">
                    Menu
                  </span>
                </motion.div>

                <nav className="space-y-2 md:space-y-3">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.15 + index * 0.08,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      {item.hasDropdown ? (
                        <MobileServicesAccordion
                          index={index}
                          closeMenu={() => setIsOpen(false)}
                        />
                      ) : (
                        <a
                          href={item.href}
                          className="group flex items-center gap-4"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-primary font-mono text-xs opacity-50 transition-opacity group-hover:opacity-100">
                            0{index + 1}
                          </span>
                          <span className="font-heading group-hover:text-primary text-4xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-5xl md:text-6xl lg:text-7xl">
                            {item.label}
                          </span>
                          <ArrowUpRight className="group-hover:text-primary size-6 -translate-x-2 text-white/0 transition-all duration-300 group-hover:translate-x-0 md:size-8" />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom Section: Contact + Social */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-col gap-8 pt-8 md:flex-row md:items-end md:justify-between"
              >
                {/* Contact Info */}
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <div className="group-hover:bg-primary/20 flex size-9 items-center justify-center rounded-full bg-white/5 transition-colors">
                      <Mail className="text-primary size-4" />
                    </div>
                    <span>{contactInfo.email}</span>
                  </a>
                  <a
                    href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                    className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <div className="group-hover:bg-primary/20 flex size-9 items-center justify-center rounded-full bg-white/5 transition-colors">
                      <Phone className="text-primary size-4" />
                    </div>
                    <span>{contactInfo.phone}</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <span className="mr-2 text-xs font-semibold tracking-wider text-white/40 uppercase">
                    Follow
                  </span>
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:border-primary/30 hover:bg-primary/10 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white/70 transition-all duration-300 hover:text-white"
                      aria-label={link.label}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.7 + index * 0.1,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Navbar21 };
