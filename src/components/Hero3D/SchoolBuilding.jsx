import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function SchoolBuilding() {
  const flagRef = useRef();

  // Gentle flag waving animation
  useFrame((state) => {
    if (flagRef.current) {
      flagRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 5) * 0.2;
      flagRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 3) * 0.1;
    }
  });

  return (
    <group position={[0, -0.2, 0]}>
      {/* Foundation / Stairs */}
      <mesh position={[0, 0.1, 0.5]} receiveShadow>
        <boxGeometry args={[4.5, 0.2, 2.5]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.22, 0.8]} receiveShadow>
        <boxGeometry args={[2.5, 0.15, 1]} />
        <meshStandardMaterial color="#CBD5E1" roughness={0.6} />
      </mesh>

      {/* Main Building Body - Soft Sky Blue/Cream */}
      <mesh position={[0, 1.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 2, 2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
      </mesh>

      {/* Left Wing - Playful Coral Orange */}
      <mesh position={[-2.4, 1.0, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 1.5, 1.6]} />
        <meshStandardMaterial color="#FF7F50" roughness={0.5} />
      </mesh>

      {/* Right Wing - Sunshine Yellow */}
      <mesh position={[2.4, 1.0, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 1.5, 1.6]} />
        <meshStandardMaterial color="#FFD93D" roughness={0.5} />
      </mesh>

      {/* Roofs */}
      {/* Main Roof - Flat Modern Terrace with Railings */}
      <mesh position={[0, 2.3, 0]} castShadow>
        <boxGeometry args={[4.2, 0.1, 2.2]} />
        <meshStandardMaterial color="#4F9CF9" roughness={0.3} />
      </mesh>
      
      {/* Left Wing Roof - Gabled (Pyramid) */}
      <mesh position={[-2.4, 1.9, 0.2]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[1.2, 0.8, 4]} />
        <meshStandardMaterial color="#FF7F50" roughness={0.4} />
      </mesh>

      {/* Right Wing Roof - Gabled (Pyramid) */}
      <mesh position={[2.4, 1.9, 0.2]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[1.2, 0.8, 4]} />
        <meshStandardMaterial color="#FFD93D" roughness={0.4} />
      </mesh>

      {/* Central Clock Tower */}
      <group position={[0, 2.8, 0]}>
        {/* Tower Body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
        </mesh>
        {/* Tower Roof */}
        <mesh position={[0, 0.9, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[1.0, 0.7, 4]} />
          <meshStandardMaterial color="#4F9CF9" roughness={0.3} />
        </mesh>
        
        {/* Flag Pole */}
        <mesh position={[0, 1.6, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.8, 8]} />
          <meshStandardMaterial color="#94A3B8" />
        </mesh>
        {/* Flag */}
        <mesh ref={flagRef} position={[0.25, 1.85, 0]}>
          <boxGeometry args={[0.5, 0.3, 0.02]} />
          <meshStandardMaterial color="#FF7F50" roughness={0.5} />
        </mesh>

        {/* Clock Face */}
        <group position={[0, 0.1, 0.61]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.02, 32]} />
            <meshStandardMaterial color="#F8FAFC" roughness={0.2} />
          </mesh>
          {/* Hands */}
          <mesh position={[0, 0.08, 0.015]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.03, 0.18, 0.01]} />
            <meshStandardMaterial color="#1E293B" />
          </mesh>
          <mesh position={[0.05, 0.02, 0.015]} rotation={[0, 0, Math.PI / 3]}>
            <boxGeometry args={[0.03, 0.12, 0.01]} />
            <meshStandardMaterial color="#1E293B" />
          </mesh>
        </group>
      </group>

      {/* Double Doors */}
      <group position={[0, 0.65, 1.01]}>
        <mesh castShadow>
          <boxGeometry args={[1.0, 0.9, 0.05]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
        {/* Door line divider */}
        <mesh position={[0, 0, 0.01]}>
          <boxGeometry args={[0.02, 0.9, 0.04]} />
          <meshStandardMaterial color="#5C2E0B" />
        </mesh>
        {/* Door handles */}
        <mesh position={[-0.08, -0.05, 0.03]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#FFD93D" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.08, -0.05, 0.03]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#FFD93D" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Modern Windows */}
      {/* Front Main Windows */}
      <Window position={[-1.0, 1.25, 1.01]} />
      <Window position={[1.0, 1.25, 1.01]} />
      
      {/* Left Wing Window */}
      <Window position={[-2.4, 0.9, 1.01]} size={[0.7, 0.7]} color="#4F9CF9" />
      
      {/* Right Wing Window */}
      <Window position={[2.4, 0.9, 1.01]} size={[0.7, 0.7]} color="#FF7F50" />
    </group>
  );
}

// Window Helper Component
function Window({ position, size = [0.6, 0.6], color = "#FFD93D" }) {
  return (
    <group position={position}>
      {/* Glass Pane - Glowing Yellow or Blue */}
      <mesh>
        <boxGeometry args={[size[0], size[1], 0.02]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3} 
          roughness={0.1} 
        />
      </mesh>
      {/* Frame */}
      <mesh position={[0, 0, 0.01]}>
        <boxGeometry args={[size[0] + 0.08, size[1] + 0.08, 0.01]} />
        <meshStandardMaterial color="#F1F5F9" roughness={0.4} />
      </mesh>
      {/* Crossbar */}
      <mesh position={[0, 0, 0.015]}>
        <boxGeometry args={[0.03, size[1], 0.01]} />
        <meshStandardMaterial color="#E2E8F0" />
      </mesh>
      <mesh position={[0, 0, 0.015]}>
        <boxGeometry args={[size[0], 0.03, 0.01]} />
        <meshStandardMaterial color="#E2E8F0" />
      </mesh>
    </group>
  );
}
