/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 model.gltf 
Author: KrStolorz (Krzysztof Stolorz) (https://sketchfab.com/KrStolorz)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/1971-gaz-24-volga-lp-784ffea507354f70adf94d7fe0fd4b2a
Title: 1971 GAZ-24 Volga (LP)
*/

import { useGLTF } from '@react-three/drei';

export default function Model(props: any) {
  const { nodes, materials } = useGLTF('./model/model.gltf') as any;
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.Paint}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={materials.Chrom}
        skeleton={nodes.Object_8.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_9.geometry}
        material={materials.Interior_light}
        skeleton={nodes.Object_9.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_10.geometry}
        material={materials.Interior_dark}
        skeleton={nodes.Object_10.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_11.geometry}
        material={materials.Derma}
        skeleton={nodes.Object_11.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_12.geometry}
        material={materials.Black_plastic}
        skeleton={nodes.Object_12.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_13.geometry}
        material={materials.Glass}
        skeleton={nodes.Object_13.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_14.geometry}
        material={materials.Reverse_lights}
        skeleton={nodes.Object_14.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_15.geometry}
        material={materials.Tail_lights}
        skeleton={nodes.Object_15.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_16.geometry}
        material={materials.Orange_plastic}
        skeleton={nodes.Object_16.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_17.geometry}
        material={materials.Rubber}
        skeleton={nodes.Object_17.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_18.geometry}
        material={materials.Underbody}
        skeleton={nodes.Object_18.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_20.geometry}
        material={materials.Chrom}
        skeleton={nodes.Object_20.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_22.geometry}
        material={materials.Chrom}
        skeleton={nodes.Object_22.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_23.geometry}
        material={materials.Black_plastic}
        skeleton={nodes.Object_23.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_24.geometry}
        material={materials.Rubber}
        skeleton={nodes.Object_24.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_25.geometry}
        material={materials.Black_Paint}
        skeleton={nodes.Object_25.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_26.geometry}
        material={materials.Steel}
        skeleton={nodes.Object_26.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_27.geometry}
        material={materials.Reflector}
        skeleton={nodes.Object_27.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_29.geometry}
        material={materials.Rubber}
        skeleton={nodes.Object_29.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_30.geometry}
        material={materials.material}
        skeleton={nodes.Object_30.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_32.geometry}
        material={materials.Chrom}
        skeleton={nodes.Object_32.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_33.geometry}
        material={materials.Reflector}
        skeleton={nodes.Object_33.skeleton}
      />
    </group>
  );
}

useGLTF.preload('./model/model.gltf');
