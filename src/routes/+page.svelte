

<script lang="ts">

  import { Canvas } from '@threlte/core'
  import { World } from '@threlte/rapier'
  import Scene from './Scene.svelte'
  import { onMount } from 'svelte';

  let widthScreen = 1250;
  let heightScreen = 750;

  onMount(async () => {
    if(typeof window !== 'undefined') {
      widthScreen = window.innerWidth;
      heightScreen = window.innerHeight;
    }
  });

</script>

<svelte:window bind:innerWidth={widthScreen} bind:innerHeight={heightScreen} />

<div>
  <Canvas size={{width: widthScreen, height: heightScreen}}>
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