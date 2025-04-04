<script lang="ts">
    export let images: string[]
</script>
{#if images.length > 0}
    {#each images as image} 
    <!-- svelte-ignore a11y-missing-attribute -->
        <img class="border-2 border-stone-50" src={image}>
    {/each}
{/if}