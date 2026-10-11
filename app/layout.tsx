import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header, MobileActionBar } from './components/Shell';

export const metadata: Metadata = {
  metadataBase: new URL('https://matrixdemolition.com'),
  title: { default: 'Matrix Demolition LLC | Demolition & Excavation', template: '%s | Matrix Demolition LLC' },
  description: 'Family-owned demolition, excavation, and site development services since 1989.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><MobileActionBar /></body></html>;
}
