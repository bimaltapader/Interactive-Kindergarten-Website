import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';

export default function FloatingElements() {
  return (
    <group>
      {/* Floating Letters */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8} position={[-2.5, 2.3, 0.8]}>
        <Text
          color="#FF7F50" // Coral
          fontSize={0.5}
          fontWeight="900"
          anchorX="center"
          anchorY="middle"
        >
          A
        </Text>
      </Float>

      <Float speed={2.0} rotationIntensity={1.5} floatIntensity={1.5} position={[2.2, 2.0, 1.2]}>
        <Text
          color="#4F9CF9" // Sky Blue
          fontSize={0.55}
          fontWeight="900"
          anchorX="center"
          anchorY="middle"
        >
          B
        </Text>
      </Float>

      <Float speed={2.8} rotationIntensity={1.0} floatIntensity={2.0} position={[-0.8, 2.7, 0.5]}>
        <Text
          color="#FFD93D" // Yellow
          fontSize={0.5}
          fontWeight="900"
          anchorX="center"
          anchorY="middle"
        >
          C
        </Text>
      </Float>

      {/* Floating Numbers */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2} position={[-3.2, 1.2, 2.0]}>
        <Text
          color="#FFD93D" // Yellow
          fontSize={0.48}
          fontWeight="900"
          anchorX="center"
          anchorY="middle"
        >
          1
        </Text>
      </Float>

      <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.6} position={[3.3, 1.4, 1.8]}>
        <Text
          color="#FF7F50" // Coral
          fontSize={0.52}
          fontWeight="900"
          anchorX="center"
          anchorY="middle"
        >
          2
        </Text>
      </Float>

      <Float speed={2.6} rotationIntensity={1.4} floatIntensity={2.2} position={[0.8, 2.8, 0.2]}>
        <Text
          color="#4FD1C5" // Turquoise
          fontSize={0.48}
          fontWeight="900"
          anchorX="center"
          anchorY="middle"
        >
          3
        </Text>
      </Float>

      {/* Floating 3D Stars */}
      <FloatingStar position={[-1.8, 2.9, -1.0]} scale={0.25} color="#FFD93D" speed={3.0} />
      <FloatingStar position={[1.8, 2.8, -1.2]} scale={0.2} color="#FFD93D" speed={2.5} />
      <FloatingStar position={[-3.5, 2.2, 1.5]} scale={0.15} color="#FFF" speed={4.0} />
      <FloatingStar position={[3.6, 2.4, 0.5]} scale={0.18} color="#FFF" speed={3.5} />
      <FloatingStar position={[0, 3.4, -2.0]} scale={0.22} color="#FFD93D" speed={2.0} />

      {/* Cute Pencil / Learning Icon */}
      <Float speed={3.2} rotationIntensity={2} floatIntensity={2} position={[-1.6, 0.5, 2.5]} rotation={[0.4, 0.4, -0.6]}>
        <group scale={[0.5, 0.5, 0.5]}>
          {/* Pencil Body */}
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.6, 6]} />
            <meshStandardMaterial color="#FFD93D" roughness={0.4} />
          </mesh>
          {/* Pencil Tip (Wood) */}
          <mesh position={[0, 0.38, 0]}>
            <coneGeometry args={[0.08, 0.16, 6]} />
            <meshStandardMaterial color="#FFD8A8" roughness={0.6} />
          </mesh>
          {/* Lead */}
          <mesh position={[0, 0.45, 0]}>
            <coneGeometry args={[0.02, 0.04, 6]} />
            <meshStandardMaterial color="#1E293B" />
          </mesh>
          {/* Eraser Band */}
          <mesh position={[0, -0.32, 0]}>
            <cylinderGeometry args={[0.081, 0.081, 0.06, 6]} />
            <meshStandardMaterial color="#94A3B8" metalness={0.5} />
          </mesh>
          {/* Eraser */}
          <mesh position={[0, -0.37, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.06, 6]} />
            <meshStandardMaterial color="#FFA8A8" roughness={0.5} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

// 3D Star Helper component (uses a spinning double pyramid/octahedron)
function FloatingStar({ position, scale, color, speed }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the star
      meshRef.current.rotation.y = state.clock.getElapsedTime() * (speed * 0.3);
      meshRef.current.rotation.x = state.clock.getElapsedTime() * (speed * 0.1);
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.0} position={position}>
      <mesh ref={meshRef} scale={[scale, scale, scale]} castShadow>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.2} 
          emissive={color} 
          emissiveIntensity={0.4} 
        />
      </mesh>
    </Float>
  );
}
