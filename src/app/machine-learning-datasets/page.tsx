import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Machine Learning Datasets | Custom AI Training Data | DataGen",
  description: "High-quality machine learning datasets for AI training. Custom dataset creation, data labeling, and synthetic data generation for neural networks, deep learning, and AI model development.",
  keywords: "machine learning datasets, AI training data, custom datasets, data labeling, neural network training, deep learning datasets, AI model training, training data generation",
  openGraph: {
    title: "Machine Learning Datasets | DataGen",
    description: "High-quality machine learning datasets for AI training and model development.",
    url: "https://datagen.in/machine-learning-datasets",
    type: "website",
  },
  alternates: {
    canonical: "https://datagen.in/machine-learning-datasets",
  },
};

export default function MachineLearningDatasetsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navigation */}
      <header className="border-b border-white/20 sticky top-0 z-50 bg-black text-white shadow-md w-full">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo variant="compact" theme="light" />
            <nav className="hidden md:flex gap-6 lg:gap-8">
              <Link href="/" className="text-sm font-medium text-white hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm font-medium text-white hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/product" className="text-sm font-medium text-white hover:text-primary transition-colors">
                Product
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Button asChild variant="outline" size="sm" className="hidden sm:flex bg-white text-black">
              <Link href="/#contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="hidden sm:flex bg-white text-black">
              <Link href="https://docs.datagen.in/" target="_blank" rel="noopener noreferrer">Docs</Link>
            </Button>
            <Button asChild size="sm" className="hidden sm:flex bg-white text-black">
              <Link href="/trysynthengyne">Try SynthEngyne</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Premium <span className="text-primary">Machine Learning Datasets</span> for AI Training
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Access high-quality <strong>machine learning datasets</strong> and <strong>AI training data</strong>
                for neural networks, deep learning, and artificial intelligence model development.
                Custom dataset creation with privacy protection and quality assurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  <Link href="/trysynthengyne">Browse Datasets</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#contact">Request Custom Data</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dataset Types Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Dataset Types & Formats</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive collection of machine learning datasets across multiple domains and formats,
                optimized for various AI and deep learning applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl border border-primary/10 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Text Datasets</h3>
                <p className="text-sm text-muted-foreground">
                  NLP, language models, sentiment analysis, and text classification datasets.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-primary/10 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Image Datasets</h3>
                <p className="text-sm text-muted-foreground">
                  Computer vision, object detection, image classification, and generative models.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-primary/10 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tabular Data</h3>
                <p className="text-sm text-muted-foreground">
                  Structured data for regression, classification, and predictive analytics.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-primary/10 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Time Series</h3>
                <p className="text-sm text-muted-foreground">
                  Temporal data for forecasting, anomaly detection, and sequence modeling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Machine Learning Datasets?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">High-Quality Data</h3>
                      <p className="text-muted-foreground">
                        Curated and validated datasets with comprehensive quality assurance and deduplication.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Privacy Protected</h3>
                      <p className="text-muted-foreground">
                        Synthetic and anonymized datasets that maintain statistical properties while protecting privacy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ready for Training</h3>
                      <p className="text-muted-foreground">
                        Pre-processed and formatted datasets optimized for immediate use in ML pipelines.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Custom Solutions</h3>
                      <p className="text-muted-foreground">
                        Tailored dataset creation for specific domains, use cases, and business requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                <p className="text-muted-foreground mb-6">
                  Access our comprehensive library of machine learning datasets or request custom data generation
                  for your specific AI training needs.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80">
                    <Link href="/trysynthengyne">Explore Datasets</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/#contact">Request Custom Data</Link>
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
