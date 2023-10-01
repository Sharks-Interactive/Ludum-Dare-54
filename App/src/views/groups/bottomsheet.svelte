<script lang="ts">
    import type { GameState } from "../../state/GameState";

    export let state: GameState;
</script>

<div class="container {state.selected != undefined ? 'active' : ''}">

</div>

<style>
    .container {
        border-radius: 30px 30px 0 0;
        background-color: #14191d;

        z-index: 2;
    }

    .active {
        height: 50vh;
    }
</style>
