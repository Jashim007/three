import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
export default function Object() {
  const gltf = useLoader(GLTFLoader, "../gltf/fbx_0.gltf");
  const obj = useLoader(OBJLoader, "../gltf/model.OBJ");

  console.log(gltf);
  console.log(obj.children[0]);

  return (
    <>
      <OrbitControls />
      <primitive object={gltf.scene} /> {/* shirt image */}
      <primitive object={obj.children[0]} /> {/*   3d model */}
    </>
  );
}
