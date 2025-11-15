# 🎨 Memorae - Complete Figma Design System

This document contains all design specifications needed to recreate the Memorae website in Figma.

## 📐 Design Tokens

### Colors

#### Primary Palette
```
Neon Cyan: #00FFFF
- RGB: R:0, G:255, B:255
- Usage: Primary actions, highlights, CTAs

Neon Violet: #8B5CF6
- RGB: R:139, G:92, B:246
- Usage: Secondary elements, accents

Neon Magenta: #FF00FF
- RGB: R:255, G:0, B:255
- Usage: Special features, accents

Neon Blue: #3B82F6
- RGB: R:59, G:130, B:246
- Usage: Links, info states

Neon Green: #00FF88
- RGB: R:0, G:255, B:136
- Usage: Success states, retrieval features
```

#### Background Colors
```
Dark BG: #0A0A0F
- Main background color

Dark Surface: #151520
- Card backgrounds, elevated surfaces

Dark Card: #1A1A2E
- Card containers
```

#### Glassmorphism
```
Glass Background: rgba(21, 21, 32, 0.6)
Glass Border: rgba(255, 255, 255, 0.1)
Backdrop Blur: 10px
```

#### Text Colors
```
Primary Text: #FFFFFF
Secondary Text: #D1D5DB (gray-300)
Tertiary Text: #9CA3AF (gray-400)
```

### Typography

#### Display Font: Orbitron
```
H1: 64px / 72px (8xl)
- Weight: Bold (700)
- Usage: Hero titles, main headings

H2: 48px / 56px (6xl)
- Weight: Bold (700)
- Usage: Section titles

H3: 36px / 44px (4xl)
- Weight: Bold (700)
- Usage: Subsection titles

H4: 24px / 32px (2xl)
- Weight: Bold (700)
- Usage: Card titles
```

#### Body Font: Inter
```
Body Large: 20px / 28px (xl)
- Weight: Regular (400)
- Usage: Large body text

Body: 16px / 24px (base)
- Weight: Regular (400)
- Usage: Standard body text

Body Small: 14px / 20px (sm)
- Weight: Regular (400)
- Usage: Secondary text, captions

Body XSmall: 12px / 16px (xs)
- Weight: Regular (400)
- Usage: Labels, fine print
```

### Spacing Scale
```
0px, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px
```

### Border Radius
```
Small: 8px (rounded-lg)
Medium: 12px (rounded-xl)
Large: 16px (rounded-2xl)
XLarge: 24px (rounded-3xl)
Full: 9999px (rounded-full)
```

### Shadows
```
Small: 0 1px 2px rgba(0, 0, 0, 0.1)
Medium: 0 4px 6px rgba(0, 0, 0, 0.1)
Large: 0 10px 15px rgba(0, 0, 0, 0.1)
Neon Glow: 0 0 30px rgba(0, 255, 255, 0.4)
```

### Breakpoints
```
Mobile: 0-639px
Tablet: 640px-1023px
Desktop: 1024px+
```

## 🧩 Component Specifications

### 1. Glass Card
```
Background: rgba(21, 21, 32, 0.6)
Border: 1px solid rgba(255, 255, 255, 0.1)
Border Radius: 16px
Backdrop Blur: 10px
Padding: 32px
Shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
```

### 2. Button - Primary (Gradient)
```
Background: Linear Gradient
  - Start: #00FFFF (Neon Cyan)
  - Middle: #8B5CF6 (Neon Violet)
  - End: #FF00FF (Neon Magenta)
Border Radius: 9999px (Full)
Padding: 16px 32px
Text: 18px, Bold, White
Shadow: 0 0 20px rgba(0, 255, 255, 0.5)
Hover: Scale 1.05, Shadow increase
```

### 3. Button - Secondary (Glass)
```
Background: rgba(21, 21, 32, 0.6)
Border: 2px solid rgba(139, 92, 246, 0.5)
Border Radius: 9999px
Padding: 16px 32px
Text: 18px, Bold, White
Hover: Border color to #8B5CF6
```

### 4. Input Field
```
Background: rgba(21, 21, 32, 0.6)
Border: 1px solid rgba(107, 114, 128, 0.7)
Border Radius: 8px
Padding: 12px 16px
Text: 16px, Regular, White
Focus: Border color #00FFFF, Outline 2px #00FFFF
```

### 5. Step Card (How It Works)
```
Width: Auto (Grid: 4 columns desktop, 2 tablet, 1 mobile)
Height: Auto (min 300px)
Background: Glass effect
Border Radius: 16px
Padding: 24px 32px
Icon Container: 80px × 80px, Gradient background
Step Badge: 40px × 40px circle, Top right
Hover: Scale 1.02, Y: -5px, Border glow
```

### 6. Feature Card
```
Width: Auto (Grid: 3 columns desktop, 2 tablet, 1 mobile)
Height: Auto
Background: Glass effect
Border Radius: 16px
Padding: 32px
Icon: 64px × 64px, Gradient background
3D Tilt: On hover, perspective 1000px
```

### 7. Testimonial Card
```
Width: Auto (Grid: 2 columns)
Height: Auto
Background: Glass effect
Border Radius: 16px
Padding: 32px
Avatar: 48px × 48px circle, Gradient background
Stars: 5 × 20px icons, Filled with accent color
Hover: Rotate Y 5deg, Scale 1.02
```

## 📱 Page Layouts

### Home Page Structure

#### Hero Section
```
Height: 100vh (Full viewport)
Background: Dark BG with gradient overlay
Content: Centered, max-width 1280px
3D Element: Full screen, z-index 0
Text: Centered, z-index 10
```

#### How It Works Section
```
Padding: 128px 32px
Max Width: 1280px
Grid: 4 columns (desktop), 2 (tablet), 1 (mobile)
Gap: 32px
Title: Centered, 64px, Gradient text
```

#### Features Section
```
Padding: 128px 32px
Max Width: 1280px
Grid: 2 columns (desktop), 1 (mobile)
Gap: 32px
Carousel: Mobile only
```

#### Demo Section
```
Padding: 128px 32px
Max Width: 1024px
Card: Centered, Glass effect
Min Height: 400px
```

#### Technology Section
```
Padding: 128px 32px
Max Width: 1280px
3D Canvas: 600px height
Toggle Button: Centered above
```

#### Testimonials Section
```
Padding: 128px 32px
Max Width: 1280px
Grid: 2 columns
Gap: 32px
Parallax: Applied on scroll
```

#### CTA Section
```
Padding: 128px 32px
Max Width: 1024px
Background: Animated gradient
Voice Button: 96px × 96px circle
```

#### Footer
```
Padding: 48px 32px
Max Width: 1280px
Grid: 5 columns (desktop), 2 (tablet), 1 (mobile)
Border Top: 1px solid rgba(255, 255, 255, 0.1)
```

### Additional Pages

#### About Page
- Hero section (same as home)
- Stats grid (4 columns)
- Mission card (centered, max 1024px)
- Values grid (3 columns)

#### Features Page
- Hero section
- Features grid (3 columns, 9 items)

#### Pricing Page
- Hero section
- Pricing cards (3 columns)
- Popular badge on middle card

#### Contact Page
- Hero section
- Form + Info (2 columns)
- Contact form (glass card)
- Info cards (glass cards)

## 🎭 Effects & Animations

### Gradient Text
```
Background: Linear Gradient 135deg
  - #00FFFF → #8B5CF6 → #FF00FF
Background Size: 200% 200%
Animation: Gradient shift (3s infinite)
```

### Glow Effects
```
Text Shadow: 
  - 0 0 10px [color]
  - 0 0 20px [color]
  - 0 0 30px [color]

Box Shadow:
  - 0 0 30px [color]40 (40% opacity)
```

### Particle Background
```
Particles: 50 dots
Colors: Neon palette
Size: 1-3px
Connections: Lines between nearby particles (max 150px distance)
Opacity: 0.6 particles, 0.1 connections
```

### 3D Effects
```
Transform Style: preserve-3d
Perspective: 1000px
Rotate X/Y: Based on mouse position
Scale: 1.02 on hover
```

## 📋 Figma Setup Instructions

### Step 1: Create New Figma File
1. Open Figma
2. Create new file: "Memorae - Design System"
3. Set frame size: 1920×1080 (Desktop) or use Auto Layout

### Step 2: Set Up Design Tokens
1. **Colors:**
   - Create Color Styles for all colors listed above
   - Name them: "Neon/Cyan", "Neon/Violet", etc.

2. **Typography:**
   - Import Orbitron and Inter fonts
   - Create Text Styles for all heading and body variants

3. **Effects:**
   - Create Effect Styles for shadows and glows
   - Create Gradient Styles for button backgrounds

### Step 3: Create Components
1. Create Component Library page
2. Build each component (Button, Card, Input, etc.)
3. Use Auto Layout for responsive behavior
4. Add variants for states (hover, active, disabled)

### Step 4: Build Pages
1. Create separate frames for each page
2. Use components from library
3. Set up responsive constraints
4. Add annotations for interactions

### Step 5: Add Interactions (Prototype)
1. Link buttons to pages
2. Add hover states
3. Create scroll animations
4. Add transitions (0.3s ease)

## 🎨 Design System Structure in Figma

```
📁 Memorae Design System
├── 📁 01. Design Tokens
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Effects
│   └── Gradients
├── 📁 02. Components
│   ├── Buttons
│   ├── Cards
│   ├── Inputs
│   ├── Navigation
│   └── Icons
├── 📁 03. Sections
│   ├── Hero
│   ├── How It Works
│   ├── Features
│   ├── Demo
│   ├── Technology
│   ├── Testimonials
│   ├── CTA
│   └── Footer
├── 📁 04. Pages
│   ├── Home
│   ├── About
│   ├── Features
│   ├── Pricing
│   └── Contact
└── 📁 05. Prototypes
    ├── Desktop Flow
    ├── Tablet Flow
    └── Mobile Flow
```

## 🔗 Sharing the Figma File

Once created:
1. Click "Share" button (top right)
2. Set permissions: "Anyone with the link can view"
3. Copy the link
4. Add to README.md:
   ```markdown
   ## 🎨 Design Files
   
   **Figma Design File:** [View Design System](YOUR_FIGMA_LINK_HERE)
   ```

## 📝 Notes for Designers

- Use Auto Layout extensively for responsive design
- Create variants for different states (hover, active, etc.)
- Use Constraints for responsive behavior
- Add comments explaining interactions
- Use Components for reusability
- Create a Style Guide page at the beginning

---

**This design system is based on the implemented code. All specifications match the live website.**

