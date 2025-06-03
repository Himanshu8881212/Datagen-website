# DataGen Logo Usage Guide

## 📝 Overview

This document outlines the usage of the DataGen logo SVG files and the Logo component throughout the website.

## 🎨 Logo Variants

### 1. **Default Logo** (`/logo.svg`)
- **Size**: 250x60px
- **Usage**: Main logo for hero sections, footers, and large displays
- **Theme**: Light (white text on dark backgrounds)
- **Contains**: Logo mark + "DataGen" text + subtext
- **Enhanced**: Better visibility, text shadows, improved contrast, outer white ring

### 2. **Compact Logo** (`/logo-compact.svg`)
- **Size**: 180x60px
- **Usage**: Navigation headers, smaller spaces
- **Theme**: Light (white text)
- **Contains**: Logo mark + "DataGen" text only
- **Enhanced**: Better visibility, larger logo mark, improved contrast, outer white ring

### 3. **Logo Mark** (`/logo-mark.svg`)
- **Size**: 40x40px
- **Usage**: Favicons, app icons, very small spaces
- **Theme**: Light (white)
- **Contains**: Logo mark only with outer white ring
- **Enhanced**: Clean design with no background, professional outer ring

### 4. **DataGen SynthEngyne** (`/logo-synthengyne.svg`)
- **Size**: 300x60px
- **Usage**: SynthEngyne product pages, product-specific content
- **Theme**: Light with gray "SynthEngyne" text
- **Contains**: Logo mark + "DataGen" (white) + "SynthEngyne" (gray) + subtext
- **Enhanced**: Larger width for better text fitting, unified design

### 5. **DataGen SynthEngyne Compact** (`/logo-synthengyne-compact.svg`)
- **Size**: 240x60px
- **Usage**: SynthEngyne navigation headers, product headers
- **Theme**: Light with gray "SynthEngyne" text
- **Contains**: Logo mark + "DataGen" (white) + "SynthEngyne" (gray)
- **Enhanced**: Bigger size, unified design with outer white ring

## 🔧 Logo Component Usage

### Basic Usage
```tsx
import { Logo } from '@/components/logo';

// Header logo (compact version - 120x32)
<Logo variant="header" />

// Footer logo (full version - 150x40)
<Logo variant="footer" />
```

### Props
- `variant`: `'header' | 'footer'`
- `className`: Additional CSS classes

## 📍 Current Implementation

### Headers/Navigation
All page headers use the header variant (logo-compact.svg):
```tsx
<Logo variant="header" />
```

**Pages using header logo:**
- Homepage (`/`)
- About (`/about`)
- Services (`/services`)
- Product (`/product`)
- FAQ (`/faq`)
- Privacy Policy (`/privacy-policy`)
- Try SynthEngyne (`/trysynthengyne`)
- Generative AI Models (`/generative-ai-models`)
- AI Synthetic Data (`/ai-synthetic-data`)
- Machine Learning Datasets (`/machine-learning-datasets`)

### Footers
All page footers use the footer variant (logo.svg):
```tsx
<Logo variant="footer" />
```

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
- Use header variant for navigation to maintain clean layout
- Use footer variant for footers and larger displays

## 📊 File Sizes
- `logo.svg`: ~3.5KB (enhanced with better visibility)
- `logo-compact.svg`: ~3KB (enhanced with better visibility)
- `logo-mark.svg`: ~1.5KB
- `logo-synthengyne.svg`: ~4KB
- `logo-synthengyne-compact.svg`: ~3.5KB

All logos are optimized SVG files for fast loading and crisp display at any size.

## ✨ Enhanced Features (v3.0)

### Recent Updates (v3.0)
- **Unified Typography**: All logos now use consistent font family (system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)
- **Improved Text Alignment**: Better vertical and horizontal positioning across all variants
- **Enhanced Icon Design**: Restored and improved original cross/plus pattern with enhanced details
- **Consistent Spacing**: Unified letter-spacing and positioning for professional appearance
- **Better Contrast**: Improved text shadows and opacity for better readability

### Typography Improvements
- **Font Stack**: Modern system font stack for better cross-platform compatibility
- **Letter Spacing**: Optimized negative letter-spacing for tighter, more professional text
- **Positioning**: Precise text positioning for perfect alignment with logo mark
- **Weight**: Consistent font-weight 800 for main text, 600 for subtext

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
