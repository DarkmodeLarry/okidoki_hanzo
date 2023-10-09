import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Separator } from '@/components/ui/separator'
import NavBar from '@/components/NavBar'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OkiDoki',
  description: 'Created by: @Hanzokeyz'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        className={cn(inter.className, 'dark')}
        style={{
          colorScheme: 'dark'
        }}
      >
        <body>
          <ThemeProvider>
            <div className=' dark:bg-black flex flex-col items-center w-full min-h-screen'>
              <NavBar />
              <Separator />
              <main className='dark:bg-neutral-950 flex items-center justify-center flex-grow w-full'>
                {children}
                <Toaster />
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
