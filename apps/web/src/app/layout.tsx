import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@rethinking-siakad/ui';
import Sidebar from '../ui/layout/sidebar';
import Header from '../ui/layout/header';
import Footer from '../ui/layout/footer';

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
      <body className="bg-background flex min-h-screen flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-start">
            <Sidebar />
            <section className="flex flex-1 flex-col justify-between">
              <div>
                <Header />
                <main className=" p-5">{children}</main>
              </div>
              <Footer />
            </section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
