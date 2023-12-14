import { Box } from '@mui/material';
// import CustomForm from '../CustomAutocomplite/CustomAutocomplite';
import Footer from '../Footer/Footer';
// import bg from '../../img/aston-martin.jpeg';

import { Canvas } from '@react-three/fiber';
import Engine from '../Engine/Engine';
import { OrbitControls, Stage } from '@react-three/drei';

const AboutPage = () => {
  return (
    <section
      // ref={ref}
      style={{
        // backgroundImage: `url(${bg}) `,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <Box
        component="div"
        sx={{
          borderRadius: '2px solid white',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box component="div">
          <Canvas>
            <Stage environment="city" intensity={0.1} scale={10}>
              <Engine />
            </Stage>
            <OrbitControls
              enableZoom={false}
              enablePan={true}
              enableRotate={true}
              zoomSpeed={0.6}
              panSpeed={0.6}
              rotateSpeed={0.6}
              target={[0, 0, 0]} // Цель, вокруг которой вращается камера
            />
          </Canvas>
        </Box>
      </Box>

      <Footer />
    </section>
  );
};

export default AboutPage;
