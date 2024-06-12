<script lang=ts>
    import ProjectTile from "$lib/components/ProjectTile.svelte";
    import { urlFor } from "$lib/sanity";
    export let data;

</script>

<svelte:head>
    <title>Projects - Ethan McIntyre</title>
</svelte:head>

<div class="py-8 px-4 md:px-32 mx-auto">
    <h2 class="mb-4 md:mr-6 font-bold font-deco text-5xl lg:text-left text-center">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 py-2">
        {#each data?.projects as project}
        <ProjectTile
            url={`projects/${project?.slug.current}`} 
            title={project?.title} 
            year={new Date(project?.date).getFullYear().toString()}
            desc={project?.summary}
            image={urlFor(project.cover.asset).width(600).height(500).url()}
        />
        {/each}
    </div>
</div>
