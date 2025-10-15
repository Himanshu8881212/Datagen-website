import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Synthetic Data Generation | DataGen - Custom Datasets for Machine Learning",
  description: "Generate high-quality AI synthetic data for machine learning models. DataGen's advanced synthetic data generation platform creates custom datasets for neural networks, transformers, and deep learning applications.",
  keywords: "AI synthetic data, synthetic data generation, machine learning datasets, artificial intelligence training data, custom datasets, neural network training, AI model training, synthetic data platform",
  openGraph: {
    title: "AI Synthetic Data Generation | DataGen",
    description: "Generate high-quality AI synthetic data for machine learning models with DataGen's advanced platform.",
    url: "https://datagen.in/ai-synthetic-data",
    type: "website",
  },
  alternates: {
    canonical: "https://datagen.in/ai-synthetic-data",
  },
};

export default function AISyntheticDataPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header currentPage="ai-synthetic-data" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="dynamic-container relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                AI Synthetic Data Generation for <span className="text-primary">Machine Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Generate high-quality <strong>synthetic datasets</strong> for <strong>artificial intelligence training</strong>.
                Our advanced AI synthetic data platform creates custom datasets for neural networks, transformers,
                and deep learning applications while ensuring data privacy and quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors">
                  <Link href="/trysynthengyne">Start Generating Data</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/30">
          <div className="dynamic-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose AI Synthetic Data?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Synthetic data generation solves critical challenges in AI development, from data privacy
                to dataset scarcity, enabling faster and more effective machine learning model training.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Privacy Protection</h3>
                <p className="text-muted-foreground">
                  Generate synthetic datasets that maintain statistical properties while protecting sensitive information.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Unlimited Scale</h3>
                <p className="text-muted-foreground">
                  Create datasets of any size for training large language models, computer vision, and time-series analysis.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Custom Formats</h3>
                <p className="text-muted-foreground">
                  Support for text, image, tabular, and time-series data formats for diverse AI applications.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Advanced deduplication and quality control ensure high-fidelity training data for AI models.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">Fast Generation</h3>
                <p className="text-muted-foreground">
                  Rapid synthetic data creation to accelerate your AI development and deployment cycles.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-3">API Integration</h3>
                <p className="text-muted-foreground">
                  Seamless integration with your existing ML pipelines and AI development workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="dynamic-container">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Generate AI Synthetic Data?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start creating high-quality synthetic datasets for your machine learning projects today.
                Join thousands of AI developers using DataGen's synthetic data platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors">
                  <Link href="/trysynthengyne">Try SynthEngyne Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
