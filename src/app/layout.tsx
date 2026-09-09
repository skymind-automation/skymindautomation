import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AI Automation & AI Engineering Company | SkyMind Automation",
    template: "%s | SkyMind Automation",
  },
  description: siteConfig.description,
  keywords: [
    "AI implementation",
    "AI automation",
    "AI engineering",
    "RAG systems",
    "AI agents",
    "AI security",
    "AI red teaming",
    "prompt engineering",
    "LLM integration",
    "AI consulting",
  ],
  authors: [{ name: "SkyMind Automation" }],
  creator: "SkyMind Automation",
  publisher: "SkyMind Automation",
  applicationName: "SkyMind Automation",
  category: "AI Engineering & Automation",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "SkyMind Automation",
    title: "AI Automation & AI Engineering Company | SkyMind Automation",
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SkyMind Automation — Build AI. Automate Work. Secure Intelligence.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyMind Automation",
    description: siteConfig.description,
    images: ["/og.png"],
    creator: "@skymindauto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0e14" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
