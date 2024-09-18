import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function CommonLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-64px)] bg-secondary mt-[64px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
