import { Box } from '@mui/system';
import CustomMap from '../CustomMap/CustomMap';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <Box
      className="footer"
      component="div"
      sx={{
        backgroundColor: 'blue',
        minHeight: '150px',
        // position: 'relative',
      }}
    >
      <Box
        component="div"
        sx={{
          position: 'absolute',
          zIndex: '10',
          width: '65%',
          height: '90%',
          display: 'flex',
        }}
      >
        <Box component="div" sx={{ width: '10%', opacity: 1 }}></Box>
        <Box
          component="div"
          sx={{
            background: '#1b1b1b',
            opacity: 0.8,
            padding: 2,
          }}
        >
          <Box
            component="div"
            sx={{
              fontFamily: ['Oswald'],
              textAlign: 'center',
              pb: 2,
              fontSize: '1.2vh',
              color: 'white',
            }}
          >
            {'КОНТАКТЫ'}
          </Box>
          <Box component="div" sx={{ fontSize: '1.2vh', color: 'white' }}>
            <PhoneInTalkIcon
              sx={{ color: '#29b249', fontSize: '1.2vh', mr: 0.5 }}
            />
            {'8 (999) 000-11-22'}
          </Box>

          <Box component="div" sx={{ fontSize: '1.2vh', color: 'white' }}>
            <MarkEmailReadIcon
              sx={{ color: '#29b249', fontSize: '1.2vh', mr: 0.5 }}
            />
            {'martin-garage@gmail.com'}
          </Box>
          <Box
            component="div"
            sx={{
              fontFamily: ['Oswald'],
              textAlign: 'center',
              pt: '2vh',
              pb: '1vh',
              fontSize: '1.2vh',
              color: 'white',
            }}
          >
            {'ВРЕМЯ РАБОТЫ'}
          </Box>

          <Box
            component="div"
            sx={{ fontFamily: ['Oswald'], fontSize: '1.2vh', color: 'white' }}
          >
            <AccessTimeIcon
              sx={{ color: '#29b249', fontSize: '1.2vh', mr: 0.5 }}
            />
            {'9:00-21:00 Пн-Сб'}
          </Box>
          <Box
            component="div"
            sx={{
              fontFamily: ['Oswald'],
              textAlign: 'center',
              pt: '2vh',
              pb: '1vh',
              fontSize: '1.2vh',
              color: 'white',
            }}
          >
            {'АДРЕС'}
          </Box>

          <Box
            component="div"
            sx={{ fontFamily: ['Oswald'], fontSize: '1.2vh', color: 'white' }}
          >
            <LocationOnIcon
              sx={{ color: '#29b249', fontSize: '1.2vh', mr: 0.5 }}
            />
            {'дер. Коккорево'}
          </Box>
        </Box>
      </Box>
      <CustomMap />
      <Box
        component="div"
        sx={{
          backgroundColor: 'red',
          position: 'absolute',
          bottom: '0',
          width: '100%',
          background: '#1b1b1b',
          color: 'white',
          fontFamily: ['Oswald'],
          textAlign: 'center',
          fontSize: '1.2vh',
          zIndex: '100',
        }}
      >
        © 2024 Автосервис Martin Garage <br />
        Вся информация, представленная на сайте, носит информационный характер и
        не является публичной офертой
      </Box>
    </Box>
  );
}

export default Footer;
