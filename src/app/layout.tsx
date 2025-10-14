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
  metadataBase: new URL('https://datagen.in'),
  title: {
    default: "DataGen - AI Synthetic Data Solutions | Generative AI Models and Custom Datasets",
    template: "%s | DataGen"
  },
  description: "DataGen specializes in AI synthetic data generation, generative AI models, and custom datasets for machine learning. Transform your AI projects with SynthEngyne - the leading synthetic data platform for artificial intelligence training.",
  keywords: [
    "artificial intelligence",
    "AI synthetic data",
    "generative AI",
    "machine learning datasets",
    "AI training data",
    "synthetic data generation",
    "AI models",
    "custom datasets",
    "SynthEngyne",
    "AI development",
    "data science",
    "neural networks",
    "deep learning",
    "AI solutions",
    "artificial intelligence services",
    "AI consulting",
    "data privacy",
    "AI deployment",
    "transformer models",
    "diffusion models",
    "AI fine-tuning",
    "model alignment",
    "RAG systems",
    "AI agents",
    "automated AI",
    "AI infrastructure"
  ].join(", "),
  authors: [{ name: "DataGen Team" }],
  creator: "DataGen",
  publisher: "DataGen",
  applicationName: "DataGen",
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-mark.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logo-mark.svg',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://datagen.in',
    siteName: 'DataGen - AI Synthetic Data Solutions',
    title: 'DataGen - Leading AI Synthetic Data and Generative AI Platform',
    description: 'Transform your AI projects with DataGen synthetic data solutions. Generate custom datasets, deploy generative AI models, and accelerate machine learning development with SynthEngyne.',
    images: [
      {
        url: 'https://datagen.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DataGen - AI Synthetic Data Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataGen - AI Synthetic Data and Generative AI Solutions',
    description: 'Leading platform for AI synthetic data generation, custom datasets, and generative AI model deployment. Accelerate your artificial intelligence projects.',
    images: ['https://datagen.in/twitter-image.jpg'],
    creator: '@DataGenAI',
    site: '@DataGenAI',
  },
  alternates: {
    canonical: 'https://datagen.in',
  },
  category: 'Artificial Intelligence',
  classification: 'AI Technology',
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataGen",
    "alternateName": "DataGen AI",
    "url": "https://datagen.in",
    "logo": "https://datagen.in/logo.png",
    "description": "DataGen specializes in generating synthetic datasets and implementing generative AI models tailored to user-specific needs. We offer both services and a cutting-edge product called SynthEngyne.",
    "foundingDate": "2024",
    "industry": "Artificial Intelligence",
    "knowsAbout": [
      "Artificial Intelligence",
      "Synthetic Data Generation",
      "Generative AI",
      "Machine Learning",
      "Data Science",
      "AI Model Training",
      "Custom Datasets",
      "AI Deployment",
      "Neural Networks",
      "Deep Learning"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Global"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXX-XXX-XXXX",
      "contactType": "Customer Service",
      "email": "info@datagen.in",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/datagen-ai",
      "https://twitter.com/DataGenAI",
      "https://github.com/datagen-ai"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DataGen - AI Synthetic Data Solutions",
    "url": "https://datagen.in",
    "description": "Leading platform for AI synthetic data generation, generative AI models, and custom datasets for machine learning and artificial intelligence development.",
    "publisher": {
      "@type": "Organization",
      "name": "DataGen"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://datagen.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SynthEngyne",
    "applicationCategory": "AI Development Platform",
    "operatingSystem": "Web-based",
    "description": "SynthEngyne is our AI synthetic data platform designed to help businesses generate custom machine learning datasets for artificial intelligence training. Our intuitive workflow supports multiple data formats including text, image, time-series, and tabular data with enterprise-grade privacy protection.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Credit-based pricing with 1,000 free credits monthly. Pay only for what you use."
    },
    "creator": {
      "@type": "Organization",
      "name": "DataGen"
    },
    "featureList": [
      "AI Synthetic Data Generation",
      "Custom Machine Learning Datasets",
      "Artificial Intelligence Model Training",
      "Data Privacy Protection",
      "Multiple AI Data Formats",
      "API Access for AI Development",
      "Real-time AI Data Processing",
      "Enterprise AI Solutions"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Synthetic Data Generation Services",
    "description": "Professional artificial intelligence synthetic data generation and custom machine learning dataset creation services for enterprise AI development.",
    "provider": {
      "@type": "Organization",
      "name": "DataGen"
    },
    "serviceType": "AI Development Services",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Synthetic Data Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Dataset Generation",
            "description": "Generate custom synthetic datasets for machine learning and artificial intelligence training"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Model Fine-tuning",
            "description": "Professional AI model optimization and fine-tuning services"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen`}
        suppressHydrationWarning
      >
        <div className="relative w-full min-h-screen overflow-x-hidden">
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

        {/* Google Analytics (replace with your tracking ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
