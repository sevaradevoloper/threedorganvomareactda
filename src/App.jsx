import { Canvas,useFrame } from '@react-three/fiber'
import{useRef} from 'react'




const AnimatedBox = ()=>{
  const boxRef = useRef();

  useFrame(()=>{
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.005;
    boxRef.current.rotation.z += 0.005;
  });



  return(
    <mesh ref={boxRef} >
         <boxGeometry args={[2,3,2]}/>
         <meshStandardMaterial color={0x00bfff}/>
       </mesh>
  )
}

const App = () => {
  return (
    <div id='canvas-container'>
      <Canvas>
          <AnimatedBox/>
         <directionalLight position={[2,5,1]}/>
      </Canvas>
    </div>
    
  )
}

export default App