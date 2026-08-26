import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'MxDev — Isah Muhammad | Full-Stack Developer',
  description:
    'The portfolio of Isah Muhammad, a Nigerian full-stack developer building reliable, scalable and thoughtful digital experiences.',
  generator: 'MxDev',

  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}