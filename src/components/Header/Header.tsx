// import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MainLogo from '../MainLogo/MainLogo';
import ToggleButton from '../ToggleButton/ToggleButton';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { toggleDrawer } from '../../redux/slices/swipeableEdgeDrawerSlice';
import '../MainLogo/MainLogo.css';
import './Header.css';

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        // backgroundColor: '#1b1b1b',
        position: 'fixed',
        top: 0,
        zIndex: 100,
        height: '7em',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#141414',
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
            onClick={() => dispatch(toggleDrawer())}
            sx={{
              textDecoration: 'double',
              color: '#b2b2b2',
              fontSize: '16px',
              lineHeight: 1.2,
              borderColor: '#b2b2b2',
              fontFamily: ['Oswald'],
              '&:hover': {
                backgroundColor: '#29b249',
                borderRadius: '2px',
                color: 'white',
                borderColor: '#b2b2b2',
              },
            }}
          >
            Выбор <br /> ремонта
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
