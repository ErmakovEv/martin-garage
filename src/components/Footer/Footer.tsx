import { Box, Stack } from '@mui/system';
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
        height: '200px',
      }}
    >
      <Box
        component="div"
        sx={{
          position: 'absolute',
          zIndex: '10',
          width: '30%',
          height: '200px',
          display: 'flex',
        }}
      >
        <Box component="div" sx={{ width: '25%', opacity: 1 }}></Box>
        <Box
          component="div"
          sx={{
            background: '#1b1b1b',
            opacity: 0.8,
            paddingBottom: 3,
            width: '75%',
          }}
        >
          <Stack
            spacing={1}
            width={'100%'}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              overflowY: 'auto',
              height: '100%',
              mt: -1,
            }}
          >
            <Box
              component="div"
              sx={{
                fontFamily: ['Oswald'],
                textAlign: 'center',
                pt: '1vh',
                // pb: "0.5vh",
                fontSize: '1.3vh',
                color: 'white',
              }}
            >
              {'КОНТАКТЫ'}
              <Box component="div" sx={{ fontSize: '1.0vh', color: 'white' }}>
                <PhoneInTalkIcon
                  sx={{ color: '#29b249', fontSize: '1.0vh', mr: 0.5 }}
                />
                {'8 (999) 000-11-22'}
              </Box>
              <Box component="div" sx={{ fontSize: '1.0vh', color: 'white' }}>
                <MarkEmailReadIcon
                  sx={{ color: '#29b249', fontSize: '1.0vh', mr: 0.5 }}
                />
                {'martin-garage@gmail.com'}
              </Box>
            </Box>

            <Box
              component="div"
              sx={{
                fontFamily: ['Oswald'],
                textAlign: 'center',
                pt: '1vh',
                // pb: "0.5vh",
                fontSize: '1.3vh',
                color: 'white',
              }}
            >
              {'ВРЕМЯ РАБОТЫ'}
              <Box
                component="div"
                sx={{
                  fontFamily: ['Oswald'],
                  fontSize: '1vh',
                  color: 'white',
                }}
              >
                <AccessTimeIcon
                  sx={{ color: '#29b249', fontSize: '1vh', mr: 0.5 }}
                />
                {'9:00-21:00 Пн-Сб'}
              </Box>
            </Box>

            <Box
              component="div"
              sx={{
                fontFamily: ['Oswald'],
                textAlign: 'center',
                pt: '1vh',
                // pb: "0.5vh",
                fontSize: '1.3vh',
                color: 'white',
              }}
            >
              {'АДРЕС'}
              <Box
                component="div"
                sx={{
                  fontFamily: ['Oswald'],
                  fontSize: '1vh',
                  color: 'white',
                }}
              >
                <LocationOnIcon
                  sx={{ color: '#29b249', fontSize: '1vh', mr: 0.5 }}
                />
                {'дер. Коккорево'}
              </Box>
            </Box>
          </Stack>
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
          fontSize: '1vh',
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
