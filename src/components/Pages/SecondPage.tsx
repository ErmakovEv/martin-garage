import { forwardRef, useState } from 'react';
import { Box, Modal, Button } from '@mui/material';
import CustomForm from '../CustomForm/CustomForm';
import Footer from '../Footer/Footer';
// import bg from '../../img/aston-martin.jpeg';

import { Canvas } from '@react-three/fiber';
import Engine from '../Engine/Engine';
import { OrbitControls, Stage } from '@react-three/drei';

type SecondPageProps = {
  handleClickPage: () => void;
};

const SecondPage = forwardRef<HTMLElement, SecondPageProps>(
  ({ handleClickPage }: SecondPageProps, ref) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      handleClickPage();
      setOpen(true);
    };
    const handleClose = () => {
      console.log(handleClickPage);
      setOpen(false);
    };
    return (
      <section
        ref={ref}
        style={{
          // backgroundImage: `url(${bg}) `,
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          component="div"
          sx={{
            width: '100%',
            color: 'white',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            top: 150,
            height: '40vh',
          }}
        >
          <Box component="div">
            <Button onClick={handleOpen}>Open modal</Button>
          </Box>
          <Box
            component="div"
            sx={{
              // backgroundColor: 'red',
              borderRadius: '2px solid white',
              width: '50%',
            }}
          >
            <Canvas>
              {/* <cubeTexture /> */}
              {/* <color attach="background" args={['#0b180c']} /> */}
              {/* <fog attach="fog" args={['#0b180c', 10, 20]} /> */}
              <Stage environment="city" intensity={0.1}>
                <Engine />
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
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              component={'div'}
              sx={{
                maxWidth: '350px',
                m: '0 auto',
              }}
            >
              <CustomForm />
            </Box>
          </Modal>
        </Box>
        <Footer />
      </section>
    );
  }
);

export default SecondPage;
