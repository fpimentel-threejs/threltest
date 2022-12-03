

<script lang="ts">

  import { Canvas } from '@threlte/core'
  import { World } from '@threlte/rapier'
  import Scene from './Scene.svelte'

  let widthScreen = 1250;
  let heightScreen = 750;

  if(typeof window !== 'undefined') {
    widthScreen = window.innerWidth - 10;
    heightScreen = window.innerHeight - 20;
  }

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    widthScreen = 1250;
    heightScreen = 750;
  }

</script>





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