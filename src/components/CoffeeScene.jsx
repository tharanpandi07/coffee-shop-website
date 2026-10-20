import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Cup() {
  const cup = useRef();
  const coffee = useRef();

  useFrame((state, delta) => {
    if (!cup.current) return;

    cup.current.rotation.z = THREE.MathUtils.damp(
      cup.current.rotation.z,
      -state.pointer.x * 0.12,
      3,
      delta
    );

    cup.current.rotation.x = THREE.MathUtils.damp(
      cup.current.rotation.x,
      state.pointer.y * 0.08,
      3,
      delta
    );

    if (coffee.current) {
      coffee.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.12}
      floatIntensity={0.35}
    >
      <group ref={cup} position={[0, -0.1, 0]}>
        {/* Ceramic cup */}
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.78, 0.52, 1.15, 64, 1, true]} />
          <meshStandardMaterial
            color="#e7d3b3"
            roughness={0.23}
            metalness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Cup base */}
        <mesh position={[0, -0.57, 0]}>
          <cylinderGeometry args={[0.52, 0.52, 0.08, 48]} />
          <meshStandardMaterial color="#d5bd9a" roughness={0.3} />
        </mesh>

        {/* Coffee inside the cup */}
        <mesh ref={coffee} position={[0, 0.38, 0]}>
          <cylinderGeometry args={[0.735, 0.735, 0.035, 64]} />
          <meshStandardMaterial
            color="#432315"
            roughness={0.18}
            metalness={0.08}
          />
        </mesh>

        {/* Coffee crema */}
        <mesh position={[0, 0.402, 0]}>
          <circleGeometry args={[0.68, 64]} />
          <meshStandardMaterial
            color="#9d6035"
            roughness={0.32}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Cup handle */}
        <mesh
          position={[0.82, 0.02, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[0.36, 0.105, 20, 64]} />
          <meshStandardMaterial
            color="#e7d3b3"
            roughness={0.23}
          />
        </mesh>

        {/* Small highlight ring */}
        <mesh position={[0, 0.55, 0]}>
          <torusGeometry args={[0.76, 0.025, 12, 64]} />
          <meshStandardMaterial color="#f5e6cd" roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export default function CoffeeScene() {
  return (
    <div className="coffee-scene">
      <Canvas
        camera={{ position: [0, 1.2, 4.7], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.3} />
        <directionalLight
          position={[3, 5, 4]}
          intensity={2.5}
          castShadow
        />
        <pointLight
          position={[-3, 1, -2]}
          color="#d0a933"
          intensity={25}
        />

        <Cup />

        <ContactShadows
          position={[0, -0.95, 0]}
          opacity={0.4}
          scale={4}
          blur={2.5}
        />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}