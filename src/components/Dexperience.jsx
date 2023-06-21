import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Vitals from './Vitals';

function Model() {
  const gltf = useLoader(GLTFLoader, '/models/human_cell.glb');
  const modelRef = useRef();
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    // Update the scale of the model based on the zoom state
    modelRef.current.scale.set(zoom, zoom, zoom);

    // Update the rotation of the model based on the rotation state
    modelRef.current.rotation.y = rotation;
  });

  useEffect(() => {
    // Add scroll event listener to handle zooming and rotation on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setZoom(3 + scrollPosition / 500); // Adjust the divisor to control the zoom speed

      // Calculate the rotation angle based on scroll position
      const rotationAngle = (scrollPosition / 500) * (Math.PI / 1); // 30 degrees in radians
      setRotation(rotationAngle);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <primitive object={gltf.scene} ref={modelRef} position={[0, 1, 0]} />;
}

function Dexperience() {
  return (
    <div>
      <div className="w-screen h-screen relative">
        <p className="text-4xl font-bold leading-none text-center">Something totally different</p>
        <div
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ pointerEvents: 'none' }}
        >
          <Vitals />
        </div>

        <Canvas className="w-full h-full" camera={{ position: [5, 4, 5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model />
        </Canvas>
      </div>
      <br/><br/>
      <div class="flex justify-center items-center ">

  <a  href="https://vitals2077.vercel.app/" className="px-8 py-3 font-semibold rounded bg-gradient-to-r from-teal-200 to-teal-500 text-white">
    Check Project
  </a>
</div>
    </div>
  );
}

export default Dexperience;
