import type { NextPage } from 'next';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Earth from '../components/Earth';


const Home: NextPage = () => {

  return (
    <div>
      <div style={{height: "100vh"}} id="canvas">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[10, 10, -5]} />
          <Earth/>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;