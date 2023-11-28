import { Suspense, lazy } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

import SpinnerMask from './components/SpinnerMask/SpinnerMask';

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
  return (
    <Suspense fallback={<SpinnerMask />}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <LazyMain />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
