<!-- @format -->

# S-Tier Institutional Homepage Design Checklist (Inspired by Stripe, Airbnb, Linear)

## I. Core Design Philosophy & Strategy

- [ ] **Users First:** Prioritize user needs, workflows, and ease of use in every design decision.
- [ ] **Meticulous Craft:** Aim for precision, polish, and high quality in every UI element and interaction based on the Figma frame.
- [ ] **Speed & Performance:** Design for fast load times and snappy, responsive interactions.
- [ ] **Simplicity & Clarity:** Strive for a clean, uncluttered interface based on the Figma frame. Ensure labels, instructions, and information are unambiguous.
- [ ] **Consistency:** Maintain a uniform design language (colors, typography, components, patterns) across the entire page.
- [ ] **Accessibility (WCAG AA+):** Design for inclusivity. Ensure sufficient color contrast, keyboard navigability, and screen reader compatibility.

## II. Design System Foundation (Tokens & Core Components)

- [ ] **Define Color Palette (from Figma tokens):**
  - [ ] **Primary Brand Color:** Use the `primary` token from Figma.
  - [ ] **Dark Mode:** Use dark mode only, based on the Figma frame.
  - [ ] **Accessibility Check:** Validate all combinations meet WCAG AA contrast ratios.
- [ ] **Typography (from Figma tokens):**
  - [ ] **Primary Font Family:** Use the font defined in Figma (e.g., Inter, Manrope, or system-ui).
  - [ ] **Modular Scale:** Map H1–H4, Body Large, Body Default, Caption according to Figma sizing.
  - [ ] **Font Weights:** Use only the weights applied in Figma (e.g., 400, 500, 600, 700).
  - [ ] **Line Height:** Match Figma values, or ensure 1.5–1.7 for body text readability.
- [ ] **Spacing Units:**
  - [ ] **Base Unit:** Use the Figma base spacing token (e.g., 8px).
  - [ ] **Scale:** Define spacing as multiples of the base unit (4, 8, 12, 16, 24, 32).
- [ ] **Border Radii:**
  - [ ] **Consistent Values:** Map `sm`, `md`, `lg` directly from Figma tokens (inputs, buttons, cards, modals).
- [ ] **Core UI Components (built with ShadCN UI, styled via Figma tokens):**
  - [ ] Buttons (primary, secondary, ghost, destructive, link; with icon options)
  - [ ] Input Fields (text, textarea, select, date picker; with labels, helper text, error messages)
  - [ ] Checkboxes & Radio Buttons
  - [ ] Switches
  - [ ] Cards
  - [ ] Tables (with sorting/filtering support)
  - [ ] Modals/Dialogs
  - [ ] Navigation (Sidebar, Tabs)
  - [ ] Badges/Tags
  - [ ] Tooltips
  - [ ] Progress Indicators (Spinners, Progress Bars)
  - [ ] Icons (use ShadCN’s SVG-based icon set)
  - [ ] Avatars

## III. Layout, Visual Hierarchy & Structure

- [ ] **Responsive Grid System:** Design based on a responsive grid (e.g., 12-column) for consistent layout across devices.
- [ ] **Strategic White Space:** Use ample negative space to improve clarity, reduce cognitive load, and create visual balance.
- [ ] **Clear Visual Hierarchy:** Guide the user's eye using typography (size, weight, color), spacing, and element positioning.
- [ ] **Consistent Alignment:** Maintain consistent alignment of elements.
- [ ] **Mobile-First Considerations:** Ensure the design adapts gracefully to smaller screens.

### Homepage Core Sections

- [ ] **Hero Section:**

  - [ ] Prominent headline and subheadline aligned with value proposition.
  - [ ] Primary Call-to-Action (CTA) button (e.g., “Entrar em contato”).
  - [ ] Image with floating animation.

- [ ] **Clients/Logos Section:**

  - [ ] Showcase key client logos with consistent styling.
  - [ ] Ensure logos are optimized for dark mode.

- [ ] **Solutions/Services Section:**

  - [ ] Highlight core offerings (e.g., Team, Scalable Apps, Custom Solutions).
  - [ ] Use cards or iconography for clarity and quick scanning.
  - [ ] Include short, benefit-driven descriptions.

- [ ] **Tech Stack Logos Section:**

  - [ ] Showcase our tech stack logos with consistent styling.
  - [ ] Ensure logos are optimized for dark mode.

- [ ] **Results / Metrics Section:**

  - [ ] Display quantitative proof (apps created, monthly traffic, uptime, etc.).
  - [ ] Use animations to show numbers rising from start to end.
  - [ ] Ensure metrics are easy to scan and visually engaging.

- [ ] **Testimonials Section:**

  - [ ] Feature quotes from CEOs, CTOs, or other decision-makers.
  - [ ] Include avatar, name, role, and company logo for authenticity.

- [ ] **Contact Section:**
  - [ ] Embed form (name, role (e.g. CEO, CTO, Student, Dev, Designer...), email, subject (e.g. general, request a service, job application, suggestions...), message content).
  - [ ] Ensure validation, error states, and success confirmation are clear.

## IV. Interaction Design & Animations

- [ ] **Purposeful Micro-interactions:** Use subtle animations and visual feedback for user actions (hovers, clicks, form submissions, status changes).
  - [ ] Feedback should be immediate and clear.
  - [ ] Animations should be quick (150-300ms) and use appropriate easing (e.g., ease-in-out).
- [ ] **Loading States:** Implement clear loading indicators (skeleton screens for page loads, spinners for in-component actions).
- [ ] **Transitions:** Use smooth transitions for state changes, modal appearances, and section expansions.
- [ ] **Avoid Distraction:** Animations should enhance usability, not overwhelm or slow down the user.
- [ ] **Keyboard Navigation:** Ensure all interactive elements are keyboard accessible and focus states are clear.

## V. CSS & Styling Architecture

- [ ] **Use TailwindCSS:** TailwindCSS > 4.0 version should be use within CSS-First configuration
- [ ] **Integrate Design Tokens:** Ensure colors, fonts, spacing, radii tokens are directly usable with tailwindCSS.
- [ ] **Maintainability & Readability:** Code should be well-organized and easy to understand.
- [ ] **Performance:** Use lazy loading for heavy assets.

## VI. General Best Practices

- [ ] **Iterative Design & Testing:** Continuously test with users and iterate on designs.
- [ ] **Clear Information Architecture:** Organize content and navigation logically.
- [ ] **Responsive Design:** Ensure the dashboard is fully functional and looks great on all device sizes (desktop, tablet, mobile).
- [ ] **Documentation:** Maintain clear documentation for the design system and components.
