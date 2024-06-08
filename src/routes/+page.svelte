<script lang="ts">
	import ProjectTile from "$lib/components/ProjectTile.svelte";
    import NameType from "$lib/assets/name_stacked.png"
    import EthanImg from "$lib/assets/photo_of_me.jpg"
</script>

<svelte:head>
    <title>Home - Ethan McIntyre</title>
</svelte:head>


<div class="h-full grid grid-cols-3 overflow-hidden">
    <div class="col-span-1 overflow-hidden relative">
        <img class="object-cover h-full" src={EthanImg} alt="A photo of Ethan McIntyre"/>
    </div>
<div class="col-span-2">
    <p id="intro-text">Hi My Name is Ethan!!!</p>
</div>
</div>
