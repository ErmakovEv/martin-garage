// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MainLogo from '../MainLogo/MainLogo';
import ToggleButton from '../ToggleButton/ToggleButton';

type HeaderProps = {
  handlerOpenDrawer: (open: boolean) => void;
  handleClickPage: () => void;
  title: string;
};

const Header = ({ handlerOpenDrawer, handleClickPage, title }: HeaderProps) => (
  <div
    style={{
      // backgroundColor: '#1b1b1b',
      position: 'fixed',
      top: 0,
      zIndex: 100,
      height: '5em',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: 'blur(40px)',
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
      <Box component={'div'}>
        <MainLogo />
      </Box>
      <Box component={'div'}>
        <ToggleButton handleClickPage={handleClickPage} title={title} />
      </Box>
      <Box component={'div'}>
        <Button
          onClick={() => handlerOpenDrawer(true)}
          sx={{
            color: 'black',
            fontSize: '2vmin',
            fontFamily: 'Roboto',
            width: '15vmin',
            lineHeight: '1.2',
          }}
          size="small"
          variant="contained"
        >
          Выбор ремонта
        </Button>
      </Box>
    </Box>
  </div>
);
export default Header;
