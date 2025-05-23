'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/product" className="text-sm font-medium hover:text-primary transition-colors">
                Product
              </Link>
              <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/faq" className="text-sm font-medium text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link href="/#contact">Contact Us</Link>
            </Button>
            <Button asChild className="hidden sm:flex">
              <a 
                href="https://synthengyne.datagen.in" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Try SynthEngyne
              </a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h1>
                <p className="text-muted-foreground md:text-xl">
                  Find answers to common questions about our products and services.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-xl font-semibold">What is SynthEngyne, and how can it help my business?</h3>
                  <p className="mt-2 text-muted-foreground">
                    SynthEngyne is a versatile synthetic dataset generation tool that creates high-quality, deduplicated data for a variety of AI tasks. It supports text, image labeling, captioning, segmentation, bounding boxes, and more, enabling businesses to power their AI systems with precision and efficiency. By using SynthEngyne, you can generate the exact data you need for training, testing, and validating AI models without the privacy concerns or limitations of real-world data.
                  </p>
                </div>
                
                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-xl font-semibold">Do you use open-source models in your solutions?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Yes, we leverage open-source models to keep solutions cost-effective and future-ready. By building on open-source frameworks, we ensure scalability, adaptability, and reduced implementation costs without compromising quality. This approach also gives you more control over your AI infrastructure and reduces vendor lock-in. We carefully select and fine-tune open-source models to meet your specific requirements while maintaining high performance standards.
                  </p>
                </div>
                
                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-xl font-semibold">What services does DataGen provide beyond dataset generation?</h3>
                  <p className="mt-2 text-muted-foreground">
                    DataGen provides comprehensive AI services, including dataset generation, model fine-tuning, alignment, Retrieval-Augmented Generation (RAG), intelligent agent development, and the deployment of scalable AI systems on your infrastructure. We offer end-to-end solutions that take you from data to deployment, ensuring that your AI initiatives deliver real business value. Our team of experts works closely with you to understand your specific needs and develop customized solutions that address your unique challenges.
                  </p>
                </div>
                
                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-xl font-semibold">How does SynthEngyne handle proprietary data securely?</h3>
                  <p className="mt-2 text-muted-foreground">
                    SynthEngyne is built with strict privacy protocols, allowing you to generate custom datasets from your proprietary documents without compromising confidentiality or data security. All data processing happens within your secure environment, and we implement industry-standard encryption and access controls to protect your information. Our platform is designed to comply with relevant data protection regulations, giving you peace of mind when working with sensitive or proprietary data.
                  </p>
                </div>
                
                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-xl font-semibold">What types of data can SynthEngyne work with?</h3>
                  <p className="mt-2 text-muted-foreground">
                    SynthEngyne can handle diverse data types, including text, images, image labeling, captioning, segmentation, bounding boxes, tabular data, and time series data. It's designed to provide tailored datasets for a wide range of AI applications, ensuring maximum versatility and impact. Whether you need synthetic text for natural language processing, synthetic images for computer vision, or synthetic tabular data for predictive analytics, SynthEngyne has you covered with high-quality, customizable data generation capabilities.
                  </p>
                </div>
                
                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-xl font-semibold">How do I get started with DataGen's services?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Getting started is easy! Simply contact us through the form on our website, and one of our representatives will reach out to discuss your needs. We'll work with you to understand your requirements, recommend the right solutions, and develop a customized plan to help you achieve your AI goals. Whether you're just starting your AI journey or looking to enhance your existing capabilities, we're here to help you every step of the way.
                  </p>
                </div>
                
                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-xl font-semibold">What are the pricing options for SynthEngyne?</h3>
                  <p className="mt-2 text-muted-foreground">
                    SynthEngyne offers flexible pricing options to suit different needs and budgets. We have a free tier for individuals and small projects, a Pro tier at €20/month for professionals and growing teams, and an Enterprise tier with custom pricing for large organizations with specific requirements. Each tier offers different features and usage limits, allowing you to choose the option that best fits your needs. For detailed pricing information, please visit our pricing page or contact us directly.
                  </p>
                </div>
                
                <div className="rounded-lg border border-border p-6">
                  <h3 className="text-xl font-semibold">Can I customize the data generation process to meet my specific needs?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Absolutely! SynthEngyne offers extensive customization options to ensure the generated data meets your specific requirements. You can define parameters such as data distribution, content types, formats, and more to create datasets that perfectly match your use case. For enterprise customers, we also offer additional customization services to tailor the data generation process even further, ensuring you get exactly the data you need for your AI models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Have Questions?</h2>
              <p className="text-muted-foreground">Contact our team for personalized assistance with your specific needs.</p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 md:py-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <Logo />
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2025 DataGen. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/product" className="text-sm font-medium hover:text-primary">
              Product
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
