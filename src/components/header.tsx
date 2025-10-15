'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { scrollToElement } from "@/lib/scroll-utils";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = "home" }: HeaderProps) {
  return (
    <header className="border-b border-white/20 sticky top-0 z-50 bg-black text-white shadow-md w-full">
      <div className="dynamic-container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center">
          <Logo variant="header" />
          <nav className="hidden md:flex gap-8 ml-12">
            <Link
              href={currentPage === "home" ? "#product" : "/#product"}
              className="text-sm font-medium text-white tracking-wide"
              onClick={(e) => {
                if (currentPage === "home") {
                  e.preventDefault();
                  scrollToElement('product');
                  window.history.pushState(null, '', '#product');
                } else {
                  window.location.href = "/#product";
                }
              }}
            >
              Product
            </Link>
            <Link
              href={currentPage === "home" ? "#services" : "/#services"}
              className="text-sm font-medium text-white tracking-wide"
              onClick={(e) => {
                if (currentPage === "home") {
                  e.preventDefault();
                  scrollToElement('services');
                  window.history.pushState(null, '', '#services');
                } else {
                  window.location.href = "/#services";
                }
              }}
            >
              Services
            </Link>
            <Link
              href={currentPage === "home" ? "#faq" : "/#faq"}
              className="text-sm font-medium text-white tracking-wide"
              onClick={(e) => {
                if (currentPage === "home") {
                  e.preventDefault();
                  scrollToElement('faq');
                  window.history.pushState(null, '', '#faq');
                } else {
                  window.location.href = "/#faq";
                }
              }}
            >
              FAQ
            </Link>
            <Link
              href={currentPage === "home" ? "#contact" : "/#contact"}
              className="text-sm font-medium text-white tracking-wide"
              onClick={(e) => {
                if (currentPage === "home") {
                  e.preventDefault();
                  scrollToElement('contact');
                  window.history.pushState(null, '', '#contact');
                } else {
                  window.location.href = "/#contact";
                }
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
  );
}
