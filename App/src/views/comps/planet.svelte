<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { worldToMap } from "../../state/Map";
    import type { Planet } from "../../state/Planet";
    import type { GameState } from "../../state/GameState";

    export let state: GameState;
    export let planet: Planet;

    const dispatch = createEventDispatcher();

    function onSelect() {
        state.selected = planet;

        dispatch('select', {
            index: planet.id 
        });
    }
</script>

<div class="container" on:click={onSelect} style="transform: translate({worldToMap(planet.position).x}px, {worldToMap(planet.position).y}px);">
    
</div>

<style>
    .container {
        border-radius: 40px;
        
        width: 80px;
        height: 80px;

        position: absolute;

        background-color: red;
    }
</style>
