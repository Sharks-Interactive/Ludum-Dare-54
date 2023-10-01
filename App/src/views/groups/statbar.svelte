<script>
    import IconLabel from "../comps/iconLabel.svelte";

</script>

<div class="container">
    <IconLabel icon="💵"></IconLabel>
    <IconLabel icon="🔌"></IconLabel>
    <IconLabel icon="👍"></IconLabel>
    <IconLabel icon="💎"></IconLabel>
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
