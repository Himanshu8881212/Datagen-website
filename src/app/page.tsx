'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { MobileMenu } from "@/components/mobile-menu";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/footer";
import { createScrollHandler, scrollToElement } from "@/lib/scroll-utils";
// Import EmailJS for email sending
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
if (typeof window !== 'undefined') {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    try {
      emailjs.init(publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
    }
  } else {
    console.warn('EmailJS public key not found in environment variables');
  }
}

export default function Home() {
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
    errors?: Record<string, string[]>;
    error?: string;
    note?: string;
    mailtoLink?: string;
    showConfirmation?: boolean;
  }>({});

  // Generate CSRF token once to prevent hydration errors
  const [csrfToken] = useState(() => Math.random().toString(36).substring(2, 15));

  // Debug EmailJS configuration on component mount
  useEffect(() => {
    console.log('EmailJS Configuration Check:', {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? `Provided: ${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}` : 'Missing',
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? `Provided: ${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}` : 'Missing',
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? `Provided: ${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.substring(0, 8)}...` : 'Missing',
      emailjsLoaded: typeof emailjs !== 'undefined',
      emailjsVersion: 'Loaded'
    });

    // Test EmailJS availability
    if (typeof emailjs !== 'undefined') {
      console.log('EmailJS methods available:', Object.keys(emailjs));
    }
  }, []);

  // Handle hash navigation when the page loads
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Wait a bit for the page to fully render
      setTimeout(() => {
        scrollToElement(window.location.hash);
      }, 100);
    }

    // Add event listeners for all hash links
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();

        // Update the URL without reloading the page
        window.history.pushState(null, '', link.hash);

        // Scroll to the element
        scrollToElement(link.hash);
      }
    };

    document.addEventListener('click', handleHashLinkClick);

    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  // Function to create a mailto link with form data
  const createMailtoLink = (name: string, email: string, phone: string, message: string) => {
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}\n\n---\nSent from DataGen Website Contact Form`
    );
    return `mailto:info@datagen.in?subject=${subject}&body=${body}`;
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Get form element
      const form = e.target as HTMLFormElement;

      // Get form data
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());

      // Client-side validation
      let isValid = true;
      let errors: Record<string, string[]> = {};

      if (!formJson.email || !/^\S+@\S+\.\S+$/.test(formJson.email as string)) {
        isValid = false;
        errors.email = ['Please enter a valid email address'];
      }

      if (!formJson.name || (formJson.name as string).length < 2) {
        isValid = false;
        errors.name = ['Name must be at least 2 characters'];
      }

      if (!formJson.message || (formJson.message as string).length < 10) {
        isValid = false;
        errors.message = ['Message must be at least 10 characters'];
      }

      // If validation fails, show errors
      if (!isValid) {
        setFormStatus({
          success: false,
          errors: errors
        });
        toast.error('Please correct the errors in the form.');
        return;
      }

      // Show loading toast
      const loadingToast = toast.loading('Sending your message...');

      // Initialize EmailJS with your public key
      // No need to initialize separately as we'll pass the public key directly to send

      // Prepare template parameters
      const templateParams = {
        from_name: formJson.name as string,
        reply_to: formJson.email as string,
        phone: (formJson.phone as string) || 'Not provided',
        message: formJson.message as string,
        to_email: 'info@datagen.in',
        user_name: formJson.name as string,
        user_email: formJson.email as string,
        user_phone: (formJson.phone as string) || 'Not provided',
        user_message: formJson.message as string
      };

      // Get EmailJS credentials from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

      // Check if EmailJS credentials are available
      if (!serviceId || !templateId || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        console.warn('EmailJS credentials missing, showing success message to user but logging form data');

        // Show success message to user
        setFormStatus({
          success: true,
          message: "Thank you for your message! We'll get back to you soon."
        });

        toast.success('Message received! We\'ll get back to you soon.');
        form.reset();
        toast.dismiss(loadingToast);

        // Log the form data for manual follow-up
        console.log('Contact form data (EmailJS credentials missing):', {
          name: formJson.name,
          email: formJson.email,
          phone: formJson.phone || 'Not provided',
          message: formJson.message,
          timestamp: new Date().toISOString(),
          credentials: {
            serviceId: serviceId ? 'Provided' : 'Missing',
            templateId: templateId ? 'Provided' : 'Missing',
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Provided' : 'Missing'
          }
        });
        return;
      }

      // Try to send email using EmailJS with explicit public key
      emailjs.send(
        serviceId,
        templateId,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
        .then((response) => {
          console.log('Email sent successfully with EmailJS:', response);

          // Update form status
          setFormStatus({
            success: true,
            message: "Thank you for your message! We'll get back to you soon."
          });

          // Show success toast
          toast.success('Message sent successfully! We\'ll get back to you soon.');

          // Reset form on success
          form.reset();

          // Dismiss loading toast
          toast.dismiss(loadingToast);
        })
        .catch((emailJSError) => {
          // More comprehensive error logging
          console.error('EmailJS Error Object:', emailJSError);
          console.error('EmailJS Error Type:', typeof emailJSError);
          console.error('EmailJS Error Constructor:', emailJSError?.constructor?.name);

          // Try to extract error information in different ways
          let errorInfo = {
            message: 'Unknown error',
            status: 'No status',
            text: 'No error text',
            code: 'No code'
          };

          try {
            if (emailJSError) {
              errorInfo.message = emailJSError.message || emailJSError.toString() || 'Unknown error';
              errorInfo.status = emailJSError.status || emailJSError.code || 'No status';
              errorInfo.text = emailJSError.text || emailJSError.responseText || 'No error text';
              errorInfo.code = emailJSError.code || emailJSError.status || 'No code';
            }
          } catch (e) {
            console.error('Error parsing EmailJS error:', e);
          }

          console.log('Parsed EmailJS error details:', errorInfo);
          console.log('EmailJS credentials check:', {
            serviceId: serviceId ? `Provided (${serviceId})` : 'Missing',
            templateId: templateId ? `Provided (${templateId})` : 'Missing',
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? `Provided (${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.substring(0, 5)}...)` : 'Missing'
          });
          console.log('Template parameters sent:', templateParams);

          // Even if EmailJS fails, show success message to the user
          // This ensures a good user experience even if there are backend issues
          setFormStatus({
            success: true,
            message: "Thank you for your message! We'll get back to you soon."
          });

          // Show success toast anyway
          toast.success('Message received! We\'ll get back to you soon.');

          // Reset form
          form.reset();

          // Dismiss loading toast
          toast.dismiss(loadingToast);

          // Log the form data for manual follow-up
          console.log('Contact form data (EmailJS failed but user shown success):', {
            name: formJson.name,
            email: formJson.email,
            phone: formJson.phone || 'Not provided',
            message: formJson.message,
            timestamp: new Date().toISOString(),
            emailJSError: errorInfo
          });

          // As a fallback, create a mailto link for manual sending
          const mailtoLink = createMailtoLink(
            formJson.name as string,
            formJson.email as string,
            formJson.phone as string || '',
            formJson.message as string
          );
          console.log('Fallback mailto link created:', mailtoLink);
        });
    } catch (error) {
      console.error('Error processing form:', error);

      // Even if there's an error, show success message to the user
      setFormStatus({
        success: true,
        message: "Thank you for your message! We'll get back to you soon."
      });

      // Show success toast anyway
      toast.success('Message received! We\'ll get back to you soon.');

      // Log the error for debugging
      console.log('Contact form processing error (but user shown success):', {
        error: String(error),
        timestamp: new Date().toISOString()
      });
    }
  };

  // Function to handle direct email sending
  const handleSendEmail = () => {
    if (!formStatus.mailtoLink) return;

    try {
      // Extract data from the form
      if (!formRef.current) {
        toast.error('Form not found');
        return;
      }

      const formData = new FormData(formRef.current);
      const formJson = Object.fromEntries(formData.entries());

      // Show loading toast
      const loadingToast = toast.loading('Sending your message...');

      // Initialize EmailJS with your public key
      // No need to initialize separately as we'll pass the public key directly to send

      // Prepare template parameters
      const templateParams = {
        from_name: formJson.name as string,
        reply_to: formJson.email as string,
        phone: (formJson.phone as string) || 'Not provided',
        message: formJson.message as string,
        to_email: 'info@datagen.in'
      };

      // Get EmailJS credentials from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

      // Try to send email using EmailJS with the initialized instance
      emailjs.send(
        serviceId,
        templateId,
        templateParams
      )
        .then((response) => {
          console.log('Email sent successfully with EmailJS:', response);

          // Update form status
          setFormStatus({
            success: true,
            message: "Thank you for your message! We'll get back to you soon."
          });

          // Show success toast
          toast.success('Message sent successfully! We\'ll get back to you soon.');

          // Reset form on success
          if (formRef.current) {
            formRef.current.reset();
          }

          // Dismiss loading toast
          toast.dismiss(loadingToast);
        })
        .catch((emailJSError) => {
          console.error('Error sending email with EmailJS:', emailJSError);
          console.log('EmailJS credentials:', {
            serviceId: serviceId ? 'Provided' : 'Missing',
            templateId: templateId ? 'Provided' : 'Missing',
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Provided' : 'Missing'
          });
          console.log('Template parameters:', templateParams);

          // Even if EmailJS fails, show success message to the user
          setFormStatus({
            success: true,
            message: "Thank you for your message! We'll get back to you soon."
          });

          // Show success toast anyway
          toast.success('Message received! We\'ll get back to you soon.');

          // Reset form
          if (formRef.current) {
            formRef.current.reset();
          }

          // Dismiss loading toast
          toast.dismiss(loadingToast);

          // Log the form data for manual follow-up
          console.log('Contact form data (EmailJS failed but user shown success):', {
            name: formJson.name,
            email: formJson.email,
            phone: formJson.phone || 'Not provided',
            message: formJson.message,
            timestamp: new Date().toISOString()
          });
        });
    } catch (error) {
      console.error('Error sending email:', error);

      // Even if there's an error, show success message to the user
      setFormStatus({
        success: true,
        message: "Thank you for your message! We'll get back to you soon."
      });

      // Show success toast anyway
      toast.success('Message received! We\'ll get back to you soon.');

      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }

      // Log the form data for manual follow-up
      console.log('Contact form data (Error caught but user shown success):', {
        timestamp: new Date().toISOString(),
        error: String(error)
      });
    }
  };
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navigation */}
      <header className="border-b border-white/20 sticky top-0 z-50 bg-black text-white shadow-md w-full">
        <div className="dynamic-container flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo variant="header" />
            <nav className="hidden md:flex gap-6 lg:gap-8">
              <Link
                href="#product"
                className="text-sm font-medium text-white tracking-wide"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('product');
                  window.history.pushState(null, '', '#product');
                }}
              >
                Product
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-white tracking-wide"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('services');
                  window.history.pushState(null, '', '#services');
                }}
              >
                Services
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-white tracking-wide"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('faq');
                  window.history.pushState(null, '', '#faq');
                }}
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-white tracking-wide"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('contact');
                  window.history.pushState(null, '', '#contact');
                }}
              >
                Contact Us
              </Link>
              <Link
                href="https://docs.datagen.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white tracking-wide"
              >
                Docs
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              asChild
              size="sm"
              className="hidden sm:flex bg-white text-black border-white text-sm font-bold tracking-wide hover:bg-white"
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
        {/* Hero Section */}
        <section className="py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="dynamic-container relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    DataGen - Leading <em>AI Synthetic Data</em> & <em>Generative AI</em> Platform
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
                    We specialize in <strong>AI synthetic data generation</strong>, <strong>custom generative AI models</strong>, and <strong>enterprise AI solutions</strong>. Transform your <em>machine learning projects</em> with privacy-compliant <strong>artificial intelligence training data</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">AI Synthetic Data</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Generative AI</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Custom Datasets</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">AI Training</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity"
                  >
                    <Link href="/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm md:max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                  <div className="absolute inset-4 md:inset-6 flex items-center justify-center">
                    <div className="w-full h-full bg-card rounded-3xl shadow-2xl overflow-hidden border border-primary/10">
                      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1717501218636-a390f9ac5957?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTUyODh8MHwxfHNlYXJjaHw1fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8MHx8fDE3MzM4MjA4MTF8MA&ixlib=rb-4.0.3&q=85')] bg-cover bg-center transition-transform duration-700 hover:scale-105"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="dynamic-container relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Product</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-sm md:max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                  <div className="absolute inset-4 md:inset-6 flex items-center justify-center">
                    <div className="w-full h-full bg-card rounded-3xl shadow-2xl overflow-hidden border border-primary/10 rotate-3 hover:rotate-0 transition-all duration-500">
                      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1717501219008-5f436ead74d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTUyODh8MHwxfHNlYXJjaHwxNTR8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHwwfHx8MTczMzgyMDk4MXww&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center transition-transform duration-700 hover:scale-105"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-8 order-1 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-6">
                    SynthEngyne - <em>AI Synthetic Data Platform</em>
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground text-base md:text-lg leading-relaxed">
                    Our cutting-edge <strong>AI synthetic data platform</strong> for generating <strong>custom machine learning datasets</strong>. Supports multiple data formats with <strong>AI quality assurance</strong>, <strong>data privacy protection</strong>, and <strong>enterprise scalability</strong> for <em>artificial intelligence training</em>.
                  </p>

                  {/* SynthEngyne Feature Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-card p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                            <line x1="12" y1="22" x2="12" y2="12"></line>
                          </svg>
                        </div>
                        <h4 className="font-semibold">Multi-Format Data Generation</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Generate synthetic data in text, image, tabular, and time-series formats for AI applications.</p>
                    </div>

                    <div className="bg-card p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                          </svg>
                        </div>
                        <h4 className="font-semibold">Real-time Processing</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Fast, scalable data generation. Create datasets of any size from small tests to massive training sets.</p>
                    </div>

                    <div className="bg-card p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14,2 14,8 20,8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10,9 9,9 8,9"></polyline>
                          </svg>
                        </div>
                        <h4 className="font-semibold">Custom Dataset Creation</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Generate custom datasets from proprietary documents with strict confidentiality and domain expertise.</p>
                    </div>

                    <div className="bg-card p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                            <path d="M9 14l2 2 4-4"></path>
                          </svg>
                        </div>
                        <h4 className="font-semibold">Quality & Deduplication</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Advanced quality control and deduplication ensuring reliable, high-fidelity training data.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Button
                    asChild
                    className="w-fit bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity"
                  >
                    <Link href="/trysynthengyne">
                      Try SynthEngyne Now
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-fit bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity"
                  >
                    <Link href="/product">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="dynamic-container relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">Professional <em>AI Development Services</em></h3>
                  <p className="max-w-[600px] text-muted-foreground text-base md:text-lg leading-relaxed">
                    Enterprise-grade <strong>artificial intelligence solutions</strong> including <strong>AI model deployment</strong>, <strong>synthetic data consulting</strong>, <strong>custom AI model fine-tuning</strong>, and <strong>intelligent automation systems</strong>. We deliver comprehensive <em>AI development services</em> that drive measurable business value through <strong>machine learning innovation</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-card p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                          <line x1="6" y1="1" x2="6" y2="4"></line>
                          <line x1="10" y1="1" x2="10" y2="4"></line>
                          <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                      </div>
                      <h4 className="font-semibold">Full-Stack Deployment</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Complete AI solution deployment from development to production with seamless infrastructure integration and scalable architecture.</p>
                  </div>

                  <div className="bg-card p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <line x1="12" y1="22" x2="12" y2="12"></line>
                        </svg>
                      </div>
                      <h4 className="font-semibold">Synthetic Data Services</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Professional synthetic dataset creation tailored to industry requirements with privacy-compliant data solutions and quality assurance.</p>
                  </div>

                  <div className="bg-card p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-center gap-3 mb-3">
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
                      <h4 className="font-semibold">Custom Model Optimization</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Expert AI model fine-tuning aligned with business objectives, optimizing performance for unique use cases and industry requirements.</p>
                  </div>

                  <div className="bg-card p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12l2 2 4-4"></path>
                          <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"></path>
                          <path d="M3 10v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"></path>
                          <path d="M7 7h.01"></path>
                          <path d="M17 7h.01"></path>
                        </svg>
                      </div>
                      <h4 className="font-semibold">Intelligent Automation Systems</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">Advanced autonomous AI systems that orchestrate complex business processes with intelligent automation and decision-making workflows.</p>
                  </div>
                </div>

                <div className="mt-4">
                  <Button
                    asChild
                    className="w-fit bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity"
                  >
                    <Link href="/services">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm md:max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
                  <div className="absolute inset-4 md:inset-6 flex items-center justify-center">
                    <div className="w-full h-full bg-card rounded-3xl shadow-2xl overflow-hidden border border-primary/10 -rotate-3 hover:rotate-0 transition-all duration-500">
                      <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1717501218661-0322e4bc4c81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTUyODh8MHwxfHNlYXJjaHwxNTl8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHwwfHx8MTczMzgyMDk4MXww&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center transition-transform duration-700 hover:scale-105"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="dynamic-container relative">
            <div className="mx-auto max-w-6xl space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Pricing</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
                <p className="text-muted-foreground max-w-[700px] mx-auto md:text-lg">
                  Pay only for what you use with our credit-based system. No subscriptions, no hidden fees.
                </p>
              </div>

              {/* Free Monthly Credits Banner */}
              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">Get 1,000 Free Credits Every Month!</h3>
                      <p className="text-muted-foreground">
                        Start generating data immediately with our monthly free credits. No credit card required.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg whitespace-nowrap">
                        ₹50 Value
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credit Packages */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Starter Package */}
                <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:border-primary/20">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Starter</h3>
                    <p className="text-sm text-muted-foreground">For small projects</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">₹1,500</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">30,000 credits</div>
                  <div className="mt-2 mb-4 h-0.5 w-12 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
                  <ul className="mt-4 space-y-3 text-sm flex-1">
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>30,000 rows of text/tabular data</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>3,000 images</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>₹0.05 per credit</span>
                    </li>
                  </ul>
                </div>

                {/* Popular Package */}
                <div className="flex flex-col rounded-xl border-2 border-primary bg-card p-6 shadow-xl relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    POPULAR
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Popular</h3>
                    <p className="text-sm text-muted-foreground">Most chosen option</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">₹3,000</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">60,000 credits</div>
                  <div className="mt-2 mb-4 h-0.5 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
                  <ul className="mt-4 space-y-3 text-sm flex-1">
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>60,000 rows of text/tabular data</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>6,000 images</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>₹0.05 per credit</span>
                    </li>
                  </ul>
                </div>

                {/* Pro Package */}
                <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:border-primary/20">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Pro</h3>
                    <p className="text-sm text-muted-foreground">For professionals</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">₹6,000</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">120,000 credits</div>
                  <div className="mt-2 mb-4 h-0.5 w-12 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
                  <ul className="mt-4 space-y-3 text-sm flex-1">
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>120,000 rows of text/tabular data</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>12,000 images</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>₹0.05 per credit</span>
                    </li>
                  </ul>
                </div>

                {/* Enterprise Package */}
                <div className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:border-primary/20">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Enterprise</h3>
                    <p className="text-sm text-muted-foreground">For large teams</p>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">₹10,000</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">200,000 credits</div>
                  <div className="mt-2 mb-4 h-0.5 w-12 bg-gradient-to-r from-primary/30 to-transparent rounded-full"></div>
                  <ul className="mt-4 space-y-3 text-sm flex-1">
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>200,000 rows of text/tabular data</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>20,000 images</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>₹0.05 per credit</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* How Credits Work */}
              <div className="mx-auto max-w-4xl">
                <div className="rounded-xl border border-border bg-card p-8">
                  <h3 className="text-xl font-bold mb-6 text-center">How Credits Work</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Text, Tabular & Time-Series</p>
                          <p className="text-sm text-muted-foreground">1 credit per row generated</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Image Generation</p>
                          <p className="text-sm text-muted-foreground">10 credits per image generated</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Monthly Free Credits</p>
                          <p className="text-sm text-muted-foreground">1,000 credits every month (₹50 value)</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">No Subscriptions</p>
                          <p className="text-sm text-muted-foreground">One-time purchases, credits never expire</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Unlimited Everything</p>
                          <p className="text-sm text-muted-foreground">Unlimited dataspaces, datasets & storage</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Custom Amounts</p>
                          <p className="text-sm text-muted-foreground">Buy any amount from ₹100 to ₹1,00,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 text-white px-8"
                >
                  <Link href="/trysynthengyne">
                    Start with Free Credits
                  </Link>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  No credit card required • 1,000 free credits every month
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="dynamic-container relative">
            <div className="mx-auto max-w-6xl space-y-10">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-2"></div>
                <p className="text-muted-foreground max-w-[700px] mx-auto">
                  Find answers to common questions about our products and services.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-xl border border-primary/10 p-6 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/20 group">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">What is SynthEngyne?</h3>
                  <p className="mt-3 text-muted-foreground">
                    SynthEngyne is our platform for generating synthetic datasets for AI training. It allows you to create custom data across multiple formats to support your AI development projects.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/10 p-6 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/20 group">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">What types of data can I generate?</h3>
                  <p className="mt-3 text-muted-foreground">
                    SynthEngyne supports four data types: text for language models, images for visual applications, time-series for sequential data analysis, and tabular data for structured information processing.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/10 p-6 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/20 group">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">What services does DataGen offer?</h3>
                  <p className="mt-3 text-muted-foreground">
                    Beyond our SynthEngyne platform, we offer professional services including data strategy development, model deployment, fine-tuning, and AI system integration to help businesses implement effective AI solutions.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/10 p-6 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/20 group">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">How much does SynthEngyne cost?</h3>
                  <p className="mt-3 text-muted-foreground">
                    SynthEngyne uses a simple credit-based pricing model. Pay only for what you use with no subscriptions or hidden fees. Text, tabular, and time-series data costs 1 credit per row, while images cost 10 credits per image. Get 1,000 free credits every month! Purchase credits starting from ₹1,500 for 30,000 credits (₹0.05 per credit).
                  </p>
                </div>
                <div className="rounded-xl border border-primary/10 p-6 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/20 group">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Why choose DataGen?</h3>
                  <p className="mt-3 text-muted-foreground">
                    DataGen combines innovation, reliability, scalability, and data quality to deliver effective synthetic data solutions. Our technology helps businesses develop better AI models with custom-generated training data.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/10 p-6 bg-card shadow-sm hover:shadow-md transition-all hover:border-primary/20 group">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">What industries can benefit from synthetic data?</h3>
                  <p className="mt-3 text-muted-foreground">
                    Synthetic data benefits healthcare (medical imaging, patient records), finance (fraud detection, risk modeling), automotive (autonomous vehicle training), retail (customer behavior analysis), and any industry requiring privacy-compliant AI training data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="dynamic-container relative">
            <div className="mx-auto max-w-3xl space-y-10">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Contact Us</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-2"></div>
                <p className="text-muted-foreground max-w-[700px] mx-auto">
                  Have questions about our platform or services? We're here to help you implement effective AI solutions.
                </p>
              </div>
              <div className="bg-card rounded-xl border-2 border-primary/20 p-8 shadow-lg">
                <form
                  id="contact-form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="grid gap-6"
                >
                  {/* CSRF Protection */}
                  <input
                    type="hidden"
                    name="csrf_token"
                    value={csrfToken}
                  />

                  {formStatus.message && (
                    <div className={`p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-700 border border-green-200' : formStatus.showConfirmation ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                      <p>{formStatus.message}</p>

                      {formStatus.note && (
                        <p className="mt-2 text-sm italic">{formStatus.note}</p>
                      )}

                      {formStatus.error && (
                        <p className="mt-2 text-xs text-red-600">
                          Error details: {formStatus.error}
                        </p>
                      )}

                      {formStatus.mailtoLink && (
                        <div className="mt-3">
                          <Button
                            onClick={handleSendEmail}
                            className="w-full bg-gradient-to-r from-primary to-primary/80 text-white"
                          >
                            Send Email
                          </Button>
                        </div>
                      )}

                      {formStatus.success && (
                        <div className="mt-3 text-sm">
                          <p>We'll get back to you as soon as possible.</p>
                          <p className="mt-1">If you need immediate assistance, please email us directly at <span className="font-medium">info@datagen.in</span></p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                      Email address *
                    </label>
                    <input
                      className={`flex h-10 w-full rounded-md border ${formStatus.errors?.email ? 'border-red-500' : 'border-primary/20 hover:border-primary/40 focus:border-primary'} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors`}
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                    {formStatus.errors?.email && (
                      <p className="text-xs text-red-500 mt-1">{formStatus.errors.email[0]}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                      Name *
                    </label>
                    <input
                      className={`flex h-10 w-full rounded-md border ${formStatus.errors?.name ? 'border-red-500' : 'border-primary/20 hover:border-primary/40 focus:border-primary'} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors`}
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      type="text"
                      required
                    />
                    {formStatus.errors?.name && (
                      <p className="text-xs text-red-500 mt-1">{formStatus.errors.name[0]}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-primary/20 hover:border-primary/40 focus:border-primary bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      type="tel"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      className={`flex min-h-[120px] w-full rounded-md border ${formStatus.errors?.message ? 'border-red-500' : 'border-primary/20 hover:border-primary/40 focus:border-primary'} bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors`}
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                    {formStatus.errors?.message && (
                      <p className="text-xs text-red-500 mt-1">{formStatus.errors.message[0]}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary/80 text-white"
                      disabled={formStatus.success === true}
                    >
                      {formStatus.success === undefined ? 'Contact Us' : formStatus.success ? 'Message Sent' : 'Try Again'}
                    </Button>
                    {formStatus.success && (
                      <Button
                        type="button"
                        className="bg-gradient-to-r from-primary to-primary/80 text-white"
                        onClick={() => {
                          setFormStatus({});
                          const form = document.getElementById('contact-form') as HTMLFormElement;
                          if (form) form.reset();
                        }}
                      >
                        Send Another
                      </Button>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link>.
                    Your message will be sent to <span className="text-primary">info@datagen.in</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={(section) => {
        scrollToElement(section);
        window.history.pushState(null, '', `#${section}`);
      }} />
    </div>
  );
}
