<script lang="ts">
    import type { GameState } from "src/state/GameState";
    import Planet from "../comps/planet.svelte";
    import { Vector } from "../../state/Vector";
    export let state: GameState;

    let offset = new Vector(-5000, -5000);

    let mouseStart = new Vector();
    let mousePos = new Vector();

    function start (event: any) {
        if (event instanceof PointerEvent) {
            let pointer = event as PointerEvent;

            mouseStart.x = pointer.clientX;
            mouseStart.y = pointer.clientY;

            mouseStart.subtract(offset);
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
</script>

<div id="map" class="container" style="transform: translate({offset.x}px, {offset.y}px);" on:pointermove={drag} on:pointerdown={start}>
    {#each state.planets as planet}
        <Planet {planet}></Planet>
    {/each}
</div>

<style>
    .container {
        width: 10000px;
        height: 10000px;

        max-width: none;

        position: fixed;
        display: flex;
        
        align-items: center;
        justify-content: center;

        flex-direction: column;

        gap: 0;

        cursor: move;
        z-index: 0;

        touch-action: none;
    }
</style>
