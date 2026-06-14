import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

export default function SchoolBus() {
  const busRef = useRef();
  const wheelsRef = useRef([]);
  const scrollYRef = useRef(0);

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (busRef.current) {
      // Gentle floating animation (idle engine vibration)
      busRef.current.position.y = -0.05 + Math.sin(time * 8) * 0.01;
      
      // Scroll reaction: bus moves forward/backward and rotates slightly
      const scrollOffset = scrollYRef.current * 0.008;
      
      // We clamp scrollOffset to prevent it from going too far
      const clampedOffset = Math.min(scrollOffset, 5);
      busRef.current.position.x = -4.5 + clampedOffset;
      busRef.current.rotation.z = Math.sin(time * 2) * 0.005 + (clampedOffset * 0.03);

      // Rotate wheels based on the horizontal displacement
      wheelsRef.current.forEach((wheel) => {
        if (wheel) {
          // Spin wheels as the bus moves
          wheel.rotation.x = -clampedOffset * 2.5 + (time * 0.5); // spin + idle rotation
        }
      });
    }
  });

  return (
    <group 
      ref={busRef} 
      position={[-4.5, -0.05, 2.5]} 
      rotation={[0, Math.PI / 2, 0]} // Face towards the school right
      scale={[0.85, 0.85, 0.85]}
    >
      {/* Bus Chassis (Yellow Body) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.8, 2.6]} />
        <meshStandardMaterial color="#FFD93D" roughness={0.3} />
      </mesh>

      {/* Front Nose (Engine hood) */}
      <mesh position={[0, -0.1, 1.5]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.6, 0.5]} />
        <meshStandardMaterial color="#FFD93D" roughness={0.3} />
      </mesh>

      {/* Roof - Curved Top */}
      <mesh position={[0, 0.42, 0]} castShadow>
        <boxGeometry args={[1.18, 0.08, 2.56]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
      </mesh>

      {/* Front Windshield */}
      <mesh position={[0, 0.2, 1.28]} rotation={[0.08, 0, 0]} castShadow>
        <boxGeometry args={[1.0, 0.35, 0.05]} />
        <meshStandardMaterial color="#4F9CF9" emissive="#4F9CF9" emissiveIntensity={0.2} roughness={0.1} />
      </mesh>

      {/* Rear Window */}
      <mesh position={[0, 0.2, -1.31]} castShadow>
        <boxGeometry args={[1.0, 0.35, 0.05]} />
        <meshStandardMaterial color="#4F9CF9" emissive="#4F9CF9" emissiveIntensity={0.2} roughness={0.1} />
      </mesh>

      {/* Side Windows (Left and Right) */}
      {/* Left side */}
      <SideWindow position={[-0.61, 0.2, 0.7]} />
      <SideWindow position={[-0.61, 0.2, 0.1]} />
      <SideWindow position={[-0.61, 0.2, -0.5]} />
      
      {/* Right side */}
      <SideWindow position={[0.61, 0.2, 0.7]} />
      <SideWindow position={[0.61, 0.2, 0.1]} />
      <SideWindow position={[0.61, 0.2, -0.5]} />

      {/* Headlights (Front Glow) */}
      <mesh position={[-0.4, -0.1, 1.76]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1.2} />
      </mesh>
      <mesh position={[0.4, -0.1, 1.76]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={1.2} />
      </mesh>

      {/* Tail Lights */}
      <mesh position={[-0.4, -0.1, -1.32]}>
        <boxGeometry args={[0.12, 0.08, 0.05]} />
        <meshStandardMaterial color="#FF3E3E" emissive="#FF3E3E" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.4, -0.1, -1.32]}>
        <boxGeometry args={[0.12, 0.08, 0.05]} />
        <meshStandardMaterial color="#FF3E3E" emissive="#FF3E3E" emissiveIntensity={0.5} />
      </mesh>

      {/* Bumpers */}
      {/* Front */}
      <mesh position={[0, -0.3, 1.76]} castShadow>
        <boxGeometry args={[1.3, 0.12, 0.08]} />
        <meshStandardMaterial color="#1E293B" roughness={0.7} />
      </mesh>
      {/* Rear */}
      <mesh position={[0, -0.3, -1.32]} castShadow>
        <boxGeometry args={[1.3, 0.12, 0.08]} />
        <meshStandardMaterial color="#1E293B" roughness={0.7} />
      </mesh>

      {/* Wheels */}
      {/* Front Left Wheel */}
      <group position={[-0.6, -0.4, 0.9]}>
        <mesh ref={(el) => (wheelsRef.current[0] = el)} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.26, 0.26, 0.2, 24]} />
          <meshStandardMaterial color="#1E293B" roughness={0.9} />
        </mesh>
        <mesh position={[-0.11, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.02, 12]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.6} />
        </mesh>
      </group>

      {/* Front Right Wheel */}
      <group position={[0.6, -0.4, 0.9]}>
        <mesh ref={(el) => (wheelsRef.current[1] = el)} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.26, 0.26, 0.2, 24]} />
          <meshStandardMaterial color="#1E293B" roughness={0.9} />
        </mesh>
        <mesh position={[0.11, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.02, 12]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.6} />
        </mesh>
      </group>

      {/* Rear Left Wheel */}
      <group position={[-0.6, -0.4, -0.7]}>
        <mesh ref={(el) => (wheelsRef.current[2] = el)} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.26, 0.26, 0.2, 24]} />
          <meshStandardMaterial color="#1E293B" roughness={0.9} />
        </mesh>
        <mesh position={[-0.11, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.02, 12]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.6} />
        </mesh>
      </group>

      {/* Rear Right Wheel */}
      <group position={[0.6, -0.4, -0.7]}>
        <mesh ref={(el) => (wheelsRef.current[3] = el)} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.26, 0.26, 0.2, 24]} />
          <meshStandardMaterial color="#1E293B" roughness={0.9} />
        </mesh>
        <mesh position={[0.11, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.02, 12]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// Side Window helper
function SideWindow({ position }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[0.02, 0.35, 0.4]} />
      <meshStandardMaterial color="#4F9CF9" emissive="#4F9CF9" emissiveIntensity={0.1} roughness={0.1} />
    </mesh>
  );
}
