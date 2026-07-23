"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Pre-compute particle positions at module scope to avoid impure function calls during render
const PARTICLE_POSITIONS: Array<{ position: [number, number, number] }> = Array.from({ length: 8 }).map((_, i) => ({
  position: [
    Math.sin((i / 8) * Math.PI * 2) * 3 + (Math.random() - 0.5),
    Math.cos((i / 8) * Math.PI * 2) * 3 + (Math.random() - 0.5),
    (Math.random() - 0.5) * 4
  ] as [number, number, number]
}));

const SceneContent = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Mouse interaction & Auto rotation
  useFrame((state) => {
    if (groupRef.current) {
      // Auto rotation base
      const timeRotation = state.clock.elapsedTime * 0.05;
      
      // Mouse interaction (reduced intensity)
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      // Combine auto rotation and mouse lerp offset
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, timeRotation + targetX, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial 
            color="#0B1F5E" 
            wireframe 
            emissive="#3B82F6"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Orbiting particles (reduced count and calm motion) */}
      {PARTICLE_POSITIONS.map((particle, i) => (
        <Float key={i} speed={1.5} rotationIntensity={1} floatIntensity={1}>
          <Sphere 
            args={[0.05, 16, 16]} 
            position={particle.position}
          >
            <meshStandardMaterial color="#FF7A00" emissive="#FF7A00" emissiveIntensity={2} toneMapped={false} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas 
        frameloop="always"
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} color="#3B82F6" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#FF7A00" intensity={1} />
        <SceneContent />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
