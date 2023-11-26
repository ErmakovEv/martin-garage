/* eslint-disable react/no-unknown-property */
import { forwardRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Car from '../Car/Car';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import CATEGORIESMAP from '../utils/utils';

interface MainPageProps {
  bottonActive: keyof typeof CATEGORIESMAP;
}

const MainPage = forwardRef<HTMLElement, MainPageProps>(
  ({ bottonActive }: MainPageProps, ref) => (
    <section ref={ref}>
      <Suspense fallback={<Loader />}>
        <div className="main-page">
          <Canvas>
            {/* <cubeTexture /> */}
            {/* <color attach="background" args={['#0b180c']} /> */}
            {/* <fog attach="fog" args={['#0b180c', 10, 20]} /> */}
            <Stage environment="city" intensity={0.1}>
              <Car active={bottonActive as keyof typeof CATEGORIESMAP} />
            </Stage>
            {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.5}>
              <planeGeometry args={[170, 170]} />
              <MeshReflectorMaterial
                blur={[1, 1]}
                resolution={1080}
                // mixBlur={0.8}
                // mixStrength={10}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={1.4}
                maxDepthThreshold={5.4}
                color="grey"
                metalness={1}
                mirror={1}
              />
              <meshStandardMaterial color="#000" />
            </mesh> */}
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
        </div>
      </Suspense>
    </section>
  )
);

export default MainPage;
