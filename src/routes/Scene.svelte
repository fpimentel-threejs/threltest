<script>

    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    import {   Instance, InstancedMesh, useFrame } from '@threlte/core'

    import Github from '/github.gltf'
    import Gradpic from '/gradpic.jpg'
    import Instagram from '/instagramlogo.gltf'
    import LinkedIn from '/linkedin.gltf'
    import Resume from '/newresu.pdf'
    import Rose from '/rose.gltf'
    import Straw from '/straw.gltf'
    import TomatoBall from '/tomatoball.gltf'
    import Tompa from '/tompa.gltf'

    import * as THREE from 'three'
    import { Text, GLTF } from '@threlte/extras'
    import { cubicOut } from 'svelte/easing'
    import { Debug } from '@threlte/rapier'

    import {
            CircleBufferGeometry,
            MeshStandardMaterial,
            BoxBufferGeometry,
            DoubleSide,
            Scene,
            SphereBufferGeometry,
            MeshBasicMaterial,
            PlaneBufferGeometry,
            MathUtils, TorusBufferGeometry
    } from 'three'
    import { DEG2RAD } from 'three/src/math/MathUtils'
    import {
        AmbientLight,
        DirectionalLight,
        Mesh,
        PerspectiveCamera,
        useThrelte
    } from '@threlte/core'
    import { spring,
        tweened,
    } from 'svelte/motion'

    const scale = spring(1)
    const scale1 = spring(1)
    const scale2 = spring(1)
    const scale3 = spring(1)
    const scaleGit = spring(40)
    const scaleLI = spring(1.5)
    const scaleInsta = spring(15)
    const scaleTomp = spring(8)

    let camX = spring(10, {
            stiffness: 0.1,
            damping: 0.75,
            duration: 2000,
            easing: cubicOut
    });
    let camY = spring(0, {
            stiffness: 0.1,
            damping: 0.75,
            duration: 2000,
            easing: cubicOut
    });
    let camZ = spring(120, {
            stiffness: 0.1,
            damping: 0.75,
            duration: 2000,
            easing: cubicOut
    });

    const { camera } = useThrelte()
    const callback = () => {
        console.log($camera.position)
    }

    const gradpic = new THREE.TextureLoader().load(Gradpic);
    const saturnTexture = new THREE.TextureLoader().load('https://tse4.mm.bing.net/th?id=OIP.GFEc1rnPZX09j_rlhSaszQHaDt&pid=Api');

    let scaleSat = spring(1);

    const particlesGeometry = new THREE.BufferGeometry;
    const particlesCnt = 100;

    const posArray = new Float32Array(particlesCnt * 3);
    // xyz, xyz, xyz, xyz

    for(let i = 0; i < particlesCnt*3; i++){
            //posArray[i] = Math.random()
            //posArray[i] = Math.random() - 0.5
            posArray[i] = (Math.random() - .5)*(Math.random() * 800)
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
            size: 0.025,
            color: 0xffdddd
    })

    let dn = Date.now()
    useFrame(() => (dn = Date.now()))
    let textVisTompa = false;
    let textVisSol = false;

</script>

<PerspectiveCamera
        position={{ x: $camX, y: $camY, z: $camZ }} fov={24}>
</PerspectiveCamera>
<DirectionalLight shadow position={{ x: 3, y: 10, z: 10 }} />
<DirectionalLight position={{ x: -3, y: 10, z: -10 }} intensity={.2} />
<AmbientLight intensity={.2} />

<Text
        text="Hello, I'm Fernando."
        fontSize= {10}
        position={{x:-40, y:30, z:-200}}
        outlineBlur={1}
        color = {0x58F7CD}
        outlineColor = {0x24000a}
/>

<Text
        text="I enjoy web design and 3D art."
        fontSize= {10}
        position={{x:-50, y:15, z:-200}}
        outlineBlur={1}
        color = {0x58F7CD}
        outlineColor = {0x24000a}
/>
<Text scale={$scale}
      interactive
      on:pointerenter={() => ($scale = 1.3)}
      on:pointerleave={() => ($scale = 1)}
      on:click = {() =>
      $camX = -650
      }
      on:click = {() =>
      $camY = 30
      }
      on:click = {() =>
      $camZ = -500
      }
      text="ABOUT"
      fontSize= {15}
      position={{x: -80, y:50, z:-150}}
      outlineBlur={1}
      color = {0x58F7CD}
/>

<Text scale ={$scale1}
      interactive
      on:pointerenter={() => ($scale1 = 1.3)}
      on:pointerleave={() => ($scale1 = 1)}
      on:click = {() =>
      $camX = 730
      }
      on:click = {() =>
      $camY = 120
      }
      on:click = {() =>
      $camZ = -500
      }
      text="MY WORK"
      fontSize= {15}
      position={{x:30, y:50, z:-150}}
      outlineBlur={1}
      color = {0x58F7CD}
/>
<Text scale ={$scale2}
      interactive
      on:pointerenter={() => ($scale2 = 1.3)}
      on:pointerleave={() => ($scale2 = 1)}
      on:click={() => window.location = Resume}
      text="RESUME"
      fontSize= {15}
      position={{x:-80, y:-5, z:-150}}
      outlineBlur={1}
      color = {0x58F7CD}
/>


<Text
        scale={$scale3}
      interactive
      on:pointerenter={() => ($scale3 = 1.3)}
      on:pointerleave={() => ($scale3 = 1)}
        on:click = {() =>
      $camX = 730
      }
        on:click = {() =>
      $camY = -120
      }
        on:click = {() =>
      $camZ = -500
      }
      text="CONTACT"
      fontSize= {15}
      position={{x:30, y:-5, z:-150}}
      outlineBlur={1}
        color = {0x58F7CD}
/>

<Text
        scale={$scale3}
        text="Contact Me"
        fontSize= {15}
        position={{x:690, y:-80, z:-750}}
        outlineBlur={1}
        color = {0x58F7CD}
/>

<Text
        scale={$scale}
        text = "About Me"
        fontSize = {15}
        position = {{x: -690, y: 80, z: -750}}
        outlineBlur={1}
        color = {0x58F7CD}
/>

<Text
        text = "I am a 3D software developer looking
to apply my skills."
        fontSize = {8}
        position = {{x: -700, y: 60, z: -800}}
        outlineBlur={1}
        color = {0x58F7CD}
/>

<Text
        text = "After creating a virtual reality video game for my senior design project,
I found a passion for 3D design, specifically in the web browser.
I dedicate most of my time to creating 3D worlds within the browser
and learning all the skills that this entails. My hope is to become
part of a team that shares my interest and create something amazing."
        fontSize = {5}
        position = {{x: -700, y: 30, z: -800}}
        outlineBlur={.5}
        color = {0x58F7CD}
/>

<Text
        interactive
        scale ={$scale2}
        text = "Back to Home"
        on:pointerenter={() => ($scale2 = 1.3)}
        on:pointerleave={() => ($scale2 = 1)}
        on:click = {() =>
      $camX = 10
      }
        on:click = {() =>
      $camY = 0
      }
        on:click = {() =>
      $camZ = 120
      }
        fontSize = {10}
        position = {{x: -600, y: 100, z: -850}}
        outlineBlur={1}
        color = {0x58F7CD}
/>

<Text
        interactive
        scale ={$scale2}
        text = "Back to Home"
        on:pointerenter={() => ($scale2 = 1.3)}
        on:pointerleave={() => ($scale2 = 1)}
        on:click = {() =>
      $camX = 10
      }
        on:click = {() =>
      $camY = 0
      }
        on:click = {() =>
      $camZ = 120
      }
        fontSize = {10}
        position = {{x: 780, y: -50, z: -850}}
        outlineBlur={1}
        color = {0x58F7CD}
/>

<Text
        interactive
        scale ={$scale2}
        text = "Back to Home"
        on:pointerenter={() => ($scale2 = 1.3)}
        on:pointerleave={() => ($scale2 = 1)}
        on:click = {() =>
      $camX = 10
      }
        on:click = {() =>
      $camY = 0
      }
        on:click = {() =>
      $camZ = 120
      }
        fontSize = {10}
        position = {{x: 780, y: 190, z: -850}}
        outlineBlur={1}
        color = {0x58F7CD}
/>

<Mesh
        position={{x: -720,y: 40,z: -750}}
        geometry={new PlaneBufferGeometry(35, 50)}
        material={new MeshBasicMaterial({map: gradpic})}
/>

<GLTF
        interactive
        url={Github}
        on:pointerenter={() => ($scaleGit = 50)}
        on:pointerleave={() => ($scaleGit = 40)}
        on:click={() => window.location = "https://github.com/fpimentel-threejs"}
        scale = {$scaleGit}
        position={{x:660, y:-140, z:-720}}
/>

<GLTF
        interactive
        url={LinkedIn}
        on:pointerenter={() => ($scaleLI = 2)}
        on:pointerleave={() => ($scaleLI = 1.5)}
        on:click={() => window.location = "https://www.linkedin.com/in/fernando-pimentel-935143230/"}
        scale = {$scaleLI}
        position={{x:720, y:-140, z:-720}}
/>

<GLTF
        interactive
        url={Instagram}
        on:pointerenter={() => ($scaleInsta = 18)}
        on:pointerleave={() => ($scaleInsta = 15)}
        on:click={() => window.location = "https://www.instagram.com/rxnando/"}
        scale = {$scaleInsta}
        position={{x:770, y:-140, z:-720}}
/>
<GLTF
        url={Rose}
        position={{x: 5 * Math.sin(dn / 3000) , y: 5*Math.sin(dn / 3000)-10, z:10*Math.sin(dn / 1500)-200}}
        scale={5}
        rotation = {{x:.5, z: .5}}
/>

<GLTF
        url={Straw}
        position={{x: -650,y: -15,z: -720}}
        scale={15}
        rotation = {{x:.5,y: .3, z: .97}}
/>
<GLTF
        url= {TomatoBall}
        position={{x: -590, y: 40, z: -720}}
        scale={400}
        rotation = {{x:.5, z: -.5}}
/>

<GLTF
        interactive
        url={Tompa}
        on:pointerenter={() => ($scaleTomp = 10)}
        on:pointerleave={() => ($scaleTomp = 8)}
        on:pointerenter={() => (textVisTompa = true)}
        on:pointerleave={() => (textVisTompa = false)}
        scale = {$scaleTomp}
        on:click={() => window.location = "https://www.youtube.com/watch?v=9WIJQ6QJ_xQ"}
        position ={{x:680, y:120, z:-720}}
        rotation = {{y: 2}}
/>
<Text
        text = "Click on one of the models to view a demo
        of a project I've worked on"
        fontSize = {8}
        position = {{x: 670, y: 165, z: -800}}
        outlineBlur={1}
        color = {0x58F7CD}
/>

<Text
        text = "A tower defense VR game I created with a
partner for my senior design project"
        fontSize = {8}
        position = {{x: 670, y: 100, z: -750}}
        outlineBlur={1}
        color = {0x58F7CD}
        visible = {textVisTompa}
/>

<Text
        text = "A model of the solar system
I have created with Three.js(WIP)"
        fontSize = {8}
        position = {{x: 670, y: 100, z: -750}}
        outlineBlur={1}
        color = {0x58F7CD}
        visible = {textVisSol}
/>

<Mesh
        interactive
        position={{x: 790,y: 120,z: -750}}
        on:pointerenter={() => ($scaleSat = 1.3)}
        on:pointerleave={() => ($scaleSat = 1)}
        on:pointerenter={() => (textVisSol = true)}
        on:pointerleave={() => (textVisSol = false)}
        scale = {$scaleSat}
        on:click={() => window.location = "https://www.youtube.com/watch?v=jkDCX9NKc5U"}
        geometry={new SphereBufferGeometry(15, 32, 16)}
        material={new MeshBasicMaterial({map: saturnTexture})}
/>

<Mesh
        interactive
        position={{x: 790,y: 120,z: -750}}
        on:pointerenter={() => ($scaleSat = 1.3)}
        on:pointerleave={() => ($scaleSat = 1)}
        on:pointerenter={() => (textVisSol = true)}
        on:pointerleave={() => (textVisSol = false)}
        scale = {$scaleSat}
        rotation = {{x: 2, y: .2}}
        on:click={() => window.location = "https://www.youtube.com/watch?v=jkDCX9NKc5U"}
        geometry={new TorusBufferGeometry(20, 3, 2, 62)}
        material={new MeshBasicMaterial({map: saturnTexture, transparent: true, opacity: 0.6})}
/>

<Mesh
        rotation={{y: Math.tan(dn / 10000)}}
        position={{z: -200}}
        geometry={new SphereBufferGeometry(32, 32, 16)}
        material={new MeshBasicMaterial({ wireframe: true })}
/>