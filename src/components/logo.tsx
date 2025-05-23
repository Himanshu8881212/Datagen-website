'use client';

import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`font-bold text-2xl transition-all duration-200 hover:opacity-90 ${className}`}>
      <div className="flex flex-col">
        <span className="leading-none text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">DataGen</span>
        <span className="text-xs text-muted-foreground font-medium">Synthetic Data Solutions</span>
      </div>
    </Link>
  );
}
