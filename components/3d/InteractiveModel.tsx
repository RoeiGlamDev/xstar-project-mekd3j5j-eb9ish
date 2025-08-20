'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Additional model setup can go here
  }, []);

  return (
    <Canvas style={{ height: '100vh', background: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <mesh ref={modelRef}>
        {/* Replace with your 3D model */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="pink" />
      </mesh>
    </Canvas>
  );
};

export default InteractiveModel;