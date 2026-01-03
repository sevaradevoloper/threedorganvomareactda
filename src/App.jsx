import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Mesh } from 'three'
Canvas


const App = () => {
  return (
    <div id='canvas-container'>
      <Canvas className='canvas'>
       <mesh>
         <sphereGeometry/>
         <meshBasicMaterial/>
       </mesh>
        
      </Canvas>
    </div>
    
  )
}

export default App