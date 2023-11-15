import { useRef } from 'react';
import { a } from '@react-spring/three';
import Model from '../Model/ModelDraco';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import CATEGORIESMAP from '../utils/utils';

export default function Car({
  active,
}: {
  active: keyof typeof CATEGORIESMAP;
}) {
  const myMesh = useRef<any>();
  const vek = new THREE.Vector3();
  useFrame((state) => {
    switch (active) {
      case CATEGORIESMAP.engine.name:
        state.camera.position.lerp(vek.set(2.5, 0.5, -0.2), 0.05);
        break;
      case CATEGORIESMAP.transmission.name:
        state.camera.position.lerp(vek.set(-4, 0.1, -2), 0.05);
        break;
      case CATEGORIESMAP.suspension.name:
        state.camera.position.lerp(vek.set(-0.2, 0, -5), 0.05);
        break;
      case CATEGORIESMAP.electric.name:
        state.camera.position.lerp(vek.set(-3, -0.2, 0.9), 0.05);
        break;
      case CATEGORIESMAP.brakes.name:
        state.camera.position.lerp(vek.set(2.5, -0.1, -0.2), 0.05);
        break;
      case CATEGORIESMAP.tires.name:
        state.camera.position.lerp(vek.set(-1.6, -0.3, 1.5), 0.05);
        break;
      case CATEGORIESMAP.optional.name:
        state.camera.position.lerp(vek.set(0.8, 0.1, 0), 0.05);
        break;
      case CATEGORIESMAP.none.name:
        state.camera.position.lerp(vek.set(3, 1, 5), 0.05);
        break;
      default:
        break;
    }
    state.camera.lookAt(myMesh.current?.position);
    state.camera.updateProjectionMatrix();
    return null;
  });

  return (
    <a.mesh ref={myMesh}>
      <Model />
    </a.mesh>
  );
}
