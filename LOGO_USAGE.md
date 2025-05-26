# DataGen Logo Usage Guide

## 📝 Overview

This document outlines the usage of the DataGen logo SVG files and the Logo component throughout the website.

## 🎨 Logo Variants

### 1. **Default Logo** (`/logo.svg`)
- **Size**: 200x60px
- **Usage**: Main logo for hero sections, footers, and large displays
- **Theme**: Light (white text on dark backgrounds)
- **Contains**: Logo mark + "DataGen" text + subtext
- **Enhanced**: Better visibility, text shadows, improved contrast

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
- **Enhanced**: Better visibility, larger logo mark, improved contrast

### 4. **Logo Mark** (`/logo-mark.svg`)
- **Size**: 40x40px
- **Usage**: Favicons, app icons, very small spaces
- **Theme**: Light (white)
- **Contains**: Logo mark only

### 5. **DataGen Docs** (`/logo-docs.svg`)
- **Size**: 200x60px
- **Usage**: Documentation sites, docs-related content
- **Theme**: Light with gray "Docs" text
- **Contains**: Logo mark + "DataGen" (white) + "Docs" (gray) + subtext

### 6. **DataGen Docs Compact** (`/logo-docs-compact.svg`)
- **Size**: 140x40px
- **Usage**: Docs navigation headers, smaller docs spaces
- **Theme**: Light with gray "Docs" text
- **Contains**: Logo mark + "DataGen" (white) + "Docs" (gray)

### 7. **DataGen SynthEngyne** (`/logo-synthengyne.svg`)
- **Size**: 240x60px
- **Usage**: SynthEngyne product pages, product-specific content
- **Theme**: Light with gray "SynthEngyne" text
- **Contains**: Logo mark + "DataGen" (white) + "SynthEngyne" (gray) + subtext

### 8. **DataGen SynthEngyne Compact** (`/logo-synthengyne-compact.svg`)
- **Size**: 180x40px
- **Usage**: SynthEngyne navigation headers, product headers
- **Theme**: Light with gray "SynthEngyne" text
- **Contains**: Logo mark + "DataGen" (white) + "SynthEngyne" (gray)

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

// DataGen Docs variants
<Logo variant="docs" />                    // Full docs logo (200x60)
<Logo variant="docs-compact" />            // Compact docs logo (140x40)

// DataGen SynthEngyne variants
<Logo variant="synthengyne" />             // Full SynthEngyne logo (240x60)
<Logo variant="synthengyne-compact" />     // Compact SynthEngyne logo (180x40)
```

### Props
- `variant`: `'default' | 'compact' | 'mark-only' | 'docs' | 'docs-compact' | 'synthengyne' | 'synthengyne-compact'`
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
- `logo.svg`: ~3.5KB (enhanced with better visibility)
- `logo-dark.svg`: ~2.5KB
- `logo-compact.svg`: ~3KB (enhanced with better visibility)
- `logo-mark.svg`: ~1.5KB
- `logo-docs.svg`: ~3.8KB
- `logo-docs-compact.svg`: ~3.2KB
- `logo-synthengyne.svg`: ~4KB
- `logo-synthengyne-compact.svg`: ~3.5KB

All logos are optimized SVG files for fast loading and crisp display at any size.

## ✨ Enhanced Features (v2.0)

### Improved Visibility
- **Text Shadows**: Added subtle shadows for better contrast on dark backgrounds
- **Larger Logo Mark**: Increased size and stroke width for better visibility
- **Enhanced Gradients**: Multi-stop gradients for better depth and contrast
- **Background Circles**: Subtle background elements for better definition
- **Stroke Outlines**: Added stroke outlines to logo elements

### Better Typography
- **Increased Font Weight**: Subtext now uses font-weight 600 for better readability
- **Improved Letter Spacing**: Optimized spacing for better legibility
- **Larger Subtext**: Increased from 10px to 11px for better visibility

### Technical Improvements
- **Filter Effects**: Added drop shadows and text effects
- **Multiple Gradients**: Separate gradients for different elements
- **Better Opacity**: Optimized opacity values for maximum contrast
