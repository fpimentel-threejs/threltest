<script>

    import { useFrame } from '@threlte/core'
    import { Text, GLTF } from '@threlte/extras'
    import {
        SphereBufferGeometry,
        MeshBasicMaterial, BoxGeometry
    } from 'three'
    import {
        AmbientLight,
        DirectionalLight,
        Mesh,
        PerspectiveCamera,
        useThrelte
    } from '@threlte/core'
    import { spring,
    } from 'svelte/motion'
    import About from "./About.svelte";
    import Contact from "./Contact.svelte";
    import Work from "./Work.svelte";

    const scale = spring(1)
    const scale1 = spring(1)
    const scale2 = spring(1)
    const scale3 = spring(1)

    let camX = spring(10)
    let camY = spring(0)
    let camZ = spring(120)

    const { camera } = useThrelte()
    const callback = () => {
        console.log($camera.position)
    }

    let dn = Date.now()
    useFrame(() => (dn = Date.now()))

    const rodGeometry = new BoxGeometry (10,500,10)
    const rodMaterial = new MeshBasicMaterial( {color: 0x00ff00} )

    /*const positions: { x: number; z: number }[] = []
    const rows = 30
    for (let x = 0; x < rows; x += 1) {
        for (let z = 0; z < rows; z += 1) {
            positions.push({
                x,
                z
            })
        }
    }*/

    let wiggleFactor = 2 * Math.sin(dn / 1000)
    let linkfont = "/Assets/Louis George Cafe Light.ttf";

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
        font="/Assets/Louis George Cafe.ttf"
        position={{x:-40, y:30, z:-200}}
        outlineBlur={1}
        color = {0x58F7CD}
        outlineColor = {0x24000a}
/>

<Text
        text="I enjoy web design and 3D art."
        fontSize= {10}
        font={linkfont}
        position={{x:-50, y:15, z:-200}}
        outlineBlur={.3}
        color = {0x58F7CD}
        outlineColor = {0x24000a}
/>

<Text
      scale ={$scale1}
      interactive
      on:pointerenter={() => ($scale1 = 1.2)}
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
      font = {linkfont}
      position={{x:10, y:50, z:-150}}
      outlineBlur={1}
      color = {0x58F7CD}
/>

<Text scale ={$scale}
      interactive
      on:pointerenter={() => ($scale = 1.2)}
      on:pointerleave={() => ($scale = 1)}
      on:click={() => window.location = '/Assets/fpimentel_resume.pdf'}
      text="RESUME"
      fontSize= {15}
      font = {linkfont}
      position={{x:-80, y:-15, z:-150}}
      outlineBlur={1}
      color = {0x58F7CD}
/>

<Text scale ={$scale2}
      interactive
      on:pointerenter={() => ($scale2 = 1.2)}
      on:pointerleave={() => ($scale2 = 1)}
      on:click = {() =>
        $camX = -650
      }
      on:click = {() =>
        $camY = 35
      }
      on:click = {() =>
        $camZ = -500
      }
      text="ABOUT"
      fontSize= {15}
      font = {linkfont}
      position={{x:-80, y: 50, z:-150}}
      outlineBlur={1}
      color = {0x58F7CD}
/>


<Text
        scale={$scale3}
      interactive
      on:pointerenter={() => ($scale3 = 1.2)}
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
        font = {linkfont}
      position={{x:10, y:-15, z:-150}}
      outlineBlur={1}
        color = {0x58F7CD}
/>

<Text
        interactive
        scale ={$scale2}
        text = "Back to Home"
        font={linkfont}
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
        font={linkfont}
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
        font={linkfont}
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

<GLTF
        url='/Assets/rose.gltf'
        position={{x: 5 * Math.sin(dn / 3000) , y: 5*Math.sin(dn / 3000)-10, z:10*Math.sin(dn / 1500)-200}}
        scale={5}
        rotation = {{x:.5, z: .5}}
/>

<Mesh
        rotation={{y: Math.tan(dn / 10000)}}
        position={{z: -200}}
        geometry={new SphereBufferGeometry(32, 32, 16)}
        material={new MeshBasicMaterial({ wireframe: true })}
/>

<Mesh
        geometry = {rodGeometry}
        material = {rodMaterial}
        position={{x: 0,y: -300,z: -800}}
/>

<About/>
<Contact/>
<Work/>