"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float, MeshDistortMaterial, Lightformer } from "@react-three/drei";
import { Suspense } from "react";

export default function CanvasScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} frameloop="demand">
      <Suspense fallback={null}>
        {/* Procedural Environment: 0 network requests, instant loading */}
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
            <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
            <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
          </group>
        </Environment>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh scale={1.5}>
            <octahedronGeometry args={[1, 0]} />
            <MeshDistortMaterial
              color="#ffffff"
              envMapIntensity={2}
              clearcoat={1}
              clearcoatRoughness={0.1}
              metalness={0.9}
              roughness={0.1}
              distort={0}
              speed={0}
            />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
}
