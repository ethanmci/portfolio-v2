<script lang="ts">
  import ProjectTile from "$lib/components/ProjectTile.svelte";
  import { onMount } from "svelte";
  import { urlFor } from "$lib/sanity";
  import { onNavigate } from "$app/navigation";

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

  onNavigate((nav) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await nav.complete;
      });
    });
  });
</script>

<svelte:head>
  <title>Projects - Ethan McIntyre</title>
  <meta name="description" content="A collection of projects that I've worked on!">
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
        image={urlFor(project.cover.asset)
          .width(1000)
          .height(1000)
          .format("webp")
          .quality(100)
          .url()}
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

  @media only screen and (max-width: 600px) {
    .project-main {
      grid-template-columns: 1fr;
    }
  }
</style>
