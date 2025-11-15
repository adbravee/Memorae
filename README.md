# Memorae - Futuristic AI Memory Platform

A cutting-edge, immersive web experience showcasing Memorae.ai - an AI-powered memory storage and retrieval system. This redesign features advanced 3D visualizations, interactive animations, voice UI, and a futuristic design aesthetic.

## 🚀 Features

### Design & Aesthetics
- **Futuristic Sci-Fi Theme**: Dark base with neon accents (cyan, magenta, violet)
- **Glassmorphism & Neumorphism**: Modern UI with depth and transparency
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Micro-interactions on every element

### Interactive Sections

1. **Hero Section**
   - Full-screen 3D neuron network visualization (Three.js)
   - Interactive 3D scene with draggable/rotatable controls
   - Particle background effects
   - Animated gradient text

2. **How It Works**
   - Scroll-triggered animations
   - 4-step process visualization
   - Hover effects with 3D card tilts

3. **Features Carousel**
   - Horizontal scroll/swipe carousel for mobile
   - 3D hover effects with mouse tracking
   - Desktop grid layout with parallax

4. **Interactive Demo**
   - Gamified memory-building flow
   - Step-by-step AI processing visualization
   - Visual feedback animations

5. **Technology Section**
   - Interactive 3D AI model visualization
   - Toggle between 3D and text views
   - Component highlighting on hover

6. **Testimonials**
   - 3D floating cards with parallax scrolling
   - Hover animations with rotation
   - Star rating system

7. **Voice UI CTA**
   - Web Speech API integration
   - Real-time voice recognition
   - Soundwave visualizer
   - AI response simulation

8. **Footer**
   - Dark/light mode toggle
   - Social links with micro-animations
   - Comprehensive navigation

### Technical Features
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion for smooth transitions
- **Scroll Effects**: Intersection Observer API
- **Voice Recognition**: Web Speech API
- **Performance**: Lazy loading, optimized animations
- **Accessibility**: Keyboard navigation, ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Fonts**: Inter, Orbitron (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Memorae
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

To create a production build:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Memorae/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with 3D network
│   ├── NeuronNetwork.tsx   # 3D neuron visualization
│   ├── HowItWorks.tsx      # Process explanation
│   ├── Features.tsx        # Use cases carousel
│   ├── Demo.tsx            # Interactive demo
│   ├── Technology.tsx      # Tech showcase
│   ├── TechVisualization.tsx # 3D tech model
│   ├── Testimonials.tsx    # User testimonials
│   ├── CTA.tsx             # Call-to-action with voice
│   ├── Footer.tsx          # Footer with theme toggle
│   ├── ParticleBackground.tsx # Animated particles
│   └── CursorGlow.tsx      # Custom cursor effect
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the neon color palette:
- `neon-cyan`: #00ffff
- `neon-magenta`: #ff00ff
- `neon-violet`: #8b5cf6
- `neon-blue`: #3b82f6

### Animations
Adjust animation timings and effects in component files using Framer Motion props.

### 3D Models
Modify `NeuronNetwork.tsx` and `TechVisualization.tsx` to customize 3D scenes.

## 🌐 Browser Support

- Chrome/Edge (recommended for voice features)
- Firefox
- Safari
- Opera

**Note**: Voice recognition requires Chrome or Edge browser.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Performance Optimizations

- Lazy loading for 3D components
- Code splitting with Next.js
- Optimized animations (60fps target)
- Efficient particle rendering
- Image optimization

## 🎯 Future Enhancements

- [ ] WebAR integration (8thWall/WebXR)
- [ ] AI personalization with TensorFlow.js
- [ ] Advanced particle systems
- [ ] More 3D model variations
- [ ] Enhanced voice commands
- [ ] Real-time collaboration features

## 🎨 Design Files

### Figma Design System

Complete design specifications and setup guides are available:

- **[FIGMA_DESIGN_SYSTEM.md](./FIGMA_DESIGN_SYSTEM.md)** - Complete design tokens, components, and specifications
- **[FIGMA_QUICK_SETUP.md](./FIGMA_QUICK_SETUP.md)** - Quick 30-minute setup guide

**To create the Figma file:**
1. Follow the setup guide in `FIGMA_QUICK_SETUP.md`
2. Use design tokens from `FIGMA_DESIGN_SYSTEM.md`
3. Share the Figma file and add the link here

**Figma Design File Link:** [Add your Figma link here after creation]

*Note: This project was built directly in code. The design system document contains all specifications needed to recreate it in Figma.*

## 📄 License

This project is created for demonstration purposes.

## 👨‍💻 Development

Built with ❤️ using Next.js, Three.js, and modern web technologies.

---

**Experience the future of memory management. Welcome to Memorae.**

