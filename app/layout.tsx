import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ConvexClientProvider } from "@/components/web/ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/lib/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deploy-and-pray.vercel.app"),
  title: "Ilya Fredriksson • Frontend Developer • React/Next.js",
  description: "Portfolio showcasing frontend projects with focus on React, Next.js, web security and modern web development. Available for new opportunities.",
  openGraph: {
    title: "Ilya Fredriksson • Frontend Developer",
    description: "Portfolio with selected React/Next.js projects, frontend craftsmanship, and web security focus.",
    url: "https://deploy-and-pray.vercel.app",
    siteName: "Ilya Frontend Portfolio",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ilya Fredriksson Frontend Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilya Fredriksson • Frontend Developer",
    description: "React/Next.js portfolio with focus on frontend quality and web security.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <AuthProvider>
            <main className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
              <ConvexClientProvider>{children}</ConvexClientProvider>
            </main>
          </AuthProvider>
          <Toaster closeButton/>
        </ThemeProvider>
      </body>
    </html>
  );
}
