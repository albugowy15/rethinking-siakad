import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ScrollArea, ThemeProvider } from '@rethinking-siakad/ui';
import Header from '../ui/layout/header';
import Footer from '../ui/layout/footer';
import Sidebar from '../ui/layout/sidebar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'SIAKAD Web',
  description: 'Rethinking SIAKAD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-background min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <div>
                <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                  <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                    <ScrollArea className="h-full py-6 pr-6 lg:py-8">
                      <Sidebar />
                    </ScrollArea>
                  </aside>
                  <main className="relative pt-6">{children}</main>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
