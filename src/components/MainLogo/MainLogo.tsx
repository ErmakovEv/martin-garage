import { Box } from '@mui/material';
import logo from '/logo.png';
import './MainLogo.css';

function MainLogo() {
  return (
    <>
      <Box component={'div'} className="logo-container">
        <div className="logo">
          <img src={logo} alt="logo1" className="logo-img" />
        </div>
      </Box>
      <Box
        component={'div'}
        className="logo-container"
        sx={{
          textAlign: 'center',
          color: 'white',
          fontSize: '14px',
          mt: 0,
          pt: 0,
          lineHeight: 1,
        }}
      >
        +7 (999) 000-11-22 <br /> 10:00 - 21:00
      </Box>
    </>
  );
}

export default MainLogo;
