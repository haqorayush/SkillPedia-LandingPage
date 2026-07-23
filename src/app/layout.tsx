import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroller from '@/components/providers/SmoothScroller';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Preloader from '@/components/ui/Preloader';
import CustomCursor from '@/components/ui/CustomCursor';
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkillPedia — Become a Job-Ready Software Engineer in 12 Weeks",
  description:
    "India's premium engineering career acceleration platform. Build real-world software, master AI, deploy production applications, and launch your career in just 12 weeks.",
  keywords: [
    "software engineering",
    "coding bootcamp",
    "job-ready engineer",
    "AI development",
    "full stack developer",
    "career acceleration",
    "India",
    "SkillPedia",
  ],
  openGraph: {
    title: "SkillPedia — Become a Job-Ready Software Engineer in 12 Weeks",
    description:
      "India's premium engineering career acceleration platform. Transform from beginner to job-ready software engineer.",
    type: "website",
    locale: "en_IN",
    siteName: "SkillPedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillPedia — Become a Job-Ready Software Engineer in 12 Weeks",
    description:
      "India's premium engineering career acceleration platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", spaceGrotesk.variable, inter.variable, jetbrainsMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-[family-name:var(--font-body)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Preloader />
          <SmoothScroller>
            {children}
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
