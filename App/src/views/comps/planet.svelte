<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { worldToMap } from "../../state/Map";
    import { Planet } from "../../state/Planet";
    import type { GameState } from "../../state/GameState";

    export let state: GameState;
    export let planet: Planet;

    const dispatch = createEventDispatcher();

    function onSelect(event: Event) {
        dispatch('selection', {
            index: planet.id 
        });

        event.stopPropagation();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
    class="container {state.selected?.id == planet.id && state.selected instanceof Planet ? 'selected' : ''}" on:click={onSelect} 
    style="
        transform: translate({worldToMap(planet.position).x}px, {worldToMap(planet.position).y}px);
        width: {planet.size.x}px; height: {planet.size.y}px; border-radius: {planet.size.x / 2}px
    "
>
    
</div>

<style>
    .container {
        position: absolute;
        z-index: 1;

        cursor: pointer;

        background-image: url('assets/planet.png');

        outline: 2px solid rgba(255, 255, 255, 0);
        outline-offset: 10px;

        transition-duration: 0.25s;
    }

    .selected {
        transform: scale(1.05);
        filter: brightness(200%);

        outline: 2px solid white;

        transition-duration: 0.25s;
    }
</style>
