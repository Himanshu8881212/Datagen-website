'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'compact' | 'mark-only' | 'docs' | 'docs-compact' | 'synthengyne' | 'synthengyne-compact';
  theme?: 'light' | 'dark';
}

export function Logo({ className = '', variant = 'default', theme = 'light' }: LogoProps) {
  const getLogoSrc = () => {
    if (variant === 'mark-only') return '/logo-mark.svg';
    if (variant === 'compact') return '/logo-compact.svg';
    if (variant === 'docs') return '/logo-docs.svg';
    if (variant === 'docs-compact') return '/logo-docs-compact.svg';
    if (variant === 'synthengyne') return '/logo-synthengyne.svg';
    if (variant === 'synthengyne-compact') return '/logo-synthengyne-compact.svg';
    return theme === 'dark' ? '/logo-dark.svg' : '/logo.svg';
  };

  const getLogoSize = () => {
    if (variant === 'mark-only') return { width: 40, height: 40 };
    if (variant === 'compact') return { width: 120, height: 40 };
    if (variant === 'docs') return { width: 200, height: 60 };
    if (variant === 'docs-compact') return { width: 140, height: 40 };
    if (variant === 'synthengyne') return { width: 240, height: 60 };
    if (variant === 'synthengyne-compact') return { width: 180, height: 40 };
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
