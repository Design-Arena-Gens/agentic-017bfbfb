"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const palette = ["#fbbf24", "#fb7185", "#38bdf8", "#a855f7", "#34d399"];

type ShapeConfig = {
  position: [number, number, number];
  color: string;
  scale: number;
  speed: number;
  type: "sphere" | "cone" | "torus" | "icosahedron";
};

function FloatingShape({ config }: { config: ShapeConfig }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * config.speed;
    ref.current.rotation.x = Math.sin(t) * 0.6;
    ref.current.rotation.y = Math.cos(t) * 0.6;
    ref.current.position.y = config.position[1] + Math.sin(t) * 0.5;
  });

  return (
    <Float
      speed={config.speed * 1.2}
      rotationIntensity={1.2}
      floatIntensity={2.4}
      position={config.position}
    >
      <mesh ref={ref} castShadow>
        {config.type === "sphere" && <icosahedronGeometry args={[1, 2]} />}
        {config.type === "cone" && <coneGeometry args={[0.9, 1.6, 36]} />}
        {config.type === "torus" && <torusKnotGeometry args={[0.6, 0.2, 120, 16]} />}
        {config.type === "icosahedron" && <icosahedronGeometry args={[1, 1]} />}
        <meshStandardMaterial
          color={config.color}
          roughness={0.25}
          metalness={0.8}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

export function HeroCanvas() {
  const shapes = useMemo<ShapeConfig[]>(
    () => [
      { position: [-2.5, 0.2, -1.5] as [number, number, number], color: palette[0], scale: 1.3, speed: 0.8, type: "sphere" },
      { position: [2.2, 0.5, 0.5] as [number, number, number], color: palette[1], scale: 1.1, speed: 1, type: "torus" },
      { position: [0.6, -0.4, -2] as [number, number, number], color: palette[2], scale: 0.9, speed: 0.7, type: "cone" },
      { position: [-1, -0.7, 1.6] as [number, number, number], color: palette[3], scale: 1.4, speed: 1.1, type: "icosahedron" },
      { position: [0, 1.1, 0.2] as [number, number, number], color: palette[4], scale: 1.6, speed: 0.9, type: "sphere" },
    ],
    []
  );

  return (
    <Canvas
      className="h-full w-full"
      shadows
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <color attach="background" args={["#050510"]} />
      <fog attach="fog" args={["#050510", 10, 30]} />
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color={"#38bdf8"} />
      <group scale={1.2}>
        {shapes.map((config, index) => (
          <group key={index} scale={config.scale}>
            <FloatingShape config={config} />
          </group>
        ))}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.4, 0]} receiveShadow>
          <circleGeometry args={[12, 64]} />
          <meshStandardMaterial color="#050510" />
        </mesh>
      </group>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      <Environment preset="studio" />
    </Canvas>
  );
}

export default function HeroStage() {
  return (
    <div className="h-[28rem] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      <Suspense fallback={<div className="h-full w-full animate-pulse bg-slate-900" />}>
        <HeroCanvas />
      </Suspense>
    </div>
  );
}
