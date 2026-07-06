---
name: Heritage Gold & Malachite
colors:
  surface: '#fdf9ef'
  surface-dim: '#dddad0'
  surface-bright: '#fdf9ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3e9'
  surface-container: '#f1eee4'
  surface-container-high: '#ece8de'
  surface-container-highest: '#e6e2d8'
  on-surface: '#1c1c16'
  on-surface-variant: '#434843'
  inverse-surface: '#31312a'
  inverse-on-surface: '#f4f0e7'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#251207'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c261a'
  on-tertiary-container: '#ac8c7b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#e3bfad'
  on-tertiary-fixed: '#2a170c'
  on-tertiary-fixed-variant: '#5a4134'
  background: '#fdf9ef'
  on-background: '#1c1c16'
  surface-variant: '#e6e2d8'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system embodies the essence of "Modern Heritage"—a sophisticated blend of South Indian cultural depth and 5-star hospitality standards. The brand personality is rooted in grace, warmth, and meticulous attention to detail, targeting a discerning audience that appreciates culinary tradition served within a premium, contemporary context.

The visual style leans into **Minimalism with a Tactile Heritage twist**. It avoids clutter, prioritizing significant whitespace to allow high-fidelity food photography and intricate Kolam motifs to breathe. The emotional response is one of calm, reliability, and exclusive comfort, reminiscent of a luxury boutique hotel in the heart of the Nilgiris.

- **Minimalist Foundations:** Clean layouts with generous margins.
- **Heritage Motifs:** Subtle use of Kolam (line drawings) and Mandala patterns as low-opacity background textures or decorative dividers.
- **Hospitality Polish:** Smooth transitions, refined typography, and a "warm ivory" canvas that feels more organic and inviting than sterile white.

## Colors

The palette is a direct reflection of South Indian luxury: the deep, grounding green of banana leaves and temple stones, the celebratory shimmer of brass oil lamps, and the rich, aromatic hue of filter coffee.

- **Primary (Heritage Green):** Used for primary actions, navigation headers, and core brand elements. It provides the "anchor" for the visual identity.
- **Secondary (Brass Gold):** Reserved for highlights, special accents, and premium call-to-actions. It signifies the 5-star "Ahara" touch.
- **Tertiary (Coffee Brown):** Primarily used for typography and fine-line iconography to maintain a softer, more organic contrast than pure black.
- **Neutral (Warm Ivory):** The primary background surface. It provides a luxurious, paper-like quality that enhances the warmth of the images and gold accents.

## Typography

The typography strategy employs a classic "Serif for Soul, Sans for Service" approach.

- **Headlines:** Uses a high-contrast serif to convey authority and elegance. Large display titles should utilize slight negative letter-spacing for a modern, editorial look.
- **Body:** A refined, balanced sans-serif ensures maximum legibility for menu descriptions and long-form hospitality copy.
- **Labels:** Uppercase sans-serif labels with generous tracking (letter-spacing) are used for "overlines" (small text above headers) and meta-information, mimicking high-end fashion and hotel branding.

## Layout & Spacing

The layout philosophy is a **fixed-center grid** for desktop to maintain an "exclusive" and contained feel, and a fluid grid for mobile devices.

- **Desktop:** 12-column grid with a maximum width of 1280px. Large margins (64px+) are essential to convey luxury and prevent the interface from feeling crowded.
- **Mobile:** 4-column fluid grid.
- **Rhythm:** An 8px base unit drives all padding and margin decisions. 
- **White Space:** Information density should be low. For example, menu items should have ample vertical breathing room (at least 32px between items) to emphasize the quality of each dish.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layering** and **Subtle Lifts**.

- **Surfaces:** Use slightly different shades of Ivory and very pale Heritage Green (5% opacity) to distinguish sections.
- **Shadows:** When necessary (e.g., on a floating "Book Table" button), use extremely diffused, low-opacity shadows tinted with the primary Coffee Brown (`rgba(78, 54, 41, 0.08)`).
- **Outlines:** Use "Brass Gold" or "Coffee Brown" hair-line borders (0.5px to 1px) for cards and inputs to define shape without adding visual weight.
- **Depth:** Elements "raised" from the background should feel like heavy cardstock rather than plastic.

## Shapes

The shape language is characterized by **Generous Radii (2xl)**.

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Feature Cards:** Large containers and dish imagery should use a 1.5rem (24px) radius to create a soft, welcoming, and high-end aesthetic.
- **Iconography:** Icons should feature rounded terminals and a medium stroke weight (1.5px to 2px) to match the Manrope typeface.

## Components

- **Buttons:**
    - *Primary:* Heritage Green background, Ivory text. No border.
    - *Secondary:* Transparent background, Brass Gold 1px border, Brass Gold text.
    - *Tertiary/Ghost:* Coffee Brown text, no background or border.
- **Cards (The "Tiffin" Card):** Soft Ivory background, 24px radius, 1px subtle Coffee Brown border (opacity 10%). Used for menu items with high-quality photography at the top.
- **Chips:** Small, rounded labels in 5% Heritage Green background with Heritage Green text. Used for dietary tags (e.g., "Vegan," "Chef's Special").
- **Inputs:** Minimalist bottom-border-only or light 1px outlines in Coffee Brown. Focus state shifts the border to Brass Gold.
- **Dividers:** Instead of simple lines, use a centered, miniature Brass Gold mandala or Kolam motif to separate major sections of a page.
- **Lists:** Clean, spacious rows for menu items with the price in Playfair Display (Serif) to make the cost feel like a "selection" rather than a "bill."