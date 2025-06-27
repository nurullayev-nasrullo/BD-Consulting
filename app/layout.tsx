import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/ui/cookie-consent';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'BUSINESS DIPLOMAT - Consulting Services',
  description: 'Transforming business through intelligent solutions. BUSINESS DIPLOMAT provides analytics, process enhancement, and digital transformation services.',
  keywords: 'business intelligence, analytics, digital transformation, process automation, data modeling, consulting services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  );
}