import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SchoolBuilding from './SchoolBuilding';
import SchoolBus from './SchoolBus';
import Playground from './Playground';
import Environment3D from './Environment3D';
import FloatingElements from './FloatingElements';

// Moving camera component that handles mouse parallax
function MovingCamera() {
  useFrame((state) => {
    const { x, y } = state.pointer; // Normalized between -1 and 1

    // Target positions based on mouse coordinates
    const targetX = x * 1.5;
    const targetY = 1.8 + y * 0.8;
    const targetZ = 6.5 - Math.abs(x) * 0.5; // Subtle zoom-in when mouse moves to edges

    // Smooth lerp (linear interpolation)
    state.camera.position.x += (targetX - state.camera.position.x) * 0.08;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.08;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.08;

    // Camera always looks slightly above ground level at the school front
    state.camera.lookAt(0, 1.1, 0);
  });

  return null;
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        shadows
        camera={{ position: [0, 1.8, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Performance boost for high-res screens
      >
        <color attach="background" args={undefined} /> {/* Set to transparent, background sky is HTML/CSS */}
        
        {/* Lights */}
        <ambientLight intensity={0.7} />
        
        {/* Warm sun light with shadows */}
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={25}
          shadow-camera-left={-6}
          shadow-camera-right={6}
          shadow-camera-top={6}
          shadow-camera-bottom={-6}
          shadow-bias={-0.0005}
        />
        
        {/* Sky Fill Light (Soft cool light from below/opposite direction) */}
        <directionalLight position={[-5, -2, -5]} intensity={0.4} color="#E0F2FE" />
        
        {/* Decorative Point Lights for magical sparkles/glows */}
        <pointLight position={[0, 3, -2]} intensity={0.8} color="#FFD93D" distance={6} />
        
        {/* 3D Scene Elements */}
        <group position={[0, -1.0, 0]}>
          <SchoolBuilding />
          <SchoolBus />
          <Playground />
          <Environment3D />
          <FloatingElements />
        </group>

        {/* Camera Parallax Controller */}
        <MovingCamera />
        
        {/* Keep OrbitControls disabled by default for mouse-parallax focus.
            However, we can keep it here, disabled, just in case. */}
      </Canvas>
    </div>
  );
}
