<script lang="ts">
    import {onMount} from 'svelte'
    import Statbar from './groups/statbar.svelte';
    import Map from './groups/map.svelte';
    import Bottomsheet from './groups/bottomsheet.svelte';
    import { GameState } from '../state/GameState';

    let count: number = 0
    let state: GameState = new GameState();

    onMount(() => {
      const interval = setInterval(() => count++, 1000)
      return () => {
        clearInterval(interval)
      }
    })
</script>

<div class="App">
  <Statbar {state}></Statbar>
  <div></div>
  <Map {state}></Map>
  <Bottomsheet {state}></Bottomsheet>
</div>

<style>
  .App {
    display: grid;
    height: 100vh;

    max-width: 425px;

    margin-right: auto;
    margin-left: auto;

    background-color: #181d22;

    grid-template-rows: 0.2fr 3fr 1.05fr;
  }
</style>
