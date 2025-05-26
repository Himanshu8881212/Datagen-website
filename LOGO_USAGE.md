# DataGen Logo Usage Guide

## 📝 Overview

This document outlines the usage of the DataGen logo SVG files and the Logo component throughout the website.

## 🎨 Logo Variants

### 1. **Default Logo** (`/logo.svg`)
- **Size**: 200x60px
- **Usage**: Main logo for hero sections, footers, and large displays
- **Theme**: Light (white text on dark backgrounds)
- **Contains**: Logo mark + "DataGen" text + subtext

### 2. **Dark Logo** (`/logo-dark.svg`)
- **Size**: 200x60px
- **Usage**: For light backgrounds
- **Theme**: Dark (dark text on light backgrounds)
- **Contains**: Logo mark + "DataGen" text + subtext

### 3. **Compact Logo** (`/logo-compact.svg`)
- **Size**: 120x40px
- **Usage**: Navigation headers, smaller spaces
- **Theme**: Light (white text)
- **Contains**: Logo mark + "DataGen" text only

### 4. **Logo Mark** (`/logo-mark.svg`)
- **Size**: 40x40px
- **Usage**: Favicons, app icons, very small spaces
- **Theme**: Light (white)
- **Contains**: Logo mark only

## 🔧 Logo Component Usage

### Basic Usage
```tsx
import { Logo } from '@/components/logo';

// Default logo (200x60)
<Logo />

// Compact version for headers (120x40)
<Logo variant="compact" />

// Logo mark only for icons (40x40)
<Logo variant="mark-only" />

// Dark theme for light backgrounds
<Logo theme="dark" />
```

### Props
- `variant`: `'default' | 'compact' | 'mark-only'`
- `theme`: `'light' | 'dark'`
- `className`: Additional CSS classes

## 📍 Current Implementation

### Headers/Navigation
All page headers use the compact variant:
```tsx
<Logo variant="compact" theme="light" />
```

**Pages using compact logo:**
- Homepage (`/`)
- About (`/about`)
- Services (`/services`)
- Product (`/product`)
- FAQ (`/faq`)
- Privacy Policy (`/privacy-policy`)
- Try SynthEngyne (`/trysynthengyne`)
- Generative AI Models (`/generative-ai-models`)

## 🎯 Logo Design Elements

### Logo Mark Symbolism
- **Central Node**: Represents the core AI/data processing engine
- **Connection Lines**: Data flow and network connections
- **Corner Nodes**: Distributed data points and endpoints
- **Gradient**: Modern, tech-forward aesthetic

### Typography
- **Font**: System fonts (system-ui, -apple-system, sans-serif)
- **Main Text**: "DataGen" - Font weight 800 (extrabold)
- **Subtext**: "AI and Synthetic Data Solutions" - Font weight 500 (medium)

### Colors
- **Light Theme**: White (#ffffff) with opacity variations
- **Dark Theme**: Dark gray (#1a1a1a) to gray (#333333)

## 📱 Responsive Behavior

The Logo component automatically handles sizing:
- **Desktop**: Full size as specified
- **Mobile**: Maintains aspect ratio, scales appropriately
- **Retina**: SVG format ensures crisp display on all screens

## 🔄 Future Considerations

### Potential Additions
1. **Animated Logo**: For loading states or hero sections
2. **Monochrome Version**: For single-color applications
3. **Horizontal Layout**: Alternative arrangement for wide spaces
4. **Icon Variants**: Different sizes for various use cases

### Brand Guidelines
- Always maintain proper spacing around the logo
- Don't modify the logo mark design
- Use appropriate theme (light/dark) for background contrast
- Prefer compact variant for navigation to maintain clean layout

## 📊 File Sizes
- `logo.svg`: ~2.5KB
- `logo-dark.svg`: ~2.5KB
- `logo-compact.svg`: ~2KB
- `logo-mark.svg`: ~1.5KB

All logos are optimized SVG files for fast loading and crisp display at any size.
