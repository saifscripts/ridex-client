import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function CommonLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100svh-64px)] mt-[64px] overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
