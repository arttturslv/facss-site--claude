<!-- @format -->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite project for the FACSS (Fundação para o Apoio e Capacitação de Startups e Sociedades) website. The project uses modern web technologies including React 19, TypeScript, Tailwind CSS, and shadcn/ui components.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build` (runs TypeScript compiler then Vite build)
- **Run linting**: `npm run lint`
- **Preview production build**: `npm run preview`

## Architecture & Structure

### Path Aliases

The project uses path aliases configured in both `vite.config.ts` and `tsconfig.app.json`:

- `@/*` maps to `./src/*`
- Components are organized under `@/components`
- Utilities under `@/lib`
- UI components under `@/components/ui`

### Component Architecture

- **shadcn/ui Integration**: Uses shadcn/ui component system with configuration in `components.json`
- **Style**: "new-york" variant with Tailwind CSS
- **Base Color**: Slate
- **CSS Variables**: Enabled for theming

### Main Application Structure

- **Entry Point**: `src/main.tsx`
- **Root Component**: `src/App.tsx` - Contains the main FACSS website layout
- **Styling**:
  - Global styles in `src/index.css`
  - Component styles in `src/App.css`
  - Tailwind configuration in `tailwind.config.mjs`

### Key Dependencies

- **React 19**: Latest React with concurrent features
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui components**: class-variance-authority, clsx, tailwind-merge, lucide-react
- **TypeScript**: Strict mode enabled with comprehensive linting rules

### Build & Tooling

- **Vite**: Fast build tool with HMR
- **ESLint**: Configured with TypeScript, React hooks, and React refresh rules
- **PostCSS**: For Tailwind processing
- **TypeScript**: Strict configuration with path mapping

## Code Style Guidelines

### TypeScript Configuration

- Strict mode enabled with comprehensive linting
- `noUnusedLocals` and `noUnusedParameters` enforced
- Modern ES2022 target with DOM libraries
- JSX transformed to `react-jsx`

### Component Patterns

- The main App.tsx uses placeholder images with `/api/placeholder/` URLs
- Components follow shadcn/ui patterns and conventions
- Utility functions use clsx/tailwind-merge for conditional styling

### Styling Approach

- Dark theme primary (`bg-[#0e131f]`)
- Tailwind utility classes for styling
- CSS-in-JS avoided in favor of utility classes
- Responsive design patterns using Tailwind breakpoints

### Quick Visual Check

**IMMEDIATELY after implementing any front-end change:**

1. **Identify what changed** - Review the modified components/pages
2. **Navigate to affected pages** - Use `mcp__playwright__browser_navigate` to visit each changed view
3. **Verify design compliance** - Compare against `/context/design-principles.md` and the Figma frame image
4. **Validate feature implementation** - Ensure the change fulfills the user's specific request
5. **Check acceptance criteria** - Review any provided context files or requirements
6. **Capture evidence** - Take full page screenshot at desktop viewport (1440px) of each changed view
7. **Check for errors** - Run `mcp__playwright__browser_console_messages`

This verification ensures changes meet design standards and user requirements.

### Comprehensive Design Review

For significant UI changes or before merging PRs, use the design review agent:

```bash
# Option 1: Use the slash command
/design-review

# Option 2: Invoke the agent directly
@agent-design-review
```

The design review agent will:

- Test all interactive states based on the Figma frame
- Verify responsiveness (desktop/tablet/mobile)
- Check accessibility (WCAG 2.1 AA compliance)
- Validate visual polish and consistency
- Test edge cases and error states
- Provide categorized feedback (Blockers/High/Medium/Nitpicks)

### Playwright MCP Integration

#### Essential Commands for UI Testing

```javascript
// Navigation & Screenshots
mcp__playwright__browser_navigate(url); // Navigate to page
mcp__playwright__browser_take_screenshot(); // Capture visual evidence
mcp__playwright__browser_resize(width, height); // Test responsiveness

// Interaction Testing
mcp__playwright__browser_click(element); // Test clicks
mcp__playwright__browser_type(element, text); // Test input
mcp__playwright__browser_hover(element); // Test hover states

// Validation
mcp__playwright__browser_console_messages(); // Check for errors
mcp__playwright__browser_snapshot(); // Accessibility check
mcp__playwright__browser_wait_for(text / element); // Ensure loading
```

### Design Compliance Checklist

When implementing UI features, verify:

- [ ] **Visual Hierarchy**: Clear focus flow, appropriate spacing
- [ ] **Consistency**: Uses design tokens, follows patterns
- [ ] **Responsiveness**: Works on mobile (375px), tablet (768px), desktop (1440px)
- [ ] **Accessibility**: Keyboard navigable, proper contrast, semantic HTML
- [ ] **Performance**: Fast load times, smooth animations (150-300ms)
- [ ] **Error Handling**: Clear error states, helpful messages
- [ ] **Polish**: Micro-interactions, loading states, empty states

## When to Use Automated Visual Testing

### Use Quick Visual Check for:

- Every front-end change, no matter how small
- After implementing new components or features
- When modifying existing UI elements
- After fixing visual bugs
- Before committing UI changes

### Use Comprehensive Design Review for:

- Major feature implementations
- Before creating pull requests with UI changes
- When refactoring component architecture
- After significant design system updates
- When accessibility compliance is critical

### Skip Visual Testing for:

- Backend-only changes (API, database)
- Configuration file updates
- Documentation changes
- Test file modifications
- Non-visual utility functions

## Additional Context

- Design review agent configuration: `/.claude/agents/design-review-agent.md`
- Design principles checklist: `/context/design-principles.md`
- Custom slash commands: `/context/design-review-slash-command.md`
