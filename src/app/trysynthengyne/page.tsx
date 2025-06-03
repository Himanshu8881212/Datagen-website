'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { Footer } from "@/components/footer";

export default function TrySynthEngyne() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navigation */}
      <header className="border-b border-white/20 sticky top-0 z-50 bg-black text-white shadow-md w-full">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo variant="header" />
            <nav className="hidden md:flex gap-6 lg:gap-8">
              <Link
                href="/#product"
                className="text-sm font-medium text-white tracking-wide"
              >
                Product
              </Link>
              <Link
                href="/#services"
                className="text-sm font-medium text-white tracking-wide"
              >
                Services
              </Link>
              <Link
                href="/#faq"
                className="text-sm font-medium text-white tracking-wide"
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-white text-black border-white text-sm font-bold tracking-wide"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#contact";
              }}
            >
              <Link href="/#contact">
                Contact Us
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-white text-black border-white text-sm font-bold tracking-wide"
            >
              <Link href="https://docs.datagen.in/" target="_blank" rel="noopener noreferrer">
                Docs
              </Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Try SynthEngyne Hero Section */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">SynthEngyne Coming Soon</h1>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're working hard to bring you the best synthetic data platform. SynthEngyne will be available by the end of August 2025.
                </p>
              </div>

              <div className="space-y-12">

                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">What to expect</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    SynthEngyne will offer powerful synthetic data generation capabilities with these features:
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-muted/30 p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v4"></path>
                            <path d="M12 18v4"></path>
                            <path d="M4.93 4.93l2.83 2.83"></path>
                            <path d="M16.24 16.24l2.83 2.83"></path>
                            <path d="M2 12h4"></path>
                            <path d="M18 12h4"></path>
                            <path d="M4.93 19.07l2.83-2.83"></path>
                            <path d="M16.24 7.76l2.83-2.83"></path>
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg">Multiple Data Types</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Generate text, image, tabular, and time-series data with our intuitive interface.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <line x1="12" y1="22" x2="12" y2="12"></line>
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg">Flexible Subscription Plans</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Choose from free, pro (₹2200/month), and enterprise plans to suit your needs.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg">Dataspaces Organization</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Organize your datasets in logical groups with our dataspace system.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg">Advanced Viewers</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Specialized viewers for different data types to help you analyze your synthetic data.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button asChild className="gap-2 bg-gradient-to-r from-primary to-primary/80 text-white">
                    <Link href="/">
                      <ArrowLeft className="h-4 w-4" />
                      Back to DataGen
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
