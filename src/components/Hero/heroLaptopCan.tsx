import { useSpring } from "@react-spring/web";
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { a as three } from "@react-spring/three";

import {
  Environment,
  ContactShadows,
  Html,
  useProgress,
} from "@react-three/drei";
import LaptopModel from "./laptopModel";
import { useTheme } from "next-themes";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <p className="text-center">{Math.round(progress)}% Carregando...</p>
    </Html>
  );
}

export default function HeroLaptopCan() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(true);

  const props = useSpring({ open: Number(open) });
  return (
    <div className="lg:h-[400px] lg:w-[500px] w-[300px] h-[300px] hover:scale-105 transition-transform">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <three.pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={<Loader />}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <LaptopModel
              open={open}
              hinge={props.open.to([0, 1], [1.575, -0.425])}
            />
          </group>
          <Environment preset="sunset" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
          color={theme === "dark" ? "#575757" : "#000000"}
        />
      </Canvas>
    </div>
  );
}
