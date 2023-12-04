import { forwardRef } from 'react';
import { Box } from '@mui/material';
import CustomForm from '../Form/Form';
import Footer from '../Footer/Footer';
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
          // filter: 'grayscale(50%) blur(2px)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70%',
          color: 'white',
        }}
      >
        <Box
          component="div"
          sx={{
            zIndex: 100,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 10,
          }}
        >
          <CustomForm />
        </Box>
      </Box>
      <Footer />
    </Box>
  </section>
));

export default SecondPage;
