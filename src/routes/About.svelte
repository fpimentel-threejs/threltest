<script>
    import {Text} from "@threlte/extras";
    import {spring} from "svelte/motion";
    import {Mesh, useFrame} from "@threlte/core";
    import {MeshBasicMaterial, PlaneBufferGeometry} from "three";
    import * as THREE from "three";
    import Emitter from "./Emitter.svelte";
    import Emitter2 from "./Emitter2.svelte";
    const scale = spring(1)

    const gradpic = new THREE.TextureLoader().load('/Assets/gradpic.jpg');

    let dn = Date.now()
    useFrame(() => (dn = Date.now()))

</script>


<Mesh
        position={{x: -720 + 2 * Math.sin(dn / 1000),y: 40 + 2 * Math.sin(dn / 1000),z: -750 + 2 * Math.sin(dn / 1000)}}
        geometry={new PlaneBufferGeometry(35, 50)}
        material={new MeshBasicMaterial({map: gradpic})}
/>

<Text
        text = "About Me"
        fontSize = {15}
        font="/Assets/Louis George Cafe Light.ttf"
        position = {{x: -690, y: 80, z: -750}}
        outlineBlur={1}
        color = {0x3affa2}
/>

<Text
        text = "I am a 3D software developer looking
to apply my skills."
        fontSize = {8}
        font="/Assets/Louis George Cafe.ttf"
        position = {{x: -700, y: 60, z: -800}}
        outlineBlur={.5}
        color = {0x3affa2}
/>

<Text
        text = "After creating a virtual reality video game for my senior design project,
I found a passion for 3D design, specifically in the web browser.
I dedicate most of my time to creating 3D worlds within the browser
and learning all the skills that this entails. My hope is to become
part of a team that shares my interest and create something amazing."
        fontSize = {5}
        font="/Assets/Louis George Cafe.ttf"
        position = {{x: -700, y: 30, z: -800}}
        outlineBlur={.3}
        color = {0x3affa2}
/>

<Emitter/>
<Emitter2/>