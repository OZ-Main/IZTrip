import { type ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { LanguageProvider } from '@/app/i18n/LanguageProvider'
import { ThemeProvider } from '@/app/theme/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'

import { AuthBootstrap } from './AuthBootstrap'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AuthBootstrap>
            {children}
            <Toaster position="top-right" richColors closeButton />
          </AuthBootstrap>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
