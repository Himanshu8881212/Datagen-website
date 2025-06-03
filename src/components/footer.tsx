'use client';

import Link from "next/link";
import { Logo } from "@/components/logo";

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (section: string, e?: React.MouseEvent) => {
    if (onNavigate) {
      e?.preventDefault();
      onNavigate(section);
    } else {
      // For non-homepage pages, navigate to homepage with hash
      window.location.href = `/#${section}`;
    }
  };

  return (
    <footer className="border-t border-white/20 py-12 md:py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo variant="footer" />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#product"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                  onClick={(e) => handleNavigation('product', e)}
                >
                  SynthEngyne
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                  onClick={(e) => handleNavigation('pricing', e)}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                  onClick={(e) => handleNavigation('services', e)}
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                  onClick={(e) => handleNavigation('faq', e)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                  onClick={(e) => handleNavigation('contact', e)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/70 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2 text-white">Contact Us</h4>
              <p className="text-xs text-white/70">Email: info@datagen.in</p>
              <p className="text-xs text-white/70">Website: www.datagen.in</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/70">
                DataGen © 2025. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
