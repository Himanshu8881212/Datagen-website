'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

export default function ServicesPage() {
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
        {/* Services Hero Section */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Services</h1>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Comprehensive AI solutions from data to deployment
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Professional AI Services</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    DataGen provides comprehensive AI services to help businesses implement effective solutions. From data generation to model deployment, we support your AI initiatives with technical expertise and business-focused results.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-card rounded-xl border border-primary/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <line x1="12" y1="22" x2="12" y2="12"></line>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg">Data Strategy & Generation</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We create custom datasets tailored to your specific AI training needs with a focus on data quality and business requirements.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Business needs assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Custom dataset creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Data quality assurance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl border border-primary/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          <line x1="6" y1="1" x2="6" y2="4"></line>
                          <line x1="10" y1="1" x2="10" y2="4"></line>
                          <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg">Model Deployment</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We implement AI systems in production environments with a focus on reliability, scalability, and performance for your business applications.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Infrastructure setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>API development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Monitoring and maintenance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl border border-primary/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <h3 className="font-bold text-lg">Model Optimization</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We enhance AI models for your specific use cases, improving performance and adapting them to your business requirements.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Domain adaptation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Performance improvement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Business alignment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl border border-primary/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg">Business Integration</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We connect AI systems with your existing business processes and applications to create efficient workflows that deliver value.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Process automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>System connectivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Custom solution development</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card rounded-xl border border-primary/10 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Ready to Enhance Your AI Solutions?</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Contact us to discuss how DataGen can help you implement effective AI solutions that drive business value and innovation.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/#contact";
                      }}
                    >
                      <Link href="/#contact">
                        Contact Us
                      </Link>
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
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/#product";
                    }}
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
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/#pricing";
                    }}
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
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/#services";
                    }}
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
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/#faq";
                    }}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/#contact";
                    }}
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
                  DataGen © 2024. All rights reserved.
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
