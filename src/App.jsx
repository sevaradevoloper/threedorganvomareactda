import { Canvas,useFrame } from '@react-three/fiber'
import{useRef} from 'react'

import{OrbitControls,GizmoHelper,GizmoViewcube,GizmoViewport,useHelper } from '@react-three/drei';
import{useControls} from 'leva';
import{SpotLightHelper} from 'three';



const LightWithHelper = ()=>{


  const light = useRef();


  const {angle,penumbra} =useControls({
    angle:Math.PI /8,
    penumbra:{
      value:0.0,
      min:0.0,
      max:1.0,
      step:0.1
    }
  })


  useHelper(light,SpotLightHelper,'orange')
  return(
     <spotLight  ref={light} penumbra={penumbra}  angle={angle} intensity={80} color={0xffea00} position={[2,5,1]}/>
  )
}


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
        <ambientLight intensity={0.2} color={0xfcfcfc}/>
       <LightWithHelper/>
      </Canvas>
    </div>
    
  )
}

export default App