import { forwardRef, useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import CustomForm from '../Form/Form';
import Footer from '../Footer/Footer';
import bg from '../../img/aston-martin.jpeg';

const SecondPage = forwardRef<HTMLElement>((_, ref) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
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
            <Button onClick={handleOpen}>Открыть форму</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <CustomForm />
            </Modal>
          </Box>
        </Box>
        <Footer />
      </Box>
    </section>
  );
});

export default SecondPage;
