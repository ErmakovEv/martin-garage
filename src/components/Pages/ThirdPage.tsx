import { forwardRef } from 'react';
import { Box, TextField } from '@mui/material';
// import CustomForm from '../Form/Form';

const ThirdPage = forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    style={{ display: 'flex', alignItems: 'center', marginTop: 150 }}
  >
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
  </section>
));

export default ThirdPage;
