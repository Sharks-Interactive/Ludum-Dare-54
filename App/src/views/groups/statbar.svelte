<script lang="ts">
    import type { GameState } from "../../state/GameState";
    import IconLabel from "../comps/iconLabel.svelte";

    export let state: GameState;
</script>

<div class="container">
    <IconLabel icon="💵" value="{state.stats[0]}"></IconLabel>
    <IconLabel icon="🔌" value="{state.stats[1]}"></IconLabel>
    <IconLabel icon="👍" value="{state.stats[2]}"></IconLabel>
    <IconLabel icon="💎" value="{state.stats[3]}"></IconLabel>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;

        background-color: #14191d;
        filter: drop-shadow(0px 5px 5px #08051641);
        
        z-index: 1;
        padding: 25px;
    }
</style>
