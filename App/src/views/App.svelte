<script>
    import { Init } from '../state/render';
    import {onMount} from 'svelte'
    let count = 0;
    let message = 'waiting on confirmation...';

    function start() {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              message = 'running :)';
              Init();
            }
          })
          .catch(() => message = 'an error occured or you did not grant permission :(');
      } else {
        message = 'your device doesnt have a magnetometer :(';
              message = 'running :)';
              Init();
      }
    }

    onMount(() => {
      const interval = setInterval(() => count++, 1000)
      return () => {
        clearInterval(interval)
      }
    })
</script>

{#if message != 'running :)'}
<div class="App">
  <h1>230.</h1>
  <p>This game is designed for mobile only. It uses your phons accelerometer (the tilt sensor!) to make things a bit more wacky and quite a lot more fun! :)</p>
  <p>Upong pressing start, your browser will prompt you to allow it access to your accelerometer.</p>
  <button type="button" on:click={start} class="btn btn-outline-success">Start</button>
  <p>{message}</p>
</div>
{/if}

<style>
  .App {
    display: flex;
    flex-direction: column;

    padding: 25px;

    position: fixed;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    background-color: #181d22;
  }
</style>
