import { forwardRef } from 'react';
import { Box } from '@mui/material';
import CustomForm from '../CustomForm/CustomForm';
import Footer from '../Footer/Footer';
import bg from '../../img/aston-martin.jpeg';

const SecondPage = forwardRef<HTMLElement>((_, ref) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <section
      ref={ref}
      style={{
        backgroundImage: `url(${bg}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
      }}
    >
      <Box
        component="div"
        sx={{
          width: '100%',
          color: 'white',
          position: 'relative',
          top: 150,
        }}
      >
        <CustomForm />
      </Box>
      <Footer />
    </section>
  );
});

export default SecondPage;
