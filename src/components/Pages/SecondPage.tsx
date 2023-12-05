import { forwardRef } from 'react';
import { Box, TextField } from '@mui/material';
// import CustomForm from '../Form/Form';
// import Footer from '../Footer/Footer';
// import bg from '../../img/aston-martin.jpeg';

const SecondPage = forwardRef<HTMLElement>((_, ref) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <section ref={ref} style={{ height: '100%' }}>
      {/* <Box
        component="div"
        sx={{
          height: '100%',
        }}
      > */}
      {/* <Box
          component="div"
          sx={{
            scale: 0.2,
            backgroundImage: `url(${bg}) `,
            // filter: 'grayscale(50%) blur(2px)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // height: '70%',
            color: 'white',
          }}
        > */}
      <Box
        component="div"
        sx={{
          // zIndex: 1,
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // pt: 10,
        }}
      >
        {/* <Button onClick={handleOpen}>Открыть форму</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <CustomForm />
            </Modal> */}
        <Box
          component="div"
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Box
            component="div"
            bgcolor="#fff"
            maxWidth="420px"
            boxShadow="6"
            borderRadius="6px"
            margin="5px"
            sx={{ paddingX: { xs: '20px', sm: '30px', xl: '40px' } }}
            paddingY="40px"
          >
            <TextField
              id="outlined-basic"
              label="e-mail"
              // variant="standard"
              color="primary"
              type="email"
              name="user_email"
              size="small"
              sx={{ width: '100%' }}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { fontSize: '1.4vh' } }}
            />
            <TextField
              id="outlined-basic"
              label="e-mail"
              // variant="standard"
              color="primary"
              type="email"
              name="user_email"
              size="small"
              sx={{ width: '100%' }}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { fontSize: '1.4vh' } }}
            />
            <TextField
              id="outlined-basic"
              label="e-mail"
              // variant="standard"
              color="primary"
              type="email"
              name="user_email"
              size="small"
              sx={{ width: '100%' }}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { fontSize: '1.4vh' } }}
            />
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
      {/* <Footer /> */}
      {/* </Box> */}
    </section>
  );
});

export default SecondPage;
