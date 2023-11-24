import { Box } from '@mui/material';
import logo from '../../../public/logo.png';
import './MainLogo.css';

function MainLogo() {
  return (
    <Box component={'div'} className="logo-container">
      <a href="#" className="logo">
        <img src={logo} alt="logo1" className="logo-img" />
      </a>
    </Box>
  );
}

export default MainLogo;
