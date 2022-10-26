import type { NextPage } from 'next';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Earth from '../components/Earth';
import { Html} from '@react-three/drei';

const Home: NextPage = () => {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{height: "100vh"}} id="canvas">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Html fullscreen position={[5.8, -2.5, 0]}>
            <div>
              <button className="chanceBtn" type="button">take a chance</button>
            </div>
          </Html>
          <Earth/>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;