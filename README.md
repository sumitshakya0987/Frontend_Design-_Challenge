# Frontend Design Challenge: Cybersecurity SaaS Platform

A production-grade React implementation of a B2B SaaS security platform, focusing on high-density data visualization, complex UI components, and seamless user experience across multiple security-critical screens.

## 🚀 Overview

This project translates a complex set of UI/UX design references into a functional, responsive application. It features a modern security "command center" aesthetic with deep integration for both Dark and Light modes.

### Key Screens
- **Sign-up Interface**: Split-layout with interactive form elements and premium branding.
- **Security Dashboard**: High-density scan overview with severity-coded statistics and filterable lists.
- **Active Scan Detail**: Live terminal-style console and vulnerability finding log with real-time status tracking.

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router 7

## ⚙️ Setup & Installation

I used `npm` for dependency management. Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sumitshakya0987/Frontend_Design-_Challenge
   cd Frontend_Design_Challenge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🧠 Design Decisions & Implementation

- **Thematic Consistency**: Implemented a custom context provider for theme management, ensuring zero layout shift and consistent color token application across all modes.
- **Component Architecture**: Built a modular design system of base components (Button, Card, Badge, Chip) to ensure 1:1 UI accuracy with the design reference.
- **Interactive Feedback**: Developed a custom Toast notification system using Framer Motion to provide professional, non-intrusive feedback for primary user actions (New Scan, Export, Sign Out).
- **Responsiveness**: Used a mobile-first approach for the sidebar and data tables, utilizing CSS Grid and Flexbox for seamless scaling from 375px to 1440px+.

## ⚠️ Known Limitations

- **Mock Data**: Currently uses static mock data to populate the log console and findings list.
- **Auth Persistence**: The sign-up flow is a UI-only simulation; session states are not persisted in local storage or a backend database.
- **Placeholder Pages**: Sections like "Projects" and "Schedule" are currently implemented as descriptive placeholder pages.

