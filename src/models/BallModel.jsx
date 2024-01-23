/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: SusanKing (https://sketchfab.com/krolzuzannapl)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/balls-e041d432d5c141e0a8f57ce2784ca47d
Title: Balls
*/

import React, { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useConvexPolyhedron } from "@react-three/cannon";
import { Geometry } from "three-stdlib";

// function toConvexProps(bufferGeometry) {
//   const geo = new Geometry().fromBufferGeometry(bufferGeometry);
//   // Merge duplicate vertices resulting from glTF export.
//   // Cannon assumes contiguous, closed meshes to work
//   geo.mergeVertices();
//   return [geo.vertices.map((v) => [v.x, v.y, v.z]), geo.faces.map((f) => [f.a, f.b, f.c]), []]; // prettier-ignore
// }
export function BeachBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  // const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
  // const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
  return (
    <group rotation={[-0.435, 0.271, -1.922]} scale={40}>
      <mesh
        geometry={nodes.beach_ball_red_0.geometry}
        material={materials.material}
      />
      <mesh
        geometry={nodes.beach_ball_white_0.geometry}
        material={materials.white}
      />
      <mesh
        geometry={nodes.beach_ball_yellow_0.geometry}
        material={materials.yellow}
      />
      <mesh
        geometry={nodes.beach_ball_blue_0.geometry}
        material={materials.blue}
      />
    </group>
  );
}
export function SoccerBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  // const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
  // const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
  return (
    <group
      position={[72.532, 0, -1.391]}
      rotation={[-Math.PI / 2, 0, -0.453]}
      scale={13.123}
      // geometry={nodes.Cylinder.geometry}
      // ref={ref}
    >
      <mesh
        geometry={nodes.soccer_ball_black_soccer_0.geometry}
        material={materials.black_soccer}
      />
      <mesh
        geometry={nodes.soccer_ball_white_soccer_0.geometry}
        material={materials.white_soccer}
      />
    </group>
  );
}
export function BasketBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  // const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
  // const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
  return (
    <group
      position={[69.604, -0.017, -49.927]}
      rotation={[-1.093, -0.506, -1.889]}
      scale={[14.499, 14.547, 14.499]}
      // geometry={nodes.Cylinder.geometry}
      // ref={ref}
    >
      <mesh
        geometry={nodes.basket_ball_orange_basket_0.geometry}
        material={materials.orange_basket}
      />
      <mesh
        geometry={nodes.basket_ball_black_basket_0.geometry}
        material={materials.black_basket}
      />
    </group>
  );
}
export function TennisBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  // const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
  // const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
  return (
    <group
      position={[98.432, 0, -26.27]}
      rotation={[-2.174, 0.475, 0.985]}
      scale={3.55}
      // geometry={nodes.Cylinder.geometry}
      // ref={ref}
    >
      <mesh
        geometry={nodes.tennis_ball_green_tennis_0.geometry}
        material={materials.green_tennis}
      />
      <mesh
        geometry={nodes.tennis_ball_white_tennis_0.geometry}
        material={materials.white_tennis}
      />
    </group>
  );
}
export function BaseBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  // const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
  // const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
  return (
    <group
      position={[94.175, 0, -14.348]}
      rotation={[-0.766, 1.293, -2.139]}
      scale={0.075}
      // geometry={nodes.Cylinder.geometry}
      // ref={ref}
    >
      <mesh
        geometry={nodes.baseball_baseball_red_0.geometry}
        material={materials.baseball_red}
      />
      <mesh
        geometry={nodes.baseball_white_baseball_0.geometry}
        material={materials.white_baseball}
      />
    </group>
  );
}
export function BowlingBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  // const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
  // const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
  return (
    <group
      position={[106.646, 0, -62.317]}
      rotation={[-Math.PI / 2, 0, 1.298]}
      scale={[10.835, 10.835, 10.804]}
      // geometry={nodes.Cylinder.geometry}
      // ref={ref}
    >
      <mesh
        geometry={nodes.bowling_ball_bowling_0.geometry}
        material={materials.bowling}
      />
      <mesh
        geometry={nodes.bowling_ball_holes_0.geometry}
        material={materials.holes}
      />
    </group>
  );
}
export function FootBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  // const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
  // const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
  return (
    <group
      position={[80.137, 0, -89.852]}
      rotation={[-Math.PI, 1.141, 2.457]}
      scale={[8.061, 8.061, 11.357]}
      // geometry={nodes.Cylinder.geometry}
      // ref={ref}
    >
      <mesh
        geometry={nodes.football_football001_0.geometry}
        material={materials["football.001"]}
      />
      <mesh
        geometry={nodes.football_football_white001_0.geometry}
        material={materials["football_white.001"]}
      />
    </group>
  );
}
export function VolleyBall({ props }) {
  const { nodes, materials } = useGLTF("/assets/balls/scene.gltf");
  // const geo = useMemo(() => toConvexProps(nodes.Cylinder.geometry), [nodes]);
  // const [ref] = useConvexPolyhedron(() => ({ mass: 100, ...props, args: geo }));
  return (
    <group
      position={[42.508, 0, -37.848]}
      rotation={[-2.317, 0.739, 0]}
      scale={8.032}
      // geometry={nodes.Cylinder.geometry}
      // ref={ref}
    >
      <mesh
        geometry={nodes.volley_ball_volley_yellow_0.geometry}
        material={materials.volley_yellow}
      />
      <mesh
        geometry={nodes.volley_ball_volley_blue_0.geometry}
        material={materials.volley_blue}
      />
      <mesh
        geometry={nodes.volley_ball_volley_white_0.geometry}
        material={materials.volley_white}
      />
    </group>
  );
}

useGLTF.preload("/assets/balls/scene.gltf");
