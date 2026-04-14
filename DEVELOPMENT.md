# Rights Action Lab - Development Documentation

This document outlines the technical architecture, development process, and feature implementation guidelines for the Rights Action Lab website.

## Tech Stack

- **Frontend**: React 18+ with Vite
- **Styling**: Tailwind CSS 4.0
- **Animations**: Motion (formerly Framer Motion)
- **Icons**: Lucide React
- **Components**: shadcn/ui (Radix UI based)
- **Backend**: Express.js (serving static files and handling API routes)
- **Donations**: Donately Integration

## Project Structure

- `/src/App.tsx`: Main application entry point containing the Router and Routes.
- `/src/pages/`: Contains individual page components (Home, Projects, About, Donate).
- `/src/components/Layout.tsx`: Shared layout component including Navbar and Footer.
- `/src/constants.ts`: Centralized site content, project details, and team information.
- `/src/index.css`: Global styles, typography, and Tailwind theme configuration.
- `/components/ui/`: Reusable UI components from shadcn/ui.
- `/server.ts`: Express server configuration.

## Development Process

### 1. Local Development
Run the development server:
```bash
npm run dev
```
This starts the Express server which proxies to Vite in development mode.

### 2. Routing
The site uses `react-router-dom` for navigation. To add a new page:
1. Create a new component in `src/pages/`.
2. Add a new `<Route>` in `src/App.tsx`.
3. Update the `navLinks` in `src/components/Layout.tsx` to include the new path.

### 2. Content Updates
Most text content is managed in `src/constants.ts`. To update project descriptions, team bios, or the mission statement, modify the `SITE_CONTENT` object.

### 3. Styling Guidelines
The site follows a **Traditional Institutional** aesthetic:
- **Typography**: 
  - Headings: `Cormorant Garamond` (Serif)
  - Body/UI: `Inter` (Sans-serif)
- **Colors**:
  - Primary: Institutional Navy (`oklch(0.25 0.05 260)`)
  - Secondary: Muted Gold (`oklch(0.9 0.03 85)`)
  - Background: Warm Paper (`oklch(0.99 0.01 85)`)

### 4. Adding New Features
1. **Component Creation**: Add new UI components to `src/components/` or use `npx shadcn@latest add [component]`.
2. **Pattern Consistency**: Use the `render` prop pattern for components that need to render as a different element (e.g., `Button` as an `<a>` tag).
3. **Responsive Design**: Always use Tailwind's mobile-first prefixes (`sm:`, `md:`, `lg:`) to ensure layout integrity across devices.

## Feature Implementation Process

### Donation Integration (Donately)
The donation form is integrated via the `DonatelyForm` component in `App.tsx`.
- **Configuration**: Update `donatelyId` in `src/constants.ts`.
- **Script Loading**: The Donately script is loaded dynamically on component mount to ensure performance.

## Maintenance
- **Dependencies**: Keep `package.json` updated.
- **Security**: Ensure API keys (like `GEMINI_API_KEY`) are managed via environment variables and never committed to source control.
