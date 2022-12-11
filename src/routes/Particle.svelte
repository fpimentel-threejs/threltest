<script lang="ts" context="module">


</script>

<script lang="ts">
    import { Mesh, PositionalAudio, type Position, type Rotation } from '@threlte/core'
    import { Collider, RigidBody, type ContactEvent } from '@threlte/rapier'
    import { writable } from 'svelte/store'
    import { BoxGeometry, MeshStandardMaterial } from 'three'
    import {GLTF} from "@threlte/extras";

    const material = new MeshStandardMaterial()
    export const muted = writable(true)

    export let position: Position | undefined = undefined
    export let rotation: Rotation | undefined = undefined

</script>

<RigidBody type={'dynamic'} {position} {rotation}>


    <Collider
            contactForceEventThreshold={30}
            restitution={0.4}
            shape={'cuboid'}
            args={[0.5, 0.5, 0.5]}
    />
    <GLTF
            url= '/Assets/tomatoball.gltf'
            scale={400}
    />
</RigidBody>