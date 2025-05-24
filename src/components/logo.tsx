'use client';

import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`font-bold text-2xl transition-all duration-200 hover:opacity-90 ${className}`}>
      <div className="flex flex-col">
        <span className="leading-none text-2xl font-extrabold tracking-tight text-white">DataGen</span>
        <span className="text-xs text-white/70 font-medium">AI and Synthetic Data Solutions</span>
      </div>
    </Link>
  );
}
