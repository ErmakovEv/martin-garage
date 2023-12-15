import { Box } from '@mui/material';
// import CustomForm from '../CustomAutocomplite/CustomAutocomplite';
import Footer from '../Footer/Footer';
// import bg from '../../img/aston-martin.jpeg';
import ModelEngine from '../ModelEngine/ModelEngine';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Engine from '../Engine/Engine';
import { OrbitControls, Stage } from '@react-three/drei';
import { useRef } from 'react';
import gif from '/v8.gif';

const AboutPage = () => {
  // const { camera } = useThree();
  // const mesh = useRef<any>();

  // useFrame(({ clock }) => {
  //   camera.position.x = Math.sin(clock.getElapsedTime()) * 3; // Изменение позиции камеры по оси X
  //   camera.position.y = Math.cos(clock.getElapsedTime()) * 3; // Изменение позиции камеры по оси Y
  //   camera.lookAt(mesh.current.position);
  // });

  return (
    <section
      // ref={ref}
      style={{
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
        width="100%"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
        <Box
          component="div"
          sx={{
            borderRadius: '2px solid white',
            height: '100%',
          }}
        >
          <img className="earth" src={gif} alt="Earth" width={'350px'} />
        </Box>
      </Box>

      <Footer />
    </section>
  );
};

export default AboutPage;
