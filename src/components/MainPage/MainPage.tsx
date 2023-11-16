/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import Car from '../Car/Car';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import CATEGORIESMAP from '../utils/utils';

interface MainPageProps {
  bottonActive: keyof typeof CATEGORIESMAP;
}

const MainPage = ({ bottonActive }: MainPageProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="main-page">
        <Canvas>
          <color attach="background" args={['#0b180c']} />
          <Stage environment="city" intensity={0.1} castShadow={false}>
            <Car active={bottonActive as keyof typeof CATEGORIESMAP} />
          </Stage>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.6}
            rotateSpeed={0.6}
            target={[0, 0, 0]} // Цель, вокруг которой вращается камера
          />
        </Canvas>
      </div>
    </Suspense>
  );
};

export default MainPage;
