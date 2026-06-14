import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Environment3D() {
  return (
    <group>
      {/* Ground plane - Playful light green grass */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.22, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#EBF4FF" roughness={0.9} />
      </mesh>
      
      {/* A stylized path in front of the school */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.21, 1.8]} receiveShadow>
        <planeGeometry args={[1.5, 4]} />
        <meshStandardMaterial color="#F1F5F9" roughness={0.8} />
      </mesh>

      {/* 3D Rainbow */}
      <Rainbow position={[0, -1.0, -4.5]} />

      {/* Swaying Trees */}
      <Tree position={[-3.8, -0.2, -1.2]} scale={0.9} swaySpeed={1.2} phase={0} />
      <Tree position={[-2.8, -0.2, -2.4]} scale={0.8} swaySpeed={1.0} phase={Math.PI / 4} />
      <Tree position={[2.8, -0.2, -1.8]} scale={0.85} swaySpeed={1.4} phase={Math.PI / 2} />
      <Tree position={[4.0, -0.2, -2.8]} scale={0.95} swaySpeed={1.1} phase={Math.PI / 6} />

      {/* Floating Clouds */}
      <Cloud position={[-6, 3.2, -3]} scale={0.5} speed={0.003} startX={-6} />
      <Cloud position={[0, 3.8, -4.0]} scale={0.65} speed={0.002} startX={-10} />
      <Cloud position={[6, 3.5, -2.5]} scale={0.4} speed={0.004} startX={-8} />

      {/* Hovering Butterflies */}
      <Butterfly center={[-3.0, 0.5, 0.8]} radius={0.6} color="#FF7F50" speed={2.2} />
      <Butterfly center={[2.5, 0.8, -0.5]} radius={0.5} color="#FFD93D" speed={1.8} />
      <Butterfly center={[4.2, 0.4, 1.2]} radius={0.7} color="#4F9CF9" speed={2.5} />

      {/* Flying Birds */}
      <Bird startY={3.0} startZ={-3.5} speed={0.03} color="#FFFFFF" offset={0} />
      <Bird startY={3.5} startZ={-4.5} speed={0.025} color="#E0F2FE" offset={2.5} />
    </group>
  );
}

// 3D Rainbow Component using concentric toruses
function Rainbow({ position }) {
  const colors = [
    '#FF7F50', // Coral
    '#FFD93D', // Yellow
    '#4FD1C5', // Turquoise/Teal
    '#4F9CF9', // Sky Blue
    '#A78BFA', // Purple
    '#EC4899', // Pink
  ];

  return (
    <group position={position} rotation={[0, 0, 0]}>
      {colors.map((color, i) => {
        // Nested radius
        const radius = 6.2 - i * 0.18;
        return (
          <mesh key={color} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[radius, 0.08, 8, 48, Math.PI]} />
            <meshStandardMaterial 
              color={color} 
              roughness={0.5} 
              emissive={color}
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Swaying Tree Component
function Tree({ position, scale, swaySpeed = 1.0, phase = 0 }) {
  const treeRef = useRef();

  useFrame((state) => {
    if (treeRef.current) {
      const time = state.clock.getElapsedTime();
      // Rotate around the base to simulate swaying in wind
      treeRef.current.rotation.z = Math.sin(time * swaySpeed + phase) * 0.03;
      treeRef.current.rotation.x = Math.cos(time * swaySpeed * 0.8 + phase) * 0.015;
    }
  });

  return (
    <group ref={treeRef} position={position} scale={[scale, scale, scale]}>
      {/* Trunk (Brown cylinder) */}
      <mesh castShadow receiveShadow position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.08, 0.14, 1.4, 8]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Foliage (Clustered green spheres for cartoon cloud look) */}
      <group position={[0, 1.4, 0]}>
        {/* Center large sphere */}
        <mesh castShadow position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.65, 16, 16]} />
          <meshStandardMaterial color="#84CC16" roughness={0.6} />
        </mesh>
        {/* Left cluster */}
        <mesh castShadow position={[-0.4, 0.2, 0.1]}>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial color="#65A30D" roughness={0.6} />
        </mesh>
        {/* Right cluster */}
        <mesh castShadow position={[0.4, 0.15, -0.1]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#4D7C0F" roughness={0.6} />
        </mesh>
        {/* Front cluster */}
        <mesh castShadow position={[0.1, 0.1, 0.4]}>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial color="#84CC16" roughness={0.6} />
        </mesh>
        {/* Top cluster */}
        <mesh castShadow position={[-0.1, 0.7, -0.1]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#A3E635" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// Drifting Cloud Component
function Cloud({ position, scale, speed, startX }) {
  const cloudRef = useRef();

  useFrame((state) => {
    if (cloudRef.current) {
      // Move slowly rightward
      cloudRef.current.position.x += speed;
      
      // Idle bobbing
      cloudRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5 + startX) * 0.1;
      
      // Wrap around when it moves off screen (e.g. x > 12)
      if (cloudRef.current.position.x > 12) {
        cloudRef.current.position.x = -12;
      }
    }
  });

  return (
    <group ref={cloudRef} position={position} scale={[scale, scale, scale]}>
      {/* Cloud made of merged spheres */}
      <mesh castShadow>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} flatShading />
      </mesh>
      <mesh position={[-0.8, -0.2, 0.2]} castShadow>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#F1F5F9" roughness={0.9} flatShading />
      </mesh>
      <mesh position={[0.8, -0.2, -0.2]} castShadow>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color="#F1F5F9" roughness={0.9} flatShading />
      </mesh>
      <mesh position={[0.4, 0.4, 0.1]} castShadow>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.9} flatShading />
      </mesh>
    </group>
  );
}

// Hovering Butterfly Component
function Butterfly({ center, radius, color, speed }) {
  const groupRef = useRef();
  const leftWingRef = useRef();
  const rightWingRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      // Circle flight path
      groupRef.current.position.x = center[0] + Math.sin(time * speed) * radius;
      groupRef.current.position.z = center[2] + Math.cos(time * speed) * radius;
      groupRef.current.position.y = center[1] + Math.sin(time * speed * 3) * 0.15;
      
      // Face towards direction of flight
      groupRef.current.rotation.y = time * speed + Math.PI / 2;
    }
    
    // Fast wing flapping
    if (leftWingRef.current && rightWingRef.current) {
      const flap = Math.sin(time * 30) * 0.7;
      leftWingRef.current.rotation.z = flap;
      rightWingRef.current.rotation.z = -flap;
    }
  });

  return (
    <group ref={groupRef} position={center}>
      {/* Body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.015, 0.015, 0.12, 6]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>

      {/* Left Wing */}
      <mesh ref={leftWingRef} position={[-0.07, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.01, 0.09]} />
        <meshStandardMaterial color={color} roughness={0.3} />
      </mesh>

      {/* Right Wing */}
      <mesh ref={rightWingRef} position={[0.07, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.12, 0.01, 0.09]} />
        <meshStandardMaterial color={color} roughness={0.3} />
      </mesh>
    </group>
  );
}

// Flying Bird Component
function Bird({ startY, startZ, speed, color, offset }) {
  const birdRef = useRef();
  const wingLRef = useRef();
  const wingRRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (birdRef.current) {
      // Fly left to right
      birdRef.current.position.x = -15 + ((time * speed * 60 + offset) % 30);
      birdRef.current.position.y = startY + Math.sin(time * 2 + offset) * 0.25;
      birdRef.current.position.z = startZ + Math.cos(time * 0.5 + offset) * 0.5;
    }

    if (wingLRef.current && wingRRef.current) {
      // Flap wings
      const flap = Math.sin(time * 12) * 0.6;
      wingLRef.current.rotation.z = flap;
      wingRRef.current.rotation.z = -flap;
    }
  });

  return (
    <group ref={birdRef} position={[-15, startY, startZ]} rotation={[0, Math.PI / 2, 0]} scale={[0.4, 0.4, 0.4]}>
      {/* Torso */}
      <mesh castShadow>
        <boxGeometry args={[0.1, 0.1, 0.3]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
      {/* Beak */}
      <mesh position={[0, 0, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.04, 0.1, 4]} />
        <meshStandardMaterial color="#FF7F50" />
      </mesh>
      {/* Left Wing */}
      <mesh ref={wingLRef} position={[-0.15, 0.02, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.15]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
      {/* Right Wing */}
      <mesh ref={wingRRef} position={[0.15, 0.02, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.15]} />
        <meshStandardMaterial color={color} roughness={0.5} />
      </mesh>
    </group>
  );
}
