<script lang="ts">
    import { mapToWorld, worldToMap } from "../../state/Map";
    import type { GameState } from "../../state/GameState";

    export let state: GameState;
</script>

{#each state.planets as planet}
    {#each planet.connections as connection}
        <svg width="10000" height="10000" style="position: absolute; top: 0px; left: 0px;">
            <line 
                x1="{worldToMap(planet.position.add(planet.size.divided(2))).x}" y1="{worldToMap(planet.position.add(planet.size.divided(2))).y}"
                x2="{worldToMap(state.planets[connection].position.add(state.planets[connection].size.divided(2))).x}" y2="{worldToMap(state.planets[connection].position.add(state.planets[connection].size.divided(2))).y}"
                stroke="{state.ships.find(e => e.target?.id == connection)?.location?.id == planet?.id ? 'blue' : 'white'}" stroke-width="5"/>
        </svg>
    {/each} 
{/each}
