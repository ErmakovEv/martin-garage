import { Suspense } from 'react';
import { Box } from '@mui/material';
import SwipeableEdgeDrawer from '../SwipeableDrawer/SwipeableDrawer';
import './Pages.css';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { Canvas } from '@react-three/fiber';
import Car from '../Car/Car';
import { OrbitControls, Stage } from '@react-three/drei';
import CustomButton from '../CustomButton/CustomButton';
import SpinnerMask from '../SpinnerMask/SpinnerMask';
import logo1 from '/logo.png';

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
        <Suspense fallback={<SpinnerMask img={logo1} />}>
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
        </Suspense>

        <Box component="div" sx={{ position: 'absolute' }}>
          <SwipeableEdgeDrawer />
        </Box>
      </section>
    </div>
  );
}

export default MainPage;
