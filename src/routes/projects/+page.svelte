<script lang="ts">
  import ProjectTile from "$lib/components/ProjectTile.svelte";
  import { onMount } from "svelte";
  import { urlFor } from "$lib/sanity";
  import type { PageData } from "./$types";

  interface Props {
    data: {
      projects: Project[];
    };
  }

  const { data }: Props = $props();

  let ready = $state(false);
  onMount(() => {
    ready = true;
  });
</script>

<svelte:head>
  <title>Projects - Ethan McIntyre</title>
</svelte:head>

<section class="project-main">
  {#if ready}
    {#each data?.projects as project, index}
      <ProjectTile
        transitionDelay={10 * index}
        url={`projects/${project?.slug.current}`}
        title={project?.title}
        year={new Date(project?.date).getFullYear().toString()}
        desc={project?.summary}
        image={urlFor(project.cover.asset).width(600).height(500).url()}
      />
    {/each}
  {/if}
</section>

<style>
  .project-main {
    background-color: var(--bg-primary);
    max-width: 100%;
    padding: var(--spacing-md);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: var(--spacing-md);
  }
</style>
