import type { Metadata } from "next";
import "./globals.css";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Footer } from "@/components/Footer";
import { brandSans, headingFont, logoMark, logoText } from "./fonts";
import { Navbar21 } from "@/components/navbar21";
import { FloatingCallButton } from "@/components/FloatingCallButton";

export const metadata: Metadata = {
  title: "Renovations By Navarrette | Southampton, PA Home Remodeling",
  description: "Quality home remodeling in Southampton, PA. Kitchen and bathroom renovations, home additions, custom cabinetry, and more. Licensed, insured, and committed to craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandSans.variable} ${headingFont.variable} ${logoMark.variable} ${logoText.variable} antialiased`}
      >
        <Navbar21 />
        <FloatingCallButton />
        {children}
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
