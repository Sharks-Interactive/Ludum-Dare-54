<script lang="ts">
    import {onMount} from 'svelte'

    let count: number = 0

    onMount(() => {
      const interval = setInterval(() => count++, 1000)
      return () => {
        clearInterval(interval)
      }
    })
</script>

<div class="App">
</div>

<style>
  .App {
    display: grid;
    height: 100vh;

    max-width: 425px;

    margin-right: auto;
    margin-left: auto;

    background-color: #181d22;

    grid-template-rows: 0.2fr 3fr 1.05fr;
  }
</style>
