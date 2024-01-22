import "./App.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Island from "./models/Island";
import { Sky } from "@react-three/drei";
import Hogwarts from "./models/Hogwarts";

extend({ OrbitControls });

function CameraControls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controlsRef = useRef();

  useEffect(() => {
    controlsRef.current = new OrbitControls(camera, domElement);
    controlsRef.current.autoRotate = true;
    controlsRef.current.autoRotateSpeed = -0.2;

    return () => {
      controlsRef.current.dispose();
    };
  }, [camera, domElement]);

  return null;
}

// ... (imports)

function AnimationCanvas() {
  const keyMap = useRef({});
  const groupRef = useRef();
  const [initialCameraPosition, setInitialCameraPosition] = useState([
    0, 100, 0,
  ]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      keyMap.current[event.code] = true;
    };

    const handleKeyUp = (event) => {
      keyMap.current[event.code] = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(({ camera }, delta) => {
    const movementSpeed = 5;
    const rotationSpeed = 1;

    const moveForward = new THREE.Vector3(0, 0, -1);

    const rotation = new THREE.Euler(
      camera.rotation.x,
      camera.rotation.y,
      camera.rotation.z,
      "YXZ"
    );
    moveForward.applyEuler(rotation);

    if (keyMap.current["ArrowDown"]) {
      console.log(camera.rotation);
      camera.rotation.x -= rotationSpeed * delta;
    }
    if (keyMap.current["ArrowUp"]) {
      camera.rotation.x += rotationSpeed * delta;
    }
    if (keyMap.current["ArrowRight"]) {
      camera.rotation.y -= rotationSpeed * delta;
    }
    if (keyMap.current["ArrowLeft"]) {
      camera.rotation.y += rotationSpeed * delta;
    }
    if (keyMap.current["Space"]) {
      camera.position.x += moveForward.x * movementSpeed * delta;
      camera.position.y += moveForward.y * movementSpeed * delta;
      camera.position.z += moveForward.z * movementSpeed * delta;
    }
  });

  return (
    <group ref={groupRef}>
      <Sky />
      <Hogwarts />
      {/* Set initial camera position */}
      <perspectiveCamera position={initialCameraPosition} fov={75} />
    </group>
  );
}

function App() {
  return (
    <div className="anim">
      <Canvas camera={{ position: [0, 0, 0], fov: 75 }} tabIndex={0}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <AnimationCanvas />
        <CameraControls />
      </Canvas>
    </div>
  );
}

export default App;
