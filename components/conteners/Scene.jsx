"use client";
import Model from "./Model";
import { Suspense } from "react";

import { Canvas, useThree } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas>
      <directionalLight position={[-5, -5, 0]} intensity={4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
