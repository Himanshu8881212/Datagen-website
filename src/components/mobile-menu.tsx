'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { scrollToElement } from '@/lib/scroll-utils';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement(id);
    closeMenu();
    // Update URL
    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle menu"
        className="h-10 w-10 p-0 hover:bg-primary/5"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isOpen ? "hidden" : "block"}
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isOpen ? "block" : "hidden"}
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/80"
            onClick={closeMenu}
          />
          {/* Menu content */}
          <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-black text-white border-t border-white/20">
            <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-6 p-6">
            <Link
              href="#product"
              className="text-xl font-medium hover:text-primary transition-colors py-3 border-b border-white/30 flex items-center justify-between"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('product');
                window.history.pushState(null, '', '#product');
                closeMenu();
              }}
            >
              <span>Product</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/70"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
            <Link
              href="#services"
              className="text-xl font-medium hover:text-primary transition-colors py-3 border-b border-white/30 flex items-center justify-between"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('services');
                window.history.pushState(null, '', '#services');
                closeMenu();
              }}
            >
              <span>Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/70"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
            <Link
              href="#faq"
              className="text-xl font-medium hover:text-primary transition-colors py-3 border-b border-white/30 flex items-center justify-between"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('faq');
                window.history.pushState(null, '', '#faq');
                closeMenu();
              }}
            >
              <span>FAQ</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/70"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
            <div className="flex flex-col gap-4 mt-6">
              <Button
                asChild
                variant="outline"
                className="h-12 text-base bg-white text-black border-white hover:bg-white/90 font-bold tracking-wide"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('contact');
                  window.history.pushState(null, '', '#contact');
                  closeMenu();
                }}
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                className="h-12 text-base bg-white text-black border-white hover:bg-white/90 font-bold tracking-wide"
              >
                <Link href="/trysynthengyne" onClick={closeMenu}>Try SynthEngyne</Link>
              </Button>
            </div>
          </nav>
          </div>
        </>
      )}
    </div>
  );
}
