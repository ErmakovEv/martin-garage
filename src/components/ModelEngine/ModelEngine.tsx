import { useGLTF } from '@react-three/drei';

export default function ModelEngine(props: any) {
  const { nodes, materials } = useGLTF('./engine-model/scene.gltf') as any;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Spada_1SG}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.blinn10SG}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.blinn6SG}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.lambert11SG}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.blinn14SG}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.blinn15SG}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.blinn3SG}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.blinn4SG}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.initialShadingGroup}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.lambert10SG}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.lambert3SG}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.lambert4SG}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.typeBlinn1SG}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
