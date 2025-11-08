import { Logo3D } from './Logo3D';
import { Canvas } from '@react-three/fiber';

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-64 h-64">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <Logo3D />
        </Canvas>
      </div>
    </div>
  );
};

export const LoadingSpinner = () => (
  <div className="w-12 h-12">
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <Logo3D />
    </Canvas>
  </div>
);