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
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo className="text-lg md:text-xl" />
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <Link
              href={currentPage === "home" ? "#product" : "/#product"}
              className="text-sm font-medium text-white hover:text-primary transition-colors relative group tracking-wide"
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
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href={currentPage === "home" ? "#services" : "/#services"}
              className="text-sm font-medium text-white hover:text-primary transition-colors relative group tracking-wide"
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
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href={currentPage === "home" ? "#faq" : "/#faq"}
              className="text-sm font-medium text-white hover:text-primary transition-colors relative group tracking-wide"
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
            <Link href={currentPage === "home" ? "#contact" : "/#contact"}>
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
  );
}
