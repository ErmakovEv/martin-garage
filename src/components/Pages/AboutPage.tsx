import { Box } from '@mui/material';
// import CustomForm from '../CustomAutocomplite/CustomAutocomplite';
import Footer from '../Footer/Footer';
// import bg from '../../img/aston-martin.jpeg';
// import ModelEngine from '../ModelEngine/ModelEngine';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import Engine from '../Engine/Engine';
// import { OrbitControls, Stage } from '@react-three/drei';
// import { useRef } from 'react';
import gif from '/v8.gif';

const AboutPage = () => {
  return (
    <section
      style={{
        // backgroundColor: 'red',
        backgroundColor: 'rgb(4, 3, 4)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        overflowY: 'hidden',
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100vh',
          // border: '3px solid white',
          // mt: '10em',
        }}
      >
        <Box
          component="div"
          sx={{
            borderRadius: '2px solid white',
            marginTop: '0 auto',
            // border: '3px solid red',
            // float: 'left',
            // height: '30%',
          }}
        >
          <img className="earth" src={gif} alt="Earth" width={'200vw'} />
        </Box>
        <Box
          component="div"
          sx={{
            borderRadius: '2px solid white',
            marginTop: '0 auto',
            // border: '3px solid green',
            width: '40%',
            color: 'white',
          }}
        >
          <Box
            component="div"
            sx={{
              fontFamily: ["'Oswald'"],
              fontSize: '1.5vh',
              textAlign: 'center',
            }}
          >
            <Box
              component="div"
              sx={{
                fontFamily: ["'Oswald'"],
                textAlign: 'center',
                fontSize: '2vh',
              }}
            >
              Привет!
            </Box>
            Это сервис{' '}
            <span style={{ fontSize: '1.8vh', color: '#c5dea1' }}>
              Martin Garage
            </span>
            . Мы выполняем ремонт любой сложности, а также делаем полное
            техническое обслуживание автомобилей. Можем проконсультировать по
            работам и подбору автозапчастей. Звоните, будем рады помочь!
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          height: '20vh',
        }}
      ></Box>
      <Footer />
    </section>
  );
};

export default AboutPage;
