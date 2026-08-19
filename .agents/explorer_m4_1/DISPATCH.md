# Dispatch Log

## 2026-08-18T16:23:26Z
Requirement R4 (UI & Accessibility Fixes & Verification Strategy) investigation.
Scope:
1. Investigate light/dark mode theme consistency. Search for hardcoded dark hex backgrounds (e.g. `bg-[#0B1F5E]`, `bg-[#071340]`, `bg-[#020817]`, dark text colors, dark borders) in sections like Hero (`HeroSection.tsx`), Team (`TeamSection.tsx`), CTA (`CTASection.tsx`), CourseDetailView, and others that cause jarring "zebra-striping" when in light mode. Detail the exact semantic Tailwind classes or responsive theme tokens (`dark:bg-... bg-white`) needed.
2. Investigate invalid HTML nesting across all components in `src/components/` and `src/app/`. Specifically look for `<button>` elements nested inside `<Link>` or `<a>` tags, or nested anchor tags (e.g. in `HeroSection.tsx`, `CTASection.tsx`, `Navbar.tsx`, etc.).
3. Investigate Contact navigation links across `Navbar.tsx`, `src/lib/constants.ts`, `Footer.tsx`, and legal/policy pages. Check where "Contact" links point (e.g. `#contact` on homepage vs `/apply` vs dedicated section) and ensure smooth, consistent navigation.
4. Document the exact verification criteria and commands required for production readiness (`npm run build`, `npx tsc --noEmit`, checking zero raw `<img>` tags, etc.).
