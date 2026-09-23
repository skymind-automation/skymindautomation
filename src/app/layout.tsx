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
        url: "/og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "SkyMind Automation logo and wordmark with the tagline Build. Automate. Evaluate. Secure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyMind Automation",
    description: siteConfig.description,
    images: ["/og.jpg"],
  },
  // Served from public/ so Cloudflare's asset layer handles them. Image files
  // under app/ are compiled into the Worker as base64 route handlers.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
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
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#06070a" },
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
