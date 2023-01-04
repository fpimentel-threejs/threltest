<script>
    import {Mesh, useFrame} from "@threlte/core";
    import {MeshBasicMaterial, SphereBufferGeometry, TorusBufferGeometry} from "three";
    import {Float, GLTF, Text} from "@threlte/extras";
    import {spring} from "svelte/motion";
    import * as THREE from "three";

    let dn = Date.now()
    useFrame(() => (dn = Date.now()))

    const scaleTomp = spring(8)
    let scaleSat = spring(1);
    let scaleBlend = spring(40);

    const saturnTexture = new THREE.TextureLoader().load('https://tse4.mm.bing.net/th?id=OIP.GFEc1rnPZX09j_rlhSaszQHaDt&pid=Api');

    let textVisTompa = false;
    let textVisSol = false;
    let textVisBlend = false;
</script>

<Text
        text = "Click on one of the models to view a demo
        of a project I've worked on"
        fontSize = {8}
        font="/Assets/Louis George Cafe Light.ttf"
        position = {{x: 670, y: 165, z: -800}}
        outlineBlur={.5}
        color = {0x58F7CD}
/>

<Mesh
        interactive
        position={{x: 790 + 2 * Math.sin(dn / 1000),y: 120 + 2 * Math.sin(dn / 1000),z: -750 + 2 * Math.sin(dn / 1000)}}
        on:pointerenter={() => ($scaleSat = 1.3)}
        on:pointerleave={() => ($scaleSat = 1)}
        on:pointerenter={() => (textVisSol = true)}
        on:pointerleave={() => (textVisSol = false)}
        scale = {$scaleSat}
        rotation = {{x: 2, y: .2}}
        on:click={() => window.location = "https://polite-elf-0edf20.netlify.app/"}
        geometry={new TorusBufferGeometry(20, 3, 2, 62)}
        material={new MeshBasicMaterial({map: saturnTexture, transparent: true, opacity: 0.6})}
/>

<Mesh
        interactive
        position={{x: 790 + 2 * Math.sin(dn / 1000),y: 120 + 2 * Math.sin(dn / 1000),z: -750 + 2 * Math.sin(dn / 1000)}}
        on:pointerenter={() => ($scaleSat = 1.3)}
        on:pointerleave={() => ($scaleSat = 1)}
        on:pointerenter={() => (textVisSol = true)}
        on:pointerleave={() => (textVisSol = false)}
        scale = {$scaleSat}
        on:click={() => window.location = "https://polite-elf-0edf20.netlify.app/"}
        geometry={new SphereBufferGeometry(15, 32, 16)}
        material={new MeshBasicMaterial({map: saturnTexture})}
/>

<Text
        text = "A (soon to be scale) model of the
solar system I have created
with Three.js(WIP)"
        fontSize = {8}
        font="/Assets/Louis George Cafe Light.ttf"
        position = {{x: 670, y: 100, z: -750}}
        outlineBlur={.5}
        color = {0x58F7CD}
        visible = {textVisSol}
/>

<!--<GLTF
        interactive
        url='/Assets/blenderlogo.gltf'
        on:pointerenter={() => ($scaleBlend = 52)}
        on:pointerleave={() => ($scaleBlend = 40)}
        on:pointerenter={() => (textVisBlend = true)}
        on:pointerleave={() => (textVisBlend = false)}
        scale = {$scaleBlend}
        on:click={() => window.location = "/BlenderPort"}
        position ={{x:710 + 2 * Math.sin(dn / 1000), y:100 + 2 * Math.sin(dn / 1000), z:-720 + 2 * Math.sin(dn / 1000)}}
/>-->

<Text
        text = "A tower defense VR game I created with a
partner for my senior design project"
        fontSize = {8}
        font="/Assets/Louis George Cafe Light.ttf"
        position = {{x: 670, y: 100, z: -750}}
        outlineBlur={.5}
        color = {0x58F7CD}
        visible = {textVisTompa}
/>

<GLTF
        interactive
        url='/Assets/tompa.gltf'
        on:pointerenter={() => ($scaleTomp = 10)}
        on:pointerleave={() => ($scaleTomp = 8)}
        on:pointerenter={() => (textVisTompa = true)}
        on:pointerleave={() => (textVisTompa = false)}
        scale = {$scaleTomp}
        on:click={() => window.location = "https://www.youtube.com/watch?v=9WIJQ6QJ_xQ"}
        position ={{x:680 + 2 * Math.sin(dn / 1000), y:120 + 2 * Math.sin(dn / 1000), z:-720 + 2 * Math.sin(dn / 1000)}}
        rotation = {{y: 2}}
/>

<Text
        text = "Collection of my creations on Blender"
        fontSize = {8}
        font="/Assets/Louis George Cafe Light.ttf"
        position = {{x: 670, y: 100, z: -750}}
        outlineBlur={.5}
        color = {0x58F7CD}
        visible = {textVisBlend}
/>