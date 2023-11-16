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
          <color attach="background" args={['#fff']} />
          {/* <fog attach="fog" args={['#213547', 10, 20]} /> */}
          <Stage environment="city" intensity={0.1} castShadow={false}>
            <Car active={bottonActive as keyof typeof CATEGORIESMAP} />
          </Stage>
          {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
              mirror={0}
            />
          </mesh> */}
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
