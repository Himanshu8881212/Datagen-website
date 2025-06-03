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

  // Render ultra-crisp inline SVGs for maximum quality
  const renderInlineSVG = () => {
    const svgStyle = {
      shapeRendering: 'geometricPrecision' as const,
      textRendering: 'geometricPrecision' as const,
      imageRendering: 'crisp-edges' as const,
      WebkitFontSmoothing: 'antialiased' as const,
      MozOsxFontSmoothing: 'grayscale' as const,
    };

    if (variant === 'compact') {
      return (
        <svg width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
          <circle cx="20" cy="30" r="18" fill="none" stroke="#ffffff" strokeWidth="2" />
          <g transform="translate(8, 18)">
            <circle cx="12" cy="12" r="3.5" fill="#ffffff" stroke="#ffffff" strokeWidth="1" />
            <path d="M12 2 L12 8.5 M12 15.5 L12 22 M2 12 L8.5 12 M15.5 12 L22 12"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round" />
            <circle cx="6" cy="6" r="2" fill="#ffffff" />
            <circle cx="18" cy="6" r="2" fill="#ffffff" />
            <circle cx="6" cy="18" r="2" fill="#ffffff" />
            <circle cx="18" cy="18" r="2" fill="#ffffff" />
            <path d="M9.5 9.5 L6 6 M14.5 9.5 L18 6 M9.5 14.5 L6 18 M14.5 14.5 L18 18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round" />
            <path d="M12 5 L12 6.5 M12 17.5 L12 19 M5 12 L6.5 12 M17.5 12 L19 12"
              stroke="#ffffff"
              strokeWidth="1"
              strokeLinecap="round" />
          </g>
          <text x="48" y="38"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fontSize="22"
            fontWeight="800"
            fill="white"
            letterSpacing="-0.5px"
            filter="url(#textShadowCompact)">
            DataGen
          </text>
          <defs>
            <filter id="textShadowCompact">
              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>
        </svg>
      );
    }

    // Default variant (footer logo)
    return (
      <svg width="250" height="60" viewBox="0 0 250 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
        <circle cx="20" cy="30" r="18" fill="none" stroke="#ffffff" strokeWidth="2" />
        <g transform="translate(8, 18)">
          <circle cx="12" cy="12" r="3.5" fill="#ffffff" stroke="#ffffff" strokeWidth="1" />
          <path d="M12 2 L12 8.5 M12 15.5 L12 22 M2 12 L8.5 12 M15.5 12 L22 12"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round" />
          <circle cx="6" cy="6" r="2" fill="#ffffff" />
          <circle cx="18" cy="6" r="2" fill="#ffffff" />
          <circle cx="6" cy="18" r="2" fill="#ffffff" />
          <circle cx="18" cy="18" r="2" fill="#ffffff" />
          <path d="M9.5 9.5 L6 6 M14.5 9.5 L18 6 M9.5 14.5 L6 18 M14.5 14.5 L18 18"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round" />
          <path d="M12 5 L12 6.5 M12 17.5 L12 19 M5 12 L6.5 12 M17.5 12 L19 12"
            stroke="#ffffff"
            strokeWidth="1"
            strokeLinecap="round" />
        </g>
        <text x="48" y="35"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="24"
          fontWeight="800"
          fill="white"
          letterSpacing="-0.5px"
          filter="url(#textShadowDefault)">
          DataGen
        </text>
        <text x="48" y="50"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="white"
          letterSpacing="0.3px"
          filter="url(#textShadowDefault)">
          AI and Synthetic Data Solutions
        </text>
        <defs>
          <filter id="textShadowDefault">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>
      </svg>
    );
  };

  if (variant === 'compact' || variant === 'default') {
    return (
      <Link href="/" className={`transition-all duration-200 hover:opacity-90 ${className}`}>
        {renderInlineSVG()}
      </Link>
    );
  }

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
          shapeRendering: 'crispEdges',
        }}
        loading="eager"
        draggable={false}
      />
    </Link>
  );
}
