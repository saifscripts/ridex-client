import DashboardLayout from '@/components/layout/DashboardLayout/DashboardLayout';
import ErrorPage from '@/components/layout/ErrorPage';
import { MainLayout } from '@/components/layout/MainLayout';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import PublicRoute from '@/components/layout/PublicRoute';
import { USER_ROLE } from '@/constants';
import AboutUs from '@/pages/AboutUs';
import BikeDetails from '@/pages/BikeDetails';
import Bikes from '@/pages/Bikes';
import ManageBikes from '@/pages/dashboard/ManageBikes';
import ManageRentals from '@/pages/dashboard/ManageRentals';
import ManageUsers from '@/pages/dashboard/ManageUsers';
import MyRentals from '@/pages/dashboard/MyRentals';
import Profile from '@/pages/dashboard/Profile';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'bikes',
        element: <Bikes />,
      },
      {
        path: 'bike/:bikeId',
        element: <BikeDetails />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: 'signup',
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
            <Profile />,
          </ProtectedRoute>
        ),
      },
      {
        path: '/dashboard/bikes',
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.USER]}>
            <Bikes />,
          </ProtectedRoute>
        ),
      },
      {
        path: '/dashboard/my-rentals',
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.USER]}>
            <MyRentals />,
          </ProtectedRoute>
        ),
      },
      {
        path: '/dashboard/manage-bikes',
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN]}>
            <ManageBikes />,
          </ProtectedRoute>
        ),
      },
      {
        path: '/dashboard/manage-rentals',
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN]}>
            <ManageRentals />,
          </ProtectedRoute>
        ),
      },
      {
        path: '/dashboard/manage-users',
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN]}>
            <ManageUsers />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
