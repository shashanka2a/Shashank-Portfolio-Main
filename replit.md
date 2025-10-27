# Portfolio Landing Page

## Overview

This is a modern portfolio website for Shashank Jagannatham, a full-stack developer and startup builder. The project is built using Next.js with a Spider-Man themed design that showcases projects, achievements, and personal branding. The site features interactive elements, smooth animations, and a comprehensive UI component library.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 14.2.15** with TypeScript for server-side rendering and static site generation
- **Pages Router** architecture for routing and page management
- **React 18.3.1** as the core UI library with hooks for state management

### Styling and UI Components
- **Tailwind CSS** for utility-first styling with custom color schemes and responsive design
- **shadcn/ui component library** providing a comprehensive set of accessible UI components built on Radix UI primitives
- **Framer Motion 11.11.17** for advanced animations and page transitions
- **Custom theme system** with CSS variables for consistent design tokens

### Component Architecture
- **Modular component structure** with reusable UI components in `/src/components/ui/`
- **Custom components** for Spider-Man themed elements (EasterEggSpidey, OriginBadge)
- **ImageWithFallback component** for graceful image loading with error handling
- **Responsive design** with mobile-first approach

### Animation and Interactions
- **Scroll-based animations** using Framer Motion for progress tracking and element reveals
- **Interactive badge system** with unlock mechanics based on user engagement
- **Smooth transitions** between different sections and states
- **Easter egg animations** integrated into the Spider-Man theme

### Development Tools
- **TypeScript** for type safety and better development experience
- **ESLint** with Next.js configuration for code quality
- **PostCSS with Autoprefixer** for CSS processing
- **Path aliases** configured for clean imports (`@/*` mapping to `src/*`)

### Build and Deployment
- **Next.js build system** with optimized static exports
- **Image optimization** disabled for broader hosting compatibility
- **Custom headers** configuration for security and frame options
- **Vercel Analytics** integration for performance monitoring

## External Dependencies

### UI and Animation Libraries
- **@radix-ui/* components** - Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **framer-motion** - Animation library for smooth transitions and interactions
- **lucide-react** - Icon library for consistent iconography
- **embla-carousel-react** - Carousel component for project showcases

### Styling Dependencies
- **tailwindcss** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant handling for components
- **clsx** and **tailwind-merge** - Conditional class name utilities

### Form and Input Handling
- **react-hook-form** - Form state management and validation
- **react-day-picker** - Date picker component
- **input-otp** - OTP input component
- **cmdk** - Command palette component

### Analytics and Monitoring
- **@vercel/analytics** - Web analytics for performance tracking

### Theme Management
- **next-themes** - Theme switching functionality for dark/light modes

### Development Dependencies
- **Google Fonts** - Custom font loading for Comic Neue and Bangers fonts
- **Custom favicon system** with SVG and ICO formats for broad browser support