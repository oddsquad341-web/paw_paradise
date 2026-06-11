import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';
import ScrollToTop from './ScrollToTop';
import ScrollProgress from './ScrollProgress';
import { useReveal } from '@/hooks/useReveal';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useReveal();

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f4f1e5' }}>
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
