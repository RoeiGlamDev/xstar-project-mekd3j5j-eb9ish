import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Generated App',
  description: 'Created by Xstar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}