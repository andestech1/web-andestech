# AGENTS.md - AndesTech Web Project Guidelines

## Build & Development Commands

```bash
npm run dev      # Start development server (next dev)
npm run build   # Build for production (next build)
npm run start   # Start production server (next start)
npm run lint    # Run ESLint on entire project
```

### Running a Single Test
**No test framework is currently configured.** To add tests, consider installing Jest with React Testing Library or Vitest.

### Type Checking
```bash
npx tsc --noEmit    # Run TypeScript compiler check
```

## Project Structure

```
/                    # Root
├── app/              # Next.js App Router pages
├── components/       # React components
│   └── ui/           # Reusable UI components (Radix-based)
├── lib/              # Utilities (utils.ts)
├── public/           # Static assets
└── package.json      # Dependencies and scripts
```

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **UI**: React 19, Tailwind CSS v4, Radix UI primitives
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Path Alias**: `@/*` maps to project root

## Code Style Guidelines

### Imports

```typescript
// Use path alias for project imports
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Third-party imports
import { useState, useEffect } from "react"
import { SomeIcon } from "lucide-react"
```

### Component Structure

```typescript
"use client"  // Required for client-side interactivity

import { useState, useEffect } from "react"
import { SomeComponent } from "@/components/some-component"
import { SomeIcon } from "lucide-react"

export function MyComponent() {
  // Hooks first
  const [state, setState] = useState(false)

  // Then handlers
  const handleClick = () => { /* ... */ }

  // Then render
  return (
    <section>
      {/* JSX */}
    </section>
  )
}
```

### Styling with Tailwind

- Use `cn()` utility from `@/lib/utils` for conditional classes
- Use CVA (class-variance-authority) for component variants
- Use Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`

```typescript
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const componentVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "variant-classes",
      outline: "outline-classes",
    },
    size: {
      default: "h-9 px-4",
      sm: "h-8 px-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})
```

### Naming Conventions

- **Components**: PascalCase (`HeroSection`, `Button`)
- **Files**: kebab-case (`hero-section.tsx`, `some-component.tsx`)
- **Functions**: camelCase (`handleClick`, `fetchData`)
- **Constants**: UPPER_SNAKE_CASE (if needed)
- **Props interfaces**: `ComponentNameProps`

### Types
- Use strict mode, define explicit return types when non-trivial
- Use `type` for simple objects, interfaces for complex ones
- Avoid `any`, use `unknown` when type is truly unknown

### Error Handling
- Use try/catch for async operations with user-friendly messages

### Accessibility (a11y)
- Use Radix UI primitives, include `aria-invalid` on form errors
- Use `rel="noopener noreferrer"` on external links

### Next.js Specific
- Use `next/image` for images (always include `alt`)
- Use `next/link` for internal navigation
- Place static assets in `/public`
- Use Server Components by default, add `"use client"` only when needed

### What NOT to Do
- Do NOT use `eslint-disable` unless absolutely necessary
- Do NOT commit secrets or API keys
- Do NOT use inline styles (use Tailwind classes)
- Do NOT use `any` type
- Do NOT create files outside project structure without good reason

## Common Tasks

### Adding a New UI Component
1. Create file in `components/ui/`
2. Use Radix UI primitive as base
3. Define variants with CVA
4. Export component and variants

### Adding a New Page
1. Create route in `app/` (e.g., `app/about/page.tsx`)
2. Use `export default function Page() { ... }`
3. Import and use components from `components/`

### Running the Project
```bash
npm run dev
# Visit http://localhost:3000
```
