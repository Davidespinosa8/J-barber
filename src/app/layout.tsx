import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// _app.js
import 'tailwindcss/tailwind.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'J·Barber',
  description: 'Barbería con Estilo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
