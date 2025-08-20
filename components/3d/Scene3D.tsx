import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene3D: React.FC = () => {
  return (
    <Canvas style={{ background: 'black' }}>
      <ambientLight intensity={0.5} />
      <directionalLight color="pink" position={[5, 5, 5]} />
      <OrbitControls />
      {/* Add 3D models or elements here */}
    </Canvas>
  );
};

export default Scene3D;