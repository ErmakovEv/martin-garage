// import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Badge } from '@mui/material';
import Button from '@mui/material/Button';
import MainLogo from '../MainLogo/MainLogo';
import ToggleButton from '../ToggleButton/ToggleButton';
import '../MainLogo/MainLogo.css';
import './Header.css';

const Header = () => {
  return (
    <div
      className="header"
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
        height: '7em',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
      }}
    >
      <Box
        component={'div'}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mr: 2,
        }}
      >
        <NavLink to="/">
          <Box component={'div'}>
            <MainLogo />
          </Box>
        </NavLink>

        <Box component={'div'}>
          <ToggleButton />
        </Box>

        <Box component={'div'}>
          <Button
            className="change-button"
            size="small"
            variant="text"
            sx={{
              textDecoration: 'double',
              color: '#b2b2b2',
              fontSize: '16px',
              lineHeight: 1.2,
              borderColor: '#b2b2b2',
              fontFamily: ['Oswald'],
            }}
          >
            <NavLink className="navlink" to="/about">
              О сервисе
            </NavLink>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
