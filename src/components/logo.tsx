'use client';

import Link from 'next/link';

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
    if (variant === 'compact') return { width: 180, height: 60 };
    if (variant === 'docs') return { width: 240, height: 60 };
    if (variant === 'docs-compact') return { width: 200, height: 60 };
    if (variant === 'synthengyne') return { width: 300, height: 60 };
    if (variant === 'synthengyne-compact') return { width: 240, height: 60 };
    return { width: 250, height: 60 };
  };

  const logoSize = getLogoSize();

  return (
    <Link href="/" className={`transition-all duration-200 hover:opacity-90 ${className}`}>
      <img
        src={getLogoSrc()}
        alt="DataGen - AI and Synthetic Data Solutions"
        width={logoSize.width}
        height={logoSize.height}
        className="h-auto w-auto"
        style={{
          maxWidth: '100%',
          height: 'auto',
          imageRendering: 'crisp-edges',
          shapeRendering: 'geometricPrecision',
        }}
        loading="eager"
      />
    </Link>
  );
}
