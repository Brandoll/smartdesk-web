---
name: Precision Engineering Aesthetic
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#5b403d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#8f6f6c'
  outline-variant: '#e4beb9'
  surface-tint: '#ba1b1c'
  primary: '#97000c'
  on-primary: '#ffffff'
  primary-container: '#bd1e1e'
  on-primary-container: '#ffd2cc'
  inverse-primary: '#ffb4ab'
  secondary: '#5d5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e5'
  on-secondary-container: '#636467'
  tertiary: '#424950'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a6168'
  on-tertiary-container: '#d5dce5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000b'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#dce3ec'
  tertiary-fixed-dim: '#c0c7cf'
  on-tertiary-fixed: '#151c22'
  on-tertiary-fixed-variant: '#41484e'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system embodies a "Technical Minimalism" aesthetic, specifically tailored for high-stakes SaaS environments where clarity, precision, and authority are paramount. The brand personality is serious, calculated, and professional, intentionally avoiding the playfulness of consumer-grade apps in favor of an architectural, high-tech atmosphere.

The visual language draws from **Corporate Modernism** and **Minimalism**. It prioritizes extreme legibility and structural integrity through a rigid adherence to a spatial grid, a limited but high-impact color palette, and purposeful white space. The goal is to evoke an emotional response of confidence and absolute reliability, ensuring the user feels in control of complex data and workflows.

## Colors

The color palette is anchored by a refined corporate red, meticulously balanced for high legibility against a light background. This primary red is used sparingly for critical actions, status indicators, and branding accents to maintain its psychological impact without overwhelming the user.

- **Primary:** A deep, professional red used for primary buttons and active states.
- **Surface:** A hierarchy of neutral grays (`#F8F9FA` to `#E9ECEF`) provides a clean canvas that mimics the clarity of a technical blueprint.
- **Text:** High-contrast charcoal (`#1A1C1E`) ensures optimal readability for dense information.
- **Accents:** Subtle border colors (`#DEE2E6`) define structure without adding visual noise.

## Typography

Typography in this design system is split between two distinct roles:
1. **Headlines:** Use **Space Grotesk** to inject a futuristic, technical character. Its geometric construction reinforces the high-tech SaaS narrative.
2. **Body & Interface:** Use **Hanken Grotesk** for its contemporary precision and exceptional legibility at small sizes. 

For data-heavy views, letter spacing is slightly tightened on headlines to maintain a compact, "engineered" look. Labels utilize uppercase styling with increased tracking to differentiate metadata from body content.

## Layout & Spacing

The design system employs a **Fixed Grid** philosophy for desktop layouts to ensure consistency across complex analytical dashboards. 

- **Desktop (1440px+):** A 12-column grid with a 1200px max-width container, 24px gutters, and 32px side margins.
- **Tablet (768px - 1439px):** A fluid 8-column grid with 16px gutters.
- **Mobile (<767px):** A fluid 4-column grid with 16px margins.

Spacing follows a strict 8px base unit. Vertical rhythm is maintained by using the `md` (24px) unit for grouping related elements and `lg` (40px) for section breaks.

## Elevation & Depth

To maintain a professional, flat-ish aesthetic, this design system avoids heavy drop shadows. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**:

- **Level 0 (Base):** The main background (`#F8F9FA`).
- **Level 1 (Cards/Containers):** Pure white (`#FFFFFF`) surfaces with a 1px solid border (`#E9ECEF`).
- **Level 2 (Overlays/Modals):** Pure white with a very soft, high-diffusion shadow (0px 8px 24px rgba(0,0,0,0.04)) to suggest a slight lift without appearing "floating."

Interaction states (hover/active) should be conveyed via subtle shifts in background color or border weight, rather than shadow changes.

## Shapes

The shape language is "Soft-Technical." By using a consistent 4px (0.25rem) radius for standard UI elements, the design system strikes a balance between the aggressive sharpness of brutalism and the overly friendly roundness of consumer apps.

- **Standard Elements (Buttons, Inputs, Cards):** 4px radius.
- **Large Containers (Sections, Hero Cards):** 8px (0.5rem) radius.
- **Small Elements (Tags, Badges):** 2px or square to maintain a "micro-chip" precision look.

## Components

### Buttons
- **Primary:** Solid Red (`#BD1E1E`) with white text. No gradient. Sharp hover state (10% darkening).
- **Secondary:** Ghost style. 1px border (`#1A1C1E`) with charcoal text.
- **Tertiary:** Text-only, bold, with an underline appearing only on hover.

### Input Fields
Inputs use a white background with a light gray border. Upon focus, the border transitions to the primary red with a 2px outer "halo" of the same color at 10% opacity. Labels are always positioned above the input in the `label-md` style.

### Cards
Cards are the primary container. They feature a white background, a 1px `#E9ECEF` border, and no shadow. Headers within cards should have a subtle bottom border to separate metadata from content.

### Chips & Badges
Rectangular with minimal rounding (2px). Status badges use a desaturated version of the status color (e.g., pale red background with deep red text) to ensure they don't compete with primary actions.

### Data Tables
Tables are high-density. Rows are separated by 1px horizontal lines only. The header row uses a light gray background (`#F1F3F5`) to distinguish it from the data entries.