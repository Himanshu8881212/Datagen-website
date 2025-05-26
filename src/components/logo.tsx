'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'compact' | 'mark-only';
  theme?: 'light' | 'dark';
}

export function Logo({ className = '', variant = 'default', theme = 'light' }: LogoProps) {
  const getLogoSrc = () => {
    if (variant === 'mark-only') return '/logo-mark.svg';
    if (variant === 'compact') return '/logo-compact.svg';
    return theme === 'dark' ? '/logo-dark.svg' : '/logo.svg';
  };

  const getLogoSize = () => {
    if (variant === 'mark-only') return { width: 40, height: 40 };
    if (variant === 'compact') return { width: 120, height: 40 };
    return { width: 200, height: 60 };
  };

  const logoSize = getLogoSize();

  return (
    <Link href="/" className={`transition-all duration-200 hover:opacity-90 ${className}`}>
      <Image
        src={getLogoSrc()}
        alt="DataGen - AI and Synthetic Data Solutions"
        width={logoSize.width}
        height={logoSize.height}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}
