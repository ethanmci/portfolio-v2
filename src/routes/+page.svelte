<script lang="ts">
	import ProjectTile from "$lib/components/ProjectTile.svelte";
    import NameType from "$lib/assets/name_stacked.png"
    import EthanImg from "$lib/assets/photo_of_me.jpg"
    import { PortableText } from "@portabletext/svelte";
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<svelte:head>
    <title>Home - Ethan McIntyre</title>
</svelte:head>


<div class="h-full grid grid-cols-3 overflow-hidden bg-stone-50">
    <div class="col-span-1 overflow-hidden relative border-r-2">
        <img class="object-cover h-full" src={EthanImg} alt="A photo of Ethan McIntyre"/>
    </div>
    <div class="col-span-2 mx-auto my-auto text-xl">
        <h2 class="text-7xl font-deco font-bold italic underline mb-2 tracking-tight subpixel-antialiased">Hello!</h2>
        <PortableText value={data?.content[0]?.content || null}></PortableText>

    </div>
</div>

<style lang="postcss" scoped>

    a {

    }

</style>