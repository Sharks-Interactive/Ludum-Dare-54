<script lang="ts">
    import type { GameState } from "../../state/GameState";

    export let state: GameState;
</script>

<div class="container {state.selected != undefined ? 'active' : ''}">
    {#if state.selected != undefined}
        <div class="handle"></div>
    {/if}
    <h1>{state.selected?.name ?? 'Nothing selected'}</h1>

    <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card border-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<style>
    .container {
        border-radius: 30px 30px 0 0;
        background-color: #14191d;

        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;

        display: flex;
        flex-direction: column; 

        align-items: center;
        justify-content: start;

        padding: 5px;

        overflow-y: scroll;

        z-index: 2;
        max-height: 50px;

        transition-duration: 0.25s;
    }

    .active {
        max-height: 50vh;
        padding-top: 15px;

        transition-duration: 0.25s;
    }

    .handle {
        position: fixed;

        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 5px;

        margin: 10px;

        width: 30%;
        height: 5px;
    }
</style>
