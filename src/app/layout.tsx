import type { Metadata } from 'next';
import { Inter, Orbitron, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rishisuperyo | The Price Of Fate Haunts Everyone',
  description: '"The Price Of Fate Haunts Everyone" — Chronicles 2019–2026. Pre-alpha deployment documenting code, bot architectures, and Armada Web OS.',
  keywords: [
    'Rishisuperyo',
    'Armada Web OS',
    'Armada.tech',
    'Armada WebNova',
    'Cyberlegends',
    'Old Groups Finder',
    'Interactive Autobiography',
    'Developer Portfolio'
  ],
  authors: [{ name: 'Rishisuperyo', url: 'https://rishisuperyo.me' }],
  metadataBase: new URL('https://rishisuperyo.me'),
  alternates: {
    canonical: 'https://rishisuperyo.me',
  },
  openGraph: {
    title: 'Rishisuperyo | The Evolution',
    description: 'An interactive scroll-driven autobiography documenting 2019–2026: code, creation, competition, and rebuilding.',
    url: 'https://rishisuperyo.me',
    siteName: 'Rishisuperyo',
    images: [
      {
        url: '/characters/prime.png',
        width: 1200,
        height: 630,
        alt: 'Rishisuperyo - The Evolution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishisuperyo | The Evolution',
    description: 'An interactive scroll-driven autobiography documenting 2019–2026.',
    images: ['/characters/prime.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <head>
        <link rel="icon" href="/characters/prime.png" type="image/png" />
      </head>
      <body className="bg-[#05070B] text-slate-100 antialiased font-sans selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
