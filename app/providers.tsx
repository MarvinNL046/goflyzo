"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

type ProviderProps = {
  children: React.ReactNode
} & Parameters<typeof NextThemesProvider>[0]

export function Providers({ 
  children, 
  ...props 
}: ProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
