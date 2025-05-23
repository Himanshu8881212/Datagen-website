import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";
// Add Script component to handle browser extensions that might interfere with hydration
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataGen - Synthetic Data Solutions",
  description: "DataGen provides high-quality synthetic datasets and AI services to help businesses implement effective AI solutions for their development needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen`}
        suppressHydrationWarning
      >
        <div className="relative mx-auto max-w-[1920px] overflow-x-hidden">
          {children}
        </div>
        <Toaster />
        {/* Script to help with browser extensions that might interfere with hydration */}
        <Script id="handle-browser-extensions" strategy="beforeInteractive">
          {`
            // Remove attributes added by browser extensions before React hydration
            if (typeof window !== 'undefined') {
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.type === 'attributes' && mutation.attributeName?.startsWith('bis_')) {
                    const element = mutation.target;
                    element.removeAttribute(mutation.attributeName);
                  }
                });
              });

              // Start observing the document with the configured parameters
              observer.observe(document.body, {
                attributes: true,
                childList: true,
                subtree: true,
                attributeFilter: ['bis_skin_checked']
              });

              // Add global error handler for fetch errors
              const originalFetch = window.fetch;
              window.fetch = function(...args) {
                return originalFetch.apply(this, args).catch(error => {
                  console.error('Fetch error:', error, 'Request:', args[0]);
                  throw error;
                });
              };
            }
          `}
        </Script>
      </body>
    </html>
  );
}
