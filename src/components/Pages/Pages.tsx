import { Box } from '@mui/material';
import MainPage from '../MainPage/MainPage';
import SwipeableEdgeDrawer from '../SwipeableDrawer/SwipeableDrawer';
import './Pages.css';

function Pages() {
  return (
    <div className="container">
      <section>
        <MainPage />
        <Box component="div" sx={{ position: 'absolute' }}>
          <SwipeableEdgeDrawer />
        </Box>
      </section>
    </div>
  );
}

export default Pages;
