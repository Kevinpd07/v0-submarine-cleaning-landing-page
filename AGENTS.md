# AGENTS.md - Development Guidelines for This Project

## Project Overview
- **Type**: Next.js 16 landing page for submarine cleaning services
- **Stack**: Next.js, React 19, TypeScript, Tailwind CSS v4, Radix UI
- **Language**: English (bilingual ES/EN support built-in)

---

## Build / Lint / Test Commands

```bash
# Development
npm run dev          # Start Next.js dev server

# Build
npm run build        # Production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint on entire project
```

**No test framework configured** - Do not add tests unless explicitly requested.

---

## Code Style Guidelines

### General
- Use TypeScript for all files (.ts/.tsx)
- Enable strict TypeScript checking
- Use `"use client"` directive for client-side components
- Avoid `any` type - use proper typing or `unknown` when necessary

### Imports
- Order: React imports → external libraries → internal components/hooks → utilities
- Use path alias `@/` for internal imports (e.g., `@/components/ui/button`)
- Group imports by type with blank lines between groups
```tsx
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsApp } from "@/components/whatsapp-context";
```

### Naming Conventions
- **Components**: PascalCase (e.g., `Header`, `WhatsAppModal`)
- **Hooks**: camelCase with `use` prefix (e.g., `useWhatsApp`, `useLanguage`)
- **Context Providers**: PascalCase with `Provider` suffix (e.g., `WhatsAppProvider`)
- **Files**: kebab-case for components (e.g., `whatsapp-context.tsx`)
- **Utility functions**: camelCase (e.g., `cn`, `formatDate`)

### Component Patterns

**Context Providers:**
```tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ContextType {
  // define types
}

const Context = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  // implementation
}

export function useContextName() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContextName must be used within ContextProvider");
  }
  return context;
}
```

**UI Components:**
- Use Radix UI primitives for complex components
- Use `cva` (class-variance-authority) for component variants when needed
- Use `cn` utility for Tailwind class merging

### Tailwind CSS
- Use Tailwind CSS v4 syntax
- Use arbitrary values sparingly
- Prefer semantic class names
- Use `backdrop-blur` and opacity modifiers for overlays

### Error Handling
- Use try/catch for async operations
- Always provide user feedback on errors (toast notifications)
- Context hooks must throw descriptive errors if used outside provider

### File Organization
```
/app           # Next.js app router pages
/components    # React components
  /ui          # Reusable UI primitives
/lib           # Utility functions
/public        # Static assets
```

### Strings / Internationalization
- Use the `useLanguage` hook for bilingual text
- Pattern: `t({ es: "Spanish text", en: "English text" })`

### What NOT to Do
- Don't use `console.log` in production code
- Don't commit secrets or API keys
- Don't add new dependencies without approval
- Don't use CSS files - use Tailwind only
- Don't create new test files (no test framework)
