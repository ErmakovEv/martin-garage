import { forwardRef, useState } from 'react';
import { Box, Modal, Button } from '@mui/material';
import CustomForm from '../CustomForm/CustomForm';
import Footer from '../Footer/Footer';
import bg from '../../img/aston-martin.jpeg';

type SecondPageProps = {
  handleClickPage: () => void;
};

const SecondPage = forwardRef<HTMLElement, SecondPageProps>(
  ({ handleClickPage }: SecondPageProps, ref) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      handleClickPage();
      setOpen(false);
    };
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
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <CustomForm />
          </Modal>
        </Box>
        <Footer />
      </section>
    );
  }
);

export default SecondPage;
