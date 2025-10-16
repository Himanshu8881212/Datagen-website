'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
  href?: string; // Optional href - if not provided, renders without link wrapper
}

export function Logo({ className = '', variant = 'header', href }: LogoProps) {
  // Header uses logo-compact.svg, Footer uses logo.svg
  const logoSrc = variant === 'header' ? '/logo-compact.svg' : '/logo.svg';
  const logoAlt = variant === 'header' ? 'DataGen' : 'DataGen - AI and Synthetic Data Solutions';

  // Consistent sizes across all viewports - matching SynthEngyne app
  const logoWidth = variant === 'header' ? 280 : 240;
  const logoHeight = variant === 'header' ? 48 : 60;

  const imageElement = (
    <Image
      src={logoSrc}
      alt={logoAlt}
      width={logoWidth}
      height={logoHeight}
      className="h-auto w-auto"
      style={{
        imageRendering: 'crisp-edges',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
      priority={variant === 'header'} // Only prioritize header logo
      unoptimized
      suppressHydrationWarning
    />
  );

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href} className={`inline-block transition-opacity duration-200 hover:opacity-90 ${className}`} suppressHydrationWarning>
        {imageElement}
      </Link>
    );
  }

  // Otherwise, just return the image
  return imageElement;
}
