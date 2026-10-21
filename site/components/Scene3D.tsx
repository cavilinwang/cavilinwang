"use client";
// react-three-fiber + drei: a floating 3D object. Swap <Icosahedron> for a GLB via drei's useGLTF.
import { Canvas } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]} style={{ position: "absolute", inset: 0 }}>
      <ambientLight intensity={0.6} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <MeshTransmissionMaterial thickness={0.6} roughness={0.1} chromaticAberration={0.05} />
        </mesh>
      </Float>
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
