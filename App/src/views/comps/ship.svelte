<script lang="ts">
    import { worldToMap } from "../../state/Map";
    import type { GameState } from "../../state/GameState";
    import { Ship } from "../../state/Ship";
    import { Vector } from "../../state/Vector";
    import { createEventDispatcher } from "svelte";

    export let state: GameState;
    export let ship: Ship;

    const dispatch = createEventDispatcher();

    function select(event: Event) {
        dispatch('selection', {
            index: state.planets.length + ship.id
        });

        event.stopPropagation();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container {state.selected?.id == ship.id && state.selected instanceof Ship ? 'selected' : ''}" on:click={select} style="transform: translate(
    {worldToMap(ship.location.position.add(ship.location.size.divided(2)).add(new Vector(0, 10))).x}px,
    {worldToMap(ship.location.position.add(ship.location.size.divided(2)).add(new Vector(0, 10))).y}px
);">

</div>

<style>
    .container {
        width: 50px;
        height: 50px;

        cursor: pointer;
        background-image: url('assets/ships.png');
        background-size: contain;

        z-index: 2;
        position: absolute;

        transition-duration: 0.25s;
    }

    .selected {
        transition-duration: 0.25s;
    }
</style>
