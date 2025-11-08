import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Text3D, Center, useMatcapTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingTEDx() {
  const groupRef = useRef<THREE.Group>(null);
  const [matcapTexture] = useMatcapTexture('7B5254_ED765E_E79D96_EBE1AF');

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <Text3D
          font="https://raw.githack.com/mrdoob/three.js/r129/examples/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
        >
          TEDx
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
    </group>
  );
}

export const Logo3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingTEDx />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

export default Logo3D;