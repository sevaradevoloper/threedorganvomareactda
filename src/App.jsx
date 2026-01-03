import { Canvas,useFrame } from '@react-three/fiber'
import{useRef} from 'react'

import{OrbitControls,GizmoHelper,GizmoViewcube,GizmoViewport } from '@react-three/drei';
import{useControls} from 'leva';

const AnimatedBox = ()=>{
  const boxRef = useRef();


  const {color, speed } = useControls({

    color:"#00bfff",
    speed:{
      value:0.005,
      min:0.0,
      max:0.03,
      step:0.001
    }
  })
   



  useFrame(()=>{
    boxRef.current.rotation.x += speed;
    boxRef.current.rotation.y += speed;
    boxRef.current.rotation.z += speed;
  });



  return(
    <mesh ref={boxRef} >
         <boxGeometry args={[2,3,2]}/>
         <meshStandardMaterial color={color}/>
         <axesHelper args={[10]}/>
       </mesh>
  )
}

const App = () => {
  return (
    <div id='canvas-container'>
      <Canvas>
        <GizmoHelper aligment='bottom-right' margin={[80,80]}>
            <GizmoViewport/>
        </GizmoHelper>
        <gridHelper args={[20,20,0xff22aa,0x55ccff]}/>
        <axesHelper args={[10]}/>
        <OrbitControls />
        <AnimatedBox/>
        <directionalLight position={[2,5,1]}/>
      </Canvas>
    </div>
    
  )
}

export default App