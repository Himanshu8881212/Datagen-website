import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Generative AI Models Development & Deployment | DataGen - Custom AI Solutions",
  description: "Expert generative AI model development, fine-tuning, and deployment services. DataGen specializes in transformer models, diffusion models, and custom generative AI solutions for enterprise applications.",
  keywords: "generative AI models, AI model development, transformer models, diffusion models, generative AI services, AI fine-tuning, custom AI models, generative artificial intelligence, AI deployment",
  openGraph: {
    title: "Generative AI Models Development | DataGen",
    description: "Expert generative AI model development, fine-tuning, and deployment services for enterprise applications.",
    url: "https://datagen.in/generative-ai-models",
    type: "website",
  },
  alternates: {
    canonical: "https://datagen.in/generative-ai-models",
  },
};

export default function GenerativeAIModelsPage() {
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
                <span className="text-primary">Generative AI Models</span> Development & Deployment
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Expert development of <strong>generative AI models</strong> including <strong>transformer architectures</strong>,
                <strong>diffusion models</strong>, and custom <strong>generative artificial intelligence solutions</strong>.
                From concept to production deployment with enterprise-grade scalability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  <Link href="/#contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Generative AI Model Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive generative AI development services from model architecture design
                to production deployment and ongoing optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl border border-primary/10">
                <h3 className="text-2xl font-semibold mb-4">Transformer Models</h3>
                <p className="text-muted-foreground mb-6">
                  Custom transformer architectures for language models, multimodal AI, and specialized applications.
                  Expert fine-tuning and optimization for your specific use cases.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Large Language Models (LLMs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Vision Transformers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Multimodal Transformers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl border border-primary/10">
                <h3 className="text-2xl font-semibold mb-4">Diffusion Models</h3>
                <p className="text-muted-foreground mb-6">
                  State-of-the-art diffusion models for image generation, video synthesis, and creative AI applications.
                  Custom training and deployment solutions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Image Generation Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Video Diffusion Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Audio Generation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl border border-primary/10">
                <h3 className="text-2xl font-semibold mb-4">Model Fine-tuning</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced fine-tuning techniques including LoRA, QLoRA, and full parameter fine-tuning
                  to adapt pre-trained models for your specific requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Parameter-Efficient Fine-tuning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Domain Adaptation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Model Alignment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl border border-primary/10">
                <h3 className="text-2xl font-semibold mb-4">Production Deployment</h3>
                <p className="text-muted-foreground mb-6">
                  End-to-end deployment solutions with scalable infrastructure, monitoring,
                  and optimization for production generative AI applications.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Cloud Deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>API Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your Generative AI Model?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our experts help you develop, fine-tune, and deploy cutting-edge generative AI models
                tailored to your business needs and technical requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  <Link href="/#contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/trysynthengyne">Try Our Platform</Link>
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
