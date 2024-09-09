import { Toaster } from '@/components/ui/toaster';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { persistor, store } from './redux/store.ts';
import router from './routes/routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </PersistGate>
    </Provider>
    <Toaster />
  </StrictMode>
);
