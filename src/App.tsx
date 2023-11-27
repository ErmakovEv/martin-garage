import Pages from './components/Pages/Pages';
import { createTheme, ThemeProvider } from '@mui/material';

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Pages />
      </div>
    </ThemeProvider>
  );
}

export default App;
