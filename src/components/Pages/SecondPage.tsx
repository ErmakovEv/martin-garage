import { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import CustomMap from '../CustomMap/CustomMap';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import bg from '../../img/aston-martin.jpeg';

const SecondPage = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} style={{ height: '100%' }}>
    <Box
      component="div"
      sx={{
        height: '100%',
      }}
    >
      <Box
        component="div"
        sx={{
          scale: 0.2,
          backgroundImage: `url(${bg}) `,
          opacity: 0.9,
          backgroundSize: 'cover',
          height: '70%',
        }}
      >
        1
      </Box>
      <Box
        className="footer"
        component="div"
        sx={{
          backgroundColor: 'blue',
          height: '30%',
          position: 'relative',
        }}
      >
        <Box
          component="div"
          sx={{
            position: 'absolute',
            zIndex: '10',
            width: '45%',
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
            <Typography sx={{ fontSize: '1.5vmax', color: 'white' }}>
              <Box
                component="div"
                sx={{ fontFamily: ['Oswald'], textAlign: 'center', pb: 2 }}
              >
                {'КОНТАКТЫ'}
              </Box>
              <Box component="div">
                <PhoneInTalkIcon /> {'+7 (999) 000-11-22'}
              </Box>

              <Box component="div">
                <MarkEmailReadIcon sx={{ color: 'red' }} />{' '}
                {'martin-garage@gmail.com'}
              </Box>
            </Typography>
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
            fontSize: '1.2vmax',
            zIndex: '100',
          }}
        >
          © 2024 Автосервис Martin-Garage <br />
          Вся информация, представленная на сайте, носит информационный характер
          и не является публичной офертой
        </Box>
      </Box>
    </Box>
  </section>
));

export default SecondPage;
