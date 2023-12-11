import { Suspense, lazy } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './components/RootLayout/RootLayout';
import SpinnerMask from './components/SpinnerMask/SpinnerMask';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FormPage from './components/Pages/FormPage';
const LazyMain = lazy(() => import('./components/Main/Main'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#29b249',
    },
  },
  typography: {
    fontFamily: ['"Oswald"'].join(','),
  },
});

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<LazyMain />} />
        {/* <Route
          path="/dashboard"
          element={
            // eslint-disable-next-line no-nested-ternary
            !isLoggedIn ? (
              <Navigate to="/login" />
            ) : isAdmin ? (
              <AdminPage />
            ) : (
              <MainPage />
            )
          }
        /> */}
        <Route path="/form" element={<FormPage />} />
        {/* <Route
          path="/login"
          element={
            // eslint-disable-next-line no-nested-ternary
            !isLoggedIn ? (
              <LoginPage />
            ) : userProfile ? (
              <Navigate to="/dashboard" />
            ) : (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            )
          }
        /> */}
      </Route>
    )
  );

  return (
    <Suspense fallback={<SpinnerMask />}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
