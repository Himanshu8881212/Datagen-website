'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navigation */}
      <header className="border-b border-border/40 sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-md w-full">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo className="text-lg md:text-xl" />
            <nav className="hidden md:flex gap-6 lg:gap-8">
              <Link
                href="/#product"
                className="text-sm font-medium hover:text-primary transition-colors relative group tracking-wide"
              >
                Product
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#services"
                className="text-sm font-medium hover:text-primary transition-colors relative group tracking-wide"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#faq"
                className="text-sm font-medium hover:text-primary transition-colors relative group tracking-wide"
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
              className="hidden sm:flex border-border hover:border-primary/50 hover:bg-primary/5 text-sm font-medium tracking-wide"
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
              className="hidden sm:flex bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity text-sm font-medium tracking-wide"
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
        {/* About Hero Section */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">About DataGen</h1>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Pioneering the future of synthetic data generation for AI innovation
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Company Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Founded in 2024 and headquartered in India, DataGen is a specialized synthetic data company focused on providing high-quality data solutions for AI development and training.
                  </p>
                </div>

                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Our Mission & Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Our mission is to provide access to high-quality synthetic datasets, enabling businesses of all sizes to harness the power of AI for their development needs.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We aim to be a trusted provider of enterprise-grade synthetic data, fueling innovation and breakthroughs in AI across industries.
                  </p>
                </div>

                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Core Values</h2>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Innovation</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Developing advanced AI solutions</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Reliability</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Ensuring consistent, high-quality results</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 20h.01"></path>
                            <path d="M7 20v-4"></path>
                            <path d="M12 20v-8"></path>
                            <path d="M17 20v-12"></path>
                            <path d="M22 20v-16"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Scalability</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Building solutions that grow with your needs</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Quality</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Maintaining the highest standards of data quality</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Data Types</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our SynthEngyne platform generates four key types of synthetic data:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <line x1="12" y1="22" x2="12" y2="12"></line>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Text</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Synthetic text for training language models, chatbots, and content generation systems.</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Image</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Generated images for computer vision training, product visualization, and creative applications.</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Time-Series</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Synthetic time-series data for forecasting, anomaly detection, and pattern recognition.</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                          </svg>
                        </div>
                        <h3 className="font-medium text-lg">Tabular</h3>
                      </div>
                      <p className="text-muted-foreground pl-11">Structured data for analytics, machine learning, and business intelligence applications.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Our Team</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    DataGen is powered by a team of AI specialists, data scientists, and software engineers with expertise in machine learning and data generation. We combine technical knowledge with industry experience to deliver effective solutions for your business needs.
                  </p>
                  <div className="flex justify-center">
                    <Button asChild className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity">
                      <Link href="/#contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <Logo className="text-lg md:text-xl" />
              <p className="text-sm text-muted-foreground">
                Pioneering synthetic data solutions for AI innovation.
              </p>

            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#product"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    SynthEngyne
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Overview
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    AI Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold mb-2">Contact Us</h4>
                <p className="text-xs text-muted-foreground">Email: info@datagen.in</p>
                <p className="text-xs text-muted-foreground">Website: www.datagen.in</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">
                  DataGen © 2025. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Synthetic Data Solutions for AI Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
