# 🐕 Project Wylie Dog

A modern, accessible React component library and design system built with TypeScript, shadcn/ui, Radix UI, and Tailwind CSS.

## Features

- 🎨 Comprehensive UI component library built on shadcn/ui and Radix UI primitives
- 📱 Responsive design using Tailwind CSS
- ⚡️ Powered by Vite for fast development and building
- 🔍 Type-safe development with TypeScript in strict mode
- 📚 Component documentation and testing with Storybook
- 📋 Form handling with React Hook Form and Zod validation
- 🌙 Dark mode support with next-themes
- 📊 Data visualization with Recharts
- 🎭 Animation support via tailwindcss-animate
- 🧩 Customizable and maintainable components via shadcn/ui

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/travhall/wyliedog.git

# Navigate to the project directory
cd wyliedog

# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Open Storybook
pnpm storybook
```

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview the production build
- `pnpm lint` - Run ESLint
- `pnpm storybook` - Start Storybook development server
- `pnpm build-storybook` - Build Storybook for production
- `pnpm shadcn-ui` - Add new shadcn/ui components

## Project Structure

```
wyliedog/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Layout components
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   └── stories/         # Storybook documentation
├── components.json      # shadcn/ui configuration
├── .storybook/         # Storybook configuration
└── public/             # Static assets
```

## Core Technologies

- **React** - UI framework
- **TypeScript** - Type safety and developer experience
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Reusable component system
- **Radix UI** - Accessible component primitives
- **Storybook** - Component development and documentation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Recharts** - Data visualization

## Component Usage

Components are built using shadcn/ui, which is based on Radix UI primitives and styled with Tailwind CSS. Here's a basic example:

```tsx
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  )
}
```

## Adding New Components

The project uses shadcn/ui for component management. To add a new component:

```bash
# Add a new shadcn/ui component
pnpm shadcn-ui add [component-name]

# Example: Add button component
pnpm shadcn-ui add button
```

## Design Principles

1. **Accessibility First**: All components are built with accessibility in mind using Radix UI primitives.
2. **Type Safety**: Strict TypeScript configuration ensures type safety across the project.
3. **Responsive Design**: Mobile-first approach using Tailwind CSS.
4. **Component-Driven**: Modular components designed for reusability and composition.
5. **Performance**: Optimized bundle size and runtime performance.
6. **Maintainability**: Leveraging shadcn/ui for sustainable component development.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for the component system
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for build tooling
- [Storybook](https://storybook.js.org/) for component documentation

## Contact

Travis Hall - [@travhall](https://github.com/travhall)

Project Link: [https://github.com/travhall/wyliedog](https://github.com/travhall/wyliedog)