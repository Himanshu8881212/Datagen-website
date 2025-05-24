'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { Footer } from "@/components/footer";

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navigation */}
      <header className="border-b border-white/20 sticky top-0 z-50 bg-black text-white shadow-md w-full">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo className="text-lg md:text-xl" />
            <nav className="hidden md:flex gap-6 lg:gap-8">
              <Link
                href="/#product"
                className="text-sm font-medium text-white hover:text-primary transition-colors relative group tracking-wide"
              >
                Product
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#services"
                className="text-sm font-medium text-white hover:text-primary transition-colors relative group tracking-wide"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#faq"
                className="text-sm font-medium text-white hover:text-primary transition-colors relative group tracking-wide"
              >
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
              size="sm"
              className="hidden sm:flex bg-white text-black border-white text-sm font-bold tracking-wide"
            >
              <Link href="/trysynthengyne">
                Try SynthEngyne
              </Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Product Hero Section */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">SynthEngyne</h1>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The ultimate synthetic data generation platform
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">What is SynthEngyne?</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    SynthEngyne is a cutting-edge tool designed to generate synthetic datasets that power AI models with precision and efficiency. It produces clean, deduplicated data for various needs, from general tasks like fine-tuning AI models to highly specialized projects requiring strict privacy.
                  </p>
                </div>

                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Privacy-Preserving</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Generate synthetic data that maintains statistical properties without exposing sensitive information.</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Customizable</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Tailor synthetic data generation to your specific requirements with flexible parameters.</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 10h-4V6"></path>
                            <path d="M22 10h-4V6"></path>
                            <path d="M6 14H2v4"></path>
                            <path d="M10 14H6v4"></path>
                            <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Scalable</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Generate datasets of any size, from small test sets to massive training corpora.</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
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
                        <h3 className="font-medium text-lg">Multi-Modal</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Support for text, image, tabular, and time-series data generation in a single platform.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">How SynthEngyne Works</h2>
                  <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center space-y-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-primary/30 hover:scale-105 transition-transform duration-300">1</div>
                      <h3 className="font-semibold text-lg">Create Dataspaces</h3>
                      <p className="text-muted-foreground">Organize your work with customizable dataspaces for different projects.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-primary/30 hover:scale-105 transition-transform duration-300">2</div>
                      <h3 className="font-semibold text-lg">Generate Datasets</h3>
                      <p className="text-muted-foreground">Choose from multiple generation methods to create the perfect dataset.</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-primary/30 hover:scale-105 transition-transform duration-300">3</div>
                      <h3 className="font-semibold text-lg">Use & Export</h3>
                      <p className="text-muted-foreground">View, analyze, and export your datasets for use in AI models.</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button asChild className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity">
                    <Link href="/trysynthengyne">
                      Try SynthEngyne Now
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
