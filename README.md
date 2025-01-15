# 🐕 Project Wylie Dog

A modern, accessible React component library and design system built with TypeScript, Radix UI, and Tailwind CSS.

## Features

- 🎨 Comprehensive UI component library built on Radix UI primitives
- 📱 Responsive design using Tailwind CSS
- ⚡️ Powered by Vite for fast development and building
- 🔍 Type-safe development with TypeScript in strict mode
- 📚 Component documentation and testing with Storybook
- 📋 Form handling with React Hook Form and Zod validation
- 🌙 Dark mode support with next-themes
- 📊 Data visualization with Recharts
- 🎭 Animation support via tailwindcss-animate

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

## Project Structure

```
wyliedog/
├── src/
│   ├── components/    # Reusable UI components
│   ├── hooks/        # Custom React hooks
│   ├── layouts/      # Layout components
│   ├── lib/          # Utility functions
│   ├── pages/        # Page components
│   └── stories/      # Storybook documentation
├── .storybook/       # Storybook configuration
└── public/           # Static assets
```

## Core Technologies

- **React** - UI framework
- **TypeScript** - Type safety and developer experience
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Storybook** - Component development and documentation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Recharts** - Data visualization

## Component Usage

Components are built using Radix UI primitives and styled with Tailwind CSS. Here's a basic example:

```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function Example() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Content>
        <Button>Click Me</Button>
      </Card.Content>
    </Card>
  )
}
```

## Design Principles

1. **Accessibility First**: All components are built with accessibility in mind using Radix UI primitives.
2. **Type Safety**: Strict TypeScript configuration ensures type safety across the project.
3. **Responsive Design**: Mobile-first approach using Tailwind CSS.
4. **Component-Driven**: Modular components designed for reusability and composition.
5. **Performance**: Optimized bundle size and runtime performance.

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

- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for build tooling
- [Storybook](https://storybook.js.org/) for component documentation

## Contact

Travis Hall - [@travhall](https://github.com/travhall)

Project Link: [https://github.com/travhall/wyliedog](https://github.com/travhall/wyliedog)