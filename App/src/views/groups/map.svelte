<script lang="ts">
    import type { GameState } from "../../state/GameState";
    import Planet from "../comps/planet.svelte";
    import { Vector } from "../../state/Vector";
    import { createEventDispatcher } from "svelte";
    import Connections from "../comps/connections.svelte";
    import Ship from "../comps/ship.svelte";
    export let state: GameState;

    const dispatch = createEventDispatcher();

    let offset = new Vector(-5000, -5000);

    let mouseStart = new Vector();
    let mousePos = new Vector();

    function start (event: any) {
        if (event instanceof PointerEvent) {
            let pointer = event as PointerEvent;

            mouseStart.x = pointer.clientX;
            mouseStart.y = pointer.clientY;

            mouseStart = mouseStart.subtract(offset);
        }
    }

    function drag (event: any) {
        if (event instanceof PointerEvent) {
            let pointer = event as PointerEvent;

            if (pointer.buttons == 0) return;

            mousePos.x = pointer.clientX;
            mousePos.y = pointer.clientY;

            offset = mousePos.subtract(mouseStart);

            event.preventDefault();
        }
    }

    function select (event: any) {
        if (event.detail.index != undefined) {
            dispatch('selection', event.detail);
            return;
        }

        dispatch('selection', { index: -1 });
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="map" class="container" style="transform: translate({offset.x}px, {offset.y}px);" on:pointermove={drag} on:pointerdown={start} on:click={select}>
    {#each state.planets as planet}
        <Planet {planet} {state} on:selection={select}></Planet>
    {/each}
    <Connections {state}></Connections>
    {#each state.ships as ship}
       <Ship {ship} {state} on:selection={select}></Ship> 
    {/each}
</div>

<style>
    .container {
        width: 10000px;
        height: 10000px;

        max-width: none;

        position: fixed;
        margin: 0;

        cursor: move;
        z-index: 0;

        touch-action: none;
    }
</style>
