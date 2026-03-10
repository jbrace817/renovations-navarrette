import { Cinzel_Decorative, Manrope, Cormorant_Garamond } from "next/font/google";

export const logoMark = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-logo-mark",
});

export const brandSans = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-brand-sans",
});

export const logoText = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-logo-text",
});
