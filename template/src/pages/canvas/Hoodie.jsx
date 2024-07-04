import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../../store';

const Hoodie = (props) => {
    const { nodes, materials } = useGLTF("/hoodie_with_hood_up.glb");
    return (
      <group {...props} dispose={null}>
        <group>
          <group
             rotation={[-Math.PI / 2, 10, 0]}
            userData={{ name: "Sketchfab_model" }}
          >
            <group userData={{ name: "hoodie.obj.cleaner.materialmerger.gles" }}>
              <mesh
                geometry={nodes.Object_2.geometry}
                material={materials["Material238904.005"]}
            userData={{ name: "Object_2" }}
              />
              <mesh
                geometry={nodes.Object_3.geometry}
                material={materials["Material238904.005"]}
                userData={{ name: "Object_3" }}
              />
              <mesh
                geometry={nodes.Object_4.geometry}
                material={materials["Material238904.005"]}
                userData={{ name: "Object_4" }}
              />
              <mesh
                geometry={nodes.Object_5.geometry}
                material={materials["Material238904.005"]}
                userData={{ name: "Object_5" }}
              />
            </group>
          </group>
        </group>
      </group>
    );
  }
  
  export default Hoodie;
  
  