'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { scrollToElement } from '@/lib/scroll-utils';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
        className="h-10 w-10 p-0 hover:bg-white/10 transition-colors"
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
          className={`transition-all duration-200 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
          style={{ position: isOpen ? 'absolute' : 'relative' }}
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
          className={`transition-all duration-200 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
          style={{ position: isOpen ? 'relative' : 'absolute' }}
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </Button>

      {/* Backdrop overlay with animation */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeMenu}
      />

      {/* Menu content - Professional design */}
      <div
        className={`fixed inset-x-0 top-0 bottom-0 z-50 bg-gradient-to-b from-black via-black to-black/95 text-white shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Logo section - matches header height */}
          <div className="h-16 px-5 flex items-center border-b border-white/5 bg-black">
            <Link href="/" onClick={closeMenu} className="inline-block group">
              <Image
                src="/logo-compact.svg"
                alt="DataGen"
                width={160}
                height={48}
                className="h-auto w-auto transition-opacity group-hover:opacity-80"
                priority
              />
            </Link>
          </div>

          {/* Navigation Links - Professional styling */}
          <nav className="flex-1 px-3 pt-2 pb-4 space-y-1">
            <Link
              href="#product"
              className="group flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 active:scale-[0.98]"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('product');
                window.history.pushState(null, '', '#product');
                closeMenu();
              }}
            >
              <span className="tracking-wide">Product</span>
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
                className="text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <Link
              href="#services"
              className="group flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 active:scale-[0.98]"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('services');
                window.history.pushState(null, '', '#services');
                closeMenu();
              }}
            >
              <span className="tracking-wide">Services</span>
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
                className="text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <Link
              href="#faq"
              className="group flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 active:scale-[0.98]"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('faq');
                window.history.pushState(null, '', '#faq');
                closeMenu();
              }}
            >
              <span className="tracking-wide">FAQ</span>
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
                className="text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="group flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 active:scale-[0.98]"
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('contact');
                window.history.pushState(null, '', '#contact');
                closeMenu();
              }}
            >
              <span className="tracking-wide">Contact Us</span>
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
                className="text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </nav>

          {/* CTA Button - Professional design */}
          <div className="p-4 border-t border-white/5 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold py-3.5 text-[15px] rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 active:scale-[0.98]"
            >
              <Link href="/trysynthengyne" onClick={closeMenu}>Try SynthEngyne</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
