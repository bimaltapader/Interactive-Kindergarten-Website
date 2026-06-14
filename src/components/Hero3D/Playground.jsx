import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Playground() {
  const swing1Ref = useRef();
  const swing2Ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Sway the swing seats back and forth at slightly different phases
    if (swing1Ref.current) {
      swing1Ref.current.rotation.x = Math.sin(time * 2.5) * 0.35;
    }
    if (swing2Ref.current) {
      swing2Ref.current.rotation.x = Math.sin(time * 2.5 + 0.8) * 0.3;
    }
  });

  return (
    <group position={[3.8, -0.1, 1.5]} scale={[0.9, 0.9, 0.9]}>
      
      {/* ==================== SWING SET ==================== */}
      <group position={[-1.2, 0, 0]}>
        {/* Support A-Frame (Left) */}
        <mesh position={[-0.8, 0.8, 0]} rotation={[0, 0, -Math.PI / 12]} castShadow>
          <cylinderGeometry args={[0.04, 0.05, 1.7, 8]} />
          <meshStandardMaterial color="#4F9CF9" roughness={0.5} />
        </mesh>
        <mesh position={[-0.8, 0.8, 0.4]} rotation={[Math.PI / 12, 0, -Math.PI / 12]} castShadow>
          <cylinderGeometry args={[0.04, 0.05, 1.7, 8]} />
          <meshStandardMaterial color="#4F9CF9" roughness={0.5} />
        </mesh>
        
        {/* Support A-Frame (Right) */}
        <mesh position={[0.8, 0.8, 0]} rotation={[0, 0, Math.PI / 12]} castShadow>
          <cylinderGeometry args={[0.04, 0.05, 1.7, 8]} />
          <meshStandardMaterial color="#4F9CF9" roughness={0.5} />
        </mesh>
        <mesh position={[0.8, 0.8, 0.4]} rotation={[Math.PI / 12, 0, Math.PI / 12]} castShadow>
          <cylinderGeometry args={[0.04, 0.05, 1.7, 8]} />
          <meshStandardMaterial color="#4F9CF9" roughness={0.5} />
        </mesh>

        {/* Top Crossbar */}
        <mesh position={[0, 1.6, 0.2]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1.8, 8]} />
          <meshStandardMaterial color="#4F9CF9" roughness={0.5} />
        </mesh>

        {/* Swing 1 (Sways) */}
        <group ref={swing1Ref} position={[-0.35, 1.6, 0.2]}>
          {/* Rope Left */}
          <mesh position={[-0.12, -0.6, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
            <meshStandardMaterial color="#64748B" />
          </mesh>
          {/* Rope Right */}
          <mesh position={[0.12, -0.6, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
            <meshStandardMaterial color="#64748B" />
          </mesh>
          {/* Seat */}
          <mesh position={[0, -1.2, 0]} castShadow>
            <boxGeometry args={[0.34, 0.03, 0.16]} />
            <meshStandardMaterial color="#FF7F50" roughness={0.6} />
          </mesh>
        </group>

        {/* Swing 2 (Sways out of phase) */}
        <group ref={swing2Ref} position={[0.35, 1.6, 0.2]}>
          {/* Rope Left */}
          <mesh position={[-0.12, -0.6, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
            <meshStandardMaterial color="#64748B" />
          </mesh>
          {/* Rope Right */}
          <mesh position={[0.12, -0.6, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
            <meshStandardMaterial color="#64748B" />
          </mesh>
          {/* Seat */}
          <mesh position={[0, -1.2, 0]} castShadow>
            <boxGeometry args={[0.34, 0.03, 0.16]} />
            <meshStandardMaterial color="#FFD93D" roughness={0.6} />
          </mesh>
        </group>
      </group>

      {/* ==================== SLIDE ==================== */}
      <group position={[1.0, 0, 0]} rotation={[0, -Math.PI / 6, 0]}>
        {/* Platform Deck */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <boxGeometry args={[0.6, 0.06, 0.6]} />
          <meshStandardMaterial color="#FFD93D" roughness={0.5} />
        </mesh>
        
        {/* Platform Roof (Cone) */}
        <mesh position={[0, 1.6, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[0.45, 0.4, 4]} />
          <meshStandardMaterial color="#FF7F50" roughness={0.4} />
        </mesh>

        {/* Platform Support Posts (4 corner legs) */}
        <mesh position={[-0.26, 0.45, -0.26]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.9, 8]} />
          <meshStandardMaterial color="#94A3B8" />
        </mesh>
        <mesh position={[0.26, 0.45, -0.26]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.9, 8]} />
          <meshStandardMaterial color="#94A3B8" />
        </mesh>
        <mesh position={[-0.26, 0.45, 0.26]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.9, 8]} />
          <meshStandardMaterial color="#94A3B8" />
        </mesh>
        <mesh position={[0.26, 0.45, 0.26]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.9, 8]} />
          <meshStandardMaterial color="#94A3B8" />
        </mesh>

        {/* Ladder (Back side) */}
        <group position={[0, 0, -0.3]}>
          <mesh position={[-0.15, 0.45, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.9, 8]} />
            <meshStandardMaterial color="#FF7F50" />
          </mesh>
          <mesh position={[0.15, 0.45, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.9, 8]} />
            <meshStandardMaterial color="#FF7F50" />
          </mesh>
          {/* Ladder Rungs */}
          <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
            <meshStandardMaterial color="#E2E8F0" />
          </mesh>
          <mesh position={[0, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
            <meshStandardMaterial color="#E2E8F0" />
          </mesh>
          <mesh position={[0, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
            <meshStandardMaterial color="#E2E8F0" />
          </mesh>
          <mesh position={[0, 0.8, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
            <meshStandardMaterial color="#E2E8F0" />
          </mesh>
        </group>

        {/* Slide Board (Front side, angled down) */}
        <group position={[0, 0.45, 0.65]} rotation={[Math.PI / 6, 0, 0]}>
          {/* Slider Board */}
          <mesh castShadow>
            <boxGeometry args={[0.5, 1.2, 0.04]} />
            <meshStandardMaterial color="#FF7F50" roughness={0.4} />
          </mesh>
          {/* Left Rail */}
          <mesh position={[-0.24, 0, 0.04]}>
            <boxGeometry args={[0.04, 1.2, 0.08]} />
            <meshStandardMaterial color="#FFD93D" />
          </mesh>
          {/* Right Rail */}
          <mesh position={[0.24, 0, 0.04]}>
            <boxGeometry args={[0.04, 1.2, 0.08]} />
            <meshStandardMaterial color="#FFD93D" />
          </mesh>
        </group>

        {/* Landing Flat Board (At the very bottom front) */}
        <mesh position={[0, 0.02, 1.2]} castShadow>
          <boxGeometry args={[0.5, 0.04, 0.3]} />
          <meshStandardMaterial color="#FF7F50" roughness={0.4} />
        </mesh>
      </group>
    </group>
  );
}
