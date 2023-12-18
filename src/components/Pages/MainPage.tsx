import { Box } from '@mui/material';
// import MainPage from '../MainPage/MainPage';
import SwipeableEdgeDrawer from '../SwipeableDrawer/SwipeableDrawer';
import './Pages.css';
import { Suspense, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import SpinnerMask from '../SpinnerMask/SpinnerMask';
import { Canvas } from '@react-three/fiber';
import Car from '../Car/Car';
import { OrbitControls, Stage } from '@react-three/drei';
import CustomButton from '../CustomButton/CustomButton';

function MainPage() {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 3000);
  }, []);

  return !load ? (
    <Spinner />
  ) : (
    <div className="container">
      <section>
        <div className="main-page">
          <Suspense fallback={<SpinnerMask />}>
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
          </Suspense>

          <Box
            component="div"
            sx={{
              height: `150px`,
              zIndex: 100,
              position: 'fixed',
              top: '80%',
              right: 0,
            }}
          >
            <CustomButton />
          </Box>
        </div>
        <Box component="div" sx={{ position: 'absolute' }}>
          <SwipeableEdgeDrawer />
        </Box>
      </section>
    </div>
  );
}

export default MainPage;
