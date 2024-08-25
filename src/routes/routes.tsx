import { MainLayout } from '@/components/layout/MainLayout';
import AboutUs from '@/pages/AboutUs';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
