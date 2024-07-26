import { Logo } from "../ui/Logo";
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Suspense } from "react";

// function Model() {
//     const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
//     return (<primitive object={gltf.scene} />)
//   }

export const PreviewModel = () => {
    return(
        <>
            <Logo />
            <div>
                {/* <Suspense>
                    <Canvas>
                    <ambientLight />
                    <Model />
                    </Canvas>
                </Suspense> */}
            </div>
        </>
    );
}