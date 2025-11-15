# 🚀 Quick Figma Setup Guide

## Fast Track: Create Figma File in 30 Minutes

### Step 1: Create File & Set Up (5 min)

1. **Open Figma** → New File → Name: "Memorae Design System"

2. **Create Color Styles:**
   - Select any shape
   - Fill with #00FFFF → Create Style → Name: "Neon/Cyan"
   - Repeat for:
     - #8B5CF6 → "Neon/Violet"
     - #FF00FF → "Neon/Magenta"
     - #3B82F6 → "Neon/Blue"
     - #00FF88 → "Neon/Green"
     - #0A0A0F → "Dark/BG"
     - #151520 → "Dark/Surface"
     - #FFFFFF → "Text/Primary"
     - #D1D5DB → "Text/Secondary"

3. **Import Fonts:**
   - Text Tool → Font dropdown → Add fonts
   - Add: "Orbitron" (Google Fonts)
   - Add: "Inter" (Google Fonts)

### Step 2: Create Key Components (15 min)

#### Button - Primary
```
1. Rectangle: 200×48px
2. Fill: Linear Gradient (Cyan → Violet → Magenta)
3. Corner Radius: 24px
4. Add Text: "Get Started" (18px, Bold, White, Center)
5. Create Component (Ctrl/Cmd + Alt + K)
6. Name: "Button/Primary"
```

#### Glass Card
```
1. Rectangle: 400×300px
2. Fill: #151520, Opacity: 60%
3. Effects → Background Blur: 10px
4. Border: 1px, #FFFFFF, Opacity: 10%
5. Corner Radius: 16px
6. Create Component → Name: "Card/Glass"
```

#### Step Card (How It Works)
```
1. Use Glass Card as base
2. Add Icon Container: 80×80px circle, Gradient fill
3. Add Step Badge: 40×40px circle, Top right
4. Add Text layers (Title, Description)
5. Create Component → Name: "Card/Step"
```

### Step 3: Build Home Page (10 min)

1. **Create Frame:** 1920×1080px, Name: "Home - Desktop"

2. **Hero Section:**
   - Rectangle: 1920×1080px, Fill: #0A0A0F
   - Add text: "Memorae" (64px, Orbitron, Gradient)
   - Add text: "Your Memories, AI-Enhanced" (32px, White)
   - Add Button components

3. **How It Works:**
   - Add 4 Step Card components in a row
   - Spacing: 32px gap
   - Add section title above

4. **Other Sections:**
   - Copy structure from code
   - Use components where possible
   - Add placeholder text

### Step 4: Add Prototype Links (Optional)

1. Select buttons
2. Right-click → Add Interaction
3. Navigate to: "On Click" → "Navigate to" → Select frame

## 🎨 Color Palette (Copy-Paste Ready)

```
Primary Colors:
- Cyan: #00FFFF
- Violet: #8B5CF6
- Magenta: #FF00FF
- Blue: #3B82F6
- Green: #00FF88

Backgrounds:
- Dark BG: #0A0A0F
- Dark Surface: #151520
- Dark Card: #1A1A2E

Text:
- Primary: #FFFFFF
- Secondary: #D1D5DB
- Tertiary: #9CA3AF
```

## 📐 Common Dimensions

```
Container Max Width: 1280px
Section Padding: 128px vertical, 32px horizontal
Card Padding: 32px
Button Padding: 16px 32px
Border Radius: 16px (cards), 24px (buttons), 9999px (full)
```

## 🔗 After Setup

1. **Share File:**
   - Click Share (top right)
   - Set to "Anyone with link can view"
   - Copy link

2. **Add to README:**
   ```markdown
   ## 🎨 Design Files
   
   **Figma Design File:** [View in Figma](YOUR_LINK_HERE)
   ```

## 💡 Pro Tips

- Use **Auto Layout** for responsive components
- Create **Variants** for hover states
- Use **Components** for everything reusable
- Add **Constraints** for responsive behavior
- Use **Frames** for sections (easier to organize)

---

**Need more detail?** See `FIGMA_DESIGN_SYSTEM.md` for complete specifications.

