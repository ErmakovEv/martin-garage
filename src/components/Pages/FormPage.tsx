import React, { useRef } from 'react';
import { Box, TextField, Stack, Button } from '@mui/material';
import { useAppSelector } from '../../hooks/reduxHooks';
import CustomAutocomplite from '../CustomAutocomplite/CustomAutocomplite';
import emailjs from '@emailjs/browser';

const FormPage = () => {
  const worksList = useAppSelector((state) => state.worksSlice.worksList);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    const works = worksList.join(', ');
    const myFormData = new FormData(form.current as HTMLFormElement);
    e.preventDefault();
    emailjs
      .send(
        'service_tcd5wud',
        'template_xet8ugu',
        {
          user_name: myFormData.get('user_name'),
          user_email: myFormData.get('user_email'),
          user_phone: myFormData.get('user_phone'),
          user_car: myFormData.get('user_car'),
          user_year_car: myFormData.get('user_year_car'),
          user_works: works,
        },
        '4KwUVKA1wUPRuy_no'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message send!!!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        color: 'white',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        top: 150,
        height: '40vh',
      }}
    >
      <form ref={form} onSubmit={sendEmail}>
        <Stack
          spacing={1}
          width={'100%'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            backgroundColor: 'white',
            p: 2,
            borderRadius: '5px',
          }}
        >
          <Box
            component="div"
            sx={{
              color: '#29b249',
              fontSize: '15px',
              textAlign: 'center',
              fontFamily: ['Oswald'],
            }}
          >
            ЗАПИСЬ НА СЕРВИС
          </Box>
          <Box component="div" sx={{ color: 'white' }}>
            <Box
              component="div"
              sx={{
                '& .MuiTextField-root': { mb: 1, width: '100%' },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Ваше имя"
                // variant="standard"
                color="primary"
                type="text"
                name="user_name"
                size="small"
                sx={{ width: '100%' }}
                // InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { fontSize: '12px' } }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                '& .MuiTextField-root': { mb: 1, width: '100%' },
              }}
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
                // InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { fontSize: '12px' } }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                '& .MuiTextField-root': { mb: 1, width: '100%' },
              }}
            >
              <TextField
                id="outlined-basic"
                label="телефон для связи"
                color="primary"
                type="text"
                size="small"
                name="user_phone"
                sx={{ width: '100%' }}
                InputLabelProps={{ style: { fontSize: '12px' } }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                '& .MuiTextField-root': { mb: 1, width: '100%' },
              }}
            >
              <TextField
                id="outlined-basic"
                label="марка и модель автомобиля"
                size="small"
                color="primary"
                type="text"
                name="user_car"
                sx={{ width: '100%' }}
                InputLabelProps={{ style: { fontSize: '12px' } }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                '& .MuiTextField-root': { mb: 1, width: '100%' },
              }}
            >
              <TextField
                id="outlined-basic"
                label="год выпуска авто"
                size="small"
                color="primary"
                type="text"
                name="user_year_car"
                sx={{ width: '100%' }}
                InputLabelProps={{ style: { fontSize: '12px' } }}
              />
            </Box>
            <Box
              component="div"
              sx={{
                '& .MuiTextField-root': { mb: 1, width: '100%' },
              }}
            >
              <TextField
                id="outlined-basic"
                size="small"
                label="доп.информация"
                color="primary"
                type="tel"
                name="message"
                sx={{ width: '100%' }}
                InputLabelProps={{ style: { fontSize: '12px' } }}
              />
            </Box>
            <CustomAutocomplite />
            <Box
              component="div"
              sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}
            >
              <Button
                type="submit"
                sx={{
                  color: '29b249',
                  fontSize: '15px',
                  lineHeight: '1.2',
                  fontFamily: ['Oswald'],
                  '&:hover': {
                    backgroundColor: '29b249',
                    color: 'white',
                  },
                }}
                variant="contained"
              >
                ОТПРАВИТЬ
              </Button>
            </Box>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};

export default FormPage;
