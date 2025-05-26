'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navigation */}
      <header className="border-b border-white/20 sticky top-0 z-50 bg-black text-white shadow-md w-full">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo variant="compact" theme="light" />
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
                    DataGen delivers enterprise-grade AI services including end-to-end deployment, professional data generation, fine-tuning based on business needs, and advanced agentic workflows. We provide comprehensive solutions that drive measurable business value.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-card rounded-xl border border-primary/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          <line x1="6" y1="1" x2="6" y2="4"></line>
                          <line x1="10" y1="1" x2="10" y2="4"></line>
                          <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg">Full-Stack Deployment</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Complete AI solution deployment from development to production with seamless infrastructure integration and scalable architecture for enterprise environments.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Infrastructure architecture & setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Production-ready API development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Continuous monitoring & maintenance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl border border-primary/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <line x1="12" y1="22" x2="12" y2="12"></line>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg">Synthetic Data Services</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Professional synthetic dataset creation tailored to industry requirements with privacy-compliant data solutions and comprehensive quality assurance processes.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Custom synthetic dataset creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Industry-specific data modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Privacy-compliant data solutions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl border border-primary/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <h3 className="font-bold text-lg">Fine-tuning Based on Business Needs</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Expert AI model fine-tuning services that align with your specific business objectives, optimizing performance for your unique use cases and industry requirements.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Business-specific model adaptation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Domain-specific optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Performance metrics alignment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl border border-primary/10 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12l2 2 4-4"></path>
                          <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"></path>
                          <path d="M3 10v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"></path>
                          <path d="M7 7h.01"></path>
                          <path d="M17 7h.01"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg">Agentic Workflows</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Advanced autonomous AI systems that intelligently orchestrate complex business processes, enabling intelligent automation and decision-making workflows.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Intelligent process automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Multi-agent system design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>Autonomous decision frameworks</span>
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

      <Footer />
    </div>
  );
}
