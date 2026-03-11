"use client";

import { Phone } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface FloatingCallButtonProps {
  phoneNumber?: string;
  className?: string;
}

const FloatingCallButton = ({
  phoneNumber = "+12157911660",
  className,
}: FloatingCallButtonProps) => {
  const formattedPhone = phoneNumber.replace(/\D/g, "");

  return (
    <motion.a
      href={`tel:+${formattedPhone}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "fixed right-6 bottom-6 z-50",
        "flex size-14 items-center justify-center",
        "bg-primary text-primary-foreground rounded-full",
        "shadow-lg transition-shadow hover:shadow-xl",
        "md:hidden", // Only show on mobile
        className,
      )}
      aria-label="Call us"
    >
      <Phone className="size-6" />
    </motion.a>
  );
};

export { FloatingCallButton };
