<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { GameState } from "../../state/GameState";
    import type { Building } from "src/state/Building";
    import { Planet } from "../../state/Planet";

    export let state: GameState;
    $: earnings = state.selected instanceof Planet ? state.selected?.calculateEarnings(state.selected.built) : [];

    const dispatch = createEventDispatcher();

    function purchaseBuilding(building: Building) {
        if (state.stats[0] < building.cost[0]) return;

        dispatch('purchase', {
            building: building
        });
    }
</script>

<div class="container {state.selected != undefined ? 'active' : ''}">
    {#if state.selected != undefined}
        <div class="handle"></div>
    {/if}
    <h1 style="margin-top: 15px; margin-bottom: 0">{state.selected?.name ?? 'Nothing selected'}</h1>
    <p style="margin-top: 0;" class="text-secondary">{state.selected instanceof Planet ? state.selected?.type + ' planet' : '1st armoured division'}</p>
    <p class="card-text text-white">
        {state.selected instanceof Planet ? 
        `💵${earnings[0] > 0 ? '+' : '-'}${earnings[0]}/turn 🔌${earnings[1] > 0 ? '+' : '-'}${earnings[1]}/turn 👍${earnings[2] > 0 ? '+' : '-'}${earnings[2]}/turn 💎${earnings[3] > 0 ? '+' : '-'}${earnings[3]}/turn` :
        state.selected?.target == undefined ? `stationed at ${state.selected?.location.name}` : `heading to ${state.selected?.target.name}`
        }
    </p>

    <div class="cards-container">
    {#if state.selected != undefined}
        {#each state.selected.buildings as building}
            <div class="card border-secondary mb-3 bg" style="max-width: 90%;">
                <div class="card-header bg text-start d-flex flex-row justify-content-between">
                    <div class="card-header">{building.category}</div>
                    <button type="button" on:click={() => purchaseBuilding(building)} class="btn btn-outline-{state.stats[0] >= building.cost[0] ? 'success' : 'danger'} align-end">Buy ${building.cost[0]}💵</button>
                </div>
                <div class="card-body text-secondary text-start">
                    <h5 class="card-title">{building.title}</h5>
                    <p class="card-text">{building.description}</p>

                    <p class="card-text text-white">💵{building.upkeep[0] > 0 ? '+' : '-'}{building.upkeep[0]}/turn 🔌{building.upkeep[1] > 0 ? '+' : '-'}{building.upkeep[1]}/turn 👍{building.upkeep[2] > 0 ? '+' : '-'}{building.upkeep[2]}/turn 💎{building.upkeep[3] > 0 ? '+' : '-'}{building.upkeep[3]}/turn</p>
                </div>
            </div>
        {/each}
    {/if}
    </div>
</div>

<style>
    .bg {
        background-color: #14191d !important;
    }

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

        z-index: 2;
        max-height: 55px;

        transition-duration: 0.25s;
    }

    .cards-container {
        width: 100%;

        display: flex;
        flex-direction: column;

        align-items: center;
        
        overflow-y: scroll;
    }

    .active {
        max-height: 50vh;
        padding-top: 10px;

        transition-duration: 0.25s;
    }

    .handle {
        position: fixed;

        background-color: rgba(255, 255, 255, 0.219);
        border-radius: 5px;

        width: 30%;
        height: 5px;
    }
</style>
