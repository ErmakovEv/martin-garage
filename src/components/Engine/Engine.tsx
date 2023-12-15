import { useRef } from 'react';
// import { a } from '@react-spring/three';
import ModelEngine from '../ModelEngine/ModelEngine';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
// import CATEGORIESMAP from '../utils/utils';

export default function Engine() {
  const myMesh = useRef<any>();
  const vek = new THREE.Vector3();
  useFrame((state) => {
    state.camera.position.lerp(vek.set(25, 3, 10), 0.08);
    myMesh.current.rotation.y += 0.03;
    // myMesh.current.rotation.x += 0.03;
    // myMesh.current.rotation.z += 0.03;
  });

  return (
    <mesh
      ref={myMesh}
      // rotation={[0, -0.5, 0.5]}
      position={[0, 2, -2]}
      scale={0.8}
    >
      <ModelEngine />
    </mesh>
  );
}
