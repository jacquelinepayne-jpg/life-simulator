/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Html} from '@react-three/drei'
import gsap from 'gsap'
import { useRouter } from 'next/router'

export function Earth(props) {
  const { nodes, materials } = useGLTF('earth/earth.gltf')
  const router = useRouter()

  const mesh = useRef()
  useFrame(({ clock }) => { 
    mesh.current.rotation.y += 0.001
  }) 

  function handleClick(){
    gsap.to(mesh.current.position, {
      z: 2.3,
      duration: 10,
      ease: "sine"
    })
    
    setTimeout(() => {
      router.push("about")
    }, 9000)
    
  }
  return (
    
    <group {...props} dispose={null} ref={mesh}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['moon.001']} scale={2.5} />
        <Html fullscreen >
            <div className="chanceBtnContainer">
              <button className="chanceBtn" type="button" onClick={handleClick}>take a chance</button>
            </div>
         </Html>
      </group>
    </group>
  )
}

useGLTF.preload('/earth.gltf')
export default Earth;