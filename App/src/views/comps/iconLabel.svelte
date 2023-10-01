<script lang="ts">
    export let icon = '';
    export let value = 0;
</script>

<div class="container">
    <h2>{icon}</h2>
    <h3>{value}</h3>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;

        gap: 5px;
        padding: 0;
    }

    p {
        padding: 0;
        margin: 0;
    }
</style>
