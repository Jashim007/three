import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Model = () => {
  const gltf = useGLTF("../gltf/fbx_0.gltf");
  const modelRef = useRef();

  // Optional: Rotate the model
  useFrame(() => {
    modelRef.current.rotation.x += 0.01;
    modelRef.current.rotation.y += 0.01;
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
};
export default Model;
