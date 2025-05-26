import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "SynthEngyne - AI Synthetic Data Platform | DataGen Product",
  description: "SynthEngyne is DataGen's cutting-edge synthetic data generation platform. Create high-quality datasets for AI training with privacy protection, multi-format support, and enterprise scalability.",
  keywords: "SynthEngyne, synthetic data platform, AI data generation, machine learning datasets, data privacy, custom datasets, AI training data, synthetic data tool",
  openGraph: {
    title: "SynthEngyne - AI Synthetic Data Platform | DataGen",
    description: "Create high-quality synthetic datasets for AI training with SynthEngyne's advanced data generation platform.",
    url: "https://datagen.in/product",
    type: "website",
  },
  alternates: {
    canonical: "https://datagen.in/product",
  },
};

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

                {/* SynthEngyne Features Section */}
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">SynthEngyne Features</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Comprehensive synthetic data generation capabilities designed for modern AI development workflows and enterprise requirements.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <line x1="12" y1="22" x2="12" y2="12"></line>
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg">Multi-Format Data Generation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Support for text, image, tabular, and time-series data generation. Create datasets for NLP, computer vision, machine learning applications, and diverse AI training needs with comprehensive format support.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Text data for NLP models & language processing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Image datasets for computer vision applications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Tabular data for machine learning models</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Time-series data for forecasting & analytics</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg">Real-time Processing & Scalability</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Fast, scalable data generation with real-time processing capabilities. Generate datasets of any size from small test sets to massive training corpora for enterprise-scale projects with optimized performance.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Real-time data generation & streaming</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Enterprise-scale processing capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Flexible dataset sizing & batch processing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Optimized performance & resource management</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14,2 14,8 20,8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10,9 9,9 8,9"></polyline>
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg">Custom Dataset Creation</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Generate custom datasets from proprietary documents with strict confidentiality protocols. Flexible parameters and customizable generation methods for domain-specific AI training requirements with enterprise security.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Proprietary document processing & analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Strict confidentiality & security protocols</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Domain-specific customization & parameters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Flexible generation methods & workflows</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-card p-6 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                            <path d="M9 14l2 2 4-4"></path>
                          </svg>
                        </div>
                        <h3 className="font-semibold text-lg">Enterprise Quality & Deduplication</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Comprehensive quality control, validation processes, and advanced deduplication ensuring reliable, high-fidelity training data for AI models and machine learning applications with enterprise-grade standards.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Advanced quality control & validation systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Intelligent deduplication & data cleaning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>High-fidelity validation & accuracy metrics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>Enterprise-grade reliability & consistency</span>
                        </li>
                      </ul>
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
