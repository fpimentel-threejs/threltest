<script>
    import {GLTF, Text} from "@threlte/extras";
    import {spring} from "svelte/motion";
    import {useFrame} from "@threlte/core";

    let dn = Date.now()
    useFrame(() => (dn = Date.now()))
    let scaleGit = spring(40);
    let scaleLI = spring(1.5);
    let scaleInsta = spring(15);
</script>

<Text
        text="Contact Me"
        fontSize= {15}
        font="/Assets/Louis George Cafe Light.ttf"
        position={{x:690, y:-80, z:-750}}
        outlineBlur={1}
        color = {0x58F7CD}
/>

<GLTF
        interactive
        url='/Assets/github.gltf'
        on:pointerenter={() => ($scaleGit = 50)}
        on:pointerleave={() => ($scaleGit = 40)}
        on:click={() => window.location = "https://github.com/fpimentel-threejs"}
        scale = {$scaleGit}
        position={{x:660 + 2 * Math.sin(dn / 1000), y:-140 + 2 * Math.sin(dn / 1000), z:-720 + 2 * Math.sin(dn / 1000)}}
/>

<GLTF
        interactive
        url='/Assets/linkedin.gltf'
        on:pointerenter={() => ($scaleLI = 2)}
        on:pointerleave={() => ($scaleLI = 1.5)}
        on:click={() => window.location = "https://www.linkedin.com/in/fernando-pimentel-935143230/"}
        scale = {$scaleLI}
        position={{x:720 + 2 * Math.sin(dn / 1000), y:-140 + 2 * Math.sin(dn / 1000), z:-720 + 2 * Math.sin(dn / 1000)}}
/>

<GLTF
        interactive
        url='/Assets/instagramlogo.gltf'
        on:pointerenter={() => ($scaleInsta = 18)}
        on:pointerleave={() => ($scaleInsta = 15)}
        on:click={() => window.location = "https://www.instagram.com/rxnando/"}
        scale = {$scaleInsta}
        position={{x:770 + 2 * Math.sin(dn / 1000), y:-140 + 2 * Math.sin(dn / 1000), z:-720 + 2 * Math.sin(dn / 1000)}}
/>