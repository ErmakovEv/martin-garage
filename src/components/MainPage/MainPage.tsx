/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@mui/material';
import Car from '../Car/Car';
import { OrbitControls, Stage } from '@react-three/drei';
import CustomButton from '../CustomButton/CustomButton';

const MainPage = () => (
  <section>
    <Suspense>
      <div className="main-page">
        <Canvas>
          <Stage environment="city" intensity={0.1}>
            <Car />
          </Stage>
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.6}
            rotateSpeed={0.6}
            target={[0, 0, 0]}
          />
        </Canvas>
        <Box
          component="div"
          sx={{
            height: `calc(22% - 36px)`,
            zIndex: 100,
            position: 'fixed',
            bottom: 0,
            right: 0,
          }}
        >
          <CustomButton />
        </Box>
      </div>
    </Suspense>
  </section>
);

export default MainPage;
