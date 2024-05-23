<script lang=ts>
    import ProjectTile from "$lib/components/ProjectTile.svelte";
    import { client } from "$lib/sanity";
    import imageUrlBuilder from '@sanity/image-url'
    export let data;

    const builder = imageUrlBuilder(client)
    function urlFor(source: string) {
        return builder.image(source)
    }

    console.log(data)
</script>

<svelte:head>
    <title>Projects - Ethan McIntyre</title>
</svelte:head>

<div class="bg-gradient-to-b from-neutral-300 to-indigo-50 pt-4">
    <h2 class="mb-4 mr-6 pl-14 font-bold text-3xl">Projects</h2>
    <div class="grid grid-cols-3 gap-2 px-14 py-2">
        {#each data?.projects as project}
        <ProjectTile
            url="" 
            title={project?.title} 
            year={new Date(project?.date).getFullYear().toString()}
            desc={project?.summary}
            image={urlFor(project.cover.asset).width(600).height(500).url()}
        />
        {/each}
    
    </div>
</div>
