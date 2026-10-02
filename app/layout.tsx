import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import { Header } from '@/components/navigation/header';
import { Footer } from '@/components/navigation/footer';
import { CartDrawer } from '@/components/cart/cart-drawer';

export const metadata: Metadata = {
  title: 'Nicola Benyahia — Trauma Therapist • Coach • Creator of RECLAIM™',
  description:
    'Trauma-informed counselling, signature RECLAIM™ programme, transformational coaching, and Lemmy Lou & Friends children’s emotional wellbeing resources by Nicola Benyahia MBE.',
  openGraph: {
    title: 'Nicola Benyahia — Trauma Therapist • Coach • Creator of RECLAIM™',
    description:
      'Trauma-informed counselling, signature RECLAIM™ programme, transformational coaching, and Lemmy Lou & Friends children’s emotional wellbeing resources by Nicola Benyahia MBE.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicola Benyahia — Trauma Therapist • Coach • Creator of RECLAIM™',
    description:
      'Trauma-informed counselling, signature RECLAIM™ programme, transformational coaching, and Lemmy Lou & Friends children’s emotional wellbeing resources by Nicola Benyahia MBE.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1E1B] antialiased">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
