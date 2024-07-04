import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.4} // Adjusted for better shadow clarity
    scale={5} // Corrected typo
    rotation={[Math.PI / 2, 0, 0]}
    position={[0, 0, -0.14]}
  >
    <RandomizedLight 
      amount={4}
      radius={15}
      intensity={0.55} // Increased for stronger, more defined shadows
      ambient={0.5} // Adjusted to a more realistic level
      position={[0, 0, -10]} // Adjusted height to simulate overhead lighting
    />
    <RandomizedLight 
      amount={4}
      radius={5}
      intensity={0.75} // Adjusted for balanced lighting
      ambient={0.5} // Consistent ambient light for realism
      position={[-5, 5, -5]} // Fine-tuned position for nuanced shadows
    />
  </AccumulativeShadows>
  )
}

export default Backdrop