// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MainLogo from '../MainLogo/MainLogo';
import ToggleButton from '../ToggleButton/ToggleButton';

type HeaderProps = {
  handlerOpenDrawer: (open: boolean) => void;
  handleClickPage: () => void;
  handleClickThirdPage: () => void;
  title: React.ReactNode;
};

const Header = ({
  handlerOpenDrawer,
  handleClickPage,
  handleClickThirdPage,
  title,
}: HeaderProps) => (
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
      backdropFilter: 'blur(10px)',
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
            color: 'white',
            fontSize: '1.2vh',
            lineHeight: '1.2',
            borderColor: '#29b249',
            '&:hover': { backgroundColor: '#29b249', borderColor: 'white' },
          }}
          size="small"
          variant="text"
        >
          Выбор <br /> ремонта
        </Button>
      </Box>
      <Box component={'div'}>
        <Button
          onClick={() => handleClickThirdPage()}
          sx={{
            color: 'white',
            fontSize: '1.2vh',
            lineHeight: '1.2',
            borderColor: '#29b249',
            '&:hover': { backgroundColor: '#29b249', borderColor: 'white' },
          }}
          size="small"
          variant="text"
        >
          Третья страница <br />
        </Button>
      </Box>
    </Box>
  </div>
);
export default Header;
