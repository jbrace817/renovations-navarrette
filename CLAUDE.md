# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 business template for a home remodeling company ("Artisan Builders"), built with the App Router, TypeScript, Tailwind CSS v4, and modern animation libraries (Framer Motion and GSAP). The project uses pnpm as the package manager and enforces it with a preinstall script.

## Development Commands

### Package Management

- **Installation**: `pnpm install` (enforced via preinstall script - npm/yarn will error)
- **Dev Server**: `pnpm dev` (runs with Turbopack on http://localhost:3000)
- **Build**: `pnpm build`
- **Production**: `pnpm start`
- **Lint**: `pnpm lint`

### Environment Setup

- Requires `.env.local` with `SHADCNBLOCKS_API_KEY` for shadcn blocks registry access
- Remote images configured for: images.pexels.com, deifkwefumgah.cloudfront.net, images.unsplash.com

## Architecture

### Font System

The project uses a custom font configuration (`src/app/fonts.ts`) with two Google Fonts:

- `logoMark`: Cinzel Decorative (weight 700) - used for logo/branding via `--font-logo-mark` CSS variable
- `brandSans`: Manrope (weights 400, 600, 700) - primary body font via `--font-brand-sans` CSS variable

Both are applied globally in `layout.tsx` via `.variable` classes and referenced through CSS custom properties.

### Styling System

- **Tailwind CSS v4** with PostCSS plugin architecture (`@tailwindcss/postcss`)
- **tw-animate-css** for additional animation utilities
- **Theme system**: Custom OKLCH color space with full light/dark mode support defined in `globals.css`
- **CSS Variables**: Extensive use of CSS custom properties for colors, shadows, spacing, and typography
- **Prettier** with `prettier-plugin-tailwindcss` for consistent class ordering
- **Utility Function**: `cn()` function in `src/lib/utils.ts` combines `clsx` and `tailwind-merge` for conditional classes

### Component Organization

#### Core Reusable Components (`src/components/`)

- **Container.tsx**: Responsive wrapper with max-width constraints and consistent padding
- **FadeIn.tsx**: Sophisticated animation component with:
  - Support for 4 directions (top, bottom, left, right)
  - Mobile-specific direction overrides (prevents SSR hydration mismatches)
  - Reduced motion support
  - Viewport-based triggering
  - Stagger context for list animations
- **SectionIntro.tsx**: Standardized section header component with eyebrow, heading, and description
- **tailwind-indicator.tsx**: Dev-only breakpoint indicator

#### Feature Components (`src/components/features/home/`)

Organized by page, each home section is a self-contained feature component:

- hero13.tsx, HomeAbout.tsx, ServiceCards.tsx, HomeMidCTA.tsx, HomeProjects.tsx, HomeFinalCTA.tsx

#### Layout Components

- **navbar21.tsx**: Fullscreen overlay navigation with animated hamburger menu, scroll detection, and body scroll locking
- **Footer.tsx**: Site footer
- **FloatingCallButton.tsx**: Persistent floating CTA button

#### UI Components (`src/components/ui/`)

shadcn/ui components with "new-york" style variant:

- avatar.tsx, badge.tsx, button.tsx, card.tsx
- Configured via `components.json` with custom registry for @shadcnblocks

### Animation Patterns

Two animation libraries are used for different purposes:

1. **Framer Motion (motion)**: Used for viewport-based animations and interactions
   - FadeIn components use `whileInView` for scroll-triggered animations
   - Navbar uses AnimatePresence for menu transitions
   - Always respects `useReducedMotion()` hook

2. **GSAP**: Available for advanced timeline-based animations (imported but not extensively used in current components)

### Key Architectural Decisions

- **SSR Hydration Safety**: FadeIn component uses mount state to prevent hydration mismatches when mobile direction differs from desktop
- **Scroll Management**: Navbar prevents body scroll when open to avoid layout issues
- **Stacking Context**: Navbar splits header and fullscreen overlay into separate elements to avoid backdrop-blur z-index conflicts
- **Viewport Detection**: Custom `useIsMobile` hook in `src/hooks/` for responsive behavior
- **Image Optimization**: All images use Next.js Image component with proper priority flags and fill layouts

### Path Aliases

TypeScript configured with `@/*` alias mapping to `src/*`:

- Components: `@/components/...`
- Utils: `@/lib/utils`
- Hooks: `@/hooks/...`
- UI: `@/components/ui/...`

### Page Structure

The home page (`src/app/page.tsx`) is composed of feature sections rendered in sequence, wrapped in a max-width container (1920px). Each section is a self-contained component with its own styling and content.

Global layout (`src/app/layout.tsx`) includes:

- Font variable classes applied to body
- Fixed navbar at top
- Floating call button
- Main content area (children)
- Footer
- Dev-only tailwind indicator

## Styling Conventions

- Primary color: Amber/gold (oklch(0.7686 0.1647 70.0804))
- Responsive typography uses viewport-based sizing (e.g., `md:text-[7vw]`) for hero elements
- Consistent responsive breakpoints: mobile-first with sm/md/lg/xl/2xl
- Shadow system uses HSL with opacity for consistent elevation
- Border radius system uses calc() for consistent scaling from base `--radius: 0.375rem`
- Refer to (/src/components/features/home/HomeAbout.tsx) for styling sections
