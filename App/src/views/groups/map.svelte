<script lang="ts">
    import type { GameState } from "src/state/GameState";

    import Planet from "../comps/planet.svelte";
    import { Vector } from "../../state/Vector";
    import { onMount } from "svelte";
    export let state: GameState;

    let offset = new Vector();

    let mouseStart = new Vector();
    let mousePos = new Vector();

    let dragging = false;

    function start (event: any) {
        if (event instanceof TouchEvent) {
            let touch = event as TouchEvent;

            mouseStart.x = touch.touches[0].clientX;
            mouseStart.y = touch.touches[0].clientY;

            mouseStart.add(offset);
        }
        if (event instanceof MouseEvent) {
            let mouse = event as MouseEvent;

            mouseStart.x = mouse.clientX;
            mouseStart.y = mouse.clientY;

            mouseStart.add(offset);

            dragging = true;
        }
    }

    function drag (event: any) {
        if (event instanceof TouchEvent) {
            let touch = event as TouchEvent;

            mousePos.x = touch.touches[0].clientX;
            mousePos.y = touch.touches[0].clientY;

            offset = mousePos.subtract(mouseStart);

            event.preventDefault();
        }
        else if (event instanceof MouseEvent) {
            let mouse = event as MouseEvent;
            if (!dragging) return;

            mousePos.x = mouse.clientX;
            mousePos.y = mouse.clientY;

            offset = mousePos.subtract(mouseStart);

            event.preventDefault();
        }
        console.log(event);
    }
</script>

<div id="map" class="container" style="transform: translate({offset.x}px, {offset.y}px);" on:touchmove={drag} on:mousemove={drag} on:touchstart={start} on:mousedown={start} on:mouseup={() => dragging = false}>
    {#each state.planets as planet}
        <Planet {planet}></Planet>
    {/each}
</div>

<style>
    .container {
        cursor: move;

        z-index: 0;
    }
</style>
