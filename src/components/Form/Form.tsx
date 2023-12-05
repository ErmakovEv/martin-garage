import React, { useRef, useContext, useEffect } from 'react';
import {
  Box,
  TextField,
  Stack,
  Button,
  Autocomplete,
  Chip,
} from '@mui/material';
import emailjs from '@emailjs/browser';
import { MyContext } from '../Pages/Pages';

const CustomForm = () => {
  const context = useContext(MyContext);
  const [value, setValue] = React.useState(
    context?.list
      ? [...context?.list].map((item) => ({ title: item }))
      : [{ title: 'test' }]
  );

  useEffect(() => {
    const newArray = context?.list
      ? [...context?.list].map((item) => ({ title: item }))
      : [{ title: 'test' }];
    setValue(newArray);
  }, [context]);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_tcd5wud',
        'template_xet8ugu',
        form.current as HTMLFormElement,
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
        backgroundColor: 'white',
        opacity: 0.8,
        margin: '0 auto',
        pl: 5,
        pr: 5,
        pt: 2,
        pb: 2,
        borderRadius: 3,
        width: '50%',
        maxHeight: '250px',
      }}
    >
      <form ref={form} onSubmit={sendEmail}>
        <Stack
          spacing={1}
          width={'100%'}
          sx={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}
        >
          <Box
            component="div"
            sx={{
              color: '#29b249',
              fontSize: '1.5vh',
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
                InputLabelProps={{ style: { fontSize: '1.4vh' } }}
              />
            </Box>
            {/* <Box
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
                InputLabelProps={{ style: { fontSize: '1.4vh' } }}
              />
            </Box> */}
            {/* <Box
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
                InputLabelProps={{ style: { fontSize: '1.4vh' } }}
              />
            </Box> */}
            {/* <Box
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
                InputLabelProps={{ style: { fontSize: '1.3vh' } }}
              />
            </Box> */}
            <Box component="div">
              <Autocomplete
                limitTags={1}
                sx={{ width: '100%' }}
                multiple
                id="fixed-tags-demo"
                value={
                  context?.list
                    ? [...context?.list].map((item) => ({ title: item }))
                    : [{ title: 'test' }]
                }
                onChange={(_, newValue) => {
                  if (context?.cb2) {
                    context?.cb2(
                      new Set(
                        newValue
                          .filter((item) => item.title !== '')
                          .map((item) => item.title)
                      )
                    );
                  }

                  setValue([
                    ...value,
                    ...newValue.filter(
                      (option) => value.indexOf(option) === -1
                    ),
                  ]);
                }}
                options={
                  context?.list
                    ? [...context?.list].map((item) => ({ title: item }))
                    : [{ title: 'test' }]
                }
                getOptionLabel={(option) => option.title}
                renderTags={(tagValue, getTagProps) =>
                  tagValue.map((option, index) => (
                    <Chip
                      label={option ? option.title : ''}
                      {...getTagProps({ index })}
                      // disabled={fixedOptions.indexOf(option) !== -1}
                    />
                  ))
                }
                isOptionEqualToValue={(option, value) =>
                  option.title === value.title
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Выбранные работы"
                    size="small"
                    InputLabelProps={{ style: { fontSize: '1.3vh' } }}
                  />
                )}
              />
            </Box>
            <Box
              component="div"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                type="submit"
                sx={{
                  color: '29b249',
                  fontSize: '1.5vh',
                  lineHeight: '1.2',
                  fontFamily: ['Oswald'],
                  '&:hover': {
                    backgroundColor: '29b249',
                  },
                }}
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

export default CustomForm;
