import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Resume',
  description: 'Interactive multilingual resume built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className="bg-zinc-200 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100"> */}
      <body className="bg-[var(--page-bg)] text-zinc-900 antialiased dark:text-zinc-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}