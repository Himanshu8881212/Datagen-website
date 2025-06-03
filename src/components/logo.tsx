'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export function Logo({ className = '', variant = 'header' }: LogoProps) {
  // Header uses logo-compact.svg, Footer uses logo.svg
  const logoSrc = variant === 'header' ? '/logo-compact.svg' : '/logo.svg';
  const logoAlt = variant === 'header' ? 'DataGen' : 'DataGen - AI and Synthetic Data Solutions';

  // Use larger sizes for crisp rendering
  const logoWidth = variant === 'header' ? 160 : 300;
  const logoHeight = variant === 'header' ? 48 : 75;

  return (
    <Link href="/" className={`inline-block transition-opacity duration-200 hover:opacity-90 ${className}`}>
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={logoWidth}
        height={logoHeight}
        className="h-auto w-auto max-w-full"
        style={{
          imageRendering: 'crisp-edges',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
        priority
        unoptimized
      />
    </Link>
  );
}
