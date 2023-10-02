<script lang="ts">
    import {onMount} from 'svelte'
    import Statbar from './groups/statbar.svelte';
    import Map from './groups/map.svelte';
    import Bottomsheet from './groups/bottomsheet.svelte';
    import { GameState } from '../state/GameState';
    import { Ship } from '../state/Ship';
    import { Planet } from '../state/Planet';

    let count: number = 0
    let state: GameState = new GameState();

    function changeSelection(event: any) {
      let prevSelected = state.selected;

      state.selected = event.detail.index > state.planets.length - 1 ?
        state.ships[event.detail.index - state.planets.length] :
        state.planets[event.detail.index];

      if (prevSelected instanceof Ship && state.selected instanceof Planet) {
        if (!prevSelected.location.connections.includes(state.selected.id)) return;
        state.ships[prevSelected.id].target = state.selected as Planet;
        state.selected = undefined;
      }
    }

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
  <Map {state} on:selection={changeSelection}></Map>
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
