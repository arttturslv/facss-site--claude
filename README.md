# FACSS Website

A modern, responsive React website for FACSS built with React 19, TypeScript, and Tailwind CSS.
<img width="1920" height="4247" alt="screencapture-localhost-5173-2025-09-09-13_33_25" src="https://github.com/user-attachments/assets/54cc414b-a922-4553-8f29-4d5fdd49334c" />

## 🚀 Features

- **Modern React 19** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **shadcn/ui components** for consistent design system
- **Responsive design** optimized for mobile, tablet, and desktop
- **Animated sections** with floating effects and smooth transitions
- **Contact form** with validation and user feedback
- **Component-based architecture** for maintainability

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Static type checking
- **Vite** - Fast build tool with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **ESLint** - Code linting and formatting

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher)

You can check your versions by running:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd facss-site
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── components/
│   ├── sections/           # Main page sections
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TrustedBySection.tsx
│   │   ├── SolutionsSection.tsx
│   │   ├── TechnologiesSection.tsx
│   │   ├── ResultsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── AnimatedSection.tsx  # Animation wrapper component
│   ├── AnimatedCounter.tsx  # Animated number counter
│   ├── ContactForm.tsx      # Contact form component
│   └── InfiniteScroll.tsx   # Infinite scrolling component
├── App.tsx                  # Main application component
├── App.css                  # Global styles and animations
├── index.css                # Tailwind imports and base styles
└── main.tsx                 # Application entry point
```

## 🎨 Component Architecture

The application follows a modular component architecture:

- **Main App.tsx** - Contains the overall layout and section orchestration
- **Section Components** - Each major page section is its own component
- **Reusable Components** - Shared components like AnimatedSection, ContactForm
- **Utility Components** - Helper components for animations and interactions

## 🔧 Configuration

### Path Aliases
The project uses path aliases for cleaner imports:
- `@/*` maps to `./src/*`

### Styling Configuration
- **Tailwind CSS** with custom color palette
- **shadcn/ui** component system with "new-york" variant
- **CSS Variables** enabled for theming

### Build Configuration
- **TypeScript** with strict mode enabled
- **Vite** for fast development and optimized production builds
- **ESLint** with React and TypeScript rules

## 🌐 Browser Support

This project supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 375px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1440px and up

## ⚡ Performance Features

- **Code splitting** with dynamic imports
- **Optimized animations** with CSS transforms
- **Lazy loading** for better initial load times
- **Compressed assets** in production builds

## 🎯 Accessibility

The website follows WCAG 2.1 AA guidelines:
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast mode support
- Screen reader compatibility

## 📊 Development

### Code Quality
- TypeScript for type safety
- ESLint for code consistency
- Prettier formatting (configured in ESLint)
- Strict mode enabled

### Animation System
- CSS keyframes for smooth animations
- Intersection Observer for scroll-triggered animations
- Reduced motion support for accessibility

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

### Environment Variables
No environment variables are required for basic functionality.

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for all new components
3. Ensure responsive design for all screen sizes
4. Test thoroughly before committing
5. Run linting before submitting changes

## 📄 License

This project is proprietary to FACSS (Fundação para o Apoio e Capacitação de Startups e Sociedades).

## 🆘 Support

For technical support or questions about the project, please contact the development team.

---

Built with ❤️ by the FACSS development team.
