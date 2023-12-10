/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Car from '../Car/Car';
import { OrbitControls, Stage } from '@react-three/drei';

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
      </div>
    </Suspense>
  </section>
);

export default MainPage;
