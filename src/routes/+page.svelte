<script context="module">
  export const prerender = true;
</script>

<script lang="ts">

  import { Canvas } from '@threlte/core'
  import { World } from '@threlte/rapier'
  import Scene from './Scene.svelte'

</script>





<div>
  <Canvas size={{width:1250, height: 700}}>
    <World>
      <Scene/>
    </World>
  </Canvas>
</div>

<style>
  
  div {
      height: 100%;
      width: 100%;
  }


</style>